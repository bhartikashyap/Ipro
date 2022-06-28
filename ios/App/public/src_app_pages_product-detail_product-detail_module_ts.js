"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_product-detail_product-detail_module_ts"],{

/***/ 49823:
/*!***********************************************************************!*\
  !*** ./src/app/pages/product-detail/product-detail-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailPageRoutingModule": () => (/* binding */ ProductDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-detail.page */ 76346);




const routes = [
    {
        path: '',
        component: _product_detail_page__WEBPACK_IMPORTED_MODULE_0__.ProductDetailPage
    }
];
let ProductDetailPageRoutingModule = class ProductDetailPageRoutingModule {
};
ProductDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductDetailPageRoutingModule);



/***/ }),

/***/ 98848:
/*!***************************************************************!*\
  !*** ./src/app/pages/product-detail/product-detail.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "ProductDetailPageModule": () => (/* binding */ ProductDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-detail.page */ 76346);
/* harmony import */ var _components_share_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/share-component-module */ 99663);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30610);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-detail-routing.module */ 49823);










function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

let ProductDetailPageModule = class ProductDetailPageModule {
};
ProductDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _components_share_component_module__WEBPACK_IMPORTED_MODULE_1__.ShareComponentModule,
            _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__.ProductDetailPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient],
                },
            })
        ],
        declarations: [_product_detail_page__WEBPACK_IMPORTED_MODULE_0__.ProductDetailPage]
    })
], ProductDetailPageModule);



/***/ }),

/***/ 76346:
/*!*************************************************************!*\
  !*** ./src/app/pages/product-detail/product-detail.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailPage": () => (/* binding */ ProductDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _product_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-detail.page.html?ngResource */ 90200);
/* harmony import */ var _product_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-detail.page.scss?ngResource */ 74285);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 46828);








let ProductDetailPage = class ProductDetailPage {
    // availTymOption:any="1";
    constructor(utility, apiService, router, _translate) {
        this.utility = utility;
        this.apiService = apiService;
        this.router = router;
        this._translate = _translate;
        this.detail = new Object;
        this.ionModelOpen = false;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            loop: true,
            zoom: {}
        };
    }
    ngOnInit() {
        // this.getProd();
    }
    ionViewWillEnter() {
        this.getProd();
        //this.utility.setStorage(session.SELECTED_PLAN,'');
    }
    getProd() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.detail = '';
            this.detail = JSON.parse(yield this.utility.getStorage('Prod'));
            this.detail["availTymSelected"] = "1";
            this.changeDuration("");
            // console.log( this.detail);
            //this.detail.avail_runtime =  this.detail.avail_runtime.filter(avtym => console.log(avtym))
            this.detail['durationDisable'] = true;
            if (this.detail.your_price != 0) {
                this.detail["changedPrice"] = this.detail.your_price;
            }
            else {
                this.detail["changedPrice"] = this.detail.standard_price;
            }
            if (this.detail.added_to_cart.toLowerCase() === 'yes' && this.detail.make_disable.toLowerCase() === 'yes') {
                this.detail["disableCart"] = true;
            }
            else {
                this.detail["disableCart"] = false;
            }
            let result = yield this.apiService.getProfile();
            if (result.status == 1) {
                this.profile = result.data.profile ? result.data.profile : null;
            }
            // console.log(this.detail);
        });
    }
    // goBack(){
    //   this.router.navigate(["/tabs/shop"]);
    // }
    removeItem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let loading = yield this.utility.presentLoading();
            let packageId = {
                packageId: this.detail.packageId
            };
            let response = yield this.apiService.removeFromCart(packageId);
            loading.dismiss();
            if (response.status == 1) {
                this.detail["disableCart"] = false;
                this.utility.presentToast("Product removed from cart", "top");
                this.utility.getCart('cart');
            }
        });
    }
    changeDuration(event) {
        if (this.detail.your_price != 0) {
            this.detail.changedPrice = this.detail.your_price * parseInt(this.detail.availTymSelected);
        }
        else {
            this.detail.changedPrice = this.detail.standard_price * parseInt(this.detail.availTymSelected);
        }
        console.log(this.detail);
        // this.detail.changedPrice = this.detail.changedPrice * parseInt( this.detail.availTymSelected);
    }
    addToCart() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            //adding to cart
            let body = {
                packageId: this.detail.packageId,
                runtime: this.detail.availTymSelected
            };
            let loading = yield this.utility.presentLoading();
            this.apiService.addToCart(body).then((res) => {
                loading.dismiss();
                if (res.status) {
                    this.detail["disableCart"] = true;
                    this.utility.presentToast(this.utility.translateText('MSG').productadded, "top");
                    this.utility.getCart('cart');
                }
                else {
                    console.log(res.msg);
                    if (res.msg != 'check zipcode first') {
                        this.utility.presentAlert('Warning', '', [], res.msg, [{
                                text: this.utility.translateText("MODALS").BUTTONS.GO_TO_SHOP,
                                cssClass: 'secondary',
                                handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                                    this.router.navigate(["/tabs/shop"]);
                                })
                            }]);
                    }
                }
                // console.log(res);
                //this.router.navigate(["/tabs/basket"]);
            });
        });
    }
    addTobasket() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            //checing before adding to cart
            if (this.detail.packageId == '5') {
                //this.addToCart();
                if (this.profile != null && this.profile.zipCode != '') {
                    this.checkZipcode(this.profile.zipCode);
                    //  this.checkZipcode('99999999');
                }
                else {
                    this.utility.presentAlert("Alert", "", [
                        {
                            name: 'zipcode',
                            type: 'number',
                            id: 'zipcode',
                            value: '',
                            placeholder: this.utility.translateText("MODALS").BUTTONS.zipcode
                        }
                    ], this.utility.translateText("MSG").zipcode, [{
                            text: this.utility.translateText("MODALS").BUTTONS.OK,
                            handler: (event) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                                console.log(event);
                                if (event.zipcode != '') {
                                    this.checkZipcode(event.zipcode);
                                }
                                else {
                                    this.utility.presentToast(this.utility.translateText("MSG").invalidZip, "top");
                                    this.addToCart();
                                    return false;
                                }
                            })
                        }]);
                }
            }
            else {
                this.addToCart();
            }
        });
    }
    checkZipcode(zipcodes) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let loading = yield this.utility.presentLoading();
            this.apiService
                .checkZip({
                zipCode: zipcodes,
            })
                .then((res) => {
                loading.dismiss();
                if (res.status === 0) {
                    this.utility.presentAlert("Alert", "", [], this.utility.translateText('MSG').currentlyUnavailable + "," + this.utility.translateText('MSG').stilladded, [
                        {
                            text: this.utility.translateText("MODALS").BUTTONS.OK,
                            handler: (event) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                                this.addToCart();
                            })
                        }
                    ]);
                }
                else {
                    this.addToCart();
                }
            })
                .catch((err) => {
                loading.dismiss();
            });
        });
    }
};
ProductDetailPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService }
];
ProductDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-product-detail',
        template: _product_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_product_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductDetailPage);



