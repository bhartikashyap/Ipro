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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _area_of_interest_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area-of-interest.page.html?ngResource */ 10125);
/* harmony import */ var _area_of_interest_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area-of-interest.page.scss?ngResource */ 21918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utility/message */ 34410);










let AreaOfInterestPage = class AreaOfInterestPage {
    constructor(router, menu, navCtrl, utility, apiSer, platform) {
        this.router = router;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.utility = utility;
        this.apiSer = apiSer;
        this.platform = platform;
        this.dashboardData = [];
    }
    ngOnInit() {
        console.log(this.navCtrl);
        console.log(this.router.url);
        console.log(this.router.getCurrentNavigation(), "getCurrentNavigation");
    }
    ionViewWillEnter() {
        this.subscription = this.platform.backButton.subscribeWithPriority(9999, () => {
            // do nothing
        });
        this.getDashboard();
        this.utility.changeMenu();
        this.utility.setStorage(src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.session.SELECTED_PLAN, 'basket');
        this.utility.getCart('cart');
        // this.utility.changeMessage("Push Notification");
    }
    openMenu() {
        //  alert("hii")
        this.menu.enable(true);
        this.menu.open('first');
    }
    openPersonalized() {
        this.utility.goNext('/tabs/personalized-micronutrition');
    }
    openIntelligent() {
        this.utility.goNext('/tabs/inteligent-trading');
    }
    openPartnership() {
        this.utility.goNext("/tabs/ipro-partnership");
    }
    getDashboard() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
    ionViewWillLeave() {
        this.subscription.unsubscribe();
    }
};
AreaOfInterestPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform }
];
AreaOfInterestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-area-of-interest',
        template: _area_of_interest_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_area_of_interest_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AreaOfInterestPage);

//


/***/ }),

/***/ 21918:
/*!******************************************************************************!*\
  !*** ./src/app/pages/area-of-interest/area-of-interest.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".section.section-gray {\n  background: #f1f1f1;\n}\n\n.section {\n  padding: 20px;\n}\n\n.section ion-button {\n  --height: 75px !important;\n  height: 75px;\n}\n\nh1 {\n  margin-top: 20px;\n  font-size: 26px;\n  text-align: center;\n  margin-bottom: 20px;\n  color: #666666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFyZWEtb2YtaW50ZXJlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7QUFFRjs7QUFERTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQUdKOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFHRiIsImZpbGUiOiJhcmVhLW9mLWludGVyZXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLnNlY3Rpb24tZ3JheSB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG4uc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBpb24tYnV0dG9uIHtcclxuICAgIC0taGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgfVxyXG59XHJcbmgxIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBjb2xvcjogIzY2NjY2NjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */";

/***/ }),

/***/ 10125:
/*!******************************************************************************!*\
  !*** ./src/app/pages/area-of-interest/area-of-interest.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n<app-header  [headerTitle]=\"'PAGES.DASHBOARD' | translate\"  [headerBack]=false  ></app-header>\n<ion-content>\n  <h1>{{'AREA_OF_INTEREST.TITLE' | translate}}</h1>\n  <div class=\"section section-gray\">\n    <ion-button class=\"btn\" color=\"danger\" expand=\"block\" (click)=\"openPersonalized()\">\n      {{'AREA_OF_INTEREST.PERSONALIZED_BTN' | translate}}</ion-button>\n    <p>{{dashboardData[0]?.firstEN}}\n\n    <!-- </p>\n    <p> -->\n      {{dashboardData[0]?.secondEN}}</p>\n  </div>\n  <!-- <div class=\"section\">\n    <ion-button class=\"btn\" color=\"danger\" expand=\"block\" (click)=\"openIntelligent()\">\n      {{'AREA_OF_INTEREST.INTELIGENT_BTN' | translate}}</ion-button>\n    <p>{{'AREA_OF_INTEREST.INTELIGENT_TEXT' | translate}}</p>\n  </div> -->\n  <div class=\"section section-gray\">\n    <ion-button class=\"btn\" color=\"danger\" expand=\"block\" (click)=\"openPartnership()\">\n      {{'AREA_OF_INTEREST.PARTNERSHIP_BTN' | translate}}</ion-button>\n      <p>{{dashboardData[1]?.firstEN}}\n\n      <!-- </p> <p> -->\n        {{dashboardData[1]?.secondEN}}</p>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_area-of-interest_area-of-interest_module_ts.js.map