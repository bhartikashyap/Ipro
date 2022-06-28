"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_commission-option_commission-option_module_ts"],{

/***/ 81720:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/commission-option/commission-option-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommissionOptionPageRoutingModule": () => (/* binding */ CommissionOptionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _commission_option_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commission-option.page */ 80308);




const routes = [
    {
        path: '',
        component: _commission_option_page__WEBPACK_IMPORTED_MODULE_0__.CommissionOptionPage
    }
];
let CommissionOptionPageRoutingModule = class CommissionOptionPageRoutingModule {
};
CommissionOptionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CommissionOptionPageRoutingModule);



/***/ }),

/***/ 30907:
/*!*********************************************************************!*\
  !*** ./src/app/pages/commission-option/commission-option.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommissionOptionPageModule": () => (/* binding */ CommissionOptionPageModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _commission_option_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commission-option-routing.module */ 81720);
/* harmony import */ var _commission_option_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commission-option.page */ 80308);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30610);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _components_share_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/share-component-module */ 99663);










function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

let CommissionOptionPageModule = class CommissionOptionPageModule {
};
CommissionOptionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _commission_option_routing_module__WEBPACK_IMPORTED_MODULE_0__.CommissionOptionPageRoutingModule,
            _components_share_component_module__WEBPACK_IMPORTED_MODULE_3__.ShareComponentModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient],
                },
            })
        ],
        declarations: [_commission_option_page__WEBPACK_IMPORTED_MODULE_1__.CommissionOptionPage]
    })
], CommissionOptionPageModule);



/***/ }),

/***/ 80308:
/*!*******************************************************************!*\
  !*** ./src/app/pages/commission-option/commission-option.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommissionOptionPage": () => (/* binding */ CommissionOptionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _commission_option_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commission-option.page.html?ngResource */ 95838);
/* harmony import */ var _commission_option_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commission-option.page.scss?ngResource */ 23559);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var src_app_utility_pattern__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utility/pattern */ 18434);
/* harmony import */ var src_app_utility_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utility/message */ 34410);









