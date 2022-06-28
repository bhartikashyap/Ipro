"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_inteligent-trading_inteligent-trading_module_ts"],{

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

/***/ 58714:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/inteligent-trading/inteligent-trading-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InteligentTradingPageRoutingModule": () => (/* binding */ InteligentTradingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _inteligent_trading_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inteligent-trading.page */ 42782);




const routes = [
    {
        path: '',
        component: _inteligent_trading_page__WEBPACK_IMPORTED_MODULE_0__.InteligentTradingPage
    }
];
let InteligentTradingPageRoutingModule = class InteligentTradingPageRoutingModule {
};
InteligentTradingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InteligentTradingPageRoutingModule);



/***/ }),

/***/ 65310:
/*!***********************************************************************!*\
  !*** ./src/app/pages/inteligent-trading/inteligent-trading.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "InteligentTradingPageModule": () => (/* binding */ InteligentTradingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _inteligent_trading_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inteligent-trading-routing.module */ 58714);
/* harmony import */ var _inteligent_trading_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inteligent-trading.page */ 42782);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30610);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _components_share_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/share-component-module */ 99663);











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
let InteligentTradingPageModule = class InteligentTradingPageModule {
};
InteligentTradingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _components_share_component_module__WEBPACK_IMPORTED_MODULE_2__.ShareComponentModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient],
                },
            }),
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _inteligent_trading_routing_module__WEBPACK_IMPORTED_MODULE_0__.InteligentTradingPageRoutingModule,
        ],
        declarations: [_inteligent_trading_page__WEBPACK_IMPORTED_MODULE_1__.InteligentTradingPage],
    })
], InteligentTradingPageModule);



/***/ }),

/***/ 42782:
/*!*********************************************************************!*\
  !*** ./src/app/pages/inteligent-trading/inteligent-trading.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InteligentTradingPage": () => (/* binding */ InteligentTradingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _inteligent_trading_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inteligent-trading.page.html?ngResource */ 13008);
/* harmony import */ var _inteligent_trading_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inteligent-trading.page.scss?ngResource */ 83675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/device */ 7791);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var src_app_services_environment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/environment.service */ 98407);
/* harmony import */ var src_app_utility_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utility/message */ 34410);
/* harmony import */ var src_app_services_video_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/video.service */ 8472);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api.service */ 5830);












let InteligentTradingPage = class InteligentTradingPage {
    constructor(router, cdr, platform, navController, utility, envr, videoSer, apiSer) {
        this.router = router;
        this.cdr = cdr;
        this.platform = platform;
        this.navController = navController;
        this.utility = utility;
        this.envr = envr;
        this.videoSer = videoSer;
        this.apiSer = apiSer;
        this.playerId = this.videoSer.videoType[3].id;
        this.width = 0;
        this.cpo = [];
        this.showUpdate = false;
        this.currentProgress = {
            completion_percent: 0,
            completion_sec: 17,
            current_completion_percent: 10,
            current_progress_sec: 14,
            duration_sec: 164,
            hm_range: "0-7:2,8-13:3,14:2,15-16",
        };
        this.tmpCurrentProgress = {
            completion_percent: 0,
            completion_sec: 17,
            current_completion_percent: 10,
            current_progress_sec: 14,
            duration_sec: 164,
            hm_range: "0-7:2,8-13:3,14:2,15-16",
        };
    }
    ionViewWillEnter() {
        this.utility.setStorage(src_app_utility_message__WEBPACK_IMPORTED_MODULE_5__.session.SELECTED_PLAN, this.envr.plans.itrade);
    }
    // goBack() {
    //   this.navController.back();
    // }
    goNext() {
        this.utility.getPlanDetail(this.envr.plans.itrade);
        //this.router.navigate(["/tabs/book-analysis"]);
    }
    ngAfterViewInit() {
        this.initPlayer(this.videoSer.videoType[3].initPlayer);
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
            // this.playerAPI().setCurrentTime(42);
            this.playerAPI().setCurrentTime(time);
        }
    }
    initPlayer(id) {
        let that = this;
        cincopa = cincopa || {};
        cincopa.analytics_persistent = { mode: "localstorage" };
        cincopa.registeredFunctions = cincopa.registeredFunctions || [];
        cincopa.registeredFunctions.push({
            func(name, data, gallery) {
                const stats = gallery.get_video_play_stats(data);
                that.tmpCurrentProgress = stats;
                that.cdr.detectChanges();
            },
            filter: "video.timeupdate",
        });
        cincopa.registeredFunctions.push({
            func(name, data, gallery) {
                if (that.info.model === "iPad") {
                    gallery.args.fullscreen_button = false;
                }
                gallery.args.gear_button = false;
                const stats = gallery.get_video_play_stats(data);
                that.getCurrent(stats);
            },
            filter: "runtime.on-args",
        });
        cincopa.registeredFunctions.push({
            func(name, data, gallery) {
                console.log("i am ready");
                that.getVideoDur();
                const stats = gallery.get_video_play_stats(data);
                that.getCurrent(stats);
            },
            filter: "video.load",
        });
        cincopa.registeredFunctions.push({
            func(name, data, gallery) {
                console.log("Change detect");
                const stats = gallery.get_video_play_stats(data);
                that.getCurrent(stats);
                console.log(gallery);
            },
            filter: "video.change",
        });
        cincopa.registeredFunctions.push({
            func(name, data, gallery) {
                const stats = gallery.get_video_play_stats(data);
                that.currentProgress = stats;
                that.getCurrent(stats);
                that.saveVideoDur();
                that.showUpdate = true;
                that.cdr.detectChanges();
            },
            filter: "video.pause",
        });
        cincopa.registeredFunctions.push({
            func(name, data, gallery) {
                const stats = gallery.get_video_play_stats(data);
                that.getCurrent(stats);
                that.cdr.detectChanges();
                console.log("Change detect");
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
    getCurrent(stats) {
        this.currentProgress = stats;
        console.log(stats);
    }
    enterFullScreen() {
        this.playerAPI() && this.playerAPI().enterFullScreen();
    }
    exitFullScreen() {
        this.playerAPI() && this.playerAPI().exitFullScreen();
    }
    pauseVideo() {
        this.playerAPI() && this.playerAPI().pause();
        console.log(this.currentProgress);
        this.saveVideoDur();
    }
    saveVideoDur() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let seconds = this.convertIntoSec();
            console.log(seconds);
            let data = {
                "videoId": 3,
                "duration": seconds
            };
            yield this.apiSer.saveVideo(data);
        });
    }
    getVideoDur() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let result = yield this.apiSer.getVideo();
            if (result.status) {
                let timeString = result === null || result === void 0 ? void 0 : result.data[3].duration; // input string
                let arr = timeString.split(":"); // splitting the string by colon
                // Number(arr[0]) * 3600 + 
                const secondsSting = Number(arr[0]) * 3600 + Number(arr[1]) * 60 + (+Number(arr[2]));
                this.specificTime(secondsSting);
            }
            else {
                // let seconds = this.convertIntoSec()
                // const formatedTime = new Date(seconds * 1000).toISOString().slice(11, 19);
                this.specificTime(0);
            }
        });
    }
    convertIntoSec() {
        var _a;
        let seconds = (_a = this.currentProgress) === null || _a === void 0 ? void 0 : _a.current_progress_sec;
        return new Date(seconds * 1000).toISOString().slice(11, 19);
    }
    ionViewDidLeave() {
        this.pauseVideo();
    }
};
InteligentTradingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: src_app_services_environment_service__WEBPACK_IMPORTED_MODULE_4__.EnvironmentService },
    { type: src_app_services_video_service__WEBPACK_IMPORTED_MODULE_6__.VideoService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__.ApiService }
];
InteligentTradingPage.propDecorators = {
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.HostListener, args: ["window:resize", ["$event"],] }]
};
InteligentTradingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-inteligent-trading",
        template: _inteligent_trading_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_inteligent_trading_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InteligentTradingPage);



