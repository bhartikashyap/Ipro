import { Component, OnInit } from '@angular/core';
import { ModalController, 
  NavParams 
  } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';
@Component({
  selector: 'app-my-sponsor',
  templateUrl: './my-sponsor.page.html',
  styleUrls: ['./my-sponsor.page.scss'],
})
export class MySponsorPage implements OnInit {
  sponsors:any;
title:any;

  constructor(private utiSer:UtilService,private apiSer:ApiService,private route:Router,private navParams:NavParams) { }
  ngOnInit() {
  }

  ionViewWillEnter() {
  this.title = this.navParams.data.paramTitle;
    this.getSponsors();
    
  }
  async getSponsors(){
   // this.apiSer.getMembers();
    let loading = await this.utiSer.presentLoading();
    this.sponsors= await this.apiSer.mySponsor();
    console.log(this.sponsors)
    loading.dismiss();
    console.log(this.sponsors);

  }

  sendmail(mail){
    this.utiSer.sendMail(mail);
  }

  callNo(phoneno){
    this.utiSer.callMobile(phoneno);
  }

}
