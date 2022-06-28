"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_changepassword_changepassword_module_ts"],{

/***/ 95299:
/*!***********************************************************************!*\
  !*** ./src/app/pages/changepassword/changepassword-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangepasswordPageRoutingModule": () => (/* binding */ ChangepasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _changepassword_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changepassword.page */ 47963);




const routes = [
    {
        path: '',
        component: _changepassword_page__WEBPACK_IMPORTED_MODULE_0__.ChangepasswordPage
    }
];
let ChangepasswordPageRoutingModule = class ChangepasswordPageRoutingModule {
};
ChangepasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChangepasswordPageRoutingModule);



/***/ }),

/***/ 48142:
/*!***************************************************************!*\
  !*** ./src/app/pages/changepassword/changepassword.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangepasswordPageModule": () => (/* binding */ ChangepasswordPageModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _changepassword_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changepassword-routing.module */ 95299);
/* harmony import */ var _changepassword_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changepassword.page */ 47963);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30610);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _components_share_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/share-component-module */ 99663);










function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}

let ChangepasswordPageModule = class ChangepasswordPageModule {
};
ChangepasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _components_share_component_module__WEBPACK_IMPORTED_MODULE_3__.ShareComponentModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient],
                },
            }),
            _changepassword_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangepasswordPageRoutingModule
        ],
        declarations: [_changepassword_page__WEBPACK_IMPORTED_MODULE_1__.ChangepasswordPage]
    })
], ChangepasswordPageModule);



/***/ }),

/***/ 47963:
/*!*************************************************************!*\
  !*** ./src/app/pages/changepassword/changepassword.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangepasswordPage": () => (/* binding */ ChangepasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _changepassword_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changepassword.page.html?ngResource */ 79287);
/* harmony import */ var _changepassword_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changepassword.page.scss?ngResource */ 94832);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utility/message */ 34410);
/* harmony import */ var src_app_utility_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utility/validator */ 62387);












let ChangepasswordPage = class ChangepasswordPage {
    constructor(router, menuCtrl, _translate, utility, formBuilder, apiService) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this._translate = _translate;
        this.utility = utility;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.submitted = false;
        this.type = "password";
    }
    get formControls() {
        return this.form.controls;
    }
    initForm() {
        this.form = this.formBuilder.group({
            oldpassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(100)]],
            newpassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(100)]],
            confirmpassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(100)]
            ]
        }, {
            validator: (0,src_app_utility_validator__WEBPACK_IMPORTED_MODULE_5__.ConfirmedValidator)('newpassword', 'confirmpassword')
        });
        let messages = this.utility.translateText('MSG');
        this.validationMessage = {
            oldpassword: [
                { type: "required", message: messages.required },
                { type: "pattern", message: messages.password },
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(100, messages.maxLength, messages.characters) },
            ],
            newpassword: [
                { type: "required", message: messages.required },
                { type: "pattern", message: messages.password },
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(100, messages.maxLength, messages.characters) },
            ],
            confirmpassword: [
                { type: "required", message: messages.required },
                { type: "pattern", message: messages.password },
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(100, messages.maxLength, messages.characters) },
            ],
        };
    }
    ngOnInit() {
        this.initForm();
        this.menuCtrl.enable(false);
    }
    changeType() {
        if (this.type == "password") {
            this.type = "text";
        }
        else {
            this.type = "password";
        }
    }
    signup() {
        this.router.navigate(["/register"]);
    }
    changePassword() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.submitted = true;
            console.log(this.form);
            if (this.form.valid) {
                this.submitted = false;
                let params = {
                    "currentPassword": this.form.getRawValue().oldpassword,
                    "newPassword": this.form.getRawValue().newpassword
                };
                // this.form.getRawValue();
                console.log(params);
                let loading = yield this.utility.presentLoading();
                this.apiService
                    .changePassword(params)
                    .then((res) => {
                    loading.dismiss();
                    if (res.status == 1) {
                        // let token = res.jwt;
                        // let data = res.data;
                        this.utility.presentToast("Password changed sucessfully", "top");
                        this.utility.presentToast(res.msg, "top");
                        this.form.reset();
                        // this.utility.setStorage(session.AUTH_STATUS, 1);
                        // this.utility.setStorage(session.AUTH_TOKEN, token);
                        // this.utility.setStorage(session.AUTH_USER, JSON.stringify(data));
                        this.router.navigate(["/tabs/area-of-interest"]);
                    }
                    else {
                        this.utility.presentToast(res.msg, "bottom");
                    }
                })
                    .catch((err) => {
                    console.log(err);
                    loading.dismiss();
                });
                console.log(params);
            }
        });
    }
};
ChangepasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
ChangepasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-changepassword',
        template: _changepassword_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_changepassword_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChangepasswordPage);



