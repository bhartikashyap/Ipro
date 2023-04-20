"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_check-zip_check-zip_page_ts"],{

/***/ 56169:
/*!***************************************************!*\
  !*** ./src/app/pages/check-zip/check-zip.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckZipPage": () => (/* binding */ CheckZipPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _check_zip_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-zip.page.html?ngResource */ 55946);
/* harmony import */ var _check_zip_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-zip.page.scss?ngResource */ 15625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utility/message */ 34410);
/* harmony import */ var src_app_services_environment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/environment.service */ 98407);












let CheckZipPage = class CheckZipPage {
    constructor(router, menuCtrl, _translate, navController, formBuilder, utility, apiService, envr) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this._translate = _translate;
        this.navController = navController;
        this.formBuilder = formBuilder;
        this.utility = utility;
        this.apiService = apiService;
        this.envr = envr;
        this.submitted = false;
        this.zipCodeFilled = false;
        this.analystList = [];
        this.lightAnlysis = false;
        this.analyst = "";
    }
    get formControls() {
        return this.form.controls;
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(false);
        this.getProfile();
        console.log(this.utility.translateText('MSG').currentlyUnavailable);
    }
    initForm() {
        this.form = this.formBuilder.group({
            zip: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(100)]],
        });
        let messages = this.utility.translateText('MSG');
        this.validationMessage = {
            zip: [
                { type: "required", message: messages.required },
                { type: "maxlength", message: src_app_utility_message__WEBPACK_IMPORTED_MODULE_4__.message.maxLength(100, messages.maxLength, messages.characters) },
            ],
        };
    }
    ngOnInit() {
        this.initForm();
        this.menuCtrl.enable(false);
    }
    getProfile() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.zipCodeFilled = false;
            let result = yield this.apiService.getProfile();
            if (result && ((_b = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.profile) === null || _b === void 0 ? void 0 : _b.zipCode)) {
                this.role = (_d = (_c = result === null || result === void 0 ? void 0 : result.data) === null || _c === void 0 ? void 0 : _c.profile) === null || _d === void 0 ? void 0 : _d.role;
                if (((_f = (_e = result === null || result === void 0 ? void 0 : result.data) === null || _e === void 0 ? void 0 : _e.profile) === null || _f === void 0 ? void 0 : _f.role) != 'Prospect') {
                    this.zipCodeFilled = true;
                    this.form.get("zip").setValue((_h = (_g = result === null || result === void 0 ? void 0 : result.data) === null || _g === void 0 ? void 0 : _g.profile) === null || _h === void 0 ? void 0 : _h.zipCode);
                    this.submit();
                }
                else {
                    this.zipCodeFilled = false;
                    this.form.get("zip").setValue("");
                }
            }
        });
    }
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.submitted = true;
            if (this.form.valid) {
                this.submitted = false;
                this.zipCodeFilled = true;
                let loading = yield this.utility.presentLoading();
                this.apiService
                    .listOfAnalaysts({
                    zipCode: this.form.value.zip,
                })
                    .then((res) => {
                    loading.dismiss();
                    if (!res.status) {
                        //   this.utility.presentAlert(
                        //     "Alert",
                        //     "",
                        //     [],
                        //     this.utility.translateText('MSG').currentlyUnavailable, [
                        //       {
                        //         text: this.utility.translateText("MODALS").BUTTONS.OK,
                        //         handler: async() => {
                        //           //this.utility.getPlanDetail(this.envr.plans.bodyAnlaysis);
                        //         }
                        //       }]
                        //   );
                    }
                    if (res.analysts_list != undefined && res.analysts_list != null) {
                        this.analystList = res === null || res === void 0 ? void 0 : res.analysts_list;
                        this.analystList.forEach(element => {
                            console.log(element);
                            if (element.name != '' && element.name.indexOf('-') > -1 && element.name.indexOf(',') > -1) {
                                console.log(element);
                                let nameSplited = element.name.split('-');
                                let completeName = nameSplited[0];
                                let splitfromSpace = nameSplited[1].split(" ");
                                let zipCode = splitfromSpace[1];
                                //nameSplited[1].substring( 0, nameSplited[1].indexOf(","));
                                console.log(splitfromSpace);
                                let city = splitfromSpace[2];
                                //nameSplited[1].substring( 0, nameSplited[1].indexOf(","));[1].split(' ')[1];
                                let distance = splitfromSpace[3] + splitfromSpace[4];
                                //nameSplited[1].substring( 0, nameSplited[1].indexOf(","));[1].split(' ')[2]+splitfromComma[1].split(' ')[3];
                                element['updatedName'] = " " + completeName + "  " + distance;
                                element['updatedNames'] = zipCode + " " + city;
                            }
                        });
                        console.log(this.analystList);
                    }
                })
                    .catch((err) => {
                    loading.dismiss();
                });
            }
        });
    }
    changeAnlayst(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log(event);
        });
    }
    confirmSubmission() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.lightAnlysis, this.analyst);
            if (this.analyst == '' && !this.lightAnlysis) {
                this.errorMsg = this.utility.translateText("BOOKING_ANALYSIS").errorMsg;
            }
            else {
                this.errorMsg = "";
                let data = {
                    zipCode: this.form.value.zip,
                };
                // if(this.lightAnlysis){
                data["select_analysis_light"] = this.lightAnlysis;
                // }
                // else{
                data["analyst"] = this.analyst;
                // }
                let result = yield this.apiService.bookAnlaysis(data);
                if (result === null || result === void 0 ? void 0 : result.status) {
                    // this.utility.getCart("");
                    let detail = yield this.utility.getStorage('Prod');
                    if (detail != undefined && detail != null) {
                        detail = JSON.parse(detail);
                        detail["disableCart"] = true;
                        detail["added_to_cart"] = 'yes';
                        this.utility.setStorage('Prod', JSON.stringify(detail));
                    }
                    this.utility.closeModal();
                    this.utility.goNext('tabs/basket');
                }
            }
        });
    }
};
CheckZipPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_environment_service__WEBPACK_IMPORTED_MODULE_5__.EnvironmentService }
];
CheckZipPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: "app-check-zip",
        template: _check_zip_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_check_zip_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CheckZipPage);



