(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 65485);



const routes = [
    // {
    //   path: "/",
    //   loadChildren: () =>
    //     import("./pages/splash/splash.module").then((m) => m.SplashPageModule),
    // },
    {
        path: "splash",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_splash_splash_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/splash/splash.module */ 71203)).then((m) => m.SplashPageModule),
    },
    {
        path: "login",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 21053)).then((m) => m.LoginPageModule),
    },
    {
        path: "register",
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_pages_register_register_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/register/register.module */ 60207)).then((m) => m.RegisterPageModule),
    },
    {
        path: "forgotpassword",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_forgotpassword_forgotpassword_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/forgotpassword/forgotpassword.module */ 95862)).then((m) => m.ForgotpasswordPageModule),
    },
    {
        path: "tabs",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs/tabs.module */ 5557)).then((m) => m.TabsModule),
    },
    {
        path: 'questionaires',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_questionaires_questionaires_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/questionaires/questionaires.module */ 6535)).then(m => m.QuestionairesPageModule)
    },
    {
        path: 'user-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_user-modal_user-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/user-modal/user-modal.module */ 8624)).then(m => m.UserModalPageModule)
    },
    {
        path: "questionare",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_questionaires_questionaires_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/questionaires/questionaires.module */ 6535)).then((m) => m.QuestionairesPageModule),
    },
    {
        path: "question",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_question_question_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/question/question.module */ 36749)).then((m) => m.QuestionPageModule),
    },
    {
        path: 'member-replacement',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_member-replacement_member-replacement_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/member-replacement/member-replacement.module */ 8443)).then(m => m.MemberReplacementPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 32009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/globalization/ngx */ 76879);
/* harmony import */ var _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/screen-orientation/ngx */ 98828);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/splash-screen */ 84114);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var src_app_utility_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utility/message */ 34410);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/api.service */ 5830);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ 16594);
/* harmony import */ var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/market/ngx */ 87919);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @capacitor/status-bar */ 34224);
/* harmony import */ var _services_video_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/video.service */ 8472);
/* harmony import */ var src_app_services_environment_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/environment.service */ 98407);
/* harmony import */ var _app_components_user_modal_user_modal_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../app/components/user-modal/user-modal.page */ 43253);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @capacitor/browser */ 65821);
/* harmony import */ var _services_fcm_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/fcm.service */ 55019);
/* harmony import */ var _pages_setdicount_setdicount_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/setdicount/setdicount.page */ 5084);
/* harmony import */ var _pages_my_sponsor_my_sponsor_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/my-sponsor/my-sponsor.page */ 65730);
/* harmony import */ var _awesome_cordova_plugins_app_version_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @awesome-cordova-plugins/app-version/ngx */ 18285);
















const { App } = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__.Plugins;








const { capacitorSplashScreen } = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__.Plugins;




let AppComponent = class AppComponent {
    constructor(globalization, _translate, utility, router, menuCtrl, apiSer, platform, navCtrl, popoverController, videoSer, envr, fcmSer, cdr, modalController, screenOrientation, appVersion, market) {
        this.globalization = globalization;
        this._translate = _translate;
        this.utility = utility;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.apiSer = apiSer;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.popoverController = popoverController;
        this.videoSer = videoSer;
        this.envr = envr;
        this.fcmSer = fcmSer;
        this.cdr = cdr;
        this.modalController = modalController;
        this.screenOrientation = screenOrientation;
        this.appVersion = appVersion;
        this.market = market;
        let authToken = this.utility.getToken();
        if (authToken) {
            // this.utility.checkQuestionaire();
        }
        this.videoSer.videoType = this.envr.videosEnglish;
        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_8__.Capacitor.isNativePlatform()) {
            this.fcmSer.pushRegister();
            _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_10__.StatusBar.hide();
            this.platform.pause.subscribe(() => {
                console.log('Pause subscribe was called');
                this.utility.setStorage("isAppInstalled", "yes");
            });
            this.platform.resume.subscribe(() => {
                if (this.utility.upadteApp) {
                    this.launcApp();
                }
                if (authToken) {
                    this.utility.checkQuestionaire();
                }
                this.fcmSer.getDeliverMsg();
                // if (this.utility.userRole == 'Prospect' && this.utility.quetionaireComplete == true) {
                // }
                // this.fcmSer.catchPushRecieve();
                console.log('resume subscribe was called');
            });
            this.platform.backButton.subscribe((event) => {
                if (this.router.url == '/member-replacement' || this.router.url.indexOf('/tabs/dashboard') > -1 || this.router.url == '/tabs/area-of-interest') {
                    // this.utility.changeMenu();
                    this.platform.backButton.subscribeWithPriority(9999, () => {
                        // do nothing
                    });
                }
                else {
                    // if (this.sessionRes) {
                    this.navCtrl.back();
                    // }
                    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
                }
            });
        }
        setTimeout(() => {
            _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_4__.SplashScreen.hide();
        }, 3000);
    }
    launcApp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            let appversion = yield this.appVersion.getVersionNumber();
            this.AppVersion = yield this.appVersion.getVersionNumber();
            appversion = parseFloat(appversion);
            console.log(this.appVersion);
            console.log(yield this.appVersion.getAppName());
            let packageName = yield this.appVersion.getPackageName();
            this.apiSer.appVersion().then((res) => {
                let appVersionNotmatch = false;
                console.log(res);
                if (res.status) {
                    if (this.platform.is('android')) {
                        let androisVersion = parseFloat(res.data.android);
                        if (appversion != androisVersion) {
                            appVersionNotmatch = true;
                        }
                    }
                    else if (this.platform.is('ios')) {
                        let iosVersion = parseFloat(res.data.ios);
                        if (appversion != iosVersion) {
                            appVersionNotmatch = true;
                        }
                    }
                    if (appVersionNotmatch) {
                        this.utility.presentAlert("Warning", "", [], this.utility.translateText('MSG').app_update, [{
                                text: this.utility.translateText("MODALS").BUTTONS.VERSION_UPDATE,
                                cssClass: 'secondary',
                                handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
                                    console.log(packageName);
                                    let iosUrl = "https://apps.apple.com/us/app/ipro/id1644742652";
                                    if (this.platform.is('android')) {
                                        this.market.open(packageName);
                                    }
                                    else {
                                        _capacitor_browser__WEBPACK_IMPORTED_MODULE_14__.Browser.open({ url: iosUrl });
                                    }
                                })
                            }
                        ]);
                    }
                }
            });
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            //     let appversion= await this.appVersion.getVersionNumber()
            // let packageName =  await this.appVersion.getPackageName();
            this.sessionRes = yield this.utility.getStorage(src_app_utility_message__WEBPACK_IMPORTED_MODULE_6__.session.AUTH_STATUS);
            this.getDeviceLanguage();
            //  this.router.navigate(["/splash"]);
            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_8__.Capacitor.isNativePlatform()) {
                // let storageNotifications: any = await this.utility.getStorage('notification');
                // if (storageNotifications) {
                //   this.utility.removeStorage('notification');
                // }
                setTimeout(() => {
                    this.launcApp();
                }, 3000);
            }
            this.menuCtrl.enable(false);
            let firstLogin = yield this.utility.getStorage('firstLogin');
            var landingPage;
            if (!firstLogin) {
                landingPage = ['/register'];
            }
            else {
                landingPage = ['/login'];
            }
            let dashboard = yield this.utility.changeMenu();
            console.log(dashboard);
            setTimeout(() => {
                console.log(dashboard, "dashboard");
                // dashboard = '/questionare'
                if (this.sessionRes) {
                    this.router.navigate([dashboard]);
                }
                else {
                    this.router.navigate(landingPage);
                }
                this.utility.checkQuestionaire();
            }, 2000);
        });
    }
    getDeviceLanguage() {
        // this.utility._initTranslate('de');
        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_8__.Capacitor.isNativePlatform()) {
            this.globalization
                .getPreferredLanguage()
                .then((res) => {
                console.log(res);
                if (res.value.indexOf("en") != -1) {
                    this.utility._initTranslate("en");
                    this.language = 'en';
                    this.utility.deviceLang = 'en';
                    this.videoSer.videoType = this.envr.videosEnglish;
                }
                else {
                    this.utility._initTranslate("de");
                    this.language = 'de';
                    this.utility.deviceLang = 'de';
                    this.videoSer.videoType = this.envr.videosGerman;
                }
            })
                .catch((e) => {
                console.log(e);
                this.utility._initTranslate('en');
                this.utility.deviceLang = 'en';
                this.videoSer.videoType = this.envr.videosEnglish;
            });
        }
        else {
            this.utility._initTranslate('en');
            this.utility.deviceLang = 'en';
            this.videoSer.videoType = this.envr.videosEnglish;
        }
    }
    menu(tab) {
        console.log(tab);
        let selectedTab = tab.name.toLowerCase();
        if (selectedTab == 'logout') {
            this.logout();
        }
        else if (selectedTab == 'sponsor') {
            this.utility.openPopup(_pages_my_sponsor_my_sponsor_page__WEBPACK_IMPORTED_MODULE_17__.MySponsorPage, selectedTab, 'sponsor-class', true);
        }
        else if (selectedTab == 'language') {
            this.utility.openPopup(_app_components_user_modal_user_modal_page__WEBPACK_IMPORTED_MODULE_13__.UserModalPage, selectedTab, 'modal-class', true);
        }
        else if (selectedTab == 'dashboard') {
            this.utility.openPopup(_app_components_user_modal_user_modal_page__WEBPACK_IMPORTED_MODULE_13__.UserModalPage, selectedTab, 'modal-class', true);
        }
        else if (selectedTab == 'discount') {
            this.utility.openPopup(_pages_setdicount_setdicount_page__WEBPACK_IMPORTED_MODULE_16__.SetdicountPage, selectedTab, 'discount', true);
        }
        else if (selectedTab == 'privacy') {
            this.utility.openPdfLinks(this.utility.pdfLink[2].link, '');
            // this.utility.openPopup(UserModalPage,'pdf','modal-question' ,true);
        }
        else if (selectedTab == 'notice') {
            console.log(this.utility.pdfLink[1].link);
            this.utility.openPdfLinks(this.utility.pdfLink[1].link, 'Legal Notice');
        }
        else if (selectedTab == 'tnc') {
            console.log(this.utility.pdfLink[0].link);
            this.utility.openPdfLinks(this.utility.pdfLink[3].link, 'Term & Condition');
        }
        else if (selectedTab == 'analysis') {
            this.utility.openPopup(_app_components_user_modal_user_modal_page__WEBPACK_IMPORTED_MODULE_13__.UserModalPage, selectedTab, 'modal-question', true);
        }
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            let AUTH_STATUS = yield this.utility.getStorage(src_app_utility_message__WEBPACK_IMPORTED_MODULE_6__.session.AUTH_STATUS);
            console.log(AUTH_STATUS);
            if (AUTH_STATUS) {
                this.utility.presentAlert("Warning", "", [], this.utility.translateText('MSG').logout_confirmation, [{
                        text: this.utility.translateText("MODALS").BUTTONS.YES,
                        cssClass: 'secondary',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
                            var loading = yield this.utility.presentLoading();
                            var firstLogin = yield this.utility.getStorage('firstLogin');
                            let fcmToken = {
                                "notificationToken": yield this.utility.getFCMToken()
                            };
                            //console.log(firstLogin);
                            this.apiSer.logoutUser(fcmToken).then((res) => {
                                loading.dismiss();
                                this.utility.removeAuth();
                                this.router.navigate(['/login']);
                            });
                        })
                    },
                    {
                        text: this.utility.translateText("MODALS").BUTTONS.NO,
                        role: 'cancel',
                        cssClass: 'danger',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }]);
            }
        });
    }
    changeLan(lan) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            this.utility.changeLan(lan, 'app');
            this.videoSer.langChange(lan, this.cdr);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_2__.Globalization },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateService },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__.UtilService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_21__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.MenuController },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_7__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.PopoverController },
    { type: _services_video_service__WEBPACK_IMPORTED_MODULE_11__.VideoService },
    { type: src_app_services_environment_service__WEBPACK_IMPORTED_MODULE_12__.EnvironmentService },
    { type: _services_fcm_service__WEBPACK_IMPORTED_MODULE_15__.FcmService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_23__.ChangeDetectorRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.ModalController },
    { type: _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__.ScreenOrientation },
    { type: _awesome_cordova_plugins_app_version_ngx__WEBPACK_IMPORTED_MODULE_18__.AppVersion },
    { type: _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_9__.Market }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_23__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 78394);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _components_share_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/share-component-module */ 99663);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30610);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/globalization/ngx */ 76879);
/* harmony import */ var _services_token_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/token-interceptor */ 4933);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ionic-selectable */ 2710);
/* harmony import */ var _awesome_cordova_plugins_email_composer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/email-composer/ngx */ 93731);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 22564);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 38189);
/* harmony import */ var _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/screen-orientation/ngx */ 98828);
/* harmony import */ var _awesome_cordova_plugins_app_version_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/app-version/ngx */ 18285);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 80779);
/* harmony import */ var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/market/ngx */ 87919);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 31777);






















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent
        ],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicModule.forRoot(),
            ionic_selectable__WEBPACK_IMPORTED_MODULE_17__.IonicSelectableModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClient],
                },
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _components_share_component_module__WEBPACK_IMPORTED_MODULE_2__.ShareComponentModule
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicRouteStrategy },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HTTP_INTERCEPTORS, useClass: _services_token_interceptor__WEBPACK_IMPORTED_MODULE_4__.TokenInterceptor, multi: true },
            _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_3__.Globalization,
            _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__.ScreenOrientation,
            _awesome_cordova_plugins_email_composer_ngx__WEBPACK_IMPORTED_MODULE_5__.EmailComposer,
            _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__.CallNumber,
            _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_10__.Market,
            _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__.InAppBrowser,
            _awesome_cordova_plugins_app_version_ngx__WEBPACK_IMPORTED_MODULE_9__.AppVersion
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 43646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.html?ngResource */ 2011);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss?ngResource */ 52476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var src_app_pages_my_sponsor_my_sponsor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/my-sponsor/my-sponsor.page */ 65730);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 65485);








let HeaderComponent = class HeaderComponent {
    constructor(navCtrl, modalController, utilSer, route) {
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.utilSer = utilSer;
        this.route = route;
        this.goBack = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.notiCount = 0;
    }
    ngOnInit() {
        setInterval(() => {
            this.subscription = this.utilSer.currentMessage.subscribe(message => {
                if (message == 'Push Notification') {
                    console.log(this.utilSer.newNotification);
                    this.utilSer.changeMessage("");
                    this.utilSer.newNotification = this.utilSer.newNotification;
                }
            });
            if (this.subscription != undefined) {
                this.subscription.unsubscribe();
            }
        }, 2000);
    }
    ionViewWillEnter() {
    }
    back(value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            //var sessionRes = await this.utilSer.getStorage('AUTH_STATUS');
            //  console.log(this.route.url)
            //  console.log(this.route.url.indexOf('dashboard'));
            //  console.log(this.route.url.indexOf('area-of-interest'))
            //  if(this.utilSer.userRole == 'Prospect'){
            //   if(this.route.url.indexOf('dashboard') <= -1 || this.route.url.indexOf('area-of-interest') <= -1){
            if (this.utilSer.ismodalActive) {
                this.utilSer.closeModal();
                this.utilSer.ismodalActive = false;
                return;
            }
            this.utilSer.upadteApp = true;
            this.navCtrl.back();
            //    }
            //  }
            //  else{
            //  }
            //  if(sessionRes)
            // this.goBack.emit(value);
        });
    }
    openPopup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.utilSer.openPopup(src_app_pages_my_sponsor_my_sponsor_page__WEBPACK_IMPORTED_MODULE_3__.MySponsorPage, "header", 'sponsor-class', true);
            // const modal = await this.modalController.create({
            //   component: UserModalPage,
            //   componentProps: {
            //     "paramTitle": "call-popup"
            //   }
            // });
            // modal.onDidDismiss().then((dataReturned) => {
            //   if (dataReturned !== null) {
            //     this.dataReturned = dataReturned.data;
            //     //alert('Modal Sent Data :'+ dataReturned);
            //   }
            // });
            // return await modal.present();
        });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
HeaderComponent.propDecorators = {
    headerTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    headerBack: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    goBack: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-header',
        template: _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



/***/ }),

/***/ 99663:
/*!******************************************************!*\
  !*** ./src/app/components/share-component-module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareComponentModule": () => (/* binding */ ShareComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 43646);





let ShareComponentModule = class ShareComponentModule {
};
ShareComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.CUSTOM_ELEMENTS_SCHEMA],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule
        ],
        exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent]
    })
], ShareComponentModule);



/***/ }),

/***/ 43253:
/*!**********************************************************!*\
  !*** ./src/app/components/user-modal/user-modal.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModalPage": () => (/* binding */ UserModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _user_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-modal.page.html?ngResource */ 34370);
/* harmony import */ var _user_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-modal.page.scss?ngResource */ 13711);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var src_app_services_video_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/video.service */ 8472);
var UserModalPage_1;










