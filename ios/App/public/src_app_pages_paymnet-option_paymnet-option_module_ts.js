"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_paymnet-option_paymnet-option_module_ts"],{

/***/ 35659:
/*!***********************************************************************!*\
  !*** ./src/app/pages/paymnet-option/paymnet-option-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymnetOptionPageRoutingModule": () => (/* binding */ PaymnetOptionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _paymnet_option_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paymnet-option.page */ 61152);




const routes = [
    {
        path: '',
        component: _paymnet_option_page__WEBPACK_IMPORTED_MODULE_0__.PaymnetOptionPage
    }
];
let PaymnetOptionPageRoutingModule = class PaymnetOptionPageRoutingModule {
};
PaymnetOptionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymnetOptionPageRoutingModule);



/***/ }),

/***/ 4087:
/*!***************************************************************!*\
  !*** ./src/app/pages/paymnet-option/paymnet-option.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "PaymnetOptionPageModule": () => (/* binding */ PaymnetOptionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _paymnet_option_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paymnet-option-routing.module */ 35659);
/* harmony import */ var _paymnet_option_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paymnet-option.page */ 61152);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30610);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 93740);
/* harmony import */ var _components_share_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/share-component-module */ 99663);











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

let PaymnetOptionPageModule = class PaymnetOptionPageModule {
};
PaymnetOptionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _paymnet_option_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymnetOptionPageRoutingModule,
            _components_share_component_module__WEBPACK_IMPORTED_MODULE_4__.ShareComponentModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient],
                },
            })
        ],
        declarations: [_paymnet_option_page__WEBPACK_IMPORTED_MODULE_1__.PaymnetOptionPage],
        providers: [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser]
    })
], PaymnetOptionPageModule);



/***/ }),

/***/ 61152:
/*!*************************************************************!*\
  !*** ./src/app/pages/paymnet-option/paymnet-option.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymnetOptionPage": () => (/* binding */ PaymnetOptionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _paymnet_option_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paymnet-option.page.html?ngResource */ 18473);
/* harmony import */ var _paymnet_option_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paymnet-option.page.scss?ngResource */ 33147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/browser */ 65821);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 93740);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 65485);










