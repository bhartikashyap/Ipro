"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_splash_splash_module_ts"],{

/***/ 1148:
/*!*******************************************************!*\
  !*** ./src/app/pages/splash/splash-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPageRoutingModule": () => (/* binding */ SplashPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash.page */ 19137);




const routes = [
    {
        path: '',
        component: _splash_page__WEBPACK_IMPORTED_MODULE_0__.SplashPage
    }
];
let SplashPageRoutingModule = class SplashPageRoutingModule {
};
SplashPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SplashPageRoutingModule);



/***/ }),

/***/ 71203:
/*!***********************************************!*\
  !*** ./src/app/pages/splash/splash.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPageModule": () => (/* binding */ SplashPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _splash_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash-routing.module */ 1148);
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash.page */ 19137);







let SplashPageModule = class SplashPageModule {
};
SplashPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _splash_routing_module__WEBPACK_IMPORTED_MODULE_0__.SplashPageRoutingModule
        ],
        declarations: [_splash_page__WEBPACK_IMPORTED_MODULE_1__.SplashPage]
    })
], SplashPageModule);



/***/ }),

/***/ 19137:
/*!*********************************************!*\
  !*** ./src/app/pages/splash/splash.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPage": () => (/* binding */ SplashPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _splash_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash.page.html?ngResource */ 26250);
/* harmony import */ var _splash_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash.page.scss?ngResource */ 93695);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ 67241);








let SplashPage = class SplashPage {
    constructor(animationCtrl, utility, router, menuCtrl) {
        this.animationCtrl = animationCtrl;
        this.utility = utility;
        this.router = router;
        this.menuCtrl = menuCtrl;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            //   const squareC = this.animationCtrl.create()
            // .addElement(this.squareC.nativeElement)
            // .duration(5000)
            // .keyframes([
            //   { offset: 0, transform: 'scale(1))', opacity: '0.5' },
            //   { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
            //   { offset: 1, transform: 'scale(1)', opacity: '0.5' }
            // ]);
            this.menuCtrl.enable(false);
            //let sessionRes = await this.utility.getStorage(session.AUTH_STATUS);
            // setTimeout(() => {
            //   if (sessionRes) {
            //     this.router.navigate(["/tabs/area-of-interest"]);
            //   } else {
            //     this.router.navigate(['/login']);
            //   }
            // }, 1000);
        });
    }
};
SplashPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AnimationController },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController }
];
SplashPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-splash',
        template: _splash_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_splash_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SplashPage);



/***/ }),

/***/ 93695:
/*!**********************************************************!*\
  !*** ./src/app/pages/splash/splash.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".splash-img-layer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.splash-img-layer img {\n  padding-top: 12%;\n}\n.logo1 {\n  width: 15%;\n}\n.logo2 {\n  width: 50%;\n}\n.ipro_logo {\n  width: 65%;\n}\nion-content {\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9pcHJvJTIwMi9zcmMvYXBwL3BhZ2VzL3NwbGFzaC9zcGxhc2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDRjtBREdFO0VBQ0UsZ0JBQUE7QUNESjtBRFlBO0VBQ0UsVUFBQTtBQ1RGO0FEV0E7RUFDRSxVQUFBO0FDUkY7QURVQTtFQUNFLFVBQUE7QUNQRjtBRFNBO0VBQ0cscUJBQUE7RUFDQSxrQkFBQTtFQUNELG9CQUFBO0VBQ0Msa0JBQUE7QUNOSCIsImZpbGUiOiJzcGxhc2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwbGFzaC1pbWctbGF5ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLy8gIGhlaWdodDogMTAwJTtcbiAgLy8gd2lkdGg6IDEwMCU7XG4gIC8vIGJhY2tncm91bmQ6ICMwNDE5MzQ7XG4gIGltZyB7XG4gICAgcGFkZGluZy10b3A6IDEyJTtcblxuICAgLy8gdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgICAvLyBwYWRkaW5nOjQwcHg7XG4gICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgLy8gaGVpZ2h0OjcwJTtcbiAgIC8vIGJhY2tncm91bmQ6IzA0MTkzNDtcbiAgfVxuXG4gIFxufVxuLmxvZ28xe1xuICB3aWR0aDogMTUlO1xufVxuLmxvZ28ye1xuICB3aWR0aDogNTAlO1xufVxuLmlwcm9fbG9nb3tcbiAgd2lkdGg6IDY1JTtcbn1cbmlvbi1jb250ZW50IHtcbiAgIC0tcGFkZGluZy1ib3R0b206IDBweDsgXG4gICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4OyBcbiAgIC0tcGFkZGluZy10b3A6IDBweDsgXG59XG4iLCIuc3BsYXNoLWltZy1sYXllciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNwbGFzaC1pbWctbGF5ZXIgaW1nIHtcbiAgcGFkZGluZy10b3A6IDEyJTtcbn1cblxuLmxvZ28xIHtcbiAgd2lkdGg6IDE1JTtcbn1cblxuLmxvZ28yIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmlwcm9fbG9nbyB7XG4gIHdpZHRoOiA2NSU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG59Il19 */";

/***/ }),

/***/ 26250:
/*!**********************************************************!*\
  !*** ./src/app/pages/splash/splash.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <!-- <div class=\"splash-img-layer\">\n    <img class=\"logo1 animate__animated animate__slideInUp animate__faster\" src=\"assets/img/animation/logo1.png\" >\n    <img class=\"logo2 animate__animated animate__slideOutDown animate__slow\" src=\"assets/img/animation/logo2.png\" >\n  </div> -->\n  <!-- <div class=\"splash-img-layer\">\n    \n    <img class=\"ipro_logo\" src=\"assets/img/animation/iPro_logo.png\" >\n  </div> -->\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_splash_splash_module_ts.js.map