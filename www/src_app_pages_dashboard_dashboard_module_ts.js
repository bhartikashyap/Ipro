"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard_dashboard_module_ts"],{

/***/ 62450:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/definitions.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 58722:
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Share": () => (/* binding */ Share)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 16594);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 62450);

const Share = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Share', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_share_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 26451)).then(m => new m.ShareWeb()),
});




/***/ }),

/***/ 99366:
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": () => (/* binding */ DashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 76446);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 71659:
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": () => (/* binding */ DashboardPageModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 99366);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 76446);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30610);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _components_share_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/share-component-module */ 99663);










function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _components_share_component_module__WEBPACK_IMPORTED_MODULE_3__.ShareComponentModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient],
                },
            })
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 76446:
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page.html?ngResource */ 73890);
/* harmony import */ var _dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss?ngResource */ 90442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/share */ 58722);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var src_app_utility_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utility/message */ 34410);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/screen-orientation/ngx */ 98828);











let DashboardPage = class DashboardPage {
    constructor(utility, apiSer, route, platform, screenOrientation) {
        this.utility = utility;
        this.apiSer = apiSer;
        this.route = route;
        this.platform = platform;
        this.screenOrientation = screenOrientation;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        var timeInter = 0;
        this.utility.changeMenu();
        this.utility.getCart('cart');
        this.utility.setStorage(src_app_utility_message__WEBPACK_IMPORTED_MODULE_5__.session.SELECTED_PLAN, 'basket');
        let paramType;
        if (this.platform.is('android') || this.platform.is('ios')) {
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        }
        this.route.params.subscribe(params => {
            paramType = params.type;
        });
        this.getDetails(paramType);
        setInterval(() => {
            timeInter++;
            //this.getPayments = this.utility.getLastPayments;
            // console.log(this.getPayments);
            if (timeInter < 10)
                this.getPayments();
        }, 5000);
    }
    getDetails(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // this.apiSer.getMembers();
            let loading = yield this.utility.presentLoading();
            let details = yield this.apiSer.dashboard();
            if (details.status) {
                this.details = details.data;
                this.utility.setStorage('paymentOption', this.details.dashboard_data.myPaymentOption);
                if (type == 'Partner') {
                    this.details.dashboard_data.yourStatus = 'Partner';
                }
                else if (type == 'Member') {
                    this.details.dashboard_data.yourStatus = 'Member';
                }
                else {
                    this.details.dashboard_data.yourStatus = yield this.utility.getStorage("CHANGE_DASH");
                }
                if (details.data.dashboard_data.yourStatus != null && details.data.dashboard_data.yourStatus != '') {
                    details.data.dashboard_data.yourStatus = details.data.dashboard_data.yourStatus.toLowerCase();
                }
                console.log(details.data.dashboard_data.yourStatus);
            }
            else {
                this.details = {};
                if (details.msg == 'Unauthorized' || details.msg == "Token not found in request") {
                    this.utility.removeAuth();
                    this.utility.goNext('/login');
                    let fcmToken = {
                        "notificationToken": yield this.utility.getFCMToken()
                    };
                    //console.log(firstLogin);
                    this.apiSer.logoutUser(fcmToken).then((res) => {
                        loading.dismiss();
                        // this.utility.removeAuth();
                    });
                }
            }
            loading.dismiss();
            this.getPayments();
        });
    }
    getPayments() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let getLastPayments = yield this.apiSer.getLastPayments();
            if (getLastPayments === null || getLastPayments === void 0 ? void 0 : getLastPayments.status) {
                this.getLastPayments = getLastPayments === null || getLastPayments === void 0 ? void 0 : getLastPayments.data;
            }
            console.log(getLastPayments, "getLastPayments");
        });
    }
    goTo(link) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.utility.goNext(link);
        });
    }
    shareReffralLink(link) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log(link);
            yield _capacitor_share__WEBPACK_IMPORTED_MODULE_4__.Share.share({
                text: this.utility.translateText('DASHBAORD').your_link,
                url: link,
            });
        });
    }
    // dateDifference(expiryDate) {
    //   var date1 = new Date(expiryDate);
    //   var currentDate = new Date();
    //   // To calculate the time difference of two dates
    //   var Difference_In_Time = date1.getTime() - currentDate.getTime();
    //   // To calculate the no. of days between two dates
    //   let Difference_In_Days: any = Difference_In_Time / (1000 * 3600 * 24);
    //   Difference_In_Days = parseInt(Difference_In_Days)
    //    console.log(Difference_In_Days)
    //   return Difference_In_Days
    // }
    ionViewWillLeave() {
        // this.subscription.unsubscribe();
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
DashboardPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__.ScreenOrientation }
];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-dashboard',
        template: _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardPage);



