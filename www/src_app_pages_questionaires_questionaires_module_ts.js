"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_questionaires_questionaires_module_ts"],{

/***/ 97897:
/*!*********************************************************************!*\
  !*** ./src/app/pages/questionaires/questionaires-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionairesPageRoutingModule": () => (/* binding */ QuestionairesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _questionaires_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questionaires.page */ 31129);




const routes = [
    {
        path: '',
        component: _questionaires_page__WEBPACK_IMPORTED_MODULE_0__.QuestionairesPage
    }
];
let QuestionairesPageRoutingModule = class QuestionairesPageRoutingModule {
};
QuestionairesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QuestionairesPageRoutingModule);



/***/ }),

/***/ 6535:
/*!*************************************************************!*\
  !*** ./src/app/pages/questionaires/questionaires.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "QuestionairesPageModule": () => (/* binding */ QuestionairesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _questionaires_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questionaires-routing.module */ 97897);
/* harmony import */ var _components_share_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/share-component-module */ 99663);
/* harmony import */ var _questionaires_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questionaires.page */ 31129);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30610);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 46828);











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let QuestionairesPageModule = class QuestionairesPageModule {
};
QuestionairesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _components_share_component_module__WEBPACK_IMPORTED_MODULE_1__.ShareComponentModule,
            _questionaires_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuestionairesPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient],
                },
            })
        ],
        declarations: [_questionaires_page__WEBPACK_IMPORTED_MODULE_2__.QuestionairesPage]
    })
], QuestionairesPageModule);



/***/ }),

/***/ 31129:
/*!***********************************************************!*\
  !*** ./src/app/pages/questionaires/questionaires.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionairesPage": () => (/* binding */ QuestionairesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _questionaires_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questionaires.page.html?ngResource */ 23137);
/* harmony import */ var _questionaires_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questionaires.page.scss?ngResource */ 24436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ 67241);






let QuestionairesPage = class QuestionairesPage {
    constructor(router, utlity) {
        this.router = router;
        this.utlity = utlity;
        this.errorText = '';
    }
    ngOnInit() {
    }
    goForward() {
        this.errorText = '';
        if (this.agree) {
            this.router.navigate(["/question"]);
        }
        else {
            this.errorText = this.utlity.translateText('QUESTIONNAIRE').msg;
        }
    }
};
QuestionairesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService }
];
QuestionairesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-questionaires',
        template: _questionaires_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_questionaires_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuestionairesPage);



/***/ }),

