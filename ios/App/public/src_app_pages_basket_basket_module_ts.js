"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_basket_basket_module_ts"],{

/***/ 21910:
/*!*******************************************************!*\
  !*** ./src/app/pages/basket/basket-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasketPageRoutingModule": () => (/* binding */ BasketPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _basket_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basket.page */ 14048);




const routes = [
    {
        path: '',
        component: _basket_page__WEBPACK_IMPORTED_MODULE_0__.BasketPage
    }
];
let BasketPageRoutingModule = class BasketPageRoutingModule {
};
BasketPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BasketPageRoutingModule);



/***/ }),

/***/ 14416:
/*!***********************************************!*\
  !*** ./src/app/pages/basket/basket.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasketPageModule": () => (/* binding */ BasketPageModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _basket_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basket-routing.module */ 21910);
/* harmony import */ var _basket_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basket.page */ 14048);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30610);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _components_share_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/share-component-module */ 99663);











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let BasketPageModule = class BasketPageModule {
};
BasketPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _components_share_component_module__WEBPACK_IMPORTED_MODULE_2__.ShareComponentModule,
            _basket_routing_module__WEBPACK_IMPORTED_MODULE_0__.BasketPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient],
                }
            })
        ],
        declarations: [_basket_page__WEBPACK_IMPORTED_MODULE_1__.BasketPage],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe]
    })
], BasketPageModule);



/***/ }),

/***/ 14048:
/*!*********************************************!*\
  !*** ./src/app/pages/basket/basket.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasketPage": () => (/* binding */ BasketPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _basket_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basket.page.html?ngResource */ 41683);
/* harmony import */ var _basket_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basket.page.scss?ngResource */ 60699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 78394);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 74266);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 67241);











let BasketPage = class BasketPage {
    constructor(utility, apiService, router, navController, domSanit, datepipe) {
        this.utility = utility;
        this.apiService = apiService;
        this.router = router;
        this.navController = navController;
        this.domSanit = domSanit;
        this.datepipe = datepipe;
        this.products_data = [];
        this.ionModelOpen = false;
    }
    ngOnInit() {
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationStart)).subscribe((event) => {
            // console.log(event)
            this.previousUrl = this.currentUrl;
            this.currentUrl = event.url;
        });
    }
    ionViewWillEnter() {
        if (this.previousUrl == '/tabs/product-detail') {
            this.backBtn = true;
        }
        else {
            this.backBtn = false;
        }
        this.getCart();
    }
    getCart() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let loading = yield this.utility.presentLoading();
            let response = yield this.apiService.getCart();
            loading.dismiss();
            if (response.status == 1) {
                this.products_data = response ? response : [];
                if (this.products_data) {
                    this.totalAmt = response ? response : [];
                    this.products_data = this.products_data.data ? this.products_data.data : [];
                    this.utility.cartNo = this.products_data.length;
                    console.log(this.products_data);
                }
            }
            else {
                this.products_data = null;
            }
        });
    }
    removeItem(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let loading = yield this.utility.presentLoading();
            let packageId = {
                packageId: item.packageId
            };
            let response = yield this.apiService.removeFromCart(packageId);
            loading.dismiss();
            if (response.status == 1) {
                this.getCart();
            }
        });
    }
    buyCart() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let onlyDevice = 0;
            // this.products_data.map((item)=>{
            //   console.log(item.details)
            //   let packageId = parseInt(item.details.packageId)
            //   if(packageId >= 244 && packageId <= 252) {
            //     onlyDevice++;
            //   }
            //   else{
            //     onlyDevice-- ;
            //   }
            // })
            // console.log(onlyDevice,this.products_data.length)
            // if(this.products_data.length == onlyDevice){
            //   this.utility.openPopup(UserModalPage,'payment','sponsor-class',true);
            // }
            // else{
            this.router.navigate(["/tabs/book-analysis"]);
            // }
        });
    }
    validatePayment() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
                this.profile.paymentId = this.paymentId;
                let data = yield this.apiService.proceedRegistration(this.profile);
                this.router.navigate(["/tabs/area-of-interest"]);
                if (data.status == 1) {
                    this.utility.presentToast(result.msg, "bottom");
                    //this.navController.
                    if (data.redirect_to_questionnaire.toLowerCase() == 'no') {
                        this.router.navigate(["/tabs/area-of-interest"]);
                    }
                    else {
                        this.router.navigate(["/questionare"]);
                    }
                }
                else {
                    this.utility.presentToast(result.msg, "bottom");
                    return false;
                }
            }
        });
    }
};
BasketPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe }
];
BasketPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-basket',
        template: _basket_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_basket_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BasketPage);



