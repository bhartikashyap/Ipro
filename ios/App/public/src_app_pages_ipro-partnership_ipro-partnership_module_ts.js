"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_ipro-partnership_ipro-partnership_module_ts"],{

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

/***/ 29486:
/*!***************************************************************************!*\
  !*** ./src/app/pages/ipro-partnership/ipro-partnership-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IproPartnershipPageRoutingModule": () => (/* binding */ IproPartnershipPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ipro_partnership_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ipro-partnership.page */ 88347);




const routes = [
    {
        path: '',
        component: _ipro_partnership_page__WEBPACK_IMPORTED_MODULE_0__.IproPartnershipPage
    }
];
let IproPartnershipPageRoutingModule = class IproPartnershipPageRoutingModule {
};
IproPartnershipPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IproPartnershipPageRoutingModule);



/***/ }),

/***/ 22969:
/*!*******************************************************************!*\
  !*** ./src/app/pages/ipro-partnership/ipro-partnership.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "IproPartnershipPageModule": () => (/* binding */ IproPartnershipPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _ipro_partnership_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ipro-partnership-routing.module */ 29486);
/* harmony import */ var _ipro_partnership_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ipro-partnership.page */ 88347);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30610);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _components_share_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/share-component-module */ 99663);











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
let IproPartnershipPageModule = class IproPartnershipPageModule {
};
IproPartnershipPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
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
            _ipro_partnership_routing_module__WEBPACK_IMPORTED_MODULE_0__.IproPartnershipPageRoutingModule,
        ],
        declarations: [_ipro_partnership_page__WEBPACK_IMPORTED_MODULE_1__.IproPartnershipPage],
    })
], IproPartnershipPageModule);



/***/ }),

/***/ 88347:
/*!*****************************************************************!*\
  !*** ./src/app/pages/ipro-partnership/ipro-partnership.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IproPartnershipPage": () => (/* binding */ IproPartnershipPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _ipro_partnership_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ipro-partnership.page.html?ngResource */ 53756);
/* harmony import */ var _ipro_partnership_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ipro-partnership.page.scss?ngResource */ 98621);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/device */ 7791);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var src_app_services_environment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/environment.service */ 98407);
/* harmony import */ var src_app_utility_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utility/message */ 34410);
/* harmony import */ var src_app_services_video_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/video.service */ 8472);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api.service */ 5830);












let IproPartnershipPage = class IproPartnershipPage {
    constructor(router, cdr, platform, navController, utility, envr, videoSer, apiSer) {
        this.router = router;
        this.cdr = cdr;
        this.platform = platform;
        this.navController = navController;
        this.utility = utility;
        this.envr = envr;
        this.videoSer = videoSer;
        this.apiSer = apiSer;
        this.playerId = "cincopa_16381961901702";
        this.width = 0;
        this.cpo = [];
        this.showUpdate = false;
        this.dashboardData = [];
    }
    ionViewWillEnter() {
        this.videoSer.videoId = 2;
        this.utility.setStorage(src_app_utility_message__WEBPACK_IMPORTED_MODULE_5__.session.SELECTED_PLAN, this.envr.plans.partnership);
        //this.videoSer.initPlayer(this.videoSer.videoType[2].initPlayer,this.videoSer.videoType[2].id,this.cdr);
        this.getDashboard();
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
                    this.dashboardData = res.data;
                }
                else {
                    this.dashboardData = [];
                }
                console.log(res);
            });
        });
    }
    ngAfterViewInit() {
        this.videoSer.initPlayer(this.videoSer.videoType[2].initPlayer, this.videoSer.videoType[2].id, this.cdr);
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
    goNext() {
        this.utility.getPlanDetail(this.envr.plans.partnership);
    }
    saveVideoDur() {
        this.videoSer.saveVideoDur(this.videoSer.videoId);
    }
    ionViewDidLeave() {
        this.videoSer.pauseVideo();
    }
};
IproPartnershipPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: src_app_services_environment_service__WEBPACK_IMPORTED_MODULE_4__.EnvironmentService },
    { type: src_app_services_video_service__WEBPACK_IMPORTED_MODULE_6__.VideoService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__.ApiService }
];
IproPartnershipPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-ipro-partnership",
        template: _ipro_partnership_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_ipro_partnership_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IproPartnershipPage);



/***/ }),

/***/ 98621:
/*!******************************************************************************!*\
  !*** ./src/app/pages/ipro-partnership/ipro-partnership.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "h1 {\n  margin-top: 30px;\n  font-size: 26px;\n  text-align: center;\n  margin-bottom: 30px;\n  color: #666666;\n}\n\n.register-img {\n  display: block;\n  background: url('register.jpeg');\n  width: 325px;\n  height: 170px;\n  border-radius: 15px;\n  margin: 30px auto 20px auto;\n  background-position: center;\n}\n\n.content-wrap {\n  padding: 20px;\n}\n\n.content-wrap p {\n  font-size: 18px;\n  text-align: left;\n  color: #000000;\n  margin: 0px;\n}\n\n.mt30 {\n  margin-top: 30px !important;\n}\n\n.mb30 {\n  margin-bottom: 30px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlwcm8tcGFydG5lcnNoaXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0FBRUY7O0FBREU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUdKOztBQUFBO0VBQ0UsMkJBQUE7QUFHRjs7QUFEQTtFQUNFLDhCQUFBO0FBSUYiLCJmaWxlIjoiaXByby1wYXJ0bmVyc2hpcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgY29sb3I6ICM2NjY2NjY7XHJcbn1cclxuLnJlZ2lzdGVyLWltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvcmVnaXN0ZXIuanBlZyk7XHJcbiAgd2lkdGg6IDMyNXB4O1xyXG4gIGhlaWdodDogMTcwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBtYXJnaW46IDMwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudC13cmFwIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgfVxyXG59XHJcbi5tdDMwIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1iMzAge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcclxufVxyXG4gIl19 */";

/***/ }),

/***/ 53756:
/*!******************************************************************************!*\
  !*** ./src/app/pages/ipro-partnership/ipro-partnership.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<app-header  [headerTitle]=\"\"  [headerBack]=true  ></app-header>\n\n<ion-content>\n\n  <h1>{{'IPRO_PARTNERSHIP.TITLE' | translate}}</h1>\n  <div id=\"cincopa_16381961901702\" style=\"width: 90% !important;\"></div>\n  <div class=\"content-wrap\">\n    <p class=\"mb30\">{{dashboardData[1]?.firstEN}}</p>\n    <ion-button class=\"btn\" color=\"danger\" expand=\"block\" (click)=\"goNext()\"> {{'IPRO_PARTNERSHIP.BECOME_PARTNER' | translate}}\n    </ion-button> \n    <p class=\"mb30\">{{dashboardData[1]?.secondEN}}</p>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ipro-partnership_ipro-partnership_module_ts.js.map