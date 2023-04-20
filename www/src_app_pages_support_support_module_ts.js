"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_support_support_module_ts"],{

/***/ 27544:
/*!*********************************************************!*\
  !*** ./src/app/pages/support/support-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportPageRoutingModule": () => (/* binding */ SupportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support.page */ 66227);




const routes = [
    {
        path: '',
        component: _support_page__WEBPACK_IMPORTED_MODULE_0__.SupportPage
    }
];
let SupportPageRoutingModule = class SupportPageRoutingModule {
};
SupportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SupportPageRoutingModule);



/***/ }),

/***/ 82602:
/*!*************************************************!*\
  !*** ./src/app/pages/support/support.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "SupportPageModule": () => (/* binding */ SupportPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support-routing.module */ 27544);
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./support.page */ 66227);
/* harmony import */ var _components_share_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/share-component-module */ 99663);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30610);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 46828);











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let SupportPageModule = class SupportPageModule {
};
SupportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
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
            _support_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupportPageRoutingModule
        ],
        declarations: [_support_page__WEBPACK_IMPORTED_MODULE_1__.SupportPage]
    })
], SupportPageModule);



/***/ }),

/***/ 66227:
/*!***********************************************!*\
  !*** ./src/app/pages/support/support.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportPage": () => (/* binding */ SupportPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _support_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support.page.html?ngResource */ 24619);
/* harmony import */ var _support_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./support.page.scss?ngResource */ 67923);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 65485);







let SupportPage = class SupportPage {
    constructor(utility, apiService, router) {
        this.utility = utility;
        this.apiService = apiService;
        this.router = router;
        this.errorText = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getShopCategory();
    }
    getShopCategory() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.apiService.getSupportCategory().then((res) => {
                // console.log(res);
                if (res.status) {
                    this.allCategories = res.support_categories;
                }
                this.selectedOption = "1";
            });
        });
    }
    changeCategory(event) {
        console.log(event);
    }
    submitTicket() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.message == undefined || this.message == '' || this.message == null) {
                this.errorText = this.utility.translateText("SUPPORT").errorMsg;
                return false;
            }
            let data = {
                "supportCatId": this.selectedOption,
                "message": this.message
            };
            let url = yield this.utility.changeMenu();
            this.apiService.submitSupport(data).then((res) => {
                // console.log(res);
                if (res.status) {
                    this.utility.presentAlert("", "", [], this.utility.translateText("SUPPORT").TicketSubmitedMsg, [{
                            text: this.utility.translateText("MODALS").BUTTONS.OK,
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => {
                                this.router.navigate([url]);
                            }
                        }]);
                    this.message = '';
                    this.errorText = "";
                }
            });
        });
    }
};
SupportPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
SupportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-support',
        template: _support_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_support_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SupportPage);



/***/ }),

/***/ 67923:
/*!************************************************************!*\
  !*** ./src/app/pages/support/support.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwb3J0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 24619:
/*!************************************************************!*\
  !*** ./src/app/pages/support/support.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<app-header [headerTitle]=\"'SUPPORT.Title' | translate\" [headerBack]=false></app-header>\n\n<ion-content>\n  <div style=\"padding-top:20px;\"></div>\n  <ion-list>\n  <ion-item *ngIf=\"allCategories != null && allCategories.length > 0\">\n    <ion-label>{{'SUPPORT.TOPIC' | translate}}:</ion-label>\n    <ion-select [(ngModel)]=\"selectedOption\" interface=\"action-sheet\" (ionChange)=\"changeCategory($event)\">\n     <div *ngIf=\"utility.deviceLang == 'de'\">\n\n      <ion-select-option *ngFor=\"let cat of allCategories\" [value]=\"cat.supportCatId\">{{cat.supportCat_DE}}\n      </ion-select-option>\n\n     </div>\n      \n     <div *ngIf=\"utility.deviceLang == 'en'\">\n\n      <ion-select-option *ngFor=\"let cat of allCategories\" [value]=\"cat.supportCatId\">{{cat.supportCat_EN}}\n      </ion-select-option>\n\n     </div>\n      \n    </ion-select>\n  </ion-item>\n \n  <ion-item>\n    <ion-textarea rows=\"6\" cols=\"10\" placeholder=\"{{'SUPPORT.MSG_PLCEHOLDER' | translate}}\"  [(ngModel)]=\"message\"  id=\"message\" autocapitalize=\"off\"></ion-textarea>\n  </ion-item>\n  \n  <div class=\"error-message text-red\"  *ngIf=\"errorText != ''\">\n    {{errorText}}\n  </div>\n  \n    <ion-button class=\"btn\" color=\"danger\" expand=\"block\" margin (click)=\"submitTicket()\">\n      {{'SUPPORT.BTN' | translate}}\n    </ion-button>\n \n</ion-list>\n  </ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_support_support_module_ts.js.map