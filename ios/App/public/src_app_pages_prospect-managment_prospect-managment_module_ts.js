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
            }
            else {
                this.getMembers();
                this.transSer.get('MEMBER_MANAGEMENT.title').subscribe((text) => {
                    console.log(text);
                    this.title = text;
                });
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

module.exports = "ion-card-header {\n  display: flex;\n}\n\nion-avatar {\n  margin-right: 25px;\n  height: 50px;\n  margin-top: 15px;\n}\n\n.sub-title {\n  background-color: #000;\n  color: #fff;\n  padding: 12px 25px;\n  border-radius: 8px;\n  margin-top: 10px;\n  font-size: 12px;\n}\n\n.title-border {\n  border-bottom: 1px solid #ccc;\n}\n\n.card-btn {\n  text-transform: uppercase;\n  margin: 10px;\n  font-size: 12px !important;\n}\n\n.yellow {\n  background-color: #F9C30C;\n}\n\n.green {\n  background-color: #53AF25;\n}\n\n.blue {\n  background-color: #14253B;\n}\n\n.red {\n  background-color: #FF1601;\n}\n\n.diffColor ion-card-title {\n  color: #fff !important;\n}\n\n.mem-grid {\n  border-radius: 10px !important;\n}\n\n.mem-grid ion-grid {\n  padding: 0px !important;\n}\n\n.mem-grid ion-row {\n  height: 50px !important;\n  border-bottom: 1px solid #ccc;\n}\n\nion-col div {\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3NwZWN0LW1hbmFnbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNBO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUNBO0VBQ0ksNkJBQUE7QUFFSjs7QUFBQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBR0o7O0FBREE7RUFDSSx5QkFBQTtBQUlKOztBQUZBO0VBQ0kseUJBQUE7QUFLSjs7QUFIQTtFQUNJLHlCQUFBO0FBTUo7O0FBSkE7RUFDSSx5QkFBQTtBQU9KOztBQUpBO0VBQ0ksc0JBQUE7QUFPSjs7QUFKQTtFQUNJLDhCQUFBO0FBT0o7O0FBTkk7RUFDSSx1QkFBQTtBQVFSOztBQU5JO0VBQ0ksdUJBQUE7RUFDQSw2QkFBQTtBQVFSOztBQUpBO0VBQ0ksZUFBQTtBQU9KIiwiZmlsZSI6InByb3NwZWN0LW1hbmFnbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC1oZWFkZXJ7XG4gICAgZGlzcGxheTpmbGV4O1xufVxuaW9uLWF2YXRhcntcbiAgICBtYXJnaW4tcmlnaHQ6MjVweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnN1Yi10aXRsZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEycHggMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi50aXRsZS1ib3JkZXJ7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2NjYztcbn1cbi5jYXJkLWJ0bntcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbjoxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuLnllbGxvd3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlDMzBDO1xufVxuLmdyZWVue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1M0FGMjU7XG59XG4uYmx1ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQyNTNCO1xufVxuLnJlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYxNjAxO1xuICAgIC8vIFxufVxuLmRpZmZDb2xvciBpb24tY2FyZC10aXRsZXtcbiAgICBjb2xvcjojZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5tZW0tZ3JpZHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgaW9uLWdyaWR7XG4gICAgICAgIHBhZGRpbmc6MHB4ICFpbXBvcnRhbnRcbiAgICB9O1xuICAgIGlvbi1yb3d7XG4gICAgICAgIGhlaWdodDo1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgIH07XG59XG5cbmlvbi1jb2wgZGl2e1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 67838:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/prospect-managment/prospect-managment.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<app-header  [headerTitle]=title  [headerBack]=true  ></app-header>\n\n<ion-content>\n\n\n  <ion-card class=\"mem-grid\">\n  <ion-grid>\n    <ion-row style=\"background: rgb(27, 43, 93); color:#fff\">\n      <ion-col class=\"ion-align-self-center\">\n        <div style=\"text-align:center\"> {{'PROSPECT_MANAGEMENT.tableHeader.userId' | translate }}</div>\n      </ion-col>\n      <ion-col class=\"ion-align-self-center\">\n        <div style=\"text-align:center\"> {{'PROSPECT_MANAGEMENT.tableHeader.name' | translate }}</div>\n      </ion-col>\n      <ion-col class=\"ion-align-self-center\">\n        <div style=\"text-align:center\"> {{'PROSPECT_MANAGEMENT.tableHeader.register' | translate }}</div>\n      </ion-col>\n      <ion-col class=\"ion-align-self-center\">\n        <div style=\"text-align:center\">  {{'PROSPECT_MANAGEMENT.tableHeader.percentage' | translate }}</div>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row style=\"border-bottom: 1px solid #ccc;\" *ngFor=\"let pros of userData; let i = index\" (click)=\"detail(pros)\">\n      <ion-col class=\"ion-align-self-center\">\n        <div style=\"text-align:center\">{{pros.userId != '' ?pros.userId:\"--\"}}</div>\n      </ion-col>\n      <ion-col class=\"ion-align-self-center\">\n        <div  style=\"text-align:center\">{{pros.firstName != '' ?pros.firstName:\"--\"}} {{pros.lastName != '' ?pros.lastName:\"--\"}}</div>\n      </ion-col>\n      <ion-col class=\"ion-align-self-center\">\n        <div  style=\"text-align:center\">{{pros.registrationDate != '' ? pros.registrationDate.split(\" \")[0]:\"--\"}}</div>\n      </ion-col>\n      <ion-col class=\"ion-align-self-center\">\n        <div  style=\"text-align:center\"> {{pros.userDiscount != '' ?pros.userDiscount:\"--\"}} \n          <!-- <span *ngIf=\"pros.userDiscount && pros.userDiscount != ''\">\n%\n          </span> -->\n          <!-- {{pros.userId}} -->\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\" userData.length <= 0\" >\n      <ion-col>{{'SHOP.NP' | translate }} </ion-col>\n    </ion-row>\n   \n  </ion-grid>\n</ion-card>\n    \n\n\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_prospect-managment_prospect-managment_module_ts.js.map