let UserModalPage = UserModalPage_1 = class UserModalPage {
    // @Output() popUpData = new EventEmitter<string>();;
    constructor(modalController, videoSer, navParams, utiSer, apiSer, router, cdr) {
        this.modalController = modalController;
        this.videoSer = videoSer;
        this.navParams = navParams;
        this.utiSer = utiSer;
        this.apiSer = apiSer;
        this.router = router;
        this.cdr = cdr;
        this.erroMsg = '';
    }
    ngOnInit() {
        this.title = this.navParams.data.paramTitle;
        if (this.title == "member-place") {
            this.getMemberToPlace();
        }
        else if (this.title == "analysis") {
            this.getQRcode();
        }
    }
    changeLan(lan) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.utiSer.changeLan(lan, 'app');
            this.videoSer.langChange(lan, this.cdr);
        });
    }
    closeModal() {
        this.modalController.dismiss({
            dismissed: true,
        });
    }
    getMemberToPlace() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let loading = yield this.utiSer.presentLoading();
            this.memberToplace = yield this.apiSer.userForPlacement();
            console.log(this.memberToplace);
            loading.dismiss();
        });
    }
    getQRcode() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let loading = yield this.utiSer.presentLoading();
            this.QRcode = yield this.apiSer.codeQR();
            console.log(this.QRcode);
            loading.dismiss();
        });
    }
    placeMember() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.selectedMember);
            console.log(this.userselectedMember);
            let selectedMember = yield this.utiSer.getStorage('selectedMember');
            selectedMember = JSON.parse(selectedMember);
            this.utiSer.memberPlacedUuserId = selectedMember.userId;
            this.utiSer.changeMessage("pop closed");
            this.closeModal();
            setTimeout(() => {
                this.closeModal();
            }, 1000);
            this.utiSer.removeStorage('selectedMember');
        });
    }
    gohome() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.utiSer.changeMenu();
        });
    }
    reconfirmation(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.erroMsg = "";
            console.log(this.selectedMember);
            if (data != undefined) {
                this.utiSer.setStorage('selectedMember', JSON.stringify(data));
                this.utiSer.openPopup(UserModalPage_1, "reconfirmation", 'reconfirm', true);
            }
            else {
                this.erroMsg = this.utiSer.translateText('MODALS').USERSEARCH.BLANK_ERROR;
            }
        });
    }
    getPlacementTree(serachItem) {
        this.utiSer.changeMessage("search=" + serachItem);
        this.closeModal();
    }
    navigateHome() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let url = yield this.utiSer.changeMenu();
            // this.utiSer.goNext([url]);
            this.router.navigate([url]);
            this.closeModal();
        });
    }
    gotoPayment() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.utiSer.goNext(["/tabs/book-analysis"]);
            this.closeModal();
        });
    }
};
UserModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_services_video_service__WEBPACK_IMPORTED_MODULE_4__.VideoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef }
];
UserModalPage = UserModalPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-user-modal',
        template: _user_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserModalPage);



/***/ }),

/***/ 65730:
/*!*****************************************************!*\
  !*** ./src/app/pages/my-sponsor/my-sponsor.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MySponsorPage": () => (/* binding */ MySponsorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _my_sponsor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-sponsor.page.html?ngResource */ 69538);
/* harmony import */ var _my_sponsor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-sponsor.page.scss?ngResource */ 76221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 67241);








let MySponsorPage = class MySponsorPage {
    constructor(utiSer, apiSer, route, navParams) {
        this.utiSer = utiSer;
        this.apiSer = apiSer;
        this.route = route;
        this.navParams = navParams;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.title = this.navParams.data.paramTitle;
        this.getSponsors();
    }
    getSponsors() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // this.apiSer.getMembers();
            let loading = yield this.utiSer.presentLoading();
            this.sponsors = yield this.apiSer.mySponsor();
            console.log(this.sponsors);
            loading.dismiss();
            console.log(this.sponsors);
        });
    }
    sendmail(mail) {
        this.utiSer.sendMail(mail);
    }
    callNo(phoneno) {
        this.utiSer.callMobile(phoneno);
    }
};
MySponsorPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams }
];
MySponsorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-my-sponsor',
        template: _my_sponsor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_my_sponsor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MySponsorPage);



/***/ }),

/***/ 5084:
/*!*****************************************************!*\
  !*** ./src/app/pages/setdicount/setdicount.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetdicountPage": () => (/* binding */ SetdicountPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _setdicount_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setdicount.page.html?ngResource */ 19170);
/* harmony import */ var _setdicount_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setdicount.page.scss?ngResource */ 22602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 95472);







let SetdicountPage = class SetdicountPage {
    constructor(modalController, util, apiSer) {
        this.modalController = modalController;
        this.util = util;
        this.apiSer = apiSer;
        this.discount = 0;
        this.counter = 0;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // this.discount = 0;
            let loading = yield this.util.presentLoading();
            this.apiSer.getProfile().then((res) => {
                loading.dismiss();
                if (res.status == 1) {
                    this.counter = 0;
                    //  this.profile = res.data;
                    if (res.data.profile.sponsorDiscount && res.data.profile.sponsorDiscount != '') {
                        this.discount = res.data.profile.sponsorDiscount;
                    }
                    else {
                        //this.discount = 0;
                    }
                }
                else {
                    //this.goNext(["/questionare"]);
                }
            });
        });
    }
    saveDsicount(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.counter++;
            if (this.counter != 1) {
                console.log(event.detail.value);
                this.util.defaultDiscount(event);
            }
        });
    }
    closeModal() {
        this.modalController.dismiss({
            dismissed: true,
        });
    }
};
SetdicountPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService }
];
SetdicountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-setdicount',
        template: _setdicount_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_setdicount_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SetdicountPage);



/***/ }),

/***/ 5830:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _environment_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment.service */ 98407);
/* harmony import */ var _utility_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/api */ 63282);





let ApiService = class ApiService extends _environment_service__WEBPACK_IMPORTED_MODULE_0__.EnvironmentService {
    constructor(http) {
        super();
        this.http = http;
    }
    loginUser(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.LOGIN_USER, body).toPromise();
        });
    }
    registerUser(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.REGISTER, body).toPromise();
        });
    }
    getQuestions() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.get(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.GET_QUESTION).toPromise();
        });
    }
    forgotPassword(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http
                .post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.FORGOT_PASSWORD, body)
                .toPromise();
        });
    }
    getCountryList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.get(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.GET_COUNTRY).toPromise();
        });
    }
    getProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.get(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.GET_PROFILE).toPromise();
        });
    }
    checkZip(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.CHECK_ZIP, body).toPromise();
        });
    }
    checkEmail(email) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let body = { email };
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.CHECK_EMAIL, body).toPromise();
        });
    }
    checkTaxId(countryId, taxId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let body = {
                countryId: countryId ? Number(countryId) : null,
                taxId: taxId ? taxId.toString() : null
            };
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.CHECK_TAX_ID, body).toPromise();
        });
    }
    updateProfile(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.UPDATE_PROFILE, body).toPromise();
        });
    }
    getPlanDetail(selected_plan) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let body = { selected_plan };
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.GET_PLAN, body).toPromise();
        });
    }
    createPayment(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.CREATE_PAYMENT, body).toPromise();
        });
    }
    paymentStatus(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.CHECK_PAYMENT_STATUS, body).toPromise();
        });
    }
    proceedRegistration(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.PROCEED_REGISTRATION, body).toPromise();
        });
    }
    submitAnswer(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.SUBMIT_ANSWER, body).toPromise();
        });
    }
    logoutUser(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.LOGOUT_USER, body).toPromise();
        });
    }
    getShopCategory(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.GET_CATEGORY, body).toPromise();
        });
    }
    getProducts(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.GET_PRODUCTS, body).toPromise();
        });
    }
    addToCart(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.ADD_TO_CART, body).toPromise();
        });
    }
    removeFromCart(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.REMOVE_FROM_CART, body).toPromise();
        });
    }
    getCart(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.GET_CART, body).toPromise();
        });
    }
    cartPayment(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.CART_PAYMENT, body).toPromise();
        });
    }
    buyNow(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.BUY_NOW, body).toPromise();
        });
    }
    changePassword(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.CHANGE_PASS, body).toPromise();
        });
    }
    changeLanguage(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.CHANGE_LANG, body).toPromise();
        });
    }
    getVideo(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.GET_VIDEO_DURATION, body).toPromise();
        });
    }
    saveVideo(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.SAVE_VIDEO_DURATION, body).toPromise();
        });
    }
    getMembers(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.GET_MEMBERS, body).toPromise();
        });
    }
    getProspects(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.GET_PROSPECT, body).toPromise();
        });
    }
    saveNotes(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.SAVE_NOTES, body).toPromise();
        });
    }
    saveDiscount(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.SAVE_DISCOUNT, body).toPromise();
        });
    }
    dashboard(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.DASHBOARD, body).toPromise();
        });
    }
    checkQuestion(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.CHECK_QUESTION, body).toPromise();
        });
    }
    mySponsor(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.MY_SPONSOR, body).toPromise();
        });
    }
    defaultDiscount(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_DISCOUNT, body).toPromise();
        });
    }
    defaultDashboard(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_DASHBOARD, body).toPromise();
        });
    }
    manageProducts(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.MANAGE_PRODUCTS, body).toPromise();
        });
    }
    subscribeProducts(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.SUBSCRIBE_PRODUCT, body).toPromise();
        });
    }
    placeMember(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.PLACE_MEMBER, body).toPromise();
        });
    }
    searchMember(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.SEARCH_MEMBER, body).toPromise();
        });
    }
    getLowLevel(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.GET_LOW_LEVEL, body).toPromise();
        });
    }
    userForPlacement(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.USER_FOR_PLACEMENT, body).toPromise();
        });
    }
    placementTree(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.PLACEMENT_TREE, body).toPromise();
        });
    }
    prospectDashboard(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.PROSPECT_DASHBOARD, body).toPromise();
        });
    }
    paymentOption(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.PAYMENT_OPTION, body).toPromise();
        });
    }
    changePaymentOption(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.CHANGE_PAYMENT_OPTION, body).toPromise();
        });
    }
    checkIban(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.CHECK_IBAN, body).toPromise();
        });
    }
    commissionPayment(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.COMMISION_PAYMENT_OPTION, body).toPromise();
        });
    }
    aboPayment(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.ABO_PAYMENT_OPTION, body).toPromise();
        });
    }
    codeQR(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.QR_CODE, body).toPromise();
        });
    }
    deletPayment(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.DELETE_PAYMENT_OPTION, body).toPromise();
        });
    }
    partnerAgreement(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.PARTNER_AGREEMENT, body).toPromise();
        });
    }
    appVersion(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.APP_VERSION, body).toPromise();
        });
    }
    validateTaxID(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.TAX_ID, body).toPromise();
        });
    }
    getSupportCategory(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.GET_SUPPORT_CATEGORY, body).toPromise();
        });
    }
    submitSupport(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.SUBMIT_SUPPORT, body).toPromise();
        });
    }
    listOfAnalaysts(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.LIST_OF_ANALYSTS, body).toPromise();
        });
    }
    bookAnlaysis(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.BOOK_ANALYSIS, body).toPromise();
        });
    }
    promoCode(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.PROMO_CODE, body).toPromise();
        });
    }
    checkVoucher(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.CHECK_VOUCHER, body).toPromise();
        });
    }
    freeMembership(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.FREE_MEMBERSHIP, body).toPromise();
        });
    }
    getLastPayments(body = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.apiUrl + _utility_api__WEBPACK_IMPORTED_MODULE_1__.GET_LAST_PAYMENTS, body).toPromise();
        });
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: "root",
    })
], ApiService);



/***/ }),

/***/ 98407:
/*!*************************************************!*\
  !*** ./src/app/services/environment.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnvironmentService": () => (/* binding */ EnvironmentService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);



let EnvironmentService = class EnvironmentService {
    constructor() { }
    get apiUrl() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseurl;
    }
    get fileUrl() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.fileurl;
    }
    get production() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production;
    }
    get plans() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.plans;
    }
    get videosGerman() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.videosGermany;
    }
    get videosEnglish() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.videosEnglish;
    }
    get pdfGerman() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.germanyPdfs;
    }
    get pdfEnglish() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.englishPdfs;
    }
    getEnglishError() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.englishErrors;
    }
    getGermanError() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.englishErrors;
    }
};
EnvironmentService.ctorParameters = () => [];
EnvironmentService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], EnvironmentService);



/***/ }),

/***/ 55019:
/*!*****************************************!*\
  !*** ./src/app/services/fcm.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FcmService": () => (/* binding */ FcmService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 5830);
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.service */ 67241);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/push-notifications */ 79033);








let FcmService = class FcmService {
    constructor(toastController, loadingController, router, alertController, navCtrl, apiSer, platform, utility) {
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.router = router;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.apiSer = apiSer;
        this.platform = platform;
        this.utility = utility;
    }
    /*Notification code*/
    pushRegister() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_2__.PushNotifications.requestPermissions().then(result => {
                if (result.receive === 'granted') {
                    // Register with Apple / Google to receive push via APNS/FCM
                    _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_2__.PushNotifications.register();
                    // On success, we should be able to receive notifications
                    _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_2__.PushNotifications.addListener('registration', (token) => {
                        console.log('Push registration success, token: ' + token.value);
                        console.log('Push registration success, token: ' + token.value);
                        //this.utility.getFCMToken(token.value)
                        this.utility.FCMToken = token.value;
                        this.utility.setStorage("FCMToken", token.value);
                    });
                    // Some issue with our setup and push will not work
                    _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_2__.PushNotifications.addListener('registrationError', (error) => {
                        // console.log('Push registration success, token: ' + token.value)
                        console.log('Error on registration: ' + JSON.stringify(error));
                    });
                }
                else {
                    // Show some error
                    console.log("here");
                }
            });
            // Show us the notification payload if the app is open on our device
            _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_2__.PushNotifications.addListener('pushNotificationReceived', (notification) => {
                this.utility.newNotification += 1;
                this.utility.changeMessage("Push Notification");
                console.log('Push received: ' + JSON.stringify(notification));
                this.savePush(notification, "no-navigate");
                //  this.utility.getCart('notification');
            });
            // // Method called when tapping on a notification
            _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_2__.PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
                const data = notification.notification.data;
                console.log('Push action performed: ' + data);
                console.log('Push action performed: ' + JSON.stringify(data));
                this.savePush("", "navigate");
            });
            // await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
            //   console.log('Push notification action performed', notification.actionId, notification.inputValue);
            //   const data = notification.notification.data;
            //   console.log('Push action performed: ' + data);
            //   console.log('Push action performed: ' + JSON.stringify(data));
            //   this.savePush(notification, "navigate")
            // });
        });
    }
    pushReceived(noti) {
        this.utility.setStorage('notification', noti);
    }
    catchPushRecieve() {
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_2__.PushNotifications.addListener('pushNotificationReceived', (notification) => {
            this.utility.newNotification += 1;
            this.utility.changeMessage("Push Notification");
            console.log('Push received: ' + JSON.stringify(notification));
            this.savePush(notification, "no-navigate");
            //  this.utility.getCart('notification');
        });
    }
    getDeliverMsg() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // const getDeliveredNotifications = async () => {
            let notificationList = yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_2__.PushNotifications.getDeliveredNotifications();
            console.log('delivered notifications', notificationList);
            if (notificationList.notifications.length > 0) {
                notificationList.notifications.forEach(element => {
                    if (element === null || element === void 0 ? void 0 : element.title) {
                        element['data'] = {};
                        this.savePush(element, "no-navigate");
                    }
                });
                let remove = yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_2__.PushNotifications.removeAllDeliveredNotifications();
            }
            //}
        });
    }
    savePush(notification, action) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (action == 'navigate') {
                this.utility.goNext('/tabs/notification');
                this.getDeliverMsg();
                return false;
            }
            // if (action == 'navigate') {
            //   this.utility.goNext('/tabs/notification');
            // }
            // else{
            let notifications = [];
            let prevNot = yield this.utility.getStorage('notification');
            // notifications = await this.utility.getStorage('notification');
            console.log(prevNot);
            let checkedNotification;
            if (Object.keys(notification.data).length === 0) {
                checkedNotification = {
                    "body": notification.body,
                    "titile": notification.title,
                    "id": notification.id,
                };
            }
            else {
                checkedNotification = notification.data;
            }
            if (!prevNot) {
                notifications.push(checkedNotification);
            }
            else {
                prevNot = JSON.parse(prevNot);
                if (prevNot.length == 15) {
                    prevNot.splice(0, 1);
                }
                prevNot.push(checkedNotification);
                notifications = prevNot;
            }
            console.log(notifications, "notificationsnotificationsnotificationsnotificationsnotifications");
            // notifications.push(notification);
            this.utility.setStorage('notification', JSON.stringify(notifications));
            // }
        });
    }
};
FcmService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: _util_service__WEBPACK_IMPORTED_MODULE_1__.UtilService }
];
FcmService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: "root",
    })
], FcmService);



/***/ }),

/***/ 4933:
/*!***********************************************!*\
  !*** ./src/app/services/token-interceptor.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenInterceptor": () => (/* binding */ TokenInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.service */ 67241);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 65485);