/***/ }),

/***/ 62387:
/*!**************************************!*\
  !*** ./src/app/utility/validator.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmedValidator": () => (/* binding */ ConfirmedValidator)
/* harmony export */ });
function ConfirmedValidator(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ 94832:
/*!**************************************************************************!*\
  !*** ./src/app/pages/changepassword/changepassword.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "form {\n  padding: 5px;\n  padding-top: 0px;\n}\nform .form-group {\n  position: relative;\n  --inner-padding-end: 5px !important;\n  margin-top: 20px;\n}\nform div {\n  padding: 1px 10px;\n}\nform ion-input {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  border: 1px solid #d6d6d6 !important;\n  height: 45px;\n  border-radius: 5px !important;\n  padding: 12px 11px !important;\n  --padding-bottom: 0px;\n  --padding-top: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0 !important;\n}\nform ion-item.item-has-value ion-label,\nform ion-item.item-has-focus ion-label {\n  top: 15px !important;\n  background: white;\n  z-index: 999;\n  text-align: left;\n  font-size: 16px !important;\n  width: 100px !important;\n  padding-left: 10px;\n}\nform ion-label.label-floating {\n  position: relative;\n  top: 3px;\n  left: 10px;\n  font-size: 12px !important;\n  color: gray !important;\n}\nform .password-input {\n  position: relative;\n}\nform .password-input ion-input {\n  --padding-bottom: 0px;\n  --padding-top: 0px;\n  --padding-start: 0px;\n  --padding-end: 40px;\n}\nform .password-input ion-icon {\n  position: absolute;\n  bottom: 10px;\n  right: 35px;\n  font-size: 25px;\n  z-index: 9999;\n}\nform .forgot-password {\n  color: #6d6d6d;\n  font-size: 12px;\n  font-weight: 400;\n  text-decoration: none;\n  padding: 5px 30px;\n}\nform .dont-know {\n  color: #6d6d6d;\n  font-size: 12px;\n  font-weight: 400;\n  text-decoration: none;\n  text-align: center;\n  width: 100%;\n  display: block;\n  margin-top: 20px;\n}\nform .dont-know span {\n  color: #ff662a;\n}\nform .btn {\n  height: 40px;\n  font-size: 12px;\n  font-weight: 600;\n  --border-radius: 4px;\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUFKO0FBQ0k7RUFDRSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUFDTjtBQUNJO0VBQ0UsaUJBQUE7QUFDTjtBQUNJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQUNOO0FBRUk7O0VBRUUsb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUFOO0FBR0k7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBQUROO0FBR0k7RUFDRSxrQkFBQTtBQUROO0FBRU07RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUFSO0FBRU07RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFBUjtBQUdJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFETjtBQUdJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRE47QUFFTTtFQUNFLGNBQUE7QUFBUjtBQUdJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQUROIiwiZmlsZSI6ImNoYW5nZXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBmb3JtIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAuZm9ybS1ncm91cCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiA1cHggIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuICAgIGRpdntcbiAgICAgIHBhZGRpbmc6IDFweCAxMHB4O1xuICAgIH1cbiAgICBpb24taW5wdXQge1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2ZDYgIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogNDVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZzogMTJweCAxMXB4ICFpbXBvcnRhbnQ7XG4gICAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gIFxuICAgIGlvbi1pdGVtLml0ZW0taGFzLXZhbHVlIGlvbi1sYWJlbCxcbiAgICBpb24taXRlbS5pdGVtLWhhcy1mb2N1cyBpb24tbGFiZWwge1xuICAgICAgdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgXG4gICAgaW9uLWxhYmVsLmxhYmVsLWZsb2F0aW5nIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogM3B4O1xuICAgICAgbGVmdDogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnBhc3N3b3JkLWlucHV0IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogNDBweDtcbiAgICAgIH1cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgIHJpZ2h0OiAzNXB4O1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICB9XG4gICAgfVxuICAgIC5mb3Jnb3QtcGFzc3dvcmQge1xuICAgICAgY29sb3I6ICM2ZDZkNmQ7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgcGFkZGluZzogNXB4IDMwcHg7XG4gICAgfVxuICAgIC5kb250LWtub3cge1xuICAgICAgY29sb3I6ICM2ZDZkNmQ7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6ICNmZjY2MmE7XG4gICAgICB9XG4gICAgfVxuICAgIC5idG4ge1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgbWFyZ2luOiAyMHB4O1xuICAgIH1cbiAgfVxuICAiXX0= */";

/***/ }),

