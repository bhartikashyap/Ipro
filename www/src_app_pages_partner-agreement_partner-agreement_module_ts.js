"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_partner-agreement_partner-agreement_module_ts"],{

/***/ 64477:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/partner-agreement/partner-agreement-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartnerAgreementPageRoutingModule": () => (/* binding */ PartnerAgreementPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _partner_agreement_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partner-agreement.page */ 113);




const routes = [
    {
        path: '',
        component: _partner_agreement_page__WEBPACK_IMPORTED_MODULE_0__.PartnerAgreementPage
    }
];
let PartnerAgreementPageRoutingModule = class PartnerAgreementPageRoutingModule {
};
PartnerAgreementPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PartnerAgreementPageRoutingModule);



/***/ }),

/***/ 21313:
/*!*********************************************************************!*\
  !*** ./src/app/pages/partner-agreement/partner-agreement.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "PartnerAgreementPageModule": () => (/* binding */ PartnerAgreementPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _partner_agreement_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partner-agreement-routing.module */ 64477);
/* harmony import */ var _partner_agreement_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partner-agreement.page */ 113);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30610);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _components_share_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/share-component-module */ 99663);










function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

let PartnerAgreementPageModule = class PartnerAgreementPageModule {
};
PartnerAgreementPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _partner_agreement_routing_module__WEBPACK_IMPORTED_MODULE_0__.PartnerAgreementPageRoutingModule,
            _components_share_component_module__WEBPACK_IMPORTED_MODULE_3__.ShareComponentModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient],
                },
            })
        ],
        declarations: [_partner_agreement_page__WEBPACK_IMPORTED_MODULE_1__.PartnerAgreementPage]
    })
], PartnerAgreementPageModule);



/***/ }),

/***/ 113:
/*!*******************************************************************!*\
  !*** ./src/app/pages/partner-agreement/partner-agreement.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartnerAgreementPage": () => (/* binding */ PartnerAgreementPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _partner_agreement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partner-agreement.page.html?ngResource */ 66592);
/* harmony import */ var _partner_agreement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partner-agreement.page.scss?ngResource */ 13449);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 78394);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);







