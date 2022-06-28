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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let dob;
            let loading = yield this.utility.presentLoading();
            let result = yield this.apiService.getProfile();
            loading.dismiss();
            if (result.status == 1) {
                this.profile = result.data.profile ? result.data.profile : null;
                console.log(this.profile);
                if (this.profile.countryId == "84") {
                    this.next = false;
                }
                else {
                    this.next = true;
                }
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
                if (this.profile.countryId == "84") {
                    data = {
                        financeDepart: this.financeDepart ? this.financeDepart : '',
                        taxId: this.taxId,
                        VATId: this.VATId ? this.VATId : '',
                        selected_option: this.selected_option
                    };
                }
                console.log(data);
                let loading = yield this.utility.presentLoading();
                let result = yield this.apiService.partnerAgreement(data);
                loading.dismiss();
                console.log(result);
                if (result.status) {
                    console.log(result);
                    this.utility.presentToast("Agreement saved successfully.", "top");
                    this.utility.goBack();
                }
            }
        });
    }
    goForSign() {
        console.log(this.selected_option);
        console.log(this.taxId);
        this.errorText = '';
        this.taxIderror = '';
        if (this.selected_option == undefined || this.selected_option == null) {
            this.errorText = "Please select atleast one option.";
        }
        if (this.taxId == undefined || this.taxId == null) {
            this.taxIderror = "Please enter tax id.";
        }
        if (this.errorText == '' && this.taxIderror == '') {
            this.next = !this.next;
        }
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

module.exports = ".form1 .custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background: transparent;\n}\n\n.form1 .custom-checkbox .custom-control-label::before {\n  width: 18px;\n  height: 18px;\n  border-radius: 0;\n  background: #c4c4c4;\n  box-shadow: none !important;\n  outline: none !important;\n}\n\n.form1 .custom-checkbox .custom-control-label::after {\n  width: 18px;\n  height: 18px;\n}\n\n.form1 .custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background: #ff662a;\n}\n\n.question {\n  padding: 10px 10px;\n}\n\n.question div {\n  margin: 10px;\n}\n\n.tax {\n  padding: 20px 0px;\n}\n\n.tax div {\n  display: flex;\n  font-size: 14px;\n  margin: 10px;\n}\n\n.tax div span {\n  padding: 10px;\n}\n\nion-input {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  border: 1px solid #d6d6d6 !important;\n  height: 35px;\n  width: 90%;\n  max-width: 100%;\n  border-radius: 5px !important;\n  padding: 0px 6px !important;\n  --padding-bottom: 0px;\n  --padding-top: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0 !important;\n}\n\n.lines ion-text p {\n  margin: 10px;\n}\n\nion-label {\n  line-height: 1.1 !important;\n  font-size: 13px !important;\n}\n\n.btn1 {\n  background-color: #ff662a;\n  border: 1px solid #ff662a;\n}\n\n.btn2 {\n  background-color: #14253B;\n  border: 1px solid #14253B;\n}\n\n.btn {\n  display: inline-block;\n  width: auto;\n  min-width: 48%;\n  color: #fff;\n  text-align: center;\n  padding: 10px 15px;\n  font-size: 0.8125em;\n  line-height: 1.5;\n  border-radius: 2px;\n  transition: all 0.4s ease;\n  white-space: normal;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05) !important;\n  outline: none !important;\n  text-transform: uppercase;\n  margin: 1px;\n}\n\nion-radio.ios {\n  border: solid 1px #ccc !important;\n  border-radius: 7px !important;\n  height: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRuZXItYWdyZWVtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxZQUFBO0FBQ1I7O0FBR0E7RUFDSSxpQkFBQTtBQUFKOztBQUNJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ1I7O0FBQVE7RUFDSSxhQUFBO0FBRVo7O0FBR0M7RUFDRyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUFBSjs7QUFLQTtFQUNJLFlBQUE7QUFGSjs7QUFJQTtFQUNJLDJCQUFBO0VBQ0EsMEJBQUE7QUFESjs7QUFJQTtFQUVJLHlCQUFBO0VBQ0EseUJBQUE7QUFGSjs7QUFJRTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUFESjs7QUFLRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxREFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBRko7O0FBS0U7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7QUFGSiIsImZpbGUiOiJwYXJ0bmVyLWFncmVlbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybTEgLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtMSAuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBiYWNrZ3JvdW5kOiAjYzRjNGM0O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtMSAuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIge1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbn1cblxuLmZvcm0xIC5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWR+LmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6ICNmZjY2MmE7XG59XG5cbi5xdWVzdGlvbiB7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuXG4gICAgZGl2IHtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgIH1cbn1cblxuLnRheHtcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgICBkaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBwYWRkaW5nOjEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiBpb24taW5wdXQge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDZkNmQ2ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweCA2cHggIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwICFpbXBvcnRhbnQ7XG59XG5cblxuXG4ubGluZXMgaW9uLXRleHQgcCB7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuaW9uLWxhYmVse1xuICAgIGxpbmUtaGVpZ2h0OiAxLjEgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6MTNweCAhaW1wb3J0YW50O1xufVxuXG4uYnRuMSB7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NjJhO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjY2MmE7XG4gIH1cbiAgLmJ0bjJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MjUzQjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTQyNTNCO1xuICAgIFxuICB9XG5cbiAgLmJ0biB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1pbi13aWR0aDogNDglO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgZm9udC1zaXplOiAwLjgxMjVlbTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2IoMCAwIDAgLyA1JSkgIWltcG9ydGFudDtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW46MXB4XG4gIH1cblxuICBpb24tcmFkaW8uaW9ze1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2MgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 66592:
/*!********************************************************************************!*\
  !*** ./src/app/pages/partner-agreement/partner-agreement.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<app-header [headerTitle]=\"'Agreement.title' | translate\" [headerBack]=true></app-header>\n<ion-content>\n  <div style=\"padding: 10px;\"></div>\n\n  <ion-list>\n    <div *ngIf=\"!next\">\n      <ion-item lines=\"none\">\n        <ion-label class=\"ion-text-wrap\">\n          <strong>{{'Agreement.german.title' | translate}}</strong>\n        </ion-label>\n      </ion-item>\n\n      <ion-radio-group [value]=\"selected_option\">\n        <ion-item (click)=\"selected_option = 'check1';errorText= '';\">\n          <ion-label class=\"ion-text-wrap check-label\">{{'Agreement.german.line1' | translate}}</ion-label>\n          <ion-radio slot=\"start\" value=\"check1\" checked=\"selected_option =='check1'\"></ion-radio>\n          <!-- <ion-checkbox slot=\"start\" class=\"privacy-check\" [(ngModel)]=\"line1\" (ionChange)=\"errorText = ''\">\n        </ion-checkbox> -->\n        </ion-item>\n        <ion-item (click)=\"selected_option = 'check2';errorText= '';\">\n          <ion-label class=\"ion-text-wrap check-label\">{{'Agreement.german.line2' | translate}}</ion-label>\n          <ion-radio slot=\"start\" value=\"check2\" checked=\"selected_option =='check2'\"></ion-radio>\n          <!-- <ion-checkbox slot=\"start\" class=\"privacy-check\" [(ngModel)]=\"line2\" (ionChange)=\"errorText = ''\">\n        </ion-checkbox> -->\n        </ion-item>\n        <ion-item (click)=\"selected_option = 'check3';errorText= '';\">\n          <ion-label class=\"ion-text-wrap check-label\">{{'Agreement.german.line3' | translate}} <br>\n            {{'Agreement.german.line3.1' | translate}} <br>{{'Agreement.german.line3.2' | translate}}</ion-label>\n          <ion-radio slot=\"start\" value=\"check3\" checked=\"selected_option =='check3'\"></ion-radio>\n          <!-- <ion-checkbox slot=\"start\" class=\"privacy-check\" [(ngModel)]=\"line3\" (ionChange)=\"errorText = ''\">\n        </ion-checkbox> -->\n        </ion-item>\n      <div *ngIf=\"errorText\" style=\"color: red;padding: 5px 10px;\">{{errorText}}</div>\n\n      </ion-radio-group>\n\n\n      <div class=\" tax\">\n\n        <div >\n          <span >{{'Agreement.german.input1' | translate}} :</span>\n\n          <ion-input type=\"text\" class=\"form-group\" placeholder=\"{{'Agreement.german.input1' | translate}}\"\n            [(ngModel)]=\"financeDepart\" id=\"financeDepart\" autocapitalize=\"off\">\n          </ion-input>\n        </div>\n        <div>\n          <span >{{'Agreement.german.input2' | translate}} :</span>\n\n          <ion-input type=\"number\" placeholder=\"{{'Agreement.german.input2' | translate}}\" [(ngModel)]=\"taxId\"\n            id=\"taxId\" autocapitalize=\"off\">\n          </ion-input>\n        </div>\n        <div>\n          <span >{{'Agreement.german.input3' | translate}} :</span>\n\n          <ion-input type=\"text\" placeholder=\"{{'Agreement.german.input3' | translate}}\" [(ngModel)]=\"VATId\" id=\"VATId\"\n            autocapitalize=\"off\">\n          </ion-input>\n        </div>\n        <div *ngIf=\"taxIderror\" style=\"color: red;padding: 5px 10px;\">{{taxIderror}}</div>\n      </div>\n    </div>\n    <div *ngIf=\"next\">\n      <ion-item lines=\"none\">\n        <ion-label class=\"ion-text-wrap\"> \n          <strong>{{'Agreement.all-partner.title' | translate}}</strong>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\" style=\"height: 400px; \">\n        <!-- <div  style=\"height: 100%; border: solid 1px #ccc;\n      border-radius: 2px;\"> -->\n        <iframe class=\"webPage\" style=\"height:400px;border: solid 1px #ccc;\n        border-radius: 2px;\" frameborder=\"0\" name=\"eventsPage\" [src]=\"partner\">\n        </iframe>\n\n        <!-- </div> -->\n\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label class=\"ion-text-wrap\">\n          {{'Agreement.all-partner.sub-text' | translate}}\n        </ion-label>\n      </ion-item>\n\n\n\n\n      <div style=\"display:flex;padding-left:20px\" class=\"question\">\n\n        <div>\n          <span style=\"padding: 10px;\">{{profile?.firstName}}</span>\n          <ion-input type=\"text\" class=\"form-group\" placeholder=\"Firstname\" [(ngModel)]=\"firstname\" id=\"firstname\"\n            autocapitalize=\"off\">\n          </ion-input>\n        </div>\n        <div>\n          <span style=\"padding: 10px;\">{{profile?.lastName}}</span>\n          <ion-input type=\"text\" placeholder=\"Family Name\" [(ngModel)]=\"lastname\" id=\"lastname\" autocapitalize=\"off\">\n          </ion-input>\n        </div>\n        \n      </div>\n\n      <div style=\"padding-left:20px;\">\n        <div *ngIf=\"firstnameMessage\" style=\"color: red;padding: 5px 10px;\">{{firstnameMessage}}</div>\n\n        <div *ngIf=\"lastnameMessage\" style=\"color: red;padding: 5px 10px;\">{{lastnameMessage}}</div>\n      </div>\n\n    </div>\n\n    <div class=\"text-center\" style=\"width: 100%;\n    text-align: center;\">\n      <a class=\"btn btn1\" (click)=\"goForSign()\" *ngIf=\"!next\">\n        {{'Agreement.german.btn' | translate}}\n      </a>\n      <a class=\"btn btn1\" (click)=\"checkDigitalSign();\" *ngIf=\"next &&  profile.countryId != '84'\">\n        {{'Agreement.all-partner.btn' | translate}}\n      </a>\n    </div>\n    <!-- <ion-button class=\"\" color=\"danger\" expand=\"block\" margin (click)=\"next=!next\" *ngIf=\"!next\">\n      {{'Agreement.german.btn' | translate}}\n    </ion-button>\n    <ion-button class=\"btn\" color=\"danger\" expand=\"block\" margin (click)=\"next=!next;checkDigitalSign();\" *ngIf=\"next &&  profile.countryId != '84'\">\n      {{'Agreement.all-partner.btn' | translate}}\n    </ion-button> -->\n\n\n    <div class=\"text-center\" *ngIf=\"next && profile.countryId == '84'\" style=\"width: 100%;\n    text-align: center;\">\n      <a class=\"btn btn2\" (click)=\"next=false;\">\n        {{'QUESTIONNAIRE.btn.back' | translate}}\n      </a>\n      <a class=\"btn btn1\" (click)=\"checkDigitalSign();\">\n        {{'Agreement.all-partner.btn' | translate}}\n      </a>\n    </div>\n  </ion-list>\n  <div style=\"padding: 10px;\"></div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_partner-agreement_partner-agreement_module_ts.js.map