let TokenInterceptor = class TokenInterceptor {
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    intercept(request, next) {
        let token = this.authenticationService.getToken();
        console.log(token);
        if (token) {
            const cloned = request.clone({
                headers: request.headers.set("Authorization", "auth_token " + token),
            });
            // return next.handle(request).pipe(catchError(err => {
            //   console.log(err);
            //   if (err.status === 401) {
            //     // auto logout if 401 response returned from api
            //     // this.authenticationService.logout();
            //     // location.reload(true);
            //   }
            //   const error = err.error.message || err.statusText;
            //   return throwError(error);
            // }))
            //  next.handle(request).subscribe((res) => {
            //   let result: any = res;
            //   if (result?.body?.msg) {
            //     console.log(res)
            //     if (result.body.msg == "Token not found in request" || result.body.msg == "Unauthorized") {
            //       this.authenticationService.silentLogout();
            //      console.log(" in token here")
            //     }
            //   }
            //   return next.handle(cloned);
            // })
            return next.handle(cloned);
        }
        else {
            //this.router.navigate(['/login']);
        }
        return next.handle(request);
    }
};
TokenInterceptor.ctorParameters = () => [
    { type: _util_service__WEBPACK_IMPORTED_MODULE_0__.UtilService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
TokenInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], TokenInterceptor);



/***/ }),

/***/ 67241:
/*!******************************************!*\
  !*** ./src/app/services/util.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilService": () => (/* binding */ UtilService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/network */ 23244);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/storage */ 8369);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ 5830);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _video_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video.service */ 8472);
/* harmony import */ var _environment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environment.service */ 98407);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 18406);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 96671);
/* harmony import */ var _awesome_cordova_plugins_email_composer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/email-composer/ngx */ 93731);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 22564);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/browser */ 65821);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 78394);
/* harmony import */ var src_app_utility_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/utility/message */ 34410);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 38189);



















let UtilService = class UtilService {
    constructor(toastController, loadingController, router, alertController, navCtrl, apiSer, _translate, videoSer, envr, emailComposer, callNumber, modalController, domSanit, theInAppBrowser, platform) {
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.router = router;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.apiSer = apiSer;
        this._translate = _translate;
        this.videoSer = videoSer;
        this.envr = envr;
        this.emailComposer = emailComposer;
        this.callNumber = callNumber;
        this.modalController = modalController;
        this.domSanit = domSanit;
        this.theInAppBrowser = theInAppBrowser;
        this.platform = platform;
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject('default message');
        this.currentMessage = this.messageSource.asObservable();
        this.changeItem = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
        this.cartNo = 0;
        this.mainDashboard = '';
        this.newNotification = 0;
        this.pdfLink = this.envr.pdfEnglish;
        this.paymnetType = 'one';
        this.upadteApp = true;
        this.ismodalActive = false;
        this.paymnetCompleted = true;
        this.getLastPayments = [];
        this.memberPage = [
            { title: 'Dashboard', url: '/tabs/dashboard/defaultDash', icon: 'grid-outline', subPages: null, role: "Member", name: '', menu: "menu1" },
            { title: 'My Sponser', url: "", icon: 'person-circle-outline', subPages: null, role: "Member", name: 'sponsor', menu: "menu2" },
            {
                title: 'My iPro', url: "", icon: 'information-circle-outline', menu: "menu3", subPages: [
                    { title1: 'My Products', menu: "menu4", url: '/tabs/myproducts', id: "nested-button5", component: '', name: 'about1' },
                    { title1: 'Prospect Management', menu: "menu5", url: '/tabs/user-managment/prospect', id: "nested-button2", component: '', name: 'about1' },
                    { title1: 'Member Management', menu: "menu6", url: '/tabs/user-managment/member', id: "nested-button3", component: '', name: 'about1' },
                    { title1: 'Member placement', menu: "menu7", url: '/member-replacement', id: "nested-button4", component: '', name: 'about1' },
                ], name: ''
            },
            {
                title: 'Settings', menu: "menu8", url: "", icon: 'settings-outline', subPages: [
                    { title1: 'Profile', menu: "menu22", url: "/tabs/profile", id: "nested-button012", component: '', name: 'about3' },
                    { title1: 'Change Language', menu: "menu10", id: "language", component: '', name: 'language', url: "" },
                    { title1: 'Change Password', menu: "menu9", id: "nested-button1", component: '', name: 'about1', url: "/tabs/changepassword" },
                    { title1: 'Change Dashboard', menu: "menu11", id: "dashboard", component: '', name: 'dashboard', url: "", },
                    { title1: 'Abo Payment Options', menu: "menu13", url: "/tabs/paymnet-option", id: "nested-button01", component: '', name: 'about2' },
                    { title1: 'Commission Payment ', menu: "menu14", url: "/tabs/commission-option", id: "nested-button011", component: '', name: 'about21' },
                    { title1: 'Set Default Discount', menu: "menu12", id: "discount", component: '', name: 'discount', url: "" },
                    { title1: 'Support ', menu: "menu23", url: "/tabs/support", id: "nested-button011", component: '', name: 'about21' },
                ], name: ''
            },
            {
                ///tabs/member-managment'
                title: 'Legal', menu: "menu15", url: "", icon: 'ribbon-outline', subPages: [
                    { title1: 'Legal Notice', menu: "menu16", component: '', name: 'notice', url: "" },
                    { title1: 'Private Policy', menu: "menu17", component: '', name: 'privacy', url: "" },
                    { title1: 'Term & Conditions', menu: "menu18", component: '', name: 'tnc', url: "" },
                ], name: ''
            },
            {
                ///tabs/member-managment'
                title: 'My Analysis Data', menu: "menu19", url: "", icon: 'analytics-outline', subPages: [
                    { title1: 'QR Code', menu: "menu20", component: '', name: 'analysis', url: "" }
                ], name: ''
            },
            { title: 'Logout', menu: "menu21", url: "", icon: 'log-out-outline', subPages: null, name: 'logout' }
        ];
        this.prospectPage = [
            { title: 'Dashboard', menu: "menu1", url: '/tabs/area-of-interest', icon: 'grid-outline', subPages: null, role: "Prospect", name: '' },
            { title: 'My Sponser', menu: "menu2", url: "", icon: 'person-circle-outline', subPages: null, role: "Prospect", name: 'sponsor' },
            {
                title: 'Settings', menu: "menu8", url: "", icon: 'settings-outline', subPages: [
                    { title1: 'Profile', menu: "menu22", url: "/tabs/profile", id: "nested-button012", component: '', name: 'about3' },
                    { title1: 'Change Language', menu: "menu10", id: "language", component: '', name: 'language', url: "" },
                    { title1: 'Change Password', menu: "menu9", id: "nested-button1", component: '', name: 'about1', url: "/tabs/changepassword" },
                    { title1: 'Support ', menu: "menu23", url: "/tabs/support", id: "nested-button011", component: '', name: 'about21' },
                ], name: ''
            },
            {
                ///tabs/member-managment'
                title: 'Legal', menu: "menu15", url: "", icon: 'ribbon-outline', subPages: [
                    { title1: 'Legal Notice', menu: "menu16", component: '', name: 'notice', url: "" },
                    { title1: 'Private Policy', menu: "menu17", component: '', name: 'privacy', url: "" },
                    { title1: 'Term & Conditions', menu: "menu18", component: '', name: 'tnc', url: "" },
                ], name: ''
            },
            {
                ///tabs/member-managment'
                title: 'My Analysis Data', menu: "menu19", url: "", icon: 'analytics-outline', subPages: [
                    { title1: 'QR Code', menu: "menu20", component: '', name: 'analysis', url: "" }
                ], name: ''
            },
            { title: 'Logout', menu: "menu21", url: '', icon: 'log-out-outline', subPages: null, name: 'logout' }
        ];
        this.appPages = this.prospectPage;
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
        this.setStorage = (key, data) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            yield localStorage.setItem(key, data);
        });
        this.getStorage = (key) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const value = yield localStorage.getItem(key);
            return value;
        });
        this.removeStorage = (key) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            yield localStorage.removeItem(key);
        });
        this.removeAuth = () => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            yield localStorage.removeItem('AUTH_STATUS');
            yield localStorage.removeItem('AUTH_TOKEN');
            yield localStorage.removeItem('AUTH_USER');
            yield localStorage.removeItem('userRole');
            yield localStorage.removeItem('CHANGE_DASH');
        });
        this.clearStorage = () => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            yield localStorage.clear();
        });
        this.setName = () => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.set({
                key: 'name',
                value: 'Max',
            });
            console.log("save data");
        });
        this.checkName = () => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const { value } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.get({ key: 'name' });
            console.log(`Hello ${value}!`);
        });
        this.removeName = () => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.remove({ key: 'name' });
        });
    }
    ;
    changeMessage(message) {
        this.messageSource.next(message);
    }
    presentToast(message, postion) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 3000,
                position: 'top'
            });
            // postion ? postion :
            toast.present();
        });
    }
    presentAlert(header, subHeader, inputs, message, buttons) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: header,
                subHeader: subHeader,
                inputs: inputs,
                message: message,
                buttons: buttons,
                cssClass: 'alertClass',
            });
            yield alert.present();
        });
    }
    presentLoading(requiredLoader = '') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (requiredLoader == 'yes') {
                const loading = yield this.loadingController.create({
                    message: "Please wait...",
                    translucent: true,
                    cssClass: "custom-class custom-loading",
                });
                loading.present();
                return yield loading;
            }
            else {
                const loading = yield this.loadingController.create({
                //  message: "Please wait...",
                // translucent: true,
                // cssClass: "custom-class custom-loading",
                });
                // loading.present();
                return yield loading;
            }
        });
    }
    getToken() {
        if (localStorage.getItem("AUTH_TOKEN")) {
            return localStorage.getItem("AUTH_TOKEN");
        }
        else {
            return null;
        }
    }
    checkNetwork() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const status = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_0__.Network.getStatus();
            if (status.connectionType == "none" || status.connectionType == "unknown") {
                this.presentAlert("Error", "", [], this.translateText('ERROR').NETWORK_CHECK, [this.translateText("MODALS").BUTTONS.OK]);
                return false;
            }
            else {
                return true;
            }
        });
    }
    checkLiveUrl(url) {
        let status = false;
        if (url) {
            if (url.indexOf("http:") != -1) {
                status = true;
            }
            else if (url.indexOf("http:") != -1) {
                status = true;
            }
            else {
                status = false;
            }
        }
        return status;
    }
    searchData(event, arrayList, columName) {
        let filteredData = [];
        filteredData = arrayList.filter(data => {
            console.log(data[columName].toLowerCase().includes(event.text.toLowerCase()));
            return data[columName].toLowerCase().includes(event.text.toLowerCase());
            // return data[columName].toLowerCase().indexOf(event.text.toLowerCase()) !== -1
        });
        console.log(filteredData);
        event.component.items = filteredData;
    }
    goNext(url) {
        this.upadteApp = true;
        this.navCtrl.navigateForward(url);
    }
    openPdfLinks(pdfUrl, pdfName) {
        console.log(pdfUrl);
        this.pdf = this.domSanit.bypassSecurityTrustResourceUrl(pdfUrl);
        if (this.platform.is('android')) {
            const browser = this.theInAppBrowser.create(pdfUrl);
            this.openPage = this.theInAppBrowser.create(pdfUrl, "_blank", this.options);
        }
        else {
            _capacitor_browser__WEBPACK_IMPORTED_MODULE_7__.Browser.open({ url: pdfUrl });
        }
    }
    getPlanDetail(plan) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let selectedPlan = yield this.getStorage(plan);
            let loading = yield this.presentLoading();
            let response = yield this.apiSer.getPlanDetail(plan);
            loading.dismiss();
            if (response.status == 1) {
                this.navCtrl.navigateForward(["/tabs/basket"]);
            }
        });
    }
    goBack() {
        this.navCtrl.back();
    }
    getFCMToken() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let FCMToken = yield this.getStorage("FCMToken");
            if (FCMToken != null && FCMToken != undefined && FCMToken != '') {
                return FCMToken;
            }
            else {
                return false;
            }
            // return this.FCMToken;
        });
    }
    openPopup(component, title, cssClass, backdrop) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.ismodalActive = true;
            const modal = yield this.modalController.create({
                component: component,
                componentProps: {
                    "paramTitle": title
                },
                cssClass: cssClass,
                backdropDismiss: backdrop
            });
            modal.onDidDismiss().then((dataReturned) => {
                this.ismodalActive = false;
                if (dataReturned !== null) {
                    console.log(dataReturned, "dataReturned");
                    this.getpoUpData(dataReturned);
                    // next;
                    // this.dataReturned = dataReturned.data;
                    //alert('Modal Sent Data :'+ dataReturned);
                }
            });
            return yield modal.present();
        });
    }
    getpoUpData(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            return data;
        });
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.ismodalActive = false;
            this.modalController.dismiss({
                dismissed: true,
            });
        });
    }
    // Common methods used 
    changeLan(lan, page) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let params = {};
            if (lan == 'en' || lan == 'english') {
                this.videoSer.videoType = this.envr.videosEnglish;
                this.pdfLink = this.envr.pdfEnglish;
                // this.language = 'en'
                this.deviceLang = 'en';
                params = {
                    "language": 'english'
                };
            }
            else if (lan == 'de' || lan == 'german') {
                this.videoSer.videoType = this.envr.videosGerman;
                this.pdfLink = this.envr.pdfGerman;
                this.deviceLang = 'de';
                params = {
                    "language": 'german'
                };
                //this.events.publish('langChanged', this.envr.videosGerman);
            }
            this.changeItem = this.deviceLang;
            this._initTranslate(this.deviceLang);
            let loading = yield this.presentLoading();
            this.apiSer
                .changeLanguage(params)
                .then((res) => {
                loading.dismiss();
                if (page != 'register') {
                    if (res.status == 1) {
                        this.presentToast(this.translateText('MSG').language, "top");
                        this.closeModal();
                    }
                    else {
                        this.presentToast(this.translateText('MSG').someissueInNetwork, "bottom");
                    }
                }
            })
                .catch((err) => {
                console.log(err);
                loading.dismiss();
            });
        });
    }
    _initTranslate(language) {
        this._translate.setDefaultLang(language);
        if (language) {
            this.deviceLang = language;
        }
        else {
            this.deviceLang = 'en';
        }
        this._translate.use(this.deviceLang);
    }
    changeMenu() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let userRole = yield this.getStorage('userRole');
            this.defaultDash = yield this.getStorage('CHANGE_DASH');
            console.log(this.defaultDash);
            // defaultDash = JSON.parse(defaultDash)
            // let dashboard;
            this.userRole = userRole;
            if (userRole == undefined || userRole == null || this.defaultDash == undefined || this.defaultDash == null) {
                //alert("This is because userRole is:"+userRole+" or may be because default dash is "+ this.defaultDash+".You can also check this :"+ this.mainDashboard  );
            }
            // if(userRole !)
            // userRole = userRole.toLowerCase();
            if (userRole == 'Prospect') {
                this.appPages = this.prospectPage;
                this.mainDashboard = "/tabs/area-of-interest";
            }
            else if (userRole == 'Member' || userRole == 'Partner') {
                this.appPages = this.memberPage;
                // this.mainDashboard = '/tabs/member-replacement';
                this.mainDashboard = "/tabs/dashboard/" + this.defaultDash;
            }
            // else{
            //   this.openPopup(UserModalPage,'error','error-class',true);
            //  }
            return this.mainDashboard;
        });
    }
    sendMail(mail) {
        if (mail != '') {
            this.emailComposer.getClients().then((apps) => {
                // Returns an array of configured email clients for the device
            });
            this.emailComposer.requestPermission().then((available) => {
                console.log(available);
            });
            this.emailComposer.isAvailable().then((available) => {
                if (available) {
                }
            });
            let email = {
                to: mail,
                cc: this.translateText('EMAIL').CC,
                subject: this.translateText('EMAIL').SUBJECT,
                body: this.translateText('EMAIL').BODY,
                isHtml: true
            };
            this.emailComposer.open(email);
        }
    }
    callMobile(phone) {
        if (phone != '') {
            this.callNumber.callNumber(phone, true)
                .then(res => console.log('Launched dialer!', res))
                .catch(err => console.log('Error launching dialer', err));
        }
    }
    checkQuestionaire() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let loading = yield this.presentLoading();
            this.apiSer
                .checkQuestion()
                .then((res) => {
                loading.dismiss();
                if (res.status == 1) {
                    this.goNext(["/questionare"]);
                }
            })
                .catch((err) => {
                console.log(err);
                loading.dismiss();
            });
        });
    }
    defaultDashChange(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            //  console.log(data.detail.value)
            let resData = {
                "defaultDashboard": data
            };
            this.defaultDash = yield this.getStorage('CHANGE_DASH');
            // authUser = JSON.parse(authUser)
            if (data == 'Partner') {
                this.goNext('/tabs/dashboard/Partner');
                this.defaultDash = 'Partner';
            }
            else {
                this.goNext('/tabs/dashboard/Member');
                this.defaultDash = 'Member';
            }
            this.changeMenu();
            this.setStorage('CHANGE_DASH', this.defaultDash);
            this.closeModal();
            // let loading = await this.presentLoading();
            // this.apiSer
            //   .defaultDashboard(resData)
            //   .then((res: any) => {
            //     loading.dismiss();
            //     if (res.status == 1) {
            //       this.presentToast("Dashboard changed", "top")
            //     }
            //     else {
            //       this.presentToast("Please try again later", "top")
            //     }
            //   })
            //   .catch((err: any) => {
            //     console.log(err);
            //     loading.dismiss();
            //   });
        });
    }
    defaultDiscount(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            console.log(data);
            let resData = {
                "discount": data.detail.value
            };
            let loading = yield this.presentLoading();
            this.apiSer
                .defaultDiscount(resData)
                .then((res) => {
                loading.dismiss();
                if (res.status == 1) {
                    this.presentToast(this.translateText('MSG').defaultDiscount, 'top');
                    // this.goNext(["/tabs/area-of-interest"]);
                }
                else {
                    //this.goNext(["/questionare"]);
                }
            })
                .catch((err) => {
                console.log(err);
                loading.dismiss();
            });
        });
    }
    getCart(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let response = yield this.apiSer.getCart();
            let products_data;
            if (response.status) {
                products_data = response ? response : [];
                if (products_data) {
                    products_data = products_data.data ? products_data.data : [];
                    if (type == 'notification') {
                        this.newNotification += 1;
                    }
                    // else if(type== 'notification'){
                    // }
                    this.cartNo = products_data.length;
                }
            }
            else {
                products_data = null;
                if (response.msg == "Unauthorized") {
                    this.removeAuth();
                    this.router.navigate(['/login']);
                }
            }
            return products_data;
        });
    }
    translateText(page) {
        let text;
        this._translate.get(page).subscribe(value => {
            text = value;
            console.log(value);
            // this.items[0].name = value;
        });
        return text;
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let AUTH_STATUS = yield this.getStorage(src_app_utility_message__WEBPACK_IMPORTED_MODULE_8__.session.AUTH_STATUS);
            console.log(AUTH_STATUS);
            if (AUTH_STATUS) {
                this.presentAlert("Warning", "", [], this.translateText('MSG').logout_confirmation, [{
                        text: this.translateText("MODALS").BUTTONS.YES,
                        cssClass: 'secondary',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                            this.silentLogout();
                            //console.log(firstLogin);
                        })
                    },
                    {
                        text: this.translateText("MODALS").BUTTONS.NO,
                        role: 'cancel',
                        cssClass: 'danger',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }]);
            }
        });
    }
    silentLogout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            var loading = yield this.presentLoading();
            var firstLogin = yield this.getStorage('firstLogin');
            let fcmToken = {
                "notificationToken": yield this.getFCMToken()
            };
            this.apiSer.logoutUser(fcmToken).then((res) => {
                loading.dismiss();
                this.removeAuth();
                this.router.navigate(['/login']);
            });
        });
    }
    convertToFloat(amt) {
        let covertedAmt;
        if (amt) {
            if (amt.indexOf('.') > -1) {
                covertedAmt = amt.split('.').join("");
            }
            else {
                covertedAmt = amt;
            }
            if (amt.indexOf(',') > -1) {
                covertedAmt = covertedAmt.replaceAll(',', '.');
            }
            covertedAmt = parseFloat(covertedAmt).toFixed(2);
        }
        return covertedAmt;
    }
    convertBacktoString(number, decimals, dec_point, thousands_sep) {
        // Strip all characters but numerical ones.
        number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
        let n = !isFinite(+number) ? 0 : +number, prec = !isFinite(+decimals) ? 0 : Math.abs(decimals), sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep, dec = (typeof dec_point === 'undefined') ? '.' : dec_point, s = '', toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        if ((s[1] || '').length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1).join('0');
        }
        return s.join(dec);
    }
};
UtilService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.NavController },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService },
    { type: _video_service__WEBPACK_IMPORTED_MODULE_3__.VideoService },
    { type: _environment_service__WEBPACK_IMPORTED_MODULE_4__.EnvironmentService },
    { type: _awesome_cordova_plugins_email_composer_ngx__WEBPACK_IMPORTED_MODULE_5__.EmailComposer },
    { type: _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__.CallNumber },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.DomSanitizer },
    { type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__.InAppBrowser },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform }
];
UtilService = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Injectable)({
        providedIn: "root",
    })
], UtilService);



