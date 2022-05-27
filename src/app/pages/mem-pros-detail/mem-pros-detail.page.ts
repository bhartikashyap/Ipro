import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-mem-pros-detail',
  templateUrl: './mem-pros-detail.page.html',
  styleUrls: ['./mem-pros-detail.page.scss'],
})
export class MemProsDetailPage implements OnInit {
data:any;
error:any='';
notes:any;
discount:any;
  constructor(private route: ActivatedRoute,
    private apiSer:ApiService,
    private util:UtilService) { 
   
  }
 async ionViewWillEnter() {
    this.discount = 0;
    this.data = await this.util.getStorage('details');
    this.data = JSON.parse( this.data);
    this.discount = this.data.userDiscount;

  }

  ngOnInit() {
  }

 async saveNotes(notes){
   console.log(this.notes)
   this.error= '';
   if(this.notes != ''){
    let loading = await this.util.presentLoading();
    let data = {
      "userId": this.data.userId,
      "quickNote":this.notes
    }
   let result:any =  await this.apiSer.saveNotes(data);
   if(result.status)
   {
     this.util.presentToast(this.util.translateText('DETAIL').save_note,'top')
   }
    loading.dismiss();
   }
   else{
     this.error = this.util.translateText('DETAIL').error;
   }

  }

  async saveDsicount(event){
    console.log(event.detail.value);

    let loading = await this.util.presentLoading();
    let data = {
      "userId": this.data.userId,
      "discount":this.discount
    }
   let result:any =  await this.apiSer.saveDiscount(data);
   if(result.status)
   {
     this.util.presentToast(this.util.translateText('DETAIL').save_note,'top')
   }
    loading.dismiss();

  }

  async sendMail(mailId){
    this.util.sendMail(mailId);
  }

  async callNumber(phonecode,mobileNo){
    let mobileNum = phonecode+mobileNo;
    this.util.callMobile(mobileNum);
  }


  ionViewDidLeave() {
    this.util.removeStorage('details')
  }
 

}
   