"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_question_question_module_ts"],{

/***/ 14870:
/*!***********************************************************!*\
  !*** ./src/app/pages/question/question-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionPageRoutingModule": () => (/* binding */ QuestionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _question_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question.page */ 52521);




const routes = [
    {
        path: '',
        component: _question_page__WEBPACK_IMPORTED_MODULE_0__.QuestionPage
    }
];
let QuestionPageRoutingModule = class QuestionPageRoutingModule {
};
QuestionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QuestionPageRoutingModule);



/***/ }),

/***/ 36749:
/*!***************************************************!*\
  !*** ./src/app/pages/question/question.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "QuestionPageModule": () => (/* binding */ QuestionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _question_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question.page */ 52521);
/* harmony import */ var _question_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-routing.module */ 14870);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30610);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _components_share_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/share-component-module */ 99663);










function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

let QuestionPageModule = class QuestionPageModule {
};
QuestionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _components_share_component_module__WEBPACK_IMPORTED_MODULE_3__.ShareComponentModule,
            _question_routing_module__WEBPACK_IMPORTED_MODULE_1__.QuestionPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient],
                },
            }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule
        ],
        declarations: [_question_page__WEBPACK_IMPORTED_MODULE_0__.QuestionPage]
    })
], QuestionPageModule);



/***/ }),

/***/ 52521:
/*!*************************************************!*\
  !*** ./src/app/pages/question/question.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionPage": () => (/* binding */ QuestionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _question_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question.page.html?ngResource */ 97798);
/* harmony import */ var _question_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question.page.scss?ngResource */ 22155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var src_app_components_user_modal_user_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/user-modal/user-modal.page */ 43253);