/***/ }),

/***/ 8472:
/*!*******************************************!*\
  !*** ./src/app/services/video.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoService": () => (/* binding */ VideoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 5830);
/* harmony import */ var _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @awesome-cordova-plugins/screen-orientation/ngx */ 98828);








let VideoService = class VideoService {
    constructor(toastController, loadingController, router, alertController, navCtrl, apiSer, screenOrientation, 
    //  private cdr: ChangeDetectorRef,
    platform) {
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.router = router;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.apiSer = apiSer;
        this.screenOrientation = screenOrientation;
        this.platform = platform;
        this.playerId = '';
        this.width = 0;
        this.cpo = [];
        this.showUpdate = false;
        this.currentProgress = {
            completion_percent: 0,
            completion_sec: 0,
            current_completion_percent: 0,
            current_progress_sec: 0,
            duration_sec: 0,
            hm_range: '0-7:2,8-13:3,14:2,15-16',
        };
        this.tmpCurrentProgress = {
            completion_percent: 0,
            completion_sec: 0,
            current_completion_percent: 0,
            current_progress_sec: 0,
            duration_sec: 0,
            hm_range: '0-7:2,8-13:3,14:2,15-16',
        };
        this.videoWatchedCompletely = false;
    }
    // ngOnInit() {
    //   this.platform.ready().then(async () => {
    //     console.log('Width: ' + this.platform.width());
    //     this.width = this.platform.width();
    //      this.info = await Device.getInfo();
    //      console.log(this.info);
    //     console.log('Height: ' + this.platform.height());
    //   });
    //   this.screenOrientation.onChange().subscribe(() => {
    //     console.log('screen change');
    //     if (this.playerAPI()) {
    //       console.log(this.playerAPI());
    //       console.log(this.screenOrientation.type);
    //       //  if (
    //       //    this.screenOrientation.type ===
    //       //      this.screenOrientation.ORIENTATIONS.LANDSCAPE ||
    //       //    this.screenOrientation.type ===
    //       //      this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY ||
    //       //    this.screenOrientation.type ===
    //       //      this.screenOrientation.ORIENTATIONS.LANDSCAPE_SECONDARY
    //       //  ) {
    //       //    console.log('landscape');
    //       //    if (this.playerAPI().isFullScreen()) {
    //       //      console.log('full screen');
    //       //    } else {
    //       //      console.log('not full screen');
    //       //    }
    //       //  } else {
    //       //     console.log('portrait');
    //       //  }
    //     }
    //   });
    // }
    playerAPI() {
        let galleryWrapID = this.playerId;
        if (cincopa &&
            cincopa.getGalleryById(galleryWrapID) &&
            cincopa.getGalleryById(galleryWrapID).getSkin().go.playerAPI) {
            return cincopa.getGalleryById(galleryWrapID).getSkin().go.playerAPI;
        }
        else {
            return false;
        }
    }
    specificTime(time) {
        if (this.playerAPI()) {
            this.playerAPI().setCurrentTime(time);
        }
    }
    initPlayer(id, playerId, cdr) {
        this.playerId = playerId;
        let samePageVideo = false;
        this.videoWatchedCompletely = false;
        let that = this;
        cincopa = {};
        cincopa.analytics_persistent = { mode: "localstorage" };
        cincopa.registeredFunctions = cincopa.registeredFunctions || [];
        cincopa.registeredFunctions.push({
            func(name, data, gallery) {
                const stats = gallery.get_video_play_stats(data);
                that.tmpCurrentProgress = stats;
                cdr.detectChanges();
                let onelessSec = parseInt(that.tmpCurrentProgress.current_progress_sec) + 1;
                // if(that.tmpCurrentProgress.current_progress_sec == that.tmpCurrentProgress.duration_sec || onelessSec == that.tmpCurrentProgress.duration_sec ){
                //   that.pauseVideo();
                // }
                if (that.tmpCurrentProgress.current_progress_sec == 100) {
                    that.videoWatchedCompletely = true;
                }
            },
            filter: "video.timeupdate",
        });
        cincopa.registeredFunctions.push({
            func(name, data, gallery) {
                // if (that.info.model === "iPad") {
                //   gallery.args.fullscreen_button = false;
                // }
                gallery.args.gear_button = false;
                const stats = gallery.get_video_play_stats(data);
                that.getCurrent(stats);
            },
            filter: "runtime.on-args",
        });
        cincopa.registeredFunctions.push({
            func(name, data, gallery) {
                const stats = gallery.get_video_play_stats(data);
                that.getCurrent(stats);
                // if(stats.current_completion_percent != 100){
                //   that.getVideoDur(that.videoId);
                // }
                samePageVideo = false;
                // console.log("load",stats)
            },
            filter: "video.load",
        });
        cincopa.registeredFunctions.push({
            func(name, data, gallery) {
                const stats = gallery.get_video_play_stats(data);
                that.getCurrent(stats);
            },
            filter: "video.change",
        });
        cincopa.registeredFunctions.push({
            func(name, data, gallery) {
                const stats = gallery.get_video_play_stats(data);
                that.currentProgress = stats;
                that.getCurrent(stats);
                that.saveVideoDur(that.videoId);
                that.showUpdate = true;
                cdr.detectChanges();
                console.log("pause", stats);
            },
            filter: "video.pause",
        });
        cincopa.registeredFunctions.push({
            func(name, data, gallery) {
                const stats = gallery.get_video_play_stats(data);
                that.videoWatchedCompletely = false;
                that.getCurrent(stats);
                cdr.detectChanges();
                if (stats.current_completion_percent != 100 && !samePageVideo) {
                    that.getVideoDur(that.videoId);
                }
                samePageVideo = true;
                console.log("play", stats);
            },
            filter: "video.play",
        });
        this.cpo = [];
        this.cpo._object = this.playerId;
        this.cpo._fid = id;
        _cpmp.push(this.cpo);
        (() => {
            const cp = document.createElement("script");
            cp.type = "text/javascript";
            cp.async = true;
            cp.src = "https://rtcdn.cincopa.com/libasync.js";
            let c = document.getElementsByTagName("script")[0];
            c.parentNode.insertBefore(cp, c);
        })();
    }
    onResize(event) {
        this.width = event.target.innerWidth;
    }
    enterFullScreen() {
        this.playerAPI() && this.playerAPI().enterFullScreen();
    }
    exitFullScreen() {
        this.playerAPI() && this.playerAPI().exitFullScreen();
    }
    pauseVideo() {
        if (!this.videoWatchedCompletely) {
            this.playerAPI() && this.playerAPI().pause();
            this.videoWatchedCompletely = false;
        }
        //  this.saveVideoDur(this.videoId);
    }
    saveVideoDur(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let seconds = this.convertIntoSec();
            let data = {
                "videoId": id,
                "duration": seconds
            };
            yield this.apiSer.saveVideo(data);
        });
    }
    getVideoDur(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.videoWatchedCompletely) {
                let result = yield this.apiSer.getVideo();
                if (result.status) {
                    let timeString = result === null || result === void 0 ? void 0 : result.data[id - 1].duration; // input string
                    let arr = timeString.split(":"); // splitting the string by colon
                    let secondsSting = Number(arr[0]) * 3600 + Number(arr[1]) * 60 + (+Number(arr[2]));
                    let arr2 = result === null || result === void 0 ? void 0 : result.data[id - 1].videoLength.split(":");
                    let videoLengthSec = Number(arr2[0]) * 3600 + Number(arr2[1]) * 60 + (+Number(arr2[2]));
                    if (secondsSting >= videoLengthSec) {
                        this.videoWatchedCompletely = true;
                        this.pauseVideo();
                        secondsSting = 0;
                        // this.playerAPI() && this.playerAPI().play();
                    }
                    else {
                        this.videoWatchedCompletely = false;
                    }
                    this.specificTime(secondsSting);
                }
                else {
                }
            }
        });
    }
    getCurrent(stats) {
        this.currentProgress = stats;
    }
    convertIntoSec() {
        var _a, _b;
        let seconds;
        if (this.videoWatchedCompletely) {
            seconds = parseInt((_a = this.currentProgress) === null || _a === void 0 ? void 0 : _a.duration_sec) - 1;
        }
        else {
            seconds = (_b = this.currentProgress) === null || _b === void 0 ? void 0 : _b.current_progress_sec;
        }
        //seconds = currenttime;
        return new Date(seconds * 1000).toISOString().slice(11, 19);
    }
    langChange(lan, cdr) {
        if (this.videoId != undefined) {
            this.initPlayer(this.videoType[this.videoId].initPlayer, this.videoType[this.videoId].id, cdr);
        }
    }
};
VideoService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService },
    { type: _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_1__.ScreenOrientation },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform }
];
VideoService.propDecorators = {
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.HostListener, args: ['window:resize', ['$event'],] }]
};
VideoService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: "root",
    })
], VideoService);



/***/ }),

/***/ 63282:
/*!********************************!*\
  !*** ./src/app/utility/api.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ABO_PAYMENT_OPTION": () => (/* binding */ ABO_PAYMENT_OPTION),
