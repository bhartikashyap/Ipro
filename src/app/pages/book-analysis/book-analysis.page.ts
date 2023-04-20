import { AbstractType, OnInit, LOCALE_ID, Inject } from "@angular/core";
import { Component, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { IonicSelectableComponent } from "@ionic-selectable/angular";
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController, NavController } from "@ionic/angular";
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";
import { dobFilter, message, session } from "src/app/utility/message";
import { pattern } from "src/app/utility/pattern";
import { format, parseISO } from "date-fns";
import { PhoneNumberValidator } from "src/app/utility/phone-number-validator";
import { IonDatetime } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { Browser } from '@capacitor/browser';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';
import { NgbCalendar, NgbDate, NgbDateStruct, NgbInputDatepickerConfig, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: "app-book-analysis",
  templateUrl: "./book-analysis.page.html",
  styleUrls: ["./book-analysis.page.scss"],
  providers: [NgbInputDatepickerConfig]
})
export class BookAnalysisPage implements OnInit {
  form: FormGroup;
  doberror: any = '';
  profile: any;
  birthday = false;
  deliveryAddress = true;
  private = false;
  company = false;
  selectedDate: any;
  countires: any = [];
  selectedCountry: any;
  myDate: any;
  paymentUrl: any;
  paymentId: any;
  ionModelOpen = false;
  latest_date: any;
  paymentInti: boolean = false;
  browser: any;
  options: InAppBrowserOptions = {
    location: 'yes',//Or 'no' 
    hidden: 'no', //Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',//Android only ,shows browser zoom controls 
    hardwareback: 'no',
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


  
  apiPaymentStatus: any;
  userBillingAddress: any;
  openPage: any;
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

  public membershipPurchased: boolean;

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
  ) {




  }


  async ngOnInit() {
    this.initForm();
    // this.minAge();


  }

  // onClick(e) {
  //   this.dp.open();
  // }
  // handleOutsideClick(e) {
  //   if (!this.dp.isOpen() || e.target.id == this.controlName
  //     || (e.target.offsetParent && e.target.offsetParent.localName.includes('ngb-datepicker'))
  //     || !(e.target.parentElement && e.target.parentElement.parentElement && !e.target.parentElement.parentElement.localName.includes('ngb-datepicker'))) {
  //     return;
  //   }
  //   if (this.dp.isOpen() && e.target.id != this.controlName) {
  //     this.dp.close();
  //   }
  // }
  // onDateChange(dt: any) {
  //   console.log(dt.month + '/' + dt.day + '/' + dt.year);
  //  //this.dob= dt.day + '-' +dt.month +'-'+ dt.year
  //  // this.form.get('dob').setValue({ year: dt.year, month: dt.month, day: dt.day });
  //   this.notify.emit(dt.month + '/' + dt.day + '/' + dt.year);
  // }



  async ionViewWillEnter() {
    this.paymentInti = false;

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
    let loading = await this.utility.presentLoading('yes');
    let result: any = await this.apiService.getProfile();
    loading.dismiss();
    let selectedCountry;
    if (result.status == 1) {
      this.profile = result.data.profile ? result.data.profile : null;
      console.log(this.profile, "this.profile");
      if (this.profile) {
        this.form.get("email").setValue(this.profile.userEmail);
        this.form.get("phone").setValue(this.profile.phone);
        this.form.get("streetname").setValue(this.profile.streetname);
        this.form.get("nr").setValue(this.profile.nr);
        this.form.get("city").setValue(this.profile.city);
        this.form.get("zipCode").setValue(this.profile.zipCode);
        // var date: NgbDateStruct = { year: 1789, month: 7, day: 14 };
        // console.log(date, "date");
        // this.form.get('dob').setValue({ year: 1989, month: 7, day: 14 });
        this.changeDobFormat(this.profile.dob, 'profile');
        // this.dateAdapter.toModel(this.ngbCalendar.getToday())!;

        await this.getCountries();



      }

    }
  }