let CommissionOptionPage = class CommissionOptionPage {
    constructor(utilSer, apiSer, fb) {
        this.utilSer = utilSer;
        this.apiSer = apiSer;
        this.fb = fb;
        this.cardPaymentoption = {};
        this.countries = [];
        this.ibanCheck = 'notchecked';
        this.error = '';
    }
    ngOnInit() {
        this.form = this.fb.group({
            wallet: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            ibanNo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(src_app_utility_pattern__WEBPACK_IMPORTED_MODULE_4__.pattern.alphaNumeric)]],
            iban: [false],
            bitcoin: [false],
            ibancode: ['']
        });
        let messages = this.utilSer.translateText('MSG');
        this.validationMessage = {
            ibanNo: [
                { type: "required", message: messages.required },
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_5__.message.maxLength(this.maxLength, messages.maxLength, messages.characters) },
                { type: "minlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_5__.message.minLength(this.maxLength, messages.minLength, messages.characters) },
                { type: "alphaNumeric", message: messages.alphaNumeric },
            ],
            wallet: [
                { type: "required", message: messages.required },
                // { type: "maxlength", message: message.maxLength(100) },
            ],
        };
    }
    ionViewWillEnter() {
        this.getPaymentoption();
    }
    getPaymentoption() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let loading = yield this.utilSer.presentLoading();
            let result = yield this.apiSer.paymentOption();
            loading.dismiss();
            let selectedCountry;
            if (result.status == 1) {
                this.cardPaymentoption = result.data;
                this.form.get("wallet").setValue(this.cardPaymentoption.bitcoinAddress);
                this.cardPaymentoption.bic = this.bic;
                if (this.cardPaymentoption.commissionPaymentOption == 'Bitcoin') {
                    this.form.get("bitcoin").setValue(true);
                }
                else {
                    this.form.get("iban").setValue(true);
                }
                this.getCountries();
            }
        });
    }
    getCountries() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // let result: any = await this.apiSer.getCountryList();
            // this.countries = result.countries;
            this.countries = [
                { 'name': "Austria", 'IBAN': 'AT', 'totalLength': 20 },
                { 'name': "Andorra", 'IBAN': 'AD', 'totalLength': 24 },
                { 'name': "Belgium", 'IBAN': 'BE', 'totalLength': 16 },
                { 'name': "Bulgaria", 'IBAN': 'BG', 'totalLength': 22 },
                { 'name': "Croatia", 'IBAN': 'HR', 'totalLength': 21 },
                { 'name': "Cyprus", 'IBAN': 'CY', 'totalLength': 28 },
                { 'name': "Czech Republic", 'IBAN': 'CZ', 'totalLength': 24 },
                { 'name': "Denmark", 'IBAN': 'DK', 'totalLength': 18 },
                { 'name': "Estonia", 'IBAN': 'EE', 'totalLength': 20 },
                { 'name': "Finland", 'IBAN': 'FI', 'totalLength': 18 },
                { 'name': "France", 'IBAN': 'FR', 'totalLength': 27 },
                { 'name': "Germany", 'IBAN': 'DE', 'totalLength': 22 },
                { 'name': "Gibraltar", 'IBAN': 'GI', 'totalLength': 23 },
                { 'name': "Greece", 'IBAN': 'GR', 'totalLength': 27 },
                { 'name': "Hungary", 'IBAN': 'HU', 'totalLength': 28 },
                { 'name': "Iceland", 'IBAN': 'IS', 'totalLength': 26 },
                { 'name': "Ireland", 'IBAN': 'IE', 'totalLength': 22 },
                { 'name': "Italy", 'IBAN': 'IT', 'totalLength': 27 },
                { 'name': "Latvia", 'IBAN': 'LV', 'totalLength': 21 },
                { 'name': "Liechtenstein", 'IBAN': 'LI', 'totalLength': 21 },
                { 'name': "Lithuania", 'IBAN': 'LT', 'totalLength': 20 },
                { 'name': "Luxembourg", 'IBAN': 'LU', 'totalLength': 20 },
                { 'name': "Malta", 'IBAN': 'MT', 'totalLength': 31 },
                { 'name': "Monaco", 'IBAN': 'MC', 'totalLength': 27 },
                { 'name': "Netherlands", 'IBAN': 'NL', 'totalLength': 18 },
                { 'name': "Norway", 'IBAN': 'NO', 'totalLength': 15 },
                { 'name': "Poland", 'IBAN': 'PL', 'totalLength': 28 },
                { 'name': "Portugal", 'IBAN': 'PT', 'totalLength': 25 },
                { 'name': "Romania", 'IBAN': 'RO', 'totalLength': 24 },
                { 'name': "San Marino", 'IBAN': 'SM', 'totalLength': 27 },
                { 'name': "Slovakia", 'IBAN': 'SK', 'totalLength': 24 },
                { 'name': "Slovenia", 'IBAN': 'SI', 'totalLength': 19 },
                { 'name': "Spain", 'IBAN': 'ES', 'totalLength': 24 },
                { 'name': "Sweden", 'IBAN': 'SE', 'totalLength': 24 },
                { 'name': "Switzerland", 'IBAN': 'CH', 'totalLength': 21 },
                { 'name': "UK", 'IBAN': 'GB', 'totalLength': 22 }
            ];
            if (this.cardPaymentoption.iban != '') {
                // let countrycode = this.cardPaymentoption.iban.splice(0,2);
                this.form.get("ibanNo").setValue(this.cardPaymentoption.iban.substring(2));
                console.log(this.cardPaymentoption.iban.slice(0, 2));
                let selectedCountry = this.countries.filter(item => item.IBAN == this.cardPaymentoption.iban.slice(0, 2));
                console.log(selectedCountry);
                if (selectedCountry != undefined && selectedCountry.length >= 0) {
                    // selectedCountry = selectedCountry[0].countryCode;
                    this.maxLength = selectedCountry[0].totalLength;
                    this.form.get("ibancode").setValue(selectedCountry[0].IBAN);
                }
                else {
                    this.form.get("ibancode").setValue(this.countries[11].IBAN);
                    this.maxLength = this.countries[11].totalLength;
                }
            }
            else {
                this.form.get("ibancode").setValue(this.countries[11].IBAN);
                this.maxLength = this.countries[11].totalLength;
            }
        });
    }
    changeCode(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log(event);
        });
    }
    onIBANchange(event) {
        if (this.form.get("iban").value == true) {
            this.bitcoin = false;
            this.cardPaymentoption.commissionPaymentOption = 'Bank Transfer';
        }
        else {
            this.bitcoin = true;
            this.cardPaymentoption.commissionPaymentOption = 'Bitcoin';
        }
        // this.bitcoin=false;
    }
    onBitcoinChange(event) {
        if (this.form.get("bitcoin").value == true) {
            this.iban = false;
            this.cardPaymentoption.commissionPaymentOption = 'Bitcoin';
            // this.iban =false;
        }
        else {
            this.cardPaymentoption.commissionPaymentOption = 'Bank Transfer';
            this.iban = true;
        }
    }
    checkIban(ibanNos) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.erroriban = '';
            let iban = this.form.get("ibanNo").value;
            // if(iban.match(pattern.alphaNumeric) ){
            //   this.error = "Please enter valid IBAN no."
            //   return false;
            // }
            if (iban == '' || iban == undefined) {
                this.ibanCheck = 'fail';
                this.erroriban = this.utilSer.translateText('PAYMENT_OPTON').msg.validIBAN;
                return false;
            }
            else if (iban.length > this.maxLength) {
                this.erroriban = 'IBAN length is gretaer than expected.';
                //this.utilSer.translateText('PAYMENT_OPTON').msg.reqIBAN; 
                return false;
            }
            else if (iban.length < this.maxLength) {
                this.erroriban = 'IBAN length is smaller than expected.';
                // this.erroriban = this.utilSer.translateText('PAYMENT_OPTON').msg.reqIBAN; 
                return false;
            }
            else {
                let ibanNo = this.form.get("ibancode").value + "" + this.form.get("ibanNo").value;
                console.log(ibanNo);
                let loading = yield this.utilSer.presentLoading();
                let data = { 'iban': ibanNo };
                let result = yield this.apiSer.checkIban(data);
                loading.dismiss();
                let selectedCountry;
                if (result.status == 1) {
                    this.ibanCheck = 'pass';
                    this.bic = result.bic;
                    this.cardPaymentoption.bic = result.bic;
                    let data = {
                        'iban': this.form.get("ibancode").value + "" + this.form.get("ibanNo").value,
                        'bic': result.bic
                    };
                    data['commissionPaymentOption'] = this.cardPaymentoption.commissionPaymentOption;
                    let loading = yield this.utilSer.presentLoading();
                    let results = yield this.apiSer.commissionPayment(data);
                    loading.dismiss();
                    if (results.status == 1) {
                        this.utilSer.presentToast(this.utilSer.translateText('PAYMENT_OPTON').msg.payment, 'top');
                        this.getPaymentoption();
                    }
                    this.error = '';
                    return true;
                }
                else {
                    this.ibanCheck = 'fail';
                    this.erroriban = this.utilSer.translateText('PAYMENT_OPTON').msg.validIBAN;
                    return false;
                }
            }
        });
    }
    savePayment(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.form);
            console.log(this.form.valid);
            // let data = {};
            this.error = '';
            let iban = this.form.get("ibancode").value + "" + this.form.get("ibanNo").value;
            this.checkIban(iban);
            // if (type == 'bitcoin') {
            //   if (this.form.get("wallet").value != '' && this.form.get("wallet").value != undefined) {
            //     data = {
            //       'bitcoinAddress': this.form.get("wallet").value
            //     }
            //   }
            //   else {
            //     this.error = this.utilSer.translateText('PAYMENT_OPTON').msg.walletAdd;
            //     return false;
            //   }
            // }
            // else if (type == 'iban') {
            // if (!this.checkIban(iban)) {
            //   return false;
            // }
            // let  data = {
            //     'iban': this.form.get("ibancode").value + "" + this.form.get("ibanNo").value,
            //     'bic': this.cardPaymentoption.bic
            //   }
            //   data['commissionPaymentOption'] = this.cardPaymentoption.commissionPaymentOption;
            //   let loading = await this.utilSer.presentLoading();
            //   let result: any = await this.apiSer.commissionPayment(data);
            //   loading.dismiss();
            //   if (result.status == 1) {
            //     this.utilSer.presentToast(this.utilSer.translateText('PAYMENT_OPTON').msg.payment, 'top');
            //     this.getPaymentoption()
            //   }
            //   this.error = '';
            // }
        });
    }
};
CommissionOptionPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder }
];
CommissionOptionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-commission-option',
        template: _commission_option_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_commission_option_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CommissionOptionPage);