/***/ }),

/***/ 83675:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/inteligent-trading/inteligent-trading.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "h1 {\n  margin-top: 30px;\n  font-size: 26px;\n  text-align: center;\n  margin-bottom: 30px;\n  color: #666666;\n}\n\n.register-img {\n  display: block;\n  background: url('register.jpeg');\n  width: 325px;\n  height: 170px;\n  border-radius: 15px;\n  margin: 30px auto 20px auto;\n  background-position: center;\n}\n\n.content-wrap {\n  padding: 20px;\n}\n\n.content-wrap p {\n  font-size: 18px;\n  text-align: left;\n  color: #000000;\n  margin: 0px;\n}\n\n.mt30 {\n  margin-top: 30px !important;\n}\n\n.mb30 {\n  margin-bottom: 30px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVsaWdlbnQtdHJhZGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7QUFFRjs7QUFERTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBR0o7O0FBQUE7RUFDRSwyQkFBQTtBQUdGOztBQURBO0VBQ0UsOEJBQUE7QUFJRiIsImZpbGUiOiJpbnRlbGlnZW50LXRyYWRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGNvbG9yOiAjNjY2NjY2O1xyXG59XHJcbi5yZWdpc3Rlci1pbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL3JlZ2lzdGVyLmpwZWcpO1xyXG4gIHdpZHRoOiAzMjVweDtcclxuICBoZWlnaHQ6IDE3MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnQtd3JhcCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gIH1cclxufVxyXG4ubXQzMCB7XHJcbiAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYjMwIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 13008:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/inteligent-trading/inteligent-trading.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<app-header  [headerTitle]=\"\"  [headerBack]=true  ></app-header>\n\n<ion-content>\n\n  <h1>{{'INTELIGENT_TRADING.TITLE' | translate}}</h1>\n <div id=\"cincopa_16381961901701\" style=\"width: 90% !important;\"></div>\n  <div class=\"content-wrap\">\n    <p class=\"mb30\">{{'INTELIGENT_TRADING.GET_TRADE_TXT' | translate}}</p>\n    <ion-button class=\"btn\" color=\"danger\" expand=\"block\" (click)=\"goNext()\">{{'INTELIGENT_TRADING.GET_TRADE' | translate}}\n    </ion-button> \n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_inteligent-trading_inteligent-trading_module_ts.js.map