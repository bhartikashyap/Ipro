"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_prospect-managment_prospect-managment_module_ts"],{

/***/ 78415:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/prospect-managment/prospect-managment-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProspectManagmentPageRoutingModule": () => (/* binding */ ProspectManagmentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _prospect_managment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prospect-managment.page */ 2393);




const routes = [
    {
        path: '',
        component: _prospect_managment_page__WEBPACK_IMPORTED_MODULE_0__.ProspectManagmentPage
    }
];
let ProspectManagmentPageRoutingModule = class ProspectManagmentPageRoutingModule {
};
ProspectManagmentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProspectManagmentPageRoutingModule);



/***/ }),

/***/ 48207:
/*!***********************************************************************!*\
  !*** ./src/app/pages/prospect-managment/prospect-managment.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "ProspectManagmentPageModule": () => (/* binding */ ProspectManagmentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _prospect_managment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prospect-managment-routing.module */ 78415);
/* harmony import */ var _prospect_managment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prospect-managment.page */ 2393);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30610);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _components_share_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/share-component-module */ 99663);











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let ProspectManagmentPageModule = class ProspectManagmentPageModule {
};
ProspectManagmentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
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
            _prospect_managment_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProspectManagmentPageRoutingModule
        ],
        declarations: [_prospect_managment_page__WEBPACK_IMPORTED_MODULE_1__.ProspectManagmentPage]
    })
], ProspectManagmentPageModule);



/***/ }),

/***/ 2393:
/*!*********************************************************************!*\
  !*** ./src/app/pages/prospect-managment/prospect-managment.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProspectManagmentPage": () => (/* binding */ ProspectManagmentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _prospect_managment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prospect-managment.page.html?ngResource */ 67838);
/* harmony import */ var _prospect_managment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prospect-managment.page.scss?ngResource */ 7529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 46828);









let ProspectManagmentPage = class ProspectManagmentPage {
    constructor(utiSer, apiSer, router, route, transSer) {
        this.utiSer = utiSer;
        this.apiSer = apiSer;
        this.router = router;
        this.route = route;
        this.transSer = transSer;
        this.userData = [];
        this.title = "";
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        console.log(this.transSer);
        this.route.params.subscribe(params => {
            console.log(params.type);
            if (params.type == "prospect") {
                this.getProspects();
                this.transSer.get('PROSPECT_MANAGEMENT.title').subscribe((text) => {
                    console.log(text);
                    this.title = text;
                });
                this.noRecords = this.utiSer.translateText("SHOP").NP;
            }
            else {
                this.getMembers();
                this.transSer.get('MEMBER_MANAGEMENT.title').subscribe((text) => {
                    console.log(text);
                    this.title = text;
                });
                this.noRecords = this.utiSer.translateText("SHOP").NM;
            }
        });
    }
    getProspects() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let loading = yield this.utiSer.presentLoading();
            this.userData = yield this.apiSer.getProspects();
            if (this.userData.status) {
                this.userData = (_b = (_a = this.userData) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.prospects;
            }
            else {
                this.userData = [];
            }
            loading.dismiss();
            console.log(this.userData);
        });
    }
    getMembers() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let loading = yield this.utiSer.presentLoading();
            this.userData = yield this.apiSer.getMembers();
            if (this.userData.status) {
                this.userData = (_b = (_a = this.userData) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.members;
            }
            else {
                this.userData = [];
            }
            loading.dismiss();
            console.log(this.userData);
        });
    }
    detail(data) {
        data["customizeRole"] = this.title;
        this.utiSer.setStorage("details", JSON.stringify(data));
        //this.router.navigate(['tabs/detail']);
        this.utiSer.goNext('/tabs/detail');
    }
};
ProspectManagmentPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService }
];
ProspectManagmentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-prospect-managment',
        template: _prospect_managment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_prospect_managment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProspectManagmentPage);



/***/ }),

