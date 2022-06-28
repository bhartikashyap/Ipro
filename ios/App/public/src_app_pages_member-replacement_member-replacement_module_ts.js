"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_member-replacement_member-replacement_module_ts"],{

/***/ 4616:
/*!**************************************************************!*\
  !*** ./src/app/pages/member-replacement/lines/lines.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinesPage": () => (/* binding */ LinesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _lines_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lines.page.html?ngResource */ 69533);
/* harmony import */ var _lines_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lines.page.scss?ngResource */ 3851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ 67241);





let LinesPage = class LinesPage {
    constructor(util) {
        this.util = util;
        this.openPopUp = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.lowestLevel = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.levelUp = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
    }
    openPopUps(userId, leg) {
        console.log(userId, leg);
        let data = {
            userId: userId,
            leg: leg
        }; //this causing some issue
        this.util.setStorage('memberId', userId);
        this.util.setStorage('level', leg);
        this.openPopUp.emit(data);
        //  data = {
        //     userId:"",
        //     leg:""
        //   }
    }
    levelUps(userId, leg) {
        let data = {
            userId: userId,
            leg: leg
        };
        this.levelUp.emit(data);
    }
    lowestLevels(userId) {
        this.lowestLevel.emit(userId);
    }
    replaceRank(rank) {
        if (rank != '' && rank != undefined && rank != null) {
            if (rank.indexOf('MANAGER') > -1) {
                rank = 'M' + rank.split('MANAGER')[1];
            }
            else if (rank.indexOf('LEADER') > -1) {
                rank = 'L' + rank.split('LEADER')[1];
                // rank.replace('LEADER','L');
            }
            // console.log(rank)
            return rank;
        }
        else
            return "--";
    }
    isEmptyObject(obj) {
        // console.log(obj)
        return Object.keys(obj).length === 0;
    }
};
LinesPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService }
];
LinesPage.propDecorators = {
    placementTree: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    leg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    userId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    levelUpId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    openPopUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    lowestLevel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    levelUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
LinesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-lines',
        template: _lines_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_lines_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LinesPage);



/***/ }),

/***/ 74619:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/member-replacement/member-replacement-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberReplacementPageRoutingModule": () => (/* binding */ MemberReplacementPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _member_replacement_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./member-replacement.page */ 35134);




const routes = [
    {
        path: '',
        component: _member_replacement_page__WEBPACK_IMPORTED_MODULE_0__.MemberReplacementPage
    }
];
let MemberReplacementPageRoutingModule = class MemberReplacementPageRoutingModule {
};
MemberReplacementPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MemberReplacementPageRoutingModule);



/***/ }),

/***/ 8443:
/*!***********************************************************************!*\
  !*** ./src/app/pages/member-replacement/member-replacement.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "MemberReplacementPageModule": () => (/* binding */ MemberReplacementPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _member_replacement_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./member-replacement-routing.module */ 74619);
/* harmony import */ var _member_replacement_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./member-replacement.page */ 35134);
/* harmony import */ var _lines_lines_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lines/lines.page */ 4616);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30610);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _components_share_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/share-component-module */ 99663);












function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let MemberReplacementPageModule = class MemberReplacementPageModule {
};
MemberReplacementPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _member_replacement_routing_module__WEBPACK_IMPORTED_MODULE_0__.MemberReplacementPageRoutingModule,
            _components_share_component_module__WEBPACK_IMPORTED_MODULE_3__.ShareComponentModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient],
                },
            }),
        ],
        declarations: [_member_replacement_page__WEBPACK_IMPORTED_MODULE_1__.MemberReplacementPage, _lines_lines_page__WEBPACK_IMPORTED_MODULE_2__.LinesPage]
    })
], MemberReplacementPageModule);



/***/ }),

/***/ 35134:
/*!*********************************************************************!*\
  !*** ./src/app/pages/member-replacement/member-replacement.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberReplacementPage": () => (/* binding */ MemberReplacementPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _member_replacement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./member-replacement.page.html?ngResource */ 3788);
/* harmony import */ var _member_replacement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./member-replacement.page.scss?ngResource */ 93795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/screen-orientation/ngx */ 98828);
/* harmony import */ var src_app_components_user_modal_user_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/user-modal/user-modal.page */ 43253);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);









