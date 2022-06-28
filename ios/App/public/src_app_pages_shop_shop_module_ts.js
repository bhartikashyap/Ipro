"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_shop_shop_module_ts"],{

/***/ 27700:
/*!***************************************************!*\
  !*** ./src/app/pages/shop/shop-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopPageRoutingModule": () => (/* binding */ ShopPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _shop_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop.page */ 90737);




const routes = [
    {
        path: '',
        component: _shop_page__WEBPACK_IMPORTED_MODULE_0__.ShopPage
    }
];
let ShopPageRoutingModule = class ShopPageRoutingModule {
};
ShopPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ShopPageRoutingModule);



/***/ }),

/***/ 71159:
/*!*******************************************!*\
  !*** ./src/app/pages/shop/shop.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "ShopPageModule": () => (/* binding */ ShopPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _shop_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop-routing.module */ 27700);
/* harmony import */ var _shop_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop.page */ 90737);
/* harmony import */ var _components_share_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/share-component-module */ 99663);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30610);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 46828);











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let ShopPageModule = class ShopPageModule {
};
ShopPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
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
                }
            }),
            _shop_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShopPageRoutingModule
        ],
        declarations: [_shop_page__WEBPACK_IMPORTED_MODULE_1__.ShopPage]
    })
], ShopPageModule);



/***/ }),

/***/ 90737:
/*!*****************************************!*\
  !*** ./src/app/pages/shop/shop.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopPage": () => (/* binding */ ShopPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _shop_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop.page.html?ngResource */ 60322);
/* harmony import */ var _shop_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop.page.scss?ngResource */ 11370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 65485);







let ShopPage = class ShopPage {
    constructor(utility, apiService, router) {
        this.utility = utility;
        this.apiService = apiService;
        this.router = router;
        this.allProducts = [];
        this.selectedOption = 'all';
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            loop: true
        };
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.utility.removeStorage('Prod');
        this.getShopCategory();
        this.getProducts();
        this.utility.removeStorage('Prod');
    }
    getProducts() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let loading = yield this.utility.presentLoading();
            let body = {
                productCategoryId: this.selectedOption
            };
            this.apiService.getProducts(body).then((res) => {
                loading.dismiss();
                // console.log(res);
                this.allProducts = res.data;
                this.allProducts.map((item, index) => {
                    console.log(item.packageId, index);
                });
            });
        });
    }
    getShopCategory() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.apiService.getShopCategory().then((res) => {
                // console.log(res);
                this.allCategories = res.data;
            });
        });
    }
    changeCategory(event) {
        this.getProducts();
    }
    openDetailsWithQueryParams(item) {
        this.utility.setStorage('Prod', JSON.stringify(item));
        this.router.navigate(["/tabs/product-detail"]);
    }
};
ShopPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
ShopPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-shop',
        template: _shop_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_shop_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ShopPage);



/***/ }),

/***/ 11370:
/*!******************************************************!*\
  !*** ./src/app/pages/shop/shop.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar .bell-icon {\n  width: 30px;\n  height: 30px;\n  margin-right: 20px;\n}\n\n.product {\n  display: flex;\n}\n\nimg {\n  border-radius: 15px;\n  height: 120px;\n}\n\n.product div {\n  display: flex;\n  flex-direction: column;\n  padding-left: 8px;\n  padding-bottom: 7px;\n}\n\n.product div h2 {\n  margin: 0px;\n  font-size: 16px;\n  line-height: 24px;\n  color: #6D6D6D;\n  font-weight: 800;\n}\n\n.product div p {\n  margin: 0px;\n  font-size: 14px;\n  line-height: 21px;\n  display: flex;\n  align-items: center;\n  color: #6D6D6D;\n}\n\n.product-detail {\n  padding: 0px;\n  margin: 0px;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 21px;\n  display: flex;\n  align-items: center;\n  color: #6D6D6D;\n}\n\nion-input {\n  font-size: 12px;\n  border: 1px solid #d6d6d6 !important;\n  height: 28px;\n  width: 50%;\n  max-width: 50%;\n  border-radius: 5px !important;\n  padding: 0px 11px !important;\n}\n\nion-label {\n  margin-left: 25%;\n  flex: 1 0% 0% !important;\n}\n\n.item ion-item {\n  cursor: pointer;\n  margin-left: -30px;\n  margin-right: -30px;\n}\n\nion-item.item-native {\n  --padding-left: unset !important;\n  --padding-right: unset !important;\n}\n\n.zoom-box {\n  height: 90%;\n  display: flex;\n  width: 35%;\n}\n\n.detail h2, p {\n  margin: 1px;\n}\n\n.detail h2 {\n  font-size: 1.3em;\n}\n\n.detail p {\n  font-size: 0.9em;\n}\n\n.detail span {\n  font-size: 0.9em;\n}\n\n.product-details {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUtBO0VBRUksYUFBQTtBQUhKOztBQVFDO0VBQ0csbUJBQUE7RUFFQSxhQUFBO0FBTko7O0FBUUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBTEo7O0FBT0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBSko7O0FBTUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUhKOztBQU1BO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFISjs7QUFLQTtFQUNJLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7QUFGSjs7QUFJQTtFQUNLLGdCQUFBO0VBQ0Esd0JBQUE7QUFETDs7QUFJQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxnQ0FBQTtFQUNBLGlDQUFBO0FBREo7O0FBWUE7RUFFSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUFWSjs7QUFZQTtFQUNBLFdBQUE7QUFUQTs7QUFZSTtFQUNJLGdCQUFBO0FBVFI7O0FBV0k7RUFDSSxnQkFBQTtBQVRSOztBQVdJO0VBQ0ksZ0JBQUE7QUFUUjs7QUFhQTtFQUNJLGFBQUE7QUFWSiIsImZpbGUiOiJzaG9wLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIC5iZWxsLWljb24ge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5pb24taXRlbSB7XG4gICAgLy8gcGFkZGluZzogMTBweCAwcHg7XG59XG5cbi5wcm9kdWN0e1xuICAgIC8vIHBhZGRpbmc6MTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG59IFxuXG4vLyAucHJvZHVjdFxuIGltZ3tcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIC8vIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDoxMjBweDtcbn0gXG4ucHJvZHVjdCBkaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcbn0gXG4ucHJvZHVjdCBkaXYgaDJ7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGNvbG9yOiAjNkQ2RDZEO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4ucHJvZHVjdCBkaXYgcHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiAjNkQ2RDZEO1xuXG59XG4ucHJvZHVjdC1kZXRhaWx7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogIzZENkQ2RDtcbn1cbmlvbi1pbnB1dHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDZkNiAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMjhweDtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweCAxMXB4ICFpbXBvcnRhbnQ7XG59XG5pb24tbGFiZWx7XG4gICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgIGZsZXg6MSAwJSAwJSAhaW1wb3J0YW50O1xuXG59XG4uaXRlbSBpb24taXRlbSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0zMHB4O1xufVxuXG5pb24taXRlbS5pdGVtLW5hdGl2ZXtcbiAgICAtLXBhZGRpbmctbGVmdDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctcmlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cblxuLy8gaW9uLXNsaWRlcyB7XG4vLyAgICAgLy8gd2lkdGg6IDEwMCU7XG4vLyB9XG4vLyAuc3dpcGVyLXNsaWRlIGltZyB7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgbWF4LXdpZHRoOiAxMDAlO1xuLy8gfVxuLnpvb20tYm94IHtcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMzUlO1xufVxuLmRldGFpbCBoMixwe1xubWFyZ2luOjFweDtcbn1cbi5kZXRhaWwge1xuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICB9XG4gICAgcHtcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICB9XG4gICAgc3BhbntcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICB9XG59XG5cbi5wcm9kdWN0LWRldGFpbHN7XG4gICAgcGFkZGluZzoxMHB4O1xufSJdfQ== */";

