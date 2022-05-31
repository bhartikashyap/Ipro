import { Component, OnInit } from '@angular/core';

import { UtilService } from 'src/app/services/util.service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
notifications:any;
  constructor(private utility:UtilService) { }

  ngOnInit() { 
  }
 
  ionViewWillEnter(){   
   this.getNoti();
   this.utility.newNotification = 0;
  }

  async getNoti(){
    this.notifications = await this.utility.getStorage('notification');
    this.notifications = JSON.parse(this.notifications);
    console.log( this.notifications);
  }

  async deleteNoti(noti,i){
    this.notifications.splice(i,1);
    let storageNotifications :any= await this.utility.getStorage('notification');
    if(storageNotifications){
      storageNotifications = JSON.parse(storageNotifications);
      storageNotifications.splice(i,1);
      console.log(storageNotifications)
      this.utility.setStorage('notification',JSON.stringify(storageNotifications));
    }
   

  }

  async clearAll(){
    let storageNotifications :any= await this.utility.getStorage('notification');
    if(storageNotifications){
      this.utility.removeStorage('notification');
    }
  }
}
