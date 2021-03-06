import { Injectable } from '@angular/core';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { Platform } from '@ionic/angular';
import { UtilService } from './util.service';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  PushNotificationActionPerformed,
  Token,
} from '@capacitor/push-notifications';
@Injectable({
  providedIn: "root",
})
export class FcmService {
subs:any;
  constructor(
    private toastController: ToastController,
    private loadingController: LoadingController,
    private router: Router,
    private alertController: AlertController,
    private navCtrl: NavController,
    private apiSer: ApiService,
    private platform: Platform,
    private utility: UtilService
  ) { }


  /*Notification code*/

async  pushRegister() {

    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
        console.log("here")
      }
    });

    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration',
      (token: Token) => {
        console.log('Push registration success, token: ' + token.value)
        console.log('Push registration success, token: ' + token.value);
        //this.utility.getFCMToken(token.value)
        this.utility.FCMToken = token.value;
        this.utility.setStorage("FCMToken",token.value)
      }
    );

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError',
      (error: any) => {
        // console.log('Push registration success, token: ' + token.value)
        console.log('Error on registration: ' + JSON.stringify(error));
      }
    );

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotificationSchema) => {
       this.utility.newNotification += 1;
         this.utility.changeMessage("Push Notification");
        console.log('Push received: ' + JSON.stringify(notification.data));
        this.savePush(notification.data, "no-navigate");
      //  this.utility.getCart('notification');
      }
    );

    // // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        const data = notification.notification.data;
        console.log('Push action performed: ' + data);
        console.log('Push action performed: ' + JSON.stringify(data));
        this.savePush(data, "navigate")   
      }
    );

  
    // await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
    //   console.log('Push notification action performed', notification.actionId, notification.inputValue);
    //   const data = notification.notification.data;
    //   console.log('Push action performed: ' + data);
    //   console.log('Push action performed: ' + JSON.stringify(data));
    //   this.savePush(notification, "navigate")
    // });


  }


  pushReceived(noti) {
    this.utility.setStorage('notification', noti);
   
  }

  catchPushRecieve(){
   
      PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotificationSchema) => {
       this.utility.newNotification += 1;
         this.utility.changeMessage("Push Notification");
        console.log('Push received: ' + JSON.stringify(notification));
        this.savePush(notification, "no-navigate");
      //  this.utility.getCart('notification');

        
      }
    );
     
    
  
  }






  async savePush(notification, action) {
   
    // if (action == 'navigate') {
    //   this.utility.goNext('/tabs/notification');
    // }
    // else{
      let notifications = [];

      let prevNot: any = await this.utility.getStorage('notification');
      // notifications = await this.utility.getStorage('notification');
  
      console.log(prevNot)
      if (!prevNot) {
        notifications.push(notification);
      }
      else {
        prevNot = JSON.parse(prevNot);                           
        if (prevNot.length == 15) {
          prevNot.splice(0, 1);
        }
        prevNot.push(notification)
        notifications = prevNot;   
  
      }   
  console.log(notifications,"notificationsnotificationsnotificationsnotificationsnotifications")
      // notifications.push(notification);
      this.utility.setStorage('notification', JSON.stringify(notifications));
      if (action == 'navigate') {
        this.utility.goNext('/tabs/notification');
      }
    // }
  }

  /*Notification code*/


}