/***/ }),

/***/ 60699:
/*!**********************************************************!*\
  !*** ./src/app/pages/basket/basket.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "form {\n  padding-top: 70px;\n}\nform .form-group {\n  position: relative;\n  --inner-padding-end: 5px !important;\n}\nform ion-input,\nform ion-select {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  border: 1px solid #d6d6d6 !important;\n  height: 40px;\n  border-radius: 5px !important;\n  padding: 12px 11px !important;\n  --padding-bottom: 0px;\n  --padding-top: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0 !important;\n}\nform ion-item.item-has-value ion-label,\nform ion-item.item-has-focus ion-label {\n  top: 15px !important;\n  background: white;\n  z-index: 999;\n  text-align: left;\n  font-size: 16px !important;\n  width: 100px !important;\n  padding-left: 10px;\n}\nform ion-label.label-floating {\n  position: relative;\n  top: 3px;\n  left: 10px;\n  font-size: 12px !important;\n  color: gray !important;\n}\n.dont-know {\n  color: #6d6d6d;\n  font-size: 12px;\n  font-weight: 400;\n  text-decoration: none;\n  text-align: center;\n  width: 100%;\n  display: block;\n  margin-top: 20px;\n}\n.dont-know span {\n  color: #ff662a;\n}\n.btn {\n  height: 40px;\n  font-size: 12px;\n  font-weight: 600;\n  --border-radius: 4px;\n  margin-top: -2px;\n}\nion-item.form-group.country-group {\n  top: 32px;\n  position: absolute;\n  width: 70px;\n  border: 1px solid #d4d4d4;\n  height: 44px;\n  border-radius: 4px;\n  color: #727272;\n  font-size: 12px;\n}\n.form-cart {\n  padding: 12px;\n}\n.form-cart ion-col.formcart-value {\n  text-align: right;\n}\n.form-cart ion-col.formcart-value.net-amount-value,\n.form-cart ion-col.formcart-title.net-amount-title {\n  font-weight: 800;\n  font-size: 16px;\n  color: #6d6d6d;\n}\n.form-cart ion-col.formcart-title.admssion-fee-title,\n.form-cart ion-col.formcart-value.admssion-fee-value {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 21px;\n  color: #6d6d6d;\n}\n.form-cart ion-col.formcart-title.itrading-box-title,\n.form-cart ion-col.formcart-value.itrading-box-value {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 21px;\n  color: #6d6d6d;\n}\n.form-cart ion-col.formcart-title.delivery-title,\n.form-cart ion-col.formcart-value.delivery-value {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 21px;\n  color: #6d6d6d;\n}\n.form-cart ion-col.formcart-title.total.net-title,\n.form-cart ion-col.formcart-value.total.net-value {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 21px;\n  color: #6d6d6d;\n}\n.form-cart ion-col.formcart-title.vat-title,\n.form-cart ion-col.formcart-value.vat-value {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 21px;\n  color: #6d6d6d;\n}\n.form-cart ion-col.formcart-title.total-title,\n.form-cart ion-col.formcart-value.total-value {\n  font-weight: 800;\n  font-size: 16px;\n  color: #6d6d6d;\n}\n.form-cart ion-row.total.net-box-wrap {\n  padding-top: 36px;\n}\n.form-cart ion-row.total-box-wrap {\n  border-top: 1px solid;\n}\n.form-cart label {\n  left: 0px;\n  top: 0px;\n  margin: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 0px;\n  background: transparent;\n  cursor: pointer;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  outline: none;\n  display: flex;\n  align-items: center;\n  opacity: 0;\n  color: #6d6d6d;\n}\n.remove-span {\n  background: #e3322dc9;\n  border-radius: 4px;\n  padding: 4px;\n  font-size: 11px;\n  line-height: 10px;\n  /* margin-right: 4px; */\n  font-size: 9px;\n  font-weight: 800;\n  margin: 0px;\n  width: 50px;\n  color: #fff;\n  text-align: center;\n}\na {\n  color: #ff6629;\n}\n.paymentModal {\n  --height:865px;\n}\n.tnc {\n  color: #ff6629;\n  text-decoration: underline;\n  font-size: 15px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2tldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFFSyxpQkFBQTtBQUpMO0FBS0s7RUFDRSxrQkFBQTtFQUNBLG1DQUFBO0FBSFA7QUFLSzs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBSFA7QUFNSzs7RUFFRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBSlA7QUFPSztFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0FBTFA7QUFnQkc7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFiTDtBQWNLO0VBQ0UsY0FBQTtBQVpQO0FBZUc7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQVpMO0FBY0c7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVhMO0FBYUc7RUFDRSxhQUFBO0FBVkw7QUFXSztFQUNFLGlCQUFBO0FBVFA7QUFXSzs7RUFFRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBVFA7QUFXSzs7RUFHRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVZQO0FBWUs7O0VBR0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFYUDtBQWFLOztFQUdFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBWlA7QUFjSzs7RUFHRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQWJQO0FBZUs7O0VBR0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFkUDtBQWdCSzs7RUFFRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBZFA7QUFnQks7RUFDRSxpQkFBQTtBQWRQO0FBZ0JLO0VBQ0UscUJBQUE7QUFkUDtBQWdCSztFQUNFLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7S0FBQSxxQkFBQTtVQUFBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBZFA7QUFpQkc7RUFDQyxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFkSjtBQWdCRztFQUNFLGNBQUE7QUFiTDtBQWVHO0VBQ0UsY0FBQTtBQVpMO0FBZUc7RUFDQyxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFaSiIsImZpbGUiOiJiYXNrZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLm15LXNlYXJjaC1jbGFzcyB7XG4vLyAgIC0taGVpZ2h0OiA1MDBweDtcbi8vICAgLS13aWR0aDogODAlO1xuLy8gfVxuZm9ybSB7XG4gICAgLy8gcGFkZGluZzogMjFweDtcbiAgICAgcGFkZGluZy10b3A6IDcwcHg7XG4gICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgIH1cbiAgICAgaW9uLWlucHV0LFxuICAgICBpb24tc2VsZWN0IHtcbiAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDZkNiAhaW1wb3J0YW50O1xuICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgICAgICBwYWRkaW5nOiAxMnB4IDExcHggIWltcG9ydGFudDtcbiAgICAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwICFpbXBvcnRhbnQ7XG4gICAgIH1cbiAgIFxuICAgICBpb24taXRlbS5pdGVtLWhhcy12YWx1ZSBpb24tbGFiZWwsXG4gICAgIGlvbi1pdGVtLml0ZW0taGFzLWZvY3VzIGlvbi1sYWJlbCB7XG4gICAgICAgdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgei1pbmRleDogOTk5O1xuICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICB9XG4gICBcbiAgICAgaW9uLWxhYmVsLmxhYmVsLWZsb2F0aW5nIHtcbiAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgdG9wOiAzcHg7XG4gICAgICAgbGVmdDogMTBweDtcbiAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICAgICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICAgICB9XG4gICBcbiAgICAgLy8gICBpb24taWNvbiB7XG4gICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgIC8vICAgICBib3R0b206IDEwcHg7XG4gICAgIC8vICAgICByaWdodDogMjBweDtcbiAgICAgLy8gICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgLy8gICAgIHotaW5kZXg6IDk5OTk7XG4gICAgIC8vICAgfVxuICAgfVxuICAgLmRvbnQta25vdyB7XG4gICAgIGNvbG9yOiAjNmQ2ZDZkO1xuICAgICBmb250LXNpemU6IDEycHg7XG4gICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgIHNwYW4ge1xuICAgICAgIGNvbG9yOiAjZmY2NjJhO1xuICAgICB9XG4gICB9XG4gICAuYnRuIHtcbiAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICBmb250LXNpemU6IDEycHg7XG4gICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICBtYXJnaW4tdG9wOiAtMnB4O1xuICAgfVxuICAgaW9uLWl0ZW0uZm9ybS1ncm91cC5jb3VudHJ5LWdyb3VwIHtcbiAgICAgdG9wOiAzMnB4O1xuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgIHdpZHRoOiA3MHB4O1xuICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgY29sb3I6ICM3MjcyNzI7XG4gICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgIH1cbiAgIC5mb3JtLWNhcnQge1xuICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICBpb24tY29sLmZvcm1jYXJ0LXZhbHVlIHtcbiAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgfVxuICAgICBpb24tY29sLmZvcm1jYXJ0LXZhbHVlLm5ldC1hbW91bnQtdmFsdWUsXG4gICAgIGlvbi1jb2wuZm9ybWNhcnQtdGl0bGUubmV0LWFtb3VudC10aXRsZSB7XG4gICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgY29sb3I6ICM2ZDZkNmQ7XG4gICAgIH1cbiAgICAgaW9uLWNvbC5mb3JtY2FydC10aXRsZS5hZG1zc2lvbi1mZWUtdGl0bGUsXG4gICAgIGlvbi1jb2wuZm9ybWNhcnQtdmFsdWUuYWRtc3Npb24tZmVlLXZhbHVlIHtcbiAgICAgICAvLyBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gICAgICAgY29sb3I6ICM2ZDZkNmQ7XG4gICAgIH1cbiAgICAgaW9uLWNvbC5mb3JtY2FydC10aXRsZS5pdHJhZGluZy1ib3gtdGl0bGUsXG4gICAgIGlvbi1jb2wuZm9ybWNhcnQtdmFsdWUuaXRyYWRpbmctYm94LXZhbHVlIHtcbiAgICAgICAvLyBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gICAgICAgY29sb3I6ICM2ZDZkNmQ7XG4gICAgIH1cbiAgICAgaW9uLWNvbC5mb3JtY2FydC10aXRsZS5kZWxpdmVyeS10aXRsZSxcbiAgICAgaW9uLWNvbC5mb3JtY2FydC12YWx1ZS5kZWxpdmVyeS12YWx1ZSB7XG4gICAgICAgLy8gZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgICAgIGNvbG9yOiAjNmQ2ZDZkO1xuICAgICB9XG4gICAgIGlvbi1jb2wuZm9ybWNhcnQtdGl0bGUudG90YWwubmV0LXRpdGxlLFxuICAgICBpb24tY29sLmZvcm1jYXJ0LXZhbHVlLnRvdGFsLm5ldC12YWx1ZSB7XG4gICAgICAgLy8gZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgICAgIGNvbG9yOiAjNmQ2ZDZkO1xuICAgICB9XG4gICAgIGlvbi1jb2wuZm9ybWNhcnQtdGl0bGUudmF0LXRpdGxlLFxuICAgICBpb24tY29sLmZvcm1jYXJ0LXZhbHVlLnZhdC12YWx1ZSB7XG4gICAgICAgLy8gZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgICAgIGNvbG9yOiAjNmQ2ZDZkO1xuICAgICB9XG4gICAgIGlvbi1jb2wuZm9ybWNhcnQtdGl0bGUudG90YWwtdGl0bGUsXG4gICAgIGlvbi1jb2wuZm9ybWNhcnQtdmFsdWUudG90YWwtdmFsdWUge1xuICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgIGNvbG9yOiAjNmQ2ZDZkO1xuICAgICB9XG4gICAgIGlvbi1yb3cudG90YWwubmV0LWJveC13cmFwIHtcbiAgICAgICBwYWRkaW5nLXRvcDogMzZweDtcbiAgICAgfVxuICAgICBpb24tcm93LnRvdGFsLWJveC13cmFwIHtcbiAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQ7XG4gICAgIH1cbiAgICAgbGFiZWwge1xuICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICB0b3A6IDBweDtcbiAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgY29sb3I6ICM2ZDZkNmQ7XG4gICAgIH1cbiAgIH1cbiAgIC5yZW1vdmUtc3BhbntcbiAgICBiYWNrZ3JvdW5kOiAjZTMzMjJkYzk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgLyogbWFyZ2luLXJpZ2h0OiA0cHg7ICovXG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBtYXJnaW46IDBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICB9XG4gICBhe1xuICAgICBjb2xvcjogI2ZmNjYyOTtcbiAgIH1cbiAgIC5wYXltZW50TW9kYWx7XG4gICAgIC0taGVpZ2h0Ojg2NXB4O1xuICAgfVxuXG4gICAudG5je1xuICAgIGNvbG9yOiAjZmY2NjI5O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICB9XG4gICAgIl19 */";

