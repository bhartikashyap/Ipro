import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';
import { session } from 'src/app/utility/message';
import { UserModalPage } from 'src/app/components/user-modal/user-modal.page';
@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {

  constructor(
    private utility: UtilService,
    private apiService: ApiService,
    private router: Router,
    private navController: NavController,
    private domSanit: DomSanitizer,
    public datepipe: DatePipe
  ) { }
  products_data: any = [];
  previousUrl: any;
  currentUrl: any;
  backBtn: boolean;
  totalAmt: any;
  userInfo: any;
  profile: any;
  paymentUrl: any;
  paymentId: any;
  ionModelOpen = false
  promoCode:any='';
  promocodeApplicable:any=false;
  promoCodeError:any=''
  ngOnInit() {
    
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event: NavigationStart) => {
      // console.log(event)
      this.previousUrl = this.currentUrl;
      this.currentUrl = event.url;
    });
  }

  

 async  ionViewWillEnter() {

  let promoCode = await this.utility.getStorage('promocode');
if(promoCode == null || promoCode == undefined){
  this.promoCode='';

}
    if (this.previousUrl == '/tabs/product-detail') {
      this.backBtn = true;
    }
    else {
      this.backBtn = false;
    }
    this.getCart();
  }

  async getCart() {
  
    let data :any='';
    let loading = await this.utility.presentLoading('yes');
    if(this.promocodeApplicable){
       data = {
        "promoCode":this.promoCode
      }
    }
    let response: any = await this.apiService.getCart(data);
 
    loading.dismiss();
    if (response.status == 1) {

      this.products_data = response ? response : [];
      if (this.products_data) {
        this.totalAmt = response ? response : [];
        this.products_data = this.products_data.data ? this.products_data.data : [];
        this.utility.cartNo = this.products_data.length;
        console.log(this.products_data)
      }
    }
    else {
      this.products_data = null;
    }
  }

  async removeItem(item) {
    let loading = await this.utility.presentLoading('yes');
    let packageId = {
      packageId: item.packageId
    }
    let response: any = await this.apiService.removeFromCart(packageId);
    loading.dismiss();
    if (response.status == 1) {
      this.getCart();
    }
  }



  async buyCart() {
let onlyDevice =0 ;

this.utility.setStorage("memberShipPurachsed",false);
    this.products_data.map((item)=>{
      console.log(item.details)
      let packageId = parseInt(item.details.packageId)
      if(packageId == 243 || packageId == 253) {
          this.utility.setStorage("memberShipPurachsed",true);
      }
      // if(packageId >= 244 && packageId <= 252) {
      //   onlyDevice++;
      // }
      // else{
      //   onlyDevice-- ;
      // }
      

    })
    // console.log(onlyDevice,this.products_data.length)
    // if(this.products_data.length == onlyDevice){
    //   this.utility.openPopup(UserModalPage,'payment','sponsor-class',true);
    // }
    // else{
     this.router.navigate(["/tabs/book-analysis"]);

    // }
  }


  async checkPromoCode(){
    let data = {
      "promoCode":this.promoCode
    }
    let response: any = await this.apiService.promoCode(data);
    if (response.status == 1) {
      this.promocodeApplicable = true;
       this.promoCodeError = '';
       this.utility.setStorage("promocode",this.promoCode)
      this.getCart();
    }else{
      this.promocodeApplicable=false;
       this.promoCodeError = this.utility.translateText('MSG').promocodeerror;
    }

  }
 

}
