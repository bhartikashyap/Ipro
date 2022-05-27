import { Injectable } from '@angular/core';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController,NavController } from '@ionic/angular';
import { Network } from '@capacitor/network';
import { Router } from '@angular/router';
import { IonicSelectableComponent } from "@ionic-selectable/angular";
import { Storage } from '@capacitor/storage';
import { ApiService } from './api.service';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { Platform } from '@ionic/angular';
import { Device } from '@capacitor/device';
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
    completion_sec: 17,
    current_completion_percent: 10,
    current_progress_sec: 14,
    duration_sec: 164,
    hm_range: '0-7:2,8-13:3,14:2,15-16',
  };
  tmpCurrentProgress: any = {
    completion_percent: 0,
    completion_sec: 17,
    current_completion_percent: 10,
    current_progress_sec: 14,
    duration_sec: 164,
    hm_range: '0-7:2,8-13:3,14:2,15-16',
  };
  info: any;
  videoType:any;
  videoId:any
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
    let that = this;
    cincopa =  {};
    cincopa.analytics_persistent = { mode: "localstorage" };
    cincopa.registeredFunctions = cincopa.registeredFunctions || [];
    cincopa.registeredFunctions.push({
      func(name, data, gallery) {
        const stats = gallery.get_video_play_stats(data);
        that.tmpCurrentProgress = stats;
        cdr.detectChanges();
      },
      filter: "video.timeupdate",
    });
    cincopa.registeredFunctions.push({
      func(name, data, gallery) {
        if (that.info.model === "iPad") {
          gallery.args.fullscreen_button = false;
        }
        gallery.args.gear_button = false;
        const stats = gallery.get_video_play_stats(data);
        that.getCurrent(stats);
      },
      filter: "runtime.on-args",
    });
    cincopa.registeredFunctions.push({
      func(name, data, gallery) {
        console.log("i am ready");
        that.getVideoDur(that.videoId);
        const stats = gallery.get_video_play_stats(data);
        that.getCurrent(stats);
      },
      filter: "video.load",
    });
    cincopa.registeredFunctions.push({
      func(name, data, gallery) {
        console.log("Change detect");
         const stats = gallery.get_video_play_stats(data);
        that.getCurrent(stats);
        console.log(gallery);
      },
      filter: "video.change",
    });
    cincopa.registeredFunctions.push({
      func(name, data, gallery) {
        const stats = gallery.get_video_play_stats(data);
        that.currentProgress = stats;
        that.getCurrent(stats);
         that.saveVideoDur(this.videoId);
        that.showUpdate = true;
        cdr.detectChanges();
      },
      filter: "video.pause",
    });
    cincopa.registeredFunctions.push({
      func(name, data, gallery) {
        const stats = gallery.get_video_play_stats(data);
        that.getCurrent(stats);
        cdr.detectChanges();
        console.log("Change detect");
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
    this.playerAPI() && this.playerAPI().pause();
    console.log(this.currentProgress);
    this.saveVideoDur(this.videoId);
  }
  
 async saveVideoDur(id) {
  let seconds = this.convertIntoSec()
    console.log(seconds);
    let data = {
      "videoId": id,
      "duration": seconds
    }

    
   await this.apiSer.saveVideo(data);
  }
  async getVideoDur(id) {
    let result: any = await this.apiSer.getVideo();
    if (result.status) {
      let timeString = result?.data[id-1].duration; // input string
      let arr = timeString.split(":"); // splitting the string by colon
      // Number(arr[0]) * 3600 + 
      const secondsSting = Number(arr[0]) * 3600 +Number(arr[1]) * 60 + (+Number(arr[2]));
      this.specificTime(secondsSting);

    }
    else {
     // let seconds = this.convertIntoSec()
     // const formatedTime = new Date(seconds * 1000).toISOString().slice(11, 19);
      this.specificTime(0);
    }


  }

  getCurrent(stats) {
    this.currentProgress = stats;
    console.log(stats)
  }

  convertIntoSec(){
    let seconds;
    if(this.currentProgress?.current_progress_sec>0){
       seconds = this.currentProgress?.current_progress_sec;

    }
    else{
      seconds = 0;
    }
     return new Date(seconds * 1000).toISOString().slice(11, 19);
  }

  langChange(lan,cdr){
    if(this.videoId != undefined){
        this.initPlayer(this.videoType[this.videoId].initPlayer,this.videoType[this.videoId].id,cdr);
        console.log(this.videoType[this.videoId].initPlayer)
    
    }
   
  }


}