/* harmony export */   "ADD_TO_CART": () => (/* binding */ ADD_TO_CART),
/* harmony export */   "APP_VERSION": () => (/* binding */ APP_VERSION),
/* harmony export */   "BOOK_ANALYSIS": () => (/* binding */ BOOK_ANALYSIS),
/* harmony export */   "BUY_NOW": () => (/* binding */ BUY_NOW),
/* harmony export */   "CART_PAYMENT": () => (/* binding */ CART_PAYMENT),
/* harmony export */   "CHANGE_LANG": () => (/* binding */ CHANGE_LANG),
/* harmony export */   "CHANGE_PASS": () => (/* binding */ CHANGE_PASS),
/* harmony export */   "CHANGE_PAYMENT_OPTION": () => (/* binding */ CHANGE_PAYMENT_OPTION),
/* harmony export */   "CHECK_EMAIL": () => (/* binding */ CHECK_EMAIL),
/* harmony export */   "CHECK_IBAN": () => (/* binding */ CHECK_IBAN),
/* harmony export */   "CHECK_PAYMENT_STATUS": () => (/* binding */ CHECK_PAYMENT_STATUS),
/* harmony export */   "CHECK_QUESTION": () => (/* binding */ CHECK_QUESTION),
/* harmony export */   "CHECK_TAX_ID": () => (/* binding */ CHECK_TAX_ID),
/* harmony export */   "CHECK_VOUCHER": () => (/* binding */ CHECK_VOUCHER),
/* harmony export */   "CHECK_ZIP": () => (/* binding */ CHECK_ZIP),
/* harmony export */   "COMMISION_PAYMENT_OPTION": () => (/* binding */ COMMISION_PAYMENT_OPTION),
/* harmony export */   "CREATE_PAYMENT": () => (/* binding */ CREATE_PAYMENT),
/* harmony export */   "DASHBOARD": () => (/* binding */ DASHBOARD),
/* harmony export */   "DEFAULT_DASHBOARD": () => (/* binding */ DEFAULT_DASHBOARD),
/* harmony export */   "DEFAULT_DISCOUNT": () => (/* binding */ DEFAULT_DISCOUNT),
/* harmony export */   "DELETE_PAYMENT_OPTION": () => (/* binding */ DELETE_PAYMENT_OPTION),
/* harmony export */   "FORGOT_PASSWORD": () => (/* binding */ FORGOT_PASSWORD),
/* harmony export */   "FREE_MEMBERSHIP": () => (/* binding */ FREE_MEMBERSHIP),
/* harmony export */   "GET_CART": () => (/* binding */ GET_CART),
/* harmony export */   "GET_CATEGORY": () => (/* binding */ GET_CATEGORY),
/* harmony export */   "GET_COUNTRY": () => (/* binding */ GET_COUNTRY),
/* harmony export */   "GET_LAST_PAYMENTS": () => (/* binding */ GET_LAST_PAYMENTS),
/* harmony export */   "GET_LOW_LEVEL": () => (/* binding */ GET_LOW_LEVEL),
/* harmony export */   "GET_MEMBERS": () => (/* binding */ GET_MEMBERS),
/* harmony export */   "GET_PLAN": () => (/* binding */ GET_PLAN),
/* harmony export */   "GET_PRODUCTS": () => (/* binding */ GET_PRODUCTS),
/* harmony export */   "GET_PROFILE": () => (/* binding */ GET_PROFILE),
/* harmony export */   "GET_PROSPECT": () => (/* binding */ GET_PROSPECT),
/* harmony export */   "GET_QUESTION": () => (/* binding */ GET_QUESTION),
/* harmony export */   "GET_SUPPORT_CATEGORY": () => (/* binding */ GET_SUPPORT_CATEGORY),
/* harmony export */   "GET_VIDEO_DURATION": () => (/* binding */ GET_VIDEO_DURATION),
/* harmony export */   "LIST_OF_ANALYSTS": () => (/* binding */ LIST_OF_ANALYSTS),
/* harmony export */   "LOGIN_USER": () => (/* binding */ LOGIN_USER),
/* harmony export */   "LOGOUT": () => (/* binding */ LOGOUT),
/* harmony export */   "LOGOUT_USER": () => (/* binding */ LOGOUT_USER),
/* harmony export */   "MANAGE_PRODUCTS": () => (/* binding */ MANAGE_PRODUCTS),
/* harmony export */   "MY_SPONSOR": () => (/* binding */ MY_SPONSOR),
/* harmony export */   "PARTNER_AGREEMENT": () => (/* binding */ PARTNER_AGREEMENT),
/* harmony export */   "PAYMENT_OPTION": () => (/* binding */ PAYMENT_OPTION),
/* harmony export */   "PLACEMENT_TREE": () => (/* binding */ PLACEMENT_TREE),
/* harmony export */   "PLACE_MEMBER": () => (/* binding */ PLACE_MEMBER),
/* harmony export */   "PROCEED_REGISTRATION": () => (/* binding */ PROCEED_REGISTRATION),
/* harmony export */   "PROMO_CODE": () => (/* binding */ PROMO_CODE),
/* harmony export */   "PROSPECT_DASHBOARD": () => (/* binding */ PROSPECT_DASHBOARD),
/* harmony export */   "QR_CODE": () => (/* binding */ QR_CODE),
/* harmony export */   "REGISTER": () => (/* binding */ REGISTER),
/* harmony export */   "REMOVE_FROM_CART": () => (/* binding */ REMOVE_FROM_CART),
/* harmony export */   "SAVE_DISCOUNT": () => (/* binding */ SAVE_DISCOUNT),
/* harmony export */   "SAVE_NOTES": () => (/* binding */ SAVE_NOTES),
/* harmony export */   "SAVE_VIDEO_DURATION": () => (/* binding */ SAVE_VIDEO_DURATION),
/* harmony export */   "SEARCH_MEMBER": () => (/* binding */ SEARCH_MEMBER),
/* harmony export */   "SUBMIT_ANSWER": () => (/* binding */ SUBMIT_ANSWER),
/* harmony export */   "SUBMIT_SUPPORT": () => (/* binding */ SUBMIT_SUPPORT),
/* harmony export */   "SUBSCRIBE_PRODUCT": () => (/* binding */ SUBSCRIBE_PRODUCT),
/* harmony export */   "TAX_ID": () => (/* binding */ TAX_ID),
/* harmony export */   "UPDATE_PROFILE": () => (/* binding */ UPDATE_PROFILE),
/* harmony export */   "USER_FOR_PLACEMENT": () => (/* binding */ USER_FOR_PLACEMENT)
/* harmony export */ });
const LOGIN_USER = 'ipro_login';
const FORGOT_PASSWORD = 'ipro_forgot_password';
const REGISTER = 'ipro_register';
const GET_QUESTION = 'questions';
const GET_COUNTRY = 'countries';
const CHECK_ZIP = "ipro_check_zipcode";
const GET_PROFILE = "ipro_profile";
const UPDATE_PROFILE = "ipro_update_profile";
const GET_PLAN = "ipro_get_plan_details";
const CHECK_EMAIL = "ipro_check_email";
const CHECK_TAX_ID = "ipro_validate_tax_id";
const CREATE_PAYMENT = "ipro_payment";
const CHECK_PAYMENT_STATUS = "ipro_check_payment_status";
const PROCEED_REGISTRATION = "ipro_proceed_registration";
const SUBMIT_ANSWER = "ipro_save_answers";
const LOGOUT_USER = "ipro_logout";
const GET_CATEGORY = "ipro_shop_category";
const GET_PRODUCTS = "ipro_get_products";
const ADD_TO_CART = "ipro_add_to_cart";
const REMOVE_FROM_CART = "ipro_remove_cart";
const GET_CART = "ipro_get_cart_products";
const CART_PAYMENT = 'ipro_cart_payment';
const BUY_NOW = 'ipro_buy_now';
const CHANGE_PASS = 'ipro_change_password';
const CHANGE_LANG = 'ipro_change_language';
const GET_VIDEO_DURATION = 'ipro_get_videos';
const SAVE_VIDEO_DURATION = 'ipro_save_video_duration';
const GET_MEMBERS = 'ipro_get_members';
const GET_PROSPECT = 'ipro_get_prospects';
const SAVE_NOTES = 'ipro_save_quick_note';
const SAVE_DISCOUNT = 'ipro_save_discount';
const DASHBOARD = 'ipro_dashboard';
const CHECK_QUESTION = 'ipro_check_questionnaire';
const MY_SPONSOR = 'ipro_my_sponsor';
const DEFAULT_DISCOUNT = 'ipro_set_discount';
const DEFAULT_DASHBOARD = 'ipro_set_default_dashboard';
const MANAGE_PRODUCTS = 'ipro_manage_products';
const SUBSCRIBE_PRODUCT = 'ipro_package_subscription';
const PLACE_MEMBER = 'ipro_place_member';
const SEARCH_MEMBER = 'ipro_search_member';
const GET_LOW_LEVEL = 'ipro_get_lowest_level';
const USER_FOR_PLACEMENT = 'ipro_users_for_placement';
const PLACEMENT_TREE = 'ipro_placement_tree';
const PROSPECT_DASHBOARD = 'ipro_dashboard_text';
const CHANGE_PAYMENT_OPTION = 'ipro_change_payment_option';
const PAYMENT_OPTION = 'ipro_payment_options';
const COMMISION_PAYMENT_OPTION = 'ipro_save_commission_payment_option';
const CHECK_IBAN = 'ipro_check_iban';
const ABO_PAYMENT_OPTION = 'ipro_save_payment_option';
const QR_CODE = 'ipro_get_qrcode';
const LOGOUT = 'ipro_logout';
const DELETE_PAYMENT_OPTION = 'ipro_remove_payment_option';
const PARTNER_AGREEMENT = 'ipro_save_tax_form';
const APP_VERSION = "getAppVersion";
const TAX_ID = "ipro_validate_ust_id";
const GET_SUPPORT_CATEGORY = "ipro_get_support_categories";
const SUBMIT_SUPPORT = "ipro_send_support_ticket";
const LIST_OF_ANALYSTS = "ipro_get_analysts";
const BOOK_ANALYSIS = "ipro_book_analysis";
const PROMO_CODE = "ipro_check_promo_code";
const CHECK_VOUCHER = "ipro_check_free_membership_voucher";
const FREE_MEMBERSHIP = "ipro_get_free_membership";
const GET_LAST_PAYMENTS = "ipro_get_last_payments";


/***/ }),

/***/ 34410:
/*!************************************!*\
  !*** ./src/app/utility/message.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dobFilter": () => (/* binding */ dobFilter),
