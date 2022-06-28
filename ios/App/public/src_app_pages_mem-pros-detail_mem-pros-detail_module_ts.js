"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_mem-pros-detail_mem-pros-detail_module_ts"],{

/***/ 31293:
/*!*************************************************************************!*\
  !*** ./src/app/pages/mem-pros-detail/mem-pros-detail-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemProsDetailPageRoutingModule": () => (/* binding */ MemProsDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _mem_pros_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mem-pros-detail.page */ 72389);




const routes = [
    {
        path: '',
        component: _mem_pros_detail_page__WEBPACK_IMPORTED_MODULE_0__.MemProsDetailPage
    }
];
let MemProsDetailPageRoutingModule = class MemProsDetailPageRoutingModule {
};
MemProsDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MemProsDetailPageRoutingModule);



/***/ }),

/***/ 4091:
/*!*****************************************************************!*\
  !*** ./src/app/pages/mem-pros-detail/mem-pros-detail.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "MemProsDetailPageModule": () => (/* binding */ MemProsDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _mem_pros_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mem-pros-detail-routing.module */ 31293);
/* harmony import */ var _mem_pros_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mem-pros-detail.page */ 72389);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30610);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _components_share_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/share-component-module */ 99663);











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let MemProsDetailPageModule = class MemProsDetailPageModule {
};
MemProsDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _mem_pros_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.MemProsDetailPageRoutingModule,
            _components_share_component_module__WEBPACK_IMPORTED_MODULE_2__.ShareComponentModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient],
                },
            }),
        ],
        declarations: [_mem_pros_detail_page__WEBPACK_IMPORTED_MODULE_1__.MemProsDetailPage]
    })
], MemProsDetailPageModule);



/***/ }),

/***/ 72389:
/*!***************************************************************!*\
  !*** ./src/app/pages/mem-pros-detail/mem-pros-detail.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemProsDetailPage": () => (/* binding */ MemProsDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _mem_pros_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mem-pros-detail.page.html?ngResource */ 20764);
/* harmony import */ var _mem_pros_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mem-pros-detail.page.scss?ngResource */ 9132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);







let MemProsDetailPage = class MemProsDetailPage {
    constructor(route, apiSer, util) {
        this.route = route;
        this.apiSer = apiSer;
        this.util = util;
        this.error = '';
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.discount = 0;
            this.data = yield this.util.getStorage('details');
            this.data = JSON.parse(this.data);
            this.discount = this.data.userDiscount;
        });
    }
    ngOnInit() {
    }
    saveNotes(notes) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.notes);
            this.error = '';
            if (this.notes != '') {
                let loading = yield this.util.presentLoading();
                let data = {
                    "userId": this.data.userId,
                    "quickNote": this.notes
                };
                let result = yield this.apiSer.saveNotes(data);
                if (result.status) {
                    this.util.presentToast(this.util.translateText('DETAIL').save_note, 'top');
                }
                loading.dismiss();
            }
            else {
                this.error = this.util.translateText('DETAIL').error;
            }
        });
    }
    saveDsicount(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(event.detail.value);
            let loading = yield this.util.presentLoading();
            let data = {
                "userId": this.data.userId,
                "discount": this.discount
            };
            let result = yield this.apiSer.saveDiscount(data);
            if (result.status) {
                this.util.presentToast(this.util.translateText('DETAIL').save_note, 'top');
            }
            loading.dismiss();
        });
    }
    sendMail(mailId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.util.sendMail(mailId);
        });
    }
    callNumber(phonecode, mobileNo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let mobileNum = phonecode + mobileNo;
            this.util.callMobile(mobileNum);
        });
    }
    ionViewDidLeave() {
        this.util.removeStorage('details');
    }
};
MemProsDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService }
];
MemProsDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-mem-pros-detail',
        template: _mem_pros_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_mem_pros_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MemProsDetailPage);



/***/ }),

