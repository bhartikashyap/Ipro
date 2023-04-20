"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 73403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 21053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 73403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30610);










function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
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
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage],
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 96752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 58128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utility/message */ 34410);











let LoginPage = class LoginPage {
    //   public customClas:any='logo1 animate__animated animate__slideInUp animate__slow';
    //   public customClas1:any='';
    //   public loginAnimation:any='';
    //  public val=10;
    constructor(router, menuCtrl, _translate, utility, formBuilder, apiService) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this._translate = _translate;
        this.utility = utility;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.submitted = false;
        this.type = "password";
    }
    get formControls() {
        return this.form.controls;
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(false);
        // this.val=10;
        //timer(3000).subscribe(() => (this.val = -1));
        // this.customClas='logo1 animate__animated animate__slideInUp animate__slow';
        // this.customClas1='';
        // this.loginAnimation=''
    }
    initForm() {
        this.form = this.formBuilder.group({
            email: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    // Validators.pattern(pattern.email),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(100),
                ],
            ],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(100)]],
        });
        let messages = this.utility.translateText('MSG');
        this.validationMessage = {
            email: [
                { type: "required", message: messages.required },
                { type: "pattern", message: messages.email },
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(100, messages.maxLength, messages.characters) },
            ],
            password: [
                { type: "required", message: messages.required },
                { type: "pattern", message: messages.password },
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(100, messages.maxLength, messages.characters) },
            ],
        };
    }
    ngOnInit() {
        this.initForm();
        this.menuCtrl.enable(false);
    }
    changeType() {
        if (this.type == "password") {
            this.type = "text";
        }
        else {
            this.type = "password";
        }
    }
    signup() {
        this.router.navigate(["/register"]);
        //   this.customClas='logo1 animate__animated animate__rotateIn animate__slow';
        //   this.customClas1='change'
        //   setTimeout(
        //     ()=>{
        //       this.router.navigate(["/register"]);
        // },1000)
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.submitted = true;
            if (this.form.valid && this.utility.checkNetwork()) {
                this.submitted = false;
                let params = this.form.getRawValue();
                params['notificationToken'] = this.utility.FCMToken;
                console.log(params);
                let loading = yield this.utility.presentLoading();
                this.apiService
                    .loginUser(params)
                    .then((res) => {
                    loading.dismiss();
                    if (res.status == 1) {
                        let token = res.jwt;
                        let data = res.data;
                        this.utility.checkQuestionaire();
                        this.utility.setStorage(src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.session.AUTH_STATUS, 1);
                        this.utility.setStorage(src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.session.AUTH_TOKEN, token);
                        this.utility.setStorage(src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.session.AUTH_USER, JSON.stringify(data));
                        this.utility.userRole = data.userRole;
                        this.utility.setStorage('userRole', data.userLevelStatus);
                        this.utility.setStorage('firstLogin', new Date());
                        // this.customClas='logo1 animate__animated animate__flip animate__slow';
                        // this.customClas1='change';
                        // this.loginAnimation = 'animate__animated  animate__fast animate__fadeOutUp';
                        if (data.userRole == 'Prospect') {
                            ///animation
                            //   setTimeout(
                            //     ()=>{
                            //   this.val = 10;
                            //     },500)
                            //   setTimeout(
                            //     ()=>{
                            //       this.utility.goNext(["/tabs/area-of-interest"]);
                            // },1000)
                            ///animation
                            this.router.navigate(["/tabs/area-of-interest"]);
                        }
                        else {
                            let dash;
                            // if(data.defaultDashboard != undefined && data.defaultDashboard != '' && data.defaultDashboard != null){
                            //   dash = data.defaultDashboard;
                            // }
                            // else{
                            dash = data.userLevelStatus;
                            // }
                            this.utility.setStorage('CHANGE_DASH', dash);
                            this.utility.goNext(["/tabs/dashboard/" + dash]);
                            //   setTimeout(
                            //     ()=>{
                            //       this.utility.goNext(["/tabs/dashboard/"+dash])
                            // },1000)
                        }
                    }
                    else if (res.status == 2) {
                        this.utility.presentToast(this.utility.translateText('MSG').verifyEmail, "bottom");
                    }
                    else {
                        this.utility.presentToast(res === null || res === void 0 ? void 0 : res.msg, "bottom");
                        //this.utility.presentToast(this.utility.translateText('MSG').someissueInNetwork,"bottom");
                    }
                })
                    .catch((err) => {
                    console.log(err);
                    loading.dismiss();
                });
                console.log(params);
            }
        });
    }
    animation() {
        // this.customClas='logo1 animate__animated animate__flip animate__slow';
        // this.customClas1='change'
        // this.utility.goNext(["/splash"]);
    }
    ngOnDestroy() {
        // this.customClas='logo1 animate__animated animate__flip animate__slow';
        // this.customClas1='change'
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-login",
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 58128:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".login-img-layer {\n  display: block;\n  margin-top: 150px;\n  margin-bottom: 120px;\n}\n.login-img-layer img {\n  width: 180px;\n  margin: auto;\n  display: block;\n}\n.login-header {\n  text-align: center;\n}\n.login-header h1 {\n  margin: 0px;\n  font-size: 24px;\n  color: #666666;\n  font-style: normal;\n  font-weight: normal;\n}\nform {\n  padding: 5px;\n  padding-top: 0px;\n}\nform .form-group {\n  position: relative;\n  --inner-padding-end: 5px !important;\n  margin-top: 20px;\n}\nform div {\n  padding: 1px 10px;\n}\nform ion-input {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  border: 1px solid #d6d6d6 !important;\n  height: 45px;\n  border-radius: 5px !important;\n  padding: 12px 11px !important;\n  --padding-bottom: 0px;\n  --padding-top: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0 !important;\n}\nform ion-item.item-has-value ion-label,\nform ion-item.item-has-focus ion-label {\n  top: 15px !important;\n  background: white;\n  z-index: 999;\n  text-align: left;\n  font-size: 16px !important;\n  width: 100px !important;\n  padding-left: 10px;\n}\nform ion-label.label-floating {\n  position: relative;\n  top: 3px;\n  left: 10px;\n  font-size: 12px !important;\n  color: gray !important;\n}\nform .password-input {\n  position: relative;\n}\nform .password-input ion-input {\n  --padding-bottom: 0px;\n  --padding-top: 0px;\n  --padding-start: 0px;\n  --padding-end: 40px;\n}\nform .password-input ion-icon {\n  position: absolute;\n  bottom: 10px;\n  right: 35px;\n  font-size: 25px;\n  z-index: 9999;\n}\nform .forgot-password {\n  color: #6d6d6d;\n  font-size: 12px;\n  font-weight: 400;\n  text-decoration: none;\n  padding: 5px 30px;\n}\nform .dont-know {\n  color: #6d6d6d;\n  font-size: 12px;\n  font-weight: 400;\n  text-decoration: none;\n  text-align: center;\n  width: 100%;\n  display: block;\n  margin-top: 20px;\n}\nform .dont-know span {\n  color: #ff662a;\n}\nform .btn {\n  height: 40px;\n  font-size: 12px;\n  font-weight: 600;\n  --border-radius: 4px;\n  margin: 20px;\n}\nion-content {\n  --padding-bottom: 0px !important;\n  --padding-top: 0px !important;\n}\n.splash-img-layer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 65%;\n}\n.splash-img-layer .change {\n  top: 45%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2lwcm8lMjAyL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNDRjtBREFFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDRUo7QURDQTtFQUNFLGtCQUFBO0FDRUY7QURERTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNHSjtBREFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDR0Y7QURGRTtFQUNFLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQ0lKO0FERkU7RUFDRSxpQkFBQTtBQ0lKO0FERkU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FDSUo7QURERTs7RUFFRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDR0o7QURBRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0FDRUo7QURBRTtFQUNFLGtCQUFBO0FDRUo7QURESTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDR047QURESTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0dOO0FEQUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0VKO0FEQUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBRERJO0VBQ0UsY0FBQTtBQ0dOO0FEQUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDRUo7QURFQTtFQUNFLGdDQUFBO0VBQ0MsNkJBQUE7QUNDSDtBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtBQ0NGO0FEWUU7RUFDRSxRQUFBO0FDVkoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWltZy1sYXllciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XG4gIGltZyB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuLmxvZ2luLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaDEge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogIzY2NjY2NjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxufVxuZm9ybSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgLmZvcm0tZ3JvdXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiA1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gIGRpdntcbiAgICBwYWRkaW5nOiAxcHggMTBweDtcbiAgfVxuICBpb24taW5wdXQge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDZkNmQ2ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEycHggMTFweCAhaW1wb3J0YW50O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi1pdGVtLml0ZW0taGFzLXZhbHVlIGlvbi1sYWJlbCxcbiAgaW9uLWl0ZW0uaXRlbS1oYXMtZm9jdXMgaW9uLWxhYmVsIHtcbiAgICB0b3A6IDE1cHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cblxuICBpb24tbGFiZWwubGFiZWwtZmxvYXRpbmcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDNweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBhc3N3b3JkLWlucHV0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaW9uLWlucHV0IHtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgIC0tcGFkZGluZy10b3A6IDBweDtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogNDBweDtcbiAgICB9XG4gICAgaW9uLWljb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgcmlnaHQ6IDM1cHg7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICB6LWluZGV4OiA5OTk5O1xuICAgIH1cbiAgfVxuICAuZm9yZ290LXBhc3N3b3JkIHtcbiAgICBjb2xvcjogIzZkNmQ2ZDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogNXB4IDMwcHg7XG4gIH1cbiAgLmRvbnQta25vdyB7XG4gICAgY29sb3I6ICM2ZDZkNmQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHNwYW4ge1xuICAgICAgY29sb3I6ICNmZjY2MmE7XG4gICAgfVxuICB9XG4gIC5idG4ge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW46IDIwcHg7XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDsgXG4gICAtLXBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDsgXG59XG5cbi5zcGxhc2gtaW1nLWxheWVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOmZpeGVkO1xuICB0b3A6NjUlO1xuICAvLyAgaGVpZ2h0OiAxMDAlO1xuICAvLyB3aWR0aDogMTAwJTtcbiAgLy8gYmFja2dyb3VuZDogIzA0MTkzNDtcbiAgaW1nIHtcbiAgLy8gICBwYWRkaW5nLXRvcDogMTIlO1xuICAvLyB3aWR0aDo2NSVcbiAgIC8vIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gICAgLy8gcGFkZGluZzo0MHB4O1xuICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgIC8vIGhlaWdodDo3MCU7XG4gICAvLyBiYWNrZ3JvdW5kOiMwNDE5MzQ7XG4gIH1cbiAgLmNoYW5nZXtcbiAgICB0b3A6NDUlO1xuICB9XG5cbn0iLCIubG9naW4taW1nLWxheWVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMjBweDtcbn1cbi5sb2dpbi1pbWctbGF5ZXIgaW1nIHtcbiAgd2lkdGg6IDE4MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9naW4taGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ2luLWhlYWRlciBoMSB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNjY2NjY2O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbmZvcm0ge1xuICBwYWRkaW5nOiA1cHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5mb3JtIC5mb3JtLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiA1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbmZvcm0gZGl2IHtcbiAgcGFkZGluZzogMXB4IDEwcHg7XG59XG5mb3JtIGlvbi1pbnB1dCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkNmQ2ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEycHggMTFweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMCAhaW1wb3J0YW50O1xufVxuZm9ybSBpb24taXRlbS5pdGVtLWhhcy12YWx1ZSBpb24tbGFiZWwsXG5mb3JtIGlvbi1pdGVtLml0ZW0taGFzLWZvY3VzIGlvbi1sYWJlbCB7XG4gIHRvcDogMTVweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgei1pbmRleDogOTk5O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbmZvcm0gaW9uLWxhYmVsLmxhYmVsLWZsb2F0aW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNweDtcbiAgbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG59XG5mb3JtIC5wYXNzd29yZC1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmZvcm0gLnBhc3N3b3JkLWlucHV0IGlvbi1pbnB1dCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogNDBweDtcbn1cbmZvcm0gLnBhc3N3b3JkLWlucHV0IGlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiAzNXB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5mb3JtIC5mb3Jnb3QtcGFzc3dvcmQge1xuICBjb2xvcjogIzZkNmQ2ZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAzMHB4O1xufVxuZm9ybSAuZG9udC1rbm93IHtcbiAgY29sb3I6ICM2ZDZkNmQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbmZvcm0gLmRvbnQta25vdyBzcGFuIHtcbiAgY29sb3I6ICNmZjY2MmE7XG59XG5mb3JtIC5idG4ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zcGxhc2gtaW1nLWxheWVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA2NSU7XG59XG4uc3BsYXNoLWltZy1sYXllciAuY2hhbmdlIHtcbiAgdG9wOiA0NSU7XG59Il19 */";

/***/ }),

