"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_components_user-modal_user-modal_module_ts"],{

/***/ 1857:
/*!********************************************************************!*\
  !*** ./src/app/components/user-modal/user-modal-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModalPageRoutingModule": () => (/* binding */ UserModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _user_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-modal.page */ 43253);




const routes = [
    {
        path: '',
        component: _user_modal_page__WEBPACK_IMPORTED_MODULE_0__.UserModalPage
    }
];
let UserModalPageRoutingModule = class UserModalPageRoutingModule {
};
UserModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserModalPageRoutingModule);



/***/ }),

/***/ 8624:
/*!************************************************************!*\
  !*** ./src/app/components/user-modal/user-modal.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "UserModalPageModule": () => (/* binding */ UserModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _user_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-modal-routing.module */ 1857);
/* harmony import */ var _user_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-modal.page */ 43253);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30610);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _components_share_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/share-component-module */ 99663);











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
let UserModalPageModule = class UserModalPageModule {
};
UserModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _user_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserModalPageRoutingModule,
            _components_share_component_module__WEBPACK_IMPORTED_MODULE_2__.ShareComponentModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient],
                },
            }),
        ],
        declarations: [_user_modal_page__WEBPACK_IMPORTED_MODULE_1__.UserModalPage]
    })
], UserModalPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_components_user-modal_user-modal_module_ts.js.map