/***/ 9132:
/*!****************************************************************************!*\
  !*** ./src/app/pages/mem-pros-detail/mem-pros-detail.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "ion-card-header {\n  display: flex;\n}\n\nion-avatar {\n  margin-right: 25px;\n  height: 50px;\n  margin-top: 15px;\n}\n\nion-card-title {\n  font-size: 16px;\n}\n\n.sub-title {\n  background-color: #000;\n  color: #fff;\n  padding: 12px 25px;\n  border-radius: 8px;\n  margin-top: 10px;\n  font-size: 12px;\n}\n\n.title-border {\n  border-bottom: 1px solid #ccc;\n}\n\n.card-btn {\n  text-transform: uppercase;\n  margin: 10px;\n  font-size: 12px !important;\n}\n\n.yellow {\n  background-color: #F9C30C;\n}\n\n.green {\n  background-color: #53AF25;\n}\n\n.blue {\n  background-color: #14253B;\n}\n\n.red {\n  background-color: #FF1601;\n}\n\n.diffColor ion-card-title {\n  color: #fff !important;\n}\n\nion-label, span {\n  font-size: 12px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbS1wcm9zLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtBQUdKOztBQUFBO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUFBO0VBQ0ksNkJBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBSUo7O0FBRkE7RUFDSSx5QkFBQTtBQUtKOztBQUhBO0VBQ0kseUJBQUE7QUFNSjs7QUFKQTtFQUNJLHlCQUFBO0FBT0o7O0FBTEE7RUFDSSx5QkFBQTtBQVFKOztBQUxBO0VBQ0ksc0JBQUE7QUFRSjs7QUFMQTtFQUNJLDBCQUFBO0FBUUoiLCJmaWxlIjoibWVtLXByb3MtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWhlYWRlcntcbiAgICBkaXNwbGF5OmZsZXg7XG59XG5pb24tYXZhdGFye1xuICAgIG1hcmdpbi1yaWdodDoyNXB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuaW9uLWNhcmQtdGl0bGV7XG4gICAgZm9udC1zaXplOjE2cHg7XG59XG5cbi5zdWItdGl0bGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMnB4IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udGl0bGUtYm9yZGVye1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNjY2M7XG59XG4uY2FyZC1idG57XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW46MTBweDtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cbi55ZWxsb3d7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5QzMwQztcbn1cbi5ncmVlbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTNBRjI1O1xufVxuLmJsdWV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MjUzQjtcbn1cbi5yZWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMTYwMTtcbiAgICAvLyBcbn1cbi5kaWZmQ29sb3IgaW9uLWNhcmQtdGl0bGV7XG4gICAgY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwgLCBzcGFuIHtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cblxuXG4iXX0= */";

/***/ }),

