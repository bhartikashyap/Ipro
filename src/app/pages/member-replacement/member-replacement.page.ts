import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { UserModalPage } from 'src/app/components/user-modal/user-modal.page';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

import {
  ModalController,
  NavParams,
  NavController
} from '@ionic/angular';

@Component({
  selector: 'app-member-replacement',
  templateUrl: './member-replacement.page.html',
  styleUrls: ['./member-replacement.page.scss'],
})
export class MemberReplacementPage implements OnInit {
  placementTree: any;
  searchItem: any = '';
  subscription: any;
  loggedInuser: any;
  searchType: any;
  @Output() popUpData = new EventEmitter<string>();
  loggedInuserInsearch:any;
  constructor(private screenOrientation: ScreenOrientation,
    private apiSer: ApiService,
    private utilSer: UtilService,
    private navCtrl: NavController) { }

  ngOnInit() {
    // get current
    console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'

    // set to landscape

  }

  async ionViewWillEnter() {
    this.loggedInuser = JSON.parse(await this.utilSer.getStorage('AUTH_USER')).userId
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

    // allow user rotate
    // this.screenOrientation.unlock();

    // detect orientation changes
    this.screenOrientation.onChange().subscribe(
      () => {
        console.log("Orientation Changed");
      }
    );
    this.getPlacementTree("tree", '', 0);
  }

  back() {
    this.navCtrl.back();
  }

  async getPlacementTree(type, event, userId) {
    this.searchType = '';
    this.loggedInuserInsearch=false;
   let loggedInuserInsearch=false;
    this.placementTree = {};
    let loading = await this.utilSer.presentLoading();
    let response: any
    if (type == 'tree') {
      this.searchType = type;
      this.loggedInuserInsearch=false;
      loggedInuserInsearch=false;
      response = await this.apiSer.placementTree();

    }
    else if (type == 'search') {
      let searchItem = {
        searchFor: userId
      }
      response = await this.apiSer.searchMember(searchItem);
      if(loggedInuserInsearch){
        this.loggedInuserInsearch = true;
        this.getPlacementTree('tree', '', 0); 
      }
      if(response.data?.levelUpUser == this.loggedInuser){
        loggedInuserInsearch= true;
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
    console.log(this.placementTree)
  }

  async openPopUp(data) {
    // this.subscription.unsubscribe();
    let memberId = data.userId;
    let leg = data.leg;
    memberId = await this.utilSer.getStorage('memberId');
    leg = await this.utilSer.getStorage('level');

    var counter = 0;
    this.utilSer.openPopup(UserModalPage, "member-place", 'modal-member-place', true);
    this.subscription = this.utilSer.currentMessage.subscribe(message => {
      console.log(message)
      console.log(this.subscription)

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
      console.log("error")

    }, () => {
      console.log("complete")
    })



  }

  async searchPopup() {

    this.utilSer.openPopup(UserModalPage, "search", 'reconfirm', true);
    this.subscription = this.utilSer.currentMessage.subscribe(message => {
      console.log(message)
      if (message.indexOf('=') > 0) {
        let searchItem = message.split('=')[1];
        this.getPlacementTree('search', '', searchItem);
        this.utilSer.changeMessage("")

        this.subscription.unsubscribe();


      }
    })


  }

  goTohome() {
    this.utilSer.goNext('/tabs/dashboard/defaultDash');
  }

  async placeMember(memberId, leg) {
    let loading = await this.utilSer.presentLoading();
    let placeMem = {
      memberId: memberId,
      memberIdToBePlaced: this.utilSer.memberPlacedUuserId,
      leg: leg
    }
    let response: any = await this.apiSer.placeMember(placeMem);
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
  }

  async lowestLevel(id) {
    this.searchType = '';
    if (id != undefined && id != '') {
      let loading = await this.utilSer.presentLoading();
      let lowest = {
        memberId: id,

      }
      let response: any = await this.apiSer.getLowLevel(lowest);
      loading.dismiss();
      if (response.status == 1) {
        this.placementTree = response;
        /// this.utilSer.presentToast("Member placed successfully.","top");

      }
      else {
        this.utilSer.presentToast(response.msg, "top");
      }

    }
  }

  beforelevelUp(userId, level) {
    let data = {
      userId: userId,
      leg: level
    }
    this.utilSer.setStorage('memberId', userId);
    this.utilSer.setStorage('level', level);
    if (userId == this.loggedInuser) {
      data = {
        userId: userId,
        leg: 'top'
      }
    }
    this.levelUp(data)


  }
  async levelUp(data) {
    console.log(data)
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

  }
  isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
  }



  cancelSearch() {
    this.searchItem = '';
    this.getPlacementTree('tree', '', 0)
  }


  addNewItem(value: string) {
    this.popUpData.emit(value);
  }


  ionViewDidLeave() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

  }



  ngOnDestroy() {
    ///this.subscription.unsubscribe();
    //this.utilSer.currentMessage.unsubscribe();
  }

}
