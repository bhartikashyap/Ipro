import {  OnInit, LOCALE_ID, Inject } from "@angular/core";
import { Component, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController, NavController } from "@ionic/angular";
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";
import { message, session } from "src/app/utility/message";
import { pattern } from "src/app/utility/pattern";
import { PhoneNumberValidator } from "src/app/utility/phone-number-validator";
import { IonDatetime } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';
import { NgbCalendar, NgbDate, NgbDateStruct, NgbInputDatepickerConfig, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { IonicSelectableComponent } from "@ionic-selectable/angular";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  form: FormGroup;
  doberror: any = '';
  profile: any;
  birthday = false;
  selectedDate: any;
  countires: any = [];
  selectedCountry: any;
  latest_date:any;
  mydob: any;
  get formControl() {
    return this.form.controls;
  }
  isDisabled: any;
  isWeekend: any;
  eventSource = [];

  selectedDates: Date;

  submitted: boolean = false;
  validationMessage: any;
   maxDate: any = new Date(new Date().setFullYear(new Date().getFullYear())).toISOString();
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;
  selectedPlan: any;
  dateValue = '';
  dateValue2 = '';
  public maxDobString: any;
  public minDobString: any;
  calendar = {
    mode: 'week',
    currentDate: new Date()
  };
  viewTitle: string;

  event = {
    title: '',
    desc: '',
    startTime: null,
    endTime: '',
    allDay: true
  };

  modalReady = false;

  dob;
  @Input() controlName: any;
  @ViewChild('dp') dp;
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private router: Router,
    private navController: NavController,
    private fb: FormBuilder,
    private utility: UtilService,
    private apiService: ApiService,
    private modalController: ModalController,
    private domSanit: DomSanitizer,
    public datepipe: DatePipe,
    private theInAppBrowser: InAppBrowser,
    private platform: Platform,
    public config: NgbInputDatepickerConfig,
    public calendars: NgbCalendar,
    private dateAdapter: NgbDateAdapter<string>
  ) { }

  ngOnInit() {
    this.initForm();
    this.minAge();
  }

  async ionViewWillEnter() {

    await this.getProfile();

  }

  async getCountries() {
    let result: any = await this.apiService.getCountryList();
    this.countires = result.countries;
    this.selectedCountry = this.countires.filter(item => item.phoneCode == this.profile.phoneCode)[0];
    // await this.getProfile();
    console.log(this.selectedCountry)
    this.form.get("phoneCode").setValue(this.selectedCountry.phoneCode);
    this.form
      .get("phone")
      .setValidators(
        PhoneNumberValidator(this.selectedCountry.countryCode)
      );
    this.form.get("phone").updateValueAndValidity();
    let country = this.countires.filter(item => item.countryId == this.profile.countryId)[0];
    this.form.get("country").setValue(country.countryName);
  }
  async getProfile() {
    let dob;
    this.selectedPlan = await this.utility.getStorage(session.SELECTED_PLAN);
    let loading = await this.utility.presentLoading();
    let result: any = await this.apiService.getProfile();
    loading.dismiss();
    let selectedCountry;
    if (result.status == 1) {
      this.profile = result.data.profile ? result.data.profile : null;
      console.log(this.profile, "this.profile");
      if (this.profile) {
        this.form.get("firstName").setValue(this.profile.firstName);
        this.form.get("lastName").setValue(this.profile.lastName);
        this.form.get("email").setValue(this.profile.userEmail);
        this.form.get("phone").setValue(this.profile.phone);
        this.form.get("streetname").setValue(this.profile.streetname);
        this.form.get("nr").setValue(this.profile.nr);
        this.form.get("city").setValue(this.profile.city);
        this.form.get("zipCode").setValue(this.profile.zipCode);
        // var date: NgbDateStruct = { year: 1789, month: 7, day: 14 };
        // console.log(date, "date");
        this.form.get('dob').setValue({ year: 1989, month: 7, day: 14 });
        this.changeDobFormat(this.profile.dob, 'profile');
        // this.dateAdapter.toModel(this.ngbCalendar.getToday())!;

        await this.getCountries();



      }

    }
  }

  changeDobFormat(selectedDate, type) {
    if (selectedDate != '' && selectedDate.indexOf('-') > -1) {
      let dob = selectedDate.split('-');
      if (type == 'profile') {
        // console.log(dob[1] + '/' + dob[0] + '/' + dob[2])
         this.dob = { day:parseInt(dob[0]) , month:  parseInt(dob[1]), year:  parseInt(dob[2])};  //new date picker code
      //  this.dob = { year: parseInt(dob[0]), month: parseInt(dob[1]), day: parseInt(dob[2]) };
        this.form.get("dob").setValue(this.dob);
        console.log(this.dob)
        let dobReg = new Date(dob[1] + '/' + dob[0] + '/' + dob[2]).toLocaleString('en-us', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
       // this.form.get('dob').setValue(dobReg);
         this.mydob = dobReg;
         console.log(this.mydob)
      }
      else {
        console.log(dob[2] + '/' + dob[1] + '/' + dob[0])

        let dobReg = new Date(dob[2] + '/' + dob[1] + '/' + dob[0]).toLocaleString('en-us', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
        return dobReg;
      }

    }
  }

 

  minAge() {
    var yearMS = 365 * (1000 * 60 * 60 * 24); // 365 days
    var now = new Date().getTime();
    var maxDobMS = now - (18 * yearMS);
    var minDobMS = now - (100.5 * yearMS);
    this.maxDobString = new Date(maxDobMS).toISOString().slice(0, 10);
    this.minDobString = new Date(minDobMS).toISOString().slice(0, 10);
    let maxDate = this.maxDobString.split('-');
    let minDate = this.minDobString.split('-')
    this.maxDobString = { year: parseInt(maxDate[0]), month: parseInt(maxDate[1]), day: parseInt(maxDate[2]) };
    this.dob = { year: parseInt(maxDate[0]), month: parseInt(maxDate[1]), day: parseInt(maxDate[2]) };
    this.form.get("dob").setValue(this.dob);

    this.minDobString = { year: parseInt(minDate[0]), month: parseInt(minDate[1]), day: parseInt(minDate[2]) };
    // console.log(this.config.maxDate, this.config.minDate)

    // this.maxDobString =  this.changeDobFormat(this.maxDobString,"max");

    // this.minDobString = this.changeDobFormat(this.minDobString,"min");
    //  this.mydob =new Date(this.maxDobString).toISOString() ;
    console.log(this.maxDobString, this.minDobString);
  }

  initForm() {
    this.form = this.fb.group({
      firstName: ["", [Validators.required, Validators.maxLength(100)]],
      lastName: ["", [Validators.required, Validators.maxLength(100)]],
      // honor: ["", []],
      email: ["", [Validators.required, Validators.pattern(pattern.email)]],
      streetname: ["", [Validators.required, Validators.maxLength(100)]],
      nr: ["", [Validators.required, Validators.maxLength(50)]],
      city: ["", [Validators.required, Validators.maxLength(100)]],
      zipCode: [
        "",
        [
          Validators.required,
          Validators.pattern(pattern.numeric),
          Validators.maxLength(10),
        ],
      ],
      country: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      phoneCode: ["", [Validators.required]],
      dob: ["", [Validators.required]],
      additionalAddressInfo: ["", [Validators.maxLength(200)]],
    });
    this.submitted = false;
    console.log(this.form);
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
      email: [
        { type: "required", message: messages.required },
        { type: "pattern", message: messages.email },
      ],
      streetname: [
        { type: "required", message: messages.required },
        { type: "maxlength", message: message.maxLength(100,messages.maxLength,messages.characters) },
      ],
      nr: [
        { type: "required", message: messages.required },
        { type: "maxlength", message: message.maxLength(50,messages.maxLength,messages.characters) },
      ],
      city: [
        { type: "required", message: messages.required },
        { type: "maxlength", message: message.maxLength(100,messages.maxLength,messages.characters) },
      ],
      zipCode: [
        { type: "required", message: messages.required },
        { type: "maxlength", message: message.maxLength(10,messages.maxLength,messages.characters) },
        { type: "pattern", message: messages.numeric },
      ],
      country: [{ type: "required", message: messages.required }],
      phone: [
        { type: "required", message: messages.required },
        // { type: "pattern", message: message.phoneNumber },
        { type: "wrongNumber", message: messages.phoneNumber },
      ],
      phoneCode: [
        { type: "required", message: messages.required },
        { type: "pattern", message: messages.numeric },
      ],
      dob: [{ type: "required", message: messages.required }],
      additionalAddressInfo: [
        { type: "required", message: messages.required },
        { type: "maxlength", message: message.maxLength(200,messages.maxLength,messages.characters) },
      ],
     
    };
  }

  async searchCountry(event) {
    this.utility.searchData(event, this.countires, 'countryName');
  }

  async selectCountry(event: {
    component: IonicSelectableComponent,
    value: any
  }, type, addType) {

    let loading = await this.utility.presentLoading();
    console.log(this.form.get("phone"))

    let phValue = this.form.get("phone").value

    if (type === "countryname" ) {

      this.form.get("country").setValue(event.value.countryName)

    }
   

    if (type === "phonecode") {
      this.selectedCountry = event.value;
      this.form.get("phoneCode").setValue(event.value.phoneCode);
      this.form
        .get("phone")
        .setValidators(PhoneNumberValidator(event.value.countryCode));
      this.form.get("phone").updateValueAndValidity();
    }

    loading.dismiss();
  }




 

  async submit() {
    this.submitted = true;
    console.log(this.form.valid);
    console.log(this.form)
    if (this.form.valid && this.doberror == '') {
      this.submitted = false;
      let formData: any = this.form.getRawValue();
      formData.countryId = this.countires.filter(item => item.countryName == formData.country)[0].countryId;
      if (this.profile.userEmail != formData.email) {
        let checkEmail: any = await this.apiService.checkEmail(formData.email);
        if (checkEmail.status == 0) {
          this.utility.presentToast(checkEmail.msg, "bottom");
          return false;
        }
      }
      this.updateProfile(formData);
    }
  }

  onDateChange(dt: any) {
    console.log(dt.month + '/' + dt.day + '/' + dt.year);
    this.notify.emit(dt.month + '/' + dt.day + '/' + dt.year);
  }


  async updateProfile(formdata) {

    console.log(this.profile, "this.profile");
    console.log(formdata, "this.formdata");
    this.latest_date = '';


    if (!formdata) {
      this.utility.presentToast(this.utility.translateText("BOOKING_ANALYSIS").NO_BOOKING, "bottom");
      return false;
    } else {
      this.latest_date = '';
      if (formdata.dob) {
        console.log(formdata.dob)
        this.latest_date = formdata.dob.day+"-"+formdata.dob.month+"-"+formdata.dob.year;
      }

      var params = {
        firstName: formdata.firstName ? formdata.firstName : '',
        lastName: formdata.lastName ? formdata.lastName : '',
        email: formdata.email ? formdata.email : '',
        countryId: formdata.countryId ? Number(formdata.countryId) : 0,
        nr: formdata.nr ? formdata.nr : '',
        streetname: formdata.streetname ? formdata.streetname : '',
        city: formdata.city ? formdata.city : '',
        zipCode: formdata.zipCode ? Number(formdata.zipCode) : '',
        // dob: this.latest_date,
        country: formdata.country,
      //  countryName: formdata.country,
        phone: formdata.phone,
        phoneCode: formdata.phoneCode,
        additionalAddressInfo: formdata.additionalAddressInfo,
        honor: "Mr",
        tegaxFXLink: "",
      }
   


      console.log(params, "this.params");

      let loading = await this.utility.presentLoading();

      let res: any = await this.apiService.updateProfile(params);
      loading.dismiss();

      if(res.status ){
         this.utility.presentToast(this.utility.translateText("BOOKING_ANALYSIS").Profile_updated, "bottom");

      }
    }
  }

}