/***/ 24436:
/*!************************************************************************!*\
  !*** ./src/app/pages/questionaires/questionaires.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".question-class {\n  font-style: normal;\n  font-weight: 800;\n  font-size: 16px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  color: #6D6D6D;\n}\n\n.question-content {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 21px;\n  display: flex;\n  align-items: center;\n  color: #6D6D6D;\n}\n\n.privacy-check {\n  margin-right: 10px;\n}\n\n.check-label {\n  font-size: 12px;\n  line-height: 21px;\n  display: flex;\n  align-items: center;\n  color: #6D6D6D;\n}\n\n.personal-data {\n  font-weight: 800;\n  font-size: 16px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  color: #6D6D6D;\n}\n\nion-item ion-select {\n  background: #FFFFFF;\n  border: 1px solid #D6D6D6;\n  box-sizing: border-box;\n  border-radius: 4px;\n  width: 200px;\n  padding: 10px;\n  color: #A2A2A2;\n  font-size: 12px;\n}\n\nion-item ion-input {\n  background: #FFFFFF;\n  border: 1px solid #D6D6D6;\n  box-sizing: border-box;\n  border-radius: 4px;\n  font-size: 12px;\n  line-height: 18px;\n  color: #A2A2A2;\n  --padding-start: 10px;\n  max-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uYWlyZXMucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vaXBybyUyMDIvc3JjL2FwcC9wYWdlcy9xdWVzdGlvbmFpcmVzL3F1ZXN0aW9uYWlyZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQUo7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDR0o7O0FEQUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNHSjs7QUREQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNJSiIsImZpbGUiOiJxdWVzdGlvbmFpcmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdWVzdGlvbi1jbGFzc3tcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiAjNkQ2RDZEO1xuXG59XG5cbi5xdWVzdGlvbi1jb250ZW50e1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICM2RDZENkQ7XG59IFxuLnByaXZhY3ktY2hlY2t7XG4gICAgbWFyZ2luLXJpZ2h0OjEwcHg7XG59XG4uY2hlY2stbGFiZWx7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogIzZENkQ2RDtcbn1cbi5wZXJzb25hbC1kYXRhe1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogIzZENkQ2RDtcbn1cblxuaW9uLWl0ZW0gaW9uLXNlbGVjdHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENkQ2RDY7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6I0EyQTJBMjtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5pb24taXRlbSBpb24taW5wdXR7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDZENkQ2O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBjb2xvcjojQTJBMkEyO1xuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xufSIsIi5xdWVzdGlvbi1jbGFzcyB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICM2RDZENkQ7XG59XG5cbi5xdWVzdGlvbi1jb250ZW50IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzZENkQ2RDtcbn1cblxuLnByaXZhY3ktY2hlY2sge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5jaGVjay1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjNkQ2RDZEO1xufVxuXG4ucGVyc29uYWwtZGF0YSB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjNkQ2RDZEO1xufVxuXG5pb24taXRlbSBpb24tc2VsZWN0IHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q2RDZENjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjQTJBMkEyO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmlvbi1pdGVtIGlvbi1pbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNENkQ2RDY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgY29sb3I6ICNBMkEyQTI7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbn0iXX0= */";

/***/ }),

/***/ 23137:
/*!************************************************************************!*\
  !*** ./src/app/pages/questionaires/questionaires.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-header>\n  \n  <ion-toolbar class=\"ion-toolbar\">\n   \n    <ion-title>{{'PAGES.QUESTIONARE' | translate}}</ion-title>\n   \n  \n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n\n  <ion-list>\n    <ion-item lines=\"none\">\n      <ion-label class=\"ion-text-wrap\">\n        <ion-text>\n          <h3 class=\"question-class\">{{'QUESTIONNAIRE.line1' | translate}}\n            only!</h3>\n        </ion-text>\n        <ion-text>\n          <p class=\"question-content\">{{'QUESTIONNAIRE.line2' | translate}}</p>\n        </ion-text>\n      </ion-label>\n    </ion-item>\n\n\n    <ion-item lines=\"none\">\n      <ion-label class=\"ion-text-wrap check-label\">{{'QUESTIONNAIRE.terms' | translate}}</ion-label>\n      <ion-checkbox slot=\"start\" class=\"privacy-check\" [(ngModel)]=\"agree\" (ionCahange)=\"errorText = ''\"></ion-checkbox>\n    </ion-item>\n  \n    <div class=\"error-message text-red\"  *ngIf=\"errorText != ''\">\n      {{errorText}}\n    </div>\n\n    <!-- <ion-item lines=\"none\">\n      <ion-text class=\"personal-data\">Personal Data</ion-text>\n    </ion-item>\n\n    <ion-item lines=\"none\" >\n\n      <ion-select placeholder=\"Gender\" >\n        <ion-select-option value=\"f\">Female</ion-select-option>\n        <ion-select-option value=\"m\">Male</ion-select-option>\n        <ion-select-option value=\"o\">Others</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-input placeholder=\"Body Height (in cm)\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-input placeholder=\"Abdominal girth (in cm)\"></ion-input>\n    </ion-item> -->\n     \n    <ion-button class=\"btn\" color=\"danger\" expand=\"block\" margin (click)=\"goForward()\">\n      {{'QUESTIONNAIRE.btn.next' | translate}}\n    </ion-button>\n  </ion-list>\n \n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_questionaires_questionaires_module_ts.js.map