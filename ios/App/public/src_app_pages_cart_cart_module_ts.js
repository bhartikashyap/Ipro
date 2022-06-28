"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_cart_cart_module_ts"],{

/***/ 10485:
/*!***************************************************!*\
  !*** ./src/app/pages/cart/cart-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageRoutingModule": () => (/* binding */ CartPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.page */ 53278);




const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_0__.CartPage
    }
];
let CartPageRoutingModule = class CartPageRoutingModule {
};
CartPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CartPageRoutingModule);



/***/ }),

/***/ 70313:
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageModule": () => (/* binding */ CartPageModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-routing.module */ 10485);
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.page */ 53278);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30610);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _components_share_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/share-component-module */ 99663);











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let CartPageModule = class CartPageModule {
};
CartPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
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
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_0__.CartPageRoutingModule
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_1__.CartPage],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe]
    })
], CartPageModule);



/***/ }),

/***/ 53278:
/*!*****************************************!*\
  !*** ./src/app/pages/cart/cart.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPage": () => (/* binding */ CartPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _cart_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.page.html?ngResource */ 99631);
/* harmony import */ var _cart_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.page.scss?ngResource */ 2665);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 78394);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utility/message */ 34410);











let CartPage = class CartPage {
    constructor(utility, apiService, router, navController, domSanit, datepipe) {
        this.utility = utility;
        this.apiService = apiService;
        this.router = router;
        this.navController = navController;
        this.domSanit = domSanit;
        this.datepipe = datepipe;
        this.booking = null;
        this.plan = null;
        this.vat = null;
        this.products_data = [];
        this.termsConditionStatus = false;
        this.privacyPolicyStatus = false;
        this.ionModelOpen = false;
        // this.getPlanDetail();
    }
    ngOnInit() {
        // this.getPlanDetail();
    }
    ionViewWillEnter() {
        this.getPlanDetail();
    }
    getPlanDetail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.selectedPlan = yield this.utility.getStorage(src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.session.SELECTED_PLAN);
            console.log(this.selectedPlan);
            let loading = yield this.utility.presentLoading();
            let booking = yield this.utility.getStorage(src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.session.BOOKING);
            this.booking = booking ? JSON.parse(booking) : null;
            let response = yield this.apiService.getPlanDetail(this.selectedPlan);
            loading.dismiss();
            if (response.status == 1) {
                this.plan = response.data ? response.data : null;
                if (this.plan) {
                    this.products_data = this.plan.products_data ? this.plan.products_data : [];
                    this.vat = this.plan.vat ? this.plan.vat : null;
                }
            }
        });
    }
    buyCart() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // this.openQuestion();
            // if(!this.termsConditionStatus){
            //   this.utility.presentToast('Select terms & condition');
            //   return false;
            // }else if(!this.privacyPolicyStatus){
            //   this.utility.presentToast('Select privacy policy');
            //   return false;
            // }else
            if (!this.booking) {
                this.utility.presentToast('Booking detail not found', "bottom");
                return false;
            }
            else {
                let latest_date = '';
                if (this.booking.dob) {
                    let dob = new Date(this.booking.dob);
                    latest_date = this.datepipe.transform(dob, 'dd-MM-yyyy');
                }
                let params = {
                    selected_plan: this.selectedPlan ? this.selectedPlan : 'body analysis',
                    email: this.booking.email ? this.booking.email : '',
                    countryId: this.booking.countryId ? Number(this.booking.countryId) : 0,
                    nr: this.booking.nr ? this.booking.nr : '',
                    streetname: this.booking.streetname ? this.booking.streetname : '',
                    city: this.booking.city ? this.booking.city : '',
                    zipCode: this.booking.zipCode ? Number(this.booking.zipCode) : '',
                    dob: latest_date,
                };
                let result = yield this.apiService.createPayment(params);
                if (result.status == 0) {
                    this.utility.presentToast(result.msg, "bottom");
                    return false;
                }
                else {
                    this.paymentUrl = result.response.result.redirect_url;
                    this.paymentId = result.paymentId;
                    if (this.paymentUrl) {
                        this.paymentUrl = this.domSanit.bypassSecurityTrustResourceUrl(this.paymentUrl);
                    }
                    this.validatePayment();
                    this.ionModelOpen = true;
                }
            }
        });
    }
    validatePayment() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let result = yield this.apiService.paymentStatus({
                paymentId: this.paymentId
            });
            if (result.status == 0) {
                setTimeout(() => {
                    this.validatePayment();
                }, 2000);
            }
            else {
                this.ionModelOpen = false;
                this.booking.paymentId = this.paymentId;
                let data = yield this.apiService.proceedRegistration(this.booking);
                if (data.status == 1) {
                    this.utility.presentToast(result.msg, "bottom");
                    this.resetCart();
                    this.openQuestion();
                }
                else {
                    this.utility.presentToast(result.msg, "bottom");
                    return false;
                }
            }
        });
    }
    openQuestion() {
        this.router.navigate(["/questionare"]);
    }
    resetCart() {
        this.plan = null;
        this.booking = null;
        this.vat = null;
        this.products_data = [];
        this.paymentId = null;
        this.paymentUrl = null;
        this.utility.removeStorage(src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.session.BOOKING);
    }
};
CartPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe }
];
CartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-cart',
        template: _cart_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cart_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CartPage);



