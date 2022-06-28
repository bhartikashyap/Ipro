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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _personalized_micronutrition_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personalized-micronutrition.page.html?ngResource */ 84414);
/* harmony import */ var _personalized_micronutrition_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personalized-micronutrition.page.scss?ngResource */ 87526);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/device */ 7791);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var src_app_services_environment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/environment.service */ 98407);
/* harmony import */ var src_app_utility_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utility/message */ 34410);
/* harmony import */ var src_app_services_video_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/video.service */ 8472);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51109);













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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
        this.platform.ready().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            console.log("Width: " + this.platform.width());
            this.width = this.platform.width();
            this.info = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_2__.Device.getInfo();
            console.log(this.info);
            console.log("Height: " + this.platform.height());
        }));
    }
    ngOnChanges(changes) {
        console.log(changes);
    }
    saveVideoDur() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.videoSer.saveVideoDur(this.videoSer.videoId);
        });
    }
    ionViewDidLeave() {
        this.videoSer.pauseVideo();
    }
    openBookingAnalysis() {
        this.utility.goNext("/tabs/check-zip");
    }
};
PersonalizedMicronutritionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: src_app_services_environment_service__WEBPACK_IMPORTED_MODULE_4__.EnvironmentService },
    { type: src_app_services_video_service__WEBPACK_IMPORTED_MODULE_6__.VideoService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__.ApiService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService }
];
PersonalizedMicronutritionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
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

module.exports = "h1 {\n  margin-top: 30px;\n  font-size: 26px;\n  text-align: center;\n  margin-bottom: 30px;\n  color: #666666;\n}\n\n.register-img {\n  display: block;\n  background: url('register.jpeg');\n  width: 325px;\n  height: 170px;\n  border-radius: 15px;\n  margin: 30px auto 20px auto;\n  background-position: center;\n}\n\n.content-wrap {\n  padding: 20px;\n}\n\n.content-wrap p {\n  font-size: 18px;\n  text-align: left;\n  color: #000000;\n  margin: 0px;\n}\n\n.mt30 {\n  margin-top: 30px !important;\n}\n\n.mb30 {\n  margin-bottom: 30px !important;\n}\n\n#cincopa_1638196190170 div#inneriframe .mejs-video-left button {\n  color: transparent !important;\n}\n\n.mejs-inner .mejs-layers .mejs-overlay .mejs-video-left button {\n  color: transparent !important;\n}\n\n.mejs-video-jump-left > button {\n  color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmFsaXplZC1taWNyb251dHJpdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7QUFFRjs7QUFERTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBR0o7O0FBQUE7RUFDRSwyQkFBQTtBQUdGOztBQURBO0VBQ0UsOEJBQUE7QUFJRjs7QUFGQTtFQUNFLDZCQUFBO0FBS0Y7O0FBRkE7RUFDRSw2QkFBQTtBQUtGOztBQUZBO0VBQ0UsNkJBQUE7QUFLRiIsImZpbGUiOiJwZXJzb25hbGl6ZWQtbWljcm9udXRyaXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGNvbG9yOiAjNjY2NjY2O1xyXG59XHJcbi5yZWdpc3Rlci1pbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL3JlZ2lzdGVyLmpwZWcpO1xyXG4gIHdpZHRoOiAzMjVweDtcclxuICBoZWlnaHQ6IDE3MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnQtd3JhcCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gIH1cclxufVxyXG4ubXQzMCB7XHJcbiAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYjMwIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuI2NpbmNvcGFfMTYzODE5NjE5MDE3MCBkaXYjaW5uZXJpZnJhbWUgLm1lanMtdmlkZW8tbGVmdCBidXR0b24ge1xyXG4gIGNvbG9yOnRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tZWpzLWlubmVyIC5tZWpzLWxheWVycyAubWVqcy1vdmVybGF5IC5tZWpzLXZpZGVvLWxlZnQgYnV0dG9ue1xyXG4gIGNvbG9yOnRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi5tZWpzLXZpZGVvLWp1bXAtbGVmdCA+IGJ1dHRvbiB7XHJcbiAgY29sb3I6dHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4gIl19 */";

/***/ }),

/***/ 84414:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/personalized-micronutrition/personalized-micronutrition.page.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "\n<app-header  [headerTitle]=\"\"  [headerBack]=true  ></app-header>\n<ion-content>\n  \n  <h1>{{'PERSONALIZED_MICRO.TITLE' | translate}}</h1>\n    <div id=\"cincopa_1638196190170\"  style=\"width: 90% !important;\"></div>\n  \n  <div class=\"content-wrap\">\n   \n  <p class=\"mb30\" >{{ dashboardDatas[0]?.firstEN }}</p>\n  <ion-button class=\"btn\" color=\"danger\" expand=\"block\" (click)=\"openBookingAnalysis()\">\n    {{'PERSONALIZED_MICRO.PERSONALIZED_MICRO_BTN' | translate}}\n  </ion-button>\n  <p class=\"mt30 mb30\">{{ dashboardDatas[0]?.secondEN }}</p>\n  </div>\n\n  \n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_personalized-micronutrition_personalized-micronutrition_module_ts.js.map