/***/ }),

/***/ 90442:
/*!****************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "ion-card-header {\n  display: flex;\n}\n\nion-avatar {\n  margin-right: 20px;\n  /* height: 60px; */\n  margin-top: 10px;\n}\n\n.refferral ion-card-title {\n  font-size: 16px;\n}\n\nion-card-title {\n  font-size: 18px;\n}\n\n.sub-title {\n  background-color: #000;\n  color: #fff;\n  padding: 11px;\n  border-radius: 8px;\n  margin-top: 10px;\n  font-size: 12px;\n  text-align: center;\n}\n\n.title-border {\n  border-bottom: 1px solid #ccc;\n}\n\n.card-btn {\n  text-transform: uppercase;\n  margin: 10px;\n  font-size: 12px !important;\n}\n\n.yellow {\n  background-color: #F9C30C;\n}\n\n.green {\n  background-color: #53AF25;\n}\n\n.blue {\n  background-color: #14253B;\n}\n\n.red {\n  background-color: #FF1601;\n}\n\n.diffColor ion-card-title {\n  color: #fff !important;\n}\n\n.products ion-list {\n  border: solid 1px #ccc;\n  border-radius: 10px;\n  padding: 5px;\n  margin: 12px 0px;\n}\n\n.products ion-item {\n  font-size: 13px;\n}\n\nion-card {\n  border-radius: 15px;\n}\n\n.pending {\n  background-color: yellow;\n}\n\n.pending ion-list ion-item {\n  --background: yellow;\n}\n\n.pending p {\n  font-size: 16px;\n  color: #000;\n}\n\n.failed {\n  background-color: red;\n}\n\n.failed ion-list ion-item {\n  --background: red;\n}\n\n.failed p {\n  font-size: 16px;\n  color: #000;\n}\n\n.completed {\n  background-color: green;\n}\n\n.completed ion-list ion-item {\n  --background: green;\n}\n\n.completed p {\n  font-size: 16px;\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9pcHJvJTIwMi9zcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FERUk7RUFDSSxlQUFBO0FDQ1I7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7QUNDSjs7QURDQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FDRUo7O0FEQUE7RUFDSSx5QkFBQTtBQ0dKOztBRERBO0VBQ0kseUJBQUE7QUNJSjs7QURGQTtFQUNJLHlCQUFBO0FDS0o7O0FESEE7RUFDSSx5QkFBQTtBQ01KOztBREhBO0VBQ0ksc0JBQUE7QUNNSjs7QURESTtFQUNJLHNCQUFBO0VBQ0MsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNJVDs7QURGSztFQUNFLGVBQUE7QUNJUDs7QUREQTtFQUNJLG1CQUFBO0FDSUo7O0FEREE7RUFDSSx3QkFBQTtBQ0lKOztBREhJO0VBQ0ksb0JBQUE7QUNLUjs7QURISTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDS1I7O0FERkE7RUFDSSxxQkFBQTtBQ0tKOztBREpFO0VBQ00saUJBQUE7QUNNUjs7QURKSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDTVI7O0FESEE7RUFDSSx1QkFBQTtBQ01KOztBRExJO0VBQ0ksbUJBQUE7QUNPUjs7QURMSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDT1IiLCJmaWxlIjoiZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWhlYWRlcntcbiAgICBkaXNwbGF5OmZsZXg7XG59XG5pb24tYXZhdGFye1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAvKiBoZWlnaHQ6IDYwcHg7ICovXG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnJlZmZlcnJhbHtcbiAgICBpb24tY2FyZC10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbn1cbmlvbi1jYXJkLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnN1Yi10aXRsZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDExcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdGxlLWJvcmRlcntcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2NjO1xufVxuLmNhcmQtYnRue1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luOjEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG4ueWVsbG93e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUMzMEM7XG59XG4uZ3JlZW57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUzQUYyNTtcbn1cbi5ibHVle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDI1M0I7XG59XG4ucmVke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjE2MDE7XG4gICAgLy8gXG59XG4uZGlmZkNvbG9yIGlvbi1jYXJkLXRpdGxle1xuICAgIGNvbG9yOiNmZmYgIWltcG9ydGFudDtcbn1cblxuLnByb2R1Y3Rze1xuXG4gICAgaW9uLWxpc3R7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgbWFyZ2luOiAxMnB4IDBweDtcbiAgICAgfVxuICAgICBpb24taXRlbXtcbiAgICAgICBmb250LXNpemU6MTNweDtcbiAgICAgfVxufVxuaW9uLWNhcmR7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLnBlbmRpbmd7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgIGlvbi1saXN0ICAgaW9uLWl0ZW17XG4gICAgICAgIC0tYmFja2dyb3VuZDogeWVsbG93O1xuICAgIH1cbiAgICBwe1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiMwMDA7XG4gICAgfVxufVxuLmZhaWxlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGlvbi1saXN0ICBpb24taXRlbXtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiByZWQ7XG4gICAgfVxuICAgIHB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6IzAwMDtcbiAgICB9XG59XG4uY29tcGxldGVke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIGlvbi1saXN0ICAgaW9uLWl0ZW17XG4gICAgICAgIC0tYmFja2dyb3VuZDogZ3JlZW47XG4gICAgfVxuICAgIHB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6IzAwMDtcbiAgICB9XG59XG4iLCJpb24tY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5pb24tYXZhdGFyIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAvKiBoZWlnaHQ6IDYwcHg7ICovXG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5yZWZmZXJyYWwgaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDExcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXRsZS1ib3JkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cblxuLmNhcmQtYnRuIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cblxuLnllbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUMzMEM7XG59XG5cbi5ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1M0FGMjU7XG59XG5cbi5ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MjUzQjtcbn1cblxuLnJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjE2MDE7XG59XG5cbi5kaWZmQ29sb3IgaW9uLWNhcmQtdGl0bGUge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4ucHJvZHVjdHMgaW9uLWxpc3Qge1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMTJweCAwcHg7XG59XG4ucHJvZHVjdHMgaW9uLWl0ZW0ge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLnBlbmRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG4ucGVuZGluZyBpb24tbGlzdCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogeWVsbG93O1xufVxuLnBlbmRpbmcgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5mYWlsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG4uZmFpbGVkIGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiByZWQ7XG59XG4uZmFpbGVkIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uY29tcGxldGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG4uY29tcGxldGVkIGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBncmVlbjtcbn1cbi5jb21wbGV0ZWQgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwMDA7XG59Il19 */";

/***/ }),

