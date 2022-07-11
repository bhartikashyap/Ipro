import { Injectable, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { AlertController, LoadingController, ToastController, NavController } from '@ionic/angular';
import { Network } from '@capacitor/network';
import { Router } from '@angular/router';
import { IonicSelectableComponent } from "@ionic-selectable/angular";
import { Storage } from '@capacitor/storage';
import { ApiService } from './api.service';
import { TranslateService } from '@ngx-translate/core';
import { VideoService } from './video.service';
import { EnvironmentService } from './environment.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { ModalController } from '@ionic/angular';
import { Browser } from '@capacitor/browser';
import { UserModalPage } from '../components/user-modal/user-modal.page';
import { DomSanitizer } from '@angular/platform-browser';
import { session } from 'src/app/utility/message';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Platform } from '@ionic/angular';
@Injectable({
  providedIn: "root",
})

export class UtilService {
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  private changeItem = new Subject<any>();
  defaultDash: any;
  FCMToken: any;
  deviceLang: any;
  userRole: any;
  cartNo: any = 0;
  quetionaireComplete: boolean;
  mainDashboard: any = '';
  newNotification: any = 0;
  memberPlacedUuserId; any;
  pdfLink: any = this.envr.pdfEnglish;;
  pdf: any;
  paymnetType:any='one';
  upadteApp:any=true;
  public memberPage = [

    { title: 'Dashboard', url: '/tabs/dashboard/defaultDash', icon: 'grid-outline', subPages: null, role: "Member", name: '', menu: "menu1" },
    { title: 'My Sponser', url: "", icon: 'person-circle-outline', subPages: null, role: "Member", name: 'sponsor', menu: "menu2" },

    {
      title: 'My iPro', url: "", icon: 'information-circle-outline', menu: "menu3", subPages: [
        { title1: 'My Products', menu: "menu4", url: '/tabs/myproducts', id: "nested-button5", component: '', name: 'about1' },
        { title1: 'Prospect Management', menu: "menu5", url: '/tabs/user-managment/prospect', id: "nested-button2", component: '', name: 'about1' },
        { title1: 'Member Management', menu: "menu6", url: '/tabs/user-managment/member', id: "nested-button3", component: '', name: 'about1' },
        { title1: 'Member placement', menu: "menu7", url: '/member-replacement', id: "nested-button4", component: '', name: 'about1' },
      ], name: ''
    },
    {
      title: 'Settings', menu: "menu8", url: "", icon: 'settings-outline', subPages: [
        { title1: 'Change Password', menu: "menu9", id: "nested-button1", component: '', name: 'about1', url: "/tabs/changepassword" },
        { title1: 'Change Language', menu: "menu10", id: "language", component: '', name: 'language', url: "" },
        { title1: 'Change Dashboard', menu: "menu11", id: "dashboard", component: '', name: 'dashboard', url: "", },
        { title1: 'Profile', menu: "menu22", url: "/tabs/profile", id: "nested-button012", component: '', name: 'about3' },
        { title1: 'Set Default Discount', menu: "menu12", id: "discount", component: '', name: 'discount', url: "" },
        { title1: 'Abo Payment Options', menu: "menu13", url: "/tabs/paymnet-option", id: "nested-button01", component: '', name: 'about2' },
        { title1: 'Commission Payment ', menu: "menu14", url: "/tabs/commission-option", id: "nested-button011", component: '', name: 'about21' },
      ], name: ''
    },

    {
      ///tabs/member-managment'
      title: 'Legal', menu: "menu15", url: "", icon: 'ribbon-outline', subPages: [
        { title1: 'Legal Notice', menu: "menu16", component: '', name: 'notice', url: "" },
        { title1: 'Private Policy', menu: "menu17", component: '', name: 'privacy', url: "" },
        { title1: 'Term & Conditions', menu: "menu18", component: '', name: 'tnc', url: "" },
      ], name: ''
    },
    {
      ///tabs/member-managment'
      title: 'My Analysis Data', menu: "menu19", url: "", icon: 'analytics-outline', subPages: [
        { title1: 'QR Code', menu: "menu20", component: '', name: 'analysis', url: "" }
      ], name: ''
    },
    { title: 'Logout', menu: "menu21", url: "", icon: 'log-out-outline', subPages: null, name: 'logout' }
  ];
  
