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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page.html?ngResource */ 73890);
/* harmony import */ var _dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss?ngResource */ 90442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/share */ 58722);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var src_app_utility_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utility/message */ 34410);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);










let DashboardPage = class DashboardPage {
    constructor(utility, apiSer, route, platform) {
        this.utility = utility;
        this.apiSer = apiSer;
        this.route = route;
        this.platform = platform;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.utility.changeMenu();
        this.utility.getCart('cart');
        this.utility.setStorage(src_app_utility_message__WEBPACK_IMPORTED_MODULE_5__.session.SELECTED_PLAN, 'basket');
        let paramType;
        this.route.params.subscribe(params => {
            paramType = params.type;
        });
        this.getDetails(paramType);
    }
    getDetails(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
            }
            loading.dismiss();
        });
    }
    goTo(link) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.utility.goNext(link);
        });
    }
    shareReffralLink(link) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
};
DashboardPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform }
];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
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

module.exports = "ion-card-header {\n  display: flex;\n}\n\nion-avatar {\n  margin-right: 20px;\n  /* height: 60px; */\n  margin-top: 10px;\n}\n\n.refferral ion-card-title {\n  font-size: 16px;\n}\n\nion-card-title {\n  font-size: 18px;\n}\n\n.sub-title {\n  background-color: #000;\n  color: #fff;\n  padding: 11px;\n  border-radius: 8px;\n  margin-top: 10px;\n  font-size: 12px;\n  text-align: center;\n}\n\n.title-border {\n  border-bottom: 1px solid #ccc;\n}\n\n.card-btn {\n  text-transform: uppercase;\n  margin: 10px;\n  font-size: 12px !important;\n}\n\n.yellow {\n  background-color: #F9C30C;\n}\n\n.green {\n  background-color: #53AF25;\n}\n\n.blue {\n  background-color: #14253B;\n}\n\n.red {\n  background-color: #FF1601;\n}\n\n.diffColor ion-card-title {\n  color: #fff !important;\n}\n\n.products ion-list {\n  border: solid 1px #ccc;\n  border-radius: 10px;\n  padding: 5px;\n  margin: 12px 0px;\n}\n\n.products ion-item {\n  font-size: 13px;\n}\n\nion-card {\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFFSTtFQUNJLGVBQUE7QUFDUjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUFFSjs7QUFBQTtFQUNJLHlCQUFBO0FBR0o7O0FBREE7RUFDSSx5QkFBQTtBQUlKOztBQUZBO0VBQ0kseUJBQUE7QUFLSjs7QUFIQTtFQUNJLHlCQUFBO0FBTUo7O0FBSEE7RUFDSSxzQkFBQTtBQU1KOztBQURJO0VBQ0ksc0JBQUE7RUFDQyxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUlUOztBQUZLO0VBQ0UsZUFBQTtBQUlQOztBQURBO0VBQ0ksbUJBQUE7QUFJSiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtaGVhZGVye1xuICAgIGRpc3BsYXk6ZmxleDtcbn1cbmlvbi1hdmF0YXJ7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIC8qIGhlaWdodDogNjBweDsgKi9cbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucmVmZmVycmFse1xuICAgIGlvbi1jYXJkLXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxufVxuaW9uLWNhcmQtdGl0bGV7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc3ViLXRpdGxle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTFweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0bGUtYm9yZGVye1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNjY2M7XG59XG4uY2FyZC1idG57XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW46MTBweDtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cbi55ZWxsb3d7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5QzMwQztcbn1cbi5ncmVlbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTNBRjI1O1xufVxuLmJsdWV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MjUzQjtcbn1cbi5yZWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMTYwMTtcbiAgICAvLyBcbn1cbi5kaWZmQ29sb3IgaW9uLWNhcmQtdGl0bGV7XG4gICAgY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xufVxuXG4ucHJvZHVjdHN7XG5cbiAgICBpb24tbGlzdHtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICBtYXJnaW46IDEycHggMHB4O1xuICAgICB9XG4gICAgIGlvbi1pdGVte1xuICAgICAgIGZvbnQtc2l6ZToxM3B4O1xuICAgICB9XG59XG5pb24tY2FyZHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufSJdfQ== */";

/***/ }),