/***/ }),

/***/ 18434:
/*!************************************!*\
  !*** ./src/app/utility/pattern.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pattern": () => (/* binding */ pattern)
/* harmony export */ });
var pattern = {
    phoneNumber: '^((\\+91-?)|0)?[0-9]{10}$',
    indiaPhoneNumber: '^((\\+91-?)|0)?[6-9][0-9]{9}$',
    password: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])(?!.* ).{6,50}$',
    email: '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}',
    alphabate: '[a-zA-Z ]*$',
    alphabateSpace: '^[a-zA-Z s.-]+$',
    nickName: '^(?=.*[a-zA-Z])([a-zA-Z0-9 s]+)$',
    alphaNumeric: '^[a-zA-Z0-9]+$',
    alphaNumericTag: '^[a-zA-Z0-9#]+$',
    numeric: '^[0-9]+$',
    alphaNumericSpace: '^[a-zA-Z0-9 ]*$',
    decimalNumeric: '^(\\d*\\.)?\\d+$',
    emailOrPhone: '/^(d{10}|w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3}))$/',
    tenDigitPhonePattern: '^[0-9]{10}$',
    indianMobilePattern: '[6-9][0-9]{9}$',
    sapce: '^(?!d+$)(?:[a-zA-Z0-9][a-zA-Z0-9 @&$]*)?$',
    facebook: '/^(https?://){0,1}(www.){0,1}facebook.com/',
    twitter: '/^(?:https?://)?(?:www.)?twitter.com/(#!/)?[a-zA-Z0-9_]+$/i',
    instagram: '^(https\\:\\/\\/)?(www\\.)?(instagram\\.com)\\/.+$',
    linkedin: '((https?://)?((www|ww).)?linkedin.com/)((([w]{2,3})?)|([^/]+/(([w|d-&#?=])+/?){1,}))$',
    youtube: '/^(?:https?://)?(?:m.|www.)?(?:youtu.be/|youtube.com/(?:embed/|v/|watch?v=|watch?.+&v=))((w|-){11})(?:S+)?$/',
    pintrest: '|^http(s)?://pinterest.com/(.*)?$|i',
    url: '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?',
};