/***/ 20764:
/*!****************************************************************************!*\
  !*** ./src/app/pages/mem-pros-detail/mem-pros-detail.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<app-header  [headerTitle]=\"'DETAIL.title' | translate\"  [headerBack]=true  ></app-header>\n\n<ion-content>\n  <div ></div>\n \n\n<ion-card *ngIf=\"data?.userId || data?.firstName\">\n  <ion-card-content class=\"\">\n    <ion-list lines=\"none\"  class=\"title-border\" style=\"margin:2px 0px\" >\n      <ion-item *ngIf=\"data?.userId\">\n        <ion-label>{{'DETAIL.id' | translate }}:</ion-label>\n        <span>{{data?.userId != '' ? data?.userId:\"--\"}}</span>\n      </ion-item>\n      <ion-item *ngIf=\"data?.firstName\">\n        <ion-label>{{'DETAIL.name' | translate }} :</ion-label>\n        <span>{{data?.firstName != ''? data?.firstName:\"--\"}} {{data?.lastName != '' ?data?.lastName:'--'}}</span>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{'DETAIL.company' | translate }} :</ion-label>\n        <span>{{data?.companyName != ''?data?.companyName:'--'}}</span>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{'DETAIL.discount' | translate }} :</ion-label>\n\n        <ion-select\n        [(ngModel)]=\"discount\"\n        (ionChange)=\"saveDsicount($event)\"\n        [disabled]=\"data?.customizeRole == 'MEMBER'\"\n      >\n      <ion-select-option value=\"0\" >0% </ion-select-option>\n      <ion-select-option value='5'>5%</ion-select-option>\n        <ion-select-option value='10'>10%</ion-select-option>\n        <ion-select-option value=\"15\">15%</ion-select-option>\n        <ion-select-option value=\"20\">20%</ion-select-option>\n        <ion-select-option value=\"25\">25%</ion-select-option>\n        <ion-select-option value=\"30\">30%</ion-select-option>\n        <ion-select-option value=\"35\">35%</ion-select-option>\n        <ion-select-option value=\"40\">40%</ion-select-option>\n        </ion-select>\n        <!-- <span><ion-input type=\"number\" value=\"5\" min=\"1\" max=\"9\"></ion-input></span> -->\n      </ion-item>\n     \n    </ion-list>\n  </ion-card-content>\n</ion-card>\n<ion-card *ngIf=\"data?.videos\">\n  <ion-card-header class=\"title-border diffColor blue\">\n    <ion-card-title>{{'DETAIL.videoProg' | translate }}</ion-card-title>\n  </ion-card-header>\n  <ion-card-content class=\"\">\n    <ion-list lines=\"none\"  class=\"title-border\" style=\"margin:2px 0px\" >\n      <!-- <ion-item>\n        <ion-label>iPro Intro :</ion-label>\n        <span>Manager 450</span>\n      </ion-item> -->\n      <ion-item>\n        <ion-label>{{'DETAIL.iM' | translate }} :</ion-label>\n        <span>{{data?.videos[0]?.percentage != '' ? data?.videos[0]?.percentage : '--'}} </span>\n      </ion-item>\n      <!-- <ion-item>\n        <ion-label>iT :</ion-label>\n        <span>{{data?.videos[1]?.percentage}}</span>\n      </ion-item> -->\n      <ion-item>\n        <ion-label>{{'DETAIL.iP' | translate }}:</ion-label>\n        <span>{{data?.videos[1]?.percentage != '' ? data?.videos[1]?.percentage : '--'}}</span>\n      </ion-item>\n    </ion-list>\n  </ion-card-content>\n</ion-card>\n<ion-card *ngIf=\"data?.email || data?.phone\">\n  <ion-card-header class=\"title-border diffColor blue\">\n    <ion-card-title>{{'DETAIL.contact' | translate }}</ion-card-title>\n  </ion-card-header>\n  <ion-card-content class=\"\">\n    <ion-list lines=\"none\"  class=\"title-border\" style=\"margin:2px 0px\" >\n      <ion-item *ngIf=\"data?.email != ''\" (click)=\"sendMail(data?.email)\">\n        <ion-label>{{'DETAIL.email' | translate }} :</ion-label>\n        <span>{{data?.email != '' ? data?.email : '--'}}</span>\n      </ion-item>\n      <ion-item *ngIf=\"data?.phone != ''\" (click)=\"callNumber(data?.phoneCode ,data?.phone)\"> \n        <ion-label>{{'DETAIL.phone' | translate }} :</ion-label>\n        <span>{{data?.phoneCode}} {{data?.phone != '' ? data?.phone: '--'}}</span>\n      </ion-item>\n    </ion-list>\n  </ion-card-content>\n</ion-card>\n<!-- to show when role is member -->\n<ion-card *ngIf=\"data?.customizeRole == 'MEMBER'\">\n  <ion-card-header class=\"title-border diffColor blue\">\n    <ion-card-title>{{'DETAIL.status' | translate }}</ion-card-title>\n  </ion-card-header>\n  <ion-card-content class=\"\">\n    <ion-list lines=\"none\"  class=\"title-border\" style=\"margin:2px 0px\" >\n      <ion-item >\n        <ion-label>{{'DETAIL.status' | translate }} :</ion-label>\n        <span>{{data?.memberType != '' ? data?.memberType : '--'}}</span>\n      </ion-item>\n      <ion-item *ngIf=\"data?.rank\">\n        <ion-label>{{'DETAIL.yourrank' | translate }} :</ion-label>\n        <span>{{data?.rank != '' ? data?.rank : '--'}}</span>\n      </ion-item>\n      <ion-item *ngIf=\"data?.GV\">\n        <ion-label>{{'DETAIL.gvcounting' | translate }}:</ion-label>\n        <span>{{data?.GV != '' ? data?.GV : '--'}}</span>\n      </ion-item>\n      <ion-item *ngIf=\"data?.DV\">\n        <ion-label>{{'DETAIL.dv' | translate }} :</ion-label>\n        <span>{{data?.DV != '' ? data?.DV : '--'}}</span>\n      </ion-item>\n      <ion-item >\n        <ion-label>Line 1 GV Counting :</ion-label>\n        <span>{{data?.GVLeg1 != '' ? data?.GVLeg1 : '--'}}</span>\n      </ion-item>\n      <ion-item >\n        <ion-label>Line 2 GV Counting :</ion-label>\n        <span>{{data?.GVLeg2 != '' ? data?.GVLeg2 : '--'}}</span>\n      </ion-item>\n      <ion-item >\n        <ion-label>Line 3 GV Counting :</ion-label>\n        <span>{{data?.GVLeg3 != '' ? data?.GVLeg3 : '--'}}</span>\n      </ion-item>\n     \n    </ion-list>\n  </ion-card-content>\n</ion-card>\n<ion-card >\n  <ion-card-header class=\"title-border diffColor blue\">\n    <ion-card-title>{{'DETAIL.notes' | translate }}</ion-card-title>\n  </ion-card-header>\n  <ion-card-content class=\"\">\n    <ion-list lines=\"none\"  class=\"title-border\" style=\"margin:2px 0px\" >\n      <ion-item>\n        <ion-textarea [(ngModel)]=\"notes\">{{data?.quickNote}}</ion-textarea>\n        <!-- <ion-label>Email :</ion-label>\n        <span>Manager 450</span> -->\n      </ion-item>\n     \n    </ion-list>\n    <p *ngIf=\"error != ''\" class=\"error\">{{'DETAIL.error' | translate }}</p>\n  </ion-card-content>\n\n</ion-card>\n\n<!-- <div class=\"content-wrap\" > -->\n  <ion-button class=\"btn\" color=\"danger\" expand=\"block\" (click)=\"saveNotes(notes)\">\n    {{'DETAIL.btn' | translate }}\n  </ion-button>\n<!-- </div> -->\n\n\n<div style=\"padding:10px;\"></div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mem-pros-detail_mem-pros-detail_module_ts.js.map