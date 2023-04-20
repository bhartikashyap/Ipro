"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_area-of-interest_area-of-interest_module_ts"],{

/***/ 56087:
/*!***************************************************************************!*\
  !*** ./src/app/pages/area-of-interest/area-of-interest-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreaOfInterestPageRoutingModule": () => (/* binding */ AreaOfInterestPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _area_of_interest_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area-of-interest.page */ 38361);




const routes = [
    {
        path: '',
        component: _area_of_interest_page__WEBPACK_IMPORTED_MODULE_0__.AreaOfInterestPage
    }
];
let AreaOfInterestPageRoutingModule = class AreaOfInterestPageRoutingModule {
};
AreaOfInterestPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AreaOfInterestPageRoutingModule);



/***/ }),

/***/ 70280:
/*!*******************************************************************!*\
  !*** ./src/app/pages/area-of-interest/area-of-interest.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreaOfInterestPageModule": () => (/* binding */ AreaOfInterestPageModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _area_of_interest_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area-of-interest-routing.module */ 56087);
/* harmony import */ var _area_of_interest_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area-of-interest.page */ 38361);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30610);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _components_share_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/share-component-module */ 99663);











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
let AreaOfInterestPageModule = class AreaOfInterestPageModule {
};
AreaOfInterestPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient],
                },
            }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _area_of_interest_routing_module__WEBPACK_IMPORTED_MODULE_0__.AreaOfInterestPageRoutingModule,
            _components_share_component_module__WEBPACK_IMPORTED_MODULE_2__.ShareComponentModule
        ],
        declarations: [_area_of_interest_page__WEBPACK_IMPORTED_MODULE_1__.AreaOfInterestPage],
    })
], AreaOfInterestPageModule);



/***/ }),

/***/ 38361:
/*!*****************************************************************!*\
  !*** ./src/app/pages/area-of-interest/area-of-interest.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreaOfInterestPage": () => (/* binding */ AreaOfInterestPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _area_of_interest_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area-of-interest.page.html?ngResource */ 10125);
/* harmony import */ var _area_of_interest_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area-of-interest.page.scss?ngResource */ 21918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utility/message */ 34410);
/* harmony import */ var src_app_services_environment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/environment.service */ 98407);