  public prospectPage = [
    { title: 'Dashboard', menu: "menu1", url: '/tabs/area-of-interest', icon: 'grid-outline', subPages: null, role: "Prospect", name: '' },
    { title: 'My Sponser', menu: "menu2", url: "", icon: 'person-circle-outline', subPages: null, role: "Prospect", name: 'sponsor' },
    {
      title: 'Settings', menu: "menu8", url: "", icon: 'settings-outline', subPages: [
        { title1: 'Change Password', menu: "menu9", id: "nested-button1", component: '', name: 'about1', url: "/tabs/changepassword" },
        { title1: 'Change Language', menu: "menu10", id: "language", component: '', name: 'language', url: "" },
        { title1: 'Profile', menu: "menu22", url: "/tabs/profile", id: "nested-button012", component: '', name: 'about3' },
      ], name: ''
    },
    {
      ///tabs/member-managment'
      title: 'Legal', menu: "menu15", url: "", icon: 'ribbon-outline', subPages: [
        { title1: 'Legal Notice', menu: "menu16", component: '', name: 'notice', url: "" },
        { title1: 'Private Policy', menu: "menu17", component: '', name: 'privacy', url: "" },
        { title1: 'Term & Conditions', menu: "menu18", component: '', name: 'tnc', url: "" },
      ], name: ''
    },
    {
      ///tabs/member-managment'
      title: 'My Analysis Data', menu: "menu19", url: "", icon: 'analytics-outline', subPages: [
        { title1: 'QR Code', menu: "menu20", component: '', name: 'analysis', url: "" }
      ], name: ''
    },
    { title: 'Logout', menu: "menu21", url: '', icon: 'log-out-outline', subPages: null, name: 'logout' }
  ];
  public appPages = this.prospectPage;
  // options: InAppBrowserOptions = {
  //   location: 'yes',//Or 'no' 
  //   hidden: 'no', //Or  'yes'
  //   clearcache: 'yes',
  //   clearsessioncache: 'yes',
  //   zoom: 'yes',//Android only ,shows browser zoom controls 
  //   hardwareback: 'yes',
  //   mediaPlaybackRequiresUserAction: 'no',
  //   shouldPauseOnSuspend: 'no', //Android only 
  //   closebuttoncaption: 'Close', //iOS only
  //   disallowoverscroll: 'no', //iOS only 
  //   toolbar: 'yes', //iOS only 
  //   enableViewportScale: 'no', //iOS only 
  //   allowInlineMediaPlayback: 'no',//iOS only 
  //   presentationstyle: 'pagesheet',//iOS only 
  //   fullscreen: 'yes',//Windows only    
  // };
  openPage: any;

