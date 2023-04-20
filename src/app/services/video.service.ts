import { Injectable } from '@angular/core';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController,NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { Platform } from '@ionic/angular';
declare let _cpmp: any;
declare let cincopa: any;

@Injectable({
  providedIn: "root",
})
export class VideoService {
  
  public folder: string;
  playerId = '';
  width = 0;
  cpo: any = [];
  showUpdate = false;
  currentProgress: any = {
    completion_percent: 0,
    completion_sec: 0,
    current_completion_percent: 0,
    current_progress_sec: 0,
    duration_sec: 0,
    hm_range: '0-7:2,8-13:3,14:2,15-16',
  };
  tmpCurrentProgress: any = {
    completion_percent: 0,
    completion_sec: 0,
    current_completion_percent: 0,
    current_progress_sec: 0,
    duration_sec: 0,
    hm_range: '0-7:2,8-13:3,14:2,15-16',
  };
  info: any;
  videoType:any;
  videoId:any
  videoWatchedCompletely:any=false;
  constructor(
    private toastController: ToastController,
    private loadingController: LoadingController,
    private router: Router,
    private alertController: AlertController,
    private navCtrl:NavController,
    private apiSer:ApiService,
    private screenOrientation: ScreenOrientation,
   //  private cdr: ChangeDetectorRef,
    private platform: Platform
  ) {}

 

  // ngOnInit() {
  //   this.platform.ready().then(async () => {
  //     console.log('Width: ' + this.platform.width());
  //     this.width = this.platform.width();
  //      this.info = await Device.getInfo();
  //      console.log(this.info);
  //     console.log('Height: ' + this.platform.height());
  //   });
  //   this.screenOrientation.onChange().subscribe(() => {
  //     console.log('screen change');
  //     if (this.playerAPI()) {
  //       console.log(this.playerAPI());
  //       console.log(this.screenOrientation.type);
  //       //  if (
  //       //    this.screenOrientation.type ===
  //       //      this.screenOrientation.ORIENTATIONS.LANDSCAPE ||
  //       //    this.screenOrientation.type ===
  //       //      this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY ||
  //       //    this.screenOrientation.type ===
  //       //      this.screenOrientation.ORIENTATIONS.LANDSCAPE_SECONDARY
  //       //  ) {
  //       //    console.log('landscape');
  //       //    if (this.playerAPI().isFullScreen()) {
  //       //      console.log('full screen');
  //       //    } else {
  //       //      console.log('not full screen');
  //       //    }
  //       //  } else {
  //       //     console.log('portrait');
  //       //  }
  //     }
  //   });
  // }
  playerAPI() {
    let galleryWrapID = this.playerId;
    if (
      cincopa &&
      cincopa.getGalleryById(galleryWrapID) &&
      cincopa.getGalleryById(galleryWrapID).getSkin().go.playerAPI
    ) {
      return cincopa.getGalleryById(galleryWrapID).getSkin().go.playerAPI;
    } else {
      return false;
    }
  }
  specificTime(time) {
    if (this.playerAPI()) {
      this.playerAPI().setCurrentTime(time);
    }
  }
  initPlayer(id,playerId,cdr) {
    this.playerId = playerId;
    let samePageVideo = false;
    this.videoWatchedCompletely = false;
    let that = this;
    cincopa =  {};
    cincopa.analytics_persistent = { mode: "localstorage" };
    cincopa.registeredFunctions = cincopa.registeredFunctions || [];
    cincopa.registeredFunctions.push({
      func(name, data, gallery) {
        const stats = gallery.get_video_play_stats(data);
        that.tmpCurrentProgress = stats;
        cdr.detectChanges();
        let onelessSec = parseInt(that.tmpCurrentProgress.current_progress_sec) +1 ;
        // if(that.tmpCurrentProgress.current_progress_sec == that.tmpCurrentProgress.duration_sec || onelessSec == that.tmpCurrentProgress.duration_sec ){
        //   that.pauseVideo();
        // }
        if(that.tmpCurrentProgress.current_progress_sec == 100  ){
           that.videoWatchedCompletely = true;
        }
      },
      filter: "video.timeupdate",
    });
    cincopa.registeredFunctions.push({
      func(name, data, gallery) {
        // if (that.info.model === "iPad") {
        //   gallery.args.fullscreen_button = false;
        // }
        gallery.args.gear_button = false;
        const stats = gallery.get_video_play_stats(data);
        that.getCurrent(stats);
      },
      filter: "runtime.on-args",
    });
    cincopa.registeredFunctions.push({
      func(name, data, gallery) {
        
        const stats = gallery.get_video_play_stats(data);
        that.getCurrent(stats);
        // if(stats.current_completion_percent != 100){
        //   that.getVideoDur(that.videoId);
        // }
        samePageVideo = false;
        // console.log("load",stats)
      },
      filter: "video.load",
    });
    cincopa.registeredFunctions.push({
      func(name, data, gallery) {
         const stats = gallery.get_video_play_stats(data);
        that.getCurrent(stats);
      },
      filter: "video.change",
    });
    cincopa.registeredFunctions.push({
      func(name, data, gallery) {
        const stats = gallery.get_video_play_stats(data);
        that.currentProgress = stats;
        that.getCurrent(stats);
          that.saveVideoDur(that.videoId);
        that.showUpdate = true;
        cdr.detectChanges();
         console.log("pause",stats)
      },
      filter: "video.pause",
    });
    cincopa.registeredFunctions.push({
      func(name, data, gallery) {
        const stats = gallery.get_video_play_stats(data);
        that.videoWatchedCompletely = false;

        that.getCurrent(stats);
        cdr.detectChanges();
        if(stats.current_completion_percent != 100 && !samePageVideo ){
          that.getVideoDur(that.videoId);
        }
        samePageVideo = true;
        console.log("play",stats)
      },
      filter: "video.play",
    });

    this.cpo = [];
    this.cpo._object = this.playerId;
    this.cpo._fid = id;
    _cpmp.push(this.cpo);
    (() => {
      const cp = document.createElement("script");
      cp.type = "text/javascript";
      cp.async = true;
      cp.src = "https://rtcdn.cincopa.com/libasync.js";
      let c = document.getElementsByTagName("script")[0];
      c.parentNode.insertBefore(cp, c);
    })();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = event.target.innerWidth;
  }

