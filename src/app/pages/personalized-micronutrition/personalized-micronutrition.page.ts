import { Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { Device } from "@capacitor/device";
import { UtilService } from 'src/app/services/util.service';
import { EnvironmentService } from 'src/app/services/environment.service';
import { session } from 'src/app/utility/message';
import { VideoService } from 'src/app/services/video.service';
import { ApiService } from 'src/app/services/api.service';
import { TranslateService } from '@ngx-translate/core';
import { ChangeDetectorRef,ChangeDetectionStrategy, Component, HostListener, OnInit,SimpleChanges } from '@angular/core';
import { CheckZipPage } from '../check-zip/check-zip.page';

declare let _cpmp: any;
declare let cincopa: any;
@Component({
  selector: "app-personalized-micronutrition",
  templateUrl: "./personalized-micronutrition.page.html",
  styleUrls: ["./personalized-micronutrition.page.scss"],
})
export class PersonalizedMicronutritionPage implements OnInit {
  public folder: string;
  public dashboardDatas:any=[];

  playerId =this.videoSer.videoType[1].id;
  width = 0;
  cpo: any = [];
  showUpdate = false;
  // currentProgress: any = {
  //   completion_percent: 0,
  //   completion_sec: 17,
  //   current_completion_percent: 10,
  //   current_progress_sec: 0,
  //   duration_sec: 164,
  //   hm_range: "0-7:2,8-13:3,14:2,15-16",
  // };
  // tmpCurrentProgress: any = {
  //   completion_percent: 0,
  //   completion_sec: 17,
  //   current_completion_percent: 10,
  //   current_progress_sec: 0,
  //   duration_sec: 164,
  //   hm_range: "0-7:2,8-13:3,14:2,15-16",
  // };
  info: any;

  constructor(private router: Router,
    private cdr: ChangeDetectorRef,
    private platform: Platform,
    private navController: NavController,
    private utility: UtilService,
    private envr: EnvironmentService,
    private videoSer: VideoService,
    private apiSer: ApiService,
    private translateService:TranslateService
  ) {
    console.log(this);
  }

  
   ionViewWillEnter() {
    this.getDashboard();
    this.videoSer.videoId = 1
    this.utility.setStorage(session.SELECTED_PLAN, this.envr.plans.bodyAnlaysis);

  }

  async getDashboard(){
    let loading = await this.utility.presentLoading();
    this.apiSer
      .prospectDashboard() 
      .then((res: any) => {
        loading.dismiss();
        let result=res;
        if(result.status){
          this.dashboardDatas = res.data;
          console.log(this.dashboardDatas )
        }
       
        console.log(res)
      })
    
  }

  ngAfterViewInit() {
    
    this.videoSer.initPlayer(this.videoSer.videoType[1].initPlayer,this.videoSer.videoType[1].id,this.cdr);
  }

  ngOnInit() {
  console.log( this.envr)
    this.platform.ready().then(async () => {
      console.log("Width: " + this.platform.width());
      this.width = this.platform.width();
      this.info = await Device.getInfo();
      console.log(this.info);
      console.log("Height: " + this.platform.height());
    });
  }
 
 
 
 async saveVideoDur() {
  this.videoSer.saveVideoDur( this.videoSer.videoId)

  }
  
 
  ionViewDidLeave() {
    this.videoSer.pauseVideo();
    
  }

  openBookingAnalysis() {
    // this.utility.goNext("/tabs/check-zip");
    this.utility.openPopup(CheckZipPage, "selectedTab", 'check-zip', true);
  }

}
