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
            if (response.status) {
                this.utilSer.presentToast(this.utilSer.translateText('MSG').memberPlace, "top");
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
                this.utilSer.presentToast(this.utilSer.translateText('MSG').someissueInNetwork, "top");
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
                if (response.status) {
                    this.placementTree = response;
                    /// this.utilSer.presentToast("Member placed successfully.","top");
                }
                else {
                    this.utilSer.presentToast(this.utilSer.translateText('MSG').someissueInNetwork, "top");
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

module.exports = ".grey {\n  background: #F1F1F1;\n  /* border-right: 1px solid #281f1f; */\n  padding: 1px;\n}\n.grey ion-col {\n  border: 1px solid #ccc;\n  font-weight: 700;\n  line-height: 10.4px;\n}\nion-col {\n  padding: 1px;\n  font-size: 9px;\n}\n.colm {\n  border-radius: 14px;\n  font-weight: 700;\n  line-height: 11.4px;\n  font-size: 9px;\n}\n.textCenter {\n  text-align: center;\n}\n.yellow-col {\n  background: #f9c30d;\n  color: #000;\n}\n.grey-col {\n  background-color: #969696;\n  color: #fff;\n}\n.blue-col {\n  background-color: #4D4D4D;\n  color: #F5F64F;\n}\np {\n  margin: 8px;\n  font-size: 8px;\n}\nion-card {\n  border-radius: 12px;\n}\nion-card-header {\n  padding: 8px;\n}\nion-card-title {\n  font-size: 10px;\n  font-weight: 700;\n}\n.sub-title {\n  background-color: #000;\n  color: #fff;\n  padding: 11px;\n  border-radius: 8px;\n  margin-top: 10px;\n  font-size: 12px;\n  text-align: center;\n}\n.title-border {\n  border-bottom: 1px solid #ccc;\n}\n.card-btn {\n  text-transform: uppercase;\n  margin: 10px;\n  font-size: 10px !important;\n}\n.btn {\n  text-transform: uppercase;\n  margin: 8px;\n  font-size: 8px !important;\n}\n.yellow {\n  background-color: #F9C30C;\n}\n.green {\n  background-color: #53AF25;\n}\n.blue {\n  background-color: #14253B;\n}\n.red {\n  background-color: #FF1601;\n}\n.diffColor ion-card-title {\n  color: #fff !important;\n}\n.line {\n  padding: 0px !important;\n}\n.line-free {\n  text-align: center;\n  font-size: 20px;\n  padding: 10px !important;\n}\n.line-free p {\n  text-decoration: underline;\n  color: #F96629;\n}\n.ion-cards {\n  display: flex;\n  align-items: center;\n}\n.searchbar {\n  display: flex;\n}\n.searchbar ion-icon {\n  padding: 10px;\n  position: fixed;\n  right: 2%;\n  top: 20%;\n}\nion-searchbar {\n  font-size: 10px;\n}\n.searchbar-input input {\n  padding: 2px 12px !important;\n  font-size: 10px !important;\n}\n.no-member {\n  padding: 12px;\n  text-align: center;\n}\n.ion-grid {\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmVzLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL2lwcm8lMjAyL3NyYy9hcHAvcGFnZXMvbWVtYmVyLXJlcGxhY2VtZW50L2xpbmVzL2xpbmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNHLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0FDQ0o7QURDSTtFQUNJLHNCQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtBQ0FSO0FESUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQ0RKO0FETUE7RUFDSSxtQkFBQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDSFI7QURNQTtFQUNJLGtCQUFBO0FDSEo7QURNQztFQUNHLG1CQUFBO0VBQ0EsV0FBQTtBQ0hKO0FETUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUNISjtBRE1BO0VBRUkseUJBQUE7RUFDQSxjQUFBO0FDSko7QURXQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDUko7QURVQTtFQUNJLG1CQUFBO0FDUEo7QURVQTtFQUNJLFlBQUE7QUNQSjtBRFNBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDTko7QURTQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDTko7QURTQTtFQUNJLDZCQUFBO0FDTko7QURRQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FDTEo7QURPQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUVBLHlCQUFBO0FDTEo7QURRQTtFQUNJLHlCQUFBO0FDTEo7QURPQTtFQUNJLHlCQUFBO0FDSko7QURNQTtFQUNJLHlCQUFBO0FDSEo7QURLQTtFQUNJLHlCQUFBO0FDRko7QURLQTtFQUNJLHNCQUFBO0FDRko7QURLQTtFQUVJLHVCQUFBO0FDSEo7QURLQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FDRko7QURJQTtFQUNJLDBCQUFBO0VBQ0EsY0FBQTtBQ0RKO0FESUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNESjtBRElBO0VBQ0ksYUFBQTtBQ0RKO0FER0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDQUo7QURHQTtFQUNJLGVBQUE7QUNBSjtBREVBO0VBQ0ksNEJBQUE7RUFDQSwwQkFBQTtBQ0NKO0FER0E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6ImxpbmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAuZ3JleXtcbiAgICBiYWNrZ3JvdW5kOiAjRjFGMUYxO1xuICAgIC8qIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyODFmMWY7ICovXG4gICAgcGFkZGluZzogMXB4O1xuICAgIC8vIGZvbnQtc2l6ZTogMTBweDtcbiAgICBpb24tY29se1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OjEwLjRweDtcbiAgICBcbiAgICB9XG59XG5pb24tY29se1xuICAgIHBhZGRpbmc6IDFweCA7XG4gICAgZm9udC1zaXplOjlweDtcblxuICAgICAgICBcblxufVxuLmNvbG17XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6MTEuNHB4O1xuICAgICAgICBmb250LXNpemU6OXB4O1xuICAgXG59XG4udGV4dENlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cbiAueWVsbG93LWNvbHtcbiAgICBiYWNrZ3JvdW5kOiAjZjljMzBkO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIFxufVxuLmdyZXktY29se1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5Njk2OTY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgXG59XG4uYmx1ZS1jb2wge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMxNDI1M0I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRENEQ0RDtcbiAgICBjb2xvcjogI0Y1RjY0RjtcbiAgICAgICBcbiAgICAgICAgXG4gICBcbn1cblxuXG5we1xuICAgIG1hcmdpbjogOHB4O1xuICAgIGZvbnQtc2l6ZTogOHB4O1xufVxuaW9uLWNhcmR7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuaW9uLWNhcmQtaGVhZGVye1xuICAgIHBhZGRpbmc6IDhweDtcbn1cbmlvbi1jYXJkLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc3ViLXRpdGxle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTFweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0bGUtYm9yZGVye1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNjY2M7XG59XG4uY2FyZC1idG57XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW46MTBweDtcbiAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cbi5idG57XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW46OHB4O1xuICAgIC8vIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogOHB4ICFpbXBvcnRhbnQ7XG4gICAgLy8gd2lkdGg6IDcwcHg7XG59XG4ueWVsbG93e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUMzMEM7XG59XG4uZ3JlZW57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUzQUYyNTtcbn1cbi5ibHVle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDI1M0I7XG59XG4ucmVke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjE2MDE7XG4gICAgLy8gXG59XG4uZGlmZkNvbG9yIGlvbi1jYXJkLXRpdGxle1xuICAgIGNvbG9yOiNmZmYgIWltcG9ydGFudDtcbn1cblxuLmxpbmVcbntcbiAgICBwYWRkaW5nOjBweCAhaW1wb3J0YW50O1xufVxuLmxpbmUtZnJlZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbn1cbi5saW5lLWZyZWUgcHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjb2xvcjogI0Y5NjYyOTtcblxufVxuLmlvbi1jYXJkc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG59XG4uc2VhcmNoYmFye1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uc2VhcmNoYmFyIGlvbi1pY29uIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMiU7XG4gICAgdG9wOjIwJTtcbn1cblxuaW9uLXNlYXJjaGJhcntcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG4uc2VhcmNoYmFyLWlucHV0IGlucHV0e1xuICAgIHBhZGRpbmc6IDJweCAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG5cbn1cblxuLm5vLW1lbWJlcntcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pb24tZ3JpZHtcbiAgICBwYWRkaW5nOiAycHg7XG59IiwiLmdyZXkge1xuICBiYWNrZ3JvdW5kOiAjRjFGMUYxO1xuICAvKiBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMjgxZjFmOyAqL1xuICBwYWRkaW5nOiAxcHg7XG59XG4uZ3JleSBpb24tY29sIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEwLjRweDtcbn1cblxuaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDFweDtcbiAgZm9udC1zaXplOiA5cHg7XG59XG5cbi5jb2xtIHtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDExLjRweDtcbiAgZm9udC1zaXplOiA5cHg7XG59XG5cbi50ZXh0Q2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ueWVsbG93LWNvbCB7XG4gIGJhY2tncm91bmQ6ICNmOWMzMGQ7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uZ3JleS1jb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTY5Njk2O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJsdWUtY29sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRENEQ0RDtcbiAgY29sb3I6ICNGNUY2NEY7XG59XG5cbnAge1xuICBtYXJnaW46IDhweDtcbiAgZm9udC1zaXplOiA4cHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogOHB4O1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMXB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0bGUtYm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5jYXJkLWJ0biB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDhweDtcbiAgZm9udC1zaXplOiA4cHggIWltcG9ydGFudDtcbn1cblxuLnllbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUMzMEM7XG59XG5cbi5ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1M0FGMjU7XG59XG5cbi5ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MjUzQjtcbn1cblxuLnJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjE2MDE7XG59XG5cbi5kaWZmQ29sb3IgaW9uLWNhcmQtdGl0bGUge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4ubGluZSB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubGluZS1mcmVlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmxpbmUtZnJlZSBwIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjRjk2NjI5O1xufVxuXG4uaW9uLWNhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlYXJjaGJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zZWFyY2hiYXIgaW9uLWljb24ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAyJTtcbiAgdG9wOiAyMCU7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5zZWFyY2hiYXItaW5wdXQgaW5wdXQge1xuICBwYWRkaW5nOiAycHggMTJweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLm5vLW1lbWJlciB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlvbi1ncmlkIHtcbiAgcGFkZGluZzogMnB4O1xufSJdfQ== */";

/***/ }),