/***/ }),

/***/ 15625:
/*!****************************************************************!*\
  !*** ./src/app/pages/check-zip/check-zip.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".register-img-layer {\n  display: block;\n  margin-top: 30px;\n}\n.register-img-layer img {\n  width: 180px;\n  margin: auto;\n  display: block;\n}\n.register-header {\n  text-align: center;\n}\n.register-header h1 {\n  font-size: 16px;\n  color: #666666;\n  font-style: normal;\n  font-weight: normal;\n  text-align: left;\n  margin: 0px 20px;\n}\n.dont-know {\n  color: #6d6d6d;\n  font-size: 15px;\n  font-weight: 700;\n  text-decoration: none;\n  text-align: center;\n  width: 100%;\n  display: block;\n  margin-top: 20px;\n  margin-bottom: 15px;\n}\n.dont-know span {\n  color: #a9d5c1;\n  font-weight: 400;\n}\nform {\n  padding-top: 0px;\n}\nform .form-group {\n  position: relative;\n  --inner-padding-end: 5px !important;\n}\nform ion-input,\nform ion-select {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  border: 1px solid #d6d6d6 !important;\n  height: 40px;\n  border-radius: 5px !important;\n  padding: 12px 11px !important;\n  --padding-bottom: 0px;\n  --padding-top: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0 !important;\n}\nform ion-item.item-has-value ion-label,\nform ion-item.item-has-focus ion-label {\n  top: 15px !important;\n  background: white;\n  z-index: 999;\n  text-align: left;\n  font-size: 16px !important;\n  width: 100px !important;\n  padding-left: 10px;\n}\nform .btn {\n  height: 40px;\n  font-size: 12px;\n  font-weight: 600;\n  --border-radius: 4px;\n  margin: 20px;\n}\n.btn2 {\n  display: inline-block;\n  width: auto;\n  min-width: 48%;\n  color: #fff;\n  text-align: center;\n  background-color: #14253B;\n  border: 1px solid #14253B;\n  padding: 10px 15px;\n  font-size: 0.8125em;\n  line-height: 1.5;\n  border-radius: 2px;\n  transition: all 0.4s ease;\n  white-space: normal;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05) !important;\n  outline: none !important;\n  text-transform: uppercase;\n  margin: 1px;\n}\n.analyst-select {\n  margin-top: 10px;\n  border: solid 1px #ccc;\n  padding: 5px 10px;\n  width: 100%;\n}\n.main-div {\n  padding-top: 30px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrLXppcC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9pcHJvJTIwMi9zcmMvYXBwL3BhZ2VzL2NoZWNrLXppcC9jaGVjay16aXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDQ0Y7QURBRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0VKO0FERUE7RUFFRSxrQkFBQTtBQ0FGO0FERUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQUo7QURHQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQUY7QURDRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0NKO0FERUE7RUFFRSxnQkFBQTtBQ0FGO0FEQ0U7RUFDRSxrQkFBQTtFQUNBLG1DQUFBO0FDQ0o7QURDRTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FDQ0o7QURFRTs7RUFFRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDQUo7QURHRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNESjtBRFFBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxREFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDTEY7QURPQTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNKRjtBRFFBO0VBQ0UsNEJBQUE7QUNMRiIsImZpbGUiOiJjaGVjay16aXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyLWltZy1sYXllciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBpbWcge1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLnJlZ2lzdGVyLWhlYWRlciB7XG4gIC8vIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW46IDBweCAyMHB4O1xuICB9XG59XG4uZG9udC1rbm93IHtcbiAgY29sb3I6ICM2ZDZkNmQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgc3BhbiB7XG4gICAgY29sb3I6ICNhOWQ1YzE7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxufVxuZm9ybSB7XG4gIC8vIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIC5mb3JtLWdyb3VwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLWlucHV0LFxuICBpb24tc2VsZWN0IHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDZkNiAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxMnB4IDExcHggIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24taXRlbS5pdGVtLWhhcy12YWx1ZSBpb24tbGFiZWwsXG4gIGlvbi1pdGVtLml0ZW0taGFzLWZvY3VzIGlvbi1sYWJlbCB7XG4gICAgdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgei1pbmRleDogOTk5O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG5cbiAgLmJ0biB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxufVxuXG5cblxuXG4uYnRuMiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogNDglO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQyNTNCO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTQyNTNCO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMC44MTI1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2IoMCAwIDAgLyA1JSkgIWltcG9ydGFudDtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46MXB4XG59XG4uYW5hbHlzdC1zZWxlY3Qge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gXG59XG5cbi5tYWluLWRpdntcbiAgcGFkZGluZy10b3A6MzBweCAhaW1wb3J0YW50O1xufSIsIi5yZWdpc3Rlci1pbWctbGF5ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5yZWdpc3Rlci1pbWctbGF5ZXIgaW1nIHtcbiAgd2lkdGg6IDE4MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucmVnaXN0ZXItaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJlZ2lzdGVyLWhlYWRlciBoMSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwcHggMjBweDtcbn1cblxuLmRvbnQta25vdyB7XG4gIGNvbG9yOiAjNmQ2ZDZkO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uZG9udC1rbm93IHNwYW4ge1xuICBjb2xvcjogI2E5ZDVjMTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuZm9ybSB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5mb3JtIC5mb3JtLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiA1cHggIWltcG9ydGFudDtcbn1cbmZvcm0gaW9uLWlucHV0LFxuZm9ybSBpb24tc2VsZWN0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2ZDYgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTJweCAxMXB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwICFpbXBvcnRhbnQ7XG59XG5mb3JtIGlvbi1pdGVtLml0ZW0taGFzLXZhbHVlIGlvbi1sYWJlbCxcbmZvcm0gaW9uLWl0ZW0uaXRlbS1oYXMtZm9jdXMgaW9uLWxhYmVsIHtcbiAgdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuZm9ybSAuYnRuIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5idG4yIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiA0OCU7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDI1M0I7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNDI1M0I7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgZm9udC1zaXplOiAwLjgxMjVlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSkgIWltcG9ydGFudDtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDFweDtcbn1cblxuLmFuYWx5c3Qtc2VsZWN0IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWFpbi1kaXYge1xuICBwYWRkaW5nLXRvcDogMzBweCAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 55946:
/*!****************************************************************!*\
  !*** ./src/app/pages/check-zip/check-zip.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n\n<ion-header>\n  <ion-toolbar>\n    <ion-title *ngIf=\"!zipCodeFilled\">{{'PAGES.CHECKZIP' | translate}}</ion-title>\n    <ion-title *ngIf=\"zipCodeFilled\">{{'PAGES.ANLAYST' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"main-div\">\n\n  <div *ngIf=\"!zipCodeFilled\">\n  <div class=\"register-header\">\n    <h1>{{'BOOKING_ANALYSIS.CHECK_ZIP' | translate}} </h1>\n  </div>\n  <form  [formGroup]=\"form\">\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding\"> \n      <ion-input type=\"number\" id=\"zip\" formControlName=\"zip\" placeholder=\"Zip\" autocapitalize=\"off\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let validation of validationMessage.zip\">\n      <div *ngIf=\"submitted && formControls['zip'].errors\" class=\"validation-message\">\n        <div class=\"error-message text-red \" *ngIf=\"formControls['zip'].errors[validation.type]\">\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n    <ion-button (click)=\"submit()\" class=\"btn\" color=\"secondary\" expand=\"block\">\n      {{'BOOKING_ANALYSIS.NEXT' | translate}}</ion-button>\n  </form>\n</div>\n<div *ngIf=\"zipCodeFilled\">\n  <div class=\"register-header\">\n    <h1>{{'BOOKING_ANALYSIS.SELECT_ANLAYSIST' | translate}} </h1>\n  </div>\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding\"> \n      <ion-select\n          [(ngModel)]=\"analyst\"\n          (ionChange)=\"changeAnlayst($event)\"\n          class=\"analyst-select\"\n          interface=\"action-sheet\"\n        >\n        <ion-select-option value=\"\" >   {{'BOOKING_ANALYSIS.please_select' | translate}}</ion-select-option>\n        <ion-select-option  *ngFor=\"let list of analystList  \" [value]=\"list.id\"   >\n          {{list.updatedName}}  <br> {{list.updatedNames}}\n          \n        \n         \n        </ion-select-option>\n        \n    </ion-select>\n\n    </ion-item>\n    <ion-item lines=\"none\" class=\"form-group ion-no-padding\"> \n      <ion-checkbox slot=\"start\" [(ngModel)]=\"lightAnlysis\" (ionChange)=\"changeAnlayst($event)\" mode=\"md\"\n      ></ion-checkbox>\n    <ion-label class=\"ion-text-wrap check-label\">{{'BOOKING_ANALYSIS.LIGHT_ANALYSIS' | translate}}</ion-label>\n    </ion-item>\n\n   \n        <div class=\"error-message text-red \" *ngIf=\"errorMsg != ''\">\n          {{ errorMsg}}\n        </div>\n     \n    <div class=\"text-center next\" *ngIf=\"role == 'Prospect'\">\n      <a class=\"btn btn2\" (click)=\"confirmSubmission()\">\n        {{'BOOKING_ANALYSIS.CONFIRM' | translate}}\n      </a>\n      <a class=\"btn btn2\"  (click)=\"zipCodeFilled = !zipCodeFilled\" >\n        {{'BOOKING_ANALYSIS.BACK' | translate}}\n      </a>\n    </div>\n    <div class=\"text-center next\" *ngIf=\"role != 'Prospect'\" style=\"text-align: center;\">\n      <a class=\"btn btn2\" (click)=\"confirmSubmission()\" >\n        {{'BOOKING_ANALYSIS.CONFIRM' | translate}}\n      </a>\n      \n    </div>\n    \n  <!-- </form> -->\n</div>\n</div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_check-zip_check-zip_page_ts.js.map