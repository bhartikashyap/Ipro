"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_check-zip_check-zip_module_ts"],{

/***/ 54311:
/*!*************************************************************!*\
  !*** ./src/app/pages/check-zip/check-zip-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckZipPageRoutingModule": () => (/* binding */ CheckZipPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _check_zip_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-zip.page */ 56169);




const routes = [
    {
        path: '',
        component: _check_zip_page__WEBPACK_IMPORTED_MODULE_0__.CheckZipPage
    }
];
let CheckZipPageRoutingModule = class CheckZipPageRoutingModule {
};
CheckZipPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CheckZipPageRoutingModule);



/***/ }),

/***/ 80289:
/*!*****************************************************!*\
  !*** ./src/app/pages/check-zip/check-zip.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckZipPageModule": () => (/* binding */ CheckZipPageModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _check_zip_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-zip-routing.module */ 54311);
/* harmony import */ var _check_zip_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-zip.page */ 56169);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30610);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _components_share_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/share-component-module */ 99663);











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
let CheckZipPageModule = class CheckZipPageModule {
};
CheckZipPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient],
                },
            }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _components_share_component_module__WEBPACK_IMPORTED_MODULE_2__.ShareComponentModule,
            _check_zip_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckZipPageRoutingModule
        ],
        declarations: [_check_zip_page__WEBPACK_IMPORTED_MODULE_1__.CheckZipPage]
    })
], CheckZipPageModule);



/***/ }),

/***/ 56169:
/*!***************************************************!*\
  !*** ./src/app/pages/check-zip/check-zip.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckZipPage": () => (/* binding */ CheckZipPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _check_zip_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-zip.page.html?ngResource */ 55946);
/* harmony import */ var _check_zip_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-zip.page.scss?ngResource */ 15625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utility/message */ 34410);
/* harmony import */ var src_app_services_environment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/environment.service */ 98407);












let CheckZipPage = class CheckZipPage {
    constructor(router, menuCtrl, _translate, navController, formBuilder, utility, apiService, envr) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this._translate = _translate;
        this.navController = navController;
        this.formBuilder = formBuilder;
        this.utility = utility;
        this.apiService = apiService;
        this.envr = envr;
        this.submitted = false;
    }
    get formControls() {
        return this.form.controls;
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(false);
        console.log(this.utility.translateText('MSG').currentlyUnavailable);
    }
    initForm() {
        this.form = this.formBuilder.group({
            zip: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(100)]],
        });
        let messages = this.utility.translateText('MSG');
        this.validationMessage = {
            zip: [
                { type: "required", message: messages.required },
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(100, messages.maxLength, messages.characters) },
            ],
        };
    }
    ngOnInit() {
        this.initForm();
        this.menuCtrl.enable(false);
    }
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.submitted = true;
            if (this.form.valid && this.utility.checkNetwork()) {
                this.submitted = false;
                let loading = yield this.utility.presentLoading();
                this.apiService
                    .checkZip({
                    zipCode: this.form.value.zip,
                })
                    .then((res) => {
                    loading.dismiss();
                    if (res.status === 0) {
                        this.utility.presentAlert("Alert", "", [], this.utility.translateText('MSG').currentlyUnavailable, [
                            {
                                text: this.utility.translateText("MODALS").BUTTONS.OK,
                                handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                                    this.utility.getPlanDetail(this.envr.plans.bodyAnlaysis);
                                    // this.router.navigate(["/tabs/book-analysis"]);
                                })
                            }
                        ]);
                    }
                    else {
                        // this.router.navigate(["/tabs/book-analysis"]);
                        this.utility.getPlanDetail(this.envr.plans.bodyAnlaysis);
                    }
                })
                    .catch((err) => {
                    loading.dismiss();
                });
            }
        });
    }
};
CheckZipPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_environment_service__WEBPACK_IMPORTED_MODULE_5__.EnvironmentService }
];
CheckZipPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: "app-check-zip",
        template: _check_zip_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_check_zip_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CheckZipPage);



/***/ }),

