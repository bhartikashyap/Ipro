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
                if (item.possibleAnswers == 'multiple') {
                    item['answer'] = [];
                    item['answer'].push(item.selected_answer);
                }
                else {
                    item['answer'] = item.selected_answer;
                }
            });
            console.log(this.checkboxAnswer);
            this.formData.answer = this.questions[0]['answer'];
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
            if (this.questions.length != this.questionIndex + 1) {
                if (this.questions[this.questionIndex + 1].possibleAnswers == 'multiple') {
                    if (this.questions[this.questionIndex + 1]['selected_answer'] != '') {
                        this.checkboxAnswer = [];
                        this.checkboxAnswer.push(this.questions[this.questionIndex + 1]['selected_answer']);
                        this.checkboxIndex = this.questions[this.questionIndex + 1].questionId;
                    }
                }
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
                if ((this.gender == 'Männlich' || this.gender == 'Male') && this.questionIndex == 40) {
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
        console.log(this.checkboxAnswer);
        console.log(this.checkboxAnswer.length);
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
                    if ((this.gender == 'Männlich' || this.gender == 'Male') && this.questionIndex == 35) {
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

module.exports = "h1 {\n  margin-top: 30px;\n  font-size: 26px;\n  text-align: center;\n  margin-bottom: 30px;\n  color: #666666;\n}\n\n.register-img {\n  display: block;\n  background: url('register.jpeg');\n  width: 325px;\n  height: 170px;\n  border-radius: 15px;\n  margin: 30px auto 20px auto;\n  background-position: center;\n}\n\n.content-wrap {\n  padding: 20px;\n}\n\n.content-wrap p {\n  font-size: 18px;\n  text-align: left;\n  color: #000000;\n  margin: 0px;\n}\n\n.mt30 {\n  margin-top: 30px !important;\n}\n\n.mb30 {\n  margin-bottom: 30px !important;\n}\n\nion-content {\n  padding: 15px;\n  --padding: 15px;\n}\n\n.form-group.active-q {\n  background: #e4784c !important;\n}\n\nform {\n  padding: 15px;\n}\n\nform .form-group {\n  display: block;\n  margin-bottom: 10px;\n  background: #e5a68c;\n}\n\nform .question-text {\n  color: #666;\n  font-size: 0.8125em;\n  font-weight: 600;\n  margin-bottom: 1rem !important;\n}\n\nform .custom-control {\n  position: relative;\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5rem;\n}\n\nform .custom-radio {\n  padding-left: 0;\n}\n\nform .custom-radio .custom-control-label {\n  color: #fff;\n  width: 100%;\n  border-radius: 2px;\n  padding: 10px 15px;\n  padding-right: 35px;\n  padding-left: 40px;\n  font-size: 0.8125em;\n  line-height: 1.5;\n  display: block;\n}\n\nform .custom-radio .custom-control-label::before {\n  right: 8px;\n  left: auto;\n  background: transparent;\n  top: 50%;\n  width: 22px;\n  height: 22px;\n  transform: translateY(-50%);\n}\n\nform .custom-radio .custom-control-label::after {\n  right: 8px;\n  left: auto;\n  top: 50%;\n  width: 22px;\n  height: 22px;\n  transform: translateY(-50%);\n  position: absolute;\n  content: \"\";\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%;\n}\n\nform .custom-control-input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n\n.custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url('right.svg');\n}\n\n.custom-control-input:checked ~ .custom-control-label::before {\n  background: transparent;\n}\n\ninput.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  height: 40px;\n  color: #000;\n  font-size: 0.75em;\n  border-color: #d6d6d6;\n  outline: none !important;\n  box-shadow: none !important;\n}\n\n.btn {\n  display: inline-block;\n  width: auto;\n  min-width: 140px;\n  color: #fff;\n  text-align: center;\n  padding: 10px 15px;\n  font-size: 0.8125em;\n  line-height: 1.5;\n  border-radius: 2px;\n  transition: all 0.4s ease;\n  white-space: normal;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05) !important;\n  outline: none !important;\n  text-transform: uppercase;\n  margin: 1px;\n}\n\n.btn1 {\n  background-color: #ff662a;\n  border: 1px solid #ff662a;\n}\n\n.btn2 {\n  background-color: #14253B;\n  border: 1px solid #14253B;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.form1 .custom-checkbox {\n  padding-left: 0;\n}\n\n.form1 .custom-checkbox .custom-control-label {\n  display: block;\n  color: #fff;\n  width: 100%;\n  border-radius: 2px;\n  padding: 10px 15px;\n  padding-right: 35px;\n  padding-left: 40px;\n  font-size: 0.7em;\n  line-height: 1.5;\n}\n\n.form1 .custom-checkbox .custom-control-input:checked ~ .custom-control-label {\n  background: #ff662a;\n}\n\n.form1 .custom-checkbox .custom-control-label::before {\n  right: 8px;\n  left: auto;\n  background: transparent;\n  top: 50%;\n  width: 22px;\n  height: 22px;\n  transform: translateY(-50%);\n}\n\n.num {\n  background: #fff;\n  color: #000;\n  border: 1px solid #fff;\n  display: block;\n  position: absolute;\n  top: 9px;\n  left: 10px;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  line-height: 20px;\n  font-weight: 500;\n  border-radius: 2px;\n}\n\n.form1 .custom-checkbox .custom-control-label::after {\n  right: 8px;\n  left: auto;\n  top: 50%;\n  width: 22px;\n  height: 22px;\n  transform: translateY(-50%);\n}\n\n.form1 .custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background: transparent;\n}\n\n.form1 .custom-checkbox .custom-control-label::before {\n  width: 18px;\n  height: 18px;\n  border-radius: 0;\n  background: #c4c4c4;\n  box-shadow: none !important;\n  outline: none !important;\n}\n\n.form1 .custom-checkbox .custom-control-label::after {\n  width: 18px;\n  height: 18px;\n}\n\n.form1 .custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background: #ff662a;\n}\n\n.question ion-input {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  border: 1px solid #d6d6d6 !important;\n  height: 35px;\n  width: 90%;\n  max-width: 100%;\n  border-radius: 5px !important;\n  padding: 0px 6px !important;\n  --padding-bottom: 0px;\n  --padding-top: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2lwcm8lMjAyL3NyYy9hcHAvcGFnZXMvcXVlc3Rpb24vcXVlc3Rpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREdBO0VBQ0UsMkJBQUE7QUNBRjs7QURHQTtFQUNFLDhCQUFBO0FDQUY7O0FESUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ0RGOztBREdBO0VBQ0UsOEJBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7QUNBRjs7QURDRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0U7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FEQ0U7RUFDRSxlQUFBO0FDQ0o7O0FEQUk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNFTjs7QURETTtFQUNFLFVBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQ0dSOztBRERNO0VBQ0UsVUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSx3QkFBQTtBQ0dSOztBRENFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0Usa0NBQUE7QUNDRjs7QURDQTtFQUNFLHVCQUFBO0FDRUY7O0FEQUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdFQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtBQ0dGOztBRERBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxREFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDSUY7O0FERkE7RUFFRSx5QkFBQTtFQUNBLHlCQUFBO0FDSUY7O0FERkE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0FDS0Y7O0FERkE7RUFFRSxrQkFBQTtBQ0lGOztBRERBO0VBQ0UsZUFBQTtBQ0lGOztBRERBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSUY7O0FEREE7RUFDRSxtQkFBQTtBQ0lGOztBRERBO0VBQ0UsVUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FDSUY7O0FERkE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0tGOztBREhBO0VBQ0UsVUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQ01GOztBREhBO0VBSUUsdUJBQUE7QUNHRjs7QUREQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7QUNJRjs7QUREQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDSUY7O0FEREE7RUFJRSxtQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FDRUoiLCJmaWxlIjoicXVlc3Rpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LXNpemU6IDI2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgY29sb3I6ICM2NjY2NjY7XG59XG5cbi5yZWdpc3Rlci1pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvcmVnaXN0ZXIuanBlZyk7XG4gIHdpZHRoOiAzMjVweDtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMjBweCBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5jb250ZW50LXdyYXAge1xuICBwYWRkaW5nOiAyMHB4O1xuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG59XG5cbi5tdDMwIHtcbiAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xufVxuXG4ubWIzMCB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcbn1cbiBcblxuaW9uLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNXB4O1xuICAtLXBhZGRpbmc6IDE1cHg7XG59XG4uZm9ybS1ncm91cC5hY3RpdmUtcSB7XG4gIGJhY2tncm91bmQ6ICNlNDc4NGMgIWltcG9ydGFudDtcbn1cblxuZm9ybSB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIC5mb3JtLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYigyMjkgMTY2IDE0MClcbiAgfVxuICAucXVlc3Rpb24tdGV4dCB7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgZm9udC1zaXplOiAwLjgxMjVlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAuY3VzdG9tLWNvbnRyb2wge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtaW4taGVpZ2h0OiAxLjVyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gIH1cbiAgLmN1c3RvbS1yYWRpbyB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIC5jdXN0b20tY29udHJvbC1sYWJlbCB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMC44MTI1ZW07XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICByaWdodDogOHB4O1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgIH1cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgcmlnaHQ6IDhweDtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJSA1MCU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5jdXN0b20tY29udHJvbC1pbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL3JpZ2h0LnN2Zyk7XG59XG4uY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5pbnB1dC5mb3JtLWNvbnRyb2wge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG4gIGJvcmRlci1jb2xvcjogI2Q2ZDZkNjtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4uYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiAxNDBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBmb250LXNpemU6IDAuODEyNWVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiKDAgMCAwIC8gNSUpICFpbXBvcnRhbnQ7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOjFweFxufVxuLmJ0bjEge1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjY2MmE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjY2MmE7XG59XG4uYnRuMntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MjUzQjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzE0MjUzQjtcbiAgXG59XG4udGV4dC1jZW50ZXIge1xuICAvLyBtYXJnaW4tdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIFxuLmZvcm0xIC5jdXN0b20tY2hlY2tib3gge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5mb3JtMSAuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogLjdlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmZvcm0xIC5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xuICBiYWNrZ3JvdW5kOiAjZmY2NjJhO1xufVxuXG4uZm9ybTEgLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIHJpZ2h0OiA4cHg7XG4gIGxlZnQ6IGF1dG87XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLm51bSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMDAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDlweDtcbiAgbGVmdDogMTBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLmZvcm0xIC5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XG4gIHJpZ2h0OiA4cHg7XG4gIGxlZnQ6IGF1dG87XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5mb3JtMVxuICAuY3VzdG9tLWNoZWNrYm94XG4gIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkXG4gIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5mb3JtMSAuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZDogI2M0YzRjNDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtMSAuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuXG4uZm9ybTFcbiAgLmN1c3RvbS1jaGVja2JveFxuICAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZFxuICB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2ZmNjYyYTtcbn1cbi5xdWVzdGlvbiBpb24taW5wdXQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDZkNiAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwcHggNnB4ICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMCAhaW1wb3J0YW50O1xufVxuIiwiaDEge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LXNpemU6IDI2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgY29sb3I6ICM2NjY2NjY7XG59XG5cbi5yZWdpc3Rlci1pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvcmVnaXN0ZXIuanBlZyk7XG4gIHdpZHRoOiAzMjVweDtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMjBweCBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5jb250ZW50LXdyYXAge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmNvbnRlbnQtd3JhcCBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5tdDMwIHtcbiAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xufVxuXG4ubWIzMCB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNXB4O1xuICAtLXBhZGRpbmc6IDE1cHg7XG59XG5cbi5mb3JtLWdyb3VwLmFjdGl2ZS1xIHtcbiAgYmFja2dyb3VuZDogI2U0Nzg0YyAhaW1wb3J0YW50O1xufVxuXG5mb3JtIHtcbiAgcGFkZGluZzogMTVweDtcbn1cbmZvcm0gLmZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZDogI2U1YTY4Yztcbn1cbmZvcm0gLnF1ZXN0aW9uLXRleHQge1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAwLjgxMjVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xufVxuZm9ybSAuY3VzdG9tLWNvbnRyb2wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4taGVpZ2h0OiAxLjVyZW07XG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xufVxuZm9ybSAuY3VzdG9tLXJhZGlvIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuZm9ybSAuY3VzdG9tLXJhZGlvIC5jdXN0b20tY29udHJvbC1sYWJlbCB7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgZm9udC1zaXplOiAwLjgxMjVlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5mb3JtIC5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICByaWdodDogOHB4O1xuICBsZWZ0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbmZvcm0gLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmFmdGVyIHtcbiAgcmlnaHQ6IDhweDtcbiAgbGVmdDogYXV0bztcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDUwJSA1MCU7XG59XG5mb3JtIC5jdXN0b20tY29udHJvbC1pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL3JpZ2h0LnN2Zyk7XG59XG5cbi5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW5wdXQuZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIGhlaWdodDogNDBweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xuICBib3JkZXItY29sb3I6ICNkNmQ2ZDY7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiAxNDBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBmb250LXNpemU6IDAuODEyNWVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KSAhaW1wb3J0YW50O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMXB4O1xufVxuXG4uYnRuMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjY2MmE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjY2MmE7XG59XG5cbi5idG4yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MjUzQjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzE0MjUzQjtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9ybTEgLmN1c3RvbS1jaGVja2JveCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLmZvcm0xIC5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmZvcm0xIC5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xuICBiYWNrZ3JvdW5kOiAjZmY2NjJhO1xufVxuXG4uZm9ybTEgLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIHJpZ2h0OiA4cHg7XG4gIGxlZnQ6IGF1dG87XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4ubnVtIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOXB4O1xuICBsZWZ0OiAxMHB4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5mb3JtMSAuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIge1xuICByaWdodDogOHB4O1xuICBsZWZ0OiBhdXRvO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4uZm9ybTEgLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtMSAuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZDogI2M0YzRjNDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtMSAuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuXG4uZm9ybTEgLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2ZmNjYyYTtcbn1cblxuLnF1ZXN0aW9uIGlvbi1pbnB1dCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkNmQ2ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4IDZweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMCAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 97798:
/*!**************************************************************!*\
  !*** ./src/app/pages/question/question.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<!-- <app-header  [headerTitle]=\"'PAGES.CART' | translate\"  [headerBack]=true  *ngIf=\"!questionComplete\"></app-header> -->\n<ion-header>\n  \n  <ion-toolbar class=\"ion-toolbar\">\n    <ion-buttons slot=\"start\">\n      <img (click)=\"utility.goNext('/questionare')\" class=\"back-icon\" src=\"assets/img/back.png\">\n    </ion-buttons>\n    <ion-title>{{'PAGES.QUESTION' | translate}}</ion-title>\n   \n  \n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form class=\"form form1\" *ngIf=\"questions.length > 0 &&  !questionComplete\" >\n  \n    <h6 class=\"question-text\" *ngIf=\"utility.deviceLang == 'en'\">  <strong> {{questions[questionIndex].questionId}}. </strong>{{questions[questionIndex].question}} \n      <span *ngIf=\"questions[questionIndex].mandatory == 'y'\"> *</span>\n    </h6>\n    <h6 class=\"question-text\" *ngIf=\"utility.deviceLang == 'de'\"> <strong>{{questions[questionIndex].questionId}}.  </strong> {{questions[questionIndex].questionDE}} \n      <span *ngIf=\"questions[questionIndex].mandatory == 'y'\"> *</span>\n    </h6>\n    \n    <img src=\"{{questions[questionIndex].show_image}}\"  style=\"padding: 29px;\" *ngIf=\"questions[questionIndex].show_image != ''\" />\n <div *ngIf=\"utility.deviceLang == 'de'\">\n  <div *ngIf=\"questions[questionIndex].possibleAnswers === 'one'\">\n\n    <div\n      class=\"form-group\"\n      [ngClass]=\"{'active-q': formData.answer == item.value}\"\n      *ngFor=\"let item of questions[questionIndex].answersDE | keyvalue;let i=index;\"\n    >\n\n      <div class=\"custom-control custom-radio\">\n        <input\n          type=\"radio\"\n          [(ngModel)]=\"formData.answer\"\n          class=\"custom-control-input\"\n          name=\"radio\"\n          id=\"radio{{i}}\"\n          value=\"{{item.value}}\"\n        />\n        <label class=\"custom-control-label\" for=\"radio{{i}}\">\n          <span class=\"num\">{{(i + 1)}}</span> {{item.value}}\n        </label>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"questions[questionIndex].possibleAnswers === 'multiple'\">\n    <div\n      class=\"form-group\"\n      *ngFor=\"let item of questions[questionIndex].answersDE | keyvalue;let i=index;\"\n    >\n      <div class=\"custom-control custom-radio custom-checkbox\">\n        <input\n          type=\"checkbox\"\n          class=\"custom-control-input\"\n          name=\"checkbox\"\n          [value]=\"item.selected\"\n          id=\"checkbox{{i}}\"\n          [attr.checked]=\"questions[questionIndex].answer.indexOf(item.value) > -1 ? true : null\"\n          (click)=\"selectCheckbox(i, item,questions[questionIndex].questionId)\"\n        />\n        <label class=\"custom-control-label\" for=\"checkbox{{i}}\">\n          <span class=\"num\">{{(i + 1)}}</span> {{item.value}}\n        </label>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"questions[questionIndex].possibleAnswers === 'text' \">\n    <input\n      type=\"text\"\n      [(ngModel)]=\"formData.answer\"\n      name=\"text\"\n      placeholder=\" {{'QUESTIONNAIRE.ansPlaceholder' | translate}}\"\n      class=\"form-control\"\n    />\n  </div>\n  <div *ngIf=\"questions[questionIndex].possibleAnswers === 'float' || questions[questionIndex].possibleAnswers === 'int'\">\n    <input\n      type=\"text\"\n      [(ngModel)]=\"formData.answer\"\n      name=\"number\"\n      placeholder=\"{{'QUESTIONNAIRE.ansPlaceholder' | translate}} \"\n      class=\"form-control\"\n    />\n  </div>\n\n </div>\n <div *ngIf=\"utility.deviceLang == 'en'\">\n  \n\n  <div *ngIf=\"questions[questionIndex].possibleAnswers === 'one'\">\n\n    <div\n      class=\"form-group\"\n      [ngClass]=\"{'active-q': formData.answer == item.value}\"\n      *ngFor=\"let item of questions[questionIndex].answers | keyvalue;let i=index;\"\n    >\n\n      <div class=\"custom-control custom-radio\">\n        <input\n          type=\"radio\"\n          [(ngModel)]=\"formData.answer\"\n          class=\"custom-control-input\"\n          name=\"radio\"\n          id=\"radio{{i}}\"\n          value=\"{{item.value}}\"\n        />\n        <label class=\"custom-control-label\" for=\"radio{{i}}\">\n          <span class=\"num\">{{(i + 1)}}</span> {{item.value}}\n        </label>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"questions[questionIndex].possibleAnswers === 'multiple'\">\n    <div\n      class=\"form-group\"\n      *ngFor=\"let item of questions[questionIndex].answers | keyvalue;let i=index;\"\n    >\n      <div class=\"custom-control custom-radio custom-checkbox\">\n        <input\n          type=\"checkbox\"\n          class=\"custom-control-input\"\n          name=\"checkbox\"\n          [value]=\"item.selected\"\n          id=\"checkbox{{i}}\"\n          [attr.checked]=\"questions[questionIndex].answer.indexOf(item.value) > -1 ? true : null\"\n          (click)=\"selectCheckbox(i, item,questions[questionIndex].questionId)\"\n        />\n        <label class=\"custom-control-label\" for=\"checkbox{{i}}\">\n          <span class=\"num\">{{(i + 1)}}</span> {{item.value}}\n        </label>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"questions[questionIndex].possibleAnswers === 'text' \">\n    <input\n      type=\"text\"\n      [(ngModel)]=\"formData.answer\"\n      name=\"text\"\n      placeholder=\" {{'QUESTIONNAIRE.ansPlaceholder' | translate}}\"\n      class=\"form-control\"\n    />\n  </div>\n  <div *ngIf=\"questions[questionIndex].possibleAnswers === 'float' || questions[questionIndex].possibleAnswers === 'int'\">\n    <input\n      type=\"text\"\n      [(ngModel)]=\"formData.answer\"\n      name=\"number\"\n      placeholder=\"{{'QUESTIONNAIRE.ansPlaceholder' | translate}} \"\n      class=\"form-control\"\n    />\n  </div>\n</div>\n   \n    <div *ngIf=\"errorMessage\" style=\"color: red\">{{errorMessage}}</div>\n   \n    \n  </form>\n\n\n  <ion-list *ngIf=\"questionComplete\">\n    <ion-item lines=\"none\">\n      <ion-label class=\"ion-text-wrap\">\n       \n        <ion-text>\n          <p class=\"question-content\">{{'QUESTIONNAIRE.digitalSign' | translate}}</p>\n        </ion-text>\n      </ion-label>\n    </ion-item>\n <p style=\"padding-left:20px\"><strong>{{'QUESTIONNAIRE.acceptedBy' | translate}}:</strong></p>\n\n    <div style=\"display:flex;padding-left:20px\" class=\"question\">\n\n  <div >\n    <ion-input type=\"text\" class=\"form-group\" placeholder=\"Firstname\" [(ngModel)]=\"firstname\"  id=\"firstname\" autocapitalize=\"off\">\n    </ion-input>\n    <span style=\"   padding: 10px;\">{{username?.firstname}}</span>\n  </div>\n  <div>\n    <ion-input type=\"text\" placeholder=\"Family Name\"  [(ngModel)]=\"lastname\"  id=\"lastname\" autocapitalize=\"off\">  </ion-input>\n    <span style=\"   padding: 10px;\">{{username?.lastname}}</span>\n  </div>\n </div>\n  \n \n    <div *ngIf=\"firstnameMessage\" style=\"color: red;padding: 0px 10px;\">{{firstnameMessage}}</div>\n\n    <div *ngIf=\"lastnameMessage\" style=\"color: red;padding: 0px 10px;\">{{lastnameMessage}}</div>\n    </ion-list>\n    <div class=\"text-center\">\n      <a class=\"btn btn2\" (click)=\"nextQuestion(questions[questionIndex],'back')\" *ngIf=\"questionIndex > 0 \">\n        {{'QUESTIONNAIRE.btn.back' | translate}}\n      </a>\n      <a class=\"btn btn1\" (click)=\"nextQuestion(questions[questionIndex],'next')\" *ngIf=\"submitStatus\">\n        {{ 'QUESTIONNAIRE.btn.complete' | translate }}\n      </a>\n      <a class=\"btn btn1\" (click)=\"nextQuestion(questions[questionIndex],'next')\" *ngIf=\"!submitStatus\">\n        {{ 'QUESTIONNAIRE.btn.next' | translate}}\n      </a>\n    </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_question_question_module_ts.js.map