let PaymnetOptionPage = class PaymnetOptionPage {
    constructor(utilSer, apiSer, theInAppBrowser, platform, router) {
        this.utilSer = utilSer;
        this.apiSer = apiSer;
        this.theInAppBrowser = theInAppBrowser;
        this.platform = platform;
        this.router = router;
        this.cardPaymentoption = {};
        this.cardadded = false;
        this.ibanadded = false;
        this.somethingElseclick = false;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes', //Windows only    
        };
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getPaymentoption("loader", "");
    }
    getPaymentoption(loader, type) {
        var _a, _b, _c;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.somethingElseclick = false;
            console.log(loader);
            // this.cardPaymentoption={}
            let loading;
            if (loader == "loader") {
                loading = yield this.utilSer.presentLoading();
            }
            let result = yield this.apiSer.paymentOption();
            let profile = yield this.apiSer.getProfile();
            if (loader == "loader") {
                loading.dismiss();
            }
            if (profile.status) {
                this.userProfile = profile.data.profile;
                console.log(this.userProfile);
            }
            if (result.status == 1) {
                this.cardPaymentoption = result.data;
                var changeLoader;
                this.myPaymentOption = (_a = this.cardPaymentoption) === null || _a === void 0 ? void 0 : _a.myPaymentOption;
                if (loader == "noloader") {
                    if (type == 'GUARANTEED_DIRECT_DEBIT_SEPA') {
                        this.ibanadded = true;
                        this.myPaymentOption = 'guaranteed_direct_debit_sepa';
                        if (this.cardPaymentoption.iban_payment_option == '') {
                            changeLoader = "noloader";
                            setTimeout(() => {
                                this.getPaymentoption(changeLoader, type);
                            }, 2000);
                        }
                        else {
                            this.ibanadded = false;
                            changeLoader = "loader";
                            let data = {
                                'paymentOption': type
                            };
                            this.apiSer.changePaymentOption(data);
                        }
                    }
                    else if (type == 'CREDITCARD') {
                        this.myPaymentOption = 'creditcard';
                        this.cardadded = true;
                        if (this.cardPaymentoption.cardNumber == '') {
                            changeLoader = "noloader";
                            setTimeout(() => {
                                this.getPaymentoption(changeLoader, type);
                            }, 2000);
                        }
                        else {
                            this.cardadded = false;
                            changeLoader = "loader";
                            let data = {
                                'paymentOption': type
                            };
                            this.apiSer.changePaymentOption(data);
                        }
                    }
                }
                else {
                    if (((_b = this.cardPaymentoption) === null || _b === void 0 ? void 0 : _b.myPaymentOption) == 'guaranteed_direct_debit_sepa') {
                        this.ibanadded = false;
                    }
                    else if (((_c = this.cardPaymentoption) === null || _c === void 0 ? void 0 : _c.myPaymentOption) == 'creditcard') {
                        this.cardadded = false;
                    }
                    changeLoader = "loader";
                }
                console.log(changeLoader, "changeLoader");
                // }
            }
        });
    }
    aboPayment(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.somethingElseclick = false;
            console.log(type);
            let data = {
                'paymentOption': type
            };
            let loading = yield this.utilSer.presentLoading();
            let result = yield this.apiSer.aboPayment(data);
            loading.dismiss();
            if (result.status == 1) {
                this.inAppBrowser(result.response.result.redirect_url);
                this.somethingElseclick = true;
                this.validatePayment(result.paymentId, type);
                //this.cardPaymentoption = result.data
            }
        });
    }
    confirmDelete(type) {
        this.somethingElseclick = false;
        this.utilSer.presentAlert("Warning", "", [], this.utilSer.translateText('PAYMENT_OPTON').msg.deleteWarning, [{
                text: this.utilSer.translateText("MODALS").BUTTONS.YES,
                cssClass: 'secondary',
                handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    this.deletePaymnet(type);
                })
            },
            {
                text: this.utilSer.translateText("MODALS").BUTTONS.NO,
                role: 'cancel',
                cssClass: 'danger',
                handler: () => {
                    console.log('Confirm Cancel');
                }
            }]);
    }
    deletePaymnet(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.somethingElseclick = false;
            console.log(type);
            let data = {
                'paymentOption': type
            };
            let loading = yield this.utilSer.presentLoading();
            let result = yield this.apiSer.deletPayment(data);
            loading.dismiss();
            if (result.status == 1) {
                this.utilSer.presentToast(this.utilSer.translateText('PAYMENT_OPTON').msg.deleteCard, "top");
                this.getPaymentoption("loader", type);
                // this.inAppBrowser(result.response.result.redirect_url);
                // this.validatePayment(result.paymentId)
                //this.cardPaymentoption = result.data
            }
        });
    }
    inAppBrowser(paymentUrl) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.platform.is('android')) {
                let target = "_blank";
                this.openPage = this.theInAppBrowser.create(paymentUrl, target, this.options);
                this.openPage.on('exit').subscribe(event => {
                    console.log(event, 'exit');
                    // this.paymentInti = false;
                });
            }
            else {
                _capacitor_browser__WEBPACK_IMPORTED_MODULE_4__.Browser.open({ url: paymentUrl });
                _capacitor_browser__WEBPACK_IMPORTED_MODULE_4__.Browser.addListener('browserPageLoaded', () => { }).then((info) => {
                    console.log(info);
                });
                _capacitor_browser__WEBPACK_IMPORTED_MODULE_4__.Browser.addListener('browserFinished', () => { }).then((info) => {
                    console.log(info);
                    // this.paymentInti = false;
                });
            }
        });
    }
    loaderHide() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // this.paymentInti = false;
        });
    }
    closeBrowser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.platform.is('android')) {
                this.openPage.close();
            }
            else {
                _capacitor_browser__WEBPACK_IMPORTED_MODULE_4__.Browser.close();
            }
        });
    }
    onManualClose() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log(_capacitor_browser__WEBPACK_IMPORTED_MODULE_4__.Browser);
            if (this.platform.is('android')) {
                this.openPage.on('loadstop').subscribe(event => {
                    console.log(event);
                    // this.paymentInti = false;
                });
            }
            else {
                // Browser.addListener('browserPageLoaded', () => { }).then((info) => {
                //   console.log(info);
                //   this.paymentInti = false;
                // })
                // Browser.addListener('browserFinished', () => { }).then((info) => {
                //   console.log(info);
                //   this.paymentInti = false;
                // })
            }
        });
    }
    validatePayment(paymentId, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let result = yield this.apiSer.paymentStatus({
                paymentId: paymentId
            });
            if (result.msg == "payment not completed") {
                setTimeout(() => {
                    if (this.router.url == '/tabs/paymnet-option') {
                        this.validatePayment(paymentId, type);
                        // console.log(this.paymentUrl)
                    }
                    this.onManualClose();
                }, 2000);
            }
            else {
                if (type == 'CREDITCARD') {
                    this.cardadded = false;
                }
                else if (type == 'GUARANTEED_DIRECT_DEBIT_SEPA') {
                    this.ibanadded = false;
                }
                clearInterval();
                this.closeBrowser();
                if (result.msg == "payment completed") {
                    this.utilSer.presentToast(this.utilSer.translateText('PAYMENT_OPTON').msg.addcard, "top");
                    this.getPaymentoption("noloader", type);
                }
            }
        });
    }
    changePayment(type, methodType) {
        var _a, _b, _c, _d;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log(type, methodType);
            let data = {
                'paymentOption': methodType
            };
            if (type == 'creditcard') {
                this.myPaymentOption = 'creditcard';
                if (((_a = this.cardPaymentoption) === null || _a === void 0 ? void 0 : _a.cardNumber) != '') {
                    this.apiSer.changePaymentOption(data);
                }
                else if (((_b = this.cardPaymentoption) === null || _b === void 0 ? void 0 : _b.cardNumber) == '') {
                    this.aboPayment(methodType);
                }
            }
            else if (type == 'guaranteed_direct_debit_sepa') {
                this.myPaymentOption = 'guaranteed_direct_debit_sepa';
                if (((_c = this.cardPaymentoption) === null || _c === void 0 ? void 0 : _c.iban_payment_option) != '') {
                    this.apiSer.changePaymentOption(data);
                }
                else if (((_d = this.cardPaymentoption) === null || _d === void 0 ? void 0 : _d.iban_payment_option) == '') {
                    this.aboPayment(methodType);
                }
            }
        });
    }
};
PaymnetOptionPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__.InAppBrowser },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
PaymnetOptionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-paymnet-option',
        template: _paymnet_option_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_paymnet_option_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaymnetOptionPage);