let MemberReplacementPage = class MemberReplacementPage {
    constructor(screenOrientation, apiSer, utilSer, navCtrl) {
        this.screenOrientation = screenOrientation;
        this.apiSer = apiSer;
        this.utilSer = utilSer;
        this.navCtrl = navCtrl;
        this.searchItem = '';
        this.popUpData = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    }
    ngOnInit() {
        // get current
        console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'
        // set to landscape
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.loggedInuser = JSON.parse(yield this.utilSer.getStorage('AUTH_USER')).userId;
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
            // allow user rotate
            // this.screenOrientation.unlock();
            // detect orientation changes
            this.screenOrientation.onChange().subscribe(() => {
                console.log("Orientation Changed");
            });
            this.getPlacementTree("tree", '', 0);
        });
    }
    back() {
        this.navCtrl.back();
    }
    getPlacementTree(type, event, userId) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.searchType = '';
            this.loggedInuserInsearch = false;
            let loggedInuserInsearch = false;
            this.placementTree = {};
            let loading = yield this.utilSer.presentLoading();
            let response;
            if (type == 'tree') {
                this.searchType = type;
                this.loggedInuserInsearch = false;
                loggedInuserInsearch = false;
                response = yield this.apiSer.placementTree();
            }
            else if (type == 'search') {
                let searchItem = {
                    searchFor: userId
                };
                response = yield this.apiSer.searchMember(searchItem);
                if (loggedInuserInsearch) {
                    this.loggedInuserInsearch = true;
                    this.getPlacementTree('tree', '', 0);
                }
                if (((_a = response.data) === null || _a === void 0 ? void 0 : _a.levelUpUser) == this.loggedInuser) {
                    loggedInuserInsearch = true;
                    //this.getPlacementTree('tree', '', 0); 
                }
            }
            loading.dismiss();
            //if (response.status == 1) {
            this.placementTree = response;
            // }
            // else{
            //   this.placementTree = {}
            // }
            console.log(this.placementTree);
        });
    }
    openPopUp(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // this.subscription.unsubscribe();
            let memberId = data.userId;
            let leg = data.leg;
            memberId = yield this.utilSer.getStorage('memberId');
            leg = yield this.utilSer.getStorage('level');
            var counter = 0;
            this.utilSer.openPopup(src_app_components_user_modal_user_modal_page__WEBPACK_IMPORTED_MODULE_3__.UserModalPage, "member-place", 'modal-member-place', true);
            this.subscription = this.utilSer.currentMessage.subscribe(message => {
                console.log(message);
                console.log(this.subscription);
                if (message == 'pop closed') {
                    this.utilSer.changeMessage("");
                    // if(counter == 1){
                    this.placeMember(memberId, leg);
                    // }
                    this.utilSer.removeStorage('memberId');
                    this.utilSer.removeStorage('level');
                    this.utilSer.closeModal();
                }
                if (this.subscription != undefined) {
                    this.subscription.unsubscribe();
                }
            }, () => {
                console.log("error");
            }, () => {
                console.log("complete");
            });
        });
    }
    searchPopup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.utilSer.openPopup(src_app_components_user_modal_user_modal_page__WEBPACK_IMPORTED_MODULE_3__.UserModalPage, "search", 'reconfirm', true);
            this.subscription = this.utilSer.currentMessage.subscribe(message => {
                console.log(message);
                if (message.indexOf('=') > 0) {
                    let searchItem = message.split('=')[1];
                    this.getPlacementTree('search', '', searchItem);
                    this.utilSer.changeMessage("");
                    this.subscription.unsubscribe();
                }
            });
        });
    }
    goTohome() {
        this.utilSer.goNext('/tabs/dashboard/defaultDash');
    }
    placeMember(memberId, leg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let loading = yield this.utilSer.presentLoading();
            let placeMem = {
                memberId: memberId,
                memberIdToBePlaced: this.utilSer.memberPlacedUuserId,
                leg: leg
            };
            let response = yield this.apiSer.placeMember(placeMem);
            loading.dismiss();
            if (response.status == 1) {
                this.utilSer.presentToast("Member placed successfully.", "top");
                this.getPlacementTree('tree', '', memberId);
                // if(this.searchItem != ''){
                //   this.getPlacementTree('search','');
                // }
                // else{
                //   this.getPlacementTree('tree','');
                // }
                //this.placementTree = response.data
            }
            else {
                this.utilSer.presentToast(response.msg, "top");
            }
        });
    }
    lowestLevel(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.searchType = '';
            if (id != undefined && id != '') {
                let loading = yield this.utilSer.presentLoading();
                let lowest = {
                    memberId: id,
                };
                let response = yield this.apiSer.getLowLevel(lowest);
                loading.dismiss();
                if (response.status == 1) {
                    this.placementTree = response;
                    /// this.utilSer.presentToast("Member placed successfully.","top");
                }
                else {
                    this.utilSer.presentToast(response.msg, "top");
                }
            }
        });
    }
    beforelevelUp(userId, level) {
        let data = {
            userId: userId,
            leg: level
        };
        this.utilSer.setStorage('memberId', userId);
        this.utilSer.setStorage('level', level);
        if (userId == this.loggedInuser) {
            data = {
                userId: userId,
                leg: 'top'
            };
        }
        this.levelUp(data);
    }
    levelUp(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log(data);
            let id = data.userId;
            let level = data.leg;
            if (id != undefined && id != '') {
                if (level == 'top') {
                    this.getPlacementTree('tree', '', 0);
                }
                else {
                    this.getPlacementTree('search', '', id);
                }
            }
        });
    }
    isEmptyObject(obj) {
        return Object.keys(obj).length === 0;
    }
    cancelSearch() {
        this.searchItem = '';
        this.getPlacementTree('tree', '', 0);
    }
    addNewItem(value) {
        this.popUpData.emit(value);
    }
    ionViewDidLeave() {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
    ngOnDestroy() {
        ///this.subscription.unsubscribe();
        //this.utilSer.currentMessage.unsubscribe();
    }
};
MemberReplacementPage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__.ScreenOrientation },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__.UtilService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController }
];
MemberReplacementPage.propDecorators = {
    popUpData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output }]
};
MemberReplacementPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-member-replacement',
        template: _member_replacement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_member_replacement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MemberReplacementPage);