let AreaOfInterestPage = class AreaOfInterestPage {
    constructor(router, menu, navCtrl, utility, apiSer, platform, envr) {
        this.router = router;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.utility = utility;
        this.apiSer = apiSer;
        this.platform = platform;
        this.envr = envr;
        this.dashboardData = [];
    }
    ngOnInit() {
        console.log(this.navCtrl);
        console.log(this.router.url);
        console.log(this.router.getCurrentNavigation(), "getCurrentNavigation");
    }
    ionViewWillEnter() {
        var timeInter = 0;
        // this.utility.openPopup(UserModalPage, 'question-complete', 'modal-question', true);
        this.subscription = this.platform.backButton.subscribeWithPriority(9999, () => {
            // do nothing
        });
        this.getDashboard();
        this.utility.changeMenu();
        this.utility.setStorage(src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.session.SELECTED_PLAN, 'basket');
        this.utility.getCart('cart');
        setInterval(() => {
            timeInter++;
            //this.getPayments = this.utility.getLastPayments;
            // console.log(this.getPayments);
            if (timeInter < 10)
                this.getPayments();
        }, 5000);
        // this.utility.changeMessage("Push Notification");
    }
    openMenu() {
        //  alert("hii")
        this.menu.enable(true);
        this.menu.open('first');
    }
    openPersonalized() {
        // this.utility.goNext('/question');  //to test the question in  fast forward mode
        this.utility.goNext('/tabs/personalized-micronutrition');
    }
    openIntelligent() {
        this.utility.goNext('/tabs/inteligent-trading');
    }
    openPartnership() {
        this.utility.goNext("/tabs/ipro-partnership");
    }
    getVoucher() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let getVoucher = yield this.apiSer.checkVoucher();
            console.log(getVoucher);
            if (getVoucher.status) {
                this.voucher = getVoucher.data;
            }
        });
    }
    getDashboard() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            //  let result1: any = await this.apiSer.getQuestions();
            //      console.log(result1)
            let loading = yield this.utility.presentLoading();
            this.getVoucher();
            let videoResult = yield this.apiSer.getVideo();
            if (videoResult.status) {
                if (videoResult.data.length > 0) {
                    this.envr.videosEnglish[1].initPlayer = videoResult.data[0].vimeoId;
                    this.envr.videosGerman[1].initPlayer = videoResult.data[0].videoIDGerman;
                    this.envr.videosEnglish[2].initPlayer = videoResult.data[1].vimeoId;
                    this.envr.videosGerman[2].initPlayer = videoResult.data[1].videoIDGerman;
                }
            }
            let result = yield this.apiSer.prospectDashboard();
            // .then((res: any) => {
            loading.dismiss();
            // let result=res;
            if (result.status) {
                this.dashboardData = result.data;
            }
            else {
                this.dashboardData = [];
                this.utility.removeAuth();
                this.utility.goNext('/login');
                if (result.msg == 'Unauthorized' || result.msg == "Token not found in request") {
                    let fcmToken = {
                        "notificationToken": yield this.utility.getFCMToken()
                    };
                    this.apiSer.logoutUser(fcmToken).then((res) => {
                        loading.dismiss();
                        //  this.utility.removeAuth();
                        // this.router.navigate(['/login']);
                    });
                }
            }
            // console.log(res)
            // })
            this.getPayments();
        });
    }
    getPayments() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let getLastPayments = yield this.apiSer.getLastPayments();
            if (getLastPayments === null || getLastPayments === void 0 ? void 0 : getLastPayments.status) {
                this.getLastPayments = getLastPayments === null || getLastPayments === void 0 ? void 0 : getLastPayments.data;
            }
            console.log(getLastPayments, "getLastPayments");
        });
    }
    ionViewWillLeave() {
        this.subscription.unsubscribe();
    }
    redeemVoucher() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let result = yield this.apiSer.freeMembership();
            if (result.status) {
                this.getVoucher();
            }
        });
    }
    calculateDiff(dateSent) {
        let row = 0;
        let currentDate = new Date();
        dateSent = new Date(dateSent);
        let nodays = Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate())) / (1000 * 60 * 60 * 24));
        console.log(nodays);
        if (nodays >= 2) {
            return false;
        }
        else {
            return true;
        }
    }
};
AreaOfInterestPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: src_app_services_environment_service__WEBPACK_IMPORTED_MODULE_5__.EnvironmentService }
];
AreaOfInterestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-area-of-interest',
        template: _area_of_interest_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_area_of_interest_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AreaOfInterestPage);



/***/ }),