let PartnerAgreementPage = class PartnerAgreementPage {
    constructor(utility, domSanit, apiService) {
        this.utility = utility;
        this.domSanit = domSanit;
        this.apiService = apiService;
        this.next = false;
        this.partner = this.domSanit.bypassSecurityTrustResourceUrl(this.utility.pdfLink[4].link);
        this.next = false;
        // this.utility.openPdfLinks(this.utility.pdfLink[4].link,'Partner');
    }
    ngOnInit() {
        this.getProfile();
    }
    initForm() {
        // this.form = this.fb.group({
        //   selected_plan: ["", []],
        //   role: ["", [Validators.required]],
        //   email: ["", [Validators.required, Validators.pattern(pattern.email)]],
        //   streetname: ["", [Validators.required, Validators.maxLength(100)]],
        //   nr: ["", [Validators.required, Validators.maxLength(50)]],
        //   city: ["", [Validators.required, Validators.maxLength(100)]],
        // });
    }
    getProfile() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let dob;
            let loading = yield this.utility.presentLoading();
            let result = yield this.apiService.getProfile();
            loading.dismiss();
            if (result.status == 1) {
                this.profile = result.data.profile ? result.data.profile : null;
                console.log(this.profile);
                this.VATId = (_a = this.profile) === null || _a === void 0 ? void 0 : _a.VATId;
                this.taxId = (_b = this.profile) === null || _b === void 0 ? void 0 : _b.taxId;
                // if (this.profile.countryId == "84") {
                //   this.next = false;
                // }
                // else {
                //   this.next = true;
                // }
            }
        });
    }
    checkDigitalSign() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.lastnameMessage = '';
            this.firstnameMessage = '';
            let error = 0;
            if (this.lastname == undefined || this.lastname == '') {
                this.firstnameMessage = this.utility.translateText('QUESTIONNAIRE').completeSign;
                error = 1;
            }
            if (this.firstname == undefined || this.firstname == '') {
                this.firstnameMessage = this.utility.translateText('QUESTIONNAIRE').completeSign;
                error = 1;
            }
            if (this.firstname.toLowerCase() != this.profile.firstName.toLowerCase()) {
                this.firstnameMessage = this.utility.translateText('QUESTIONNAIRE').firstNameError;
                error = 1;
            }
            if (this.lastname.toLowerCase() != this.profile.lastName.toLowerCase()) {
                this.lastnameMessage = this.utility.translateText('QUESTIONNAIRE').lastNameError;
                error = 1;
            }
            if (!error) {
                let data;
                // if (this.profile.countryId == "84") {
                data = {
                    financeDepart: this.financeDepart ? this.financeDepart : '',
                    taxId: this.taxId,
                    VATId: this.VATId ? this.VATId : '',
                    selected_option: this.selected_option
                };
                // }
                console.log(data);
                let loading = yield this.utility.presentLoading();
                let result = yield this.apiService.partnerAgreement(data);
                loading.dismiss();
                console.log(result);
                if (result.status) {
                    console.log(result);
                    this.utility.presentToast(this.utility.translateText('MSG').agreementSaved, "top");
                    this.utility.goBack();
                }
            }
        });
    }
    goForSign() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.selected_option);
            console.log(this.taxId);
            this.errorText = '';
            this.taxIderror = '';
            if (this.profile.countryId == "84") {
                if (this.selected_option == undefined || this.selected_option == null || this.selected_option == "") {
                    this.errorText = this.utility.translateText('Agreement').error;
                }
            }
            if (this.selected_option == 'check3') {
                if (this.taxId == undefined || this.taxId == null || this.taxId == "") {
                    this.taxIderror = this.utility.translateText('Agreement').taxerror;
                }
                else {
                }
            }
            if (this.VATId != undefined && this.VATId != null && this.VATId != "") {
                this.errorText = ".........";
                let loading = yield this.utility.presentLoading();
                let result = yield this.apiService.validateTaxID({ "VATId": this.VATId });
                loading.dismiss();
                if (result.status) {
                    this.errorText = "";
                    this.taxIderror = "";
                    // this.next = true;
                }
                else {
                    this.taxIderror = this.utility.translateText('Agreement').UIDerror;
                }
            }
            if (this.errorText == '' && this.taxIderror == '') {
                this.next = !this.next;
            }
        });
    }
    openBrowser(link) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.utility.openPdfLinks(this.utility.pdfLink[4].link, 'partner');
        });
    }
};
PartnerAgreementPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService }
];
PartnerAgreementPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-partner-agreement',
        template: _partner_agreement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_partner_agreement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PartnerAgreementPage);



/***/ }),