/***/ }),

/***/ 41683:
/*!**********************************************************!*\
  !*** ./src/app/pages/basket/basket.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n<app-header  [headerTitle]=\"'PAGES.CART' | translate\"  [headerBack]=backBtn  ></app-header>\n\n<ion-content>\n  <ion-modal [isOpen]=\"ionModelOpen\" [swipeToClose]=\"false\" [backdropDismiss]=\"false\" [keyboardClose]=\"false\" class=\"paymentModal\">\n    <ng-template>\n      <ion-content>\n        <iframe  class=\"webPage\" style=\"height: 100% !important;\" frameborder=\"0\" name=\"eventsPage\" [src]=\"paymentUrl\">\n        </iframe>\n      </ion-content>\n    </ng-template> \n  </ion-modal>\n  <form *ngIf=\"products_data.length > 0\">\n    <ion-row>\n      <ion-col>\n        <ion-input type=\"number\" id=\"promocode\" placeholder=\"{{'CART.PROMO' | translate}}\" autocapitalize=\"off\">\n      </ion-input>\n    </ion-col>\n      <ion-col>\n        <ion-button (click)=\"closeModal()\" class=\"btn\" color=\"danger\" expand=\"block\">{{'CART.APPLY' | translate}}</ion-button>\n      </ion-col>\n    \n    </ion-row>\n  </form>\n  <div class=\"form-cart\" *ngIf=\"products_data.length > 0\">\n    <ion-row class=\"net-amount-wrap\">\n      <ion-col>\n        <strong>{{'CART.ITEM_SELECTED' | translate}}</strong>\n \n      </ion-col>\n      </ion-row>\n\n    <ion-row class=\"net-amount-wrap\">\n      <ion-col class=\"formcart-title net-amount-title\" size=\"8\">{{'CART.Item' | translate}}</ion-col>\n      <ion-col class=\"formcart-value net-amount-value\">{{'CART.NettoAmount' | translate}}</ion-col>\n    </ion-row>\n    <!-- <div > -->\n      <ion-row class=\"admssion-fee-wrap\" *ngFor=\"let item of products_data;let indexOfelement=index;\" style=\"    border-bottom: 1px solid #ccc;\">\n        \n        <ion-col class=\"formcart-title admssion-fee-title\" size=\"8\">{{item.details?.packageName ? item.details?.packageName : '-'}}\n          <p class=\"remove-span\" (click)=\"removeItem(item)\">{{'CART.REMOVE' | translate}}\n\n            </p>\n        </ion-col>\n       \n        <ion-col class=\"formcart-value admssion-fee-value\">\n         \n          {{item.details?.packageAmount ? item.details?.packageAmount : 0}} €\n         \n\n        </ion-col>\n       \n       \n      </ion-row>\n   \n      <ion-row class=\"vat-box-wrap\">\n        <ion-col class=\"formcart-title vat-title\">{{'CART.DELIVERYCHARGES' | translate}}</ion-col>\n        <ion-col class=\"formcart-value vat-value\">{{totalAmt?.deliveryCharges ? totalAmt?.deliveryCharges : 0}} €</ion-col>\n      </ion-row>\n    <ion-row class=\"total net-box-wrap\">\n      <ion-col class=\"formcart-title total net-title\"> {{'CART.TotalNetAmount' | translate}}</ion-col>\n      <ion-col class=\"formcart-value total net-value\">{{totalAmt?.totalNet ? totalAmt?.totalNet : 0}} €</ion-col>\n    </ion-row>\n    <ion-row class=\"vat-box-wrap\">\n      <ion-col class=\"formcart-title vat-title\">{{'CART.VAT' | translate}}</ion-col>\n      <ion-col class=\"formcart-value vat-value\">{{totalAmt?.totalVat ? totalAmt?.totalVat : 0}} €</ion-col>\n    </ion-row>\n   \n    <ion-row class=\"total-box-wrap\">\n      <ion-col class=\"formcart-title total-title\">{{'CART.Total' | translate}}</ion-col>\n      <ion-col class=\"formcart-value total-value\">{{totalAmt?.totalAmount ? totalAmt?.totalAmount : 0}} €</ion-col>\n    </ion-row>\n\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding\">\n      <ion-label class=\"ion-text-wrap\">{{'CART.Agree' | translate}} <span class=\"tnc\" (click)=\"utility.openPdfLinks(utility.pdfLink[3].link,'Term & Condition')\">{{'CART.TNC' | translate}}</span> & <span class=\"tnc\" (click)=\"utility.openPdfLinks(utility.pdfLink[0].link,'Term & Condition')\">{{'CART.RFW' | translate}}</span> </ion-label>\n    </ion-item>\n   \n\n    <ion-button (click)=\"buyCart()\" class=\"btn\" color=\"danger\" expand=\"block\">{{'CART.BUYNOW' | translate}}</ion-button>\n\n  </div>\n  <ion-item *ngIf=\"products_data.length == 0\">\n    <p class=\"product-detail\"> {{'CART.NOITEM' | translate}}</p>\n</ion-item>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_basket_basket_module_ts.js.map