/***/ }),

/***/ 3851:
/*!***************************************************************************!*\
  !*** ./src/app/pages/member-replacement/lines/lines.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = ".grey {\n  background: #F1F1F1;\n  /* border-right: 1px solid #281f1f; */\n  padding: 1px;\n}\n.grey ion-col {\n  border: 1px solid #ccc;\n  font-weight: 700;\n  line-height: 10.4px;\n}\nion-col {\n  padding: 1px;\n  font-size: 9px;\n}\n.colm {\n  border-radius: 14px;\n  font-weight: 700;\n  line-height: 11.4px;\n  font-size: 9px;\n}\n.textCenter {\n  text-align: center;\n}\n.yellow-col {\n  background: #f9c30d;\n  color: #000;\n}\n.grey-col {\n  background-color: #969696;\n  color: #fff;\n}\n.blue-col {\n  background-color: #4D4D4D;\n  color: #F5F64F;\n}\np {\n  margin: 8px;\n  font-size: 8px;\n}\nion-card {\n  border-radius: 12px;\n}\nion-card-header {\n  padding: 8px;\n}\nion-card-title {\n  font-size: 10px;\n  font-weight: 700;\n}\n.sub-title {\n  background-color: #000;\n  color: #fff;\n  padding: 11px;\n  border-radius: 8px;\n  margin-top: 10px;\n  font-size: 12px;\n  text-align: center;\n}\n.title-border {\n  border-bottom: 1px solid #ccc;\n}\n.card-btn {\n  text-transform: uppercase;\n  margin: 10px;\n  font-size: 10px !important;\n}\n.btn {\n  text-transform: uppercase;\n  margin: 8px;\n  font-size: 8px !important;\n}\n.yellow {\n  background-color: #F9C30C;\n}\n.green {\n  background-color: #53AF25;\n}\n.blue {\n  background-color: #14253B;\n}\n.red {\n  background-color: #FF1601;\n}\n.diffColor ion-card-title {\n  color: #fff !important;\n}\n.line {\n  padding: 0px !important;\n}\n.line-free {\n  text-align: center;\n  font-size: 20px;\n  padding: 10px !important;\n}\n.line-free p {\n  text-decoration: underline;\n  color: #F96629;\n}\n.ion-cards {\n  display: flex;\n  align-items: center;\n}\n.searchbar {\n  display: flex;\n}\n.searchbar ion-icon {\n  padding: 10px;\n  position: fixed;\n  right: 2%;\n  top: 20%;\n}\nion-searchbar {\n  font-size: 10px;\n}\n.searchbar-input input {\n  padding: 2px 12px !important;\n  font-size: 10px !important;\n}\n.no-member {\n  padding: 12px;\n  text-align: center;\n}\n.ion-grid {\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNHLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUNJLHNCQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtBQUFSO0FBSUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQURKO0FBTUE7RUFDSSxtQkFBQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSFI7QUFNQTtFQUNJLGtCQUFBO0FBSEo7QUFNQztFQUNHLG1CQUFBO0VBQ0EsV0FBQTtBQUhKO0FBTUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUFISjtBQU1BO0VBRUkseUJBQUE7RUFDQSxjQUFBO0FBSko7QUFXQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FBUko7QUFVQTtFQUNJLG1CQUFBO0FBUEo7QUFVQTtFQUNJLFlBQUE7QUFQSjtBQVNBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBTko7QUFTQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBTko7QUFTQTtFQUNJLDZCQUFBO0FBTko7QUFRQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBTEo7QUFPQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUVBLHlCQUFBO0FBTEo7QUFRQTtFQUNJLHlCQUFBO0FBTEo7QUFPQTtFQUNJLHlCQUFBO0FBSko7QUFNQTtFQUNJLHlCQUFBO0FBSEo7QUFLQTtFQUNJLHlCQUFBO0FBRko7QUFLQTtFQUNJLHNCQUFBO0FBRko7QUFLQTtFQUVJLHVCQUFBO0FBSEo7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FBRko7QUFJQTtFQUNJLDBCQUFBO0VBQ0EsY0FBQTtBQURKO0FBSUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUlBO0VBQ0ksYUFBQTtBQURKO0FBR0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBQUo7QUFHQTtFQUNJLGVBQUE7QUFBSjtBQUVBO0VBQ0ksNEJBQUE7RUFDQSwwQkFBQTtBQUNKO0FBR0E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUVBO0VBQ0ksWUFBQTtBQUNKIiwiZmlsZSI6ImxpbmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAuZ3JleXtcbiAgICBiYWNrZ3JvdW5kOiAjRjFGMUYxO1xuICAgIC8qIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyODFmMWY7ICovXG4gICAgcGFkZGluZzogMXB4O1xuICAgIC8vIGZvbnQtc2l6ZTogMTBweDtcbiAgICBpb24tY29se1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OjEwLjRweDtcbiAgICBcbiAgICB9XG59XG5pb24tY29se1xuICAgIHBhZGRpbmc6IDFweCA7XG4gICAgZm9udC1zaXplOjlweDtcblxuICAgICAgICBcblxufVxuLmNvbG17XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6MTEuNHB4O1xuICAgICAgICBmb250LXNpemU6OXB4O1xuICAgXG59XG4udGV4dENlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cbiAueWVsbG93LWNvbHtcbiAgICBiYWNrZ3JvdW5kOiAjZjljMzBkO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIFxufVxuLmdyZXktY29se1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5Njk2OTY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgXG59XG4uYmx1ZS1jb2wge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMxNDI1M0I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRENEQ0RDtcbiAgICBjb2xvcjogI0Y1RjY0RjtcbiAgICAgICBcbiAgICAgICAgXG4gICBcbn1cblxuXG5we1xuICAgIG1hcmdpbjogOHB4O1xuICAgIGZvbnQtc2l6ZTogOHB4O1xufVxuaW9uLWNhcmR7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuaW9uLWNhcmQtaGVhZGVye1xuICAgIHBhZGRpbmc6IDhweDtcbn1cbmlvbi1jYXJkLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc3ViLXRpdGxle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTFweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0bGUtYm9yZGVye1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNjY2M7XG59XG4uY2FyZC1idG57XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW46MTBweDtcbiAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cbi5idG57XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW46OHB4O1xuICAgIC8vIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogOHB4ICFpbXBvcnRhbnQ7XG4gICAgLy8gd2lkdGg6IDcwcHg7XG59XG4ueWVsbG93e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUMzMEM7XG59XG4uZ3JlZW57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUzQUYyNTtcbn1cbi5ibHVle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDI1M0I7XG59XG4ucmVke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjE2MDE7XG4gICAgLy8gXG59XG4uZGlmZkNvbG9yIGlvbi1jYXJkLXRpdGxle1xuICAgIGNvbG9yOiNmZmYgIWltcG9ydGFudDtcbn1cblxuLmxpbmVcbntcbiAgICBwYWRkaW5nOjBweCAhaW1wb3J0YW50O1xufVxuLmxpbmUtZnJlZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbn1cbi5saW5lLWZyZWUgcHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjb2xvcjogI0Y5NjYyOTtcblxufVxuLmlvbi1jYXJkc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG59XG4uc2VhcmNoYmFye1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uc2VhcmNoYmFyIGlvbi1pY29uIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMiU7XG4gICAgdG9wOjIwJTtcbn1cblxuaW9uLXNlYXJjaGJhcntcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG4uc2VhcmNoYmFyLWlucHV0IGlucHV0e1xuICAgIHBhZGRpbmc6IDJweCAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG5cbn1cblxuLm5vLW1lbWJlcntcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pb24tZ3JpZHtcbiAgICBwYWRkaW5nOiAycHg7XG59Il19 */";

/***/ }),