/***/ }),

/***/ 2665:
/*!******************************************************!*\
  !*** ./src/app/pages/cart/cart.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "form {\n  padding-top: 70px;\n}\nform .form-group {\n  position: relative;\n  --inner-padding-end: 5px !important;\n}\nform ion-input,\nform ion-select {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  border: 1px solid #d6d6d6 !important;\n  height: 40px;\n  border-radius: 5px !important;\n  padding: 12px 11px !important;\n  --padding-bottom: 0px;\n  --padding-top: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0 !important;\n}\nform ion-item.item-has-value ion-label,\nform ion-item.item-has-focus ion-label {\n  top: 15px !important;\n  background: white;\n  z-index: 999;\n  text-align: left;\n  font-size: 16px !important;\n  width: 100px !important;\n  padding-left: 10px;\n}\nform ion-label.label-floating {\n  position: relative;\n  top: 3px;\n  left: 10px;\n  font-size: 12px !important;\n  color: gray !important;\n}\n.dont-know {\n  color: #6d6d6d;\n  font-size: 12px;\n  font-weight: 400;\n  text-decoration: none;\n  text-align: center;\n  width: 100%;\n  display: block;\n  margin-top: 20px;\n}\n.dont-know span {\n  color: #ff662a;\n}\n.btn {\n  height: 40px;\n  font-size: 12px;\n  font-weight: 600;\n  --border-radius: 4px;\n  margin-top: -2px;\n}\nion-item.form-group.country-group {\n  top: 32px;\n  position: absolute;\n  width: 70px;\n  border: 1px solid #d4d4d4;\n  height: 44px;\n  border-radius: 4px;\n  color: #727272;\n  font-size: 12px;\n}\n.form-cart {\n  padding: 12px;\n}\n.form-cart ion-col.formcart-value {\n  text-align: right;\n}\n.form-cart ion-col.formcart-value.net-amount-value,\n.form-cart ion-col.formcart-title.net-amount-title {\n  font-weight: 800;\n  font-size: 16px;\n  color: #6d6d6d;\n}\n.form-cart ion-col.formcart-title.admssion-fee-title,\n.form-cart ion-col.formcart-value.admssion-fee-value {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 21px;\n  color: #6d6d6d;\n}\n.form-cart ion-col.formcart-title.itrading-box-title,\n.form-cart ion-col.formcart-value.itrading-box-value {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 21px;\n  color: #6d6d6d;\n}\n.form-cart ion-col.formcart-title.delivery-title,\n.form-cart ion-col.formcart-value.delivery-value {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 21px;\n  color: #6d6d6d;\n}\n.form-cart ion-col.formcart-title.total.net-title,\n.form-cart ion-col.formcart-value.total.net-value {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 21px;\n  color: #6d6d6d;\n}\n.form-cart ion-col.formcart-title.vat-title,\n.form-cart ion-col.formcart-value.vat-value {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 21px;\n  color: #6d6d6d;\n}\n.form-cart ion-col.formcart-title.total-title,\n.form-cart ion-col.formcart-value.total-value {\n  font-weight: 800;\n  font-size: 16px;\n  color: #6d6d6d;\n}\n.form-cart ion-row.total.net-box-wrap {\n  padding-top: 36px;\n}\n.form-cart ion-row.total-box-wrap {\n  border-top: 1px solid;\n}\n.form-cart label {\n  left: 0px;\n  top: 0px;\n  margin: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 0px;\n  background: transparent;\n  cursor: pointer;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  outline: none;\n  display: flex;\n  align-items: center;\n  opacity: 0;\n  color: #6d6d6d;\n}\n.remove-span {\n  background: #ff662999;\n  border-radius: 9px;\n  padding: 5px;\n  font-size: 11px;\n  line-height: 10px;\n  /* color: #7a6c6c; */\n  margin-right: 4px;\n}\na {\n  color: #ff6629;\n}\n.paymentModal {\n  --height:865px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBRUUsaUJBQUE7QUFKRjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxtQ0FBQTtBQUhKO0FBS0U7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQUhKO0FBTUU7O0VBRUUsb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUpKO0FBT0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBQUxKO0FBZ0JBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBYkY7QUFjRTtFQUNFLGNBQUE7QUFaSjtBQWVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFaRjtBQWNBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFYRjtBQWFBO0VBQ0UsYUFBQTtBQVZGO0FBV0U7RUFDRSxpQkFBQTtBQVRKO0FBV0U7O0VBRUUsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVRKO0FBV0U7O0VBR0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFWSjtBQVlFOztFQUdFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBWEo7QUFhRTs7RUFHRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVpKO0FBY0U7O0VBR0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFiSjtBQWVFOztFQUdFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBZEo7QUFnQkU7O0VBRUUsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWRKO0FBZ0JFO0VBQ0UsaUJBQUE7QUFkSjtBQWdCRTtFQUNFLHFCQUFBO0FBZEo7QUFnQkU7RUFDRSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0tBQUEscUJBQUE7VUFBQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQWRKO0FBaUJBO0VBQ0UscUJBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBZEo7QUFnQkE7RUFDRSxjQUFBO0FBYkY7QUFlQTtFQUNFLGNBQUE7QUFaRiIsImZpbGUiOiJjYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5teS1zZWFyY2gtY2xhc3Mge1xyXG4vLyAgIC0taGVpZ2h0OiA1MDBweDtcclxuLy8gICAtLXdpZHRoOiA4MCU7XHJcbi8vIH1cclxuZm9ybSB7XHJcbiAvLyBwYWRkaW5nOiAyMXB4O1xyXG4gIHBhZGRpbmctdG9wOiA3MHB4O1xyXG4gIC5mb3JtLWdyb3VwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBpb24taW5wdXQsXHJcbiAgaW9uLXNlbGVjdCB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDZkNiAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDExcHggIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLWl0ZW0uaXRlbS1oYXMtdmFsdWUgaW9uLWxhYmVsLFxyXG4gIGlvbi1pdGVtLml0ZW0taGFzLWZvY3VzIGlvbi1sYWJlbCB7XHJcbiAgICB0b3A6IDE1cHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBpb24tbGFiZWwubGFiZWwtZmxvYXRpbmcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAzcHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLy8gICBpb24taWNvbiB7XHJcbiAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyAgICAgYm90dG9tOiAxMHB4O1xyXG4gIC8vICAgICByaWdodDogMjBweDtcclxuICAvLyAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIC8vICAgICB6LWluZGV4OiA5OTk5O1xyXG4gIC8vICAgfVxyXG59XHJcbi5kb250LWtub3cge1xyXG4gIGNvbG9yOiAjNmQ2ZDZkO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiAjZmY2NjJhO1xyXG4gIH1cclxufVxyXG4uYnRuIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgbWFyZ2luLXRvcDogLTJweDtcclxufVxyXG5pb24taXRlbS5mb3JtLWdyb3VwLmNvdW50cnktZ3JvdXAge1xyXG4gIHRvcDogMzJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGNvbG9yOiAjNzI3MjcyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uZm9ybS1jYXJ0IHtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGlvbi1jb2wuZm9ybWNhcnQtdmFsdWUge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIGlvbi1jb2wuZm9ybWNhcnQtdmFsdWUubmV0LWFtb3VudC12YWx1ZSxcclxuICBpb24tY29sLmZvcm1jYXJ0LXRpdGxlLm5ldC1hbW91bnQtdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNmQ2ZDZkO1xyXG4gIH1cclxuICBpb24tY29sLmZvcm1jYXJ0LXRpdGxlLmFkbXNzaW9uLWZlZS10aXRsZSxcclxuICBpb24tY29sLmZvcm1jYXJ0LXZhbHVlLmFkbXNzaW9uLWZlZS12YWx1ZSB7XHJcbiAgICAvLyBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIGNvbG9yOiAjNmQ2ZDZkO1xyXG4gIH1cclxuICBpb24tY29sLmZvcm1jYXJ0LXRpdGxlLml0cmFkaW5nLWJveC10aXRsZSxcclxuICBpb24tY29sLmZvcm1jYXJ0LXZhbHVlLml0cmFkaW5nLWJveC12YWx1ZSB7XHJcbiAgICAvLyBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIGNvbG9yOiAjNmQ2ZDZkO1xyXG4gIH1cclxuICBpb24tY29sLmZvcm1jYXJ0LXRpdGxlLmRlbGl2ZXJ5LXRpdGxlLFxyXG4gIGlvbi1jb2wuZm9ybWNhcnQtdmFsdWUuZGVsaXZlcnktdmFsdWUge1xyXG4gICAgLy8gZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBjb2xvcjogIzZkNmQ2ZDtcclxuICB9XHJcbiAgaW9uLWNvbC5mb3JtY2FydC10aXRsZS50b3RhbC5uZXQtdGl0bGUsXHJcbiAgaW9uLWNvbC5mb3JtY2FydC12YWx1ZS50b3RhbC5uZXQtdmFsdWUge1xyXG4gICAgLy8gZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBjb2xvcjogIzZkNmQ2ZDtcclxuICB9XHJcbiAgaW9uLWNvbC5mb3JtY2FydC10aXRsZS52YXQtdGl0bGUsXHJcbiAgaW9uLWNvbC5mb3JtY2FydC12YWx1ZS52YXQtdmFsdWUge1xyXG4gICAgLy8gZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBjb2xvcjogIzZkNmQ2ZDtcclxuICB9XHJcbiAgaW9uLWNvbC5mb3JtY2FydC10aXRsZS50b3RhbC10aXRsZSxcclxuICBpb24tY29sLmZvcm1jYXJ0LXZhbHVlLnRvdGFsLXZhbHVlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzZkNmQ2ZDtcclxuICB9XHJcbiAgaW9uLXJvdy50b3RhbC5uZXQtYm94LXdyYXAge1xyXG4gICAgcGFkZGluZy10b3A6IDM2cHg7XHJcbiAgfVxyXG4gIGlvbi1yb3cudG90YWwtYm94LXdyYXAge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xyXG4gIH1cclxuICBsYWJlbCB7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjb2xvcjogIzZkNmQ2ZDtcclxuICB9XHJcbn1cclxuLnJlbW92ZS1zcGFue1xyXG4gIGJhY2tncm91bmQ6ICNmZjY2Mjk5OTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgLyogY29sb3I6ICM3YTZjNmM7ICovXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxufVxyXG5he1xyXG4gIGNvbG9yOiAjZmY2NjI5O1xyXG59XHJcbi5wYXltZW50TW9kYWx7XHJcbiAgLS1oZWlnaHQ6ODY1cHg7XHJcbn1cclxuICJdfQ== */";

/***/ }),