/***/ 15625:
/*!****************************************************************!*\
  !*** ./src/app/pages/check-zip/check-zip.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".register-img-layer {\n  display: block;\n  margin-top: 30px;\n}\n.register-img-layer img {\n  width: 180px;\n  margin: auto;\n  display: block;\n}\n.register-header {\n  padding-top: 15px;\n  width: 172px;\n  height: 48px;\n}\n.register-header h1 {\n  margin: 0px;\n  font-size: 24px;\n  color: #666666;\n  font-style: normal;\n  font-weight: normal;\n  text-align: left;\n  margin-left: 20px;\n}\n.dont-know {\n  color: #6d6d6d;\n  font-size: 15px;\n  font-weight: 700;\n  text-decoration: none;\n  text-align: center;\n  width: 100%;\n  display: block;\n  margin-top: 20px;\n  margin-bottom: 15px;\n}\n.dont-know span {\n  color: #a9d5c1;\n  font-weight: 400;\n}\nform {\n  padding: 20px;\n  padding-top: 0px;\n}\nform .form-group {\n  position: relative;\n  --inner-padding-end: 5px !important;\n}\nform ion-input,\nform ion-select {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  border: 1px solid #d6d6d6 !important;\n  height: 40px;\n  border-radius: 5px !important;\n  padding: 12px 11px !important;\n  --padding-bottom: 0px;\n  --padding-top: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0 !important;\n}\nform ion-item.item-has-value ion-label,\nform ion-item.item-has-focus ion-label {\n  top: 15px !important;\n  background: white;\n  z-index: 999;\n  text-align: left;\n  font-size: 16px !important;\n  width: 100px !important;\n  padding-left: 10px;\n}\nform .btn {\n  height: 40px;\n  font-size: 12px;\n  font-weight: 600;\n  --border-radius: 4px;\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrLXppcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUFFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBRUo7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUFFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBRUo7QUFDQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQUVGO0FBREU7RUFDRSxrQkFBQTtFQUNBLG1DQUFBO0FBR0o7QUFERTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBR0o7QUFBRTs7RUFFRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBRUo7QUFDRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJjaGVjay16aXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyLWltZy1sYXllciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBpbWcge1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLnJlZ2lzdGVyLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICB3aWR0aDogMTcycHg7XG4gIGhlaWdodDogNDhweDtcblxuICBoMSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbn1cbi5kb250LWtub3cge1xuICBjb2xvcjogIzZkNmQ2ZDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBzcGFuIHtcbiAgICBjb2xvcjogI2E5ZDVjMTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG59XG5mb3JtIHtcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgLmZvcm0tZ3JvdXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiA1cHggIWltcG9ydGFudDtcbiAgfVxuICBpb24taW5wdXQsXG4gIGlvbi1zZWxlY3Qge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDZkNmQ2ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEycHggMTFweCAhaW1wb3J0YW50O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi1pdGVtLml0ZW0taGFzLXZhbHVlIGlvbi1sYWJlbCxcbiAgaW9uLWl0ZW0uaXRlbS1oYXMtZm9jdXMgaW9uLWxhYmVsIHtcbiAgICB0b3A6IDE1cHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cblxuICAuYnRuIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luOiAyMHB4O1xuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 55946:
/*!****************************************************************!*\
  !*** ./src/app/pages/check-zip/check-zip.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n<app-header  [headerTitle]=\"'PAGES.CHECKZIP' | translate\"  [headerBack]=true  ></app-header>\n\n\n<ion-content>\n  <div class=\"register-header\">\n    <h1>{{'BOOKING_ANALYSIS.CHECK_ZIP' | translate}} </h1>\n  </div>\n  <form  [formGroup]=\"form\">\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding\"> \n      <ion-input type=\"text\" id=\"zip\" formControlName=\"zip\" placeholder=\"Zip\" autocapitalize=\"off\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let validation of validationMessage.zip\">\n      <div *ngIf=\"submitted && formControls['zip'].errors\" class=\"validation-message\">\n        <div class=\"error-message text-red \" *ngIf=\"formControls['zip'].errors[validation.type]\">\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n    <ion-button (click)=\"submit()\" class=\"btn\" color=\"danger\" expand=\"block\">\n      {{'BOOKING_ANALYSIS.SUBMIT_BUTTON' | translate}}</ion-button>\n  </form>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_check-zip_check-zip_module_ts.js.map