/***/ 21918:
/*!******************************************************************************!*\
  !*** ./src/app/pages/area-of-interest/area-of-interest.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".section {\n  padding: 20px;\n}\n.section ion-button {\n  --height: 75px !important;\n  height: 75px;\n}\nh1 {\n  margin-top: 20px;\n  font-size: 26px;\n  text-align: center;\n  margin-bottom: 20px;\n  color: #666666;\n}\np {\n  text-align: justify;\n}\n.voucher {\n  text-align: center;\n  margin: 15px;\n  border: solid #ff662a 1px;\n  padding: 15px;\n}\n.voucherUsed {\n  text-align: center;\n  margin: 15px;\n  background-color: #01af4c;\n  padding: 15px;\n  color: #fff;\n  font-weight: 800;\n}\nion-card-header {\n  display: flex;\n}\nion-avatar {\n  margin-right: 20px;\n  /* height: 60px; */\n  margin-top: 10px;\n}\n.refferral ion-card-title {\n  font-size: 16px;\n}\nion-card-title {\n  font-size: 18px;\n}\n.sub-title {\n  background-color: #000;\n  color: #fff;\n  padding: 11px;\n  border-radius: 8px;\n  margin-top: 10px;\n  font-size: 12px;\n  text-align: center;\n}\n.title-border {\n  border-bottom: 1px solid #ccc;\n}\n.card-btn {\n  text-transform: uppercase;\n  margin: 10px;\n  font-size: 12px !important;\n}\n.yellow {\n  background-color: #F9C30C;\n}\n.green {\n  background-color: #53AF25;\n}\n.blue {\n  background-color: #14253B;\n}\n.red {\n  background-color: #FF1601;\n}\n.diffColor ion-card-title {\n  color: #fff !important;\n}\n.products ion-list {\n  border: solid 1px #ccc;\n  border-radius: 10px;\n  padding: 5px;\n  margin: 12px 0px;\n}\n.products ion-item {\n  font-size: 13px;\n}\nion-card {\n  border-radius: 15px;\n}\n.pending {\n  background-color: yellow;\n}\n.pending ion-list ion-item {\n  --background: yellow;\n}\n.pending p {\n  font-size: 16px;\n  color: #000;\n}\n.failed {\n  background-color: red;\n}\n.failed ion-list ion-item {\n  --background: red;\n}\n.failed p {\n  font-size: 16px;\n  color: #000;\n}\n.completed {\n  background-color: green;\n}\n.completed ion-list ion-item {\n  --background: green;\n}\n.completed p {\n  font-size: 16px;\n  color: #000;\n}\n.list-md {\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFyZWEtb2YtaW50ZXJlc3QucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vaXBybyUyMDIvc3JjL2FwcC9wYWdlcy9hcmVhLW9mLWludGVyZXN0L2FyZWEtb2YtaW50ZXJlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtBQ0ZGO0FER0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNESjtBRElBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNERjtBREdBO0VBQ0UsbUJBQUE7QUNBRjtBREVBO0VBQ0Usa0JBQUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDQ0o7QURFQTtFQUNFLGtCQUFBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NKO0FERUE7RUFDRSxhQUFBO0FDQ0Y7QURDQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0VGO0FERUU7RUFDSSxlQUFBO0FDQ047QURFQTtFQUNFLGVBQUE7QUNDRjtBREVBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREVBO0VBQ0UsNkJBQUE7QUNDRjtBRENBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNFRjtBREFBO0VBQ0UseUJBQUE7QUNHRjtBRERBO0VBQ0UseUJBQUE7QUNJRjtBREZBO0VBQ0UseUJBQUE7QUNLRjtBREhBO0VBQ0UseUJBQUE7QUNNRjtBREhBO0VBQ0Usc0JBQUE7QUNNRjtBRERFO0VBQ0ksc0JBQUE7RUFDQyxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0lQO0FERkc7RUFDRSxlQUFBO0FDSUw7QUREQTtFQUNFLG1CQUFBO0FDSUY7QURGQTtFQUNFLHdCQUFBO0FDS0Y7QURKRTtFQUNJLG9CQUFBO0FDTU47QURKRTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDTU47QURIQTtFQUNFLHFCQUFBO0FDTUY7QURMQTtFQUNNLGlCQUFBO0FDT047QURMRTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDT047QURKQTtFQUNFLHVCQUFBO0FDT0Y7QURORTtFQUNJLG1CQUFBO0FDUU47QURORTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDUU47QURMQTtFQUNFLGdCQUFBO0FDUUYiLCJmaWxlIjoiYXJlYS1vZi1pbnRlcmVzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi5zZWN0aW9uLWdyYXkge1xyXG4gIC8vIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuLnNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWhlaWdodDogNzVweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gIH1cclxufVxyXG5oMSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgY29sb3I6ICM2NjY2NjY7XHJcbn1cclxucHtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcbi52b3VjaGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGJvcmRlcjogc29saWQgI2ZmNjYyYSAxcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG5cclxufVxyXG4udm91Y2hlclVzZWR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxYWY0YztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWhlYWRlcntcclxuICBkaXNwbGF5OmZsZXg7XHJcbn1cclxuaW9uLWF2YXRhcntcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgLyogaGVpZ2h0OiA2MHB4OyAqL1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5yZWZmZXJyYWx7XHJcbiAgaW9uLWNhcmQtdGl0bGV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuaW9uLWNhcmQtdGl0bGV7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uc3ViLXRpdGxle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTFweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGl0bGUtYm9yZGVye1xyXG4gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNjY2M7XHJcbn1cclxuLmNhcmQtYnRue1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luOjEwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnllbGxvd3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlDMzBDO1xyXG59XHJcbi5ncmVlbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTNBRjI1O1xyXG59XHJcbi5ibHVle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDI1M0I7XHJcbn1cclxuLnJlZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYxNjAxO1xyXG4gIC8vIFxyXG59XHJcbi5kaWZmQ29sb3IgaW9uLWNhcmQtdGl0bGV7XHJcbiAgY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJvZHVjdHN7XHJcblxyXG4gIGlvbi1saXN0e1xyXG4gICAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xyXG4gICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgIG1hcmdpbjogMTJweCAwcHg7XHJcbiAgIH1cclxuICAgaW9uLWl0ZW17XHJcbiAgICAgZm9udC1zaXplOjEzcHg7XHJcbiAgIH1cclxufVxyXG5pb24tY2FyZHtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbi5wZW5kaW5ne1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICBpb24tbGlzdCAgIGlvbi1pdGVte1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHllbGxvdztcclxuICB9XHJcbiAgcHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBjb2xvcjojMDAwO1xyXG4gIH1cclxufVxyXG4uZmFpbGVke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuaW9uLWxpc3QgIGlvbi1pdGVte1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHJlZDtcclxuICB9XHJcbiAgcHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBjb2xvcjojMDAwO1xyXG4gIH1cclxufVxyXG4uY29tcGxldGVke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIGlvbi1saXN0ICAgaW9uLWl0ZW17XHJcbiAgICAgIC0tYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgfVxyXG4gIHB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgY29sb3I6IzAwMDtcclxuICB9XHJcbn1cclxuLmxpc3QtbWQge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuIiwiLnNlY3Rpb24ge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnNlY3Rpb24gaW9uLWJ1dHRvbiB7XG4gIC0taGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNzVweDtcbn1cblxuaDEge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDI2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY29sb3I6ICM2NjY2NjY7XG59XG5cbnAge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4udm91Y2hlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxNXB4O1xuICBib3JkZXI6IHNvbGlkICNmZjY2MmEgMXB4O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4udm91Y2hlclVzZWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxYWY0YztcbiAgcGFkZGluZzogMTVweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmlvbi1hdmF0YXIge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIC8qIGhlaWdodDogNjBweDsgKi9cbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnJlZmZlcnJhbCBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zdWItdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTFweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdGxlLWJvcmRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uY2FyZC1idG4ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuXG4ueWVsbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5QzMwQztcbn1cblxuLmdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzQUYyNTtcbn1cblxuLmJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQyNTNCO1xufVxuXG4ucmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMTYwMTtcbn1cblxuLmRpZmZDb2xvciBpb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9kdWN0cyBpb24tbGlzdCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiAxMnB4IDBweDtcbn1cbi5wcm9kdWN0cyBpb24taXRlbSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4ucGVuZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cbi5wZW5kaW5nIGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB5ZWxsb3c7XG59XG4ucGVuZGluZyBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmZhaWxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbi5mYWlsZWQgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHJlZDtcbn1cbi5mYWlsZWQgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5jb21wbGV0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cbi5jb21wbGV0ZWQgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IGdyZWVuO1xufVxuLmNvbXBsZXRlZCBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmxpc3QtbWQge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufSJdfQ== */";

/***/ }),

