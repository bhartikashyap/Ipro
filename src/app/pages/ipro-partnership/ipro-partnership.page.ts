import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from '@capacitor/device';
import { NavController, Platform } from '@ionic/angular';
declare let _cpmp: any;
declare let cincopa: any;
@Component({
  selector: "app-ipro-partnership",
  templateUrl: "./ipro-partnership.page.html",
  styleUrls: ["./ipro-partnership.page.scss"],
})
export class IproPartnershipPage implements OnInit {
  public folder: string;
  playerId = "cincopa_16381961901702";
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

  ngAfterViewInit() {
    this.initPlayer("A4HAcLOLOO68!AkADF107s8tQ");
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
  specificTime() {
    if (this.playerAPI()) {
      this.playerAPI().setCurrentTime(42);
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
        console.log(gallery.args);
      },
      filter: "runtime.on-args",
    });
    cincopa.registeredFunctions.push({
      func(name, data, gallery) {},
      filter: "video.load",
    });
    cincopa.registeredFunctions.push({
      func(name, data, gallery) {
        console.log("Change detect");
        console.log(gallery);
      },
      filter: "video.change",
    });
    cincopa.registeredFunctions.push({
      func(name, data, gallery) {
        const stats = gallery.get_video_play_stats(data);
        that.currentProgress = stats;
        that.showUpdate = true;
        that.cdr.detectChanges();
      },
      filter: "video.pause",
    });
    cincopa.registeredFunctions.push({
      func(name, data, gallery) {
        const stats = gallery.get_video_play_stats(data);
        that.cdr.detectChanges();
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

  enterFullScreen() {
    this.playerAPI() && this.playerAPI().enterFullScreen();
  }

  exitFullScreen() {
    this.playerAPI() && this.playerAPI().exitFullScreen();
  }

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private platform: Platform,
    private navController: NavController
  ) {}
}