/***/ }),

/***/ 33147:
/*!**************************************************************************!*\
  !*** ./src/app/pages/paymnet-option/paymnet-option.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".radio {\n  margin: 0px;\n  margin-right: 10px;\n  width: 12px;\n  height: 12px;\n  border: solid 1px #ccc;\n  border-radius: 8px;\n}\n\nion-item {\n  --min-height:40px ;\n}\n\nion-card {\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1uZXQtb3B0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0FBRUoiLCJmaWxlIjoicGF5bW5ldC1vcHRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhZGlvIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG5pb24taXRlbSB7XG4gICAgLS1taW4taGVpZ2h0OjQwcHhcbn1cbmlvbi1jYXJke1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59Il19 */";

/***/ }),

/***/ 18473:
/*!**************************************************************************!*\
  !*** ./src/app/pages/paymnet-option/paymnet-option.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<app-header  [headerTitle]=\"'PAGES.PAYMENT_ABO' | translate\"  [headerBack]=true  ></app-header>\n\n<ion-content style=\"padding:10px;\">\n  <div style=\"padding:10px;\"></div>\n  <ion-card *ngFor=\"let paym of userProfile?.paymentAbo; let i = index\" >\n   \n    <ion-radio-group [value]=\"myPaymentOption\" >\n   \n    <ion-card-content class=\"\" *ngIf=\"i == 0 \">\n\n      <ion-item  lines=\"none\">\n        <ion-label>{{'PAYMENT_OPTON.Activate' | translate}}/{{'PAYMENT_OPTON.Deactivate' | translate}}</ion-label>\n        <ion-radio slot=\"start\" value=\"creditcard\" checked=\"cardPaymentoption?.myPaymentOption =='creditcard'\"   class=\"radio\" (click)=\"changePayment('creditcard',paym);\"></ion-radio>\n      </ion-item>\n      <ion-item  lines=\"none\">\n        <label>{{'PAYMENT_OPTON.method.credit' | translate}}</label> \n        <p slot=\"end\" *ngIf=\"cardPaymentoption?.cardNumber != '' \">{{cardPaymentoption?.cardNumber}}</p>\n        <p *ngIf=\"cardadded\"  style=\"font-size:12px;color:rgb(99, 91, 91);margin-left: 25px;\"> {{'PAYMENT_OPTON.inprogress' | translate}}</p>\n      </ion-item>\n    \n\n\n      \n      <ion-button class=\"card-btn\" color=\"secondary\" expand=\"block\" (click)=\"aboPayment(paym)\" *ngIf=\"cardPaymentoption?.cardNumber == '' && !cardadded\">\n        {{'PAYMENT_OPTON.btns.add' | translate}}  {{'PAYMENT_OPTON.method.credit' | translate}}\n        <!-- *ngIf=\"cardPaymentoption?.cardNumber == ''\" -->\n      </ion-button>\n      <ion-button class=\"card-btn\" color=\"danger\" expand=\"block\" *ngIf=\"cardPaymentoption?.cardNumber != ''|| cardadded\" (click)=\"confirmDelete(paym)\">\n        {{'PAYMENT_OPTON.btns.delete' | translate}} {{'PAYMENT_OPTON.method.credit' | translate}}\n      </ion-button>\n    </ion-card-content>\n\n    <ion-card-content class=\"\" *ngIf=\"i == 1\">\n      <!-- <ion-radio-group [value]=\"userProfile?.paymentAbo\" > -->\n      <ion-item  lines=\"none\">\n        <ion-label>{{'PAYMENT_OPTON.Activate' | translate}}/{{'PAYMENT_OPTON.Deactivate' | translate}}</ion-label>\n        <ion-radio slot=\"start\"  value=\"guaranteed_direct_debit_sepa\" checked=\"cardPaymentoption?.myPaymentOption =='guaranteed_direct_debit_sepa'\"   class=\"radio\" (click)=\"changePayment('guaranteed_direct_debit_sepa',paym);\"></ion-radio>\n      </ion-item>\n    <!-- </ion-radio-group> -->\n      <ion-item  lines=\"none\"  >\n        <label>{{'PAYMENT_OPTON.method.IBAN' | translate}}</label> \n        <p slot=\"end\" *ngIf=\"cardPaymentoption?.iban_payment_option != '' \" >{{cardPaymentoption?.iban_payment_option}}</p>\n        <p *ngIf=\"ibanadded\"  style=\"font-size:12px;color:rgb(99, 91, 91);margin-left: 25px;\"> {{'PAYMENT_OPTON.inprogress' | translate}}</p>\n      </ion-item>\n\n\n      \n      <ion-button class=\"card-btn\" color=\"secondary\" expand=\"block\" (click)=\"aboPayment(paym)\" *ngIf=\"cardPaymentoption?.iban_payment_option == '' && !ibanadded\">\n        {{'PAYMENT_OPTON.btns.add' | translate}}  {{'PAYMENT_OPTON.method.IBAN' | translate}}\n        <!-- *ngIf=\"cardPaymentoption?.cardNumber == ''\" -->\n      </ion-button>\n      <ion-button class=\"card-btn\" color=\"danger\" expand=\"block\" *ngIf=\"cardPaymentoption?.iban_payment_option !=''|| ibanadded\" (click)=\"confirmDelete(paym)\">\n        {{'PAYMENT_OPTON.btns.delete' | translate}} {{'PAYMENT_OPTON.method.IBAN' | translate}}\n      </ion-button>\n\n    </ion-card-content>\n  </ion-radio-group>\n\n  </ion-card>\n\n\n\n  <div style=\"padding:10px;\"></div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_paymnet-option_paymnet-option_module_ts.js.map