/***/ 93795:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/member-replacement/member-replacement.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "ion-row {\n  background: #F1F1F1;\n  /* border-right: 1px solid #281f1f; */\n  padding: 1px;\n}\n\nion-col {\n  border: 1px solid #ccc;\n  padding: 0px;\n  font-size: 11px;\n}\n\np {\n  margin: 8px;\n  font-size: 11px;\n}\n\nion-card-title {\n  font-size: 17px;\n}\n\n.sub-title {\n  background-color: #000;\n  color: #fff;\n  padding: 11px;\n  border-radius: 8px;\n  margin-top: 10px;\n  font-size: 12px;\n  text-align: center;\n}\n\n.title-border {\n  border-bottom: 1px solid #ccc;\n}\n\n.card-btn {\n  text-transform: uppercase;\n  margin: 10px;\n  font-size: 10px !important;\n}\n\n.btn {\n  text-transform: uppercase;\n  margin: 8px;\n  font-size: 10px !important;\n}\n\n.yellow {\n  background-color: #F9C30C;\n}\n\n.green {\n  background-color: #53AF25;\n}\n\n.blue {\n  background-color: #14253B;\n}\n\n.red {\n  background-color: #FF1601;\n}\n\n.diffColor ion-card-title {\n  color: #fff !important;\n}\n\n.line {\n  padding: 0px !important;\n}\n\n.line-free {\n  text-align: center;\n  font-size: 20px;\n  padding: 10px !important;\n}\n\n.line-free p {\n  text-decoration: underline;\n}\n\n.ion-cards {\n  display: flex;\n  align-items: center;\n  padding: 10px;\n}\n\n.searchbar {\n  display: flex;\n}\n\n.searchbar ion-icon {\n  padding: 10px;\n  position: fixed;\n  right: 2%;\n  top: 20%;\n}\n\nion-searchbar {\n  font-size: 10px;\n}\n\n.searchbar-input input {\n  padding: 2px 12px !important;\n  font-size: 10px !important;\n}\n\n.no-member {\n  padding: 12px;\n  text-align: center;\n}\n\n.ion-grid {\n  padding: 2px;\n}\n\nion-content {\n  --padding-top:40px;\n  --padding-bottom:40px ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlci1yZXBsYWNlbWVudC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9pcHJvJTIwMi9zcmMvYXBwL3BhZ2VzL21lbWJlci1yZXBsYWNlbWVudC9tZW1iZXItcmVwbGFjZW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDQUo7O0FESUE7RUFDSSxlQUFBO0FDREo7O0FESUE7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksNkJBQUE7QUNESjs7QURHQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FDQUo7O0FERUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFFQSwwQkFBQTtBQ0FKOztBREdBO0VBQ0kseUJBQUE7QUNBSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSx5QkFBQTtBQ0VKOztBREFBO0VBQ0kseUJBQUE7QUNHSjs7QURBQTtFQUNJLHNCQUFBO0FDR0o7O0FEQUE7RUFFSSx1QkFBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUNHSjs7QUREQTtFQUNJLDBCQUFBO0FDSUo7O0FERkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDS0o7O0FESEE7RUFDSSxhQUFBO0FDTUo7O0FESkE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDT0o7O0FESkE7RUFDSSxlQUFBO0FDT0o7O0FETEE7RUFDSSw0QkFBQTtFQUNBLDBCQUFBO0FDUUo7O0FESkE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUNPSjs7QURMQTtFQUNJLFlBQUE7QUNRSjs7QUROQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7QUNTSiIsImZpbGUiOiJtZW1iZXItcmVwbGFjZW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXJvd3tcbiAgICBiYWNrZ3JvdW5kOiAjRjFGMUYxO1xuICAgIC8qIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyODFmMWY7ICovXG4gICAgcGFkZGluZzogMXB4O1xuICAgIC8vIGZvbnQtc2l6ZTogMTBweDtcbn1cbmlvbi1jb2x7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgXG5cbn1cbnB7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xufVxuXG5cbmlvbi1jYXJkLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLnN1Yi10aXRsZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDExcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdGxlLWJvcmRlcntcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2NjO1xufVxuLmNhcmQtYnRue1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luOjEwcHg7XG4gICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4uYnRue1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luOjhweDtcbiAgICAvLyBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICAvLyB3aWR0aDogNzBweDtcbn1cbi55ZWxsb3d7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5QzMwQztcbn1cbi5ncmVlbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTNBRjI1O1xufVxuLmJsdWV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MjUzQjtcbn1cbi5yZWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMTYwMTtcbiAgICAvLyBcbn1cbi5kaWZmQ29sb3IgaW9uLWNhcmQtdGl0bGV7XG4gICAgY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xufVxuXG4ubGluZVxue1xuICAgIHBhZGRpbmc6MHB4ICFpbXBvcnRhbnQ7XG59XG4ubGluZS1mcmVle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xufVxuLmxpbmUtZnJlZSBwe1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmlvbi1jYXJkc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzoxMHB4XG59XG4uc2VhcmNoYmFye1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uc2VhcmNoYmFyIGlvbi1pY29uIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMiU7XG4gICAgdG9wOjIwJTtcbn1cblxuaW9uLXNlYXJjaGJhcntcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG4uc2VhcmNoYmFyLWlucHV0IGlucHV0e1xuICAgIHBhZGRpbmc6IDJweCAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG5cbn1cblxuLm5vLW1lbWJlcntcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pb24tZ3JpZHtcbiAgICBwYWRkaW5nOiAycHg7XG59XG5pb24tY29udGVudHtcbiAgICAtLXBhZGRpbmctdG9wOjQwcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTo0MHB4XG59IiwiaW9uLXJvdyB7XG4gIGJhY2tncm91bmQ6ICNGMUYxRjE7XG4gIC8qIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyODFmMWY7ICovXG4gIHBhZGRpbmc6IDFweDtcbn1cblxuaW9uLWNvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG5wIHtcbiAgbWFyZ2luOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5zdWItdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTFweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdGxlLWJvcmRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uY2FyZC1idG4ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uYnRuIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ueWVsbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5QzMwQztcbn1cblxuLmdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzQUYyNTtcbn1cblxuLmJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQyNTNCO1xufVxuXG4ucmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMTYwMTtcbn1cblxuLmRpZmZDb2xvciBpb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5saW5lIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5saW5lLWZyZWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ubGluZS1mcmVlIHAge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmlvbi1jYXJkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zZWFyY2hiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc2VhcmNoYmFyIGlvbi1pY29uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMiU7XG4gIHRvcDogMjAlO1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uc2VhcmNoYmFyLWlucHV0IGlucHV0IHtcbiAgcGFkZGluZzogMnB4IDEycHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uby1tZW1iZXIge1xuICBwYWRkaW5nOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctdG9wOjQwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206NDBweCA7XG59Il19 */";

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