/***/ 93795:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/member-replacement/member-replacement.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "ion-row {\n  background: #F1F1F1;\n  /* border-right: 1px solid #281f1f; */\n  padding: 1px;\n}\n\nion-col {\n  border: 1px solid #ccc;\n  padding: 0px;\n  font-size: 11px;\n}\n\np {\n  margin: 8px;\n  font-size: 11px;\n}\n\nion-card-title {\n  font-size: 17px;\n}\n\n.sub-title {\n  background-color: #000;\n  color: #fff;\n  padding: 11px;\n  border-radius: 8px;\n  margin-top: 10px;\n  font-size: 12px;\n  text-align: center;\n}\n\n.title-border {\n  border-bottom: 1px solid #ccc;\n}\n\n.card-btn {\n  text-transform: uppercase;\n  margin: 10px;\n  font-size: 10px !important;\n}\n\n.btn {\n  text-transform: uppercase;\n  margin: 8px;\n  font-size: 10px !important;\n}\n\n.yellow {\n  background-color: #F9C30C;\n}\n\n.green {\n  background-color: #53AF25;\n}\n\n.blue {\n  background-color: #14253B;\n}\n\n.red {\n  background-color: #FF1601;\n}\n\n.diffColor ion-card-title {\n  color: #fff !important;\n}\n\n.line {\n  padding: 0px !important;\n}\n\n.line-free {\n  text-align: center;\n  font-size: 20px;\n  padding: 10px !important;\n}\n\n.line-free p {\n  text-decoration: underline;\n}\n\n.ion-cards {\n  display: flex;\n  align-items: center;\n  padding: 10px;\n}\n\n.searchbar {\n  display: flex;\n}\n\n.searchbar ion-icon {\n  padding: 10px;\n  position: fixed;\n  right: 2%;\n  top: 20%;\n}\n\nion-searchbar {\n  font-size: 10px;\n}\n\n.searchbar-input input {\n  padding: 2px 12px !important;\n  font-size: 10px !important;\n}\n\n.no-member {\n  padding: 12px;\n  text-align: center;\n}\n\n.ion-grid {\n  padding: 2px;\n}\n\nion-content {\n  --padding-top:40px;\n  --padding-bottom:40px ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlci1yZXBsYWNlbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFBSjs7QUFJQTtFQUNJLGVBQUE7QUFESjs7QUFJQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSw2QkFBQTtBQURKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUFBSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUVBLDBCQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtBQUFKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0FBRUo7O0FBQUE7RUFDSSx5QkFBQTtBQUdKOztBQUFBO0VBQ0ksc0JBQUE7QUFHSjs7QUFBQTtFQUVJLHVCQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQUdKOztBQURBO0VBQ0ksMEJBQUE7QUFJSjs7QUFGQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFLSjs7QUFIQTtFQUNJLGFBQUE7QUFNSjs7QUFKQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFPSjs7QUFKQTtFQUNJLGVBQUE7QUFPSjs7QUFMQTtFQUNJLDRCQUFBO0VBQ0EsMEJBQUE7QUFRSjs7QUFKQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQU9KOztBQUxBO0VBQ0ksWUFBQTtBQVFKOztBQU5BO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtBQVNKIiwiZmlsZSI6Im1lbWJlci1yZXBsYWNlbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tcm93e1xuICAgIGJhY2tncm91bmQ6ICNGMUYxRjE7XG4gICAgLyogYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzI4MWYxZjsgKi9cbiAgICBwYWRkaW5nOiAxcHg7XG4gICAgLy8gZm9udC1zaXplOiAxMHB4O1xufVxuaW9uLWNvbHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICBcblxufVxucHtcbiAgICBtYXJnaW46IDhweDtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG5cblxuaW9uLWNhcmQtdGl0bGV7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uc3ViLXRpdGxle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTFweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0bGUtYm9yZGVye1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNjY2M7XG59XG4uY2FyZC1idG57XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW46MTBweDtcbiAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cbi5idG57XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW46OHB4O1xuICAgIC8vIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgIC8vIHdpZHRoOiA3MHB4O1xufVxuLnllbGxvd3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlDMzBDO1xufVxuLmdyZWVue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1M0FGMjU7XG59XG4uYmx1ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQyNTNCO1xufVxuLnJlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYxNjAxO1xuICAgIC8vIFxufVxuLmRpZmZDb2xvciBpb24tY2FyZC10aXRsZXtcbiAgICBjb2xvcjojZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5saW5lXG57XG4gICAgcGFkZGluZzowcHggIWltcG9ydGFudDtcbn1cbi5saW5lLWZyZWV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4ubGluZS1mcmVlIHB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uaW9uLWNhcmRze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOjEwcHhcbn1cbi5zZWFyY2hiYXJ7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5zZWFyY2hiYXIgaW9uLWljb24ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiAyJTtcbiAgICB0b3A6MjAlO1xufVxuXG5pb24tc2VhcmNoYmFye1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5zZWFyY2hiYXItaW5wdXQgaW5wdXR7XG4gICAgcGFkZGluZzogMnB4IDEycHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcblxufVxuXG4ubm8tbWVtYmVye1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmlvbi1ncmlke1xuICAgIHBhZGRpbmc6IDJweDtcbn1cbmlvbi1jb250ZW50e1xuICAgIC0tcGFkZGluZy10b3A6NDBweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOjQwcHhcbn0iXX0= */";