/***/ }),

/***/ 23559:
/*!********************************************************************************!*\
  !*** ./src/app/pages/commission-option/commission-option.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".phone-code-div {\n  padding: 0px !important;\n  display: flex;\n  margin-right: 10px;\n  border-radius: 5px;\n}\n\nion-input,\nion-select,\nionic-selectable {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  border: 1px solid #d6d6d6 !important;\n  height: 45px;\n  width: 100%;\n  max-width: 100%;\n  border-radius: 5px !important;\n  padding: 0px 11px !important;\n  --padding-bottom: 0px;\n  --padding-top: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0 !important;\n}\n\n.radio {\n  margin: 0px;\n  margin-right: 10px;\n  width: 12px;\n  height: 12px;\n  border: solid 1px #ccc;\n  border-radius: 8px;\n}\n\n.green {\n  color: #3eb863 !important;\n}\n\n.red {\n  color: #d45151 !important;\n}\n\n.blue {\n  color: #4b4bc4 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1pc3Npb24tb3B0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7QUFESjs7QUFLRTs7O0VBR0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBRko7O0FBSUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNFLHlCQUFBO0FBREY7O0FBR0E7RUFDRSx5QkFBQTtBQUFGOztBQUVBO0VBQ0UseUJBQUE7QUFDRiIsImZpbGUiOiJjb21taXNzaW9uLW9wdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGhvbmUtY29kZS1kaXZ7XG4gICAgLy8gd2lkdGg6IDQwJTtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICB9XG5cbiAgaW9uLWlucHV0LFxuICBpb24tc2VsZWN0ICxcbiAgaW9uaWMtc2VsZWN0YWJsZSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2ZDYgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweCAxMXB4ICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5yYWRpbyB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmdyZWVue1xuICBjb2xvcjpyZ2IoNjIsIDE4NCwgOTkpICFpbXBvcnRhbnQ7XG59XG4ucmVke1xuICBjb2xvcjpyZ2IoMjEyLCA4MSwgODEpICFpbXBvcnRhbnQ7XG59XG4uYmx1ZXtcbiAgY29sb3I6cmdiKDc1LCA3NSwgMTk2KSAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 95838:
/*!********************************************************************************!*\
  !*** ./src/app/pages/commission-option/commission-option.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<app-header [headerTitle]=\"'PAGES.PAYMENT_COMMISSION' | translate\" [headerBack]=true></app-header>\n\n<ion-content style=\"padding:10px;\">\n  <div style=\"padding:10px;\"></div>\n\n  <form [formGroup]=\"form\">\n    <ion-card>\n      <ion-card-content class=\"\">\n        <!-- <ion-radio-group [value]=\"paymnetMethod\"> -->\n\n        <ion-item lines=\"none\">\n          <ion-label>{{'PAYMENT_OPTON.Activate' | translate}}/{{'PAYMENT_OPTON.Deactivate' | translate}}</ion-label>\n          <ion-checkbox slot=\"start\" formControlName=\"iban\" [(ngModel)]=\"iban\" class=\"radio\"\n            (ionChange)=\"onIBANchange();\"></ion-checkbox>\n        </ion-item>\n        <!-- <div *ngIf=\"cardPaymentoption.commissionPaymentOption != 'Bitcoin'\"> -->\n          <!-- </ion-radio-group> -->\n          <ion-item lines=\"none\" style=\"text-align:center;padding:2% 12%;\">\n            <p style=\"font-size:12px\">{{'PAYMENT_OPTON.SEPA' | translate}}</p>\n\n          </ion-item>\n          <ion-item lines=\"none\" style=\"--min-height: 30px;\">\n            <span style=\"font-size: 13px;\n        color: #666666;\">{{'PAYMENT_OPTON.countrycode' | translate}}</span>\n\n          </ion-item>\n          <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n\n            <div class=\"phone-code-div\">\n\n              <ion-select (ionChange)=\"changeCode($event)\" formControlName=\"ibancode\" [(ngModel)]=\"ibancode\">\n                <ion-select-option *ngFor=\"let con of countries\" [value]=\"con.IBAN\">{{con.IBAN}}\n                </ion-select-option>\n\n              </ion-select>\n            </div>\n\n            <ion-input type=\"text\" id=\"iban\" placeholder=\"\" autofocus=\"false\" formControlName=\"ibanNo\"></ion-input>\n          </ion-item>\n          <div *ngFor=\"let validation of validationMessage.iban\">\n            <div\n              *ngIf=\"submitted && formControls['ibanNo'].errors\"\n              class=\"validation-message\"\n            >\n              <div\n                class=\"error-message text-red\"\n                *ngIf=\"formControls['ibanNo'].errors[validation.type]\"\n              >\n                {{ validation.message }}\n              </div>\n            </div>\n          </div>\n          <!-- <p style=\"font-size:12px;text-decoration: underline;text-align: center;\" (click)=\"checkIban(ibanNo)\"\n            [ngClass]=\"{'green': ibanCheck == 'pass', 'red': ibanCheck == 'fail','blue': ibanCheck == 'notchecked'}\">\n            {{'PAYMENT_OPTON.validate' | translate}}</p> -->\n\n          <ion-item lines=\"none\">\n\n            <span style=\"font-size:12px;\">{{'PAYMENT_OPTON.Bic' | translate}}:{{cardPaymentoption.bic!= '' ?cardPaymentoption.bic:'--'}}</span>\n\n          </ion-item>\n          <p style=\"font-size:12px;\" class=\"red\">{{erroriban}}</p>\n\n\n          <!-- <ion-item  lines=\"none\"  > -->\n\n          <div style=\"text-align:center;padding:2% 12%;\" slot=\"center\">\n            <ion-button class=\"card-btn\" color=\"secondary\" expand=\"\" (click)=\"savePayment('iban')\"\n              >\n              <!-- [disabled]=\"ibanCheck != 'pass'\" -->\n              {{'PAYMENT_OPTON.btns.save' | translate}}\n            </ion-button>\n            <p style=\"color: #666666;font-size:12px\">{{'PAYMENT_OPTON.freeaccount' | translate}}</p>\n            <ion-button class=\"card-btn\" color=\"danger\" expand=\"\" (click)=\"savePayment('ibanss')\">\n              {{'PAYMENT_OPTON.btns.getone' | translate}}\n            </ion-button>\n          </div>\n\n\n        <!-- </div> -->\n\n      </ion-card-content>\n    </ion-card>\n    <!-- <ion-card>\n\n\n      <ion-card-content class=\"\">\n        <ion-item lines=\"none\">\n          <ion-label>{{'PAYMENT_OPTON.Activate' | translate}}/{{'PAYMENT_OPTON.Deactivate' | translate}}</ion-label>\n          <ion-checkbox slot=\"start\" formControlName=\"bitcoin\" [(ngModel)]=\"bitcoin\" class=\"radio\"\n            (ionChange)=\"onBitcoinChange()\"></ion-checkbox>\n        </ion-item>\n        <ion-item lines=\"none\" style=\"text-align:center;padding:2% 12%;--min-height: 20px;\">\n          <p style=\"text-align:center;\">{{'PAYMENT_OPTON.BITCOIN' | translate}}</p>\n\n        </ion-item>\n        <ion-item lines=\"none\" style=\"--min-height: 30px;\">\n          <span style=\"font-size: 13px;\n        color: #666666;\">{{'PAYMENT_OPTON.wallet' | translate}}</span>\n\n        </ion-item>\n        <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n          <ion-input type=\"text\" id=\"bitcoin\" placeholder=\"\" autofocus=\"false\" formControlName=\"wallet\"></ion-input>\n\n        </ion-item>\n        <p style=\"font-size:12px;\" class=\"red\">{{error}}</p>\n        <div style=\"text-align:center;padding:2% 12%;\">\n          <ion-button class=\"card-btn\" color=\"danger\" expand=\"\" (click)=\"savePayment('bitcoin')\">\n            {{'PAYMENT_OPTON.btns.save' | translate}}\n          </ion-button>\n        </div>\n\n      </ion-card-content>\n    </ion-card> -->\n  </form>\n  <div style=\"padding:10px;\"></div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_commission-option_commission-option_module_ts.js.map