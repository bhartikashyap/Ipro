import { Component, OnInit } from '@angular/core';
import { UtilService } from "src/app/services/util.service";
import { ApiService } from "src/app/services/api.service";
import { Router } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";
import { session } from 'src/app/utility/message';
import { CheckZipPage } from '../check-zip/check-zip.page';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
detail:any= new Object;
profile:any;
ionModelOpen:any=false;
slideOpts = {
  initialSlide: 0,
  speed: 400,
  loop: true,
  zoom: {
    
  }
};

// availTymOption:any="1";

  constructor( private utility: UtilService,
    private apiService: ApiService, 
    private router:Router,
    private _translate: TranslateService,
    ) { 
  }

  ngOnInit() {
   // this.getProd();
  }
  
  ionViewWillEnter(){
    this.getProd();
    // this.detail["availTymSelected"] = "0";
    //this.utility.setStorage(session.SELECTED_PLAN,'');

  }
  async getProd(){
    this.detail = '';
    this.detail = JSON.parse(await this.utility.getStorage('Prod'));
    // this.detail.availTymSelected = '';
    // this.detail["availTymSelected"] =   Object.keys( this.detail.avail_runtime)[0];
    // availTym[key] === value
    this.detail["availTymSelected"]  =   Object.keys(this.detail.avail_runtime).find(key => this.detail.avail_runtime[key] === this.detail.avail_runtime_default);
    console.log(this.detail);
    // this.detail.changedPrice = this.detail.your_price * parseInt( this.detail.availTymSelected);
   
   // this.changeDuration( Object.keys( this.detail.avail_runtime)[0],Object.keys( this.detail.avail_runtime)[0]);

    // console.log( this.detail);
    //this.detail.avail_runtime =  this.detail.avail_runtime.filter(avtym => console.log(avtym))
    this.detail['durationDisable'] =true;
    if(this.detail.your_price != 0){
     this.detail["changedPrice"] = this.detail.your_price;
    }
    else{
     this.detail["changedPrice"] = this.detail.standard_price;
    }
    if(this.detail.added_to_cart.toLowerCase() === 'yes' && this.detail.make_disable.toLowerCase() === 'yes'){
      this.detail["disableCart"]=true;
    }
    else{
      this.detail["disableCart"]=false;
    }

    let result: any = await this.apiService.getProfile();
    if (result.status == 1) {
      this.profile = result.data.profile ? result.data.profile : null;
    }
    
    // console.log(this.detail);

  }

  // goBack(){
  //   this.router.navigate(["/tabs/shop"]);
  // }


  async removeItem(){
    let loading = await this.utility.presentLoading();
    let packageId = {
      packageId : this.detail.packageId
    }
    let response: any = await this.apiService.removeFromCart(packageId);
    loading.dismiss();
    if(response.status == 1){
      this.detail["added_to_cart"]='no';
      this.utility.presentToast(this.utility.translateText('MSG').productRemoved,"top");
       this.utility.getCart('cart');
      //  this.utility.goBack();
    }
   }


  changeDuration(event,availTym){
// availTym[key] === value
this.detail.availTymSelected =   Object.keys(availTym).find(key => availTym[key] === event.detail.value);
// this.detail.availTymSelected = availTym;
    if(this.detail.your_price != 0){
      this.detail.changedPrice = ( this.detail.your_price * parseInt(this.detail.availTymSelected));
      this.detail.changedPrice = this.utility.convertBacktoString( this.detail.changedPrice,2,',','.');
     }
     else{
      this.detail.changedPrice = this.utility.convertToFloat(this.detail.standard_price) * parseInt(this.detail.availTymSelected);
      this.detail.changedPrice = this.utility.convertBacktoString( this.detail.changedPrice,2,',','.');
    }
     availTym =   this.detail.changedPrice;
     console.log(this.detail);
   // this.detail.changedPrice = this.detail.changedPrice * parseInt( this.detail.availTymSelected);
  }

  
  async addToCart(){
 //adding to cart
 let body = {
  packageId:this.detail.packageId,
  runtime: this.detail.availTymSelected
 }
let loading = await this.utility.presentLoading();

  this.apiService.addToCart(body).then((res: any) => {
    loading.dismiss();
    if(res.status){
      this.detail["disableCart"] = true;
      this.detail["added_to_cart"]='yes';
      this.utility.presentToast(this.utility.translateText('MSG').productadded,"top");
      this.utility.getCart('cart');
      // this.utility.goBack();
      
    }
    else{
      console.log(res.msg)
      if(res.msg != 'check zipcode first'){
        this.utility.presentAlert('Warning','',[],res.msg,
        [{
          text: this.utility.translateText("MODALS").BUTTONS.GO_TO_SHOP,
          cssClass: 'secondary',
          handler: async() => {
            this.router.navigate(["/tabs/shop"]);
          }
        }]
        );
      }
     
    }
     // console.log(res);
     //this.router.navigate(["/tabs/basket"]);
  })
  }
  async addTobasket(){
    //checing before adding to cart
     if(this.detail.productCatId == '6'  ){
      //this.addToCart();

      this.utility.openPopup(CheckZipPage, "selectedTab", 'check-zip', true);
     
      // if(this.profile != null && this.profile.zipCode != ''){
      //    this.checkZipcode(this.profile.zipCode);
      // //  this.checkZipcode('99999999');
      // }
      // else{
      //   this.utility.presentAlert(
      //     "Alert",
      //     "",
      //     [
      //       {
      //         name: 'zipcode',
      //         type: 'number',
      //         id: 'zipcode',
      //         value: '',
      //         placeholder: this.utility.translateText("MODALS").BUTTONS.zipcode
      //       }
      //     ],
      //     this.utility.translateText("MSG").zipcode,
      //      [{
      //         text: this.utility.translateText("MODALS").BUTTONS.OK,
      //         handler: async(event) => {
      //           console.log(event);
      //           if(event.zipcode != ''){
      //             this.checkZipcode(event.zipcode);
      //           }
      //           else{
      //             this.utility.presentToast( this.utility.translateText("MSG").invalidZip,"top");
      //             this.addToCart();
      //             return false;
      //           }
      //         }
      //       }]
      //   );
       
      // }
     
     }
     else{
         this.addToCart();
     }

    
   }


  async checkZipcode(zipcodes){
    let loading = await this.utility.presentLoading();
    this.apiService
      .checkZip({
        zipCode: zipcodes,
      })
      .then((res: any) => {
        loading.dismiss();
        if (res.status === 0) {
          this.utility.presentAlert(
            "Alert",
            "",
            [],
            this.utility.translateText('MSG').currentlyUnavailable+","+ this.utility.translateText('MSG').stilladded, 
            [
              {
                text: this.utility.translateText("MODALS").BUTTONS.OK,
                handler: async(event) => {
                  this.addToCart();
                }
              }]
          );
        } 
        else{
          this.addToCart();
        }
      })
      .catch((err) => {
        loading.dismiss();
      });
   }

   ionViewDidLeave() {
    this.utility.setStorage('Prod', JSON.stringify(this.detail));
  }

}
 