/***/ }),

/***/ 69533:
/*!***************************************************************************!*\
  !*** ./src/app/pages/member-replacement/lines/lines.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<ion-card *ngIf=\"placementTree\">\n  <ion-card-header style=\"display:flex;align-items: center;\" class=\"title-border diffColor\" [ngClass]=\"{'green': leg=='1', 'red': leg=='3','yellow': leg=='2'}\"  *ngIf=\"leg != ''\"> \n    <ion-card-title>{{'DASHBAORD.line.title' | translate}} {{leg}}  </ion-card-title>\n    <!-- <ion-card-title  style=\"color:#fff;text-decoration:underline;font-size:9px;    position: absolute;\n    right: 7%;\n    top: 0%;\"  *ngIf=\"!isEmptyObject(placementTree)\">  -->\n    <ion-button (click)=\"levelUps(placementTree?.userId,'one')\" class=\"btn\" color=\"secondary\" expand=\"\" *ngIf=\"!isEmptyObject(placementTree)\" style=\"height:20px; position: absolute;\n    right: 2%;\"> {{'DASHBAORD.member-placement.click-to-select' | translate}} \n    </ion-button>\n   <!-- </ion-card-title> -->\n  </ion-card-header>\n  <ion-card-content class=\"line-free\"  *ngIf=\"isEmptyObject(placementTree)\" >\n    <span>{{'DASHBAORD.member-placement.free' | translate}}</span>\n    <ion-button class=\"btn\" color=\"secondary\" expand=\"block\" (click)=\"openPopUps(userId,leg)\">{{'DASHBAORD.member-placement.click' | translate}} <br>{{'DASHBAORD.member-placement.to-place' | translate}}\n    </ion-button>\n    <!-- <p  </p> -->\n\n  </ion-card-content>\n  <ion-card-content class=\"line\"  *ngIf=\"!isEmptyObject(placementTree)\">\n    <ion-grid  *ngIf=\"leg == ''\">\n      <ion-row>\n        <ion-col  class=\"colm grey-col textCenter\" size=\"3\">\n          {{'DASHBAORD.member-placement.ID' | translate}}:{{placementTree?.userId != '' ? placementTree?.userId :'--' }} \n        </ion-col>\n        <ion-col  class=\"colm blue-col\" size=\"6\" style=\"padding-left:5px;\">\n          {{placementTree?.firstName != '' ? placementTree?.firstName :'--' }}  \n          {{placementTree?.lastName != '' ? placementTree?.lastName :'--' }}\n        </ion-col>\n       \n        <ion-col  class=\"colm blue-col textCenter\" style=\"color:#fff !important\" size=\"3\">\n          {{placementTree?.yourStatus != '' ? placementTree?.yourStatus :'--' }}\n        </ion-col>\n        </ion-row>\n    <ion-row class=\"grey\">\n      <ion-col>\n        {{replaceRank(placementTree?.rank)}}\n        <!-- {{placementTree?.rank != '' ? placementTree?.rank :'--' }} -->\n      </ion-col>\n      <ion-col>\n        {{'DASHBAORD.line.pv' | translate}}:{{placementTree?.PV != '' ? placementTree?.PV :'--' }}\n      </ion-col>\n      <ion-col>\n        {{'DASHBAORD.yourrank.dv' | translate}} :{{placementTree?.DV != '' ? placementTree?.DV :'--' }}\n      </ion-col>\n      <ion-col>\n        {{'DASHBAORD.line.gv' | translate}}:{{placementTree?.GV != '' ? placementTree?.GV :'--' }}\n      </ion-col>\n    </ion-row>\n    <ion-row  *ngIf=\"leg == ''\">\n      <ion-col  class=\"colm blue-col\" style=\"color:#fff !important;padding-left:5px;\" size=\"3\">\n        {{'DASHBAORD.member-placement.sponsor' | translate}}\n      </ion-col>\n     \n      <ion-col class=\"colm grey-col\" size=\"3\" style=\"padding-left:5px;\">\n        {{'DASHBAORD.member-placement.ID' | translate}}:{{placementTree?.sponsorId != '' ? placementTree?.sponsorId :'--' }}\n\n      </ion-col>\n     \n    </ion-row>\n  \n    <ion-row class=\"grey\">\n      <ion-col  size=\"8\">\n        {{placementTree?.sponsorName != '' ? placementTree?.sponsorName :'--' }}\n      </ion-col>\n      <ion-col >\n       {{placementTree?.sponsorRank != '' ? replaceRank(placementTree?.sponsorRank) : placementTree?.sponsorStatus }}\n\n      </ion-col>\n     \n    </ion-row>\n  \n\n  </ion-grid>\n    <ion-grid *ngIf=\"leg != ''\">\n        <ion-row>\n          <ion-col  class=\"colm grey-col textCenter\" size=\"3\">\n            {{'DASHBAORD.member-placement.ID' | translate}}:{{placementTree?.userId != '' ? placementTree?.userId :'--' }} \n          </ion-col>\n          <ion-col   class=\"colm blue-col\" size=\"6\" style=\"padding-left:5px;\">\n            {{placementTree?.firstName != '' ? placementTree?.firstName :'--' }}  \n            {{placementTree?.lastName != '' ? placementTree?.lastName :'--' }}\n          </ion-col>\n         \n          </ion-row>\n      <ion-row class=\"grey\">\n        <ion-col>\n          {{replaceRank(placementTree?.rank)}}\n        </ion-col>\n        <ion-col>\n          {{'DASHBAORD.line.pv' | translate}}:{{placementTree?.PV != '' ? placementTree?.PV :'--' }}\n        </ion-col>\n        <ion-col>\n          {{'DASHBAORD.yourrank.dv' | translate}}:{{placementTree?.DV != '' ? placementTree?.DV :'--' }}\n        </ion-col>\n        <ion-col>\n          {{'DASHBAORD.line.gv' | translate}}:{{placementTree?.GV != '' ? placementTree?.GV :'--' }}\n        </ion-col>\n      </ion-row>\n    \n      <ion-row  >\n        <ion-col  class=\"colm blue-col\" style=\"color:#fff !important;padding-left:5px;font-size: 7px!important;\" size=\"3\">\n           {{'DASHBAORD.member-placement.sponsor' | translate}}\n        </ion-col>\n       \n        <ion-col class=\"colm grey-col\" size=\"3\" style=\"padding-left:5px;font-size: 7px!important;\">\n          {{'DASHBAORD.member-placement.ID' | translate}}:{{placementTree?.sponsorId != '' ? placementTree?.sponsorId :'--' }}\n\n        </ion-col>\n       \n      </ion-row>\n      <ion-row class=\"grey\">\n        <ion-col  size=\"8\">\n          {{placementTree?.sponsorName != '' ? placementTree?.sponsorName :'--' }}\n        </ion-col>\n        <ion-col >\n         {{placementTree?.sponsorRank != '' ? replaceRank(placementTree?.sponsorRank) : placementTree?.sponsorStatus }}\n\n        </ion-col>\n       \n      </ion-row>\n \n    </ion-grid>\n   \n  </ion-card-content>\n  <div  *ngIf=\"leg != ''\" >\n   \n  \n    <ion-button class=\"btn\" color=\"secondary\" expand=\"block\" (click)=\"lowestLevels(placementTree?.userId)\" *ngIf=\"!isEmptyObject(placementTree)\"  >\n      {{'DASHBAORD.member-placement.lowest-level' | translate}} {{leg}}\n    </ion-button>\n  </div>\n</ion-card>\n";

/***/ }),

