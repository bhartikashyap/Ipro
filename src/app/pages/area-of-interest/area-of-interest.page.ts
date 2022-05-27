import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import {PersonalizedMicronutritionPage} from '../personalized-micronutrition/personalized-micronutrition.page';
import { NgControlStatus } from '@angular/forms';
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";
import { session } from 'src/app/utility/message';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-area-of-interest',
  templateUrl: './area-of-interest.page.html',
  styleUrls: ['./area-of-interest.page.scss'],
})
export class AreaOfInterestPage implements OnInit {
  subscription:any;
  dashboardData:any=[];
  subs:any;
  constructor(private router:Router,private menu: MenuController,public navCtrl :NavController,
    private utility :UtilService,
    private apiSer:ApiService,
    private platform:Platform
     ) { }

  ngOnInit() {
   console.log(this.navCtrl);
   console.log(this.router.url);
   console.log(this.router.getCurrentNavigation(),"getCurrentNavigation");
   
  }
  ionViewWillEnter() {
    this.subscription = this.platform.backButton.subscribeWithPriority(9999, () => {
      // do nothing
    });
    this.getDashboard();
   this.utility.changeMenu();

    this.utility.setStorage(session.SELECTED_PLAN,'basket');
    this.utility.getCart('cart');

    // this.utility.changeMessage("Push Notification");
  
 
  }

  openMenu(){
  //  alert("hii")
    this.menu.enable(true);
    this.menu.open('first');
    
  }

  openPersonalized(){
  this.utility.goNext('/tabs/personalized-micronutrition');
  
  }

   openIntelligent(){
    this.utility.goNext('/tabs/inteligent-trading');
  }

   openPartnership(){
    this.utility.goNext("/tabs/ipro-partnership");
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

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }
}







//
