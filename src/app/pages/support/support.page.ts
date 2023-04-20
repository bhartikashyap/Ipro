import { Component, OnInit } from '@angular/core';
import { UtilService } from "src/app/services/util.service";
import { ApiService } from "src/app/services/api.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {
  allCategories:any;
 message:any;
 errorText:any='';
 selectedOption:any;
   constructor(  
     private utility: UtilService,
     private apiService: ApiService, 
     private router:Router) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getShopCategory();
  }

  async getShopCategory(){
    this.apiService.getSupportCategory().then((res: any) => {
      // console.log(res);
      if(res.status){

      this.allCategories = res.support_categories;
    }
    this.selectedOption = "1";
   })
  }

  changeCategory(event){
    console.log(event);
 }
 async submitTicket(){
 
  if(this.message == undefined || this.message == '' || this.message == null ){
    this.errorText = this.utility.translateText("SUPPORT").errorMsg;
    return false;
  }

  let data = {
     "supportCatId": this.selectedOption,
     "message":this.message
  }
  let url:any = await this.utility.changeMenu();

  this.apiService.submitSupport(data).then((res: any) => {
    // console.log(res);
    if(res.status){

    this.utility.presentAlert(
      
      "",
      "",
      [],
      this.utility.translateText("SUPPORT").TicketSubmitedMsg,
      [ {
        text: this.utility.translateText("MODALS").BUTTONS.OK,
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
           this.router.navigate([url]);
        }
      }]
      
      
      
     );
    this.message='';
    this.errorText ="";
  }
  
 })
}

}