/***/ 13449:
/*!********************************************************************************!*\
  !*** ./src/app/pages/partner-agreement/partner-agreement.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".form1 .custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background: transparent;\n}\n\n.form1 .custom-checkbox .custom-control-label::before {\n  width: 18px;\n  height: 18px;\n  border-radius: 0;\n  background: #c4c4c4;\n  box-shadow: none !important;\n  outline: none !important;\n}\n\n.form1 .custom-checkbox .custom-control-label::after {\n  width: 18px;\n  height: 18px;\n}\n\n.form1 .custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background: #ff662a;\n}\n\n.question {\n  padding: 10px 10px;\n}\n\n.question div {\n  margin: 10px;\n}\n\n.tax {\n  padding: 20px 0px;\n}\n\n.tax div {\n  display: flex;\n  font-size: 14px;\n  margin: 10px;\n}\n\n.tax div span {\n  padding: 10px;\n}\n\nion-input {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  border: 1px solid #d6d6d6 !important;\n  height: 35px;\n  width: 90%;\n  max-width: 100%;\n  border-radius: 5px !important;\n  padding: 0px 6px !important;\n  --padding-bottom: 0px;\n  --padding-top: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0 !important;\n}\n\n.lines ion-text p {\n  margin: 10px;\n}\n\nion-label {\n  line-height: 1.1 !important;\n  font-size: 13px !important;\n}\n\n.btn1 {\n  background-color: #ff662a;\n  border: 1px solid #ff662a;\n}\n\n.btn2 {\n  background-color: #14253B;\n  border: 1px solid #14253B;\n}\n\n.btn {\n  display: inline-block;\n  width: auto;\n  min-width: 48%;\n  color: #fff;\n  text-align: center;\n  padding: 10px 15px;\n  font-size: 0.8125em;\n  line-height: 1.5;\n  border-radius: 2px;\n  transition: all 0.4s ease;\n  white-space: normal;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05) !important;\n  outline: none !important;\n  text-transform: uppercase;\n  margin: 1px;\n}\n\nion-radio.ios {\n  border: solid 1px #ccc !important;\n  border-radius: 7px !important;\n  height: 15px !important;\n}\n\n.sign {\n  padding: 10px;\n}\n\n.question {\n  display: flex;\n  padding-left: 20px;\n}\n\n.sign-error {\n  padding-left: 20px;\n}\n\n.next {\n  width: 100%;\n  text-align: center;\n}\n\n.error-text {\n  color: red;\n  padding: 5px 10px;\n}\n\n.partner-warn {\n  border: solid #000 2px;\n  padding: 15%;\n  font-size: 18px;\n}\n\n.partner-frame {\n  height: 400px;\n  border: solid 1px #ccc;\n  border-radius: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRuZXItYWdyZWVtZW50LnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2lwcm8lMjAyL3NyYy9hcHAvcGFnZXMvcGFydG5lci1hZ3JlZW1lbnQvcGFydG5lci1hZ3JlZW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURDSTtFQUNJLFlBQUE7QUNDUjs7QURHQTtFQUNJLGlCQUFBO0FDQUo7O0FEQ0k7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDUjs7QURBUTtFQUNJLGFBQUE7QUNFWjs7QURHQztFQUNHLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQ0FKOztBREtBO0VBQ0ksWUFBQTtBQ0ZKOztBRElBO0VBQ0ksMkJBQUE7RUFDQSwwQkFBQTtBQ0RKOztBRElBO0VBRUkseUJBQUE7RUFDQSx5QkFBQTtBQ0ZKOztBRElFO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQ0RKOztBREtFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFEQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNGSjs7QURLRTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtBQ0ZKOztBRElBO0VBQ0ksYUFBQTtBQ0RKOztBREdBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQ0E7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBQTtFQUNJLHNCQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNHTjs7QURBQTtFQUNJLGFBQUE7RUFBYSxzQkFBQTtFQUNULGtCQUFBO0FDSVIiLCJmaWxlIjoicGFydG5lci1hZ3JlZW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0xIC5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWR+LmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybTEgLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYmFja2dyb3VuZDogI2M0YzRjNDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZm9ybTEgLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmFmdGVyIHtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG59XG5cbi5mb3JtMSAuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2Vkfi5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmY2NjJhO1xufVxuXG4ucXVlc3Rpb24ge1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcblxuICAgIGRpdiB7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9XG59XG5cbi50YXh7XG4gICAgcGFkZGluZzogMjBweCAwcHg7XG4gICAgZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmb250LXNpemU6MTRweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICBzcGFue1xuICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4gaW9uLWlucHV0IHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDZkNiAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwcHggNnB4ICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMCAhaW1wb3J0YW50O1xufVxuXG5cblxuLmxpbmVzIGlvbi10ZXh0IHAge1xuICAgIG1hcmdpbjogMTBweDtcbn1cbmlvbi1sYWJlbHtcbiAgICBsaW5lLWhlaWdodDogMS4xICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOjEzcHggIWltcG9ydGFudDtcbn1cblxuLmJ0bjEge1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjYyYTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY2NjJhO1xuICB9XG4gIC5idG4ye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDI1M0I7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzE0MjUzQjtcbiAgICBcbiAgfVxuXG4gIC5idG4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogYXV0bztcbiAgICBtaW4td2lkdGg6IDQ4JTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMC44MTI1ZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiKDAgMCAwIC8gNSUpICFpbXBvcnRhbnQ7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luOjFweFxuICB9XG5cbiAgaW9uLXJhZGlvLmlvc3tcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG4uc2lnbntcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLnF1ZXN0aW9ue1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBwYWRkaW5nLWxlZnQ6MjBweFxufVxuLnNpZ24tZXJyb3J7XG4gICAgcGFkZGluZy1sZWZ0OjIwcHg7XG59XG4ubmV4dHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lcnJvci10ZXh0e1xuICAgIGNvbG9yOiByZWQ7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4ucGFydG5lci13YXJue1xuICAgIGJvcmRlcjogc29saWQgIzAwMCAycHg7XG4gICAgICBwYWRkaW5nOiAxNSU7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5wYXJ0bmVyLWZyYW1le1xuICAgIGhlaWdodDo0MDBweDtib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG59IiwiLmZvcm0xIC5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybTEgLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQ6ICNjNGM0YzQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZm9ybTEgLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmFmdGVyIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbn1cblxuLmZvcm0xIC5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICNmZjY2MmE7XG59XG5cbi5xdWVzdGlvbiB7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbn1cbi5xdWVzdGlvbiBkaXYge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi50YXgge1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbn1cbi50YXggZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDEwcHg7XG59XG4udGF4IGRpdiBzcGFuIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2ZDYgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggNnB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5saW5lcyBpb24tdGV4dCBwIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG5pb24tbGFiZWwge1xuICBsaW5lLWhlaWdodDogMS4xICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufVxuXG4uYnRuMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjY2MmE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjY2MmE7XG59XG5cbi5idG4yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MjUzQjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzE0MjUzQjtcbn1cblxuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogNDglO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMC44MTI1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDUpICFpbXBvcnRhbnQ7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAxcHg7XG59XG5cbmlvbi1yYWRpby5pb3Mge1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLnNpZ24ge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucXVlc3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5zaWduLWVycm9yIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4ubmV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lcnJvci10ZXh0IHtcbiAgY29sb3I6IHJlZDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5cbi5wYXJ0bmVyLXdhcm4ge1xuICBib3JkZXI6IHNvbGlkICMwMDAgMnB4O1xuICBwYWRkaW5nOiAxNSU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnBhcnRuZXItZnJhbWUge1xuICBoZWlnaHQ6IDQwMHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59Il19 */";