/***/ 10125:
/*!******************************************************************************!*\
  !*** ./src/app/pages/area-of-interest/area-of-interest.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n<app-header  [headerTitle]=\"'PAGES.DASHBOARD' | translate\"  [headerBack]=false  ></app-header>\n<ion-content>\n  <ion-card *ngIf=\"0\">\n    <div style=\"display:flex;padding: 10px;\">\n      <ion-title>Paymnet In Progress</ion-title>\n      <ion-spinner name=\"bubbles\"></ion-spinner>\n  \n     </div>\n    </ion-card>\n  <ion-card style=\"border: solid 1px #ccc;\" *ngIf=\"getLastPayments?.length>0\" >\n    <ion-card-header style=\"background-color: #858282;\" >\n      <ion-card-title> {{'AREA_OF_INTEREST.lastPaymnet' | translate }}</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content  *ngFor=\"let gPay of getLastPayments; let i = index\" style=\"border: solid #858282 1px; margin:10px;border-radius:15px;\n    padding: 10px;\" [ngClass]=\"{'pending': gPay?.paymentStatus == 'pending', 'completed':  gPay?.paymentStatus == 'completed', 'failed':  gPay?.paymentStatus == 'failed' || gPay?.paymentStatus == 'cancelled'}\">\n    <!-- <div *ngIf=\"calculateDiff(gPay?.paymentDate)\">\njbb\n    </div> -->\n      <!-- <ion-list lines=\"none\"  >\n        <ion-item >\n          <ion-label> -->\n            <p>{{'AREA_OF_INTEREST.date' | translate }}:<span>{{gPay?.paymentDate}}\n          </span></p>\n        <!-- </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label> -->\n          <p>  {{'AREA_OF_INTEREST.amount' | translate }}:<span>{{gPay?.totalAmount}}  &euro;\n          </span></p>\n        <!-- </ion-label>\n        </ion-item>\n        <ion-item >\n          <ion-label> -->\n            <p *ngIf=\"utility.deviceLang == 'de'\">  {{'AREA_OF_INTEREST.status' | translate }}:<span>{{gPay?.statusGerman | uppercase }}\n          </span></p>\n          <p *ngIf=\"utility.deviceLang == 'en'\">  {{'AREA_OF_INTEREST.status' | translate }}:<span>{{gPay?.statusEnglish | uppercase }}\n          </span></p>\n        <!-- </ion-label>\n        </ion-item>\n       \n       \n      </ion-list> -->\n\n    </ion-card-content>\n  </ion-card>\n\n\n\n  <!-- style=\" --background: url('assets/img/animation/logo1.png') ;    background-color: #ddd;    background-position: 80% 100%;\" -->\n  <h1>{{'AREA_OF_INTEREST.TITLE' | translate}}  </h1>\n  <!-- <div *ngIf=\"utility.deviceLang == 'en'\"> -->\n    \n    <div class=\" section-gray voucher\" *ngIf=\"voucher?.show_voucher == 'yes'\">\n      <!-- animate__animated  animate__slow animate__fadeInUp -->\n      \n    <span class=\"mb30\"  >{{'AREA_OF_INTEREST.useVoucher' | translate}} : <strong>{{voucher?.voucher_code}} </strong></span>\n    <ion-button class=\"btn \" color=\"danger\" expand=\"block\" (click)=\"redeemVoucher()\">\n      {{'AREA_OF_INTEREST.REDEEM' | translate}}</ion-button>\n  \n      <!-- <p>{{dashboardData[0]?.firstEN}}\n  \n    \n        {{dashboardData[0]?.secondEN}}</p> -->\n    </div>\n    <div class=\" section-gray voucherUsed\"  *ngIf=\"voucher?.show_voucher == 'no' && voucher?.validity_days > 0\">\n      <!-- animate__animated  animate__slow animate__fadeInUp -->\n    <span class=\"mb30\"  innerHTML=\"\" > {{'AREA_OF_INTEREST.membershipValidityText' | translate}} {{voucher?.validity_days}} {{'AREA_OF_INTEREST.days' | translate}}</span>\n    </div>\n  <div class=\"section section-gray\">\n    <!-- animate__animated  animate__slow animate__fadeInUp -->\n    <ion-button class=\"btn \" color=\"danger\" expand=\"block\" (click)=\"openPersonalized()\">\n      {{'AREA_OF_INTEREST.PERSONALIZED_BTN' | translate}}</ion-button>\n  <p class=\"mb30\"  innerHTML=\"{{'PERSONALIZED_MICRO.PERSONALIZED_MICRO_TXT1' | translate}}\"> </p>\n  <p class=\"mt30 mb30\"  innerHTML=\"{{'PERSONALIZED_MICRO.PERSONALIZED_MICRO_TXT2' | translate}}\"></p>\n\n\n    <!-- <p>{{dashboardData[0]?.firstEN}}\n\n  \n      {{dashboardData[0]?.secondEN}}</p> -->\n  </div>\n  <div class=\"section section-gray\">\n    <ion-button class=\"btn\" color=\"danger\" expand=\"block\" (click)=\"openPartnership()\">\n      {{'AREA_OF_INTEREST.PARTNERSHIP_BTN' | translate}}</ion-button>\n      <p class=\"mb30\"  innerHTML=\"{{'IPRO_PARTNERSHIP.BECOME_PARTNER_TXT' | translate}}\"> </p>\n  </div>\n<!-- </div> -->\n<!-- <div *ngIf=\"utility.deviceLang == 'de'\">\n\n \n  <div class=\"section section-gray\">\n    <ion-button class=\"btn\" color=\"danger\" expand=\"block\" (click)=\"openPersonalized()\">\n      {{'AREA_OF_INTEREST.PERSONALIZED_BTN' | translate}}</ion-button>\n    <p>{{dashboardData[0]?.firstDE}}\n\n  \n      {{dashboardData[0]?.secondDE}}</p>\n  </div>\n  <div class=\"section section-gray\">\n    <ion-button class=\"btn\" color=\"danger\" expand=\"block\" (click)=\"openPartnership()\">\n      {{'AREA_OF_INTEREST.PARTNERSHIP_BTN' | translate}}</ion-button>\n      <p>{{dashboardData[1]?.firstDE}}\n\n        {{dashboardData[1]?.secondDE}}</p>\n  </div>\n</div> -->\n\n\n<!-- <div class=\"splash-img-layer\" [ngClass]=\"customClas1\">\n  <img [ngClass]=\"customClas\"  src=\"assets/img/animation/logo1.png\" >\n\n</div> -->\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_area-of-interest_area-of-interest_module_ts.js.map