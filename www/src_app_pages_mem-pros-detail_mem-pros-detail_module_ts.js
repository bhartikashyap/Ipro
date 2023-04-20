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

module.exports = "ion-card-header {\n  display: flex;\n}\n\nion-avatar {\n  margin-right: 25px;\n  height: 50px;\n  margin-top: 15px;\n}\n\nion-card-title {\n  font-size: 16px;\n}\n\n.sub-title {\n  background-color: #000;\n  color: #fff;\n  padding: 12px 25px;\n  border-radius: 8px;\n  margin-top: 10px;\n  font-size: 12px;\n}\n\n.title-border {\n  border-bottom: 1px solid #ccc;\n}\n\n.card-btn {\n  text-transform: uppercase;\n  margin: 10px;\n  font-size: 12px !important;\n}\n\n.yellow {\n  background-color: #F9C30C;\n}\n\n.green {\n  background-color: #53AF25;\n}\n\n.blue {\n  background-color: #14253B;\n}\n\n.red {\n  background-color: #FF1601;\n}\n\n.diffColor ion-card-title {\n  color: #fff !important;\n}\n\nion-label, span {\n  font-size: 12px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbS1wcm9zLWRldGFpbC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9pcHJvJTIwMi9zcmMvYXBwL3BhZ2VzL21lbS1wcm9zLWRldGFpbC9tZW0tcHJvcy1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QURBQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNHSjs7QURBQTtFQUNJLDZCQUFBO0FDR0o7O0FEREE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ0lKOztBREZBO0VBQ0kseUJBQUE7QUNLSjs7QURIQTtFQUNJLHlCQUFBO0FDTUo7O0FESkE7RUFDSSx5QkFBQTtBQ09KOztBRExBO0VBQ0kseUJBQUE7QUNRSjs7QURMQTtFQUNJLHNCQUFBO0FDUUo7O0FETEE7RUFDSSwwQkFBQTtBQ1FKIiwiZmlsZSI6Im1lbS1wcm9zLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC1oZWFkZXJ7XG4gICAgZGlzcGxheTpmbGV4O1xufVxuaW9uLWF2YXRhcntcbiAgICBtYXJnaW4tcmlnaHQ6MjVweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cbmlvbi1jYXJkLXRpdGxle1xuICAgIGZvbnQtc2l6ZToxNnB4O1xufVxuXG4uc3ViLXRpdGxle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTJweCAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRpdGxlLWJvcmRlcntcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2NjO1xufVxuLmNhcmQtYnRue1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luOjEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG4ueWVsbG93e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUMzMEM7XG59XG4uZ3JlZW57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUzQUYyNTtcbn1cbi5ibHVle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDI1M0I7XG59XG4ucmVke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjE2MDE7XG4gICAgLy8gXG59XG4uZGlmZkNvbG9yIGlvbi1jYXJkLXRpdGxle1xuICAgIGNvbG9yOiNmZmYgIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsICwgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cblxuIiwiaW9uLWNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuaW9uLWF2YXRhciB7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMnB4IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udGl0bGUtYm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5jYXJkLWJ0biB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi55ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlDMzBDO1xufVxuXG4uZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTNBRjI1O1xufVxuXG4uYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDI1M0I7XG59XG5cbi5yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYxNjAxO1xufVxuXG4uZGlmZkNvbG9yIGlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsLCBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 20764:
/*!****************************************************************************!*\
  !*** ./src/app/pages/mem-pros-detail/mem-pros-detail.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<app-header  [headerTitle]=\"'DETAIL.title' | translate\"  [headerBack]=true  ></app-header>\n\n<ion-content>\n  <div ></div>\n \n\n<ion-card *ngIf=\"data?.userId || data?.firstName\">\n  <ion-card-content class=\"\">\n    <ion-list lines=\"none\"  class=\"title-border\" style=\"margin:2px 0px\" >\n      <ion-item *ngIf=\"data?.userId\">\n        <ion-label>{{'DETAIL.id' | translate }}:</ion-label>\n        <span>{{data?.userId != '' ? data?.userId:\"--\"}}</span>\n      </ion-item>\n      <ion-item *ngIf=\"data?.firstName\">\n        <ion-label>{{'DETAIL.name' | translate }} :</ion-label>\n        <span>{{data?.firstName != ''? data?.firstName:\"--\"}} {{data?.lastName != '' ?data?.lastName:'--'}}</span>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{'DETAIL.company' | translate }} :</ion-label>\n        <span>{{data?.companyName != ''?data?.companyName:'--'}}</span>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{'DETAIL.discount' | translate }} :</ion-label>\n\n        <ion-select *ngIf=\"data?.customizeRole != 'MEMBER'\"\n        [(ngModel)]=\"discount\"\n        (ionChange)=\"saveDsicount($event)\"\n      >\n      <ion-select-option value=\"0\" >0% </ion-select-option>\n      <ion-select-option value='5'>5%</ion-select-option>\n        <ion-select-option value='10'>10%</ion-select-option>\n        <ion-select-option value=\"15\">15%</ion-select-option>\n        <ion-select-option value=\"20\">20%</ion-select-option>\n        <ion-select-option value=\"25\">25%</ion-select-option>\n\n        <!-- [disabled]=\"data?.customizeRole == 'MEMBER'\" -->\n\n        <!-- <ion-select-option value=\"30\">30%</ion-select-option>\n        <ion-select-option value=\"35\">35%</ion-select-option>\n        <ion-select-option value=\"40\">40%</ion-select-option> -->\n        </ion-select>\n        <!-- <span><ion-input type=\"number\" value=\"5\" min=\"1\" max=\"9\"></ion-input></span> -->\n      </ion-item>\n     \n    </ion-list>\n  </ion-card-content>\n</ion-card>\n<ion-card *ngIf=\"data?.videos\">\n  <ion-card-header class=\"title-border diffColor blue\">\n    <ion-card-title>{{'DETAIL.videoProg' | translate }}</ion-card-title>\n  </ion-card-header>\n  <ion-card-content class=\"\">\n    <ion-list lines=\"none\"  class=\"title-border\" style=\"margin:2px 0px\" >\n      <!-- <ion-item>\n        <ion-label>iPro Intro :</ion-label>\n        <span>Manager 450</span>\n      </ion-item> -->\n      <ion-item>\n        <ion-label>{{'DETAIL.iM' | translate }} :</ion-label>\n        <span>{{data?.videos[0]?.percentage != '' ? data?.videos[0]?.percentage : '--'}} </span>\n      </ion-item>\n      <!-- <ion-item>\n        <ion-label>iT :</ion-label>\n        <span>{{data?.videos[1]?.percentage}}</span>\n      </ion-item> -->\n      <ion-item>\n        <ion-label>{{'DETAIL.iP' | translate }}:</ion-label>\n        <span>{{data?.videos[1]?.percentage != '' ? data?.videos[1]?.percentage : '--'}}</span>\n      </ion-item>\n    </ion-list>\n  </ion-card-content>\n</ion-card>\n<ion-card *ngIf=\"data?.email || data?.phone\">\n  <ion-card-header class=\"title-border diffColor blue\">\n    <ion-card-title>{{'DETAIL.contact' | translate }}</ion-card-title>\n  </ion-card-header>\n  <ion-card-content class=\"\">\n    <ion-list lines=\"none\"  class=\"title-border\" style=\"margin:2px 0px\" >\n      <ion-item *ngIf=\"data?.email != ''\" (click)=\"sendMail(data?.email)\">\n        <ion-label>{{'DETAIL.email' | translate }} :</ion-label>\n        <span>{{data?.email != '' ? data?.email : '--'}}</span>\n      </ion-item>\n      <ion-item *ngIf=\"data?.phone != ''\" (click)=\"callNumber(data?.phoneCode ,data?.phone)\"> \n        <ion-label>{{'DETAIL.phone' | translate }} :</ion-label>\n        <span>{{data?.phoneCode}} {{data?.phone != '' ? data?.phone: '--'}}</span>\n      </ion-item>\n    </ion-list>\n  </ion-card-content>\n</ion-card>\n<!-- to show when role is member -->\n<ion-card *ngIf=\"data?.customizeRole == 'MEMBER'\">\n  <ion-card-header class=\"title-border diffColor blue\">\n    <ion-card-title>{{'DETAIL.status' | translate }}</ion-card-title>\n  </ion-card-header>\n  <ion-card-content class=\"\">\n    <ion-list lines=\"none\"  class=\"title-border\" style=\"margin:2px 0px\" >\n      <ion-item >\n        <ion-label>{{'DETAIL.status' | translate }} :</ion-label>\n        <span>{{data?.memberType != '' ? data?.memberType : '--'}}</span>\n      </ion-item>\n      <ion-item *ngIf=\"data?.rank\">\n        <ion-label>{{'DETAIL.yourrank' | translate }} :</ion-label>\n        <span>{{data?.rank != '' ? data?.rank : '--'}}</span>\n      </ion-item>\n      <ion-item *ngIf=\"data?.GV\">\n        <ion-label>{{'DETAIL.gvcounting' | translate }}:</ion-label>\n        <span>{{data?.GV != '' ? data?.GV : '--'}}</span>\n      </ion-item>\n      <ion-item *ngIf=\"data?.DV\">\n        <ion-label>{{'DETAIL.dv' | translate }} :</ion-label>\n        <span>{{data?.DV != '' ? data?.DV : '--'}}</span>\n      </ion-item>\n      <ion-item >\n        <ion-label>Line 1 GV Counting :</ion-label>\n        <span>{{data?.GVLeg1 != '' ? data?.GVLeg1 : '--'}}</span>\n      </ion-item>\n      <ion-item >\n        <ion-label>Line 2 GV Counting :</ion-label>\n        <span>{{data?.GVLeg2 != '' ? data?.GVLeg2 : '--'}}</span>\n      </ion-item>\n      <ion-item >\n        <ion-label>Line 3 GV Counting :</ion-label>\n        <span>{{data?.GVLeg3 != '' ? data?.GVLeg3 : '--'}}</span>\n      </ion-item>\n     \n    </ion-list>\n  </ion-card-content>\n</ion-card>\n<ion-card >\n  <ion-card-header class=\"title-border diffColor blue\">\n    <ion-card-title>{{'DETAIL.notes' | translate }}</ion-card-title>\n  </ion-card-header>\n  <ion-card-content class=\"\">\n    <ion-list lines=\"none\"  class=\"title-border\" style=\"margin:2px 0px\" >\n      <ion-item>\n        <ion-textarea [(ngModel)]=\"notes\">{{data?.quickNote}}</ion-textarea>\n        <!-- <ion-label>Email :</ion-label>\n        <span>Manager 450</span> -->\n      </ion-item>\n     \n    </ion-list>\n    <p *ngIf=\"error != ''\" class=\"error\">{{'DETAIL.error' | translate }}</p>\n  </ion-card-content>\n\n</ion-card>\n\n<!-- <div class=\"content-wrap\" > -->\n  <ion-button class=\"btn\" color=\"danger\" expand=\"block\" (click)=\"saveNotes(notes)\">\n    {{'DETAIL.btn' | translate }}\n  </ion-button>\n<!-- </div> -->\n\n\n<div style=\"padding:10px;\"></div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mem-pros-detail_mem-pros-detail_module_ts.js.map