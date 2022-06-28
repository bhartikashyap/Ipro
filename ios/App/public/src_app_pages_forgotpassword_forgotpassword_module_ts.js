"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_forgotpassword_forgotpassword_module_ts"],{

/***/ 5326:
/*!***********************************************************************!*\
  !*** ./src/app/pages/forgotpassword/forgotpassword-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpasswordPageRoutingModule": () => (/* binding */ ForgotpasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotpassword.page */ 54314);




const routes = [
    {
        path: '',
        component: _forgotpassword_page__WEBPACK_IMPORTED_MODULE_0__.ForgotpasswordPage
    }
];
let ForgotpasswordPageRoutingModule = class ForgotpasswordPageRoutingModule {
};
ForgotpasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotpasswordPageRoutingModule);



/***/ }),

/***/ 95862:
/*!***************************************************************!*\
  !*** ./src/app/pages/forgotpassword/forgotpassword.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpasswordPageModule": () => (/* binding */ ForgotpasswordPageModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotpassword-routing.module */ 5326);
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotpassword.page */ 54314);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30610);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 46828);










function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
let ForgotpasswordPageModule = class ForgotpasswordPageModule {
};
ForgotpasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient],
                },
            }),
            _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotpasswordPageRoutingModule,
        ],
        declarations: [_forgotpassword_page__WEBPACK_IMPORTED_MODULE_1__.ForgotpasswordPage],
    })
], ForgotpasswordPageModule);



/***/ }),

/***/ 54314:
/*!*************************************************************!*\
  !*** ./src/app/pages/forgotpassword/forgotpassword.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpasswordPage": () => (/* binding */ ForgotpasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _forgotpassword_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotpassword.page.html?ngResource */ 37461);
/* harmony import */ var _forgotpassword_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotpassword.page.scss?ngResource */ 45954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utility/message */ 34410);
/* harmony import */ var src_app_utility_pattern__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utility/pattern */ 18434);












let ForgotpasswordPage = class ForgotpasswordPage {
    constructor(router, menuCtrl, _translate, utility, formBuilder, apiService) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this._translate = _translate;
        this.utility = utility;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.submitted = false;
    }
    get formControls() {
        return this.form.controls;
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(false);
    }
    initForm() {
        this.form = this.formBuilder.group({
            email: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(src_app_utility_pattern__WEBPACK_IMPORTED_MODULE_5__.pattern.email),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(100),
                ],
            ]
        });
        let messages = this.utility.translateText('MSG');
        this.validationMessage = {
            email: [
                { type: 'required', message: messages.required },
                { type: 'pattern', message: messages.email },
                { type: 'maxlength', message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(100, messages.maxLength, messages.characters) },
            ]
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
                let params = this.form.getRawValue();
                let loading = yield this.utility.presentLoading();
                this.apiService
                    .forgotPassword(params)
                    .then((res) => {
                    loading.dismiss();
                    if (res.status) {
                        this.utility.presentToast(res.msg, "bottom");
                        this.form.reset();
                    }
                    else {
                        this.utility.presentToast(res.msg, "bottom");
                    }
                })
                    .catch((err) => {
                    loading.dismiss();
                    console.log(err);
                });
                console.log(params);
            }
        });
    }
};
ForgotpasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
ForgotpasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-forgotpassword',
        template: _forgotpassword_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forgotpassword_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgotpasswordPage);



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

