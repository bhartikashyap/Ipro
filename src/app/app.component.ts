import { Component, OnInit } from '@angular/core';
import { Globalization } from '@ionic-native/globalization/ngx';

import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { TranslateService } from '@ngx-translate/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { MenuController, NavController, PopoverController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { session } from 'src/app/utility/message';
import { Router } from '@angular/router';
import { ApiService } from './services/api.service';
import { Plugins } from '@capacitor/core';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { Capacitor } from '@capacitor/core';
const { App, BackgroundTask } = Plugins;
import { Platform } from '@ionic/angular';
import { VideoService } from './services/video.service';
import { EnvironmentService } from 'src/app/services/environment.service';
import { ChangeDetectorRef, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { UserModalPage } from '../app/components/user-modal/user-modal.page';
//  import { Events } from '@ionic/angular';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';
import { FcmService } from './services/fcm.service';
import { SetdicountPage } from './pages/setdicount/setdicount.page';
import { MySponsorPage } from './pages/my-sponsor/my-sponsor.page';
import { NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {
  sessionRes: any;
  // public memberPage = [

  //   { title: 'Dashboard', url: '/tabs/dashboard', icon: '../assets/img/dashboard.png', subPages: null, role: "Member" },
  //   { title: 'Prospect management', url: '', icon: '../assets/img/sponser.png', subPages: null },
  //   { title: 'Member management', url: '', icon: '../assets/img/sponser.png', subPages: null },
  //   { title: 'Member placement', url: '', icon: '../assets/img/sponser.png', subPages: null },
  //   { title: 'Manage products', url: '', icon: '../assets/img/sponser.png', subPages: null },


  //   {
  //     title: 'Settings', url: 'tabs/notification', icon: '../assets/img/setting.png', subPages: [
  //       { title1: 'Change Password', id: "nested-button1", component: '', name1: 'about1', url: "/tabs/changepassword" },
  //       { title1: 'Change Language', id: "nested-button", component: '', name1: 'about2', url: "" },
  //     ]
  //   },
  //   {
  //     ///tabs/member-managment'
  //     title: 'Legal', url: 'tabs/member-managment', icon: '../assets/img/legal.png', subPages: [
  //       { title1: 'Legal Notice', component: '', name1: 'about1' },
  //       { title1: 'Private Policy', component: '', name1: 'about2' },
  //       { title1: 'Term & Conditions', component: '', name1: 'about3' },
  //     ]
  //   },
  //   { title: 'Logout', url: '', icon: '../assets/img/legal.png', subPages: null }
  // ];
  // public prospectPage = [
  //   { title: 'Dashboard', url: '/tabs/area-interest', icon: '../assets/img/dashboard.png', subPages: null, role: "Prospect" },
  //   { title: 'My Sponser', url: '', icon: '../assets/img/sponser.png', subPages: null, role: "Prospect" },
  //   {
  //     title: 'Settings', url: 'tabs/notification', icon: '../assets/img/setting.png', subPages: [
  //       { title1: 'Change Password', id: "nested-button1", component: '', name1: 'about1', url: "/tabs/changepassword" },
  //       { title1: 'Change Language', id: "nested-button", component: '', name1: 'about2', url: "" },
  //     ]
  //   },
  //   {
  //     ///tabs/member-managment'
  //     title: 'Legal', url: 'tabs/member-managment', icon: '../assets/img/legal.png', subPages: [
  //       { title1: 'Legal Notice', component: '', name1: 'about1' },
  //       { title1: 'Private Policy', component: '', name1: 'about2' },
  //       { title1: 'Term & Conditions', component: '', name1: 'about3' },
  //     ]
  //   },
  //   { title: 'Logout', url: '', icon: '../assets/img/legal.png', subPages: null }
  // ];
  // public appPages = this.prospectPage;
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  language: string;
  isAppInstalled: any;
  dashboard:any;


  constructor(
    private globalization: Globalization,
    private _translate: TranslateService,
    private utility: UtilService,
    private router: Router,
    private menuCtrl: MenuController,
    private apiSer: ApiService,
    private backgroundMode: BackgroundMode,
    private platform: Platform,
    private navCtrl: NavController,
    public popoverController: PopoverController,
    public videoSer: VideoService,
    public envr: EnvironmentService,
    public fcmSer: FcmService,
    public cdr: ChangeDetectorRef,
    private modalController:ModalController,
    private screenOrientation: ScreenOrientation,
  ) {
    
    this.videoSer.videoType = this.envr.videosEnglish;
    if (Capacitor.isNativePlatform()) {

      this.fcmSer.pushRegister();

      this.platform.pause.subscribe(() => {
        console.log('Pause subscribe was called');
        this.utility.setStorage("isAppInstalled", "yes");
     
      });
      this.platform.resume.subscribe(() => {
        if(this.utility.userRole == 'Prospect' && this.utility.quetionaireComplete == true){
          this.utility.checkQuestionaire();
        }
       // this.fcmSer.catchPushRecieve();
        console.log('resume subscribe was called');

      });
      this.platform.backButton.subscribe((event) => {
        console.log(event)
        console.log(this.router.getCurrentNavigation)
        console.log(this.router.url)
        if(this.router.url == '/member-replacement' || this.router.url.indexOf('/tabs/dashboard') > -1 || this.router.url == '/tabs/area-of-interest'){
           // this.utility.changeMenu();
            this.platform.backButton.subscribeWithPriority(9999, () => {
              // do nothing
            });
        }
        else{
          // if (this.sessionRes) {
            this.navCtrl.back();
          // }
          this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

        }
       

      })
     
      

    }

    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }


  
  async ngOnInit() {
    this.sessionRes = await this.utility.getStorage(session.AUTH_STATUS);

    if (Capacitor.isNativePlatform()) {
      // this.utility.removeAuth();
     // if( this.sessionRes){
        // this.utility.silentLogout();
        // let token =await this.utility.getFCMToken()
        // let fcmToken = {
        //   "notificationToken":await this.utility.getFCMToken()
        // }
        
        // console.log("logout",fcmToken);
        // this.apiSer.logoutUser(fcmToken).then((res: any) => {
        //   this.utility.removeAuth();
        //   this.sessionRes = 0;
        //   this.router.navigate(['/login']);
        // });
    //  }
      let storageNotifications :any= await this.utility.getStorage('notification');
      if(storageNotifications){
        this.utility.removeStorage('notification');
      }
    }

    this.getDeviceLanguage(); 
    this.menuCtrl.enable(false);
    let firstLogin = await this.utility.getStorage('firstLogin');
    var landingPage;
    if (!firstLogin) {
      landingPage = ['/register'];
    }
    else {
      landingPage = ['/login']
    }

    // let data = {"badge":new Date().getSeconds(),"title":"hii","body":"test"+new Date().getSeconds()} ;
    // this.fcmSer.savePush(data,"navigate");
    let dashboard = await this.utility.changeMenu();
    console.log(dashboard);
    setTimeout(() => {
      console.log(dashboard);
     // this.router.navigate(['/questionare'])
  // this.router.navigate(['/tabs/book-analysis'])


      if (this.sessionRes) {
        this.router.navigate([dashboard]);
      } else {
        this.router.navigate(landingPage);
      }
    }, 1000);
  }


  getDeviceLanguage() {
    if (Capacitor.isNativePlatform()) {
      this.globalization
        .getPreferredLanguage()
        .then((res) => {
          console.log(res);
          if (res.value.indexOf("en") != -1) {
            this.utility._initTranslate("en");
            this.language='en';
          } else {
            this.utility._initTranslate("de");
            this.language='de';
          }

        })
        .catch((e) => {
          console.log(e);
          this.utility._initTranslate('en');
        });

    }
    else {
      this.utility._initTranslate('en');
    }
  }

  menu(tab) {
    console.log(tab);
    let selectedTab = tab.name.toLowerCase();
    if (selectedTab == 'logout') {

      this.logout();


    }
    else if (selectedTab=='sponsor'){
      this.utility.openPopup(MySponsorPage,selectedTab,'sponsor-class',true);
    }
    else if (selectedTab=='language'){
      this.utility.openPopup(UserModalPage,selectedTab,'modal-class' ,true);
    }
    else if (selectedTab=='dashboard'){
      this.utility.openPopup(UserModalPage,selectedTab,'modal-class' ,true);
    }
    else if (selectedTab=='discount'){
      this.utility.openPopup(SetdicountPage,selectedTab,'discount',true);
    }
    else if (selectedTab=='privacy'){
       this.utility.openPdfLinks(this.utility.pdfLink[2].link,'');
     // this.utility.openPopup(UserModalPage,'pdf','modal-question' ,true);
    }
    else if (selectedTab=='notice'){
      console.log(this.utility.pdfLink[1].link)
      this.utility.openPdfLinks(this.utility.pdfLink[1].link,'Legal Notice');
    }
    else if (selectedTab=='tnc'){
      console.log(this.utility.pdfLink[0].link)
      this.utility.openPdfLinks(this.utility.pdfLink[3].link,'Term & Condition');
    }
    else if (selectedTab=='analysis'){
      this.utility.openPopup(UserModalPage,selectedTab,'modal-question' ,true);
    }

    

    
  }

  async logout() {
    let AUTH_STATUS = await this.utility.getStorage(session.AUTH_STATUS);
    console.log(AUTH_STATUS);
    if (AUTH_STATUS) {
      this.utility.presentAlert(
        "Warning",
        "",
        [],
        this.utility.translateText('MSG').logout_confirmation,
        [{
          text: this.utility.translateText("MODALS").BUTTONS.YES,
          cssClass: 'secondary',
          handler: async () => {
            var loading = await this.utility.presentLoading();
            var firstLogin = await this.utility.getStorage('firstLogin');
            let fcmToken = {
              "notificationToken":await this.utility.getFCMToken()
            }
            //console.log(firstLogin);
            this.apiSer.logoutUser(fcmToken).then((res: any) => {
              loading.dismiss();
              this.utility.removeAuth();
              this.router.navigate(['/login']);
            });


          }
        }
          , {
          text: this.utility.translateText("MODALS").BUTTONS.NO,
          role: 'cancel',
          cssClass: 'danger',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }]
      );

    }

  }


  async changeLan(lan) {
    this.utility.changeLan(lan, 'app');
    this.videoSer.langChange(lan, this.cdr);

  }

  

  

}
