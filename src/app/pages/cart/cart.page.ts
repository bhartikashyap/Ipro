import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';
import { session } from 'src/app/utility/message';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  booking:any=null;
  plan:any=null;
  vat:any=null;
  products_data:Array<any>=[];
  termsConditionStatus:boolean=false;
  privacyPolicyStatus:boolean=false;
  paymentUrl: any;
  ionModelOpen = false
  paymentId: any;

  constructor(
    private utility: UtilService,
    private apiService: ApiService,
    private router: Router, 
    private navController: NavController,
    private domSanit: DomSanitizer,
    public datepipe: DatePipe
  ) { }

  ngOnInit() {
    this.getPlanDetail();
  }

  async getPlanDetail() {
    let loading = await this.utility.presentLoading();
    let booking:any=await this.utility.getStorage(session.BOOKING);
    this.booking=booking ? JSON.parse(booking) : null;
    let response: any = await this.apiService.getPlanDetail(this.booking.selected_plan);
    loading.dismiss();
    if(response.status == 1){
      this.plan=response.data ? response.data :null;
      if(this.plan){
        this.products_data=this.plan.products_data ? this.plan.products_data : [];
        this.vat=this.plan.vat ? this.plan.vat : null;
      }
    }
  }

  async buyCart(){
    if(!this.termsConditionStatus){
      this.utility.presentToast('Select terms & condition');
      return false;
    }else if(!this.privacyPolicyStatus){
      this.utility.presentToast('Select privacy policy');
      return false;
    }else if(!this.booking){
      this.utility.presentToast('Booking detail not found');
      return false;
    }else{
      let latest_date:string='';
      if(this.booking.dob){
        let dob=new Date(this.booking.dob);
        latest_date =this.datepipe.transform(dob, 'dd-MM-yyyy');
      }
      let params={
        selected_plan :this.booking.selected_plan ? this.booking.selected_plan : 'body analysis',
        email :this.booking.email ? this.booking.email : '',
        countryId :this.booking.country ? Number(this.booking.country) : 0,
        nr :this.booking.nr ? this.booking.nr : '',
        streetname  :this.booking.streetname  ? this.booking.streetname  : '',
        city  :this.booking.city  ? this.booking.city  : '',
        zipCode  :this.booking.zipCode ? Number(this.booking.zipCode)  : '',
        dob  :latest_date,
      };
      let result:any=await this.apiService.createPayment(params);
      if(result.status == 0){
        this.utility.presentToast(result.msg);
        return false;
      }else{
        this.paymentUrl = result.response.result.redirect_url;
        this.paymentId = result.paymentId;
        if(this.paymentUrl) {
          this.paymentUrl = this.domSanit.bypassSecurityTrustResourceUrl( this.paymentUrl)
        }
        this.validatePayment();
        this.ionModelOpen = true;
      }
    }
  }

  async validatePayment() {
     let result:any=await this.apiService.paymentStatus({
       paymentId: this.paymentId
     });
     if(result.status == 0) {
      setTimeout(() => {
        this.validatePayment();
      }, 2000);
     } else{
        this.ionModelOpen = false;
        this.booking.paymentId = this.paymentId;
        let data:any=await this.apiService.proceedRegistration(this.booking);
        if(data.status == 1){
          this.utility.presentToast(result.msg);
          this.resetCart();
          this.openQuestion();
        }else{
          this.utility.presentToast(result.msg);
          return false;
        }
     }   
  }

  openQuestion(){
    this.router.navigate(["/question"]);
  }

  resetCart(){
    this.plan=null;
    this.booking=null;
    this.vat=null;
    this.products_data=[];
    this.paymentId=null;
    this.paymentUrl=null;
    this.utility.removeStorage(session.BOOKING);
  }

  goBack(){
    this.navController.back();
  }
}