let QuestionPage = class QuestionPage {
    constructor(router, menuCtrl, _translate, utility, apiService, navController, fb) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this._translate = _translate;
        this.utility = utility;
        this.apiService = apiService;
        this.navController = navController;
        this.fb = fb;
        this.questions = [];
        this.questionIndex = 0;
        this.checkboxAnswer = [];
        this.lastnameMessage = '';
        this.firstnameMessage = '';
        this.questionAnsIndex = [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
        ];
        this.formData = {
            questionId: null,
            answer: null,
        };
        this.errorMessage = "";
        this.submitStatus = false;
        this.username = {};
        this.getQuestions = () => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let result = yield this.apiService.getQuestions();
            this.questions = result.questions ? result.questions : null;
            this.questions.map((item) => {
                item['answer'] = '';
            });
            // console.log(result);
        });
        this.nextQuestion = (selectedQuest, direction) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.errorMessage = "";
            // if(this.questions[this.questionIndex-1]['answer']  != ''){
            //   this.formData.answer  = this.questions[this.questionIndex]['answer'] ;
            // }
            if (this.questionIndex >= 51 && direction == 'next') {
                this.checkDigitalSign(direction);
                return false;
            }
            if (direction == 'next') {
                if (selectedQuest.mandatory == 'y') {
                    if (this.questionIndex == 0) {
                        this.gender = this.formData.answer;
                    }
                    if (!this.formData.answer || this.formData.answer.length <= 0) {
                        this.errorMessage = this.utility.translateText('QUESTIONNAIRE').noAns;
                        return false;
                    }
                }
                else {
                    //this.questionIndex += 1;
                    this.errorMessage = '';
                }
                if (this.questions[this.questionIndex].possibleAnswers === 'float' || this.questions[this.questionIndex].possibleAnswers === 'int' || this.questions[this.questionIndex].possibleAnswers === 'text') {
                    if (this.formData.answer == null) {
                        this.formData.answer = '';
                    }
                }
                else {
                }
                if ((this.formData.answer == null || this.formData.answer == '') && this.questions[this.questionIndex].possibleAnswers === 'multiple') {
                    this.formData.answer = [];
                }
                this.questions[this.questionIndex]['answer'] = this.formData.answer;
                console.log(this.questions);
                let question = this.questions[this.questionIndex];
                if (question) {
                    this.formData.questionId = question.questionId
                        ? question.questionId
                        : null;
                }
                let params = Object.assign({}, this.formData);
                this.submitAnswer(params);
            }
            else {
                if (this.questionComplete) {
                    this.questionIndex -= 1;
                    this.questionComplete = false;
                    this.questions[this.questionIndex]['answer'] = this.formData.answer;
                    return false;
                }
                this.questions[this.questionIndex]['answer'] = this.formData.answer;
                if (this.gender == 'Male' && this.questionIndex == 40) {
                    this.questionIndex -= 5;
                }
                else {
                    this.questionIndex -= 1;
                }
                if (this.questions[this.questionIndex].possibleAnswers === 'multiple') {
                    this.checkboxAnswer = this.questions[this.questionIndex]['answer'];
                }
                this.formData.answer = this.questions[this.questionIndex]['answer'];
            }
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.getQuestions();
            this.username['firstname'] = JSON.parse(yield this.utility.getStorage('AUTH_USER')).firstName;
            this.username['lastname'] = JSON.parse(yield this.utility.getStorage('AUTH_USER')).lastName;
        });
    }
    selectCheckbox(id, item, index) {
        if (index != this.checkboxIndex) {
            this.checkboxAnswer = [];
        }
        // this.checkboxAnswer = this.formData.answer
        const checkbox = document.getElementById('checkbox' + id);
        if (checkbox === null || checkbox === void 0 ? void 0 : checkbox.checked) {
            if (this.checkboxAnswer.indexOf(item.value) == -1) {
                this.checkboxAnswer.push(item.value);
            }
        }
        else {
            let index = this.checkboxAnswer.indexOf(item.value);
            this.checkboxAnswer.splice(index, 1);
        }
        console.log(this.checkboxAnswer);
        this.formData.answer = this.checkboxAnswer;
        this.checkboxIndex = index;
    }
    resetForm() {
        this.formData = {
            questionId: null,
            answer: null,
        };
        // this.checkboxAnswer = [];
        this.errorMessage = "";
        this.submitStatus = false;
    }
    submitAnswer(params) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.questionIndex < this.questions.length - 1) {
                this.questionComplete = false;
                let result = yield this.apiService.submitAnswer(params);
                if (result.status == 1) {
                    this.resetForm();
                    if (this.gender == 'Male' && this.questionIndex == 35) {
                        this.questionIndex += 5;
                    }
                    else {
                        this.questionIndex += 1;
                    }
                    this.formData.answer = this.questions[this.questionIndex]['answer'];
                    if (this.questionIndex == this.questions.length - 1) {
                        this.submitStatus = true;
                    }
                }
            }
            else {
                this.questionComplete = true;
                console.log(this.questionIndex);
                this.questionIndex += 1;
            }
        });
    }
    checkDigitalSign(direction) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.lastnameMessage = '';
            this.firstnameMessage = '';
            let error = 0;
            if (direction == 'next') {
                if (this.lastname == undefined || this.lastname == '') {
                    this.firstnameMessage = this.utility.translateText('QUESTIONNAIRE').completeSign;
                    error = 1;
                }
                if (this.firstname == undefined || this.firstname == '') {
                    this.firstnameMessage = this.utility.translateText('QUESTIONNAIRE').completeSign;
                    error = 1;
                }
                if (this.firstname.toLowerCase() != this.username.firstname.toLowerCase()) {
                    this.firstnameMessage = this.utility.translateText('QUESTIONNAIRE').firstNameError;
                    error = 1;
                }
                if (this.lastname.toLowerCase() != this.username.lastname.toLowerCase()) {
                    this.lastnameMessage = this.utility.translateText('QUESTIONNAIRE').lastNameError;
                    error = 1;
                }
                if (!error) {
                    // this.questionIndex -= 1;
                    let params = Object.assign({}, this.formData);
                    let result = yield this.apiService.submitAnswer(params);
                    if (result.status == 1) {
                        this.utility.presentToast(this.utility.translateText('QUESTIONNAIRE').ansSubmitted, "top");
                        this.utility.quetionaireComplete = true;
                        this.utility.openPopup(src_app_components_user_modal_user_modal_page__WEBPACK_IMPORTED_MODULE_4__.UserModalPage, 'question-complete', 'modal-question', true);
                    }
                }
            }
        });
    }
};
QuestionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder }
];
QuestionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-question",
        template: _question_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_question_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuestionPage);



