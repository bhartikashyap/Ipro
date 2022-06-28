"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile_profile_module_ts"],{

/***/ 41474:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 64629);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 88558:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30610);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _register_register_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../register/register.module */ 60207);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ionic-selectable */ 2710);
/* harmony import */ var _components_share_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/share-component-module */ 99663);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 93740);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 80779);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-routing.module */ 41474);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.page */ 64629);













function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}


let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_11__.IonicSelectableModule,
            _components_share_component_module__WEBPACK_IMPORTED_MODULE_1__.ShareComponentModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_4__.ProfilePageRoutingModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient],
                },
            }),
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _register_register_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageModule,
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_5__.ProfilePage],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser]
    })
], ProfilePageModule);



/***/ }),

/***/ 64629:
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 67364);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 80957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 78394);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utility/message */ 34410);
/* harmony import */ var src_app_utility_pattern__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utility/pattern */ 18434);
/* harmony import */ var src_app_utility_phone_number_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utility/phone-number-validator */ 59800);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 93740);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 80779);


















let ProfilePage = class ProfilePage {
    constructor(router, navController, fb, utility, apiService, modalController, domSanit, datepipe, theInAppBrowser, platform, config, calendars, dateAdapter) {
        this.router = router;
        this.navController = navController;
        this.fb = fb;
        this.utility = utility;
        this.apiService = apiService;
        this.modalController = modalController;
        this.domSanit = domSanit;
        this.datepipe = datepipe;
        this.theInAppBrowser = theInAppBrowser;
        this.platform = platform;
        this.config = config;
        this.calendars = calendars;
        this.dateAdapter = dateAdapter;
        this.doberror = '';
        this.birthday = false;
        this.countires = [];
        this.eventSource = [];
        this.submitted = false;
        this.maxDate = new Date(new Date().setFullYear(new Date().getFullYear())).toISOString();
        this.dateValue = '';
        this.dateValue2 = '';
        this.calendar = {
            mode: 'week',
            currentDate: new Date()
        };
        this.event = {
            title: '',
            desc: '',
            startTime: null,
            endTime: '',
            allDay: true
        };
        this.modalReady = false;
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    }
    get formControl() {
        return this.form.controls;
    }
    ngOnInit() {
        this.initForm();
        this.minAge();
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getProfile();
        });
    }
    getCountries() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let result = yield this.apiService.getCountryList();
            this.countires = result.countries;
            this.selectedCountry = this.countires.filter(item => item.phoneCode == this.profile.phoneCode)[0];
            // await this.getProfile();
            console.log(this.selectedCountry);
            this.form.get("phoneCode").setValue(this.selectedCountry.phoneCode);
            this.form
                .get("phone")
                .setValidators((0,src_app_utility_phone_number_validator__WEBPACK_IMPORTED_MODULE_6__.PhoneNumberValidator)(this.selectedCountry.countryCode));
            this.form.get("phone").updateValueAndValidity();
            let country = this.countires.filter(item => item.countryId == this.profile.countryId)[0];
            this.form.get("country").setValue(country.countryName);
        });
    }
    getProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let dob;
            this.selectedPlan = yield this.utility.getStorage(src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.session.SELECTED_PLAN);
            let loading = yield this.utility.presentLoading();
            let result = yield this.apiService.getProfile();
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
                    yield this.getCountries();
                }
            }
        });
    }
    changeDobFormat(selectedDate, type) {
        if (selectedDate != '' && selectedDate.indexOf('-') > -1) {
            let dob = selectedDate.split('-');
            if (type == 'profile') {
                // console.log(dob[1] + '/' + dob[0] + '/' + dob[2])
                this.dob = { day: parseInt(dob[0]), month: parseInt(dob[1]), year: parseInt(dob[2]) }; //new date picker code
                //  this.dob = { year: parseInt(dob[0]), month: parseInt(dob[1]), day: parseInt(dob[2]) };
                this.form.get("dob").setValue(this.dob);
                console.log(this.dob);
                let dobReg = new Date(dob[1] + '/' + dob[0] + '/' + dob[2]).toLocaleString('en-us', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                });
                // this.form.get('dob').setValue(dobReg);
                this.mydob = dobReg;
                console.log(this.mydob);
            }
            else {
                console.log(dob[2] + '/' + dob[1] + '/' + dob[0]);
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
        let minDate = this.minDobString.split('-');
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
            firstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(100)]],
            lastName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(100)]],
            // honor: ["", []],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(src_app_utility_pattern__WEBPACK_IMPORTED_MODULE_5__.pattern.email)]],
            streetname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(100)]],
            nr: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(50)]],
            city: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(100)]],
            zipCode: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(src_app_utility_pattern__WEBPACK_IMPORTED_MODULE_5__.pattern.numeric),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(10),
                ],
            ],
            country: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            phone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            phoneCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            dob: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            additionalAddressInfo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(200)]],
        });
        this.submitted = false;
        console.log(this.form);
        let messages = this.utility.translateText('MSG');
        this.validationMessage = {
            firstName: [
                { type: "required", message: messages.required },
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(100, messages.maxLength, messages.characters) },
            ],
            lastName: [
                { type: "required", message: messages.required },
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(100, messages.maxLength, messages.characters) },
            ],
            email: [
                { type: "required", message: messages.required },
                { type: "pattern", message: messages.email },
            ],
            streetname: [
                { type: "required", message: messages.required },
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(100, messages.maxLength, messages.characters) },
            ],
            nr: [
                { type: "required", message: messages.required },
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(50, messages.maxLength, messages.characters) },
            ],
            city: [
                { type: "required", message: messages.required },
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(100, messages.maxLength, messages.characters) },
            ],
            zipCode: [
                { type: "required", message: messages.required },
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(10, messages.maxLength, messages.characters) },
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
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(200, messages.maxLength, messages.characters) },
            ],
        };
    }
    searchCountry(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.utility.searchData(event, this.countires, 'countryName');
        });
    }
    selectCountry(event, type, addType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let loading = yield this.utility.presentLoading();
            console.log(this.form.get("phone"));
            let phValue = this.form.get("phone").value;
            if (type === "countryname") {
                this.form.get("country").setValue(event.value.countryName);
            }
            if (type === "phonecode") {
                this.selectedCountry = event.value;
                this.form.get("phoneCode").setValue(event.value.phoneCode);
                this.form
                    .get("phone")
                    .setValidators((0,src_app_utility_phone_number_validator__WEBPACK_IMPORTED_MODULE_6__.PhoneNumberValidator)(event.value.countryCode));
                this.form.get("phone").updateValueAndValidity();
            }
            loading.dismiss();
        });
    }
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.submitted = true;
            console.log(this.form.valid);
            console.log(this.form);
            if (this.form.valid && this.doberror == '') {
                this.submitted = false;
                let formData = this.form.getRawValue();
                formData.countryId = this.countires.filter(item => item.countryName == formData.country)[0].countryId;
                if (this.profile.userEmail != formData.email) {
                    let checkEmail = yield this.apiService.checkEmail(formData.email);
                    if (checkEmail.status == 0) {
                        this.utility.presentToast(checkEmail.msg, "bottom");
                        return false;
                    }
                }
                this.updateProfile(formData);
            }
        });
    }
    onDateChange(dt) {
        console.log(dt.month + '/' + dt.day + '/' + dt.year);
        this.notify.emit(dt.month + '/' + dt.day + '/' + dt.year);
    }
    updateProfile(formdata) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.profile, "this.profile");
            console.log(formdata, "this.formdata");
            this.latest_date = '';
            if (!formdata) {
                this.utility.presentToast(this.utility.translateText("BOOKING_ANALYSIS").NO_BOOKING, "bottom");
                return false;
            }
            else {
                this.latest_date = '';
                if (formdata.dob) {
                    console.log(formdata.dob);
                    this.latest_date = formdata.dob.day + "-" + formdata.dob.month + "-" + formdata.dob.year;
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
                };
                console.log(params, "this.params");
                let loading = yield this.utility.presentLoading();
                let res = yield this.apiService.updateProfile(params);
                loading.dismiss();
                if (res.status) {
                    this.utility.presentToast(this.utility.translateText("BOOKING_ANALYSIS").Profile_updated, "bottom");
                }
            }
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__.InAppBrowser },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbInputDatepickerConfig },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbCalendar },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbDateAdapter }
];
ProfilePage.propDecorators = {
    datetime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonDatetime, { static: true },] }],
    controlName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    dp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['dp',] }],
    notify: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output }]
};
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-profile',
        template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 80957:
/*!************************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "form {\n  padding: 5px;\n  padding-top: 0px;\n}\nform .form-group {\n  position: relative;\n  --inner-padding-end: 5px !important;\n  margin-top: 10px;\n}\nform ion-input,\nform ion-select,\nform ionic-selectable {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  border: 1px solid #d6d6d6 !important;\n  height: 45px;\n  width: 100%;\n  max-width: 100%;\n  border-radius: 5px !important;\n  padding: 0px 11px !important;\n  --padding-bottom: 0px;\n  --padding-top: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0 !important;\n}\nform ion-label.label-floating {\n  position: relative;\n  top: 3px;\n  left: 10px;\n  font-size: 12px !important;\n  color: gray !important;\n}\nform .password-input {\n  position: relative;\n}\nform .password-input ion-input {\n  --padding-bottom: 0px;\n  --padding-top: 0px;\n  --padding-start: 0px;\n  --padding-end: 40px;\n}\nform .password-input ion-icon {\n  position: absolute;\n  bottom: 10px;\n  right: 20px;\n  font-size: 25px;\n  z-index: 9999;\n}\nform .forgot-password {\n  color: #6d6d6d;\n  font-size: 12px;\n  font-weight: 400;\n  text-decoration: none;\n}\nform .dont-know {\n  color: #6d6d6d;\n  font-size: 12px;\n  font-weight: 400;\n  text-decoration: none;\n  text-align: center;\n  width: 100%;\n  display: block;\n  margin-top: 20px;\n}\nform .dont-know span {\n  color: #ff662a;\n}\nform .btns {\n  height: 40px;\n  font-size: 12px;\n  font-weight: 600;\n  --border-radius: 4px;\n  margin: 20px;\n}\nform ion-item.form-group.country-group {\n  top: 2px;\n  position: relative;\n  width: 70px;\n  border: 1px solid #d4d4d4;\n  height: 40px;\n  border-radius: 4px;\n  color: #727272;\n  font-size: 12px;\n}\nform .activation-code {\n  top: 32px;\n  position: absolute;\n  border-radius: 4px;\n  color: #6d6d6d;\n  font-size: 12px;\n}\nform .activation-code p {\n  margin: 0px;\n}\nform .activation-code p.find-label {\n  width: 100%;\n  color: #a9d5c1;\n}\nform .phone-code-div {\n  padding: 0px !important;\n  display: flex;\n  margin-right: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\nform .phone-code-div span {\n  width: 20px;\n}\nform .phone-ion {\n  width: 82px;\n  border: 0px !important;\n}\nform .phone-ion .ionic-selectable-icon {\n  display: none !important;\n}\nform div {\n  padding: 1px 10px;\n}\nform .check-div {\n  display: flex;\n  padding-right: 20px;\n}\nform .check-div ion-checkbox {\n  margin-left: 2px;\n  margin-top: 0px;\n}\n.my-search-class {\n  --height: 500px;\n  --width: 80%;\n}\nion-datetime {\n  position: absolute !important;\n  bottom: 20% !important;\n  max-width: none !important;\n  left: 10%;\n  right: 10%;\n}\n.birthday {\n  --box-shadow:none;\n  margin: auto;\n  --background: transparent !important;\n  align-items: unset;\n}\nion-content {\n  --padding-top: 80px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBQUo7QUFDSTtFQUNFLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQUNOO0FBQ0k7OztFQUdFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQUNOO0FBYUk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBQVhOO0FBYUk7RUFDRSxrQkFBQTtBQVhOO0FBWU07RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQVZSO0FBWU07RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFWUjtBQWFJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBWE47QUFhSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVhOO0FBWU07RUFDRSxjQUFBO0FBVlI7QUFhSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFYTjtBQWFJO0VBQ0UsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFYTjtBQWFJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVhOO0FBWU07RUFDRSxXQUFBO0FBVlI7QUFZTTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FBVlI7QUFjSTtFQUVFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQWJOO0FBZ0JJO0VBQ0UsV0FBQTtBQWROO0FBa0JJO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0FBaEJOO0FBbUJJO0VBQ0Msd0JBQUE7QUFqQkw7QUFtQkc7RUFDQyxpQkFBQTtBQWpCSjtBQW1CRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQWpCSjtBQW1CRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQWpCSjtBQXNCRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBbkJKO0FBcUJFO0VBQ0UsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFsQko7QUFxQkU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBbEJKO0FBcUJFO0VBQ0UsOEJBQUE7QUFsQkoiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgZm9ybSB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgLmZvcm0tZ3JvdXAge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgICBpb24taW5wdXQsXG4gICAgaW9uLXNlbGVjdCAsXG4gICAgaW9uaWMtc2VsZWN0YWJsZSB7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDZkNiAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmc6IDBweCAxMXB4ICFpbXBvcnRhbnQ7XG4gICAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gIFxuICAgIC8vIGlvbi1pdGVtLml0ZW0taGFzLXZhbHVlIGlvbi1sYWJlbCxcbiAgICAvLyBpb24taXRlbS5pdGVtLWhhcy1mb2N1cyBpb24tbGFiZWwge1xuICAgIC8vICAgdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgLy8gICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAvLyAgIHotaW5kZXg6IDk5OTtcbiAgICAvLyAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgLy8gICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICAvLyAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICAgIC8vICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIC8vIH1cbiAgXG4gICAgaW9uLWxhYmVsLmxhYmVsLWZsb2F0aW5nIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogM3B4O1xuICAgICAgbGVmdDogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnBhc3N3b3JkLWlucHV0IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogNDBweDtcbiAgICAgIH1cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICB9XG4gICAgfVxuICAgIC5mb3Jnb3QtcGFzc3dvcmQge1xuICAgICAgY29sb3I6ICM2ZDZkNmQ7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgICAuZG9udC1rbm93IHtcbiAgICAgIGNvbG9yOiAjNmQ2ZDZkO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiAjZmY2NjJhO1xuICAgICAgfVxuICAgIH1cbiAgICAuYnRucyB7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBtYXJnaW46IDIwcHg7XG4gICAgfVxuICAgIGlvbi1pdGVtLmZvcm0tZ3JvdXAuY291bnRyeS1ncm91cCB7XG4gICAgICB0b3A6IDJweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGNvbG9yOiAjNzI3MjcyO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAuYWN0aXZhdGlvbi1jb2RlIHtcbiAgICAgIHRvcDogMzJweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGNvbG9yOiAjNmQ2ZDZkO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgfVxuICAgICAgcC5maW5kLWxhYmVsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiAjYTlkNWMxO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLnBob25lLWNvZGUtZGl2e1xuICAgICAgLy8gd2lkdGg6IDQwJTtcbiAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIFxuICAgIH1cbiAgICAucGhvbmUtY29kZS1kaXYgc3BhbntcbiAgICAgIHdpZHRoOjIwcHg7XG4gICAgfVxuICBcbiAgXG4gICAgLnBob25lLWlvbntcbiAgICAgIHdpZHRoOjgycHg7IFxuICAgICAgYm9yZGVyOjBweCAhaW1wb3J0YW50O1xuICBcbiAgICB9XG4gICAgLnBob25lLWlvbiAuaW9uaWMtc2VsZWN0YWJsZS1pY29uIHtcbiAgICAgZGlzcGxheTpub25lICFpbXBvcnRhbnQ7XG4gICB9XG4gICBkaXZ7XG4gICAgcGFkZGluZzogMXB4IDEwcHg7XG4gIH1cbiAgLmNoZWNrLWRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbiAgLmNoZWNrLWRpdiBpb24tY2hlY2tib3h7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cbiAgXG4gIFxuICB9XG4gIC5teS1zZWFyY2gtY2xhc3Mge1xuICAgIC0taGVpZ2h0OiA1MDBweDtcbiAgICAtLXdpZHRoOiA4MCU7XG4gIH1cbiAgaW9uLWRhdGV0aW1le1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIGJvdHRvbTogMjAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOm5vbmUgIWltcG9ydGFudDtcbiAgICBsZWZ0OiAxMCU7XG4gICAgcmlnaHQ6IDEwJTtcbiAgIFxuICB9XG4gIC5iaXJ0aGRheXtcbiAgICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiB1bnNldDtcbiAgfVxuXG4gIGlvbi1jb250ZW50e1xuICAgIC0tcGFkZGluZy10b3A6IDgwcHggIWltcG9ydGFudDtcbiAgfVxuXG5cbiAgXG4gIFxuICBcbiAgXG4gICJdfQ== */";