/***/ 73890:
/*!****************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<app-header [headerTitle]=\"'PAGES.DASHBOARD' | translate\" [headerBack]=false></app-header>\n\n<ion-content style=\"padding:10px;\">\n  <div style=\"padding:10px;\"></div>\n  <ion-card *ngIf=\"0\">\n  <div style=\"display:flex;padding: 10px;\">\n    <ion-title>Paymnet In Progress</ion-title>\n    <ion-spinner name=\"bubbles\"></ion-spinner>\n\n   </div>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n\n      <ion-avatar>\n        <img src=\"assets/img/user1.png\" />\n      </ion-avatar>\n      <div>\n        <ion-card-title>{{'DASHBAORD.status' | translate }}: {{details?.dashboard_data?.yourStatus.toUpperCase()}} </ion-card-title>\n        <ion-card-subtitle class=\"sub-title\" (click)=\"shareReffralLink(details?.dashboard_data?.referralLink)\">\n          {{'DASHBAORD.referral_link' | translate }}</ion-card-subtitle>\n      </div>\n    </ion-card-header>\n  </ion-card>\n  <ion-card style=\"border: solid 1px #ccc;\" *ngIf=\"getLastPayments?.length>0\">\n    <ion-card-header style=\"background-color: #858282;\" >\n      <ion-card-title> {{'AREA_OF_INTEREST.lastPaymnet' | translate }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content  *ngFor=\"let gPay of getLastPayments; let i = index\" style=\"border: solid #858282 1px; margin:10px;border-radius:15px;\n    padding: 10px;\" [ngClass]=\"{'pending': gPay?.paymentStatus == 'pending', 'completed':  gPay?.paymentStatus == 'completed', 'failed':  gPay?.paymentStatus == 'failed' || gPay?.paymentStatus == 'cancelled'}\">\n      <!-- <div *ngIf=\"calculateDiff(gPay?.paymentDate)\">\n        jbb\n            </div> -->\n     <!-- <ion-list lines=\"none\"  >\n        <ion-item >\n          <ion-label> -->\n            <p>{{'AREA_OF_INTEREST.date' | translate }}:<span>{{gPay?.paymentDate}}\n            </span></p>\n          <!-- </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label> -->\n            <p>  {{'AREA_OF_INTEREST.amount' | translate }}:<span>{{gPay?.totalAmount}}  &euro;\n            </span></p>\n          <!-- </ion-label>\n          </ion-item>\n          <ion-item >\n            <ion-label> -->\n              <p *ngIf=\"utility.deviceLang == 'de'\">  {{'AREA_OF_INTEREST.status' | translate }}:<span>{{gPay?.statusGerman | uppercase }}\n              </span></p>\n              <p *ngIf=\"utility.deviceLang == 'en'\">  {{'AREA_OF_INTEREST.status' | translate }}:<span>{{gPay?.statusEnglish | uppercase }}\n              </span></p>\n          <!-- </ion-label>\n          </ion-item>\n         \n         \n        </ion-list> -->\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card>\n    <ion-card-header class=\"title-border\">\n      <ion-card-title>{{'DASHBAORD.openaction.title' | translate }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"\">\n      <ion-button class=\"card-btn\" color=\"danger\" expand=\"block\" (click)=\"utility.goNext('/member-replacement')\" *ngIf=\"details?.dashboard_data?.usersToBePlaced > 0 \">\n        ({{details?.dashboard_data?.usersToBePlaced > 0 ?\n        details?.dashboard_data?.usersToBePlaced:0}}){{'DASHBAORD.openaction.action1' | translate }}</ion-button>\n     \n      <ion-button class=\"card-btn\" color=\"danger\" expand=\"block\" (click)=\"utility.goNext('/tabs/paymnet-option')\" *ngIf=\"details?.dashboard_data?.myPaymentOption == ''\">\n        {{'DASHBAORD.openaction.action2' | translate }}</ion-button>\n\n        <ion-button class=\"card-btn\" color=\"danger\" expand=\"block\" (click)=\"utility.goNext('/tabs/commission-option')\" *ngIf=\"details?.dashboard_data?.show_commission_payment_link == 'yes'\">\n          {{'DASHBAORD.openaction.action3' | translate }}</ion-button>\n\n          <ion-button class=\"card-btn\" color=\"danger\" expand=\"block\" *ngIf=\"details?.dashboard_data?.show_tax_form == 'yes'\" (click)=\"utility.goNext('/tabs/partner-agreement')\">\n            {{'DASHBAORD.openaction.action4' | translate }}</ion-button>\n            <!-- (click)=\"utility.goNext('/tabs/partner-agreement')\"  -->\n        \n        <p style=\"padding: 10px;\" *ngIf=\"details?.dashboard_data?.usersToBePlaced <= 0 && details?.dashboard_data?.myPaymentOption != '' && details?.dashboard_data?.show_tax_form == 'no' && details?.dashboard_data?.show_commission_payment_link == 'no' \">\n          \n          {{'DASHBAORD.no_action' | translate }}\n          </p>\n \n    </ion-card-content>\n  </ion-card>\n  <!-- prospect refferal -->\n  <ion-card>\n    <ion-card-header>\n\n      <ion-avatar>\n        <img src=\"assets/img/user.png\" />\n      </ion-avatar>\n      <div class=\"refferral\">\n        <ion-card-title> {{'DASHBAORD.referral.title_pros' | translate }}</ion-card-title>\n        <ion-card-subtitle class=\"sub-title\" (click)=\"goTo('/tabs/user-managment/prospect')\">\n          {{'DASHBAORD.referral.prospect' | translate }}</ion-card-subtitle>\n      </div>\n    </ion-card-header>\n  </ion-card>\n  <!-- member referral -->\n  <ion-card>\n    <ion-card-header>\n\n      <ion-avatar>\n        <img src=\"assets/img/user3.png\" />\n      </ion-avatar>\n      <div class=\"refferral\">\n        <ion-card-title>{{'DASHBAORD.referral.title_mem' | translate }}</ion-card-title>\n        <ion-card-subtitle class=\"sub-title\" (click)=\"goTo('/tabs/user-managment/member')\">{{'DASHBAORD.referral.member'\n          | translate }}</ion-card-subtitle>\n      </div>\n    </ion-card-header>\n  </ion-card>\n\n  <!-- your rank -->\n  <ion-card *ngIf=\"details?.dashboard_data?.yourStatus == 'partner'\">\n    <ion-card-header class=\"title-border diffColor blue\">\n      <ion-card-title>{{'DASHBAORD.yourrank.title' | translate }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"\">\n      <ion-list lines=\"none\" class=\"title-border\" style=\"margin:2px 0px\">\n        <ion-item *ngIf=\"details?.dashboard_data?.rank\">\n          <ion-label>{{'DASHBAORD.yourrank.title' | translate }}:</ion-label>\n          <span>{{details?.dashboard_data?.rank!= '' ? details?.dashboard_data?.rank:\"--\"}}</span>\n        </ion-item>\n        <ion-item *ngIf=\"details?.dashboard_data?.GV\">\n          <ion-label>{{'DASHBAORD.yourrank.gvcounting' | translate }} :</ion-label>\n          <span>{{details?.dashboard_data?.GV!= '' ? details?.dashboard_data?.GV:\"--\"}}\n          </span>\n        </ion-item>\n        <ion-item *ngIf=\"details?.dashboard_data?.DV\">\n          <ion-label>{{'DASHBAORD.yourrank.dv' | translate }} :</ion-label>\n          <span>{{details?.dashboard_data?.DV!= '' ? details?.dashboard_data?.DV:\"--\"}}\n          </span>\n        </ion-item>\n        <ion-item *ngIf=\"details?.dashboard_data?.rankRewardCycle\">\n          <ion-label>{{'DASHBAORD.yourrank.rrc' | translate }} :</ion-label>\n          <span>{{details?.dashboard_data?.rankRewardCycle!= '' ? details?.dashboard_data?.rankRewardCycle:\"--\"}}\n          </span>\n        </ion-item>\n        <ion-item *ngIf=\"details?.dashboard_data?.leaderBonusDays\">\n          <ion-label>{{'DASHBAORD.yourrank.lbd' | translate }} :</ion-label>\n          <span>{{details?.dashboard_data?.leaderBonusDays!= '' ? details?.dashboard_data?.leaderBonusDays:\"--\"}}\n          </span>\n        </ion-item>\n      </ion-list>\n\n      <ion-list lines=\"none\">\n        <ion-item *ngIf=\"details?.dashboard_data?.nextRank\">\n          <ion-label> {{'DASHBAORD.yourrank.nextrank' | translate }}:</ion-label>\n          <span>{{details?.dashboard_data?.nextRank!= '' ? details?.dashboard_data?.nextRank:\"--\"}}\n          </span>\n        </ion-item>\n        <ion-item *ngIf=\"details?.dashboard_data?.GVRequired\">\n          <ion-label>{{'DASHBAORD.yourrank.gvcountingReq' | translate }}:</ion-label>\n          <span>{{details?.dashboard_data?.GVRequired!= '' ? details?.dashboard_data?.GVRequired:\"--\"}}\n          </span>\n        </ion-item>\n        <ion-item *ngIf=\"details?.dashboard_data?.membersRequired\">\n          <ion-label>{{'DASHBAORD.yourrank.memReq' | translate }}:</ion-label>\n          <span>{{details?.dashboard_data?.membersRequired!= '' ? details?.dashboard_data?.membersRequired:\"--\"}}\n          </span>\n        </ion-item>\n        <ion-item *ngIf=\"details?.dashboard_data?.DMVRequired\">\n          <ion-label>{{'DASHBAORD.yourrank.dvReq' | translate }} :</ion-label>\n          <span>{{details?.dashboard_data?.DMVRequired!= '' ? details?.dashboard_data?.DMVRequired:\"--\"}}\n          </span>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n\n  <!-- line -->\n  <ion-card *ngIf=\"details?.dashboard_data?.yourStatus == 'partner'\">\n    <ion-card-header class=\"title-border diffColor green\">\n      <ion-card-title>{{'DASHBAORD.line.title' | translate }} 1 </ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"\">\n      <ion-list lines=\"none\" class=\"\" style=\"margin:2px 0px\">\n        <ion-item >\n          <ion-label>{{'DASHBAORD.line.members' | translate }}:</ion-label>\n          <span>{{details?.dashboard_data?.membersLeg1!= '' ? details?.dashboard_data?.membersLeg1:\"--\"}}\n          </span>\n        </ion-item>\n        <ion-item >\n          <ion-label>{{'DASHBAORD.line.gv' | translate }} :</ion-label>\n          <span>{{details?.dashboard_data?.GVLeg1!= '' ? details?.dashboard_data?.GVLeg1:\"--\"}}\n          </span>\n        </ion-item>\n        <ion-item >\n          <ion-label>{{'DASHBAORD.line.gvcounting' | translate }}:</ion-label>\n          <span>{{details?.dashboard_data?.GVCountingLeg1!= '' ? details?.dashboard_data?.GVCountingLeg1:\"--\"}}\n          </span>\n        </ion-item>\n\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <!-- line -->\n  <ion-card *ngIf=\"details?.dashboard_data?.yourStatus == 'partner'\">\n    <ion-card-header class=\"title-border diffColor yellow\">\n      <ion-card-title>{{'DASHBAORD.line.title' | translate }} 2</ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"\">\n      <ion-list lines=\"none\" class=\"\" style=\"margin:2px 0px\">\n        <ion-item >\n          <ion-label>{{'DASHBAORD.line.members' | translate }}:</ion-label>\n          <span>{{details?.dashboard_data?.membersLeg2!= '' ? details?.dashboard_data?.membersLeg2:\"--\"}}\n          </span>\n        </ion-item>\n        <ion-item >\n          <ion-label>{{'DASHBAORD.line.gv' | translate }} :</ion-label>\n          <span>{{details?.dashboard_data?.GVLeg2!= '' ? details?.dashboard_data?.GVLeg2:\"--\"}}\n          </span>\n        </ion-item>\n        <ion-item >\n          <ion-label>{{'DASHBAORD.line.gvcounting' | translate }}:</ion-label>\n          <span>{{details?.dashboard_data?.GVCountingLeg2!= '' ? details?.dashboard_data?.GVCountingLeg2:\"--\"}}\n          </span>\n        </ion-item>\n\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <!-- line -->\n  <ion-card *ngIf=\"details?.dashboard_data?.yourStatus == 'partner'\">\n    <ion-card-header class=\"title-border diffColor red\">\n      <ion-card-title>{{'DASHBAORD.line.title' | translate }} 3</ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"\">\n      <ion-list lines=\"none\" class=\"\" style=\"margin:2px 0px\">\n        <ion-item >\n          <ion-label>{{'DASHBAORD.line.members' | translate }}:</ion-label>\n          <span>{{details?.dashboard_data?.membersLeg3!= '' ? details?.dashboard_data?.membersLeg3:\"--\"}}\n           </span>\n        </ion-item>\n        <ion-item >\n          <ion-label>{{'DASHBAORD.line.gv' | translate }} :</ion-label>\n          <span>{{details?.dashboard_data?.GVLeg3!= '' ? details?.dashboard_data?.GVLeg3:\"--\"}}\n           </span>\n        </ion-item>\n        <ion-item >\n          <ion-label>{{'DASHBAORD.line.gvcounting' | translate }}:</ion-label>\n          <span>{{details?.dashboard_data?.GVCountingLeg3!= '' ? details?.dashboard_data?.GVCountingLeg3:\"--\"}}\n            </span>\n        </ion-item>\n\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- products -->\n\n  <ion-card *ngIf=\"details?.products != null && details?.products.length > 0\">\n    <ion-card-header class=\"title-border  \">\n      <ion-card-title>{{'DASHBAORD.products.title' | translate }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"products\">\n      <ion-list lines=\"none\" class=\"\" *ngFor=\"let prod of details?.products; let i = index\">\n\n        <ion-item>\n          {{prod?.packageName}}\n        </ion-item>\n        <ion-item >\n          {{'DASHBAORD.products.expiry' | translate }} :\n          <span *ngIf=\"prod?.expiryDate && prod?.expiryDate \">\n            {{prod?.validTill != '' ? prod?.validTill: '0 Day'}}\n          </span>\n        </ion-item>\n\n\n      </ion-list>\n      <ion-button class=\"btn\" color=\"danger\" expand=\"block\" (click)=\"utility.goNext('/tabs/myproducts')\">\n        {{'DASHBAORD.products.btn' | translate }}\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n\n  <div style=\"padding:10px;\"></div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_dashboard_module_ts.js.map