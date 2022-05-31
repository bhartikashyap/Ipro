import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { Browser } from '@capacitor/browser';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';
import { Router } from "@angular/router";
import { callCordovaPlugin } from '@ionic-native/core/decorators/common';
@Component({
  selector: 'app-paymnet-option',
  templateUrl: './paymnet-option.page.html',
  styleUrls: ['./paymnet-option.page.scss'],
})
export class PaymnetOptionPage implements OnInit {
  cardPaymentoption:any={}
  userProfile:any;
  browser: any;
  cardadded:any=false;
  ibanadded:any=false;
  somethingElseclick:any=false;
  myPaymentOption:any;
  options: InAppBrowserOptions = {
    location: 'yes',//Or 'no' 
    hidden: 'no', //Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',//Android only ,shows browser zoom controls 
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', //Android only 
    closebuttoncaption: 'Close', //iOS only
    disallowoverscroll: 'no', //iOS only 
    toolbar: 'yes', //iOS only 
    enableViewportScale: 'no', //iOS only 
    allowInlineMediaPlayback: 'no',//iOS only 
    presentationstyle: 'pagesheet',//iOS only 
    fullscreen: 'yes',//Windows only    
  };
  openPage: any

  constructor(public utilSer:UtilService,private apiSer:ApiService, private theInAppBrowser: InAppBrowser,
    private platform: Platform,
    private router:Router) { }

  ngOnInit() {


  }
  ionViewWillEnter() {
    this.getPaymentoption("loader","");
    
  }
  async getPaymentoption(loader,type){
    this.somethingElseclick = false;
    console.log(loader)
    // this.cardPaymentoption={}
    let loading
    if(loader == "loader"){
       loading = await this.utilSer.presentLoading();

    }
    let result: any = await this.apiSer.paymentOption();
    let profile:any = await this.apiSer.getProfile();
    if(loader == "loader"){
      loading.dismiss();


    }
    if(profile.status){
      this.userProfile = profile.data.profile;
      console.log(this.userProfile)
    }
    if (result.status == 1) {
      this.cardPaymentoption = result.data;
      var changeLoader;
      this.myPaymentOption = this.cardPaymentoption?.myPaymentOption 
     
      if(this.cardPaymentoption.cardNumber =='' || this.cardPaymentoption.iban_payment_option =='' ){
        changeLoader = "noloader";
        if(loader == "noloader"){
          setTimeout(() => {
            this.getPaymentoption(changeLoader,type);
            if(this.cardPaymentoption?.myPaymentOption =='direct_debit_sepa'){
              this.ibanadded = true;
            }
            else  if(this.cardPaymentoption?.myPaymentOption =='creditcard'){
              this.cardadded = true;
    
            }
            if(this.router.url == '/tabs/paymnet-option'){
              
            }
           
    
          },2000);
        }



      }
     
       else{


        if(this.cardPaymentoption?.myPaymentOption =='direct_debit_sepa'){
          this.ibanadded = false;
        }
        else  if(this.cardPaymentoption?.myPaymentOption =='creditcard'){
          this.cardadded = false;

        }
        // if(type == 'CREDITCARD'){
  
        // }else  if(type == 'GUARANTEED_DIRECT_DEBIT_SEPA'){
        //   this.ibanadded = false;
        // }
        changeLoader = "loader";
        // clearInterval();
      
      }
      console.log(changeLoader,"changeLoader")
      
       
      // }
      
    }
   

  }

  async aboPayment(type){
    this.somethingElseclick = false;
    console.log(type)
    let data={
      'paymentOption':type
    }
    let loading = await this.utilSer.presentLoading();
    let result: any = await this.apiSer.aboPayment(data);
    loading.dismiss();
    if (result.status == 1) {
      this.inAppBrowser(result.response.result.redirect_url);
      this.somethingElseclick = true;

      this.validatePayment(result.paymentId,type)
      //this.cardPaymentoption = result.data
      
    }
  }
  confirmDelete(type){
    this.somethingElseclick = false;
    this.utilSer.presentAlert(
      "Warning",
      "",
      [],
      this.utilSer.translateText('PAYMENT_OPTON').msg.deleteWarning,
      [{
        text: this.utilSer.translateText("MODALS").BUTTONS.YES,
        cssClass: 'secondary',
        handler: async () => {
         this.deletePaymnet(type);

        }
      }
        , {
        text: this.utilSer.translateText("MODALS").BUTTONS.NO,
        role: 'cancel',
        cssClass: 'danger',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }]
    );
  }

  async deletePaymnet(type){
    this.somethingElseclick = false;
    console.log(type)
    let data={
      'paymentOption':type
    }
    let loading = await this.utilSer.presentLoading();
    let result: any = await this.apiSer.deletPayment(data);
    loading.dismiss();
    if (result.status == 1) {
      this.utilSer.presentToast(this.utilSer.translateText('PAYMENT_OPTON').msg.deleteCard,"top");
      this.getPaymentoption("loader",type);
      // this.inAppBrowser(result.response.result.redirect_url);
      // this.validatePayment(result.paymentId)
      //this.cardPaymentoption = result.data
      
    }
  }


  async inAppBrowser(paymentUrl) {


    if (this.platform.is('android')) {
      let target = "_blank";
      this.openPage = this.theInAppBrowser.create(paymentUrl, target, this.options);

      this.openPage.on('exit').subscribe(event => {
        console.log(event, 'exit');
        // this.paymentInti = false;
      })
    } else {
      Browser.open({ url: paymentUrl });

      Browser.addListener('browserPageLoaded', () => { }).then((info) => {
        console.log(info);
      })

      Browser.addListener('browserFinished', () => { }).then((info) => {
        console.log(info);
        // this.paymentInti = false;
      })
    }
  }

  async loaderHide() {
    // this.paymentInti = false;
  }

  async closeBrowser() {
    if (this.platform.is('android')) {
      this.openPage.close()
      

    } else {
      Browser.close()
      

    }
  }

  async onManualClose() {
    console.log(Browser)
    if (this.platform.is('android')) {
      this.openPage.on('loadstop').subscribe(event => {
        console.log(event);
        // this.paymentInti = false;
      })


    } else {
      // Browser.addListener('browserPageLoaded', () => { }).then((info) => {
      //   console.log(info);
      //   this.paymentInti = false;
      // })
      // Browser.addListener('browserFinished', () => { }).then((info) => {
      //   console.log(info);
      //   this.paymentInti = false;
      // })

    }
  }

  async validatePayment(paymentId,type) {
    let result: any = await this.apiSer.paymentStatus({
      paymentId: paymentId
    });
    if (result.status == 0) {

      setTimeout(() => {
       
      if(this.router.url == '/tabs/paymnet-option'  && this.somethingElseclick){
        this.validatePayment(paymentId,type);
       // console.log(this.paymentUrl)
      }
      

        this.onManualClose();

      }, 2000 );
    } else {
      if(type == 'CREDITCARD'){
        this.cardadded = false;

      }else  if(type == 'GUARANTEED_DIRECT_DEBIT_SEPA'){
        this.ibanadded = false;
      }
      clearInterval();
      this.closeBrowser();
      this.utilSer.presentToast(this.utilSer.translateText('PAYMENT_OPTON').msg.addcard, "top");
      this.getPaymentoption("noloader",type);

    }
  }


  

}
