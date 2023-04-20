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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _product_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-detail.page.html?ngResource */ 90200);
/* harmony import */ var _product_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-detail.page.scss?ngResource */ 74285);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _check_zip_check_zip_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../check-zip/check-zip.page */ 56169);









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
        // this.detail["availTymSelected"] = "0";
        //this.utility.setStorage(session.SELECTED_PLAN,'');
    }
    getProd() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.detail = '';
            this.detail = JSON.parse(yield this.utility.getStorage('Prod'));
            // this.detail.availTymSelected = '';
            // this.detail["availTymSelected"] =   Object.keys( this.detail.avail_runtime)[0];
            // availTym[key] === value
            this.detail["availTymSelected"] = Object.keys(this.detail.avail_runtime).find(key => this.detail.avail_runtime[key] === this.detail.avail_runtime_default);
            console.log(this.detail);
            // this.detail.changedPrice = this.detail.your_price * parseInt( this.detail.availTymSelected);
            // this.changeDuration( Object.keys( this.detail.avail_runtime)[0],Object.keys( this.detail.avail_runtime)[0]);
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let loading = yield this.utility.presentLoading();
            let packageId = {
                packageId: this.detail.packageId
            };
            let response = yield this.apiService.removeFromCart(packageId);
            loading.dismiss();
            if (response.status == 1) {
                this.detail["added_to_cart"] = 'no';
                this.utility.presentToast(this.utility.translateText('MSG').productRemoved, "top");
                this.utility.getCart('cart');
                //  this.utility.goBack();
            }
        });
    }
    changeDuration(event, availTym) {
        // availTym[key] === value
        this.detail.availTymSelected = Object.keys(availTym).find(key => availTym[key] === event.detail.value);
        // this.detail.availTymSelected = availTym;
        if (this.detail.your_price != 0) {
            this.detail.changedPrice = (this.detail.your_price * parseInt(this.detail.availTymSelected));
            this.detail.changedPrice = this.utility.convertBacktoString(this.detail.changedPrice, 2, ',', '.');
        }
        else {
            this.detail.changedPrice = this.utility.convertToFloat(this.detail.standard_price) * parseInt(this.detail.availTymSelected);
            this.detail.changedPrice = this.utility.convertBacktoString(this.detail.changedPrice, 2, ',', '.');
        }
        availTym = this.detail.changedPrice;
        console.log(this.detail);
        // this.detail.changedPrice = this.detail.changedPrice * parseInt( this.detail.availTymSelected);
    }
    addToCart() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
                    this.detail["added_to_cart"] = 'yes';
                    this.utility.presentToast(this.utility.translateText('MSG').productadded, "top");
                    this.utility.getCart('cart');
                    // this.utility.goBack();
                }
                else {
                    console.log(res.msg);
                    if (res.msg != 'check zipcode first') {
                        this.utility.presentAlert('Warning', '', [], res.msg, [{
                                text: this.utility.translateText("MODALS").BUTTONS.GO_TO_SHOP,
                                cssClass: 'secondary',
                                handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            //checing before adding to cart
            if (this.detail.productCatId == '6') {
                //this.addToCart();
                this.utility.openPopup(_check_zip_check_zip_page__WEBPACK_IMPORTED_MODULE_4__.CheckZipPage, "selectedTab", 'check-zip', true);
                // if(this.profile != null && this.profile.zipCode != ''){
                //    this.checkZipcode(this.profile.zipCode);
                // //  this.checkZipcode('99999999');
                // }
                // else{
                //   this.utility.presentAlert(
                //     "Alert",
                //     "",
                //     [
                //       {
                //         name: 'zipcode',
                //         type: 'number',
                //         id: 'zipcode',
                //         value: '',
                //         placeholder: this.utility.translateText("MODALS").BUTTONS.zipcode
                //       }
                //     ],
                //     this.utility.translateText("MSG").zipcode,
                //      [{
                //         text: this.utility.translateText("MODALS").BUTTONS.OK,
                //         handler: async(event) => {
                //           console.log(event);
                //           if(event.zipcode != ''){
                //             this.checkZipcode(event.zipcode);
                //           }
                //           else{
                //             this.utility.presentToast( this.utility.translateText("MSG").invalidZip,"top");
                //             this.addToCart();
                //             return false;
                //           }
                //         }
                //       }]
                //   );
                // }
            }
            else {
                this.addToCart();
            }
        });
    }
    checkZipcode(zipcodes) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
                            handler: (event) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
    ionViewDidLeave() {
        this.utility.setStorage('Prod', JSON.stringify(this.detail));
    }
};
ProductDetailPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService }
];
ProductDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
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

