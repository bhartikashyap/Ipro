import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';
import { message } from 'src/app/utility/message';
import { pattern } from 'src/app/utility/pattern';
import { format, parseISO } from "date-fns";
@Component({
  selector: "app-book-analysis",
  templateUrl: "./book-analysis.page.html",
  styleUrls: ["./book-analysis.page.scss"],
})
export class BookAnalysisPage implements OnInit {
  form: FormGroup;
  profile: any;
  birthday = false;
  deliveryAddress = true;
  private = false;
  company = false;
  selectedDate: any;
  get formControl() {
    return this.form.controls;
  }
  submitted: boolean = false;
  validationMessage: any;
  constructor(
    private router: Router,
    private navController: NavController,
    private fb: FormBuilder,
    private utility: UtilService,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.initForm();
    this.getProfile();
  }
  async getProfile() {
    let loading = await this.utility.presentLoading();
    let result: any = await this.apiService.getProfile();
    this.profile = result.data.profile;
    loading.dismiss();
    if (result.status === 1) {
      this.form.get("email").setValue(this.profile.userEmail);
      this.form.get("mobile").setValue(this.profile.phone);
      this.form.get("stritName").setValue(this.profile.streetname);
      this.form.get("houseNumber").setValue(this.profile.nr);
      this.form.get("city").setValue(this.profile.city);
      this.form.get("zip").setValue(this.profile.zipCode);
    }
  }