/***/ }),

/***/ 66592:
/*!********************************************************************************!*\
  !*** ./src/app/pages/partner-agreement/partner-agreement.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<app-header [headerTitle]=\"'Agreement.title' | translate\" [headerBack]=true></app-header>\n<ion-content>\n  <div style=\"padding: 10px;\"></div>\n\n  <ion-list >\n    <div  *ngIf=\" profile?.countryId == '84' && !next\">\n     \n      <ion-item lines=\"none\" >\n        <ion-label class=\"ion-text-wrap\">\n          <strong>{{'Agreement.german.title' | translate}}</strong>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-radio-group [value]=\"selected_option\" >\n          <ion-item (click)=\"selected_option = 'check1';errorText= '';\">\n            <ion-label class=\"ion-text-wrap check-label\">{{'Agreement.german.line1' | translate}}</ion-label>\n            <ion-radio slot=\"start\" value=\"check1\" checked=\"selected_option =='check1'\"></ion-radio>\n            <!-- <ion-checkbox slot=\"start\" class=\"privacy-check\" [(ngModel)]=\"line1\" (ionChange)=\"errorText = ''\">\n        </ion-checkbox> -->\n          </ion-item>\n          <ion-item (click)=\"selected_option = 'check2';errorText= '';\">\n            <ion-label class=\"ion-text-wrap check-label\">{{'Agreement.german.line2' | translate}}</ion-label>\n            <ion-radio slot=\"start\" value=\"check2\" checked=\"selected_option =='check2'\"></ion-radio>\n            <!-- <ion-checkbox slot=\"start\" class=\"privacy-check\" [(ngModel)]=\"line2\" (ionChange)=\"errorText = ''\">\n        </ion-checkbox> -->\n          </ion-item>\n          <ion-item (click)=\"selected_option = 'check3';errorText= '';\">\n            <ion-label class=\"ion-text-wrap check-label\">{{'Agreement.german.line3' | translate}} <br>\n              {{'Agreement.german.line3.1' | translate}} <br>{{'Agreement.german.line3.2' | translate}}</ion-label>\n            <ion-radio slot=\"start\" value=\"check3\" checked=\"selected_option =='check3'\"></ion-radio>\n            <!-- <ion-checkbox slot=\"start\" class=\"privacy-check\" [(ngModel)]=\"line3\" (ionChange)=\"errorText = ''\">\n        </ion-checkbox> -->\n          </ion-item>\n          <div *ngIf=\"errorText\" class=\"error-text\">{{errorText}}</div>\n\n        </ion-radio-group>\n      </ion-item>\n\n    </div>\n    <div *ngIf=\" profile?.countryId != '84' && !next\">\n      <ion-item lines=\"none\" >\n        <ion-label class=\"ion-text-wrap\">\n          <strong>{{'Agreement.all-partner.title' | translate}}</strong>\n        </ion-label>\n      </ion-item>\n\n     \n      <ion-item lines=\"none\">\n      <div  class=\"partner-warn\">\n        <strong>{{ 'Agreement.partner-warning' | translate }}</strong>\n      </div>\n    </ion-item>\n  </div>\n    <ion-item lines=\"none\" *ngIf=\"!next\">\n      <div class=\" tax\">\n\n        <div>\n          <span>{{'Agreement.german.input1' | translate}} :</span>\n\n          <ion-input type=\"text\" class=\"form-group\" placeholder=\"{{'Agreement.german.input1' | translate}}\"\n            [(ngModel)]=\"financeDepart\" id=\"financeDepart\" autocapitalize=\"off\">\n          </ion-input>\n        </div>\n        <div>\n          <span>{{'Agreement.german.input2' | translate}} :</span>\n\n          <ion-input type=\"number\" placeholder=\"{{'Agreement.german.input2' | translate}}\" [(ngModel)]=\"taxId\"\n            id=\"taxId\" autocapitalize=\"off\">\n          </ion-input>\n        </div>\n        <div>\n          <span>{{'Agreement.german.input3' | translate}} :</span>\n\n          <ion-input type=\"text\" placeholder=\"{{'Agreement.german.input3' | translate}}\" [(ngModel)]=\"VATId\" id=\"VATId\"\n            autocapitalize=\"off\">\n          </ion-input>\n        </div>\n        <div *ngIf=\"taxIderror\" class=\"error-text\">{{taxIderror}}</div>\n      </div>\n    </ion-item>\n   \n   \n    <div *ngIf=\"next\">\n      <ion-item lines=\"none\" >\n        <a  (click)=\"openBrowser(partner)\" slot=\"end\" >\n          <!-- {{'Agreement.german.btn' | translate}} -->\n          Open In Browser\n        </a>\n      </ion-item>\n      <ion-item lines=\"none\" style=\"height: 400px; \">\n        <!-- <div  style=\"height: 100%; border: solid 1px #ccc;\n      border-radius: 2px;\"> -->\n   \n        <iframe class=\"webPage\" class=\"partner-frame\" frameborder=\"0\" name=\"eventsPage\" [src]=\"partner\" (click)=\"openBrowser(partner)\">\n        </iframe>\n       \n        <!-- </div> -->\n\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label class=\"ion-text-wrap\">\n          {{'Agreement.all-partner.sub-text' | translate}}\n        </ion-label>\n      </ion-item>\n\n\n\n\n      <div  class=\"question\">\n\n        <div>\n          <span  class=\"sign\">{{profile?.firstName}}</span>\n          <ion-input type=\"text\" class=\"form-group\" placeholder=\"Firstname\" [(ngModel)]=\"firstname\" id=\"firstname\"\n            autocapitalize=\"off\">\n          </ion-input>\n        </div>\n        <div>\n          <span  class=\"sign\">{{profile?.lastName}}</span>\n          <ion-input type=\"text\" placeholder=\"Family Name\" [(ngModel)]=\"lastname\" id=\"lastname\" autocapitalize=\"off\">\n          </ion-input>\n        </div>\n\n      </div>\n\n      <div  class=\"sign-error\">\n        <div *ngIf=\"firstnameMessage\" class=\"error-text\">{{firstnameMessage}}</div>\n\n        <div *ngIf=\"lastnameMessage\" class=\"error-text\">{{lastnameMessage}}</div>\n      </div>\n\n    </div>\n\n    <div class=\"text-center next\"  *ngIf=\"!next\">\n      <a class=\"btn btn1\" (click)=\"goForSign()\" >\n        {{'Agreement.german.btn' | translate}}\n      </a>\n      <!-- <a class=\"btn btn1\" (click)=\"checkDigitalSign();\" *ngIf=\"next &&  profile?.countryId != '84'\">\n        {{'Agreement.all-partner.btn' | translate}}\n      </a> -->\n    </div>\n\n\n    <div class=\"text-center next\" *ngIf=\"next \">\n      <a class=\"btn btn2\" (click)=\"next=false;\">\n        {{'QUESTIONNAIRE.btn.back' | translate}}\n      </a>\n      <a class=\"btn btn1\" (click)=\"checkDigitalSign();\">\n        {{'Agreement.all-partner.btn' | translate}}\n      </a>\n    </div>\n  </ion-list>\n  <div style=\"padding: 10px;\"></div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_partner-agreement_partner-agreement_module_ts.js.map