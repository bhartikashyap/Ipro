import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { IonicSelectableComponent } from "@ionic-selectable/angular";
import { UtilService } from "src/app/services/util.service";
import { MenuController, ModalController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { ApiService } from "src/app/services/api.service";
import { message, session } from "src/app/utility/message";
import { pattern } from "src/app/utility/pattern";
import { PhoneNumberValidator } from "src/app/utility/phone-number-validator";
import { NavController, Platform } from '@ionic/angular';
// import { VideoPlayer,VideoOptions } from '@awesome-cordova-plugins/video-player/ngx';
import { VideoService } from 'src/app/services/video.service';
import { Device } from "@capacitor/device";

declare let _cpmp: any;
declare let cincopa: any;

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  playerId ="cincopa_1638196190170";//this.envr.videos.bodyAnlaysis;
  width = 0;
  cpo: any = [];
  showUpdate = false;
  form: FormGroup;
  submitted = false;
  countires: any = [];
  validationMessage: any;
  country: any = null;
  selectedCountry: any;
  info: any;
  // videoOptions: VideoOptions
  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private modalController: ModalController,
    private _translate: TranslateService,
    private utility: UtilService,
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private videoSer:VideoService,
    private  platform:Platform,
    private cdr:ChangeDetectorRef
    // private videoPlayer: VideoPlayer
  ) {
   
   }

  ngOnInit() {
    this.initForm();
    this.getCountries();
    this.platform.ready().then(async () => {
      console.log("Width: " + this.platform.width());
      this.width = this.platform.width();
      this.info = await Device.getInfo();
      console.log(this.info);
      console.log("Height: " + this.platform.height());
    });
    
  }

 

  ngAfterViewInit() {
    this.videoSer.initPlayer(this.videoSer.videoType[0].initPlayer,this.videoSer.videoType[0].id,this.cdr);
   // this.videoSer.initPlayer("A4HAcLOLOO68!AkADF107s8tQ",this.playerId);
  
  }

  async changeLan(event){
    console.log(this.form.get("language").value);
    this.utility.changeLan(this.form.get("language").value,'register');
   
  }



  
  async getCountries() {
    this.country = {
     
    };
    let result: any = await this.apiService.getCountryList();
    // this.countires = result.countries;
    // console.log(this.countires);
    // result.countries.map((currElement, index) => {
    //   console.log(index)
    //   if(index < 3)
    //   {
    //      return currElement; //equivalent to list[index]
    //   }
      this.countires = result.countries;
    //});
    // console.log(this.countires.length)
    // this.countires =JSON.parse(JSON.stringify(this.countires));
    // console.log(this.countires)
    this.selectedCountry = this.countires.filter(item => item.countryCode == "DE")[0];
    // for (const item of this.countires) {
    //   if (item.countryCode == "DE") {
    //     this.selectedCountry = item;
    //     console.log( this.selectedCountry);
    console.log(this.form)
    // this.form.controls.countryNames =
    //this.country = this.selectedCountry.countryName;
    this.form.get("country").setValue(this.selectedCountry.countryId);
    this.form.get("countryNames").setValue(this.selectedCountry.countryName);
    this.form.get("phoneCode").setValue(this.selectedCountry.phoneCode);
    this.form
      .get("phone")
      .setValidators(
        PhoneNumberValidator(this.selectedCountry.countryCode)
      );
    this.form.get("phone").updateValueAndValidity();
    //   }
    // }
  }

  async searchCountry(event){
    this.utility.searchData(event,this.countires,'countryName');
  }

  async selectCountry(event: {
    component: IonicSelectableComponent,
    value: any
  }, type) {
    let loading:any = await this.utility.presentLoading();
    console.log(this.form.get("phone"))

    let phValue = this.form.get("phone").value
    console.log(type === "countryname" && phValue === '')
    console.log(type === "phonecode",event);
    if (type === "countryname") {

      this.form.get("countryNames").setValue(event.value.countryName)
      this.form.get("country").setValue(event.value.countryId)

    }

    if ( type === "phonecode") {
      this.selectedCountry = event.value;
      this.form.get("phoneCode").setValue(event.value.phoneCode);
      this.form
        .get("phone")
        .setValidators(PhoneNumberValidator(event.value.countryCode));
      this.form.get("phone").updateValueAndValidity();
    }

    loading.dismiss();
  }

  

  countryChange(event: any) {
    if (event) {
      this.form.get("phoneCode").setValue(event.phoneCode);
    }
  }

  

  addPopUp(event){
    console.log(event)
   if(this.form.get("agree").value && this.form.get("sponsorId").value == ''){
    this.utility.presentAlert('Alert','',[],this.utility.translateText('MSG').activationCode, [this.utility.translateText("MODALS").BUTTONS.OK])
   }

   //this.utility.openPdfLinks(this.utility.pdfLink[2].link,'Term & Condition')
  }

  async submit() {
    this.submitted = true;
    console.log(this.form.valid)
    if (this.form.valid) {
      this.submitted = false;
      if(this.form.get("sponsorId").value == '0'){
        this.form.get("sponsorId").setValue("1");
      }
      let params: any = this.form.getRawValue();
      let loading = await this.utility.presentLoading();
      params.notificationToken =  this.utility.FCMToken;
      delete params.agree;
       console.log(params);
      this.apiService
        .registerUser(params)
        .then((res: any) => {
          console.log(res)   
          loading.dismiss();
          if (res.status == 1) {
            this.utility.setStorage('firstLogin', new Date());
            let token = res.jwt;
            let data = res.data;
            this.utility.changeLan(this.form.get("language").value,'register');
            this.utility.setStorage(session.AUTH_STATUS, 1);
            this.utility.setStorage(session.AUTH_TOKEN, token);
            this.utility.setStorage(session.AUTH_USER, JSON.stringify(data));
            this.utility.setStorage('userRole','Prospect');
            this.utility.presentAlert('Alert','', [],this.utility.translateText('MSG').loginCredentialsMailed, [this.utility.translateText("MODALS").BUTTONS.OK])
            this.router.navigate(["/tabs/area-of-interest"]);
          } else {
            if(res.msg == 'Sponsor does not exist'){
              this.utility.presentAlert('Alert','', [],this.utility.translateText('MSG').activationCode, [this.utility.translateText("MODALS").BUTTONS.OK])
            }
            else{
               this.utility.presentToast(res.msg,"top");
              
            }
          }
        })
        .catch((err: any) => {
          console.log(err);
          loading.dismiss();
        });
    }
  }
  get formControls() {
    return this.form.controls;
  }
  initForm() {
    this.form = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.maxLength(100)]],
      lastName: ["", [Validators.required, Validators.maxLength(100)]],
      honor: ["", []],
      sponsorId: ["", [Validators.required, Validators.maxLength(6), Validators.minLength(1)]],
      email: ["", [Validators.required, Validators.pattern(pattern.email)]],
      language: ["", [Validators.required]],
      country: ["", [Validators.required]],
      countryNames: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      phoneCode: [""],
      notificationToken: [""],
      agree: [false, [Validators.requiredTrue]],
    });
    let messages = this.utility.translateText('MSG')
    this.validationMessage = {
      firstName: [
        { type: "required", message: messages.required },
        { type: "maxlength", message: message.maxLength(100,messages.maxLength,messages.characters) },
      ],
      lastName: [
        { type: "required", message: messages.required },
        { type: "maxlength", message: message.maxLength(100,messages.maxLength,messages.characters) },
      ],
      honor: [{ type: "required", message: messages.required }],
      agree: [{ type: "required", message: messages.required }],
      sponsorId: [
        { type: "required", message: messages.required },
        { type: "maxlength", message: message.maxLength(6,messages.maxLength,messages.characters) },
        { type: "minlength", message: message.minLength(1,messages.minLength,messages.characters) },
      ],
      email: [
        { type: "required", message: messages.required },
        { type: "pattern", message: messages.email },
      ],
      language: [{ type: "required", message: messages.required }],
      country: [{ type: "required", message: messages.required }],
      phone: [
        { type: "required", message: messages.required },
        { type: "wrongNumber", message: messages.phoneNumber },
      ],
    };
    this.form.get("language").setValue(this.utility.deviceLang);
  }

  ionViewDidLeave() {
    this.videoSer.playerAPI() && this.videoSer.playerAPI().pause();
  }
}
