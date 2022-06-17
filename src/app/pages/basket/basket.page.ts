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
  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event: NavigationStart) => {
      // console.log(event)
      this.previousUrl = this.currentUrl;
      this.currentUrl = event.url;
    });
  }

  ionViewWillEnter() {
    if (this.previousUrl == '/tabs/product-detail') {
      this.backBtn = true;
    }
    else {
      this.backBtn = false;
    }
    this.getCart();
  }

  async getCart() {
    let loading = await this.utility.presentLoading();
    let response: any = await this.apiService.getCart();
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
    let loading = await this.utility.presentLoading();
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
    // this.products_data.map((item)=>{
    //   console.log(item.details)
    //   let packageId = parseInt(item.details.packageId)
    //   if(packageId >= 244 && packageId <= 252) {
    //     onlyDevice++;
    //   }
    //   else{
    //     onlyDevice-- ;
    //   }

    // })
    // console.log(onlyDevice,this.products_data.length)
    // if(this.products_data.length == onlyDevice){
    //   this.utility.openPopup(UserModalPage,'payment','sponsor-class',true);
    // }
    // else{
     this.router.navigate(["/tabs/book-analysis"]);

    // }
  }

  async validatePayment() {
    let result: any = await this.apiService.paymentStatus({
      paymentId: this.paymentId
    });
    if (result.status == 0) {
      setTimeout(() => {
        this.validatePayment();
      }, 2000);
    } else {
      this.ionModelOpen = false;
      this.profile.paymentId = this.paymentId;
      let data: any = await this.apiService.proceedRegistration(this.profile);
      this.router.navigate(["/tabs/area-of-interest"])
      if (data.status == 1) {
        this.utility.presentToast(result.msg, "bottom");
        //this.navController.
        if (data.redirect_to_questionnaire.toLowerCase() == 'no') {
          this.router.navigate(["/tabs/area-of-interest"])

        } else {
          this.router.navigate(["/questionare"])
        }

      } else {
        this.utility.presentToast(result.msg, "bottom");
        return false;
      }
    }
  }

}