/***/ }),

/***/ 74285:
/*!**************************************************************************!*\
  !*** ./src/app/pages/product-detail/product-detail.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "ion-item {\n  display: flex;\n  flex-direction: column;\n}\n\n.zoom-box img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n\n.product div {\n  display: flex;\n  flex-direction: column;\n  padding-left: 20px;\n  padding-bottom: 10px;\n}\n\n.product div h2 {\n  margin: 0px;\n  font-size: 16px;\n  line-height: 24px;\n  color: #6D6D6D;\n  font-weight: 800;\n}\n\n.product div p {\n  margin: 0px;\n  font-size: 14px;\n  line-height: 21px;\n  display: flex;\n  align-items: center;\n  color: #6D6D6D;\n}\n\n.product-detail {\n  padding: 0px;\n  margin: 0px;\n  font-size: 14px;\n  line-height: 14px;\n  align-items: center;\n  color: #6D6D6D;\n}\n\nion-input {\n  font-size: 12px;\n  border: 1px solid #d6d6d6 !important;\n  height: 28px;\n  width: 50%;\n  max-width: 50%;\n  border-radius: 5px !important;\n  padding: 0px 11px !important;\n}\n\n.price-detail {\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  padding: 8px;\n  margin-left: 0px;\n}\n\n.price {\n  margin-top: 20px;\n  text-align: center;\n}\n\n.btn {\n  height: 40px;\n  font-size: 16px;\n  font-weight: 600;\n  --border-radius: 4px;\n  margin: 20px;\n}\n\n.zoom-box {\n  height: 40%;\n  display: flex;\n  padding-top: 20px;\n}\n\n.full-zoom-box {\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUNKOztBQVVDO0VBQ0csY0FBQTtFQUNGLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBUEY7O0FBU0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBTko7O0FBUUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBTEo7O0FBT0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUpKOztBQU9BO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxtQkFBQTtFQUNBLGNBQUE7QUFMSjs7QUFPQTtFQUNJLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7QUFKSjs7QUFZQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBR0EsZ0JBQUE7QUFYSjs7QUFjQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFYSjs7QUFhQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFWSjs7QUFZQTtFQUVJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFWSjs7QUFjQTtFQUNLLGlCQUFBO0FBWEwiLCJmaWxlIjoicHJvZHVjdC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBcbn1cblxuLnByb2R1Y3R7XG4gICAgLy8gcGFkZGluZzoxMHB4O1xuICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn0gXG5cbiAuem9vbS1ib3ggaW1ne1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNTAlO1xufSBcbi5wcm9kdWN0IGRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59IFxuLnByb2R1Y3QgZGl2IGgye1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBjb2xvcjogIzZENkQ2RDtcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuLnByb2R1Y3QgZGl2IHB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogIzZENkQ2RDtcblxufVxuLnByb2R1Y3QtZGV0YWlse1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgLy8gZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiAjNkQ2RDZEO1xufVxuaW9uLWlucHV0e1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDZkNmQ2ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMHB4IDExcHggIWltcG9ydGFudDtcbn1cbmlvbi1sYWJlbHtcbiAgICAvLyAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICAvLyAgZmxleDoxIDAlIDAlICFpbXBvcnRhbnQ7XG5cbn1cblxuLnByaWNlLWRldGFpbHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIC8vIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5wcmljZXtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5idG57XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogMjBweDtcbn1cbi56b29tLWJveCB7XG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogNDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZy10b3A6MjBweDtcbiAgICAvLyB3aWR0aDogNDUlO1xufVxuXG4uZnVsbC16b29tLWJveHtcbiAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgLy8gcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIFxufSJdfQ== */";