  enterFullScreen() {
    this.playerAPI() && this.playerAPI().enterFullScreen();
  }

  exitFullScreen() {
    this.playerAPI() && this.playerAPI().exitFullScreen();
  }

  pauseVideo() {
    if(!this.videoWatchedCompletely){
      this.playerAPI() && this.playerAPI().pause();
      this.videoWatchedCompletely=false;
    }
   //  this.saveVideoDur(this.videoId);
  }
  
 async saveVideoDur(id) {
    let seconds = this.convertIntoSec();
    let data = {
      "videoId": id,
      "duration": seconds
    }

   await this.apiSer.saveVideo(data);

 
  }
  async getVideoDur(id) {
    if(!this.videoWatchedCompletely){

    let result: any = await this.apiSer.getVideo();
    if (result.status) {
      let timeString = result?.data[id-1].duration; // input string
      
      let arr = timeString.split(":"); // splitting the string by colon
      let secondsSting = Number(arr[0]) * 3600 +Number(arr[1]) * 60 + (+Number(arr[2]));
      let arr2 = result?.data[id-1].videoLength.split(":");
      let videoLengthSec = Number(arr2[0]) * 3600 +Number(arr2[1]) * 60 + (+Number(arr2[2]));
      if(secondsSting >= videoLengthSec){
        this.videoWatchedCompletely = true;
         this.pauseVideo();
         secondsSting = 0;
       // this.playerAPI() && this.playerAPI().play();
      }
      else{
        this.videoWatchedCompletely = false;
      }
      this.specificTime(secondsSting);

    }
    else {
     
    }

  }

  }

  getCurrent(stats) {
    this.currentProgress = stats;
  }

  convertIntoSec(){
    let seconds;
  if(this.videoWatchedCompletely){
    seconds = parseInt(this.currentProgress?.duration_sec) -1;

  }
  else{
    seconds = this.currentProgress?.current_progress_sec;

  }
    

      //seconds = currenttime;
     return new Date(seconds * 1000).toISOString().slice(11, 19);
  }

  langChange(lan,cdr){
    if(this.videoId != undefined){
        this.initPlayer(this.videoType[this.videoId].initPlayer,this.videoType[this.videoId].id,cdr);
    
    }
   
  }


}