/* harmony export */   "fixLength": () => (/* binding */ fixLength),
/* harmony export */   "maxLength": () => (/* binding */ maxLength),
/* harmony export */   "message": () => (/* binding */ message),
/* harmony export */   "minLength": () => (/* binding */ minLength),
/* harmony export */   "session": () => (/* binding */ session)
/* harmony export */ });
var message = {
    maxLength: maxLength,
    minLength: minLength,
    fixLength: fixLength,
    dobFilter: dobFilter,
};
function maxLength(number, lengthMsg, characters) {
    return lengthMsg + number + characters;
}
function minLength(number, lengthMsg, characters) {
    return lengthMsg + number + characters;
    ;
}
function fixLength(number, lengthMsg, characters) {
    return lengthMsg + number + characters;
}
function dobFilter(minNumber, maxNumber, value, type) {
    console.log(value);
    if (value < minNumber || value > maxNumber)
        return " Please enter valid" + type + "(" + minNumber + "-" + maxNumber + ")";
}
var session = {
    AUTH_TOKEN: "AUTH_TOKEN",
    AUTH_STATUS: "AUTH_STATUS",
    AUTH_USER: "AUTH_USER",
    BOOKING: "AUTH_BOOKING",
    SELECTED_PLAN: "SELECTED_PLAN"
};


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseurl: 'https://bitbusinesstest.de/mobile/api/',
    //  baseurl: 'https://myipro.family/mobile/api/',        //live url
    fileurl: '',
    plans: {
        bodyAnlaysis: 'body analysis',
        itrade: 'automated trading',
        partnership: 'affiliate program'
    },
    videosEnglish: [{
            type: "register",
            initPlayer: "A4HAcLOLOO68!AkADF107s8tQ",
            id: "cincopa_16381961901703"
        },
        {
            type: "bodyAnlaysis",
            initPlayer: "A4HAcLOLOO68!AgMDkHFzzsRA",
            id: "cincopa_1638196190170"
        },
        {
            type: "partnership",
            initPlayer: "A4HAcLOLOO68!AcODu5kSqv52",
            id: "cincopa_16381961901702"
        },
        {
            type: "itrade",
            initPlayer: "A4HAcLOLOO68!AcKDfHlT5Nbx",
            id: "cincopa_16381961901701"
        },
    ],
    videosGermany: [{
            type: "register",
            initPlayer: "A4HAcLOLOO68!AYLDB_ELPWph",
            id: "cincopa_16381961901703"
        },
        {
            type: "bodyAnlaysis",
            initPlayer: "A4HAcLOLOO68!A4MDJ1lNmnjV",
            id: "cincopa_1638196190170"
        },
        {
            type: "partnership",
            initPlayer: "A4HAcLOLOO68!A4FDt5Egq_C3",
            id: "cincopa_16381961901702"
        },
        {
            type: "itrade",
            initPlayer: "A4HAcLOLOO68!A0DDVH1qzACA",
            id: "cincopa_16381961901701"
        },
    ],
    englishPdfs: [
        {
            title: 'agb',
            link: 'http://myipro.family/legals/english/RigthOfWithdrawal.html'
        },
        {
            title: 'Legalnotice',
            link: 'https://myipro.family/legals/english/Legal-Notice.html'
        },
        {
            title: 'privacypolicy',
            link: 'http://myipro.family/legals/english/Privacy-Policy.html'
        },
        {
            title: 'tnc',
            link: 'http://myipro.family/legals/english/Terms-and-conditions.html'
        },
        {
            title: 'partner',
            link: 'http://myipro.family/legals/english/PartnerAgreement.html'
        }
    ],
    germanyPdfs: [
        {
            title: 'agb',
            link: 'http://myipro.family/legals/german/Widerrufsrecht.html'
        },
        {
            title: 'Legalnotice',
            link: 'https://myipro.family/legals/german/Impressum.html'
        },
        {
            title: 'privacypolicy',
            link: 'http://myipro.family/legals/german/Datenschutz.html'
        },
        {
            title: 'tnc',
            link: ' http://myipro.family/legals/german/AGB.html'
        },
        {
            title: 'partner',
            link: 'http://myipro.family/legals/german/PartnerVereinbarung.html'
        }
    ],
    englishErrors: []
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 14909);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		470,
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		22725,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36149,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		19288,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		61031,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		58310,
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		81983,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		17039,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		57945,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		8714,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		31786,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		24702,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		94094,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		50795,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		36976,
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		51417,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		78412,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		94706,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		73459,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		23354,
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		41025,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		98592,
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		52526,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		92447,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		24820,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		83212,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		87557,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		28692,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		93544,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		40042,
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		70718,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		95981,
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		76488,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		47937,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		50942,
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		20816,
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		19062,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		13466,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		18404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		60953,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		44254,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		45195,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		86116,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		79781,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		48323,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		376,
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		82072,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 32009:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu ion-content.ios {\n  --padding-top: 20px !important;\n}\n\nion-content {\n  --padding-start: 8px !important;\n  --padding-end: 8px !important;\n  --padding-top: 0px !important;\n  --padding-bottom: 20px !important;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: var(--ion-color-danger);\n}\n\nion-menu.md ion-item ion-icon {\n  font-size: 24px;\n  color: var(--ion-color-danger);\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\n.tabs-inner {\n  contain: unset !important;\n  position: initial !important;\n}\n\n.menu-label img {\n  width: 20px;\n}\n\n.menu-label ion-label {\n  font-style: normal;\n  font-weight: bold !important;\n  font-size: 18.1689px;\n  line-height: 27px;\n  letter-spacing: -0.02em;\n  color: #6D6C6C;\n  margin-left: 10px;\n}\n\n.sub-menu {\n  margin-left: 80px;\n  font-style: normal;\n  font-size: 16.1689px;\n  line-height: 15px;\n  letter-spacing: -0.02em;\n  color: #6D6C6C;\n  display: none;\n}\n\n.selected-sub {\n  display: block;\n}\n\n.ios ion-nav > .ion-page > .toolbar.statusbar-padding:first-child,\n.ios ion-nav > .ion-page > ion-header > .toolbar.statusbar-padding:first-child,\n.ios ion-tab > .ion-page > .toolbar.statusbar-padding:first-child,\n.ios ion-tab > .ion-page > ion-header > .toolbar.statusbar-padding:first-child,\n.ios ion-tabs > .ion-page.tab-subpage > ion-header > .toolbar.statusbar-padding:first-child,\n.ios ion-menu > .menu-inner > .toolbar.statusbar-padding:first-child,\n.ios .menu-content .ion-page ion-header > .toolbar.statusbar-padding:first-child {\n  padding-top: 24px !important;\n  min-height: 64px !important;\n}\n\n.ios ion-nav > .ion-page > ion-content.statusbar-padding:first-child .scroll-content,\n.ios ion-nav > .ion-page > ion-header > ion-content.statusbar-padding:first-child .scroll-content,\n.ios ion-tab > .ion-page > ion-content.statusbar-padding:first-child .scroll-content,\n.ios ion-tab > .ion-page > ion-header > ion-content.statusbar-padding:first-child .scroll-content,\n.ios ion-tabs > .ion-page.tab-subpage > ion-header > ion-content.statusbar-padding:first-child .scroll-content,\n.ios ion-menu > .menu-inner > ion-content.statusbar-padding:first-child .scroll-content,\n.ios ion-menu > .menu-inner > ion-header > ion-content.statusbar-padding:first-child .scroll-content {\n  padding-top: 20px !important;\n}\n\n.ios ion-nav > .ion-page > ion-content.statusbar-padding:first-child[padding] .scroll-content,\n.ios ion-nav > .ion-page > ion-content.statusbar-padding:first-child[padding-top] .scroll-content,\n.ios ion-nav > .ion-page > ion-header > ion-content.statusbar-padding:first-child[padding] .scroll-content,\n.ios ion-nav > .ion-page > ion-header > ion-content.statusbar-padding:first-child[padding-top] .scroll-content,\n.ios ion-tab > .ion-page > ion-content.statusbar-padding:first-child[padding] .scroll-content,\n.ios ion-tab > .ion-page > ion-content.statusbar-padding:first-child[padding-top] .scroll-content,\n.ios ion-tab > .ion-page > ion-header > ion-content.statusbar-padding:first-child[padding] .scroll-content,\n.ios ion-tab > .ion-page > ion-header > ion-content.statusbar-padding:first-child[padding-top] .scroll-content,\n.ios ion-tabs > .ion-page.tab-subpage > ion-header > ion-content.statusbar-padding:first-child[padding] .scroll-content,\n.ios ion-tabs > .ion-page.tab-subpage > ion-header > ion-content.statusbar-padding:first-child[padding-top] .scroll-content,\n.ios ion-menu > .menu-inner > ion-content.statusbar-padding:first-child[padding] .scroll-content,\n.ios ion-menu > .menu-inner > ion-content.statusbar-padding:first-child[padding-top] .scroll-content,\n.ios ion-menu > .menu-inner > ion-header > ion-content.statusbar-padding:first-child[padding] .scroll-content,\n.ios ion-menu > .menu-inner > ion-header > ion-content.statusbar-padding:first-child[padding-top] .scroll-content {\n  padding-top: 36px !important;\n}\n\n.ios ion-nav > .ion-page > .toolbar.statusbar-padding:first-child ion-segment,\n.ios ion-nav > .ion-page > .toolbar.statusbar-padding:first-child ion-title,\n.ios ion-nav > .ion-page > ion-header > .toolbar.statusbar-padding:first-child ion-segment,\n.ios ion-nav > .ion-page > ion-header > .toolbar.statusbar-padding:first-child ion-title,\n.ios ion-tab > .ion-page > .toolbar.statusbar-padding:first-child ion-segment,\n.ios ion-tab > .ion-page > .toolbar.statusbar-padding:first-child ion-title,\n.ios ion-tab > .ion-page > ion-header > .toolbar.statusbar-padding:first-child ion-segment,\n.ios ion-tab > .ion-page > ion-header > .toolbar.statusbar-padding:first-child ion-title,\n.ios ion-tabs > .ion-page.tab-subpage > ion-header > .toolbar.statusbar-padding:first-child ion-segment,\n.ios ion-tabs > .ion-page.tab-subpage > ion-header > .toolbar.statusbar-padding:first-child ion-title,\n.ios ion-menu > .menu-inner > .toolbar.statusbar-padding:first-child ion-segment,\n.ios ion-menu > .menu-inner > .toolbar.statusbar-padding:first-child ion-title,\n.ios ion-menu > .menu-inner > ion-header > .toolbar.statusbar-padding:first-child ion-segment,\n.ios ion-menu > .menu-inner > ion-header > .toolbar.statusbar-padding:first-child ion-title {\n  padding-top: 20px !important;\n  height: 64px !important;\n  min-height: 64px !important;\n}\n\n@media only screen and (max-width: 767px) {\n  .ios .modal-wrapper > .ion-page > ion-header > .toolbar.statusbar-padding:first-child {\n    padding-top: 24px !important;\n    min-height: 64px !important;\n  }\n\n  .ios .modal-wrapper > .ion-page > ion-header > ion-content.statusbar-padding:first-child .scroll-content {\n    padding-top: 20px !important;\n  }\n\n  .ios .modal-wrapper > .ion-page > ion-header > ion-content.statusbar-padding:first-child[padding] .scroll-content,\n.ios .modal-wrapper > .ion-page > ion-header > ion-content.statusbar-padding:first-child[padding-top] .scroll-content {\n    padding-top: 36px !important;\n  }\n\n  .ios .modal-wrapper > .ion-page > ion-header > .toolbar.statusbar-padding:first-child ion-segment,\n.ios .modal-wrapper > .ion-page > ion-header > .toolbar.statusbar-padding:first-child ion-title {\n    padding-top: 20px !important;\n    height: 64px !important;\n    min-height: 64px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL2lwcm8lMjAyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkVBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQ0FBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtBQ0VGOztBRENBO0VBQ0UsbUJBQUE7QUNFRjs7QURDQTs7RUFFRSxrQkFBQTtBQ0VGOztBRENBO0VBQ0UsMkRBQUE7QUNFRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUNGRjs7QURLQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBRGFBO0VBQ0UsY0FBQTtBQ1ZGOztBRGFBO0VBQ0UsZ0JBQUE7QUNWRjs7QURhQTtFQUNFLHNCQUFBO0FDVkY7O0FEYUE7RUFDRSxtQkFBQTtBQ1ZGOztBRGFBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ1ZGOztBRGFBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDVkY7O0FEaUJBO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0FDZEY7O0FEZ0JBO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0FDYkY7O0FEZ0JBO0VBQ0Usa0JBQUE7QUNiRjs7QURnQkE7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQ2JGOztBRGdCQTtFQUNFLGtCQUFBO0FDYkY7O0FEZ0JBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUNkRjs7QURvQkE7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FDakJGOztBRG9CQTtFQUNFLFdBQUE7QUNqQkY7O0FEb0JBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ2pCQTs7QURvQkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNqQkY7O0FEb0JBO0VBQ0UsY0FBQTtBQ2pCRjs7QUR1QkE7Ozs7Ozs7RUFPRSw0QkFBQTtFQUNBLDJCQUFBO0FDcEJGOztBRHVCQTs7Ozs7OztFQU9FLDRCQUFBO0FDcEJGOztBRHVCQTs7Ozs7Ozs7Ozs7Ozs7RUFjRSw0QkFBQTtBQ3BCRjs7QUR1QkE7Ozs7Ozs7Ozs7Ozs7O0VBY0UsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FDcEJGOztBRHVCQTtFQUNFO0lBQ0UsNEJBQUE7SUFDQSwyQkFBQTtFQ3BCRjs7RURzQkE7SUFDRSw0QkFBQTtFQ25CRjs7RURxQkE7O0lBRUUsNEJBQUE7RUNsQkY7O0VEb0JBOztJQUVFLDRCQUFBO0lBQ0EsdUJBQUE7SUFDQSwyQkFBQTtFQ2pCRjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG5pb24tbWVudSBpb24tY29udGVudC5pb3Mge1xuICAtLXBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1lbmQ6IDhweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICBjb2xvcjogIzc1NzU3NTtcblxuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC8vIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICAvLyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICM2MTZlN2U7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgLy8gY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLy8gLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLnRhYnMtaW5uZXIge1xuICBjb250YWluOiB1bnNldCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogaW5pdGlhbCAhaW1wb3J0YW50O1xufVxuXG4ubWVudS1sYWJlbCBpbWd7XG4gIHdpZHRoOjIwcHg7XG59XG5cbi5tZW51LWxhYmVsIGlvbi1sYWJlbHtcbmZvbnQtc3R5bGU6IG5vcm1hbDtcbmZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG5mb250LXNpemU6IDE4LjE2ODlweDtcbmxpbmUtaGVpZ2h0OiAyN3B4O1xubGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG5jb2xvcjogIzZENkM2Qztcbm1hcmdpbi1sZWZ0OjEwcHhcbn1cblxuLnN1Yi1tZW51e1xuICBtYXJnaW4tbGVmdDogODBweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE2LjE2ODlweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICBjb2xvcjogIzZENkM2QztcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNlbGVjdGVkLXN1YntcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuXG5cbi5pb3MgaW9uLW5hdiA+IC5pb24tcGFnZSA+IC50b29sYmFyLnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkLFxuLmlvcyBpb24tbmF2ID4gLmlvbi1wYWdlID4gaW9uLWhlYWRlciA+IC50b29sYmFyLnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkLFxuLmlvcyBpb24tdGFiID4gLmlvbi1wYWdlID4gLnRvb2xiYXIuc3RhdHVzYmFyLXBhZGRpbmc6Zmlyc3QtY2hpbGQsXG4uaW9zIGlvbi10YWIgPiAuaW9uLXBhZ2UgPiBpb24taGVhZGVyID4gLnRvb2xiYXIuc3RhdHVzYmFyLXBhZGRpbmc6Zmlyc3QtY2hpbGQsXG4uaW9zIGlvbi10YWJzID4gLmlvbi1wYWdlLnRhYi1zdWJwYWdlID4gaW9uLWhlYWRlciA+IC50b29sYmFyLnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkLFxuLmlvcyBpb24tbWVudSA+IC5tZW51LWlubmVyID4gLnRvb2xiYXIuc3RhdHVzYmFyLXBhZGRpbmc6Zmlyc3QtY2hpbGQsXG4uaW9zIC5tZW51LWNvbnRlbnQgIC5pb24tcGFnZSBpb24taGVhZGVyID4gLnRvb2xiYXIuc3RhdHVzYmFyLXBhZGRpbmc6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLXRvcDogY2FsYygyMHB4ICsgNHB4KSAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiBjYWxjKDQ0cHggKyAyMHB4KSAhaW1wb3J0YW50O1xufVxuXG4uaW9zIGlvbi1uYXYgPiAuaW9uLXBhZ2UgPiBpb24tY29udGVudC5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZCAuc2Nyb2xsLWNvbnRlbnQsXG4uaW9zIGlvbi1uYXYgPiAuaW9uLXBhZ2UgPiBpb24taGVhZGVyID4gaW9uLWNvbnRlbnQuc3RhdHVzYmFyLXBhZGRpbmc6Zmlyc3QtY2hpbGQgLnNjcm9sbC1jb250ZW50LFxuLmlvcyBpb24tdGFiID4gLmlvbi1wYWdlID4gaW9uLWNvbnRlbnQuc3RhdHVzYmFyLXBhZGRpbmc6Zmlyc3QtY2hpbGQgLnNjcm9sbC1jb250ZW50LFxuLmlvcyBpb24tdGFiID4gLmlvbi1wYWdlID4gaW9uLWhlYWRlciA+IGlvbi1jb250ZW50LnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkIC5zY3JvbGwtY29udGVudCxcbi5pb3MgaW9uLXRhYnMgPiAuaW9uLXBhZ2UudGFiLXN1YnBhZ2UgPiBpb24taGVhZGVyID4gaW9uLWNvbnRlbnQuc3RhdHVzYmFyLXBhZGRpbmc6Zmlyc3QtY2hpbGQgLnNjcm9sbC1jb250ZW50LFxuLmlvcyBpb24tbWVudSA+IC5tZW51LWlubmVyID4gaW9uLWNvbnRlbnQuc3RhdHVzYmFyLXBhZGRpbmc6Zmlyc3QtY2hpbGQgLnNjcm9sbC1jb250ZW50LFxuLmlvcyBpb24tbWVudSA+IC5tZW51LWlubmVyID4gaW9uLWhlYWRlciA+IGlvbi1jb250ZW50LnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkIC5zY3JvbGwtY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pb3MgaW9uLW5hdiA+IC5pb24tcGFnZSA+IGlvbi1jb250ZW50LnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkW3BhZGRpbmddIC5zY3JvbGwtY29udGVudCxcbi5pb3MgaW9uLW5hdiA+IC5pb24tcGFnZSA+IGlvbi1jb250ZW50LnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkW3BhZGRpbmctdG9wXSAuc2Nyb2xsLWNvbnRlbnQsXG4uaW9zIGlvbi1uYXYgPiAuaW9uLXBhZ2UgPiBpb24taGVhZGVyID4gaW9uLWNvbnRlbnQuc3RhdHVzYmFyLXBhZGRpbmc6Zmlyc3QtY2hpbGRbcGFkZGluZ10gLnNjcm9sbC1jb250ZW50LFxuLmlvcyBpb24tbmF2ID4gLmlvbi1wYWdlID4gaW9uLWhlYWRlciA+IGlvbi1jb250ZW50LnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkW3BhZGRpbmctdG9wXSAuc2Nyb2xsLWNvbnRlbnQsXG4uaW9zIGlvbi10YWIgPiAuaW9uLXBhZ2UgPiBpb24tY29udGVudC5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZFtwYWRkaW5nXSAuc2Nyb2xsLWNvbnRlbnQsXG4uaW9zIGlvbi10YWIgPiAuaW9uLXBhZ2UgPiBpb24tY29udGVudC5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZFtwYWRkaW5nLXRvcF0gLnNjcm9sbC1jb250ZW50LFxuLmlvcyBpb24tdGFiID4gLmlvbi1wYWdlID4gaW9uLWhlYWRlciA+IGlvbi1jb250ZW50LnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkW3BhZGRpbmddIC5zY3JvbGwtY29udGVudCxcbi5pb3MgaW9uLXRhYiA+IC5pb24tcGFnZSA+IGlvbi1oZWFkZXIgPiBpb24tY29udGVudC5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZFtwYWRkaW5nLXRvcF0gLnNjcm9sbC1jb250ZW50LFxuLmlvcyBpb24tdGFicyA+IC5pb24tcGFnZS50YWItc3VicGFnZSA+IGlvbi1oZWFkZXIgPiBpb24tY29udGVudC5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZFtwYWRkaW5nXSAuc2Nyb2xsLWNvbnRlbnQsXG4uaW9zIGlvbi10YWJzID4gLmlvbi1wYWdlLnRhYi1zdWJwYWdlID4gaW9uLWhlYWRlciA+IGlvbi1jb250ZW50LnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkW3BhZGRpbmctdG9wXSAuc2Nyb2xsLWNvbnRlbnQsXG4uaW9zIGlvbi1tZW51ID4gLm1lbnUtaW5uZXIgPiBpb24tY29udGVudC5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZFtwYWRkaW5nXSAuc2Nyb2xsLWNvbnRlbnQsXG4uaW9zIGlvbi1tZW51ID4gLm1lbnUtaW5uZXIgPiBpb24tY29udGVudC5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZFtwYWRkaW5nLXRvcF0gLnNjcm9sbC1jb250ZW50LFxuLmlvcyBpb24tbWVudSA+IC5tZW51LWlubmVyID4gaW9uLWhlYWRlciA+IGlvbi1jb250ZW50LnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkW3BhZGRpbmddIC5zY3JvbGwtY29udGVudCxcbi5pb3MgaW9uLW1lbnUgPiAubWVudS1pbm5lciA+IGlvbi1oZWFkZXIgPiBpb24tY29udGVudC5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZFtwYWRkaW5nLXRvcF0gLnNjcm9sbC1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IGNhbGMoMTZweCArIDIwcHgpICFpbXBvcnRhbnQ7XG59XG5cbi5pb3MgaW9uLW5hdiA+IC5pb24tcGFnZSA+IC50b29sYmFyLnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkIGlvbi1zZWdtZW50LFxuLmlvcyBpb24tbmF2ID4gLmlvbi1wYWdlID4gLnRvb2xiYXIuc3RhdHVzYmFyLXBhZGRpbmc6Zmlyc3QtY2hpbGQgaW9uLXRpdGxlLFxuLmlvcyBpb24tbmF2ID4gLmlvbi1wYWdlID4gaW9uLWhlYWRlciA+IC50b29sYmFyLnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkIGlvbi1zZWdtZW50LFxuLmlvcyBpb24tbmF2ID4gLmlvbi1wYWdlID4gaW9uLWhlYWRlciA+IC50b29sYmFyLnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkIGlvbi10aXRsZSxcbi5pb3MgaW9uLXRhYiA+IC5pb24tcGFnZSA+IC50b29sYmFyLnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkIGlvbi1zZWdtZW50LFxuLmlvcyBpb24tdGFiID4gLmlvbi1wYWdlID4gLnRvb2xiYXIuc3RhdHVzYmFyLXBhZGRpbmc6Zmlyc3QtY2hpbGQgaW9uLXRpdGxlLFxuLmlvcyBpb24tdGFiID4gLmlvbi1wYWdlID4gaW9uLWhlYWRlciA+IC50b29sYmFyLnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkIGlvbi1zZWdtZW50LFxuLmlvcyBpb24tdGFiID4gLmlvbi1wYWdlID4gaW9uLWhlYWRlciA+IC50b29sYmFyLnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkIGlvbi10aXRsZSxcbi5pb3MgaW9uLXRhYnMgPiAuaW9uLXBhZ2UudGFiLXN1YnBhZ2UgPiBpb24taGVhZGVyID4gLnRvb2xiYXIuc3RhdHVzYmFyLXBhZGRpbmc6Zmlyc3QtY2hpbGQgaW9uLXNlZ21lbnQsXG4uaW9zIGlvbi10YWJzID4gLmlvbi1wYWdlLnRhYi1zdWJwYWdlID4gaW9uLWhlYWRlciA+IC50b29sYmFyLnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkIGlvbi10aXRsZSxcbi5pb3MgaW9uLW1lbnUgPiAubWVudS1pbm5lciA+IC50b29sYmFyLnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkIGlvbi1zZWdtZW50LFxuLmlvcyBpb24tbWVudSA+IC5tZW51LWlubmVyID4gLnRvb2xiYXIuc3RhdHVzYmFyLXBhZGRpbmc6Zmlyc3QtY2hpbGQgaW9uLXRpdGxlLFxuLmlvcyBpb24tbWVudSA+IC5tZW51LWlubmVyID4gaW9uLWhlYWRlciA+IC50b29sYmFyLnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkIGlvbi1zZWdtZW50LFxuLmlvcyBpb24tbWVudSA+IC5tZW51LWlubmVyID4gaW9uLWhlYWRlciA+IC50b29sYmFyLnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkIGlvbi10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogY2FsYyg0NHB4ICsgMjBweCkgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogY2FsYyg0NHB4ICsgMjBweCkgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuaW9zIC5tb2RhbC13cmFwcGVyID4gLmlvbi1wYWdlID4gaW9uLWhlYWRlciA+IC50b29sYmFyLnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXRvcDogY2FsYygyMHB4ICsgNHB4KSAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoNDRweCArIDIwcHgpICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmlvcyAubW9kYWwtd3JhcHBlciA+IC5pb24tcGFnZSA+IGlvbi1oZWFkZXIgPiBpb24tY29udGVudC5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZCAuc2Nyb2xsLWNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmlvcyAubW9kYWwtd3JhcHBlciA+IC5pb24tcGFnZSA+IGlvbi1oZWFkZXIgPiBpb24tY29udGVudC5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZFtwYWRkaW5nXSAuc2Nyb2xsLWNvbnRlbnQsXG4gIC5pb3MgLm1vZGFsLXdyYXBwZXIgPiAuaW9uLXBhZ2UgPiBpb24taGVhZGVyID4gaW9uLWNvbnRlbnQuc3RhdHVzYmFyLXBhZGRpbmc6Zmlyc3QtY2hpbGRbcGFkZGluZy10b3BdIC5zY3JvbGwtY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6IGNhbGMoMTZweCArIDIwcHgpICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmlvcyAubW9kYWwtd3JhcHBlciA+IC5pb24tcGFnZSA+IGlvbi1oZWFkZXIgPiAudG9vbGJhci5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZCBpb24tc2VnbWVudCxcbiAgLmlvcyAubW9kYWwtd3JhcHBlciA+IC5pb24tcGFnZSA+IGlvbi1oZWFkZXIgPiAudG9vbGJhci5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZCBpb24tdGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBjYWxjKDQ0cHggKyAyMHB4KSAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoNDRweCArIDIwcHgpICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuXG4iLCJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUgaW9uLWNvbnRlbnQuaW9zIHtcbiAgLS1wYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1lbmQ6IDhweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBjb2xvcjogIzc1NzU3NTtcbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbi50YWJzLWlubmVyIHtcbiAgY29udGFpbjogdW5zZXQgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGluaXRpYWwgIWltcG9ydGFudDtcbn1cblxuLm1lbnUtbGFiZWwgaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5tZW51LWxhYmVsIGlvbi1sYWJlbCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxOC4xNjg5cHg7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgY29sb3I6ICM2RDZDNkM7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uc3ViLW1lbnUge1xuICBtYXJnaW4tbGVmdDogODBweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE2LjE2ODlweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICBjb2xvcjogIzZENkM2QztcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNlbGVjdGVkLXN1YiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW9zIGlvbi1uYXYgPiAuaW9uLXBhZ2UgPiAudG9vbGJhci5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZCxcbi5pb3MgaW9uLW5hdiA+IC5pb24tcGFnZSA+IGlvbi1oZWFkZXIgPiAudG9vbGJhci5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZCxcbi5pb3MgaW9uLXRhYiA+IC5pb24tcGFnZSA+IC50b29sYmFyLnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkLFxuLmlvcyBpb24tdGFiID4gLmlvbi1wYWdlID4gaW9uLWhlYWRlciA+IC50b29sYmFyLnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkLFxuLmlvcyBpb24tdGFicyA+IC5pb24tcGFnZS50YWItc3VicGFnZSA+IGlvbi1oZWFkZXIgPiAudG9vbGJhci5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZCxcbi5pb3MgaW9uLW1lbnUgPiAubWVudS1pbm5lciA+IC50b29sYmFyLnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkLFxuLmlvcyAubWVudS1jb250ZW50IC5pb24tcGFnZSBpb24taGVhZGVyID4gLnRvb2xiYXIuc3RhdHVzYmFyLXBhZGRpbmc6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLXRvcDogMjRweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiA2NHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pb3MgaW9uLW5hdiA+IC5pb24tcGFnZSA+IGlvbi1jb250ZW50LnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkIC5zY3JvbGwtY29udGVudCxcbi5pb3MgaW9uLW5hdiA+IC5pb24tcGFnZSA+IGlvbi1oZWFkZXIgPiBpb24tY29udGVudC5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZCAuc2Nyb2xsLWNvbnRlbnQsXG4uaW9zIGlvbi10YWIgPiAuaW9uLXBhZ2UgPiBpb24tY29udGVudC5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZCAuc2Nyb2xsLWNvbnRlbnQsXG4uaW9zIGlvbi10YWIgPiAuaW9uLXBhZ2UgPiBpb24taGVhZGVyID4gaW9uLWNvbnRlbnQuc3RhdHVzYmFyLXBhZGRpbmc6Zmlyc3QtY2hpbGQgLnNjcm9sbC1jb250ZW50LFxuLmlvcyBpb24tdGFicyA+IC5pb24tcGFnZS50YWItc3VicGFnZSA+IGlvbi1oZWFkZXIgPiBpb24tY29udGVudC5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZCAuc2Nyb2xsLWNvbnRlbnQsXG4uaW9zIGlvbi1tZW51ID4gLm1lbnUtaW5uZXIgPiBpb24tY29udGVudC5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZCAuc2Nyb2xsLWNvbnRlbnQsXG4uaW9zIGlvbi1tZW51ID4gLm1lbnUtaW5uZXIgPiBpb24taGVhZGVyID4gaW9uLWNvbnRlbnQuc3RhdHVzYmFyLXBhZGRpbmc6Zmlyc3QtY2hpbGQgLnNjcm9sbC1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmlvcyBpb24tbmF2ID4gLmlvbi1wYWdlID4gaW9uLWNvbnRlbnQuc3RhdHVzYmFyLXBhZGRpbmc6Zmlyc3QtY2hpbGRbcGFkZGluZ10gLnNjcm9sbC1jb250ZW50LFxuLmlvcyBpb24tbmF2ID4gLmlvbi1wYWdlID4gaW9uLWNvbnRlbnQuc3RhdHVzYmFyLXBhZGRpbmc6Zmlyc3QtY2hpbGRbcGFkZGluZy10b3BdIC5zY3JvbGwtY29udGVudCxcbi5pb3MgaW9uLW5hdiA+IC5pb24tcGFnZSA+IGlvbi1oZWFkZXIgPiBpb24tY29udGVudC5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZFtwYWRkaW5nXSAuc2Nyb2xsLWNvbnRlbnQsXG4uaW9zIGlvbi1uYXYgPiAuaW9uLXBhZ2UgPiBpb24taGVhZGVyID4gaW9uLWNvbnRlbnQuc3RhdHVzYmFyLXBhZGRpbmc6Zmlyc3QtY2hpbGRbcGFkZGluZy10b3BdIC5zY3JvbGwtY29udGVudCxcbi5pb3MgaW9uLXRhYiA+IC5pb24tcGFnZSA+IGlvbi1jb250ZW50LnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkW3BhZGRpbmddIC5zY3JvbGwtY29udGVudCxcbi5pb3MgaW9uLXRhYiA+IC5pb24tcGFnZSA+IGlvbi1jb250ZW50LnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkW3BhZGRpbmctdG9wXSAuc2Nyb2xsLWNvbnRlbnQsXG4uaW9zIGlvbi10YWIgPiAuaW9uLXBhZ2UgPiBpb24taGVhZGVyID4gaW9uLWNvbnRlbnQuc3RhdHVzYmFyLXBhZGRpbmc6Zmlyc3QtY2hpbGRbcGFkZGluZ10gLnNjcm9sbC1jb250ZW50LFxuLmlvcyBpb24tdGFiID4gLmlvbi1wYWdlID4gaW9uLWhlYWRlciA+IGlvbi1jb250ZW50LnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkW3BhZGRpbmctdG9wXSAuc2Nyb2xsLWNvbnRlbnQsXG4uaW9zIGlvbi10YWJzID4gLmlvbi1wYWdlLnRhYi1zdWJwYWdlID4gaW9uLWhlYWRlciA+IGlvbi1jb250ZW50LnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkW3BhZGRpbmddIC5zY3JvbGwtY29udGVudCxcbi5pb3MgaW9uLXRhYnMgPiAuaW9uLXBhZ2UudGFiLXN1YnBhZ2UgPiBpb24taGVhZGVyID4gaW9uLWNvbnRlbnQuc3RhdHVzYmFyLXBhZGRpbmc6Zmlyc3QtY2hpbGRbcGFkZGluZy10b3BdIC5zY3JvbGwtY29udGVudCxcbi5pb3MgaW9uLW1lbnUgPiAubWVudS1pbm5lciA+IGlvbi1jb250ZW50LnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkW3BhZGRpbmddIC5zY3JvbGwtY29udGVudCxcbi5pb3MgaW9uLW1lbnUgPiAubWVudS1pbm5lciA+IGlvbi1jb250ZW50LnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkW3BhZGRpbmctdG9wXSAuc2Nyb2xsLWNvbnRlbnQsXG4uaW9zIGlvbi1tZW51ID4gLm1lbnUtaW5uZXIgPiBpb24taGVhZGVyID4gaW9uLWNvbnRlbnQuc3RhdHVzYmFyLXBhZGRpbmc6Zmlyc3QtY2hpbGRbcGFkZGluZ10gLnNjcm9sbC1jb250ZW50LFxuLmlvcyBpb24tbWVudSA+IC5tZW51LWlubmVyID4gaW9uLWhlYWRlciA+IGlvbi1jb250ZW50LnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkW3BhZGRpbmctdG9wXSAuc2Nyb2xsLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMzZweCAhaW1wb3J0YW50O1xufVxuXG4uaW9zIGlvbi1uYXYgPiAuaW9uLXBhZ2UgPiAudG9vbGJhci5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZCBpb24tc2VnbWVudCxcbi5pb3MgaW9uLW5hdiA+IC5pb24tcGFnZSA+IC50b29sYmFyLnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkIGlvbi10aXRsZSxcbi5pb3MgaW9uLW5hdiA+IC5pb24tcGFnZSA+IGlvbi1oZWFkZXIgPiAudG9vbGJhci5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZCBpb24tc2VnbWVudCxcbi5pb3MgaW9uLW5hdiA+IC5pb24tcGFnZSA+IGlvbi1oZWFkZXIgPiAudG9vbGJhci5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZCBpb24tdGl0bGUsXG4uaW9zIGlvbi10YWIgPiAuaW9uLXBhZ2UgPiAudG9vbGJhci5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZCBpb24tc2VnbWVudCxcbi5pb3MgaW9uLXRhYiA+IC5pb24tcGFnZSA+IC50b29sYmFyLnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkIGlvbi10aXRsZSxcbi5pb3MgaW9uLXRhYiA+IC5pb24tcGFnZSA+IGlvbi1oZWFkZXIgPiAudG9vbGJhci5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZCBpb24tc2VnbWVudCxcbi5pb3MgaW9uLXRhYiA+IC5pb24tcGFnZSA+IGlvbi1oZWFkZXIgPiAudG9vbGJhci5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZCBpb24tdGl0bGUsXG4uaW9zIGlvbi10YWJzID4gLmlvbi1wYWdlLnRhYi1zdWJwYWdlID4gaW9uLWhlYWRlciA+IC50b29sYmFyLnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkIGlvbi1zZWdtZW50LFxuLmlvcyBpb24tdGFicyA+IC5pb24tcGFnZS50YWItc3VicGFnZSA+IGlvbi1oZWFkZXIgPiAudG9vbGJhci5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZCBpb24tdGl0bGUsXG4uaW9zIGlvbi1tZW51ID4gLm1lbnUtaW5uZXIgPiAudG9vbGJhci5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZCBpb24tc2VnbWVudCxcbi5pb3MgaW9uLW1lbnUgPiAubWVudS1pbm5lciA+IC50b29sYmFyLnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkIGlvbi10aXRsZSxcbi5pb3MgaW9uLW1lbnUgPiAubWVudS1pbm5lciA+IGlvbi1oZWFkZXIgPiAudG9vbGJhci5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZCBpb24tc2VnbWVudCxcbi5pb3MgaW9uLW1lbnUgPiAubWVudS1pbm5lciA+IGlvbi1oZWFkZXIgPiAudG9vbGJhci5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZCBpb24tdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDY0cHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogNjRweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5pb3MgLm1vZGFsLXdyYXBwZXIgPiAuaW9uLXBhZ2UgPiBpb24taGVhZGVyID4gLnRvb2xiYXIuc3RhdHVzYmFyLXBhZGRpbmc6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogNjRweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvcyAubW9kYWwtd3JhcHBlciA+IC5pb24tcGFnZSA+IGlvbi1oZWFkZXIgPiBpb24tY29udGVudC5zdGF0dXNiYXItcGFkZGluZzpmaXJzdC1jaGlsZCAuc2Nyb2xsLWNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9zIC5tb2RhbC13cmFwcGVyID4gLmlvbi1wYWdlID4gaW9uLWhlYWRlciA+IGlvbi1jb250ZW50LnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkW3BhZGRpbmddIC5zY3JvbGwtY29udGVudCxcbi5pb3MgLm1vZGFsLXdyYXBwZXIgPiAuaW9uLXBhZ2UgPiBpb24taGVhZGVyID4gaW9uLWNvbnRlbnQuc3RhdHVzYmFyLXBhZGRpbmc6Zmlyc3QtY2hpbGRbcGFkZGluZy10b3BdIC5zY3JvbGwtY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6IDM2cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb3MgLm1vZGFsLXdyYXBwZXIgPiAuaW9uLXBhZ2UgPiBpb24taGVhZGVyID4gLnRvb2xiYXIuc3RhdHVzYmFyLXBhZGRpbmc6Zmlyc3QtY2hpbGQgaW9uLXNlZ21lbnQsXG4uaW9zIC5tb2RhbC13cmFwcGVyID4gLmlvbi1wYWdlID4gaW9uLWhlYWRlciA+IC50b29sYmFyLnN0YXR1c2Jhci1wYWRkaW5nOmZpcnN0LWNoaWxkIGlvbi10aXRsZSB7XG4gICAgcGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDY0cHggIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiA2NHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 52476:
/*!********************************************************************!*\
  !*** ./src/app/components/header/header.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".call-icon {\n  margin-left: 10px;\n}\n\nion-icon {\n  font-size: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2lwcm8lMjAyL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FsbC1pY29ue1xuICAgIG1hcmdpbi1sZWZ0OjEwcHhcbn1cblxuaW9uLWljb257XG4gICAgZm9udC1zaXplOjI4cHg7XG59IiwiLmNhbGwtaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn0iXX0= */";

/***/ }),