/***/ }),

/***/ 90200:
/*!**************************************************************************!*\
  !*** ./src/app/pages/product-detail/product-detail.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<app-header [headerTitle]=\"'PAGES.PRODUCTDETAIL' | translate\" [headerBack]=true></app-header>\n\n<ion-content>\n  <ion-modal style=\"--height: 500px;\" [isOpen]=\"ionModelOpen\" [swipeToClose]=\"false\" [backdropDismiss]=\"false\" [keyboardClose]=\"false\"\n    >\n    <ng-template>\n      <ion-header>\n        <ion-toolbar style=\"--background:#fff !important\">\n\n          <ion-title slot=\"end\" (click)=\"ionModelOpen=false;slideOpts['zoom']={}\"> <ion-icon name=\"close\"></ion-icon></ion-title>\n  </ion-toolbar>\n</ion-header>\n      <ion-content>\n        <div class='full-zoom-box'>\n        <ion-slides  pager=\" true\" [options]=\"slideOpts\" style=\"height: 350px;\"> \n          <!-- packageImages -->\n            <ion-slide *ngFor=\"let packageImage of detail.packageImages\">\n              <!-- <div class=\"swiper-zoom-container\"> -->\n              <img src=\"{{packageImage}}\" alt=\"{{detail.packageName}}\" />\n              <!-- </div> -->\n\n            </ion-slide>\n           \n            </ion-slides>\n          </div>\n</ion-content>      \n</ng-template>\n</ion-modal>\n<div class=\"zoom-box\">\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n   \n    <ion-slide *ngFor=\"let packageImage of detail.packageImages\">\n      <!-- <div class=\"swiper-zoom-container\"> -->\n      <img src=\"{{packageImage}}\" alt=\"{{detail.packageName}}\" (click)=\"ionModelOpen=true;slideOpts['zoom']={\n        minRatio: 1,\n        maxRatio: 3,\n        toggle: true,\n        containerClass :'swiper-zoom-container',\n        zoomedSlideClass: 'swiper-slide-zoomed'\n      }\" />\n      <!-- </div> -->\n\n    </ion-slide>\n   \n  </ion-slides>\n</div>\n\n<ion-item lines=\"none\">\n\n  <!-- <div>-->\n\n  <div class=\"product\">\n\n\n    <h2>{{detail.packageName}}</h2>\n    <p class=\"product-detail\"> {{detail.productDescription}}</p>\n    <!-- <p class=\"product-detail\"> {{detail.productDescriptionDE}}</p> -->\n    <ion-select class=\"price-detail ion-margin\" [(ngModel)]=\"detail.availTymSelected\" interface=\"action-sheet\"\n      (ionChange)=\"changeDuration($event)\" *ngIf=\"detail != undefined\" style=\"width: 250px;\">\n      <ion-select-option *ngFor=\"let avtym of detail.avail_runtime | keyvalue\" [value]=\"avtym.key\">{{avtym.value}}\n      </ion-select-option>\n    </ion-select>\n    <!-- </div> -->\n\n\n  </div>\n  <!-- <div> -->\n  <!-- <ion-label>Hair Color</ion-label> -->\n\n\n  <!-- </div> -->\n\n\n</ion-item>\n<h1 class=\"price\"><strong> &euro; {{detail.changedPrice}} + {{'CART.VAT' | translate}}</strong></h1>\n\n<div class=\"content-wrap\" *ngIf=\"!detail.disableCart\">\n  <ion-button class=\"btn\" color=\"danger\" expand=\"block\" disabled=\"{{detail.disableCart}}\" (click)=\"addTobasket()\">\n    {{'PRODUCT.ADDTOCART' | translate}}\n  </ion-button>\n</div>\n<div class=\"content-wrap\" *ngIf=\"detail.disableCart\">\n  <ion-button class=\"btn\" color=\"danger\" expand=\"block\" (click)=\"removeItem()\">\n    {{'PRODUCT.REMOVE' | translate}}\n  </ion-button>\n</div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_product-detail_product-detail_module_ts.js.map