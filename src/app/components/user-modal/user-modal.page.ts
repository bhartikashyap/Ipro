import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {
  ModalController,
  NavParams
} from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.page.html',
  styleUrls: ['./user-modal.page.scss'],
})
export class UserModalPage implements OnInit {
  title: any;
  memberToplace: any;
  selectedMember: any;
  userselectedMember:any;
  erroMsg:any='';
  searchItem:any;
  QRcode:any;
  // @Output() popUpData = new EventEmitter<string>();;
  constructor(private modalController: ModalController,
    private videoSer: VideoService,
    private navParams: NavParams,
    private utiSer: UtilService,
    private apiSer: ApiService,
    private router:Router,
    public cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.title = this.navParams.data.paramTitle;
    if (this.title == "member-place") {
      this.getMemberToPlace();
    }
    else  if (this.title == "analysis") {
      this.getQRcode();
    }
  }
 

  async changeLan(lan) {
    this.utiSer.changeLan(lan, 'app');
    this.videoSer.langChange(lan, this.cdr);

  }
 

  closeModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  async getMemberToPlace() {
    let loading = await this.utiSer.presentLoading();
    this.memberToplace = await this.apiSer.userForPlacement();
    console.log(this.memberToplace)
    loading.dismiss();

  }
  async getQRcode() {
    let loading = await this.utiSer.presentLoading();
    this.QRcode = await this.apiSer.codeQR();
    console.log(this.QRcode)
    loading.dismiss();

  }


  async placeMember()
  {
    console.log(this.selectedMember)
    console.log(this.userselectedMember)
    let selectedMember :any =await this.utiSer.getStorage('selectedMember');
    selectedMember = JSON.parse(selectedMember);
    this.utiSer.memberPlacedUuserId = selectedMember.userId;
    this.utiSer.changeMessage("pop closed");
    this.closeModal();
    setTimeout(()=>{
      this.closeModal();

    },1000)
    this.utiSer.removeStorage('selectedMember');
  }

  async gohome(){
    this.utiSer.changeMenu();
  }

  async reconfirmation(data) {
    this.erroMsg = "";
    console.log(this.selectedMember)
    if (data != undefined) {
      this.utiSer.setStorage('selectedMember',JSON.stringify(data));
      this.utiSer.openPopup(UserModalPage, "reconfirmation", 'reconfirm',true);
    }
    else{
      this.erroMsg = this.utiSer.translateText('MODALS').USERSEARCH.BLANK_ERROR;
    }
  }

  getPlacementTree(serachItem){
    this.utiSer.changeMessage("search="+serachItem);
    this.closeModal();

  }

 async navigateHome(){
   
    let url:any = await this.utiSer.changeMenu();
    // this.utiSer.goNext([url]);

    this.router.navigate([url])
    this.closeModal();
  }

async gotoPayment(){
  this.utiSer.goNext(["/tabs/book-analysis"]);
  this.closeModal();
}


}