/***/ 13711:
/*!***********************************************************************!*\
  !*** ./src/app/components/user-modal/user-modal.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-radio.ios {\n  border: solid 1px #ccc !important;\n  border-radius: 7px !important;\n  height: 15px !important;\n}\n\nion-title {\n  font-size: 14px;\n}\n\nion-toolbar {\n  --min-height: 42px;\n  padding: 0px;\n}\n\n.ion-content-iframe {\n  --padding-end: 0px !important;\n  --padding-start: 0px !important;\n  --padding-bottom: 0px !important;\n  --padding-top: 60px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbW9kYWwucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vaXBybyUyMDIvc3JjL2FwcC9jb21wb25lbnRzL3VzZXItbW9kYWwvdXNlci1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0VKOztBRENBO0VBQ0ksNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7QUNFSiIsImZpbGUiOiJ1c2VyLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1yYWRpby5pb3N7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYyAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5pb24tdGl0bGV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuaW9uLXRvb2xiYXJ7XG4gICAgLS1taW4taGVpZ2h0OiA0MnB4O1xuICAgIHBhZGRpbmc6MHB4XG59XG5cbi5pb24tY29udGVudC1pZnJhbWV7XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctdG9wOiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbiIsImlvbi1yYWRpby5pb3Mge1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tbWluLWhlaWdodDogNDJweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uaW9uLWNvbnRlbnQtaWZyYW1lIHtcbiAgLS1wYWRkaW5nLWVuZDogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctdG9wOiA2MHB4ICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 76221:
/*!******************************************************************!*\
  !*** ./src/app/pages/my-sponsor/my-sponsor.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1zcG9uc29yLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 22602:
/*!******************************************************************!*\
  !*** ./src/app/pages/setdicount/setdicount.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-select {\n  border: solid 1px #ccc;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldGRpY291bnQucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vaXBybyUyMDIvc3JjL2FwcC9wYWdlcy9zZXRkaWNvdW50L3NldGRpY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNldGRpY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlbGVjdCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59IiwiaW9uLXNlbGVjdCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app class=\"ios\">\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu menuId=\"first\" contentId=\"main-content\">\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n          <div  *ngFor=\"let p of utility.appPages; let i = index\">\n           \n\n            <ion-menu-toggle auto-hide=\"false\">\n            <ion-item class=\"menu-label\" *ngIf=\"p.url != '' || p.menu == 'menu2' || p.menu == 'menu21'\" routerDirection=\"root\" [routerLink]=\"[p.url]\"\n              (click)=\"menu(p);selectedMenu = p.menu\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\n              <ion-icon name=\"{{p.icon}}\"></ion-icon>\n              <!-- <img src={{p.icon}}> -->\n              <ion-label>{{'MENU.'+p.menu | translate}}</ion-label>\n             \n            </ion-item>\n          </ion-menu-toggle>\n\n            <ion-item class=\"menu-label\" *ngIf=\"p.url == '' && p.menu != 'menu2' && p.menu != 'menu21'\" routerDirection=\"root\" (click)=\"menu(p);\" lines=\"none\"\n              detail=\"false\" routerLinkActive=\"selected\">\n              <ion-icon name=\"{{p.icon}}\" (click)=\"selectedMenu = p.menu\"></ion-icon>\n              <!-- <img src={{p.icon}}> -->\n              <ion-label (click)=\"selectedMenu = p.menu\">{{'MENU.'+p.menu | translate}}</ion-label>\n              <ion-icon style=\"font-size: 16px !important;\" name=\"caret-up-outline\" slot=\"end\" *ngIf=\"selectedMenu == p.menu\" (click)=\"selectedMenu = ''\"></ion-icon>\n              <ion-icon style=\"font-size: 16px !important;\" name=\"caret-down-outline\" slot=\"end\" *ngIf=\"selectedMenu != p.menu\"  (click)=\"selectedMenu = p.menu\"></ion-icon>\n            </ion-item>\n            <ion-menu-toggle auto-hide=\"false\" [ngClass]=\" {'selected-sub': selectedMenu == p.menu}\" class=\"sub-menu\"  *ngIf=\"p.subPages != null\">\n              <p auto-hide=\"false\" *ngFor=\"let subP of p.subPages\"  (click)=\"menu(subP)\">\n                <span  *ngIf=\"subP.url != ''\"  id=\"{{subP.id}}\" \n                routerDirection=\"root\"  [routerLink]=\"[subP.url]\">\n\n                 {{'MENU.'+subP.menu | translate}}\n\n                </span>\n                <span  *ngIf=\"subP.url == ''\"  >\n                  {{'MENU.'+subP.menu | translate}}\n                <!-- <a  *ngIf=\"subP.menu == 'menu17'\"  [href]=\"utility.pdfLink[2].link\">{{'MENU.'+subP.menu | translate}} </a>\n\n                  <span *ngIf=\"subP.menu != 'menu17'\" >{{'MENU.'+subP.menu | translate}}</span> -->\n\n                </span>\n              </p>\n            </ion-menu-toggle>\n          </div>\n          <p *ngIf=\"AppVersion\" style=\"    text-align: center;\n          color: #959da3;\">Version:{{AppVersion}}</p>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n\n\n\n\n    <ion-router-outlet id=\"main-content\" class=\"ios\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>";

/***/ }),