/***/ 79287:
/*!**************************************************************************!*\
  !*** ./src/app/pages/changepassword/changepassword.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<app-header  [headerTitle]=\"'CHANGEPASS.title' | translate\"  [headerBack]=true  ></app-header>\n<ion-content>\n  \n  <!-- <div class=\"login-img-layer\">\n    <img src=\"assets/img/logo.png\" />\n  </div>\n  <div class=\"login-header\">pass\n    <h1>{{'LOGIN.TITLE' | translate}}</h1>\n  </div> -->\n  <div>\n  <form [formGroup]=\"form\">\n   \n    <ion-item lines=\"none\" class=\"form-group ion-no-padding password-input\">\n      <!-- <ion-label for=\"password\" position=\"floating\">{{'LOGIN.PASSWORD' | translate}}</ion-label> -->\n      <ion-input\n        id=\"oldpassword\"\n        formControlName=\"oldpassword\"\n        placeholder=\"{{'CHANGEPASS.OLDPASS' | translate}}\"\n        autocapitalize=\"off\"\n        type=\"text\"\n      >\n      </ion-input>\n      <!-- <ion-icon\n        *ngIf=\"type === 'password'\"\n        (click)=\"changeType()\"\n        name=\"eye-outline\"\n      >\n      </ion-icon>\n      <ion-icon\n        *ngIf=\"type === 'text'\"\n        (click)=\"changeType()\"\n        name=\"eye-off-outline\"\n      >\n      </ion-icon> -->\n    </ion-item>\n    <div *ngFor=\"let validation of validationMessage.oldpassword\">\n      <div\n        *ngIf=\"submitted && formControls['oldpassword'].errors\"\n        class=\"validation-message\"\n      >\n        <div\n          class=\"error-message text-red\"\n          *ngIf=\"formControls['oldpassword'].errors[validation.type]\"\n        >\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding password-input\">\n      <!-- <ion-label for=\"password\" position=\"floating\">{{'LOGIN.PASSWORD' | translate}}</ion-label> -->\n      <ion-input\n        id=\"newpassword\"\n        formControlName=\"newpassword\"\n        placeholder=\"{{'CHANGEPASS.NEWPASS' | translate}}\"\n        autocapitalize=\"off\"\n        [type]=\"type\"\n      >\n      </ion-input>\n      <ion-icon\n        *ngIf=\"type === 'password'\"\n        (click)=\"changeType()\"\n        name=\"eye-outline\"\n      >\n      </ion-icon>\n      <ion-icon\n        *ngIf=\"type === 'text'\"\n        (click)=\"changeType()\"\n        name=\"eye-off-outline\"\n      >\n      </ion-icon>\n    </ion-item>\n    <div *ngFor=\"let validation of validationMessage.newpassword\">\n      <div\n        *ngIf=\"submitted && formControls['newpassword'].errors\"\n        class=\"validation-message\"\n      >\n        <div\n          class=\"error-message text-red\"\n          *ngIf=\"formControls['newpassword'].errors[validation.type]\"\n        >\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding password-input\">\n      <!-- <ion-label for=\"password\" position=\"floating\">{{'LOGIN.PASSWORD' | translate}}</ion-label> -->\n      <ion-input\n        id=\"confirmpassword\"\n        formControlName=\"confirmpassword\"\n        placeholder=\"{{'CHANGEPASS.CONFIRMPASS' | translate}}\"\n        autocapitalize=\"off\"\n        [type]=\"type\"\n      >\n      </ion-input>\n      <ion-icon\n        *ngIf=\"type === 'password'\"\n        (click)=\"changeType()\"\n        name=\"eye-outline\"\n      >\n      </ion-icon>\n      <ion-icon\n        *ngIf=\"type === 'text'\"\n        (click)=\"changeType()\"\n        name=\"eye-off-outline\"\n      >\n      </ion-icon>\n    </ion-item>\n    <div *ngFor=\"let validation of validationMessage.confirmpassword\">\n      <div\n        *ngIf=\"submitted && formControls['confirmpassword'].errors\"\n        class=\"validation-message\"\n      >\n        <div\n          class=\"error-message text-red\"\n          *ngIf=\"formControls['confirmpassword'].errors[validation.type]\"\n        >\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n   \n    <ion-button class=\"btn\" (click)=\"changePassword()\" color=\"danger\" expand=\"block\"\n      >{{'CHANGEPASS.title' | translate}}\n    </ion-button>\n   \n   \n  </form>\n</div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_changepassword_changepassword_module_ts.js.map