/***/ }),

/***/ 60322:
/*!******************************************************!*\
  !*** ./src/app/pages/shop/shop.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n<app-header  [headerTitle]=\"'PAGES.SHOP' | translate\"  [headerBack]=false  ></app-header>\n\n<ion-content>\n  <ion-item *ngIf=\"allProducts != null && allProducts.length > 0\">\n    <ion-label>{{'SHOP.Filter' | translate}}:</ion-label>\n    <ion-select [(ngModel)]=\"selectedOption\" interface=\"action-sheet\" (ionChange)=\"changeCategory($event)\">\n      <ion-select-option value=\"all\">{{'SHOP.All' | translate}}</ion-select-option>\n      <ion-select-option *ngFor=\"let cat of allCategories\" [value]=\"cat.productCategoryId\">{{cat.categoryName}}\n      </ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item *ngIf=\" allProducts.length == 0\">\n      <p class=\"product-detail\">{{'SHOP.NP' | translate}}</p>\n  </ion-item>\n  <div *ngIf=\"allProducts != null && allProducts.length > 0\">\n    <div *ngFor=\"let prod of allProducts\" style=\"border-bottom: solid #ccc 1px;\n    padding: 10px 0px;\"  (click)=\"openDetailsWithQueryParams(prod)\" class=\"item\">\n\n  \n    <ion-item   lines=\"none\" class=\"ion-no-padding\">\n\n     \n      <div class=\"zoom-box\">\n        <ion-slides  pager=\"true\" [options]=\"slideOpts\">\n          <ion-slide *ngFor=\"let packageImage of prod.packageImages\">\n            <!-- <div class=\"swiper-zoom-container\"> -->\n              <img src=\"{{packageImage}}\" />\n            <!-- </div> -->\n            \n          </ion-slide>\n         \n        </ion-slides>\n        </div>\n     \n    <div  class=\"detail\">\n      <!-- <div class=\"\"> -->\n            <h2 style=\"margin:0px\">{{prod.packageName}}</h2>\n            <p> {{'SHOP.SD' | translate}}:{{prod.avail_runtime[1]}} </p>\n            <p > {{'SHOP.SP' | translate}}: <span><strong>&euro; {{prod.standard_price}} + {{'SHOP.VAT' | translate}}</strong></span></p>\n            <p *ngIf=\"prod.your_price != 0\"> {{'SHOP.YP' | translate}}: <span><strong> &euro; {{prod.your_price}} + VAT</strong></span></p>\n          <!-- *ngFor=\"let img of images\" -->\n          \n        <!-- </div> -->\n       \n    </div>\n   \n    <div>\n\n  </div>\n    </ion-item>\n    <p class=\"product-details\" *ngIf=\"prod.productDescriptionDE\"> {{prod.productDescriptionDE}}</p>\n\n  </div>\n\n  </div>\n \n</ion-content> \n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_shop_shop_module_ts.js.map