/***/ 99631:
/*!******************************************************!*\
  !*** ./src/app/pages/cart/cart.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n<app-header  [headerTitle]=\"'PAGES.CART' | translate\"  [headerBack]=true  ></app-header>\n\n<ion-content>\n  <ion-modal [isOpen]=\"ionModelOpen\" [swipeToClose]=\"false\" [backdropDismiss]=\"false\" [keyboardClose]=\"false\" class=\"paymentModal\">\n    <ng-template>\n      <ion-content>\n        <iframe  class=\"webPage\" style=\"height: 100% !important;\" frameborder=\"0\" name=\"eventsPage\" [src]=\"paymentUrl\">\n        </iframe>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n  <form>\n    <ion-row>\n      <ion-col>\n        <ion-input type=\"number\" id=\"promocode\" placeholder=\"Promo code (If available)\" autocapitalize=\"off\">\n      </ion-input>\n    </ion-col>\n      <ion-col>\n        <ion-button (click)=\"closeModal()\" class=\"btn\" color=\"danger\" expand=\"block\">Apply</ion-button>\n      </ion-col>\n      <!-- <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n        <ion-input type=\"number\" id=\"promocode\" placeholder=\"Promo code (If available)\" autocapitalize=\"off\">\n        </ion-input>\n      </ion-item>\n      <ion-col>\n        <ion-button (click)=\"closeModal()\" class=\"btn\" color=\"danger\" expand=\"block\">Apply</ion-button>\n      </ion-col> -->\n    </ion-row>\n  </form>\n  <div class=\"form-cart\">\n    <ion-row class=\"net-amount-wrap\">\n      <ion-col class=\"formcart-title net-amount-title\">Item</ion-col>\n      <ion-col class=\"formcart-value net-amount-value\">Netto Amount</ion-col>\n    </ion-row>\n    <!-- <div > -->\n      <ion-row class=\"admssion-fee-wrap\" *ngFor=\"let item of products_data;let indexOfelement=index;\">\n        <ion-col class=\"formcart-title admssion-fee-title\">{{item?.packageName ? item?.packageName : '-'}}\n        </ion-col>\n        <ion-col class=\"formcart-value admssion-fee-value\">\n          <!-- <span class=\"remove-span\" *ngIf=\"indexOfelement > 0\" >Remove</span> -->\n\n          {{item?.packageAmount ? item?.packageAmount : 0}} €\n        </ion-col>\n      </ion-row>\n    <!-- </div> -->\n\n    <ion-row class=\"total net-box-wrap\">\n      <ion-col class=\"formcart-title total net-title\">Total Net Amount</ion-col>\n      <ion-col class=\"formcart-value total net-value\">{{vat?.totalNet ? vat?.totalNet : 0}} €</ion-col>\n    </ion-row>\n    <ion-row class=\"vat-box-wrap\">\n      <ion-col class=\"formcart-title vat-title\">VAT</ion-col>\n      <ion-col class=\"formcart-value vat-value\">{{vat?.totalVat ? vat?.totalVat : 0}} €</ion-col>\n    </ion-row>\n    <ion-row class=\"total-box-wrap\">\n      <ion-col class=\"formcart-title total-title\">Total</ion-col>\n      <ion-col class=\"formcart-value total-value\">{{vat?.totalAmount ? vat?.totalAmount : 0}} €</ion-col>\n    </ion-row>\n\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n      <!-- <ion-checkbox slot=\"start\" mode=\"md\" [(ngModel)]=\"termsConditionStatus\"></ion-checkbox> -->\n      <ion-label class=\"ion-text-wrap\">By selecting BUY NOW I Agree to <a href=\"\" target=\"_blank\">Terms and\n          Conditions</a> & <a href=\"\" target=\"_blank\">the Privacy Policy</a> </ion-label>\n    </ion-item>\n    <!-- <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n      <ion-checkbox slot=\"start\" mode=\"md\" [(ngModel)]=\"privacyPolicyStatus\"></ion-checkbox>\n      <ion-label class=\"ion-text-wrap\">I Agree to the Privacy Policy</ion-label>\n    </ion-item> -->\n\n    <ion-button (click)=\"buyCart()\" class=\"btn\" color=\"danger\" expand=\"block\">BUY NOW</ion-button>\n\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cart_cart_module_ts.js.map