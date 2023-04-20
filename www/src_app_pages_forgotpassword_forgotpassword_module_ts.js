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
                        this.utility.presentToast(this.utility.translateText('MSG').paswordUpdated, "bottom");
                        this.form.reset();
                    }
                    else {
                        this.utility.presentToast(this.utility.translateText('MSG').someissueInNetwork, "bottom");
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
    email: '[A-Za-z0-9._%-+]+@[A-Za-z0-9._%-]+\\.[a-z]{2,20}',
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

module.exports = ".forgot-img-layer {\n  display: block;\n  margin-top: 150px;\n  margin-bottom: 150px;\n}\n.forgot-img-layer img {\n  width: 180px;\n  margin: auto;\n  display: block;\n}\n.forgot-header {\n  text-align: center;\n}\n.forgot-header h1 {\n  margin: 0px;\n  font-size: 24px;\n  color: #666666;\n  font-style: normal;\n  font-weight: normal;\n}\nform {\n  padding: 20px;\n  padding-top: 0px;\n}\nform .form-group {\n  position: relative;\n  --inner-padding-end: 5px !important;\n  margin-top: 20px;\n}\nform ion-input {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  border: 1px solid #D6D6D6 !important;\n  height: 45px;\n  border-radius: 5px !important;\n  padding: 12px 11px !important;\n  --padding-bottom: 0px;\n  --padding-top: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0 !important;\n}\nform ion-item.item-has-value ion-label,\nform ion-item.item-has-focus ion-label {\n  top: 15px !important;\n  background: white;\n  z-index: 999;\n  text-align: left;\n  font-size: 16px !important;\n  width: 100px !important;\n  padding-left: 10px;\n}\nform ion-label.label-floating {\n  position: relative;\n  top: 3px;\n  left: 10px;\n  font-size: 12px !important;\n  color: gray !important;\n}\nform .password-input {\n  position: relative;\n}\nform .password-input ion-input {\n  --padding-bottom: 0px;\n  --padding-top: 0px;\n  --padding-start: 0px;\n  --padding-end: 40px;\n}\nform .password-input ion-icon {\n  position: absolute;\n  bottom: 10px;\n  right: 20px;\n  font-size: 25px;\n  z-index: 9999;\n}\nform .forgot-password {\n  color: #6D6D6D;\n  font-size: 12px;\n  font-weight: 400;\n  text-decoration: none;\n}\nform .dont-know {\n  color: #6D6D6D;\n  font-size: 12px;\n  font-weight: 400;\n  text-decoration: none;\n  text-align: center;\n  width: 100%;\n  display: block;\n  margin-top: 20px;\n}\nform .dont-know span {\n  color: #FF662A;\n}\nform .btn {\n  height: 40px;\n  font-size: 12px;\n  font-weight: 600;\n  --border-radius: 4px;\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdHBhc3N3b3JkLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2lwcm8lMjAyL3NyYy9hcHAvcGFnZXMvZm9yZ290cGFzc3dvcmQvZm9yZ290cGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNDRjtBRENFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0o7QURHQTtFQUNFLGtCQUFBO0FDQUY7QURFRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNBSjtBRElBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDREY7QURHRTtFQUNFLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQ0RKO0FESUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FDRko7QURLRTs7RUFFRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDSEo7QURNRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0FDSko7QURPRTtFQUNFLGtCQUFBO0FDTEo7QURPSTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDTE47QURRSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ05OO0FEVUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNSSjtBRFdFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDVEo7QURXSTtFQUNFLGNBQUE7QUNUTjtBRGFFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ1hKIiwiZmlsZSI6ImZvcmdvdHBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3Jnb3QtaW1nLWxheWVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNTBweDtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLmZvcmdvdC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaDEge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogIzY2NjY2NjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxufVxuXG5mb3JtIHtcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcblxuICAuZm9ybS1ncm91cCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cblxuICBpb24taW5wdXQge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDZENkQ2ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEycHggMTFweCAhaW1wb3J0YW50O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi1pdGVtLml0ZW0taGFzLXZhbHVlIGlvbi1sYWJlbCxcbiAgaW9uLWl0ZW0uaXRlbS1oYXMtZm9jdXMgaW9uLWxhYmVsIHtcbiAgICB0b3A6IDE1cHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cblxuICBpb24tbGFiZWwubGFiZWwtZmxvYXRpbmcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDNweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGFzc3dvcmQtaW5wdXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIGlvbi1pbnB1dCB7XG4gICAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDQwcHg7XG4gICAgfVxuXG4gICAgaW9uLWljb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICB6LWluZGV4OiA5OTk5O1xuICAgIH1cbiAgfVxuXG4gIC5mb3Jnb3QtcGFzc3dvcmQge1xuICAgIGNvbG9yOiAjNkQ2RDZEO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIC5kb250LWtub3cge1xuICAgIGNvbG9yOiAjNkQ2RDZEO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcblxuICAgIHNwYW4ge1xuICAgICAgY29sb3I6ICNGRjY2MkE7XG4gICAgfVxuICB9XG5cbiAgLmJ0biB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxufSIsIi5mb3Jnb3QtaW1nLWxheWVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNTBweDtcbn1cbi5mb3Jnb3QtaW1nLWxheWVyIGltZyB7XG4gIHdpZHRoOiAxODBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZvcmdvdC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9yZ290LWhlYWRlciBoMSB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNjY2NjY2O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbmZvcm0ge1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuZm9ybSAuZm9ybS1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5mb3JtIGlvbi1pbnB1dCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDZENkQ2ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEycHggMTFweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMCAhaW1wb3J0YW50O1xufVxuZm9ybSBpb24taXRlbS5pdGVtLWhhcy12YWx1ZSBpb24tbGFiZWwsXG5mb3JtIGlvbi1pdGVtLml0ZW0taGFzLWZvY3VzIGlvbi1sYWJlbCB7XG4gIHRvcDogMTVweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgei1pbmRleDogOTk5O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbmZvcm0gaW9uLWxhYmVsLmxhYmVsLWZsb2F0aW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNweDtcbiAgbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG59XG5mb3JtIC5wYXNzd29yZC1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmZvcm0gLnBhc3N3b3JkLWlucHV0IGlvbi1pbnB1dCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogNDBweDtcbn1cbmZvcm0gLnBhc3N3b3JkLWlucHV0IGlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5mb3JtIC5mb3Jnb3QtcGFzc3dvcmQge1xuICBjb2xvcjogIzZENkQ2RDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5mb3JtIC5kb250LWtub3cge1xuICBjb2xvcjogIzZENkQ2RDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuZm9ybSAuZG9udC1rbm93IHNwYW4ge1xuICBjb2xvcjogI0ZGNjYyQTtcbn1cbmZvcm0gLmJ0biB7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiAyMHB4O1xufSJdfQ== */";

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