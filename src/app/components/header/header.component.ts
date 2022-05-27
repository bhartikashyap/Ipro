import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { MenuController, NavController,ModalController } from '@ionic/angular';
import { UserModalPage } from '../user-modal/user-modal.page';
import { Badge } from '@awesome-cordova-plugins/badge/ngx';
import { UtilService } from 'src/app/services/util.service';
import { MySponsorPage } from 'src/app/pages/my-sponsor/my-sponsor.page';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  dataReturned: any;
  @Input() headerTitle: any;
  @Input() headerBack: any[];
  @Output() goBack = new EventEmitter<string>();
  subscription:any;
  notiCount:any=0;
  constructor(private navCtrl:NavController,
    private badge: Badge,
    public modalController: ModalController,
    public utilSer:UtilService,
    public route:Router
    ) {
   }

  ngOnInit() {
  

    setInterval(() => {  
      this.subscription =  this.utilSer.currentMessage.subscribe(message => {
      if(message == 'Push Notification'){
        console.log(this.utilSer.newNotification)
        this.utilSer.changeMessage("");
       this.utilSer.newNotification=this.utilSer.newNotification;
       }
     });
     if(this.subscription != undefined){
       this.subscription.unsubscribe();
      }
      
    }, 2000);
   
   
  }
  ionViewWillEnter() {
   
  }
  async back(value: string) {

     //var sessionRes = await this.utilSer.getStorage('AUTH_STATUS');
    //  console.log(this.route.url)
    //  console.log(this.route.url.indexOf('dashboard'));
    //  console.log(this.route.url.indexOf('area-of-interest'))
    //  if(this.utilSer.userRole == 'Prospect'){
    //   if(this.route.url.indexOf('dashboard') <= -1 || this.route.url.indexOf('area-of-interest') <= -1){
        this.navCtrl.back();
  
    //    }
    //  }
    //  else{

    //  }
     

    //  if(sessionRes)
   // this.goBack.emit(value);
  }
 
  
  async openPopup() {
    this.utilSer.openPopup(MySponsorPage,"header",'sponsor-class',true)
    // const modal = await this.modalController.create({
    //   component: UserModalPage,
    //   componentProps: {
    //     "paramTitle": "call-popup"
    //   }
    // });

    // modal.onDidDismiss().then((dataReturned) => {
    //   if (dataReturned !== null) {
    //     this.dataReturned = dataReturned.data;
    //     //alert('Modal Sent Data :'+ dataReturned);
    //   }
    // });

    // return await modal.present();
  }

  // goNext(url){
  //   if(this.utilSer.newNotification > 0){
  //     this.utilSer.goNext(url);
  //   }
  // }
}
