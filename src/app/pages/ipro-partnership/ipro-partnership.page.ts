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
  // currentProgress: any = {
  //   completion_percent: 0,
  //   completion_sec: 17,
  //   current_completion_percent: 10,
  //   current_progress_sec: 14,
  //   duration_sec: 164,
  //   hm_range: "0-7:2,8-13:3,14:2,15-16",
  // };
  // tmpCurrentProgress: any = {
  //   completion_percent: 0,
  //   completion_sec: 17,
  //   current_completion_percent: 10,
  //   current_progress_sec: 14,
  //   duration_sec: 164,
  //   hm_range: "0-7:2,8-13:3,14:2,15-16",
  // };
  info: any;
  dashboardData:any=[];

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
    this.videoSer.videoId = 2
   this.utility.setStorage(session.SELECTED_PLAN,this.envr.plans.partnership);
   //this.videoSer.initPlayer(this.videoSer.videoType[2].initPlayer,this.videoSer.videoType[2].id,this.cdr);
   this.getDashboard();

  }

  async getDashboard(){
    let loading = await this.utility.presentLoading();
    this.apiSer
      .prospectDashboard() 
      .then((res: any) => {
        loading.dismiss();
        let result=res;
        if(result.status){
          this.dashboardData = res.data;
        }
        else{
          this.dashboardData = [];
        }
        console.log(res)
      })
    
  }


  ngAfterViewInit() {
    this.videoSer.initPlayer(this.videoSer.videoType[2].initPlayer,this.videoSer.videoType[2].id,this.cdr);
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
  
  
  goNext(){
  this.utility.getPlanDetail(this.envr.plans.partnership);

  }
 
  
  saveVideoDur() {
    this.videoSer.saveVideoDur( this.videoSer.videoId)
  }
  ionViewDidLeave() {
    this.videoSer.pauseVideo();
    
  }
}
