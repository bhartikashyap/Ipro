import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import {PersonalizedMicronutritionPage} from '../personalized-micronutrition/personalized-micronutrition.page';
import { NgControlStatus } from '@angular/forms';
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";
import { session } from 'src/app/utility/message';
import { Platform } from '@ionic/angular';
import { EnvironmentService } from 'src/app/services/environment.service';
import { UserModalPage } from "src/app/components/user-modal/user-modal.page";
@Component({
  selector: 'app-area-of-interest',
  templateUrl: './area-of-interest.page.html',
  styleUrls: ['./area-of-interest.page.scss'],
})
export class AreaOfInterestPage implements OnInit {
  subscription:any;
  dashboardData:any=[];
  subs:any;
  voucher:any;
  getLastPayments:any
  constructor(private router:Router,private menu: MenuController,public navCtrl :NavController,
    private utility :UtilService,
    private apiSer:ApiService,
    private platform:Platform,
    private envr:EnvironmentService
     ) { 
     
         
     }

  ngOnInit() {
   console.log(this.navCtrl);
   console.log(this.router.url);
   console.log(this.router.getCurrentNavigation(),"getCurrentNavigation");
   
  }
  ionViewWillEnter() {
    var timeInter=0;
    // this.utility.openPopup(UserModalPage, 'question-complete', 'modal-question', true);
    this.subscription = this.platform.backButton.subscribeWithPriority(9999, () => {
      // do nothing
    });

    this.getDashboard();
   this.utility.changeMenu();

    this.utility.setStorage(session.SELECTED_PLAN,'basket');
    this.utility.getCart('cart');

    setInterval(()=>{
      timeInter++;
      //this.getPayments = this.utility.getLastPayments;
      // console.log(this.getPayments);
      if(timeInter < 10)
            this.getPayments();
       
       },5000)
    // this.utility.changeMessage("Push Notification");
  
 
  }


  openMenu(){
  //  alert("hii")
    this.menu.enable(true);
    this.menu.open('first');
    
  }

  openPersonalized(){
   // this.utility.goNext('/question');  //to test the question in  fast forward mode
 this.utility.goNext('/tabs/personalized-micronutrition');
  
  }

   openIntelligent(){
    this.utility.goNext('/tabs/inteligent-trading');
  }

   openPartnership(){
    this.utility.goNext("/tabs/ipro-partnership");
  }
  async getVoucher(){
    let getVoucher:any =  await this.apiSer.checkVoucher();
    console.log(getVoucher);
    if(getVoucher.status  ){
      this.voucher =getVoucher.data
    }
  }

  async getDashboard(){
//  let result1: any = await this.apiSer.getQuestions();
//      console.log(result1)
    let loading = await this.utility.presentLoading();
    this.getVoucher();
    let videoResult:any= await this.apiSer.getVideo();
    
   if(videoResult.status){
    if(videoResult.data.length>0){
      this.envr.videosEnglish[1].initPlayer = videoResult.data[0].vimeoId;
      this.envr.videosGerman[1].initPlayer = videoResult.data[0].videoIDGerman
      this.envr.videosEnglish[2].initPlayer = videoResult.data[1].vimeoId;
      this.envr.videosGerman[2].initPlayer = videoResult.data[1].videoIDGerman
    }
   }

    let result:any= await this.apiSer.prospectDashboard() 
      // .then((res: any) => {
        loading.dismiss();
        // let result=res;
        if(result.status){
          this.dashboardData = result.data;
        }
        else{
          this.dashboardData = [];
          this.utility.removeAuth();
             this.utility.goNext('/login');
          if(result.msg == 'Unauthorized' || result.msg == "Token not found in request"){
            let fcmToken = {
              "notificationToken": await this.utility.getFCMToken()
            }
            this.apiSer.logoutUser(fcmToken).then((res: any) => {
              loading.dismiss();
            //  this.utility.removeAuth();
              // this.router.navigate(['/login']);
            });
    
          }
        }
        // console.log(res)
      // })

  
     this.getPayments();



  
}

async getPayments(){
  let getLastPayments:any = await this.apiSer.getLastPayments();
  if(getLastPayments?.status){
    this.getLastPayments = getLastPayments?.data;

  }
  console.log(getLastPayments,"getLastPayments");
}
  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

  async redeemVoucher(){
  let result:any= await this.apiSer.freeMembership();
  if(result.status){
    this.getVoucher();
  }
  }


  calculateDiff(dateSent){
    let row=0;
    let currentDate = new Date();
    dateSent = new Date(dateSent);
let nodays:any=Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ) /(1000 * 60 * 60 * 24));
console.log(nodays)
if(nodays>= 2){
  return false;
}   
else{
  return true

}
}
}