/***/ }),

/***/ 67364:
/*!************************************************************!*\
  !*** ./src/app/pages/profile/profile.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<app-header [headerTitle]=\"'PAGES.PROFILE' | translate\" [headerBack]=true></app-header>\n<ion-content>\n  <form [formGroup]=\"form\" >\n\n    <!-- <div class=\"register-header\">\n      <h1>{{'.TITLE' | translate}}</h1>\n    </div> -->\n\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n      <ion-input\n        type=\"text\"\n        formControlName=\"firstName\"\n        id=\"firstname\"\n        placeholder=\"{{'REGISTER.FIRSTNAME' | translate}}\"\n        autofocus=\"on\"\n      >\n    </ion-input>\n    \n    </ion-item>\n      <div *ngFor=\"let validation of validationMessage.firstName\">\n        <div\n          *ngIf=\"submitted && formControl['firstName'].errors\"\n          class=\"validation-message\"\n        >\n          <div\n            class=\"error-message text-red\"\n            *ngIf=\"formControl['firstName'].errors[validation.type]\"\n          >\n            {{ validation.message }}\n          </div>\n        </div>\n      </div>\n\n     \n\n  \n    <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n      <ion-input\n        type=\"text\"\n        formControlName=\"lastName\"\n        id=\"lastname\"\n        placeholder=\"{{'REGISTER.LASTNAME' | translate}}\"\n        autofocus=\"on\"\n      >\n      </ion-input>\n    </ion-item>\n      <div *ngFor=\"let validation of validationMessage.lastName\">\n        <div\n          *ngIf=\"submitted && formControl['lastName'].errors\"\n          class=\"validation-message\"\n        >\n          <div\n            class=\"error-message text-red\"\n            *ngIf=\"formControl['lastName'].errors[validation.type]\"\n          >\n            {{ validation.message }}\n          </div>\n        </div>\n      </div>\n  \n\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n\n      <ion-input type=\"email\" placeholder=\"{{'BOOKING_ANALYSIS.EMAIL' | translate}}\" formControlName=\"email\" id=\"email\"\n        autocapitalize=\"off\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let validation of validationMessage.email\">\n      <div *ngIf=\"submitted && formControl['email'].errors\" class=\"validation-message\">\n        <div class=\"error-message text-red\" *ngIf=\"formControl['email'].errors[validation.type]\">\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n\n      <div class=\"phone-code-div\">\n        <span class=\"flag-icon flag-icon-{{selectedCountry?.countryCode.toLowerCase()}}\"\n          style=\"font-size: 17px; top: -2px;    margin-left: 10px;\"></span>\n        <ionic-selectable item-content class=\"phone-ion \" formControlName=\"phoneCode\" id=\"code\" [items]=\"countires\"\n          [canSearch]=\"true\" (onChange)=\"selectCountry($event,'phonecode','')\" (onSearch)=\"searchCountry($event)\">\n          <ng-template ionicSelectableItemTemplate let-con=\"item\">\n            <span class=\"flag-icon flag-icon-{{ con.countryCode.toLowerCase() }}\"\n              style=\"font-size: 17px; top: 0px\"></span>\n            {{con.countryName}}\n          </ng-template>\n        </ionic-selectable>\n      </div>\n      <ion-input formControlName=\"phone\" type=\"tel\" id=\"mobile-number\" autocapitalize=\"off\"\n        placeholder=\"{{'BOOKING_ANALYSIS.MOBILE' | translate}}\" autofocus=\"false\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let validation of validationMessage.phoneCode\">\n      <div *ngIf=\"submitted && formControl['phoneCode'].errors\" class=\"validation-message\">\n        <div class=\"error-message text-red\" *ngIf=\"formControl['phoneCode'].errors[validation.type]\">\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n    <div *ngFor=\"let validation of validationMessage.phone\">\n      <div *ngIf=\"submitted && formControl['phone'].errors\" class=\"validation-message\">\n        <div class=\"error-message text-red\" *ngIf=\"formControl['phone'].errors[validation.type]\">\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n    <!-- <div style=\"display: flex;\"  class=\"form-group ion-no-padding\">\n      <ion-button fill=\"clear\" (click)=\"d.toggle()\">\n        <ion-icon icon=\"calendar\"></ion-icon>\n      </ion-button>\n\n      <input style=\"margin:7px 15px;\" class=\"form-control\" (click)=\"d.toggle();onDateChange(dob)\"\n        placeholder=\"{{'BOOKING_ANALYSIS.BIRTHDAY' | translate}}\" name=\"dp\" ngbDatepicker [readonly]=\"true\"\n        [footerTemplate]=\"footerTemplate\" [(ngModel)]=\"dob\" [ngModelOptions]=\"{standalone: true}\"\n        [minDate]=\"minDobString\" [maxDate]=\"maxDobString\" [dayTemplate]=\"customDay\" [markDisabled]=\"isDisabled\"\n        #d=\"ngbDatepicker\">\n\n\n      <ng-template #footerTemplate>\n        <hr class=\"my-0\">\n        <ion-button class=\"btn-bootstrap danger\" (click)=\"d.close()\">Close</ion-button>\n      </ng-template>\n    </div>\n    <div *ngIf=\"doberror != ''\" class=\"validation-message\">\n      <div class=\"error-message text-red\">\n        {{ doberror }}\n      </div>\n    </div>\n\n    <div *ngFor=\"let validation of validationMessage.dob\">\n      <div *ngIf=\"submitted && formControl['dob'].errors\" class=\"validation-message\">\n        <div class=\"error-message text-red\" *ngIf=\"formControl['dob'].errors[validation.type]\">\n          {{ validation.message }}\n        </div>\n      </div>\n    </div> -->\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n\n      <ion-input type=\"text\" id=\"street name\" autofocus=\"on\" formControlName=\"streetname\"\n        placeholder=\"{{'BOOKING_ANALYSIS.STREET_NAME' | translate}}\"></ion-input>\n\n    </ion-item>\n    <div *ngFor=\"let validation of validationMessage.streetname\">\n      <div *ngIf=\"submitted && formControl['streetname'].errors\" class=\"validation-message\">\n        <div class=\"error-message text-red\" *ngIf=\"formControl['streetname'].errors[validation.type]\">\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n\n      <ion-input formControlName=\"nr\" placeholder=\"{{'BOOKING_ANALYSIS.HOUSE_NUMBER' | translate}}\" type=\"text\"\n        id=\"house-number\" autocapitalize=\"off\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let validation of validationMessage.nr\">\n      <div *ngIf=\"submitted && formControl['nr'].errors\" class=\"validation-message\">\n        <div class=\"error-message text-red\" *ngIf=\"formControl['nr'].errors[validation.type]\">\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n\n      <ion-input type=\"text\" id=\"additional-adress\" autocapitalize=\"off\" formControlName=\"additionalAddressInfo\"\n        placeholder=\"{{'BOOKING_ANALYSIS.ADDITION_ADDRESS' | translate}}\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let validation of validationMessage.additionalAddressInfo\">\n      <div *ngIf=\"submitted && formControl['additionalAddressInfo'].errors\" class=\"validation-message\">\n        <div class=\"error-message text-red\" *ngIf=\"formControl['additionalAddressInfo'].errors[validation.type]\">\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n\n      <ion-input formControlName=\"zipCode\" placeholder=\"{{'BOOKING_ANALYSIS.ZIP' | translate}}\" type=\"text\" id=\"zip\"\n        autocapitalize=\"off\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let validation of validationMessage.zipCode\">\n      <div *ngIf=\"submitted && formControl['zipCode'].errors\" class=\"validation-message\">\n        <div class=\"error-message text-red\" *ngIf=\"formControl['zipCode'].errors[validation.type]\">\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n\n      <ion-input formControlName=\"city\" placeholder=\"{{'BOOKING_ANALYSIS.CITY' | translate}}\" type=\"text\" id=\"city\"\n        autocapitalize=\"off\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let validation of validationMessage.city\">\n      <div *ngIf=\"submitted && formControl['city'].errors\" class=\"validation-message\">\n        <div class=\"error-message text-red\" *ngIf=\"formControl['city'].errors[validation.type]\">\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n      <ionic-selectable item-content formControlName=\"country\" id=\"country\" [items]=\"countires\" [canSearch]=\"true\"\n        (onChange)=\"selectCountry($event,'countryname','billing')\" (onSearch)=\"searchCountry($event)\">\n        <ng-template ionicSelectableItemTemplate let-con=\"item\">\n          <span class=\"flag-icon flag-icon-{{ con.countryCode.toLowerCase() }}\"\n            style=\"font-size: 17px; top: 0px\"></span>\n          {{con.countryName}}\n        </ng-template>\n      </ionic-selectable>\n    </ion-item>\n\n    <div *ngFor=\"let validation of validationMessage.country\">\n      <div *ngIf=\"submitted && formControl['country'].errors\" class=\"validation-message\">\n        <div class=\"error-message text-red\" *ngIf=\"formControl['country'].errors[validation.type]\">\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n    <ion-button (click)=\"submit()\" class=\"btns\" color=\"danger\" expand=\"block\">\n      {{'BOOKING_ANALYSIS.profile_btn' | translate}}</ion-button>\n  </form>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts.js.map