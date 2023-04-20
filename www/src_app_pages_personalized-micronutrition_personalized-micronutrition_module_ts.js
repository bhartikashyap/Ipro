"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_personalized-micronutrition_personalized-micronutrition_module_ts"],{

/***/ 27190:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/device/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 7791:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/device/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Device": () => (/* binding */ Device)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 16594);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 27190);

const Device = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Device', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_device_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 22348)).then(m => new m.DeviceWeb()),
});




/***/ }),

/***/ 72888:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/personalized-micronutrition/personalized-micronutrition-routing.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalizedMicronutritionPageRoutingModule": () => (/* binding */ PersonalizedMicronutritionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _personalized_micronutrition_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personalized-micronutrition.page */ 8193);




const routes = [
    {
        path: '',
        component: _personalized_micronutrition_page__WEBPACK_IMPORTED_MODULE_0__.PersonalizedMicronutritionPage
    }
];
let PersonalizedMicronutritionPageRoutingModule = class PersonalizedMicronutritionPageRoutingModule {
};
PersonalizedMicronutritionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PersonalizedMicronutritionPageRoutingModule);



/***/ }),

/***/ 85522:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/personalized-micronutrition/personalized-micronutrition.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "PersonalizedMicronutritionPageModule": () => (/* binding */ PersonalizedMicronutritionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _personalized_micronutrition_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personalized-micronutrition-routing.module */ 72888);
/* harmony import */ var _personalized_micronutrition_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personalized-micronutrition.page */ 8193);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30610);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _components_share_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/share-component-module */ 99663);











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
let PersonalizedMicronutritionPageModule = class PersonalizedMicronutritionPageModule {
};
PersonalizedMicronutritionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _components_share_component_module__WEBPACK_IMPORTED_MODULE_2__.ShareComponentModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient],
                },
            }),
            _personalized_micronutrition_routing_module__WEBPACK_IMPORTED_MODULE_0__.PersonalizedMicronutritionPageRoutingModule,
        ],
        declarations: [_personalized_micronutrition_page__WEBPACK_IMPORTED_MODULE_1__.PersonalizedMicronutritionPage],
    })
], PersonalizedMicronutritionPageModule);



/***/ }),

/***/ 8193:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/personalized-micronutrition/personalized-micronutrition.page.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalizedMicronutritionPage": () => (/* binding */ PersonalizedMicronutritionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _personalized_micronutrition_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personalized-micronutrition.page.html?ngResource */ 84414);
/* harmony import */ var _personalized_micronutrition_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personalized-micronutrition.page.scss?ngResource */ 87526);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/device */ 7791);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var src_app_services_environment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/environment.service */ 98407);
/* harmony import */ var src_app_utility_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utility/message */ 34410);
/* harmony import */ var src_app_services_video_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/video.service */ 8472);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _check_zip_check_zip_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../check-zip/check-zip.page */ 56169);














let PersonalizedMicronutritionPage = class PersonalizedMicronutritionPage {
    constructor(router, cdr, platform, navController, utility, envr, videoSer, apiSer, translateService) {
        this.router = router;
        this.cdr = cdr;
        this.platform = platform;
        this.navController = navController;
        this.utility = utility;
        this.envr = envr;
        this.videoSer = videoSer;
        this.apiSer = apiSer;
        this.translateService = translateService;
        this.dashboardDatas = [];
        this.playerId = this.videoSer.videoType[1].id;
        this.width = 0;
        this.cpo = [];
        this.showUpdate = false;
        console.log(this);
    }
    ionViewWillEnter() {
        this.getDashboard();
        this.videoSer.videoId = 1;
        this.utility.setStorage(src_app_utility_message__WEBPACK_IMPORTED_MODULE_5__.session.SELECTED_PLAN, this.envr.plans.bodyAnlaysis);
    }
    getDashboard() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let loading = yield this.utility.presentLoading();
            this.apiSer
                .prospectDashboard()
                .then((res) => {
                loading.dismiss();
                let result = res;
                if (result.status) {
                    this.dashboardDatas = res.data;
                    console.log(this.dashboardDatas);
                }
                console.log(res);
            });
        });
    }
    ngAfterViewInit() {
        this.videoSer.initPlayer(this.videoSer.videoType[1].initPlayer, this.videoSer.videoType[1].id, this.cdr);
    }
    ngOnInit() {
        console.log(this.envr);
        this.platform.ready().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log("Width: " + this.platform.width());
            this.width = this.platform.width();
            this.info = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_2__.Device.getInfo();
            console.log(this.info);
            console.log("Height: " + this.platform.height());
        }));
    }
    saveVideoDur() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.videoSer.saveVideoDur(this.videoSer.videoId);
        });
    }
    ionViewDidLeave() {
        this.videoSer.pauseVideo();
    }
    openBookingAnalysis() {
        // this.utility.goNext("/tabs/check-zip");
        this.utility.openPopup(_check_zip_check_zip_page__WEBPACK_IMPORTED_MODULE_8__.CheckZipPage, "selectedTab", 'check-zip', true);
    }
};
PersonalizedMicronutritionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: src_app_services_environment_service__WEBPACK_IMPORTED_MODULE_4__.EnvironmentService },
    { type: src_app_services_video_service__WEBPACK_IMPORTED_MODULE_6__.VideoService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__.ApiService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService }
];
PersonalizedMicronutritionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: "app-personalized-micronutrition",
        template: _personalized_micronutrition_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_personalized_micronutrition_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PersonalizedMicronutritionPage);



/***/ }),