  changeDobFormat(selectedDate, type) {
    if (selectedDate != '') {
      let dob = selectedDate;
      if (type == 'profile' && selectedDate.indexOf('-') > -1) {
        dob = selectedDate.split('-');
        // console.log(dob[1] + '/' + dob[0] + '/' + dob[2])
        this.dob = { day: parseInt(dob[0]), month: parseInt(dob[1]), year: parseInt(dob[2]) };  //new date picker code
        //  this.dob = { year: parseInt(dob[0]), month: parseInt(dob[1]), day: parseInt(dob[2]) };

        this.form.get("dd").setValue(parseInt(dob[0]));
        this.form.get("mm").setValue(parseInt(dob[1]));
        this.form.get("yyyy").setValue(parseInt(dob[2]));
        // this.form.get("dob").setValue(this.dob);
        // console.log(this.dob)
        // let dobReg = new Date(dob[1] + '/' + dob[0] + '/' + dob[2]).toLocaleString('en-us', {
        //   year: 'numeric',
        //   month: 'short',
        //   day: 'numeric',
        // })
        // this.form.get('dob').setValue(dobReg);
        //  this.mydob = dobReg;
        //  console.log(this.mydob)
      }
      // else {
      //   console.log(dob[2] + '/' + dob[1] + '/' + dob[0])
      //  // this.form.get('dob').setValue({ year: 1989, month: 7, day: 14 });
      //   let dobReg = new Date(dob[2] + '/' + dob[1] + '/' + dob[0]).toLocaleString('en-us', {
      //     year: 'numeric',
      //     month: 'short',
      //     day: 'numeric',
      //   });
      //   return dobReg;
      // }

    }
  }



  // minAge() {
  //   var yearMS = 365 * (1000 * 60 * 60 * 24); // 365 days
  //   var now = new Date().getTime();
  //   var maxDobMS = now - (18 * yearMS);
  //   var minDobMS = now - (100.5 * yearMS);
  //   this.maxDobString = new Date(maxDobMS).toISOString().slice(0, 10);
  //   this.minDobString = new Date(minDobMS).toISOString().slice(0, 10);
  //   let maxDate = this.maxDobString.split('-');
  //   let minDate = this.minDobString.split('-')
  //   this.maxDobString = { year: parseInt(maxDate[0]), month: parseInt(maxDate[1]), day: parseInt(maxDate[2]) };
  //   this.dob = { year: parseInt(maxDate[0]), month: parseInt(maxDate[1]), day: parseInt(maxDate[2]) };
  //   this.form.get("dob").setValue(this.dob);

  //   this.minDobString = { year: parseInt(minDate[0]), month: parseInt(minDate[1]), day: parseInt(minDate[2]) };
  //   // console.log(this.config.maxDate, this.config.minDate)

  //   // this.maxDobString =  this.changeDobFormat(this.maxDobString,"max");

  //   // this.minDobString = this.changeDobFormat(this.minDobString,"min");
  //   //  this.mydob =new Date(this.maxDobString).toISOString() ;
  //   console.log(this.maxDobString, this.minDobString);
  // }