module.exports = "\n\n<ion-content>\n  <div></div>\n\n  <div *ngIf=\"!placementTree?.hasOwnProperty('data')\">\n    <!-- <div class=\"ion-cards\">\n      <ion-card>\n        <ion-card-content> -->\n         <p class=\"no-member\">{{placementTree?.msg}}</p> \n         <ion-button class=\"btn\" color=\"secondary\" expand=\"block\" (click)=\"cancelSearch()\" >\n          {{'MEMBER_MANAGEMENT.BTNS.clear' | translate}} \n         </ion-button>\n        <!-- </ion-card-content>\n      </ion-card>\n    </div> -->\n\n  </div>\n  <!-- line1 -->\n  <div *ngIf=\"placementTree?.hasOwnProperty('data')\">\n    <div class=\"ion-cards\">\n\n      <!-- <ion-card> -->\n        <!-- <ion-card-content> -->\n          <div style=\"display:flex;flex-direction: column;width: 25%;\">\n            <ion-button class=\"btn\" color=\"secondary\" expand=\"block\" (click)=\"goTohome()\" >\n              {{'MEMBER_MANAGEMENT.BTNS.backHome' | translate}} \n             </ion-button>\n            <ion-button class=\"btn\" color=\"secondary\" expand=\"block\" (click)=\"searchPopup()\" >\n              {{'MEMBER_MANAGEMENT.BTNS.search' | translate}} \n            </ion-button>\n          </div>\n       \n\n        <app-lines  [placementTree]=\"placementTree?.data\" [userId]=\"placementTree?.data?.userId\" [leg] = \"''\" style=\"width:45%\"></app-lines>\n\n            \n        <!-- <ion-card-content>  || placementTree?.data?.levelUpUser == loggedInuser\" -->\n          <div style=\"display:flex;flex-direction: column;width: 30%;\">\n            <ion-button class=\"btn\" color=\"secondary\" expand=\"block\" (click)=\"beforelevelUp(placementTree?.data?.levelUpUser,'top')\"   [disabled]=\"loggedInuserInsearch || searchType =='tree' \">\n              {{'MEMBER_MANAGEMENT.BTNS.leveleUP' | translate}} \n           </ion-button>\n           <!-- || placementTree?.data?.levelUpUser == loggedInuser -->\n          <ion-button class=\"btn\" color=\"secondary\" expand=\"block\" (click)=\"beforelevelUp(placementTree?.data?.levelUpUser,'one')\" [disabled]=\"loggedInuserInsearch || searchType =='tree'\">\n            {{'MEMBER_MANAGEMENT.BTNS.oneLevelUp' | translate}} \n           </ion-button>\n           \n          </div>\n        <!-- </ion-card-content> -->\n      <!-- </ion-card> -->\n    </div>\n\n    <!-- line -->\n    <div class=\"ion-cards\">\n     \n      <!-- line -->\n      <app-lines style=\"width:33%\" (openPopUp)=\"openPopUp($event,leg)\"  (lowestLevel)=\"lowestLevel($event)\" (levelUp)=\"levelUp($event)\" [placementTree]=\"placementTree?.data?.leg1\" [userId]=\"placementTree?.data?.userId\" [leg] = \"'1'\" [levelUpId]=\"placementTree?.data?.levelUpUser\"></app-lines>\n      <app-lines  style=\"width:33%\" (openPopUp)=\"openPopUp($event,leg)\" (lowestLevel)=\"lowestLevel($event)\" (levelUp)=\"levelUp($event)\"  [placementTree]=\"placementTree?.data?.leg2\" [userId]=\"placementTree?.data?.userId\" [leg] = \"'2'\" [levelUpId]=\"placementTree?.data?.levelUpUser\"></app-lines>\n      <app-lines style=\"width:33%\" (openPopUp)=\"openPopUp($event,leg)\" (lowestLevel)=\"lowestLevel($event)\" (levelUp)=\"levelUp($event)\"  [placementTree]=\"placementTree?.data?.leg3\" [userId]=\"placementTree?.data?.userId\" [leg] = \"'3'\" [levelUpId]=\"placementTree?.data?.levelUpUser\"></app-lines>\n      \n      <!-- line -->\n     \n    </div>\n  </div>\n\n\n  <div style=\"padding:10px;\"></div>\n\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_member-replacement_member-replacement_module_ts.js.map