/***/ 87526:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/personalized-micronutrition/personalized-micronutrition.page.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "h1 {\n  margin-top: 30px;\n  font-size: 26px;\n  text-align: center;\n  margin-bottom: 30px;\n  color: #666666;\n}\n\n.register-img {\n  display: block;\n  background: url('register.jpeg');\n  width: 325px;\n  height: 170px;\n  border-radius: 15px;\n  margin: 30px auto 20px auto;\n  background-position: center;\n}\n\n.content-wrap {\n  padding: 20px;\n}\n\n.content-wrap p {\n  font-size: 18px;\n  text-align: left;\n  color: #000000;\n  margin: 0px;\n}\n\n.mt30 {\n  margin-top: 30px !important;\n}\n\n.mb30 {\n  margin-bottom: 30px !important;\n}\n\n#cincopa_1638196190170 div#inneriframe .mejs-video-left button {\n  color: transparent !important;\n}\n\n.mejs-inner .mejs-layers .mejs-overlay .mejs-video-left button {\n  color: transparent !important;\n}\n\n.mejs-video-jump-left > button {\n  color: transparent !important;\n}\n\np {\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmFsaXplZC1taWNyb251dHJpdGlvbi5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9pcHJvJTIwMi9zcmMvYXBwL3BhZ2VzL3BlcnNvbmFsaXplZC1taWNyb251dHJpdGlvbi9wZXJzb25hbGl6ZWQtbWljcm9udXRyaXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FDRUY7O0FEQ0E7RUFDRSxhQUFBO0FDRUY7O0FEREU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0dKOztBREFBO0VBQ0UsMkJBQUE7QUNHRjs7QUREQTtFQUNFLDhCQUFBO0FDSUY7O0FERkE7RUFDRSw2QkFBQTtBQ0tGOztBREZBO0VBQ0UsNkJBQUE7QUNLRjs7QURGQTtFQUNFLDZCQUFBO0FDS0Y7O0FESEE7RUFDRSxtQkFBQTtBQ01GIiwiZmlsZSI6InBlcnNvbmFsaXplZC1taWNyb251dHJpdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgY29sb3I6ICM2NjY2NjY7XHJcbn1cclxuLnJlZ2lzdGVyLWltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvcmVnaXN0ZXIuanBlZyk7XHJcbiAgd2lkdGg6IDMyNXB4O1xyXG4gIGhlaWdodDogMTcwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBtYXJnaW46IDMwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudC13cmFwIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgfVxyXG59XHJcbi5tdDMwIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1iMzAge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcclxufVxyXG4jY2luY29wYV8xNjM4MTk2MTkwMTcwIGRpdiNpbm5lcmlmcmFtZSAubWVqcy12aWRlby1sZWZ0IGJ1dHRvbiB7XHJcbiAgY29sb3I6dHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1lanMtaW5uZXIgLm1lanMtbGF5ZXJzIC5tZWpzLW92ZXJsYXkgLm1lanMtdmlkZW8tbGVmdCBidXR0b257XHJcbiAgY29sb3I6dHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuXHJcbn1cclxuLm1lanMtdmlkZW8tanVtcC1sZWZ0ID4gYnV0dG9uIHtcclxuICBjb2xvcjp0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbnB7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4gIiwiaDEge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LXNpemU6IDI2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgY29sb3I6ICM2NjY2NjY7XG59XG5cbi5yZWdpc3Rlci1pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvcmVnaXN0ZXIuanBlZyk7XG4gIHdpZHRoOiAzMjVweDtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMjBweCBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5jb250ZW50LXdyYXAge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmNvbnRlbnQtd3JhcCBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5tdDMwIHtcbiAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xufVxuXG4ubWIzMCB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcbn1cblxuI2NpbmNvcGFfMTYzODE5NjE5MDE3MCBkaXYjaW5uZXJpZnJhbWUgLm1lanMtdmlkZW8tbGVmdCBidXR0b24ge1xuICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLm1lanMtaW5uZXIgLm1lanMtbGF5ZXJzIC5tZWpzLW92ZXJsYXkgLm1lanMtdmlkZW8tbGVmdCBidXR0b24ge1xuICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLm1lanMtdmlkZW8tanVtcC1sZWZ0ID4gYnV0dG9uIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbnAge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufSJdfQ== */";

/***/ }),

/***/ 84414:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/personalized-micronutrition/personalized-micronutrition.page.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "\n<app-header  [headerTitle]=\"\"  [headerBack]=true  ></app-header>\n<ion-content>\n  \n  <h1>{{'PERSONALIZED_MICRO.TITLE' | translate}}</h1>\n    <div id=\"cincopa_1638196190170\"  style=\"width: 90% !important;\"></div>\n  \n  <div class=\"content-wrap\">\n  <p class=\"mb30\" *ngIf=\"utility.deviceLang == 'de'\"  innerHTML=\"{{ dashboardDatas[0]?.firstDE }}\"></p>\n  <p class=\"mb30\" *ngIf=\"utility.deviceLang == 'en'\"  innerHTML=\"{{ dashboardDatas[0]?.firstEN }}\"></p>\n  <ion-button class=\"btn\" color=\"danger\" expand=\"block\" (click)=\"openBookingAnalysis()\">\n    {{'PERSONALIZED_MICRO.PERSONALIZED_MICRO_BTN' | translate}}\n  </ion-button>\n  <p class=\"mt30 mb30\"  *ngIf=\"utility.deviceLang == 'de'\"  innerHTML=\"{{ dashboardDatas[0]?.secondDE }}\"></p>\n  <p class=\"mt30 mb30\"  *ngIf=\"utility.deviceLang == 'en'\"  innerHTML=\"{{ dashboardDatas[0]?.secondEN }}\"></p>\n  </div>\n\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_personalized-micronutrition_personalized-micronutrition_module_ts.js.map