/***/ 7529:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/prospect-managment/prospect-managment.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "ion-card-header {\n  display: flex;\n}\n\nion-avatar {\n  margin-right: 25px;\n  height: 50px;\n  margin-top: 15px;\n}\n\n.sub-title {\n  background-color: #000;\n  color: #fff;\n  padding: 12px 25px;\n  border-radius: 8px;\n  margin-top: 10px;\n  font-size: 14px;\n}\n\n.title-border {\n  border-bottom: 1px solid #ccc;\n}\n\n.card-btn {\n  text-transform: uppercase;\n  margin: 10px;\n  font-size: 14px !important;\n}\n\n.yellow {\n  background-color: #F9C30C;\n}\n\n.green {\n  background-color: #53AF25;\n}\n\n.blue {\n  background-color: #14253B;\n}\n\n.red {\n  background-color: #FF1601;\n}\n\n.diffColor ion-card-title {\n  color: #fff !important;\n}\n\n.mem-grid {\n  border-radius: 10px !important;\n}\n\n.mem-grid ion-grid {\n  padding: 0px !important;\n}\n\n.mem-grid ion-row {\n  height: 50px !important;\n  border-bottom: 1px solid #ccc;\n}\n\nion-col div {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3NwZWN0LW1hbmFnbWVudC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9pcHJvJTIwMi9zcmMvYXBwL3BhZ2VzL3Byb3NwZWN0LW1hbmFnbWVudC9wcm9zcGVjdC1tYW5hZ21lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURDQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNFSjs7QURDQTtFQUNJLDZCQUFBO0FDRUo7O0FEQUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ0dKOztBRERBO0VBQ0kseUJBQUE7QUNJSjs7QURGQTtFQUNJLHlCQUFBO0FDS0o7O0FESEE7RUFDSSx5QkFBQTtBQ01KOztBREpBO0VBQ0kseUJBQUE7QUNPSjs7QURKQTtFQUNJLHNCQUFBO0FDT0o7O0FESkE7RUFDSSw4QkFBQTtBQ09KOztBRE5JO0VBQ0ksdUJBQUE7QUNRUjs7QUROSTtFQUNJLHVCQUFBO0VBQ0EsNkJBQUE7QUNRUjs7QURKQTtFQUNJLGVBQUE7QUNPSiIsImZpbGUiOiJwcm9zcGVjdC1tYW5hZ21lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtaGVhZGVye1xuICAgIGRpc3BsYXk6ZmxleDtcbn1cbmlvbi1hdmF0YXJ7XG4gICAgbWFyZ2luLXJpZ2h0OjI1cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5zdWItdGl0bGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMnB4IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udGl0bGUtYm9yZGVye1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNjY2M7XG59XG4uY2FyZC1idG57XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW46MTBweDtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cbi55ZWxsb3d7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5QzMwQztcbn1cbi5ncmVlbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTNBRjI1O1xufVxuLmJsdWV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MjUzQjtcbn1cbi5yZWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMTYwMTtcbiAgICAvLyBcbn1cbi5kaWZmQ29sb3IgaW9uLWNhcmQtdGl0bGV7XG4gICAgY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xufVxuXG4ubWVtLWdyaWR7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICAgIGlvbi1ncmlke1xuICAgICAgICBwYWRkaW5nOjBweCAhaW1wb3J0YW50XG4gICAgfTtcbiAgICBpb24tcm93e1xuICAgICAgICBoZWlnaHQ6NTBweCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICB9O1xufVxuXG5pb24tY29sIGRpdntcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4iLCJpb24tY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5pb24tYXZhdGFyIHtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5zdWItdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTJweCAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRpdGxlLWJvcmRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uY2FyZC1idG4ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuXG4ueWVsbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5QzMwQztcbn1cblxuLmdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzQUYyNTtcbn1cblxuLmJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQyNTNCO1xufVxuXG4ucmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMTYwMTtcbn1cblxuLmRpZmZDb2xvciBpb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5tZW0tZ3JpZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbn1cbi5tZW0tZ3JpZCBpb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuLm1lbS1ncmlkIGlvbi1yb3cge1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG5cbmlvbi1jb2wgZGl2IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */";

/***/ }),

/***/ 67838:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/prospect-managment/prospect-managment.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<app-header  [headerTitle]=title  [headerBack]=true  ></app-header>\n\n<ion-content>\n\n\n  <ion-card class=\"mem-grid\">\n  <ion-grid>\n    <ion-row style=\"background: rgb(27, 43, 93); color:#fff\">\n      <ion-col class=\"ion-align-self-center\">\n        <div style=\"text-align:center\"> {{'PROSPECT_MANAGEMENT.tableHeader.userId' | translate }}</div>\n      </ion-col>\n      <ion-col class=\"ion-align-self-center\">\n        <div style=\"text-align:center\"> {{'PROSPECT_MANAGEMENT.tableHeader.name' | translate }}</div>\n      </ion-col>\n      <ion-col class=\"ion-align-self-center\">\n        <div style=\"text-align:center\"> {{'PROSPECT_MANAGEMENT.tableHeader.register' | translate }}</div>\n      </ion-col>\n      <ion-col class=\"ion-align-self-center\">\n        <div style=\"text-align:center\">  {{'PROSPECT_MANAGEMENT.tableHeader.percentage' | translate }}</div>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row style=\"border-bottom: 1px solid #ccc;\" *ngFor=\"let pros of userData; let i = index\" (click)=\"detail(pros)\">\n      <ion-col class=\"ion-align-self-center\">\n        <div style=\"text-align:center\">{{pros.userId != '' ?pros.userId:\"--\"}}</div>\n      </ion-col>\n      <ion-col class=\"ion-align-self-center\">\n        <div  style=\"text-align:center\">{{pros.firstName != '' ?pros.firstName:\"--\"}} {{pros.lastName != '' ?pros.lastName:\"--\"}}</div>\n      </ion-col>\n      <ion-col class=\"ion-align-self-center\">\n        <div  style=\"text-align:center\">{{pros.registrationDate != '' ? pros.registrationDate.split(\" \")[0]:\"--\"}}</div>\n      </ion-col>\n      <ion-col class=\"ion-align-self-center\">\n        <div  style=\"text-align:center\"> {{pros.userDiscount != '' ?pros.userDiscount:\"--\"}} \n          <!-- <span *ngIf=\"pros.userDiscount && pros.userDiscount != ''\">\n%\n          </span> -->\n          <!-- {{pros.userId}} -->\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\" userData.length <= 0\" >\n      <ion-col>{{noRecords}} </ion-col>\n    </ion-row>\n   \n  </ion-grid>\n</ion-card>\n    \n\n\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_prospect-managment_prospect-managment_module_ts.js.map