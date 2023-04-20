"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_myproducts_myproducts_module_ts"],{

/***/ 12506:
/*!***************************************************************!*\
  !*** ./src/app/pages/myproducts/myproducts-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyproductsPageRoutingModule": () => (/* binding */ MyproductsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _myproducts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myproducts.page */ 87540);




const routes = [
    {
        path: '',
        component: _myproducts_page__WEBPACK_IMPORTED_MODULE_0__.MyproductsPage
    }
];
let MyproductsPageRoutingModule = class MyproductsPageRoutingModule {
};
MyproductsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyproductsPageRoutingModule);



/***/ }),

/***/ 88582:
/*!*******************************************************!*\
  !*** ./src/app/pages/myproducts/myproducts.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "MyproductsPageModule": () => (/* binding */ MyproductsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _myproducts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myproducts-routing.module */ 12506);
/* harmony import */ var _myproducts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myproducts.page */ 87540);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30610);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _components_share_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/share-component-module */ 99663);










function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

let MyproductsPageModule = class MyproductsPageModule {
};
MyproductsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _myproducts_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyproductsPageRoutingModule,
            _components_share_component_module__WEBPACK_IMPORTED_MODULE_3__.ShareComponentModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient],
                },
            })
        ],
        declarations: [_myproducts_page__WEBPACK_IMPORTED_MODULE_1__.MyproductsPage]
    })
], MyproductsPageModule);



/***/ }),

/***/ 87540:
/*!*****************************************************!*\
  !*** ./src/app/pages/myproducts/myproducts.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyproductsPage": () => (/* binding */ MyproductsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _myproducts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myproducts.page.html?ngResource */ 57051);
/* harmony import */ var _myproducts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myproducts.page.scss?ngResource */ 429);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 67241);






let MyproductsPage = class MyproductsPage {
    constructor(apiSer, utliSer) {
        this.apiSer = apiSer;
        this.utliSer = utliSer;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.getProducts();
            this.paymnetOption = yield this.utliSer.getStorage("paymentOption");
        });
    }
    getProducts() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let loading = yield this.utliSer.presentLoading();
            this.apiSer.manageProducts().then((res) => {
                var _a;
                this.myproducts = res;
                if ((_a = this.myproducts) === null || _a === void 0 ? void 0 : _a.status) {
                    this.myproducts = this.myproducts.data.products;
                }
                else {
                    this.myproducts = [];
                }
                console.log(this.myproducts);
                loading.dismiss();
            });
        });
    }
    productAction(packageId, action) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (action == 'reactivate') {
                if (this.paymnetOption == '') {
                    this.utliSer.goNext('/tabs/paymnet-option');
                    return false;
                }
            }
            let data = {
                "packageId": packageId,
                "action": action
            };
            let loading = yield this.utliSer.presentLoading();
            this.apiSer.subscribeProducts(data).then((res) => {
                let result = res;
                if (result.status) {
                    if (action == 'cancel') {
                        this.utliSer.presentToast(this.utliSer.translateText('MSG').productCancelled, "top");
                    }
                    else {
                        this.utliSer.presentToast(this.utliSer.translateText('MSG').productSubsc, "top");
                    }
                    this.getProducts();
                }
                loading.dismiss();
            });
        });
    }
    // async cancelProduct(packageId,action){
    //   let data ={
    //     "packageId":packageId,
    //     "action":action
    //   }
    //   let loading = await this.utliSer.presentLoading();
    //   this.apiSer.subscribeProducts(data).then((res)=>{
    //     let result :any = res;
    //     if(result.status){
    //       this.utliSer.presentToast("Product Subscribed","bottom")
    //     }
    //     loading.dismiss();
    //   })
    // }
    buyAgain(packageId, runtime) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(runtime["1"]);
            console.log(Object.keys(runtime)[0]);
            let data = {
                "packageId": packageId,
                "runtime": Object.keys(runtime)[0]
            };
            let loading = yield this.utliSer.presentLoading();
            this.apiSer.addToCart(data).then((res) => {
                let result = res;
                if (result.status) {
                    this.utliSer.presentToast(this.utliSer.translateText('MSG').productAdded, "top");
                    this.utliSer.getCart('cart');
                    this.getProducts();
                }
                loading.dismiss();
            });
        });
    }
};
MyproductsPage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService }
];
MyproductsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-myproducts',
        template: _myproducts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_myproducts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyproductsPage);