/***/ 3788:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/member-replacement/member-replacement.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n\n<ion-content>\n  <div></div>\n\n  <div *ngIf=\"!placementTree?.hasOwnProperty('data')\">\n    <!-- <div class=\"ion-cards\">\n      <ion-card>\n        <ion-card-content> -->\n         <p class=\"no-member\">{{placementTree?.msg}}</p> \n         <ion-button class=\"btn\" color=\"secondary\" expand=\"block\" (click)=\"cancelSearch()\" >\n         Clear Search\n         </ion-button>\n        <!-- </ion-card-content>\n      </ion-card>\n    </div> -->\n\n  </div>\n  <!-- line1 -->\n  <div *ngIf=\"placementTree?.hasOwnProperty('data')\">\n    <div class=\"ion-cards\">\n\n      <!-- <ion-card> -->\n        <!-- <ion-card-content> -->\n          <div style=\"display:flex;flex-direction: column;width: 25%;\">\n            <ion-button class=\"btn\" color=\"secondary\" expand=\"block\" (click)=\"goTohome()\" >\n              Back Home\n             </ion-button>\n            <ion-button class=\"btn\" color=\"secondary\" expand=\"block\" (click)=\"searchPopup()\" >\n             Search\n            </ion-button>\n          </div>\n       \n        <!-- </ion-card-content> -->\n      <!-- </ion-card> -->\n\n      <!-- <ion-card>\n        <ion-grid>\n          <p>{{placementTree?.data?.firstName != '' ? placementTree?.data?.firstName :'--' }} {{placementTree?.data?.lastName != '' ?\n            placementTree?.data?.lastName :'--' }} >> ID: {{placementTree?.data?.userId != '' ? placementTree?.data?.userId :'--' }} </p>\n\n          <ion-row>\n            <ion-col>\n              {{placementTree?.data?.yourStatus != '' ? placementTree?.data?.yourStatus :'--' }}\n            </ion-col>\n            <ion-col>\n              {{placementTree?.data?.rank != '' ? placementTree?.data?.rank :'--' }}\n            </ion-col>\n            <ion-col>\n              PV:{{placementTree?.data?.PV != '' ? placementTree?.data?.PV :'--' }}\n            </ion-col>\n            <ion-col>\n              DV:{{placementTree?.data?.DV != '' ? placementTree?.data?.DV :'--' }}\n            </ion-col>\n            <ion-col>\n              GV:{{placementTree?.data?.GV != '' ? placementTree?.data?.GV :'--' }}\n            </ion-col>\n          </ion-row>\n          <p>Sponosor:  </p>\n\n\n          <ion-row>\n            <ion-col>\n              {{placementTree?.data?.sponsorName != '' ? placementTree?.data?.sponsorName :'--' }}\n            </ion-col>\n            <ion-col>\n             ID:{{placementTree?.data?.sponsorId != '' ? placementTree?.data?.sponsorId :'--' }}\n            </ion-col>\n            <ion-col>\n              {{placementTree?.data?.sponsorStatus != '' ? placementTree?.data?.sponsorStatus :'--' }}\n            </ion-col>\n            <ion-col>\n              {{placementTree?.data?.sponsorRank != '' ? placementTree?.data?.sponsorRank :'--' }}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card> -->\n\n      <!-- <ion-card> -->\n\n        <app-lines  [placementTree]=\"placementTree?.data\" [userId]=\"placementTree?.data?.userId\" [leg] = \"''\" style=\"width:45%\"></app-lines>\n\n            \n        <!-- <ion-card-content>  || placementTree?.data?.levelUpUser == loggedInuser\" -->\n          <div style=\"display:flex;flex-direction: column;width: 30%;\">\n            <ion-button class=\"btn\" color=\"secondary\" expand=\"block\" (click)=\"beforelevelUp(placementTree?.data?.levelUpUser,'top')\"   [disabled]=\"loggedInuserInsearch || searchType =='tree' \">\n             Go To TOP Level UP\n           </ion-button>\n           <!-- || placementTree?.data?.levelUpUser == loggedInuser -->\n          <ion-button class=\"btn\" color=\"secondary\" expand=\"block\" (click)=\"beforelevelUp(placementTree?.data?.levelUpUser,'one')\" [disabled]=\"loggedInuserInsearch || searchType =='tree'\">\n           Go To ONE Level UP\n           </ion-button>\n           \n          </div>\n        <!-- </ion-card-content> -->\n      <!-- </ion-card> -->\n    </div>\n\n    <!-- line -->\n    <div class=\"ion-cards\">\n     \n      <!-- line -->\n      <app-lines style=\"width:33%\" (openPopUp)=\"openPopUp($event,leg)\"  (lowestLevel)=\"lowestLevel($event)\" (levelUp)=\"levelUp($event)\" [placementTree]=\"placementTree?.data?.leg1\" [userId]=\"placementTree?.data?.userId\" [leg] = \"'1'\" [levelUpId]=\"placementTree?.data?.levelUpUser\"></app-lines>\n      <app-lines  style=\"width:33%\" (openPopUp)=\"openPopUp($event,leg)\" (lowestLevel)=\"lowestLevel($event)\" (levelUp)=\"levelUp($event)\"  [placementTree]=\"placementTree?.data?.leg2\" [userId]=\"placementTree?.data?.userId\" [leg] = \"'2'\" [levelUpId]=\"placementTree?.data?.levelUpUser\"></app-lines>\n      <app-lines style=\"width:33%\" (openPopUp)=\"openPopUp($event,leg)\" (lowestLevel)=\"lowestLevel($event)\" (levelUp)=\"levelUp($event)\"  [placementTree]=\"placementTree?.data?.leg3\" [userId]=\"placementTree?.data?.userId\" [leg] = \"'3'\" [levelUpId]=\"placementTree?.data?.levelUpUser\"></app-lines>\n      <!-- <ion-card *ngIf=\"placementTree?.data?.leg2\">\n        <ion-card-header class=\"title-border diffColor red\" (click)=\"levelUp(placementTree?.data?.leg2?.userId,'one')\">\n          <ion-card-title>{{'DASHBAORD.line.title' | translate }} 2</ion-card-title>\n        </ion-card-header>\n        <ion-card-content class=\"line-free\" *ngIf=\"isEmptyObject(placementTree?.data?.leg2)\">\n          <span>Free</span>\n          <p (click)=\"openPopUp(placementTree?.data?.userId,2)\">Click here tp Place a new member </p>\n\n        </ion-card-content>\n\n        <ion-card-content class=\"line\" *ngIf=\"!isEmptyObject(placementTree?.data?.leg2)\">\n          <ion-grid>\n            <p>{{placementTree?.data?.leg2?.firstName != '' ? placementTree?.data?.leg2?.firstName :'--' }}\n              {{placementTree?.data?.leg2?.lastName != '' ? placementTree?.data?.leg2?.lastName :'--' }} >> ID:\n              {{placementTree?.data?.leg2?.userId != '' ? placementTree?.data?.leg2?.userId :'--' }} </p>\n            <ion-row>\n              <ion-col>\n                {{placementTree?.data?.leg2?.yourStatus != '' ? placementTree?.data?.leg2?.yourStatus :'--' }}\n              </ion-col>\n              <ion-col>\n                {{placementTree?.data?.leg2?.rank != '' ? placementTree?.data?.leg2?.rank :'--' }}\n              </ion-col>\n              <ion-col>\n                PV:{{placementTree?.data?.leg2?.PV != '' ? placementTree?.data?.leg2?.PV :'--' }}\n              </ion-col>\n              <ion-col>\n                DV:{{placementTree?.data?.leg2?.DV != '' ? placementTree?.data?.leg2?.DV :'--' }}\n              </ion-col>\n              <ion-col>\n                GV:{{placementTree?.data?.leg2?.GV != '' ? placementTree?.data?.leg2?.GV :'--' }}\n              </ion-col>\n            </ion-row>\n            <p>Sponosor:  </p>\n            <ion-row>\n              <ion-col>\n                {{placementTree?.data?.leg2?.sponsorName != '' ? placementTree?.data?.leg2?.sponsorName :'--' }}\n              </ion-col>\n              <ion-col>\n                {{placementTree?.data?.leg2?.sponsorId != '' ? placementTree?.data?.leg2?.sponsorId :'--' }}\n              </ion-col>\n              <ion-col>\n                {{placementTree?.data?.leg2?.sponsorStatus != '' ? placementTree?.data?.leg2?.sponsorStatus :'--' }}\n              </ion-col>\n              <ion-col>\n                {{placementTree?.data?.leg2?.sponsorRank != '' ? placementTree?.data?.leg2?.sponsorRank :'--' }}\n              </ion-col>\n              \n            </ion-row>\n\n          </ion-grid>\n          <ion-button class=\"btn\" color=\"danger\" expand=\"block\" (click)=\"lowestLevel(placementTree?.data?.leg2?.userId)\"   >\n             Lowest Level\n          </ion-button>\n        </ion-card-content>\n\n      </ion-card> -->\n      <!-- line -->\n     \n    </div>\n  </div>\n\n\n  <div style=\"padding:10px;\"></div>\n\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_member-replacement_member-replacement_module_ts.js.map