  initForm() {
    this.form = this.fb.group({
      selected_plan: ["", []],
      role: ["", [Validators.required]],
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
      dd: ["", [Validators.required]],
      mm: ["", [Validators.required]],
      yyyy: ["", [Validators.required]],
      additionalAddressInfo: ["", [Validators.maxLength(200)]],
      delivery_address_added: [true],
      paymentId: [""],
      companyName: [""],
      taxId: [""],
      deliveryFirstName: [""],
      deliveryLastName: [""],
      deliveryCompanyName: [""],
      deliveryStreetName: [""],
      deliveryHouseNumber: [""],
      deliveryAdditionalAddressInfo: [""],
      deliveryZipcode: [""],
      deliveryCity: [""],
      deliveryCountry: [""],
      private: [false],
      company: [false],
    });
    this.submitted = false;
    this.deliveryAddress = true;
    this.private = true;
    this.form.get("private").setValue(this.private);
    this.form.get("role").setValue("Private Person");
    this.company = false;
    console.log(this.form);
    let messages = this.utility.translateText('MSG')
    this.validationMessage = {
      selected_plan: [{ type: "required", message: messages.required }],
      role: [{ type: "required", message: messages.required }],
      email: [
        { type: "required", message: messages.required },
        { type: "pattern", message: messages.email },
      ],
      streetname: [
        { type: "required", message: messages.required },
        { type: "maxlength", message: message.maxLength(100, messages.maxLength, messages.characters) },
      ],
      nr: [
        { type: "required", message: messages.required },
        { type: "maxlength", message: message.maxLength(50, messages.maxLength, messages.characters) },
      ],
      city: [
        { type: "required", message: messages.required },
        { type: "maxlength", message: message.maxLength(100, messages.maxLength, messages.characters) },
      ],
      zipCode: [
        { type: "required", message: messages.required },
        { type: "maxlength", message: message.maxLength(10, messages.maxLength, messages.characters) },
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
      dd: [{ type: "required", message: messages.required }, { type: "pattern", message: message.dobFilter(1, 31, this.form.get("dd").value, "date") }
      ],
      mm: [{ type: "required", message: messages.required }, { type: "pattern", message: message.dobFilter(1, 12, this.form.get("mm").value, "date") }

      ],
      yyyy: [{ type: "required", message: messages.required }, { type: "pattern", message: message.dobFilter(1992, 2005, this.form.get("yyyy").value, "year") }
      ],

      additionalAddressInfo: [
        { type: "required", message: messages.required },
        { type: "maxlength", message: message.maxLength(200, messages.maxLength, messages.characters) },
      ],
      delivery_address_added: [{ type: "required", message: messages.required }],
      paymentId: [{ type: "required", message: messages.required }],
      companyName: [
        { type: "required", message: messages.required },
        { type: "maxlength", message: message.maxLength(200, messages.maxLength, messages.characters) },
      ],
      taxId: [
        { type: "required", message: messages.required },
        { type: "maxlength", message: message.maxLength(200, messages.maxLength, messages.characters) },
      ],
      deliveryFirstName: [
        { type: "required", message: messages.required },
        // { type: "pattern", message: messages.alphabate },
        { type: "maxlength", message: message.maxLength(100, messages.maxLength, messages.characters) },
      ],
      deliveryLastName: [
        { type: "required", message: messages.required },
        // { type: "pattern", message: messages.alphabate },
        { type: "maxlength", message: message.maxLength(100, messages.maxLength, messages.characters) },
      ],
      deliveryCompanyName: [
        { type: "maxlength", message: message.maxLength(200, messages.maxLength, messages.characters) },
      ],
      deliveryStreetName: [
        { type: "required", message: messages.required },
        { type: "maxlength", message: message.maxLength(100, messages.maxLength, messages.characters) },
      ],
      deliveryHouseNumber: [
        { type: "required", message: messages.required },
        { type: "maxlength", message: message.maxLength(50, messages.maxLength, messages.characters) },
      ],
      deliveryAdditionalAddressInfo: [
        { type: "required", message: messages.required },
        { type: "maxlength", message: message.maxLength(200, messages.maxLength, messages.characters) },
      ],
      deliveryZipcode: [
        { type: "required", message: messages.required },
        { type: "maxlength", message: message.maxLength(10, messages.maxLength, messages.characters) },
        { type: "pattern", message: messages.numeric },
      ],
      deliveryCity: [
        { type: "required", message: messages.required },
        { type: "maxlength", message: message.maxLength(100, messages.maxLength, messages.characters) },
      ],
      deliveryCountry: [
        { type: "required", message: messages.required },
        { type: "maxlength", message: message.maxLength(100, messages.maxLength, messages.characters) },
      ],
    };
  }

  // confirm() {
  //   this.datetime.confirm();
  // }

  // reset1() {
  //   this.datetime.reset();
  // }


  // calculate_age(dob) {



  //   var month_diff = Date.now() - dob.getTime();
  //   //convert the calculated difference in date format
  //   var age_dt = new Date(month_diff);
  //   //extract year from date    
  //   var year = age_dt.getUTCFullYear();
  //   //now calculate the age of the user
  //   var age = Math.abs(year - 1970);
  //   console.log(age)
  //   if (age >= 18) {
  //     this.doberror = "";

  //     return true;
  //   }
  //   else {
  //     this.doberror = this.utility.translateText('BOOKING_ANALYSIS').AGE_ERROR;

  //     return false;
  //   }

  // }


  formatDate(value: string) {

    return format(parseISO(value), 'MMM dd yyyy');

  }

  openCart() {
    this.utility.goNext("/tabs/cart")
  }

  reset() {
    this.submitted = false;
    // this.private = true;
    // this.company = false;
    this.deliveryAddress = true;
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

    if (type === "countryname" && addType == 'billing') {

      this.form.get("country").setValue(event.value.countryName)

    }
    else if (type === "countryname" && addType == 'delivery') {
      this.form.get("deliveryCountry").setValue(event.value.countryName)
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


  companyChange(event: any) {
    if (this.company == true) {
      this.form.get("company").setValue(this.company);
      this.private = false;
      this.form.get("private").setValue(this.private);
      this.form.get("role").setValue("Company");
      this.form.get("private").updateValueAndValidity();
      this.form.get("role").updateValueAndValidity();
      this.form.get("taxId").setValidators([Validators.maxLength(200)]);
      this.form.get("taxId").updateValueAndValidity();
      // this.form.get("dd").clearValidators();
      // this.form.get("dd").setValue('')
      // this.form.get("dd").updateValueAndValidity();
      // this.form.get("mm").clearValidators();
      // this.form.get("mm").setValue('')
      // this.form.get("mm").updateValueAndValidity();
      // this.form.get("yyyy").clearValidators();
      // this.form.get("yyyy").setValue('')
      // this.form.get("yyyy").updateValueAndValidity();
      this.form
        .get("deliveryLastName")
        .setValidators([
          // Validators.pattern(pattern.alphabate),
          Validators.maxLength(100),
        ]);
      this.form.get("deliveryLastName").updateValueAndValidity();
      this.form
        .get("deliveryLastName")
        .setValidators([
          // Validators.pattern(pattern.alphabate),
          Validators.maxLength(100),
        ]);
      this.form.get("deliveryFirstName").updateValueAndValidity();
      this.form
        .get("companyName")
        .setValidators([Validators.required, Validators.maxLength(200)]);
      this.form.get("companyName").updateValueAndValidity();
    } else {
      this.private = true;
      this.form.get("private").setValue(this.private);
      this.form.get("role").setValue("Private Person");
      this.form.get("private").updateValueAndValidity();
      this.form.get("role").updateValueAndValidity();
      this.form.get("taxId").clearValidators();
      this.form.get("taxId").updateValueAndValidity();
      this.form.get("companyName").clearValidators();

      this.form.get("companyName").updateValueAndValidity();
    }
  }

  deliveryChange(event: any) {
    this.form.get("delivery_address_added").setValue(this.deliveryAddress);
    if (!this.deliveryAddress) {
      this.form
        .get("deliveryFirstName")
        .setValidators([
          Validators.required,
          // Validators.pattern(pattern.alphabate),
          Validators.maxLength(100),
        ]);
      this.form.get("deliveryFirstName").updateValueAndValidity();
      this.form
        .get("deliveryLastName")
        .setValidators([
          Validators.required,
          // Validators.pattern(pattern.alphabate),
          Validators.maxLength(100),
        ]);
      this.form.get("deliveryLastName").updateValueAndValidity();
      this.form
        .get("deliveryStreetName")
        .setValidators([Validators.required, Validators.maxLength(100)]);
      this.form.get("deliveryStreetName").updateValueAndValidity();
      this.form
        .get("deliveryHouseNumber")
        .setValidators([Validators.required, Validators.maxLength(50)]);
      this.form.get("deliveryHouseNumber").updateValueAndValidity();
      this.form
        .get("deliveryAdditionalAddressInfo")
        .setValidators([Validators.maxLength(200)]);
      this.form.get("deliveryAdditionalAddressInfo").updateValueAndValidity();
      this.form
        .get("deliveryZipcode")
        .setValidators([
          Validators.required,
          Validators.pattern(pattern.numeric),
          Validators.maxLength(10),
        ]);
      this.form.get("deliveryZipcode").updateValueAndValidity();
      this.form
        .get("deliveryCity")
        .setValidators([Validators.required, Validators.maxLength(100)]);
      this.form.get("deliveryCity").updateValueAndValidity();
      this.form
        .get("deliveryCountry")
        .setValidators([Validators.required, Validators.maxLength(100)]);
      this.form.get("deliveryCountry").updateValueAndValidity();
    } else {
      this.form.get("deliveryFirstName").clearValidators();
      this.form.get("deliveryFirstName").updateValueAndValidity();
      this.form.get("deliveryLastName").clearValidators();
      this.form.get("deliveryLastName").updateValueAndValidity();
      this.form.get("deliveryStreetName").clearValidators();
      this.form.get("deliveryStreetName").updateValueAndValidity();
      this.form.get("deliveryHouseNumber").clearValidators();
      this.form.get("deliveryHouseNumber").updateValueAndValidity();
      this.form.get("deliveryAdditionalAddressInfo").clearValidators();
      this.form.get("deliveryAdditionalAddressInfo").updateValueAndValidity();
      this.form.get("deliveryZipcode").clearValidators();
      this.form.get("deliveryZipcode").updateValueAndValidity();
      this.form.get("deliveryCity").clearValidators();
      this.form.get("deliveryCity").updateValueAndValidity();
      this.form.get("deliveryCountry").clearValidators();
      this.form.get("deliveryCountry").updateValueAndValidity();
    }
  }

  async submit() {
    this.submitted = true;
    this.doberror = '';
    if (this.form.get("company").value) {
      if (this.form.get("deliveryFirstName").value != "" && this.form.get("deliveryFirstName").value != undefined && this.form.get("deliveryFirstName").value != null && this.form.get("deliveryLastName").value != "" && this.form.get("deliveryLastName").value != undefined && this.form.get("deliveryLastName").value != null) {

        this.form
          .get("companyName")
          .setValidators([Validators.maxLength(200)]);
        this.form.get("companyName").updateValueAndValidity();


      }
      else if (this.form.get("companyName").value != "" && this.form.get("companyName").value != undefined && this.form.get("companyName").value != null) {

        this.form
          .get("deliveryLastName")
          .setValidators([
            // Validators.pattern(pattern.alphabate),
            Validators.maxLength(100),
          ]);
        this.form.get("deliveryLastName").updateValueAndValidity();
        this.form
          .get("deliveryFirstName")
          .setValidators([
            // Validators.pattern(pattern.alphabate),
            Validators.maxLength(100),
          ]);
        this.form.get("deliveryFirstName").updateValueAndValidity();
      }
    }
    console.log(this.form.valid);
    console.log(this.form, this.form.get("dd").value)
    // if(!this.form.get("company").value){
    if (this.form.get("dd").value < 1 || this.form.get("dd").value > 31 || this.form.get("mm").value < 1 || this.form.get("mm").value > 12 || this.form.get("yyyy").value < 1922 || this.form.get("yyyy").value > 2005) {
      this.doberror = 'Error';
    }
    else {
      this.doberror = ''
    }
    // }

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
      if (formData.taxId) {
        let checkTaxId: any = await this.apiService.checkTaxId(
          this.profile.countryId,
          formData.taxId
        );
        if (checkTaxId.status == 0) {
          this.utility.presentToast(checkTaxId.msg, "bottom");
          return false;
        }
      }
      (formData.selected_plan = formData.selected_plan
        ? formData.selected_plan
        : "body analysis"),
        console.log(formData);
      this.utility.setStorage(session.BOOKING, JSON.stringify(formData));
      this.reset();
      this.buyCart(formData);


    }
  }

  // openDate() {
  //   this.birthday = !this.birthday;
  // }

  // changeDate(val: any) {
  //   this.selectedDate = val;
  //   console.log(val);
  //   let slectedDate = val.split('T')[0].split('-');
  //   console.log(slectedDate[1] + '/' + slectedDate[2] + '/' + slectedDate[0])

  //   slectedDate = new Date(slectedDate[1] + '/' + slectedDate[2] + '/' + slectedDate[0])
  //   var age = this.calculate_age(slectedDate);
  //   console.log(age);
  //   this.form.get("dob").setValue(format(parseISO(val), "MMM dd yyyy"));
  //   this.birthday = false;
  // }



  async buyCart(formdata) {

    console.log(this.profile, "this.profile");
    console.log(formdata, "this.formdata");
    this.latest_date = '';


    if (!formdata) {
      this.utility.presentToast(this.utility.translateText("BOOKING_ANALYSIS").NO_BOOKING, "bottom");
      return false;
    } else {
      this.latest_date = formdata.dd + "-" + formdata.mm + "-" + formdata.yyyy;
      // if (formdata.dob) {
      //   // let dob = new Date(formdata.dob);
      //   console.log(formdata.dob)
      //   // console.log(dob)
      //   this.latest_date = this.dob.day+"-"+this.dob.month+"-"+this.dob.year;
      //   //this.datepipe.transform(dob, 'dd-MM-yyyy');
      // }

      var params = {
        selected_plan: this.selectedPlan ? this.selectedPlan : '',
        email: formdata.email ? formdata.email : '',
        countryId: formdata.countryId ? Number(formdata.countryId) : 0,
        nr: formdata.nr ? formdata.nr : '',
        streetname: formdata.streetname ? formdata.streetname : '',
        city: formdata.city ? formdata.city : '',
        zipCode: formdata.zipCode ? Number(formdata.zipCode) : '',
        dob: this.latest_date,
        paymentId: this.paymentId,
        role: formdata.role,
        country: formdata.country,
        countryName: formdata.country,
        phone: formdata.phone,
        phoneCode: formdata.phoneCode,
        companyName: formdata.companyName,
        taxId: formdata.taxId,
        additionalAddressInfo: formdata.additionalAddressInfo,
        delivery_address_added: !formdata.delivery_address_added
      }
      if (!formdata.delivery_address_added) {
        params["deliveryFirstName"] = formdata.deliveryFirstName,
          params["deliveryLastName"] = formdata.deliveryLastName,
          params["deliveryCompanyName"] = formdata.deliveryCompanyName,
          params["deliveryStreetName"] = formdata.deliveryStreetName,
          params["deliveryHouseNumber"] = formdata.deliveryHouseNumber,
          params["deliveryAdditionalAddressInfo"] = formdata.deliveryAdditionalAddressInfo,
          params["deliveryZipcode"] = formdata.deliveryZipcode,
          params["deliveryCity"] = formdata.deliveryCity,
          params["deliveryCountry"] = formdata.deliveryCountry
      }



      console.log(params, "this.params");
      let promoCode = await this.utility.getStorage('promocode');
      if (promoCode != null && promoCode != undefined) {
        params["promoCode"] = promoCode;
      }

      let res: any = await this.apiService.cartPayment(params);
      this.utility.upadteApp = false;

      if (res.status) {



        this.paymentId = res.paymentId;
        if (promoCode != null && promoCode != undefined) {
          this.utility.removeStorage('promocode');
          this.paymentUrl = res.response.return_url;
        }
        else {
          this.paymentUrl = res.response.result.redirect_url;
        }
        params['paymentId'] = res.paymentId;
        if (this.paymentUrl) {
          //this.paymentUrl = this.domSanit.bypassSecurityTrustResourceUrl(this.paymentUrl)
        }
        this.validatePayment(params,0);
        // this.paymentInti = true;

        this.inAppBrowser(this.paymentUrl);
        // let url:any = await this.utility.changeMenu();
        //   this.router.navigate([url]);


      }
      else {
        this.utility.presentToast(this.utility.translateText('MSG').someissueInNetwork, "bottom");
        return false;
      }


    }



  }

  async inAppBrowser(paymentUrl) {


    // if (this.platform.is('android')) {
    let target = "_blank";
    this.openPage = this.theInAppBrowser.create(paymentUrl, target, this.options);

    this.openPage.on('exit').subscribe(event => {
      console.log(event, 'exit');
      this.onManualClose();
      // this.paymentInti = false;
    })
    this.openPage.on('loadstart').subscribe(event => {
      console.log(event);
      // this.paymentInti = false;
    })

    this.openPage.on('loadstop').subscribe(event => {
      console.log(event);
      // this.paymentInti = false;
    })
    // } else {
    //   Browser.open({ url: paymentUrl });

    //   Browser.addListener('browserPageLoaded', () => { }).then((info) => {
    //     console.log(info);
    //   })

    //   Browser.addListener('browserFinished', () => { }).then((info) => {
    //     console.log(info);
    //     this.paymentInti = false;
    //   })
    // }
  }

  async loaderHide() {
    this.paymentInti = false;
  }

  async closeBrowser() {
    // if (this.platform.is('android')) {
    this.openPage.close()


    // } else {
    //   Browser.close()


    // }
  }


  async getPayment(){
    let getLastPayments:any = await this.apiService.getLastPayments();
      if(getLastPayments?.status){
        this.utility.getLastPayments = getLastPayments?.data;
  
      }
  }
  async onManualClose() {
    console.log(Browser)
    // if (this.platform.is('android')) {
    // this.openPage.on('loadstop').subscribe(event => {
    //   console.log(event);
    //   // this.paymentInti = false;
    // })

    //  this.openPage.on('exit').subscribe(event => {
    //   console.log(event, 'exit');
    //   // this.paymentInti = false;
    // })

    if (this.apiPaymentStatus.toLowerCase() == "payment not completed") {
      this.validatePayment(this.userBillingAddress,0);

      this.utility.paymnetCompleted = false;
    }
    else if (this.apiPaymentStatus.toLowerCase() == "payment completed") {
      this.buyNow(this.userBillingAddress, this.apiPaymentStatus, this.paymentId);
      this.utility.paymnetCompleted = true;
      
    }
    else if (this.apiPaymentStatus.toLowerCase() == "payment cancelled") {
      this.utility.presentAlert(

        "",
        "",
        [],
        this.utility.translateText("BOOKING_ANALYSIS").payment_cancelled,
        [{
          text: this.utility.translateText("MODALS").BUTTONS.OK,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.paymentInti = false;
            //this.router.navigate([url]);
          }
        }]



      );
    }
    else {
      // this.paymentInti =false;
    }

    // } else {
    // Browser.addListener('browserPageLoaded', () => { }).then((info) => {
    //   console.log(info);
    //   this.paymentInti = false;
    // })
    // Browser.addListener('browserFinished', () => { }).then((info) => {
    //   console.log(info);
    //   this.paymentInti = false;
    // })

    //  }
  }





  async validatePayment(userBillingData,redirections) {
  let redirection  =redirections;
    this.userBillingAddress = userBillingData
    let result: any = await this.apiService.paymentStatus({
      paymentId: this.paymentId
    });
    this.apiPaymentStatus = result?.msg;
    if (this.apiPaymentStatus.toLowerCase() == "payment not completed") {
      setTimeout(() => {
        // if (this.router.url == '/tabs/book-analysis') {
        this.utility.paymnetCompleted = false;
        console.log(this.paymentUrl);
        if(result?.returned == '1' ){
          this.closeBrowser();
          // this.getPayment();
          if(!redirection){
            this.redirectPage(result);
            redirection++;
          }
        }
        // else{
        this.validatePayment(userBillingData,redirection);

       // }

       
        // }
      }, 2000);

    } else if (this.apiPaymentStatus.toLowerCase() == "payment completed") {
      this.apiPaymentStatus = "completed";
      // this.buyNow(this.userBillingAddress, this.apiPaymentStatus, this.paymentId);
      this.utility.paymnetCompleted = true;

      if (result.redirect_to_questionnaire.toLowerCase() == 'no') {
        let result: any = await this.apiService.getProfile();
        if (result.status == 1) {
          let profile = result.data.profile ? result.data.profile : null;
          this.utility.setStorage('userRole', profile.userType);
          this.utility.setStorage('CHANGE_DASH', profile.userType);
        }
        let url: any = await this.utility.changeMenu();
        this.router.navigate([url]);

      } else {
       // this.router.navigate(["/questionare"])
      }
    }
    else if (this.apiPaymentStatus.toLowerCase() == "payment cancelled") {
      this.apiPaymentStatus = "cancelled";
      this.closeBrowser();
      // this.getPayment();
      this.utility.presentAlert(

        "",
        "",
        [],
        this.utility.translateText("BOOKING_ANALYSIS").payment_cancelled,
        [{
          text: this.utility.translateText("MODALS").BUTTONS.OK,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.paymentInti = false;
          }
        }]



      );
    }
  }