/***/ }),

/***/ 22155:
/*!**************************************************************!*\
  !*** ./src/app/pages/question/question.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "h1 {\n  margin-top: 30px;\n  font-size: 26px;\n  text-align: center;\n  margin-bottom: 30px;\n  color: #666666;\n}\n\n.register-img {\n  display: block;\n  background: url('register.jpeg');\n  width: 325px;\n  height: 170px;\n  border-radius: 15px;\n  margin: 30px auto 20px auto;\n  background-position: center;\n}\n\n.content-wrap {\n  padding: 20px;\n}\n\n.content-wrap p {\n  font-size: 18px;\n  text-align: left;\n  color: #000000;\n  margin: 0px;\n}\n\n.mt30 {\n  margin-top: 30px !important;\n}\n\n.mb30 {\n  margin-bottom: 30px !important;\n}\n\nion-content {\n  padding: 15px;\n  --padding: 15px;\n}\n\n.form-group.active-q {\n  background: #e4784c !important;\n}\n\nform {\n  padding: 15px;\n}\n\nform .form-group {\n  display: block;\n  margin-bottom: 10px;\n  background: #e5a68c;\n}\n\nform .question-text {\n  color: #666;\n  font-size: 0.8125em;\n  font-weight: 600;\n  margin-bottom: 1rem !important;\n}\n\nform .custom-control {\n  position: relative;\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5rem;\n}\n\nform .custom-radio {\n  padding-left: 0;\n}\n\nform .custom-radio .custom-control-label {\n  color: #fff;\n  width: 100%;\n  border-radius: 2px;\n  padding: 10px 15px;\n  padding-right: 35px;\n  padding-left: 40px;\n  font-size: 0.8125em;\n  line-height: 1.5;\n  display: block;\n}\n\nform .custom-radio .custom-control-label::before {\n  right: 8px;\n  left: auto;\n  background: transparent;\n  top: 50%;\n  width: 22px;\n  height: 22px;\n  transform: translateY(-50%);\n}\n\nform .custom-radio .custom-control-label::after {\n  right: 8px;\n  left: auto;\n  top: 50%;\n  width: 22px;\n  height: 22px;\n  transform: translateY(-50%);\n  position: absolute;\n  content: \"\";\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%;\n}\n\nform .custom-control-input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n\n.custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url('right.svg');\n}\n\n.custom-control-input:checked ~ .custom-control-label::before {\n  background: transparent;\n}\n\ninput.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  height: 40px;\n  color: #000;\n  font-size: 0.75em;\n  border-color: #d6d6d6;\n  outline: none !important;\n  box-shadow: none !important;\n}\n\n.btn {\n  display: inline-block;\n  width: auto;\n  min-width: 140px;\n  color: #fff;\n  text-align: center;\n  padding: 10px 15px;\n  font-size: 0.8125em;\n  line-height: 1.5;\n  border-radius: 2px;\n  transition: all 0.4s ease;\n  white-space: normal;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05) !important;\n  outline: none !important;\n  text-transform: uppercase;\n  margin: 1px;\n}\n\n.btn1 {\n  background-color: #ff662a;\n  border: 1px solid #ff662a;\n}\n\n.btn2 {\n  background-color: #14253B;\n  border: 1px solid #14253B;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.form1 .custom-checkbox {\n  padding-left: 0;\n}\n\n.form1 .custom-checkbox .custom-control-label {\n  display: block;\n  color: #fff;\n  width: 100%;\n  border-radius: 2px;\n  padding: 10px 15px;\n  padding-right: 35px;\n  padding-left: 40px;\n  font-size: 0.7em;\n  line-height: 1.5;\n}\n\n.form1 .custom-checkbox .custom-control-input:checked ~ .custom-control-label {\n  background: #ff662a;\n}\n\n.form1 .custom-checkbox .custom-control-label::before {\n  right: 8px;\n  left: auto;\n  background: transparent;\n  top: 50%;\n  width: 22px;\n  height: 22px;\n  transform: translateY(-50%);\n}\n\n.num {\n  background: #fff;\n  color: #000;\n  border: 1px solid #fff;\n  display: block;\n  position: absolute;\n  top: 9px;\n  left: 10px;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  line-height: 20px;\n  font-weight: 500;\n  border-radius: 2px;\n}\n\n.form1 .custom-checkbox .custom-control-label::after {\n  right: 8px;\n  left: auto;\n  top: 50%;\n  width: 22px;\n  height: 22px;\n  transform: translateY(-50%);\n}\n\n.form1 .custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background: transparent;\n}\n\n.form1 .custom-checkbox .custom-control-label::before {\n  width: 18px;\n  height: 18px;\n  border-radius: 0;\n  background: #c4c4c4;\n  box-shadow: none !important;\n  outline: none !important;\n}\n\n.form1 .custom-checkbox .custom-control-label::after {\n  width: 18px;\n  height: 18px;\n}\n\n.form1 .custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background: #ff662a;\n}\n\n.question ion-input {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  border: 1px solid #d6d6d6 !important;\n  height: 35px;\n  width: 90%;\n  max-width: 100%;\n  border-radius: 5px !important;\n  padding: 0px 6px !important;\n  --padding-bottom: 0px;\n  --padding-top: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFHQTtFQUNFLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSw4QkFBQTtBQUFGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFERjs7QUFHQTtFQUNFLDhCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBQ0U7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUNFO0VBQ0UsZUFBQTtBQUNKOztBQUFJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRU47O0FBRE07RUFDRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUFHUjs7QUFETTtFQUNFLFVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esd0JBQUE7QUFHUjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNFLGtDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx1QkFBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3RUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QUFHRjs7QUFEQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EscURBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUlGOztBQUZBO0VBRUUseUJBQUE7RUFDQSx5QkFBQTtBQUlGOztBQUZBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQUtGOztBQUZBO0VBRUUsa0JBQUE7QUFJRjs7QUFEQTtFQUNFLGVBQUE7QUFJRjs7QUFEQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUlGOztBQURBO0VBQ0UsbUJBQUE7QUFJRjs7QUFEQTtFQUNFLFVBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQUlGOztBQUZBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFLRjs7QUFIQTtFQUNFLFVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUFNRjs7QUFIQTtFQUlFLHVCQUFBO0FBR0Y7O0FBREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0FBSUY7O0FBREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUlGOztBQURBO0VBSUUsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQUVKIiwiZmlsZSI6InF1ZXN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZm9udC1zaXplOiAyNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGNvbG9yOiAjNjY2NjY2O1xufVxuXG4ucmVnaXN0ZXItaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL3JlZ2lzdGVyLmpwZWcpO1xuICB3aWR0aDogMzI1cHg7XG4gIGhlaWdodDogMTcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbjogMzBweCBhdXRvIDIwcHggYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uY29udGVudC13cmFwIHtcbiAgcGFkZGluZzogMjBweDtcblxuICBwIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxufVxuXG4ubXQzMCB7XG4gIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcbn1cblxuLm1iMzAge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG4gXG5cbmlvbi1jb250ZW50IHtcbiAgcGFkZGluZzogMTVweDtcbiAgLS1wYWRkaW5nOiAxNXB4O1xufVxuLmZvcm0tZ3JvdXAuYWN0aXZlLXEge1xuICBiYWNrZ3JvdW5kOiAjZTQ3ODRjICFpbXBvcnRhbnQ7XG59XG5cbmZvcm0ge1xuICBwYWRkaW5nOiAxNXB4O1xuICAuZm9ybS1ncm91cCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjI5IDE2NiAxNDApXG4gIH1cbiAgLnF1ZXN0aW9uLXRleHQge1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIGZvbnQtc2l6ZTogMC44MTI1ZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmN1c3RvbS1jb250cm9sIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWluLWhlaWdodDogMS41cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICB9XG4gIC5jdXN0b20tcmFkaW8ge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAuY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgICBmb250LXNpemU6IDAuODEyNWVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgcmlnaHQ6IDhweDtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICB9XG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIHJpZ2h0OiA4cHg7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1MCUgNTAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuY3VzdG9tLWNvbnRyb2wtaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4uY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9yaWdodC5zdmcpO1xufVxuLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuaW5wdXQuZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIGhlaWdodDogNDBweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xuICBib3JkZXItY29sb3I6ICNkNmQ2ZDY7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogMTQwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgZm9udC1zaXplOiAwLjgxMjVlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYigwIDAgMCAvIDUlKSAhaW1wb3J0YW50O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjoxcHhcbn1cbi5idG4xIHtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NjJhO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmY2NjJhO1xufVxuLmJ0bjJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDI1M0I7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNDI1M0I7XG4gIFxufVxuLnRleHQtY2VudGVyIHtcbiAgLy8gbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiBcbi5mb3JtMSAuY3VzdG9tLWNoZWNrYm94IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4uZm9ybTEgLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBmb250LXNpemU6IC43ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5mb3JtMSAuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsIHtcbiAgYmFja2dyb3VuZDogI2ZmNjYyYTtcbn1cblxuLmZvcm0xIC5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICByaWdodDogOHB4O1xuICBsZWZ0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5udW0ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA5cHg7XG4gIGxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5mb3JtMSAuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIge1xuICByaWdodDogOHB4O1xuICBsZWZ0OiBhdXRvO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4uZm9ybTFcbiAgLmN1c3RvbS1jaGVja2JveFxuICAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZFxuICB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uZm9ybTEgLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQ6ICNjNGM0YzQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZm9ybTEgLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmFmdGVyIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbn1cblxuLmZvcm0xXG4gIC5jdXN0b20tY2hlY2tib3hcbiAgLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWRcbiAgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICNmZjY2MmE7XG59XG4ucXVlc3Rpb24gaW9uLWlucHV0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2ZDYgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMHB4IDZweCAhaW1wb3J0YW50O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDAgIWltcG9ydGFudDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 97798:
/*!**************************************************************!*\
  !*** ./src/app/pages/question/question.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<!-- <app-header  [headerTitle]=\"'PAGES.CART' | translate\"  [headerBack]=true  *ngIf=\"!questionComplete\"></app-header> -->\n<ion-header>\n  \n  <ion-toolbar class=\"ion-toolbar\">\n    <ion-buttons slot=\"start\">\n      <img (click)=\"utility.goNext('/questionare')\" class=\"back-icon\" src=\"assets/img/back.png\">\n    </ion-buttons>\n    <ion-title>{{'PAGES.QUESTION' | translate}}</ion-title>\n   \n  \n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form class=\"form form1\" *ngIf=\"questions.length > 0 &&  !questionComplete\" >\n    <h6 class=\"question-text\">{{questions[questionIndex].question}} <span *ngIf=\"questions[questionIndex].mandatory == 'y'\"> *</span></h6>\n    <img src=\"{{questions[questionIndex].show_image}}\"  style=\"padding: 29px;\" *ngIf=\"questions[questionIndex].show_image != ''\" />\n\n    <div *ngIf=\"questions[questionIndex].possibleAnswers === 'one'\">\n\n      <div\n        class=\"form-group\"\n        [ngClass]=\"{'active-q': formData.answer == item.value}\"\n        *ngFor=\"let item of questions[questionIndex].answers | keyvalue;let i=index;\"\n      >\n\n        <div class=\"custom-control custom-radio\">\n          <input\n            type=\"radio\"\n            [(ngModel)]=\"formData.answer\"\n            class=\"custom-control-input\"\n            name=\"radio\"\n            id=\"radio{{i}}\"\n            value=\"{{item.value}}\"\n          />\n          <label class=\"custom-control-label\" for=\"radio{{i}}\">\n            <span class=\"num\">{{(i + 1)}}</span> {{item.value}}\n          </label>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"questions[questionIndex].possibleAnswers === 'multiple'\">\n      <div\n        class=\"form-group\"\n        *ngFor=\"let item of questions[questionIndex].answers | keyvalue;let i=index;\"\n      >\n        <div class=\"custom-control custom-radio custom-checkbox\">\n          <input\n            type=\"checkbox\"\n            class=\"custom-control-input\"\n            name=\"checkbox\"\n            [value]=\"item.selected\"\n            id=\"checkbox{{i}}\"\n            [attr.checked]=\"questions[questionIndex].answer.indexOf(item.value) > -1 ? true : null\"\n            (click)=\"selectCheckbox(i, item,questions[questionIndex])\"\n          />\n          <label class=\"custom-control-label\" for=\"checkbox{{i}}\">\n            <span class=\"num\">{{(i + 1)}}</span> {{item.value}}\n          </label>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"questions[questionIndex].possibleAnswers === 'text' \">\n      <input\n        type=\"text\"\n        [(ngModel)]=\"formData.answer\"\n        name=\"text\"\n        placeholder=\" Please specify here\"\n        class=\"form-control\"\n      />\n    </div>\n    <div *ngIf=\"questions[questionIndex].possibleAnswers === 'float' || questions[questionIndex].possibleAnswers === 'int'\">\n      <input\n        type=\"text\"\n        [(ngModel)]=\"formData.answer\"\n        name=\"number\"\n        placeholder=\" Please specify here\"\n        class=\"form-control\"\n      />\n    </div>\n    <div *ngIf=\"errorMessage\" style=\"color: red\">{{errorMessage}}</div>\n   \n    \n  </form>\n\n\n  <ion-list *ngIf=\"questionComplete\">\n    <ion-item lines=\"none\">\n      <ion-label class=\"ion-text-wrap\">\n       \n        <ion-text>\n          <p class=\"question-content\">{{'QUESTIONNAIRE.digitalSign' | translate}}</p>\n        </ion-text>\n      </ion-label>\n    </ion-item>\n <p style=\"padding-left:20px\"><strong>{{'QUESTIONNAIRE.acceptedBy' | translate}}:</strong></p>\n\n    <div style=\"display:flex;padding-left:20px\" class=\"question\">\n\n  <div >\n    <ion-input type=\"text\" class=\"form-group\" placeholder=\"Firstname\" [(ngModel)]=\"firstname\"  id=\"firstname\" autocapitalize=\"off\">\n    </ion-input>\n    <span style=\"   padding: 10px;\">{{username?.firstname}}</span>\n  </div>\n  <div>\n    <ion-input type=\"text\" placeholder=\"Family Name\"  [(ngModel)]=\"lastname\"  id=\"lastname\" autocapitalize=\"off\">  </ion-input>\n    <span style=\"   padding: 10px;\">{{username?.lastname}}</span>\n  </div>\n </div>\n  \n \n    <div *ngIf=\"firstnameMessage\" style=\"color: red;padding: 0px 10px;\">{{firstnameMessage}}</div>\n\n    <div *ngIf=\"lastnameMessage\" style=\"color: red;padding: 0px 10px;\">{{lastnameMessage}}</div>\n    </ion-list>\n    <div class=\"text-center\">\n      <a class=\"btn btn2\" (click)=\"nextQuestion(questions[questionIndex],'back')\" *ngIf=\"questionIndex > 0 \">\n        {{'QUESTIONNAIRE.btn.back' | translate}}\n      </a>\n      <a class=\"btn btn1\" (click)=\"nextQuestion(questions[questionIndex],'next')\">\n        {{submitStatus ? 'QUESTIONNAIRE.btn.complete' | translate : 'QUESTIONNAIRE..btn.next' | translate}}\n      </a>\n    </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_question_question_module_ts.js.map