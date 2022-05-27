import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from '@capacitor/device';
import { NavController, Platform } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { EnvironmentService } from 'src/app/services/environment.service';
import { session } from 'src/app/utility/message';

import { VideoService } from 'src/app/services/video.service';
import { ApiService } from 'src/app/services/api.service';
declare let _cpmp: any;
declare let cincopa: any;
@Component({
  selector: "app-inteligent-trading",
  templateUrl: "./inteligent-trading.page.html",
  styleUrls: ["./inteligent-trading.page.scss"],
})
export class InteligentTradingPage implements OnInit {
  public folder: string;
  public plan:string;
  playerId = this.videoSer.videoType[3].id;
  width = 0;
  cpo: any = [];
  showUpdate = false;
  currentProgress: any = {
    completion_percent: 0,
    completion_sec: 17,
    current_completion_percent: 10,
    current_progress_sec: 14,
    duration_sec: 164,
    hm_range: "0-7:2,8-13:3,14:2,15-16",
  };
  tmpCurrentProgress: any = {
    completion_percent: 0,
    completion_sec: 17,
    current_completion_percent: 10,
    current_progress_sec: 14,
    duration_sec: 164,
    hm_range: "0-7:2,8-13:3,14:2,15-16",
  };
  info: any;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private platform: Platform,
    private navController: NavController,
    private utility: UtilService,
    private envr :EnvironmentService,
    private videoSer: VideoService,
    private apiSer: ApiService
  ) {
  }

  ionViewWillEnter(){
    this.utility.setStorage(session.SELECTED_PLAN,this.envr.plans.itrade);
   }
  // goBack() {
  //   this.navController.back();
  // }
  goNext(){
    this.utility.getPlanDetail(this.envr.plans.itrade);
    //this.router.navigate(["/tabs/book-analysis"]);
  }
  
  ngAfterViewInit() {
    this.initPlayer(this.videoSer.videoType[3].initPlayer);
  }

  ngOnInit() {
    this.platform.ready().then(async () => {
      console.log("Width: " + this.platform.width());
      this.width = this.platform.width();
      this.info = await Device.getInfo();
      console.log(this.info);
      console.log("Height: " + this.platform.height());
    });
  }
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
      // this.playerAPI().setCurrentTime(42);
      this.playerAPI().setCurrentTime(time);

    }
  }
  initPlayer(id) {
    let that = this;
    cincopa = cincopa || {};
    cincopa.analytics_persistent = { mode: "localstorage" };
    cincopa.registeredFunctions = cincopa.registeredFunctions || [];
    cincopa.registeredFunctions.push({
      func(name, data, gallery) {
        const stats = gallery.get_video_play_stats(data);
        that.tmpCurrentProgress = stats;
        that.cdr.detectChanges();
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
        that.getVideoDur();
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
        that.saveVideoDur();
        that.showUpdate = true;
        that.cdr.detectChanges();
      },
      filter: "video.pause",
    });
    cincopa.registeredFunctions.push({
      func(name, data, gallery) {
        const stats = gallery.get_video_play_stats(data);
        that.getCurrent(stats);
        that.cdr.detectChanges();
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

  

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.width = event.target.innerWidth;
  }
  getCurrent(stats) {
    this.currentProgress = stats;
    console.log(stats)
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
    this.saveVideoDur();
  }




 
 async saveVideoDur() {
  let seconds = this.convertIntoSec()
    console.log(seconds);
    let data = {
      "videoId": 3,
      "duration": seconds
    }

    
   await this.apiSer.saveVideo(data);
  }
  async getVideoDur() {
    let result: any = await this.apiSer.getVideo();
    if (result.status) {
      let timeString = result?.data[3].duration; // input string
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

  convertIntoSec(){
    let seconds = this.currentProgress?.current_progress_sec
     return new Date(seconds * 1000).toISOString().slice(11, 19);
  }

  ionViewDidLeave() {
    this.pauseVideo();
    
  }
}

