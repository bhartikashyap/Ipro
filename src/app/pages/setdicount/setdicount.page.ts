import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { 
  ModalController, 
  NavParams 
  } from '@ionic/angular';
@Component({
  selector: 'app-setdicount',
  templateUrl: './setdicount.page.html',
  styleUrls: ['./setdicount.page.scss'],
})
export class SetdicountPage implements OnInit {
  discount: any=0;
  profile:any;
  counter:any=0;
  constructor(private modalController: ModalController,private util: UtilService,private apiSer:ApiService) { }

  ngOnInit() {
  }
  async ionViewWillEnter() {
    // this.discount = 0;
   let loading = await this.util.presentLoading();
   this.apiSer.getProfile().then((res: any) => {
    loading.dismiss();
    if (res.status == 1) {
      this.counter = 0;
    //  this.profile = res.data;
    if(res.data.profile.sponsorDiscount && res.data.profile.sponsorDiscount != ''){
      this.discount = res.data.profile.sponsorDiscount;

    }
    else{
      //this.discount = 0;
    }
      }
      else{
      //this.goNext(["/questionare"]);

      }

  })
  }

  async saveDsicount(event) {
  this.counter++
  if(this.counter  != 1){
    console.log(event.detail.value);
    this.util.defaultDiscount(event)
  }
   
   

  }

  closeModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

}
