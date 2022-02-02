import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";
import { message, session } from "src/app/utility/message";
import { pattern } from "src/app/utility/pattern";
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
  ) {}

  ngOnInit() {
    this.initForm();
    this.getProfile();
  }

  async getProfile() {
    let loading = await this.utility.presentLoading();
    let result: any = await this.apiService.getProfile();
    loading.dismiss();
    if(result.status == 1){
      this.profile = result.data.profile ? result.data.profile : null;
      if(this.profile){
        this.form.get("email").setValue(this.profile.userEmail);
        this.form.get("phone").setValue(this.profile.phone);
        this.form.get("phoneCode").setValue(this.profile.phoneCode);
        this.form.get("streetname").setValue(this.profile.streetname);
        this.form.get("nr").setValue(this.profile.nr);
        this.form.get("city").setValue(this.profile.city);
        this.form.get("zipCode").setValue(this.profile.zipCode);
        this.form.get("country").setValue(this.profile.countryId);
      }
    }
  }

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
      phone: [
        "",
        [Validators.required, Validators.pattern(pattern.phoneNumber)],
      ],
      phoneCode: [
        "",
        [Validators.required],
      ],
      dob: ["", [Validators.required]],
      additionalAddressInfo: ["", [Validators.maxLength(200)]],
      delivery_address_added: [true],
      paymentId: [""],
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
      private: [false],
      company: [false],
    });
    this.submitted = false;
    this.validationMessage = {
      selected_plan: [{ type: "required", message: message.required }],
      role: [{ type: "required", message: message.required }],
      email: [
        { type: "required", message: message.required },
        { type: "pattern", message: message.email },
      ],
      streetname: [
        { type: "required", message: message.required },
        { type: "maxlength", message: message.maxLength(100) },
      ],
      nr: [
        { type: "required", message: message.required },
        { type: "maxlength", message: message.maxLength(50) },
      ],
      city: [
        { type: "required", message: message.required },
        { type: "maxlength", message: message.maxLength(100) },
      ],
      zipCode: [
        { type: "required", message: message.required },
        { type: "maxlength", message: message.maxLength(10) },
        { type: "pattern", message: message.numeric },
      ],
      country: [{ type: "required", message: message.required }],
      phone: [
        { type: "required", message: message.required },
        { type: "pattern", message: message.phoneNumber },
      ],
      phoneCode: [
        { type: "required", message: message.required },
        { type: "pattern", message: message.numeric },
      ],
      dob: [{ type: "required", message: message.required }],
      additionalAddressInfo: [
        { type: "required", message: message.required },
        { type: "maxlength", message: message.maxLength(200) },
      ],
      delivery_address_added: [{ type: "required", message: message.required }],
      paymentId: [{ type: "required", message: message.required }],
      companyName: [
        { type: "required", message: message.required },
        { type: "maxlength", message: message.maxLength(200) },
      ],
      taxId: [
        { type: "required", message: message.required },
        { type: "maxlength", message: message.maxLength(200) },
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

  openCart() {
    this.router.navigate(["/cart"]);
  }

  reset() {
    this.form.reset();
    this.submitted = false;
    this.private=false;
    this.company=false;
    this.deliveryAddress=true;
  }

  privateChange(event: any) {
    this.form.get("private").setValue(this.private);
    if (this.private) {
      this.company = false;
      this.form.get("company").setValue(this.company);
      this.form.get("role").setValue("Private Person");
      this.form.get("company").updateValueAndValidity();
      this.form.get("role").updateValueAndValidity();
    } else {
      this.company = true;
      this.form.get("company").setValue(this.company);
      this.form.get("role").setValue("Company");
      this.form.get("company").updateValueAndValidity();
      this.form.get("role").updateValueAndValidity();
    }
  }

  companyChange(event: any) {
    this.form.get("company").setValue(this.company);
    if (this.company == true) {
      this.private = false;
      this.form.get("private").setValue(this.private);
      this.form.get("role").setValue("Company");
      this.form.get("private").updateValueAndValidity();
      this.form.get("role").updateValueAndValidity();
      this.form
        .get("taxId")
        .setValidators([Validators.required, Validators.maxLength(200)]);
      this.form.get("taxId").updateValueAndValidity();
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
          Validators.pattern(pattern.alphabate),
          Validators.maxLength(100),
        ]);
      this.form.get("deliveryFirstName").updateValueAndValidity();
      this.form
        .get("deliveryLastName")
        .setValidators([
          Validators.required,
          Validators.pattern(pattern.alphabate),
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
        .setValidators([Validators.required, Validators.maxLength(200)]);
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
    if (this.form.valid) {
      this.submitted = false;
      let params: any = this.form.getRawValue();
      if (this.profile.userEmail != params.email) {
        let checkEmail: any = await this.apiService.checkEmail(params.email);
        if (checkEmail.status == 0) {
          this.utility.presentToast(checkEmail.msg);
          return false;
        }
      }
      if (params.taxId) {
        let checkTaxId: any = await this.apiService.checkTaxId(
          this.profile.countryId,
          params.taxId
        );
        if (checkTaxId.status == 0) {
          this.utility.presentToast(checkTaxId.msg);
          return false;
        }
      }
      params.selected_plan= params.selected_plan ? params.selected_plan : "body analysis",
      delete params.company;
      delete params.private;
      this.utility.setStorage(session.BOOKING, JSON.stringify(params));
      this.reset();
      this.openCart();
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
