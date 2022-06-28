"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_tabs_module_ts"],{

/***/ 15448:
/*!***************************************************!*\
  !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsRoutingModule": () => (/* binding */ TabsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.component */ 17298);




const routes = [
    {
        path: "",
        component: _tabs_component__WEBPACK_IMPORTED_MODULE_0__.TabsComponent,
        children: [
            {
                path: "area-of-interest",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_area-of-interest_area-of-interest_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/area-of-interest/area-of-interest.module */ 70280)).then((m) => m.AreaOfInterestPageModule),
            },
            {
                path: 'dashboard/:type',
                loadChildren: () => 
                // import('../../pages/member-replacement/member-replacement.module').then( m => m.MemberReplacementPageModule)
                __webpack_require__.e(/*! import() */ "src_app_pages_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/dashboard/dashboard.module */ 71659)).then(m => m.DashboardPageModule),
            },
            {
                path: 'basket',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_basket_basket_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/basket/basket.module */ 14416)).then(m => m.BasketPageModule),
            },
            {
                path: "personalized-micronutrition",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_personalized-micronutrition_personalized-micronutrition_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/personalized-micronutrition/personalized-micronutrition.module */ 85522)).then((m) => m.PersonalizedMicronutritionPageModule),
            },
            {
                path: "inteligent-trading",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_inteligent-trading_inteligent-trading_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/inteligent-trading/inteligent-trading.module */ 65310)).then((m) => m.InteligentTradingPageModule),
            },
            {
                path: "ipro-partnership",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_ipro-partnership_ipro-partnership_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/ipro-partnership/ipro-partnership.module */ 22969)).then((m) => m.IproPartnershipPageModule),
            },
            {
                path: "book-analysis",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_register_register_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_book-analysis_book-analysis_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/book-analysis/book-analysis.module */ 95933)).then((m) => m.BookAnalysisPageModule),
            },
            {
                path: "cart",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_cart_cart_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/cart/cart.module */ 70313)).then((m) => m.CartPageModule),
            },
            {
                path: "check-zip",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_check-zip_check-zip_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/check-zip/check-zip.module */ 80289)).then((m) => m.CheckZipPageModule),
            },
            {
                path: "changepassword",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_changepassword_changepassword_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/changepassword/changepassword.module */ 48142)).then((m) => m.ChangepasswordPageModule),
            },
            {
                path: "shop",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_shop_shop_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/shop/shop.module */ 71159)).then((m) => m.ShopPageModule),
            },
            {
                path: "product-detail",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_product-detail_product-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/product-detail/product-detail.module */ 98848)).then((m) => m.ProductDetailPageModule),
            },
            {
                path: 'user-managment/:type',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_prospect-managment_prospect-managment_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/prospect-managment/prospect-managment.module */ 48207)).then((m) => m.ProspectManagmentPageModule),
            },
            {
                path: 'notification',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_notification_notification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/notification/notification.module */ 89770)).then(m => m.NotificationPageModule)
            },
            {
                path: 'detail',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_mem-pros-detail_mem-pros-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/mem-pros-detail/mem-pros-detail.module */ 4091)).then(m => m.MemProsDetailPageModule)
            },
            {
                path: 'my-sponsor',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_my-sponsor_my-sponsor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/my-sponsor/my-sponsor.module */ 62646)).then(m => m.MySponsorPageModule)
            },
            {
                path: 'myproducts',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_myproducts_myproducts_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/myproducts/myproducts.module */ 88582)).then(m => m.MyproductsPageModule)
            },
            {
                path: 'setdiscount',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_setdicount_setdicount_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/setdicount/setdicount.module */ 89359)).then(m => m.SetdicountPageModule)
            },
            {
                path: 'paymnet-option',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_paymnet-option_paymnet-option_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/paymnet-option/paymnet-option.module */ 4087)).then(m => m.PaymnetOptionPageModule)
            },
            {
                path: 'commission-option',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_commission-option_commission-option_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/commission-option/commission-option.module */ 30907)).then(m => m.CommissionOptionPageModule)
            },
            {
                path: 'partner-agreement',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_partner-agreement_partner-agreement_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/partner-agreement/partner-agreement.module */ 21313)).then(m => m.PartnerAgreementPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_register_register_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/profile/profile.module */ 88558)).then(m => m.ProfilePageModule)
            }
            // {
            //   path: "",
            //   redirectTo: "/tabs/area-of-interest",
            //   pathMatch: "full",
            // },
        ],
    },
    // {
    //   path: "",
    //   redirectTo: "/tabs/area-of-interest",
    //   pathMatch: "full",
    // },
];
let TabsRoutingModule = class TabsRoutingModule {
};
TabsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabsRoutingModule);



/***/ }),

/***/ 17298:
/*!**********************************************!*\
  !*** ./src/app/pages/tabs/tabs.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsComponent": () => (/* binding */ TabsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.component.html?ngResource */ 37995);
/* harmony import */ var _tabs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.component.scss?ngResource */ 25847);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ 67241);






let TabsComponent = class TabsComponent {
    constructor(menuCtrl, utilSer) {
        this.menuCtrl = menuCtrl;
        this.utilSer = utilSer;
        this.dashboard = '';
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // await this.utilSer.changeMenu();
        });
    }
    ionViewWillEnter() {
        this.dashboard = "/tabs/dashboard/" + this.utilSer.defaultDash;
    }
    openMenu() {
        console.log(this.menuCtrl);
        this.menuCtrl.enable(true);
        this.menuCtrl.open('first');
    }
};
TabsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService }
];
TabsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-tabs",
        template: _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsComponent);



/***/ }),

/***/ 5557:
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "TabsModule": () => (/* binding */ TabsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 15448);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.component */ 17298);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30610);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _components_share_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/share-component-module */ 99663);










function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

let TabsModule = class TabsModule {
};
TabsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_tabs_component__WEBPACK_IMPORTED_MODULE_1__.TabsComponent],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsRoutingModule,
            _components_share_component_module__WEBPACK_IMPORTED_MODULE_3__.ShareComponentModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient],
                },
            })
        ],
    })
], TabsModule);



/***/ }),

/***/ 25847:
/*!***********************************************************!*\
  !*** ./src/app/pages/tabs/tabs.component.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 37995:
/*!***********************************************************!*\
  !*** ./src/app/pages/tabs/tabs.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button [routerLink]=\"[utilSer.mainDashboard]\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>{{'tabs.tab1' | translate}}</ion-label>\n    </ion-tab-button>\n    <!-- <ion-tab-button [routerLink]=\"[ '/tabs/dashboard']\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>Dashboard</ion-label>\n    </ion-tab-button> -->\n    \n    <ion-tab-button [routerLink]=\"['/tabs/shop']\">\n      <ion-icon name=\"storefront-outline\"></ion-icon>\n      <ion-label>{{'tabs.tab2' | translate}}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button [routerLink]=\"[ '/tabs/basket']\">\n      <ion-icon name=\"cart-outline\"></ion-icon>\n      <ion-badge color=\"primary\">{{utilSer.cartNo}}</ion-badge>\n      <ion-label>{{'tabs.tab3' | translate}}</ion-label>\n    </ion-tab-button>\n    <ion-tab-button (click)=\"openMenu()\">\n      <ion-icon name=\"menu\"></ion-icon>\n      <ion-label>{{'tabs.tab4' | translate}}</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_tabs_module_ts.js.map