/***/ 45954:
/*!**************************************************************************!*\
  !*** ./src/app/pages/forgotpassword/forgotpassword.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".forgot-img-layer {\n  display: block;\n  margin-top: 150px;\n  margin-bottom: 150px;\n}\n.forgot-img-layer img {\n  width: 180px;\n  margin: auto;\n  display: block;\n}\n.forgot-header {\n  text-align: center;\n}\n.forgot-header h1 {\n  margin: 0px;\n  font-size: 24px;\n  color: #666666;\n  font-style: normal;\n  font-weight: normal;\n}\nform {\n  padding: 20px;\n  padding-top: 0px;\n}\nform .form-group {\n  position: relative;\n  --inner-padding-end: 5px !important;\n  margin-top: 20px;\n}\nform ion-input {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  border: 1px solid #D6D6D6 !important;\n  height: 45px;\n  border-radius: 5px !important;\n  padding: 12px 11px !important;\n  --padding-bottom: 0px;\n  --padding-top: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0 !important;\n}\nform ion-item.item-has-value ion-label,\nform ion-item.item-has-focus ion-label {\n  top: 15px !important;\n  background: white;\n  z-index: 999;\n  text-align: left;\n  font-size: 16px !important;\n  width: 100px !important;\n  padding-left: 10px;\n}\nform ion-label.label-floating {\n  position: relative;\n  top: 3px;\n  left: 10px;\n  font-size: 12px !important;\n  color: gray !important;\n}\nform .password-input {\n  position: relative;\n}\nform .password-input ion-input {\n  --padding-bottom: 0px;\n  --padding-top: 0px;\n  --padding-start: 0px;\n  --padding-end: 40px;\n}\nform .password-input ion-icon {\n  position: absolute;\n  bottom: 10px;\n  right: 20px;\n  font-size: 25px;\n  z-index: 9999;\n}\nform .forgot-password {\n  color: #6D6D6D;\n  font-size: 12px;\n  font-weight: 400;\n  text-decoration: none;\n}\nform .dont-know {\n  color: #6D6D6D;\n  font-size: 12px;\n  font-weight: 400;\n  text-decoration: none;\n  text-align: center;\n  width: 100%;\n  display: block;\n  margin-top: 20px;\n}\nform .dont-know span {\n  color: #FF662A;\n}\nform .btn {\n  height: 40px;\n  font-size: 12px;\n  font-weight: 600;\n  --border-radius: 4px;\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdHBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNKO0FBR0E7RUFDRSxrQkFBQTtBQUFGO0FBRUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFJQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQURGO0FBR0U7RUFDRSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQUZKO0FBS0U7O0VBRUUsb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUhKO0FBTUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBQUpKO0FBT0U7RUFDRSxrQkFBQTtBQUxKO0FBT0k7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUxOO0FBUUk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFOTjtBQVVFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBUko7QUFXRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVRKO0FBV0k7RUFDRSxjQUFBO0FBVE47QUFhRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFYSiIsImZpbGUiOiJmb3Jnb3RwYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9yZ290LWltZy1sYXllciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbi5mb3Jnb3QtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGgxIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cbn1cblxuZm9ybSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG5cbiAgLmZvcm0tZ3JvdXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiA1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG5cbiAgaW9uLWlucHV0IHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q2RDZENiAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxMnB4IDExcHggIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24taXRlbS5pdGVtLWhhcy12YWx1ZSBpb24tbGFiZWwsXG4gIGlvbi1pdGVtLml0ZW0taGFzLWZvY3VzIGlvbi1sYWJlbCB7XG4gICAgdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgei1pbmRleDogOTk5O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG5cbiAgaW9uLWxhYmVsLmxhYmVsLWZsb2F0aW5nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAzcHg7XG4gICAgbGVmdDogMTBweDtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBhc3N3b3JkLWlucHV0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBpb24taW5wdXQge1xuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiA0MHB4O1xuICAgIH1cblxuICAgIGlvbi1pY29uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgei1pbmRleDogOTk5OTtcbiAgICB9XG4gIH1cblxuICAuZm9yZ290LXBhc3N3b3JkIHtcbiAgICBjb2xvcjogIzZENkQ2RDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAuZG9udC1rbm93IHtcbiAgICBjb2xvcjogIzZENkQ2RDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiAjRkY2NjJBO1xuICAgIH1cbiAgfVxuXG4gIC5idG4ge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW46IDIwcHg7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 37461:
/*!**************************************************************************!*\
  !*** ./src/app/pages/forgotpassword/forgotpassword.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"forgot-img-layer\">\n    <img src=\"assets/img/logo.png\">\n  </div>\n  <div class=\"forgot-header\">\n    <h1>{{'FORGOT_PASSWORD.TITLE' | translate}}</h1>\n  </div>\n  <form [formGroup]=\"form\">\n     <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n       <!-- <ion-label for=\"email\" position=\"floating\">{{'FORGOT_PASSWORD.EMAIL' | translate}}</ion-label> -->\n       <ion-input formControlName=\"email\" placeholder=\"{{'FORGOT_PASSWORD.EMAIL' | translate}}\" type=\"email\"\n         id=\"email\" autocapitalize=\"off\"></ion-input>\n     </ion-item>\n     <div *ngFor=\"let validation of validationMessage.email\">\n       <div *ngIf=\"submitted && formControls['email'].errors\" class=\"validation-message\">\n         <div class=\"error-message text-red \" *ngIf=\"formControls['email'].errors[validation.type]\">\n           {{ validation.message }}\n         </div>\n       </div>\n     </div>\n    <ion-button class=\"btn\" color=\"danger\" expand=\"block\" (click)=\"submit()\">{{'FORGOT_PASSWORD.SUBMIT_BTN' | translate}}\n    </ion-button>\n    <a class=\"dont-know\">{{'FORGOT_PASSWORD.ALREADY_REGISTERED' | translate}} <span\n        [routerLink]=\"['/login']\">{{'FORGOT_PASSWORD.LOGIN' | translate}}</span></a>\n  </form>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_forgotpassword_forgotpassword_module_ts.js.map