  initForm() {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.pattern(pattern.email)]],
      mobile: [
        "",
        [Validators.required, Validators.pattern(pattern.phoneNumber)],
      ],
      dob: ["", [Validators.required]],
      stritName: ["", [Validators.required, Validators.maxLength(100)]],
      houseNumber: ["", [Validators.required, Validators.maxLength(50)]],
      additionalAddress: ["", [Validators.maxLength(200)]],
      zip: [
        "",
        [
          Validators.required,
          Validators.pattern(pattern.numeric),
          Validators.maxLength(10),
        ],
      ],
      city: ["", [Validators.required, Validators.maxLength(100)]],
      deliveryAddress: [true],
      private: [false],
      company: [false],
      companyName: [""],
      taxId: [""],
      deliveryFirstName: [""],
      deliveryLastName: [""],
      deliveryStreetName: [""],
      deliveryHouseNumber: [""],
      deliveryAdditionalAddressInfo: [""],
      deliveryZipcode: [""],
      deliveryCity: [""],
      deliveryCountry: [""],
    });

    this.validationMessage = {
      email: [
        { type: "required", message: message.required },
        { type: "pattern", message: message.email },
      ],
      mobile: [
        { type: "required", message: message.required },
        { type: "pattern", message: message.phoneNumber },
      ],
      dob: [{ type: "required", message: message.required }],
      deliveryAddress: [{ type: "required", message: message.required }],
      stritName: [
        { type: "required", message: message.required },
        { type: "maxlength", message: message.maxLength(100) },
      ],
      houseNumber: [
        { type: "required", message: message.required },
        { type: "maxlength", message: message.maxLength(50) },
      ],
      additionalAddress: [
        { type: "required", message: message.required },
        { type: "maxlength", message: message.maxLength(200) },
      ],
      zip: [
        { type: "required", message: message.required },
        { type: "maxlength", message: message.maxLength(10) },
        { type: "pattern", message: message.numeric },
      ],
      city: [
        { type: "required", message: message.required },
        { type: "maxlength", message: message.maxLength(100) },
      ],
      deliveryFirstName: [
        { type: "required", message: message.required },
        { type: "pattern", message: message.alphabate },
        { type: "maxlength", message: message.maxLength(100) },
      ],
      deliveryLastName: [
        { type: "required", message: message.required },
        { type: "pattern", message: message.alphabate },
        { type: "maxlength", message: message.maxLength(100) },
      ],
      deliveryStreetName: [
         { type: "required", message: message.required },
        { type: "maxlength", message: message.maxLength(100) },
      ],
      deliveryHouseNumber: [
        { type: "required", message: message.required },
        { type: "maxlength", message: message.maxLength(50) },
      ],
      deliveryAdditionalAddressInfo: [
        { type: "required", message: message.required },
        { type: "maxlength", message: message.maxLength(200) },
      ],
      deliveryZipcode: [
       { type: "required", message: message.required },
        { type: "maxlength", message: message.maxLength(10) },
        { type: "pattern", message: message.numeric },
      ],
      deliveryCity: [
        { type: "required", message: message.required },
        { type: "maxlength", message: message.maxLength(100) },
      ],
      deliveryCountry: [
        { type: "required", message: message.required },
        { type: "maxlength", message: message.maxLength(100) },
      ],
    };
  }

  goBack() {
    this.navController.back();
  }

  openCart() { }

  reset() {
    this.form.reset();
  }

  privateChange(event:any){
    this.form.get("private").setValue(this.private);
  }

  companyChange(event:any){
    this.form.get("company").setValue(this.company);
  }

  deliveryChange(event: any) {
    this.form.get("deliveryAddress").setValue(this.deliveryAddress);
    if (!this.deliveryAddress) {
      this.form.get('deliveryFirstName').setValidators([Validators.required,Validators.pattern(pattern.alphabate),Validators.maxLength(100)]);
      this.form.get('deliveryLastName').setValidators([Validators.required,Validators.pattern(pattern.alphabate),Validators.maxLength(100)]);
      this.form.get('deliveryStreetName').setValidators([Validators.required,Validators.maxLength(100)]);
      this.form.get('deliveryHouseNumber').setValidators([Validators.required,Validators.maxLength(50)]);
      this.form.get('deliveryAdditionalAddressInfo').setValidators([Validators.required,Validators.maxLength(200)]);
      this.form.get('deliveryZipcode').setValidators([Validators.required,Validators.pattern(pattern.numeric),Validators.maxLength(10)]);
      this.form.get('deliveryCity').setValidators([Validators.required,Validators.maxLength(100)]);
      this.form.get('deliveryCountry').setValidators([Validators.required,Validators.maxLength(100)]);
    }else{
      this.form.get('deliveryFirstName').clearValidators();
      this.form.get('deliveryFirstName').updateValueAndValidity();
      this.form.get('deliveryLastName').clearValidators();
      this.form.get('deliveryLastName').updateValueAndValidity();
      this.form.get('deliveryStreetName').clearValidators();
      this.form.get('deliveryStreetName').updateValueAndValidity();
      this.form.get('deliveryHouseNumber').clearValidators();
      this.form.get('deliveryHouseNumber').updateValueAndValidity();
      this.form.get('deliveryAdditionalAddressInfo').clearValidators();
      this.form.get('deliveryAdditionalAddressInfo').updateValueAndValidity();
      this.form.get('deliveryZipcode').clearValidators();
      this.form.get('deliveryZipcode').updateValueAndValidity();
      this.form.get('deliveryCity').clearValidators();
      this.form.get('deliveryCity').updateValueAndValidity();
      this.form.get('deliveryCountry').clearValidators();
      this.form.get('deliveryCountry').updateValueAndValidity();
    }
  }

  async submit() {
    this.submitted = true;
    if (this.form.valid) {
      this.submitted = false;
      let obj = {
        email: this.form.value.email,
        selected_plan: "",
        role: "",
        streetname: this.form.value.stritName,
        nr: this.form.value.houseNumber,
        additionalAddressInfo: this.form.value.additionalAddress,
        city: this.form.value.city,
        zipCode: this.form.value.zip,
        county: this.profile.countryId,
        phone: this.form.value.mobile,
        phoneCode: this.profile.honor,
        delivery_address_added: this.form.value.deliveryAddress ? "yes" : "no",
        paymentId: "",
        companyName: this.form.value.companyName,
        taxId: this.form.value.taxId,
        deliveryFirstName: this.form.value.deliveryFirstName,
        deliveryLastName: this.form.value.deliveryLastName,
        deliveryStreetName: this.form.value.deliveryStreetName,
        deliveryHouseNumber: this.form.value.deliveryHouseNumber,
        deliveryAdditionalAddressInfo:
          this.form.value.deliveryAdditionalAddressInfo,
        deliveryZipcode: this.form.value.deliveryZipcode,
        deliveryCity: this.form.value.deliveryCity,
        deliveryCountry: this.form.value.deliveryCountry,
      };
      console.log(obj);
      //  this.router.navigate(["/cart"]);
    }
  }
  openDate() {
    this.birthday = true;
  }

  changeDate(val: any) {
    this.selectedDate = val;
    this.form.get("dob").setValue(format(parseISO(val), "MMM dd yyyy"));
    this.birthday = false;
  }
}