/***/ 73890:
/*!****************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<app-header [headerTitle]=\"'PAGES.DASHBOARD' | translate\" [headerBack]=false></app-header>\n\n<ion-content style=\"padding:10px;\">\n  <div style=\"padding:10px;\"></div>\n  <ion-card>\n    <ion-card-header>\n\n      <ion-avatar>\n        <img src=\"assets/img/user1.png\" />\n      </ion-avatar>\n      <div>\n        <ion-card-title>{{'DASHBAORD.status' | translate }}: {{details?.dashboard_data?.yourStatus.toUpperCase()}} </ion-card-title>\n        <ion-card-subtitle class=\"sub-title\" (click)=\"shareReffralLink(details?.dashboard_data?.referralLink)\">\n          {{'DASHBAORD.referral_link' | translate }}</ion-card-subtitle>\n      </div>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header class=\"title-border\">\n      <ion-card-title>{{'DASHBAORD.openaction.title' | translate }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"\">\n      <ion-button class=\"card-btn\" color=\"danger\" expand=\"block\" (click)=\"utility.goNext('/member-replacement')\" *ngIf=\"details?.dashboard_data?.usersToBePlaced > 0 \">\n        ({{details?.dashboard_data?.usersToBePlaced > 0 ?\n        details?.dashboard_data?.usersToBePlaced:0}}){{'DASHBAORD.openaction.action1' | translate }}</ion-button>\n     \n      <ion-button class=\"card-btn\" color=\"danger\" expand=\"block\" (click)=\"utility.goNext('/tabs/paymnet-option')\" *ngIf=\"details?.dashboard_data?.myPaymentOption == ''\">\n        {{'DASHBAORD.openaction.action2' | translate }}</ion-button>\n\n        <ion-button class=\"card-btn\" color=\"danger\" expand=\"block\" (click)=\"utility.goNext('/tabs/commission-option')\" *ngIf=\"details?.dashboard_data?.show_commission_payment_link == 'yes'\">\n          {{'DASHBAORD.openaction.action3' | translate }}</ion-button>\n\n          <ion-button class=\"card-btn\" color=\"danger\" expand=\"block\" *ngIf=\"details?.dashboard_data?.show_tax_form == 'yes'\" (click)=\"utility.goNext('/tabs/partner-agreement')\">\n            {{'DASHBAORD.openaction.action4' | translate }}</ion-button>\n            <!-- (click)=\"utility.goNext('/tabs/partner-agreement')\"  -->\n        \n        <p style=\"padding: 10px;\" *ngIf=\"details?.dashboard_data?.usersToBePlaced <= 0 && details?.dashboard_data?.myPaymentOption != '' && details?.dashboard_data?.show_tax_form == 'no' && details?.dashboard_data?.show_commission_payment_link == 'no' \">\n          \n          {{'DASHBAORD.no_action' | translate }}\n          </p>\n \n    </ion-card-content>\n  </ion-card>\n  <!-- prospect refferal -->\n  <ion-card>\n    <ion-card-header>\n\n      <ion-avatar>\n        <img src=\"assets/img/user.png\" />\n      </ion-avatar>\n      <div class=\"refferral\">\n        <ion-card-title> {{'DASHBAORD.referral.title_pros' | translate }}</ion-card-title>\n        <ion-card-subtitle class=\"sub-title\" (click)=\"goTo('/tabs/user-managment/prospect')\">\n          {{'DASHBAORD.referral.prospect' | translate }}</ion-card-subtitle>\n      </div>\n    </ion-card-header>\n  </ion-card>\n  <!-- member referral -->\n  <ion-card>\n    <ion-card-header>\n\n      <ion-avatar>\n        <img src=\"assets/img/user3.png\" />\n      </ion-avatar>\n      <div class=\"refferral\">\n        <ion-card-title>{{'DASHBAORD.referral.title_mem' | translate }}</ion-card-title>\n        <ion-card-subtitle class=\"sub-title\" (click)=\"goTo('/tabs/user-managment/member')\">{{'DASHBAORD.referral.member'\n          | translate }}</ion-card-subtitle>\n      </div>\n    </ion-card-header>\n  </ion-card>\n\n  <!-- your rank -->\n  <ion-card *ngIf=\"details?.dashboard_data?.yourStatus == 'partner'\">\n    <ion-card-header class=\"title-border diffColor blue\">\n      <ion-card-title>{{'DASHBAORD.yourrank.title' | translate }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"\">\n      <ion-list lines=\"none\" class=\"title-border\" style=\"margin:2px 0px\">\n        <ion-item *ngIf=\"details?.dashboard_data?.rank\">\n          <ion-label>{{'DASHBAORD.yourrank.title' | translate }}:</ion-label>\n          <span>{{details?.dashboard_data?.rank!= '' ? details?.dashboard_data?.rank:\"--\"}}</span>\n        </ion-item>\n        <ion-item *ngIf=\"details?.dashboard_data?.GV\">\n          <ion-label>{{'DASHBAORD.yourrank.gvcounting' | translate }} :</ion-label>\n          <span>{{details?.dashboard_data?.GV!= '' ? details?.dashboard_data?.GV:\"--\"}}\n          </span>\n        </ion-item>\n        <ion-item *ngIf=\"details?.dashboard_data?.DV\">\n          <ion-label>{{'DASHBAORD.yourrank.dv' | translate }} :</ion-label>\n          <span>{{details?.dashboard_data?.DV!= '' ? details?.dashboard_data?.DV:\"--\"}}\n          </span>\n        </ion-item>\n        <ion-item *ngIf=\"details?.dashboard_data?.rankRewardCycle\">\n          <ion-label>{{'DASHBAORD.yourrank.rrc' | translate }} :</ion-label>\n          <span>{{details?.dashboard_data?.rankRewardCycle!= '' ? details?.dashboard_data?.rankRewardCycle:\"--\"}}\n          </span>\n        </ion-item>\n        <ion-item *ngIf=\"details?.dashboard_data?.leaderBonusDays\">\n          <ion-label>{{'DASHBAORD.yourrank.lbd' | translate }} :</ion-label>\n          <span>{{details?.dashboard_data?.leaderBonusDays!= '' ? details?.dashboard_data?.leaderBonusDays:\"--\"}}\n          </span>\n        </ion-item>\n      </ion-list>\n\n      <ion-list lines=\"none\">\n        <ion-item *ngIf=\"details?.dashboard_data?.nextRank\">\n          <ion-label> {{'DASHBAORD.yourrank.nextrank' | translate }}:</ion-label>\n          <span>{{details?.dashboard_data?.nextRank!= '' ? details?.dashboard_data?.nextRank:\"--\"}}\n          </span>\n        </ion-item>\n        <ion-item *ngIf=\"details?.dashboard_data?.GVRequired\">\n          <ion-label>{{'DASHBAORD.yourrank.gvcountingReq' | translate }}:</ion-label>\n          <span>{{details?.dashboard_data?.GVRequired!= '' ? details?.dashboard_data?.GVRequired:\"--\"}}\n          </span>\n        </ion-item>\n        <ion-item *ngIf=\"details?.dashboard_data?.membersRequired\">\n          <ion-label>{{'DASHBAORD.yourrank.memReq' | translate }}:</ion-label>\n          <span>{{details?.dashboard_data?.membersRequired!= '' ? details?.dashboard_data?.membersRequired:\"--\"}}\n          </span>\n        </ion-item>\n        <ion-item *ngIf=\"details?.dashboard_data?.DMVRequired\">\n          <ion-label>{{'DASHBAORD.yourrank.dvReq' | translate }} :</ion-label>\n          <span>{{details?.dashboard_data?.DMVRequired!= '' ? details?.dashboard_data?.DMVRequired:\"--\"}}\n          </span>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n\n  <!-- line -->\n  <ion-card *ngIf=\"details?.dashboard_data?.yourStatus == 'partner'\">\n    <ion-card-header class=\"title-border diffColor green\">\n      <ion-card-title>{{'DASHBAORD.line.title' | translate }} 1 </ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"\">\n      <ion-list lines=\"none\" class=\"\" style=\"margin:2px 0px\">\n        <ion-item >\n          <ion-label>{{'DASHBAORD.line.members' | translate }}:</ion-label>\n          <span>{{details?.dashboard_data?.membersLeg1!= '' ? details?.dashboard_data?.membersLeg1:\"--\"}}\n          </span>\n        </ion-item>\n        <ion-item >\n          <ion-label>{{'DASHBAORD.line.gv' | translate }} :</ion-label>\n          <span>{{details?.dashboard_data?.GVLeg1!= '' ? details?.dashboard_data?.GVLeg1:\"--\"}}\n          </span>\n        </ion-item>\n        <ion-item >\n          <ion-label>{{'DASHBAORD.line.gvcounting' | translate }}:</ion-label>\n          <span>{{details?.dashboard_data?.GVCountingLeg1!= '' ? details?.dashboard_data?.GVCountingLeg1:\"--\"}}\n          </span>\n        </ion-item>\n\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <!-- line -->\n  <ion-card *ngIf=\"details?.dashboard_data?.yourStatus == 'partner'\">\n    <ion-card-header class=\"title-border diffColor yellow\">\n      <ion-card-title>{{'DASHBAORD.line.title' | translate }} 2</ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"\">\n      <ion-list lines=\"none\" class=\"\" style=\"margin:2px 0px\">\n        <ion-item >\n          <ion-label>{{'DASHBAORD.line.members' | translate }}:</ion-label>\n          <span>{{details?.dashboard_data?.membersLeg2!= '' ? details?.dashboard_data?.membersLeg2:\"--\"}}\n          </span>\n        </ion-item>\n        <ion-item >\n          <ion-label>{{'DASHBAORD.line.gv' | translate }} :</ion-label>\n          <span>{{details?.dashboard_data?.GVLeg2!= '' ? details?.dashboard_data?.GVLeg2:\"--\"}}\n          </span>\n        </ion-item>\n        <ion-item >\n          <ion-label>{{'DASHBAORD.line.gvcounting' | translate }}:</ion-label>\n          <span>{{details?.dashboard_data?.GVCountingLeg2!= '' ? details?.dashboard_data?.GVCountingLeg2:\"--\"}}\n          </span>\n        </ion-item>\n\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <!-- line -->\n  <ion-card *ngIf=\"details?.dashboard_data?.yourStatus == 'partner'\">\n    <ion-card-header class=\"title-border diffColor red\">\n      <ion-card-title>{{'DASHBAORD.line.title' | translate }} 3</ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"\">\n      <ion-list lines=\"none\" class=\"\" style=\"margin:2px 0px\">\n        <ion-item >\n          <ion-label>{{'DASHBAORD.line.members' | translate }}:</ion-label>\n          <span>{{details?.dashboard_data?.membersLeg3!= '' ? details?.dashboard_data?.membersLeg3:\"--\"}}\n           </span>\n        </ion-item>\n        <ion-item >\n          <ion-label>{{'DASHBAORD.line.gv' | translate }} :</ion-label>\n          <span>{{details?.dashboard_data?.GVLeg3!= '' ? details?.dashboard_data?.GVLeg3:\"--\"}}\n           </span>\n        </ion-item>\n        <ion-item >\n          <ion-label>{{'DASHBAORD.line.gvcounting' | translate }}:</ion-label>\n          <span>{{details?.dashboard_data?.GVCountingLeg3!= '' ? details?.dashboard_data?.GVCountingLeg3:\"--\"}}\n            </span>\n        </ion-item>\n\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- products -->\n\n  <ion-card *ngIf=\"details?.products != null && details?.products.length > 0\">\n    <ion-card-header class=\"title-border  \">\n      <ion-card-title>{{'DASHBAORD.products.title' | translate }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"products\">\n      <ion-list lines=\"none\" class=\"\" *ngFor=\"let prod of details?.products; let i = index\">\n\n        <ion-item>\n          {{prod?.packageName}}\n        </ion-item>\n        <ion-item >\n          {{'DASHBAORD.products.expiry' | translate }} :\n          <span *ngIf=\"prod?.expiryDate && prod?.expiryDate \">\n            {{prod?.validTill != '' ? prod?.validTill: '0 Day'}}\n          </span>\n        </ion-item>\n\n\n      </ion-list>\n      <ion-button class=\"btn\" color=\"danger\" expand=\"block\" (click)=\"utility.goNext('/tabs/myproducts')\">\n        {{'DASHBAORD.products.btn' | translate }}\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n\n  <div style=\"padding:10px;\"></div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_dashboard_module_ts.js.map