  async redirectPage(result){

    if (result?.redirect_to_questionnaire.toLowerCase() == 'no') {
      let result: any = await this.apiService.getProfile();
      if (result.status == 1) {
        let profile = result.data.profile ? result.data.profile : null;
        this.utility.setStorage('userRole', profile.userType);
        this.utility.setStorage('CHANGE_DASH', profile.userType);
      }
      let url: any = await this.utility.changeMenu();
      this.router.navigate([url]);

    } else {
      this.router.navigate(["/questionare"])
    }
  }

  async buyNow(userBillingData, paymentStatus, paymentId) {
    this.closeBrowser();

    // this.ionModelOpen = false;
    this.profile.paymentId = this.paymentId;
    let params;
    // if (this.profile.role == 'Prospect') {
    params = userBillingData;
    params.paymentId = paymentId;

    // }
    // else {
    //   params = {
    //     paymentId: this.paymentId
    //   }
    //  };
    console.log(params, "finalData");
    let data: any = await this.apiService.buyNow(params);
    if (data.status == 1) {
      this.utility.upadteApp = true;
      this.utility.cartNo = 0;
      let memberShipPurachsed = await this.utility.getStorage('memberShipPurachsed');
      this.utility.presentToast(this.utility.translateText('MSG').paymentIntiated, "bottom");
      //this.navController.
      if (data.redirect_to_questionnaire.toLowerCase() == 'no') {
        let result: any = await this.apiService.getProfile();
        if (result.status == 1) {
          let profile = result.data.profile ? result.data.profile : null;
          this.utility.setStorage('userRole', profile.userType);
          this.utility.setStorage('CHANGE_DASH', profile.userType);
        }
        let url: any = await this.utility.changeMenu();
        this.router.navigate([url]);

      } else {
        this.router.navigate(["/questionare"])
      }
      this.paymentInti = false;


    } else {
      this.utility.presentToast(this.utility.translateText('MSG').someissueInNetwork, "bottom");
      return false;
    }

  }
}