/***/ 96752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <!-- <div *ngIf=\"val <= 0\" class=\"animate__animated  animate__faster\"> -->\n\n  <div class=\"login-img-layer\">\n    <img src=\"assets/img/logo.svg\" />\n  </div>\n  <div class=\"login-header\">\n    <h1>{{'LOGIN.TITLE' | translate}}</h1>\n  </div>\n  <form [formGroup]=\"form\">\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n      <!-- <ion-label for=\"email\" position=\"floating\">{{'LOGIN.EMAIL' | translate}}</ion-label> -->\n      <ion-input\n        type=\"text\"\n        id=\"email\"\n        formControlName=\"email\"\n        placeholder=\"{{'LOGIN.EMAIL' | translate}}/{{'LOGIN.USERNAME' | translate}}\"\n        autocapitalize=\"off\"\n      >\n      </ion-input>\n    </ion-item>\n    <div *ngFor=\"let validation of validationMessage.email\">\n      <div\n        *ngIf=\"submitted && formControls['email'].errors\"\n        class=\"validation-message\"\n      >\n        <div\n          class=\"error-message text-red\"\n          *ngIf=\"formControls['email'].errors[validation.type]\"\n        >\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding password-input\">\n      <!-- <ion-label for=\"password\" position=\"floating\">{{'LOGIN.PASSWORD' | translate}}</ion-label> -->\n      <ion-input\n        id=\"password\"\n        formControlName=\"password\"\n        placeholder=\"{{'LOGIN.PASSWORD' | translate}}\"\n        autocapitalize=\"off\"\n        [type]=\"type\"\n      >\n      </ion-input>\n      <ion-icon\n        *ngIf=\"type === 'password'\"\n        (click)=\"changeType()\"\n        name=\"eye-outline\"\n      >\n      </ion-icon>\n      <ion-icon\n        *ngIf=\"type === 'text'\"\n        (click)=\"changeType()\"\n        name=\"eye-off-outline\"\n      >\n      </ion-icon>\n    </ion-item>\n    <div *ngFor=\"let validation of validationMessage.password\">\n      <div\n        *ngIf=\"submitted && formControls['password'].errors\"\n        class=\"validation-message\"\n      >\n        <div\n          class=\"error-message text-red\"\n          *ngIf=\"formControls['password'].errors[validation.type]\"\n        >\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n    <a class=\"forgot-password\" [routerLink]=\"['/forgotpassword']\"\n      >{{'LOGIN.FORGOT_PASSWORD' | translate}}</a\n    >\n    <ion-button  class=\"btn \"  (click)=\"login()\" color=\"danger\" expand=\"block\"\n      >{{'LOGIN.TITLE' | translate}}\n\n      <!-- [ngClass]=\"loginAnimation\"  -->\n    </ion-button>\n    <a class=\"dont-know\"\n      >{{'LOGIN.DONT_HAVE_ACCOUNT' | translate}}\n      <!-- <span [routerLink]=\"['/register']\"\n        >{{'LOGIN.SIGNUP' | translate}}</span\n      > -->\n    </a>\n   \n    <ion-button class=\"btn\" (click)=\"signup()\" color=\"danger\" expand=\"block\"\n      >{{'LOGIN.SIGNUP' | translate}}\n    </ion-button>\n    <!-- <ion-button  class=\"btn \" (click)=\"animation()\" color=\"danger\"  expand=\"block\"\n    >Go to Animation\n  </ion-button> -->\n  </form>\n\n  <!-- </div> -->\n \n</ion-content>\n<!-- <ion-footer>\n  <div class=\"splash-img-layer\" [ngClass]=\"customClas1\">\n    <img [ngClass]=\"customClas\"  src=\"assets/img/animation/logo1.png\" >\n\n  </div>\n</ion-footer> -->";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map