module.exports = "ion-item {\n  display: flex;\n  flex-direction: column;\n}\n\n.zoom-box img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n\n.product div {\n  display: flex;\n  flex-direction: column;\n  padding-left: 20px;\n  padding-bottom: 10px;\n}\n\n.product div h2 {\n  margin: 0px;\n  font-size: 16px;\n  line-height: 24px;\n  color: #6D6D6D;\n  font-weight: 800;\n}\n\n.product div p {\n  margin: 0px;\n  font-size: 14px;\n  line-height: 21px;\n  display: flex;\n  align-items: center;\n  color: #6D6D6D;\n}\n\n.product-detail {\n  padding: 5px;\n  margin: 0px;\n  font-size: 14px;\n  line-height: 14px;\n  align-items: center;\n  color: #6D6D6D;\n  text-align: justify;\n}\n\nion-input {\n  font-size: 12px;\n  border: 1px solid #d6d6d6 !important;\n  height: 28px;\n  width: 50%;\n  max-width: 50%;\n  border-radius: 5px !important;\n  padding: 0px 11px !important;\n}\n\n.price-detail {\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  padding: 8px;\n  margin-left: 0px;\n}\n\n.price {\n  margin-top: 20px;\n  text-align: center;\n}\n\n.btn {\n  height: 40px;\n  font-size: 16px;\n  font-weight: 600;\n  --border-radius: 4px;\n  margin: 20px;\n}\n\n.zoom-box {\n  height: 40%;\n  display: flex;\n  padding-top: 20px;\n}\n\n.full-zoom-box {\n  padding-top: 20px;\n}\n\nion-icon {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGV0YWlsLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2lwcm8lMjAyL3NyYy9hcHAvcGFnZXMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FEVUM7RUFDRyxjQUFBO0VBQ0YsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNQRjs7QURTQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNOSjs7QURRQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNMSjs7QURPQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDSko7O0FET0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDSko7O0FETUE7RUFDSSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FDSEo7O0FEV0E7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUdBLGdCQUFBO0FDVko7O0FEYUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDVko7O0FEWUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDVEo7O0FEV0E7RUFFSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDVEo7O0FEYUE7RUFDSyxpQkFBQTtBQ1ZMOztBRGVBO0VBQ0ksZUFBQTtBQ1pKIiwiZmlsZSI6InByb2R1Y3QtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgXG59XG5cbi5wcm9kdWN0e1xuICAgIC8vIHBhZGRpbmc6MTBweDtcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xuIC8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59IFxuXG4gLnpvb20tYm94IGltZ3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDUwJTtcbn0gXG4ucHJvZHVjdCBkaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufSBcbi5wcm9kdWN0IGRpdiBoMntcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgY29sb3I6ICM2RDZENkQ7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi5wcm9kdWN0IGRpdiBwe1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICM2RDZENkQ7XG5cbn1cbi5wcm9kdWN0LWRldGFpbHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICM2RDZENkQ7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbmlvbi1pbnB1dHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDZkNiAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMjhweDtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweCAxMXB4ICFpbXBvcnRhbnQ7XG59XG5pb24tbGFiZWx7XG4gICAgLy8gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgLy8gIGZsZXg6MSAwJSAwJSAhaW1wb3J0YW50O1xuXG59XG5cbi5wcmljZS1kZXRhaWx7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgLy8gbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4ucHJpY2V7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnRue1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW46IDIwcHg7XG59XG4uem9vbS1ib3gge1xuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmctdG9wOjIwcHg7XG4gICAgLy8gd2lkdGg6IDQ1JTtcbn1cblxuLmZ1bGwtem9vbS1ib3h7XG4gICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIC8vIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBcbn1cblxuaW9uLWljb257XG4gICAgZm9udC1zaXplOiAyNXB4O1xufSIsImlvbi1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnpvb20tYm94IGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNTAlO1xufVxuXG4ucHJvZHVjdCBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ucHJvZHVjdCBkaXYgaDIge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6ICM2RDZENkQ7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5wcm9kdWN0IGRpdiBwIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjNkQ2RDZEO1xufVxuXG4ucHJvZHVjdC1kZXRhaWwge1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzZENkQ2RDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuaW9uLWlucHV0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkNmQ2ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDUwJTtcbiAgbWF4LXdpZHRoOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggMTFweCAhaW1wb3J0YW50O1xufVxuXG4ucHJpY2UtZGV0YWlsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4ucHJpY2Uge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLnpvb20tYm94IHtcbiAgaGVpZ2h0OiA0MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uZnVsbC16b29tLWJveCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn0iXX0= */";

/***/ }),

