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
import { Capacitor } from '@capacitor/core';
import { Market } from '@ionic-native/market/ngx';
const { App } = Plugins;
import { Platform } from '@ionic/angular';
import { StatusBar, SetOverlaysWebViewOptions } from '@capacitor/status-bar';
import { VideoService } from './services/video.service';
import { EnvironmentService } from 'src/app/services/environment.service';
import { ChangeDetectorRef, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserModalPage } from '../app/components/user-modal/user-modal.page';
import { Browser } from '@capacitor/browser';
const { capacitorSplashScreen } = Plugins;
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';
import { FcmService } from './services/fcm.service';
import { SetdicountPage } from './pages/setdicount/setdicount.page';
import { MySponsorPage } from './pages/my-sponsor/my-sponsor.page';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {
  sessionRes: any;
  language: string;
  isAppInstalled: any;
  dashboard: any;
  AppVersion:any;


  constructor(
    private globalization: Globalization,
    private _translate: TranslateService,
    private utility: UtilService,
    private router: Router,
    private menuCtrl: MenuController,
    private apiSer: ApiService,
    private platform: Platform,
    private navCtrl: NavController,
    public popoverController: PopoverController,
    public videoSer: VideoService,
    public envr: EnvironmentService,
    public fcmSer: FcmService,
    public cdr: ChangeDetectorRef,
    private modalController: ModalController,
    private screenOrientation: ScreenOrientation,
    private appVersion: AppVersion,
    private market: Market
  ) {
    let authToken =  this.utility.getToken();
    if(authToken){
     // this.utility.checkQuestionaire();
    }
    
    this.videoSer.videoType = this.envr.videosEnglish;
    if (Capacitor.isNativePlatform()) {
      this.fcmSer.pushRegister();
       StatusBar.hide();

      this.platform.pause.subscribe(() => {
        console.log('Pause subscribe was called');
        

        this.utility.setStorage("isAppInstalled", "yes");

      });
                      
      this.platform.resume.subscribe(() => {
        if(this.utility.upadteApp){
          this.launcApp();
        }
      
      if(authToken){
        this.utility.checkQuestionaire();
      }
      this.fcmSer.getDeliverMsg();
        // if (this.utility.userRole == 'Prospect' && this.utility.quetionaireComplete == true) {
        // }
        // this.fcmSer.catchPushRecieve();
        console.log('resume subscribe was called');

      });
      this.platform.backButton.subscribe((event) => {
        if (this.router.url == '/member-replacement' || this.router.url.indexOf('/tabs/dashboard') > -1 || this.router.url == '/tabs/area-of-interest') {
          // this.utility.changeMenu();
          this.platform.backButton.subscribeWithPriority(9999, () => {
            // do nothing
          });
        }
        else {
          // if (this.sessionRes) {
          this.navCtrl.back();
          // }
          this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

        }


      })



    }

    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }

  async launcApp() {
    
    let appversion: any = await this.appVersion.getVersionNumber();
    this.AppVersion = await this.appVersion.getVersionNumber();
    appversion = parseFloat(appversion);
    console.log(this.appVersion)
    console.log(await this.appVersion.getAppName())
    let packageName = await this.appVersion.getPackageName();
    this.apiSer.appVersion().then((res: any) => {
      let appVersionNotmatch = false;
      console.log(res)
      if (res.status) {
        if (this.platform.is('android')) {
          let androisVersion = parseFloat(res.data.android);
          if (appversion != androisVersion) {
            appVersionNotmatch = true;
           
          }


        }
        else if (this.platform.is('ios')) {
          let iosVersion = parseFloat(res.data.ios);

          if (appversion != iosVersion) {
            appVersionNotmatch = true;
          }
        }
        if (appVersionNotmatch) {
          this.utility.presentAlert(
            "Warning",
            "",
            [],
            this.utility.translateText('MSG').app_update,
            [{
              text: this.utility.translateText("MODALS").BUTTONS.VERSION_UPDATE,
              cssClass: 'secondary',
              handler: async () => {
                console.log(packageName);
                let iosUrl = "https://apps.apple.com/us/app/ipro/id1644742652"
                if (this.platform.is('android')) {
                  this.market.open(packageName);

                }
                else{
                  Browser.open({ url: iosUrl });
                }


              }
            }

            ]
          );

        }

      }
    })
  }

  async ngOnInit() {
    //     let appversion= await this.appVersion.getVersionNumber()
    // let packageName =  await this.appVersion.getPackageName();

    this.sessionRes = await this.utility.getStorage(session.AUTH_STATUS);
    this.getDeviceLanguage();

    //  this.router.navigate(["/splash"]);
    

    if (Capacitor.isNativePlatform()) {
    
      
     // let storageNotifications: any = await this.utility.getStorage('notification');
      // if (storageNotifications) {
      //   this.utility.removeStorage('notification');
      // }
      setTimeout(() => { 
        this.launcApp();
    }, 3000);
    
    }


    this.menuCtrl.enable(false);
    let firstLogin = await this.utility.getStorage('firstLogin');
    var landingPage;
    if (!firstLogin) {
      landingPage = ['/register'];
    }
    else {
      landingPage = ['/login']
    }


    let dashboard = await this.utility.changeMenu();
    console.log(dashboard);
     setTimeout(() => {
      console.log(dashboard,"dashboard");
      // dashboard = '/questionare'
     
      if (this.sessionRes) {
        this.router.navigate([dashboard]);
      } else {
        this.router.navigate(landingPage);
      }
      this.utility.checkQuestionaire();

     }, 2000);
  }


  getDeviceLanguage() {
    // this.utility._initTranslate('de');
    if (Capacitor.isNativePlatform()) {
      this.globalization
        .getPreferredLanguage()
        .then((res) => {
          console.log(res);
          if (res.value.indexOf("en") != -1) {
            this.utility._initTranslate("en");
            this.language = 'en';
            this.utility.deviceLang = 'en';
            this.videoSer.videoType = this.envr.videosEnglish;
          } else {
            this.utility._initTranslate("de");
            this.language = 'de';
            this.utility.deviceLang = 'de';
            this.videoSer.videoType = this.envr.videosGerman;
          }

        })
        .catch((e) => {
          console.log(e);
          this.utility._initTranslate('en');
          this.utility.deviceLang = 'en';
          this.videoSer.videoType = this.envr.videosEnglish;
        });

    }
    else {
      this.utility._initTranslate('en');
      this.utility.deviceLang = 'en';
      this.videoSer.videoType = this.envr.videosEnglish;
    }

  }

  menu(tab) {
    console.log(tab);
    let selectedTab = tab.name.toLowerCase();
    if (selectedTab == 'logout') {

      this.logout();


    }
    else if (selectedTab == 'sponsor') {
      this.utility.openPopup(MySponsorPage, selectedTab, 'sponsor-class', true);
    }
    else if (selectedTab == 'language') {
      this.utility.openPopup(UserModalPage, selectedTab, 'modal-class', true);
    }
    else if (selectedTab == 'dashboard') {
      this.utility.openPopup(UserModalPage, selectedTab, 'modal-class', true);
    }
    else if (selectedTab == 'discount') {
      this.utility.openPopup(SetdicountPage, selectedTab, 'discount', true);
    }
    else if (selectedTab == 'privacy') {
      this.utility.openPdfLinks(this.utility.pdfLink[2].link, '');
      // this.utility.openPopup(UserModalPage,'pdf','modal-question' ,true);
    }
    else if (selectedTab == 'notice') {
      console.log(this.utility.pdfLink[1].link)
      this.utility.openPdfLinks(this.utility.pdfLink[1].link, 'Legal Notice');
    }
    else if (selectedTab == 'tnc') {
      console.log(this.utility.pdfLink[0].link)
      this.utility.openPdfLinks(this.utility.pdfLink[3].link, 'Term & Condition');
    }
    else if (selectedTab == 'analysis') {
      this.utility.openPopup(UserModalPage, selectedTab, 'modal-question', true);
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
              "notificationToken": await this.utility.getFCMToken()
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