  constructor(
    private toastController: ToastController,
    private loadingController: LoadingController,
    private router: Router,
    private alertController: AlertController,
    private navCtrl: NavController,
    private apiSer: ApiService,
    private _translate: TranslateService,
    private videoSer: VideoService,
    private envr: EnvironmentService,
    private emailComposer: EmailComposer,
    private callNumber: CallNumber,
    private modalController: ModalController,
    private domSanit: DomSanitizer,
    private theInAppBrowser: InAppBrowser,
    private platform: Platform
  ) {

  }


  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  async presentToast(message, postion) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position:  'top'
    });
    // postion ? postion :
    toast.present();
  }

  async presentAlert(header, subHeader, inputs, message, buttons) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      inputs: inputs,
      message: message,
      buttons: buttons,
      cssClass: 'alertClass',

    });
    await alert.present();

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Please wait...",
      translucent: true,
      cssClass: "custom-class custom-loading",
    });
    loading.present();
    return await loading;
  }

  setStorage = async (key: string, data: any) => {
    await localStorage.setItem(key, data);
  };

  getStorage = async (key: string) => {
    const value = await localStorage.getItem(key);
    return value;
  };

  removeStorage = async (key: string) => {
    await localStorage.removeItem(key);
  };

  removeAuth = async () => {
    await localStorage.removeItem('AUTH_STATUS');
    await localStorage.removeItem('AUTH_TOKEN');
    await localStorage.removeItem('AUTH_USER');
    await localStorage.removeItem('userRole');
    await localStorage.removeItem('CHANGE_DASH');
  };


  clearStorage = async () => {
    await localStorage.clear();
  };

  getToken() {
    if (localStorage.getItem("AUTH_TOKEN")) {
      return localStorage.getItem("AUTH_TOKEN");
    } else {
      return null;
    }
  }
  async checkNetwork() {
    const status = await Network.getStatus();
    if (status.connectionType == "none" || status.connectionType == "unknown") {
      this.presentAlert(
        "Error",
        "",
        [],
        this.translateText('ERROR').NETWORK_CHECK,
        [this.translateText("MODALS").BUTTONS.OK]
      );
      return false;
    } else {
      return true;
    }
  }

  checkLiveUrl(url) {
    let status = false;
    if (url) {
      if (url.indexOf("http:") != -1) {
        status = true;
      } else if (url.indexOf("http:") != -1) {
        status = true;
      } else {
        status = false;
      }
    }
    return status;
  }
  searchData(event: {
    component: IonicSelectableComponent,
    text: string
  }, arrayList, columName) {
    let filteredData = [];
    filteredData = arrayList.filter(data => {
      return data[columName].toLowerCase().indexOf(event.text.toLowerCase()) !== -1
    });
    event.component.items = filteredData;
  }

  goNext(url: any) {
     this.upadteApp = true;
    this.navCtrl.navigateForward(url)
  }
  openPdfLinks(pdfUrl, pdfName) {
    console.log(pdfUrl)
    this.pdf = this.domSanit.bypassSecurityTrustResourceUrl(pdfUrl)
    console.log(this.pdf)
    // if (pdfName == '') {
      this.openPopup(UserModalPage, 'pdf', '', true);
      // this.document
      // this.document.viewDocument(pdfUrl, 'application/pdf', {title: pdfName});
    // }
    // else {
      // this.document.viewDocument(pdfUrl, 'application/pdf', {title: pdfName});
      // if (this.platform.is('android')) {
      //   const browser = this.theInAppBrowser.create(pdfUrl);

        // this.openPage = this.theInAppBrowser.create(pdfUrl, "_blank", this.options);
     // } else {
        // Browser.open({ url: pdfUrl });


    //  }
    // }
  }

  async getPlanDetail(plan) {
    let selectedPlan = await this.getStorage(plan);
    let loading = await this.presentLoading();
    let response: any = await this.apiSer.getPlanDetail(plan);
    loading.dismiss();
    if (response.status == 1) {
      this.navCtrl.navigateForward(["/tabs/basket"]);
    }
  }

  goBack(){
   this.navCtrl.back();
  }

  setName = async () => {
    await Storage.set({
      key: 'name',
      value: 'Max',
    });
    console.log("save data");
  };

  checkName = async () => {
    const { value } = await Storage.get({ key: 'name' });

    console.log(`Hello ${value}!`);
  };

  removeName = async () => {
    await Storage.remove({ key: 'name' });
  };

  async getFCMToken() {
    let FCMToken: any = await this.getStorage("FCMToken");

    if (FCMToken != null && FCMToken != undefined && FCMToken != '') {
      return FCMToken;
    }
    else {
      return false;
    }


    // return this.FCMToken;
  }

  async openPopup(component, title, cssClass, backdrop) {
    const modal = await this.modalController.create({
      component: component,
      componentProps: {
        "paramTitle": title
      },
      cssClass: cssClass,
      backdropDismiss: backdrop
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        console.log(dataReturned, "dataReturned")
        this.getpoUpData(dataReturned);
        // next;
        // this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

  async getpoUpData(data) {
    return data
  }
  async closeModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }





  // Common methods used 

  async changeLan(lan, page) {

    let params: any = {}
    if (lan == 'en' || lan == 'english') {
      this.videoSer.videoType = this.envr.videosEnglish;
      this.pdfLink = this.envr.pdfEnglish;
      // this.language = 'en'
      this.deviceLang = 'en'
      params = {
        "language": 'english'
      }
    }
    else  if (lan == 'de' || lan == 'german') {
      this.videoSer.videoType = this.envr.videosGerman;
      this.pdfLink = this.envr.pdfGerman;
      this.deviceLang = 'de'
      params = {
        "language": 'german'
      }
      //this.events.publish('langChanged', this.envr.videosGerman);

    }

    this.changeItem = this.deviceLang;
    this._initTranslate(this.deviceLang)

    let loading = await this.presentLoading();
    this.apiSer
      .changeLanguage(params)
      .then((res: any) => {
        loading.dismiss();
        if (page != 'register') {
          if (res.status == 1) {
            this.presentToast(this.translateText('MSG').language, "top");
            this.closeModal();

          } else {
            this.presentToast(this.translateText('MSG').someissueInNetwork, "bottom");
          }
        }

      })
      .catch((err: any) => {
        console.log(err);
        loading.dismiss();
      });




  }

  public _initTranslate(language: string) {
    this._translate.setDefaultLang(language);
    if (language) {
      this.deviceLang = language;
    } else {
      this.deviceLang = 'en';
    }
    this._translate.use(this.deviceLang);
  }

  public async changeMenu() {
    let userRole = await this.getStorage('userRole');
    this.defaultDash = await this.getStorage('CHANGE_DASH');
    console.log(this.defaultDash);
    // defaultDash = JSON.parse(defaultDash)
    // let dashboard;
    this.userRole = userRole;
    if (userRole == undefined || userRole == null || this.defaultDash == undefined || this.defaultDash == null) {
      //alert("This is because userRole is:"+userRole+" or may be because default dash is "+ this.defaultDash+".You can also check this :"+ this.mainDashboard  );

    }
    // if(userRole !)
    // userRole = userRole.toLowerCase();
    if (userRole == 'Prospect') {
      this.appPages = this.prospectPage;
      this.mainDashboard = "/tabs/area-of-interest";
    }
    else if (userRole == 'Member' || userRole == 'Partner') {
      this.appPages = this.memberPage;
      // this.mainDashboard = '/tabs/member-replacement';
      this.mainDashboard = "/tabs/dashboard/" + this.defaultDash;
    }
    // else{
    //   this.openPopup(UserModalPage,'error','error-class',true);
    //  }
    return this.mainDashboard;
  }


  sendMail(mail) {
    if (mail != '') {
      this.emailComposer.getClients().then((apps: []) => {
        // Returns an array of configured email clients for the device
      });
      this.emailComposer.requestPermission().then((available: boolean) => {
        console.log(available);
      })
      this.emailComposer.isAvailable().then((available: boolean) => {

        if (available) {

        }
      });

      let email = {
        to: mail,
        cc: this.translateText('EMAIL').CC,
        subject: this.translateText('EMAIL').SUBJECT,
        body: this.translateText('EMAIL').BODY,
        isHtml: true
      }


      this.emailComposer.open(email);



    }
  }

  callMobile(phone) {
    if (phone != '') {
      this.callNumber.callNumber(phone, true)
        .then(res => console.log('Launched dialer!', res))
        .catch(err => console.log('Error launching dialer', err));
    }

  }

  async checkQuestionaire() {
    let loading = await this.presentLoading();
    this.apiSer
      .checkQuestion()
      .then((res: any) => {
        loading.dismiss();
        if (res.status == 1) {
          this.goNext(["/questionare"]);
        }
        else {
          this.goNext(["/tabs/area-of-interest"]);
        }

      })
      .catch((err: any) => {
        console.log(err);
        loading.dismiss();
      });

  }

  async defaultDashChange(data) {
    //  console.log(data.detail.value)
    let resData = {
      "defaultDashboard": data
    }

    this.defaultDash = await this.getStorage('CHANGE_DASH');
    // authUser = JSON.parse(authUser)
    if (data == 'Partner') {
      this.goNext('/tabs/dashboard/Partner');
      this.defaultDash = 'Partner';
    }
    else {
      this.goNext('/tabs/dashboard/Member');
      this.defaultDash = 'Member';
    }
    this.changeMenu();
    this.setStorage('CHANGE_DASH', this.defaultDash);
    this.closeModal();
    // let loading = await this.presentLoading();
    // this.apiSer
    //   .defaultDashboard(resData)
    //   .then((res: any) => {
    //     loading.dismiss();
    //     if (res.status == 1) {
    //       this.presentToast("Dashboard changed", "top")
    //     }
    //     else {
    //       this.presentToast("Please try again later", "top")
    //     }

    //   })
    //   .catch((err: any) => {
    //     console.log(err);
    //     loading.dismiss();
    //   });

  }

  async defaultDiscount(data) {
    console.log(data)
    let resData = {
      "discount": data.detail.value
    }


    let loading = await this.presentLoading();
    this.apiSer
      .defaultDiscount(resData)
      .then((res: any) => {
        loading.dismiss();
        if (res.status == 1) {
          this.presentToast(this.translateText('MSG').defaultDiscount, 'top')
          // this.goNext(["/tabs/area-of-interest"]);

        }
        else {
          //this.goNext(["/questionare"]);

        }

      })
      .catch((err: any) => {
        console.log(err);
        loading.dismiss();
      });

  }

  async getCart(type) {
    let response: any = await this.apiSer.getCart();
    let products_data: any;
    if (response.status == 1) {
      products_data = response ? response : [];
      if (products_data) {
        products_data = products_data.data ? products_data.data : [];
        if (type == 'notification') {
          this.newNotification += 1;

        }
        // else if(type== 'notification'){

        // }
        this.cartNo = products_data.length;
      }
    }
    else {
      products_data = null;
    }
    return products_data
  }

  translateText(page) {
    let text;
    this._translate.get(page).subscribe(value => {
      text = value;
      console.log(value)

      // this.items[0].name = value;
    }
    );
    return text;

  }

  async logout() {
    let AUTH_STATUS = await this.getStorage(session.AUTH_STATUS);
    console.log(AUTH_STATUS);
    if (AUTH_STATUS) {
      this.presentAlert(
        "Warning",
        "",
        [],
        this.translateText('MSG').logout_confirmation,
        [{
          text: this.translateText("MODALS").BUTTONS.YES,
          cssClass: 'secondary',
          handler: async () => {
            this.silentLogout();
            //console.log(firstLogin);


          }
        }
          , {
          text: this.translateText("MODALS").BUTTONS.NO,
          role: 'cancel',
          cssClass: 'danger',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }]
      );

    }

  }

  async silentLogout() {
    var loading = await this.presentLoading();
    var firstLogin = await this.getStorage('firstLogin');
    let fcmToken = {
      "notificationToken": await this.getFCMToken()
    }
    this.apiSer.logoutUser(fcmToken).then((res: any) => {
      loading.dismiss();
      this.removeAuth();
      this.router.navigate(['/login']);
    });

  }




}