/***/ 2011:
/*!********************************************************************!*\
  !*** ./src/app/components/header/header.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  \n  <ion-toolbar class=\"ion-toolbar\" mode=\"md\">\n    <ion-buttons slot=\"start\" *ngIf=\"headerBack\">\n      <img (click)=\"back()\" class=\"back-icon\" src=\"assets/img/back.png\">\n    </ion-buttons>\n    <ion-title  *ngIf=\"headerTitle != 'pdf'\">{{headerTitle}}</ion-title>\n  \n      <ion-buttons slot=\"end\" (click)=\"utilSer.goNext('/tabs/notification')\" *ngIf=\"headerTitle != 'pdf'\">\n         \n        <ion-icon color=\"danger\" name=\"notifications-outline\"></ion-icon>\n          <ion-badge color=\"danger\" *ngIf=\"utilSer.newNotification > 0\" style=\"    margin-top: -22px;\n            margin-left: -10px;\">{{utilSer.newNotification}}</ion-badge>\n      </ion-buttons>\n      <ion-buttons slot=\"end\" *ngIf=\"headerTitle != 'pdf'\">\n        <ion-icon (click)=\"openPopup()\" color=\"danger\" name=\"call-outline\" class=\"call-icon\"></ion-icon>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>";

/***/ }),

/***/ 34370:
/*!***********************************************************************!*\
  !*** ./src/app/components/user-modal/user-modal.page.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header *ngIf=\"title != 'question-complete' && title !='analysis' && title != 'pdf'\">\n  <ion-toolbar>\n    <ion-title *ngIf=\"title == 'dashboard'\">{{'MODALS.DASHBOARD.title' | translate}}</ion-title>\n    <ion-title *ngIf=\"title == 'language'\">{{'MODALS.LANGUAGE.title' | translate}}</ion-title>\n    <ion-title *ngIf=\"title == 'member-place'\">{{'MODALS.PLACEMEMBER.title' | translate}}</ion-title>\n    <ion-title *ngIf=\"title == 'reconfirmation'\">{{'MODALS.RECONFIRM.title' | translate}}</ion-title>\n    <ion-title *ngIf=\"title == 'search'\">{{'MODALS.USERSEARCH.title' | translate}}</ion-title>\n    <ion-title *ngIf=\"title == 'error'\"> {{'MODALS.ERROR.title' | translate}}</ion-title>\n    <ion-title *ngIf=\"title == 'payment'\"> {{'MODALS.PAYMENT.title' | translate}}</ion-title>\n    <!-- <ion-title *ngIf=\"title == 'pdf'\" (click)=\"closeModal()\"> Done</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n<app-header  *ngIf=\"title == 'pdf'\" [headerTitle]=\"'pdf'\" [headerBack]=true></app-header>\n\n<ion-content *ngIf=\"title == 'pdf'\" class=\"ion-content-iframe\">\n  <div *ngIf=\"title == 'pdf'\" style=\"height: 100%;\">\n    <iframe class=\"webPage\" style=\"height:100%;\" frameborder=\"0\" name=\"eventsPage\" [src]=\"utiSer.pdf\" zooming=\"true\" >\n    </iframe>\n\n  </div>\n</ion-content>\n<ion-content *ngIf=\"title != 'pdf'\">\n  <div></div>\n\n\n  <ion-list *ngIf=\"title == 'error'\" lines=\"none\">\n    <ion-item (click)=\"changeLan('en')\" lines=\"none\" style=\"text-align:'center'\">\n      {{'MODALS.ERROR.ERROR_MSG' | translate}}\n    </ion-item>\n\n  </ion-list>\n  <ion-list *ngIf=\"title == 'question-complete'\" lines=\"none\">\n    <ion-item lines=\"none\" style=\"text-align:'center'\">\n      <p><strong>{{'QUESTIONNAIRE.congratulations' | translate}} <br> {{'QUESTIONNAIRE.quetsionComplete1' |\n          translate}}</strong><br>\n        {{'QUESTIONNAIRE.quetsionComplete2' | translate}}\n        <br>{{'QUESTIONNAIRE.quetsionComplete3' | translate}}\n        <br>{{'QUESTIONNAIRE.quetsionComplete4' | translate}}\n      </p>\n    </ion-item>\n\n  </ion-list>\n  <ion-list *ngIf=\"title == 'analysis'\" lines=\"none\">\n    <ion-item lines=\"none\" style=\"text-align:'center'\">\n      <p> {{'QUESTIONNAIRE.QR1' | translate}} <br>\n        {{'QUESTIONNAIRE.QR2' | translate}}<br>\n\n      </p>\n\n\n    </ion-item>\n    <ion-item lines=\"none\" style=\"text-align:'center'\">\n      <img style=\"width: 150px;\n    height: 150px;\n    border: solid #000 1px;\n    text-align: center;\n  \n    background: #c2b7b730;\n    margin-left:20%\" [src]=\"QRcode?.qrcode\" alt=\"QR code\" />\n      <!--  src=\"assets/img/logo.png\"-->\n\n    </ion-item>\n\n  </ion-list>\n  <ion-list *ngIf=\"title == 'language'\" lines=\"none\">\n    <ion-radio-group [value]=\"utiSer.deviceLang\">\n      <ion-item (click)=\"changeLan('en')\" lines=\"none\">\n        <ion-label> {{'MODALS.LANGUAGE.ENGLISH' | translate}}</ion-label>\n        <ion-radio slot=\"start\" value=\"en\" checked=\"utiSer.deviceLang =='en'\"></ion-radio>\n      </ion-item>\n      <ion-item (click)=\"utiSer.changeLan('de')\" lines=\"none\">\n        <ion-label> {{'MODALS.LANGUAGE.GERMANY' | translate}}</ion-label>\n        <ion-radio slot=\"start\" value=\"de\" checked=\"utiSer.deviceLang =='de'\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n\n  <ion-list *ngIf=\"title == 'payment'\" lines=\"none\">\n    <ion-radio-group [value]=\"utiSer.paymnetType\">\n      <ion-item (click)=\"utiSer.paymnetType ='one'\" lines=\"none\">\n        <ion-label> {{'MODALS.PAYMENT.ONETIME' | translate}}</ion-label>\n        <ion-radio slot=\"start\" value=\"one\" checked=\"utiSer.paymnetType =='one'\"></ion-radio>\n      </ion-item>\n      <ion-item (click)=\"utiSer.paymnetType ='emi'\" lines=\"none\">\n        <ion-label> {{'MODALS.PAYMENT.EMI' | translate}}</ion-label>\n        <ion-radio slot=\"start\" value=\"emi\" checked=\"utiSer.paymnetType =='emi'\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n\n  <!-- change dashboard -->\n\n  <ion-list *ngIf=\"title == 'dashboard'\">\n    <ion-radio-group [value]=\"utiSer.defaultDash\">\n      <ion-item (click)=\"utiSer.defaultDashChange('Partner')\" lines=\"none\">\n        <ion-label>{{'MODALS.DASHBOARD.PROSPECT' | translate}}</ion-label>\n        <ion-radio slot=\"start\" value=\"Partner\" checked=\"utiSer.defaultDash=='Partner'\"></ion-radio>\n      </ion-item>\n\n      <ion-item (click)=\"utiSer.defaultDashChange('Member')\" lines=\"none\">\n        <ion-label>{{'MODALS.DASHBOARD.MEMBER' | translate}} </ion-label>\n        <ion-radio slot=\"start\" value=\"Member\" checked=\"utiSer.defaultDash=='Member'\"></ion-radio>\n      </ion-item>\n\n\n    </ion-radio-group>\n  </ion-list>\n\n  <ion-list *ngIf=\"title == 'member-place'\">\n    <p *ngIf=\"memberToplace?.data?.users.length >0 \" style=\"padding-left: 30px;font-weight: 700;\">\n      {{'DASHBAORD.member-placement.user-to-place' | translate}}:</p>\n    <ion-radio-group [value]=\"selectedMember\">\n      <ion-item *ngFor=\"let memPlace of memberToplace?.data?.users; let i = index\" (click)=\"selectedMember = memPlace\">\n        <ion-label>{{memPlace.firstName != '' ?memPlace.firstName:'--'}} {{memPlace.lastName != ''\n          ?memPlace.lastName:'--'}} </ion-label>\n        <ion-label slot=\"end\"> {{'DASHBAORD.member-placement.ID' | translate}}: {{memPlace.userId != ''\n          ?memPlace.userId:'--'}} </ion-label>\n        <ion-radio slot=\"start\" [value]=\"memPlace.userId\"></ion-radio>\n      </ion-item>\n\n      <ion-item *ngIf=\"memberToplace?.data?.users.length <= 0 \">\n        <ion-label>{{'MODALS.PLACEMEMBER.NO_USER_ERROR' | translate}} </ion-label>\n\n      </ion-item>\n    </ion-radio-group>\n    <p class=\"error\" *ngIf=\"erroMsg != undefined \" style=\"    color: red;\n    padding-left: 30px;\">{{erroMsg}}</p>\n  </ion-list>\n\n  <ion-list *ngIf=\"title == 'reconfirmation'\" lines=\"none\">\n    <ion-item lines=\"none\" style=\"text-align: center;\">\n      <ion-label>{{'MODALS.RECONFIRM.RECONFIRM_MSG' | translate}} <br>{{'MODALS.RECONFIRM.NO_REPLACE' | translate}}\n      </ion-label>\n    </ion-item>\n\n  </ion-list>\n  <ion-list *ngIf=\"title == 'search'\" lines=\"none\">\n    <!-- <ion-item lines=\"none\"> -->\n    <ion-searchbar (keyup.enter)=\"getPlacementTree(searchItem)\" showCancelButton=\"never\" [(ngModel)]=\"searchItem\"\n      placeholder=\"{{'MODALS.USERSEARCH.SEARCH_PALCEHOLDER' | translate}} \">\n    </ion-searchbar>\n    <!-- </ion-item> -->\n\n  </ion-list>\n\n\n\n  <div></div>\n  <div class=\"modal-close\">\n\n    <ion-button class=\"btn\" color=\"secondary\" (click)=\"closeModal()\"\n      *ngIf=\"title == 'reconfirmation' || title == 'member-place' \">\n      {{'MODALS.BUTTONS.CANCEL' | translate}}\n    </ion-button>\n    <ion-button class=\"btn\" color=\"secondary\" (click)=\"closeModal()\"\n      *ngIf=\"title == 'search' || title == 'language'  || title == 'dashboard' || title == 'analysis' \">\n      {{'MODALS.BUTTONS.CLOSE' | translate}}\n    </ion-button>\n    <ion-button class=\"btn\" color=\"secondary\" (click)=\"navigateHome()\" *ngIf=\"title == 'question-complete' \">\n      {{'MODALS.BUTTONS.CLOSE' | translate}}\n    </ion-button>\n    <ion-button class=\"btn\" color=\"danger\" (click)=\"placeMember()\" *ngIf=\"title == 'reconfirmation' \">\n      {{'MODALS.BUTTONS.YES' | translate}}\n    </ion-button>\n    <ion-button class=\"btn\" color=\"danger\" (click)=\"reconfirmation(selectedMember)\"\n      *ngIf=\"title == 'member-place' && memberToplace?.data?.users.length > 0 \">\n      {{'MODALS.BUTTONS.PLACE' | translate}}\n    </ion-button>\n    <ion-button class=\"btn\" color=\"danger\" (click)=\"getPlacementTree(searchItem)\" *ngIf=\"title == 'search'\">\n      {{'MODALS.BUTTONS.SEARCH' | translate}}\n    </ion-button>\n    <ion-button class=\"btn\" color=\"danger\" (click)=\"gohome()\" *ngIf=\"title == 'error'\">\n      {{'MODALS.BUTTONS.GO_HOME' | translate}}\n    </ion-button>\n\n    <ion-button class=\"btn\" color=\"danger\" (click)=\"gotoPayment()\" *ngIf=\"title == 'payment'\">\n      {{'MODALS.BUTTONS.CONTINUE' | translate}}\n    </ion-button>\n\n  </div>\n  <!-- </ion-card-content>\n  </ion-card> -->\n\n</ion-content>";

/***/ }),

/***/ 69538:
/*!******************************************************************!*\
  !*** ./src/app/pages/my-sponsor/my-sponsor.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{'MODALS.SPONSOR.title' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <!-- line -->\n  <div style=\"padding:10px\"> </div>\n\n  <ion-list lines=\"none\" class=\"\" style=\"margin:2px 0px\" *ngIf=\"title == 'sponsor'\">\n    <ion-item lines=\"none\" *ngIf=\"sponsors?.data?.firstName != ''\">\n      <ion-label>{{'MODALS.SPONSOR.NAME' | translate}} :</ion-label>\n      <span>{{sponsors?.data?.firstName}} {{sponsors?.data?.lastName}}</span>\n    </ion-item>\n    <ion-item (click)=\"sendmail(sponsors?.data?.email)\" *ngIf=\"sponsors?.data?.email != ''\">\n      <ion-label>{{'MODALS.SPONSOR.EMAIL' | translate}} :</ion-label>\n      <span>{{sponsors?.data?.email}}</span>\n    </ion-item>\n\n    <ion-item (click)=\"callNo(sponsors?.data?.phoneNo)\" *ngIf=\"sponsors?.data?.phoneNo != ''\">\n      <ion-label>{{'MODALS.SPONSOR.PHONE' | translate}} :</ion-label>\n      <span>{{sponsors?.data?.phoneNo}}</span>\n    </ion-item>\n\n  </ion-list>\n  <ion-list lines=\"none\" *ngIf=\"title=='header'\">\n\n    <ion-item *ngIf=\"sponsors?.data?.firstName != ''\">\n      <ion-label> {{sponsors?.data?.firstName}} {{sponsors?.data?.lastName}}</ion-label>\n    </ion-item>\n\n    <ion-item (click)=\"callNo(sponsors?.data?.phoneNo)\" lines=\"none\" *ngIf=\"sponsors?.data?.phoneNo != ''\">\n      <ion-label>{{sponsors?.data?.phoneNo}}</ion-label>\n      <ion-icon name=\"call-outline\" slot=\"end\"></ion-icon>\n\n\n    </ion-item>\n    <ion-item (click)=\"sendmail(sponsors?.data?.email)\" lines=\"none\" *ngIf=\"sponsors?.data?.email != ''\">\n\n      <ion-label>{{sponsors?.data?.email}}</ion-label>\n      <ion-icon name=\"mail-outline\" slot=\"end\"></ion-icon>\n\n\n    </ion-item>\n\n\n  </ion-list>\n  <div style=\"padding:10px\"> </div>\n  <!-- line -->\n  <div class=\"modal-close\">\n    <ion-button class=\"btn\" color=\"secondary\" (click)=\"utiSer.closeModal()\">\n      {{'MODALS.BUTTONS.CLOSE' | translate}}\n    </ion-button>\n\n  </div>\n\n</ion-content>";

/***/ }),

/***/ 19170:
/*!******************************************************************!*\
  !*** ./src/app/pages/setdicount/setdicount.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- <app-header  [headerTitle]=\"'DETAIL.discount' | translate\"  [headerBack]=false  ></app-header> -->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>{{'MODALS.DISCOUNT.title' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div style=\"padding:10px\"> </div>\n\n  <!-- <ion-card > -->\n    <!-- <ion-card-content class=\"\"> -->\n      <ion-list lines=\"none\"  class=\"title-border\" style=\"margin:2px 0px\" >\n        <ion-item>\n          <ion-label style=\"white-space: normal;\">{{'MODALS.DISCOUNT.LABEL' | translate}}:</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>{{'MODALS.DISCOUNT.PERCENTAGE' | translate}}:</ion-label>\n          <ion-select\n          [(ngModel)]=\"discount\"\n          (ionChange)=\"saveDsicount($event)\"\n        >\n        <ion-select-option value=\"0\" >0% </ion-select-option>\n        <ion-select-option value=\"5\">5%</ion-select-option>\n          <ion-select-option value=\"10\">10%</ion-select-option>\n          <ion-select-option value=\"15\">15%</ion-select-option>\n          <ion-select-option value=\"20\">20%</ion-select-option>\n          <ion-select-option value=\"25\">25%</ion-select-option>\n          <!-- <ion-select-option value=\"30\">30%</ion-select-option>\n          <ion-select-option value=\"35\">35%</ion-select-option>\n          <ion-select-option value=\"40\">40%</ion-select-option> -->\n        </ion-select>\n        </ion-item>\n       \n      </ion-list>\n      <div style=\"padding:10px\"> </div>\n      <div class=\"modal-close\">\n        <ion-button class=\"btn\" color=\"secondary\"  (click)=\"closeModal()\">\n          {{'MODALS.BUTTONS.CLOSE' | translate}}\n        </ion-button>\n      \n      </div>\n    <!-- </ion-card-content> -->\n  <!-- </ion-card> -->\n\n</ion-content>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map