/***/ 90200:
/*!**************************************************************************!*\
  !*** ./src/app/pages/product-detail/product-detail.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<app-header [headerTitle]=\"'PAGES.PRODUCTDETAIL' | translate\" [headerBack]=true></app-header>\n\n<ion-content>\n  <ion-modal style=\"--height: 500px;\" [isOpen]=\"ionModelOpen\" [swipeToClose]=\"false\" [backdropDismiss]=\"false\"\n    [keyboardClose]=\"false\">\n    <ng-template>\n      <ion-header>\n        <ion-toolbar style=\"--background:#fff !important\">\n\n          <ion-icon slot=\"end\" name=\"close-circle\" (click)=\"ionModelOpen=false;slideOpts['zoom']={}\"></ion-icon>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <div class='full-zoom-box'>\n          <ion-slides pager=\" true\" [options]=\"slideOpts\" style=\"height: 350px;\">\n            <!-- packageImages -->\n            <ion-slide *ngFor=\"let packageImage of detail.packageImages\">\n              <!-- <div class=\"swiper-zoom-container\"> -->\n              <img src=\"{{packageImage}}\" alt=\"{{detail.packageName}}\" />\n              <!-- </div> -->\n\n            </ion-slide>\n\n          </ion-slides>\n        </div>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n  <div style=\"padding-bottom: 30px;\">\n  <div class=\"zoom-box\">\n    <ion-slides pager=\"true\" [options]=\"slideOpts\">\n\n      <ion-slide *ngFor=\"let packageImage of detail.packageImages\">\n        <!-- <div class=\"swiper-zoom-container\"> -->\n        <img src=\"{{packageImage}}\" alt=\"{{detail.packageName}}\" (click)=\"ionModelOpen=true;slideOpts['zoom']={\n        minRatio: 1,\n        maxRatio: 3,\n        toggle: true,\n        containerClass :'swiper-zoom-container',\n        zoomedSlideClass: 'swiper-slide-zoomed'\n      }\" />\n        <!-- </div> -->\n\n      </ion-slide>\n\n    </ion-slides>\n  </div>\n\n  <ion-item lines=\"none\">\n\n    <!-- <div>-->\n\n    <div class=\"product\">\n\n\n      <h2>{{detail.packageName}}</h2>\n      <p class=\"product-detail\" *ngIf=\"detail.productNameLongEN && utility.deviceLang == 'en'\">\n        {{detail.productNameLongEN}}</p>\n      <p class=\"product-detail\" *ngIf=\"detail.productNameLongDE && utility.deviceLang == 'de'\">\n        {{detail.productNameLongDE}}</p>\n      <!-- <p class=\"product-detail\"> {{detail.productDescriptionDE}}</p> -->\n      <ion-select #availTym class=\"price-detail ion-margin\" [(ngModel)]=\"detail.avail_runtime_default\" interface=\"action-sheet\"\n        (ionChange)=\"changeDuration($event,detail.avail_runtime)\" *ngIf=\"detail != undefined\" style=\"width: 250px;\">\n        <ion-select-option *ngFor=\"let avtym of detail.avail_runtime | keyvalue\" [value]=\"avtym.value\">{{avtym.value}}\n        </ion-select-option>\n      </ion-select>\n      <!-- </div> -->\n\n\n\n    </div>\n    <!-- <div> -->\n    <!-- <ion-label>Hair Color</ion-label> -->\n\n\n    <!-- </div> -->\n\n\n  </ion-item>\n  <h1 class=\"price\"><strong> {{detail.changedPrice}}   &euro; + {{'CART.VAT' | translate}}</strong></h1>\n\n  <div class=\"content-wrap\">\n    <ion-button class=\"btn\" color=\"danger\" expand=\"block\" [disabled]=\"detail.added_to_cart == 'yes'\"\n      (click)=\"addTobasket()\">\n      {{'PRODUCT.ADDTOCART' | translate}}\n    </ion-button>\n  </div>\n  <div class=\"content-wrap\">\n    <ion-button class=\"btn\" color=\"danger\" expand=\"block\" (click)=\"removeItem()\"\n      [disabled]=\" detail.added_to_cart == 'no'\">\n      {{'PRODUCT.REMOVE' | translate}}\n    </ion-button>\n  </div>\n  <ion-item lines=\"none\">\n    <p class=\"product-detail\" *ngIf=\"detail.productDescription && utility.deviceLang == 'en'\"\n      innerHTML=\"{{detail.productDescription}}\"></p>\n    <p class=\"product-detail\" *ngIf=\"detail.productDescriptionDE && utility.deviceLang == 'de'\"\n      innerHTML=\"{{detail.productDescriptionDE}}\"> </p>\n  </ion-item>\n</div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_product-detail_product-detail_module_ts.js.map