/***/ }),

/***/ 429:
/*!******************************************************************!*\
  !*** ./src/app/pages/myproducts/myproducts.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".modal-close1 {\n  text-align: center !important;\n  width: 100%;\n}\n.modal-close1 ion-button {\n  --border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15cHJvZHVjdHMucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vaXBybyUyMDIvc3JjL2FwcC9wYWdlcy9teXByb2R1Y3RzL215cHJvZHVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7RUFDQSxXQUFBO0FDQ0o7QURBSTtFQUNFLG9CQUFBO0FDRU4iLCJmaWxlIjoibXlwcm9kdWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtY2xvc2Uxe1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICB9XG4gICIsIi5tb2RhbC1jbG9zZTEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubW9kYWwtY2xvc2UxIGlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */";

/***/ }),

/***/ 57051:
/*!******************************************************************!*\
  !*** ./src/app/pages/myproducts/myproducts.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<app-header [headerTitle]=\"'MYPRODUCT.title' | translate\" [headerBack]=true></app-header>\n\n<ion-content>\n  <div style=\"padding:10px;\"></div>\n\n\n  <!-- line -->\n \n\n\n    <ion-card *ngFor=\"let prod of myproducts; let i = index\">\n\n      <ion-card-content class=\"\">\n        <ion-list lines=\"none\" class=\"\" style=\"margin:2px 0px\">\n          <ion-item>\n            <ion-label>\n              {{prod.packageName}}\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{'MYPRODUCT.productDetail.expiry' | translate}}:</ion-label>\n            <span>{{prod.validTill}}</span>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{'MYPRODUCT.productDetail.status' | translate}} :</ion-label>\n            <span>{{prod.productStatus}}</span>\n          </ion-item>\n          <ion-item *ngIf=\"prod.productStatus == 'Active subscription'\">\n            <div class=\"modal-close1\" (click) = 'productAction(prod.packageId,\"cancel\")'>\n              <ion-button class=\"btn\" color=\"danger\">\n                {{'MYPRODUCT.btns.cancel' | translate}}\n              </ion-button>\n\n            </div>\n          </ion-item>\n          <ion-item *ngIf=\"prod.productStatus == 'Single Purchase' || prod.productStatus == 'Purchased'\">\n            <div class=\"modal-close1\">\n\n<!-- <div style=\"    display: flex;\n\" > -->\n              <ion-button class=\"btn\" color=\"success\"  (click) = 'productAction(prod.packageId,\"reactivate\")' [disabled]=\"prod.subscribe_button_disable == 'yes'\" *ngIf=\"prod.subscribe_button_disable == 'no'\">\n                {{'MYPRODUCT.btns.subs' | translate}}\n              </ion-button>\n\n              <ion-button class=\"btn\" color=\"secondary\"  (click) = 'buyAgain(prod.packageId,prod.avail_runtime)' [disabled]=\"prod.buy_again_button_disable == 'yes'\" *ngIf=\"prod.buy_again_button_disable == 'no'\">\n                {{'MYPRODUCT.btns.buy' | translate}}\n              </ion-button>\n              <!-- </div> -->\n            </div>\n          </ion-item>\n\n        </ion-list>\n\n\n\n      </ion-card-content>\n    </ion-card>\n    <ion-list lines=\"none\" class=\"\" style=\"margin:2px 0px\" *ngIf=\"myproducts?.length <= 0\">\n\n\n      <ion-item>\n        <span>{{'SHOP.NP' | translate }} </span>\n      </ion-item>\n    </ion-list>\n\n    <!-- line -->\n\n    <div style=\"padding:10px;\"></div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_myproducts_myproducts_module_ts.js.map