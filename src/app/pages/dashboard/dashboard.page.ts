import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { Share } from '@capacitor/share';
import { ActivatedRoute } from '@angular/router';
import { session } from 'src/app/utility/message';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  details: any;
  subscription:any;
  subs:any;
  constructor(public utility: UtilService,
    private apiSer: ApiService,
    private route: ActivatedRoute,
    private platform:Platform
    ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
   

    this.utility.changeMenu();
    this.utility.getCart('cart');
    this.utility.setStorage(session.SELECTED_PLAN,'basket');
    let paramType;
    this.route.params.subscribe(params => {
      paramType = params.type;

    });
    this.getDetails(paramType);


  }
  async getDetails(type) {
    // this.apiSer.getMembers();
    let loading = await this.utility.presentLoading();
    let details: any = await this.apiSer.dashboard();
    if (details.status) {
      this.details = details.data;
      this.utility.setStorage('paymentOption',this.details.dashboard_data.myPaymentOption);
     
      if (type == 'Partner') {
        this.details.dashboard_data.yourStatus = 'Partner';


      }
      else if (type == 'Member') {
        this.details.dashboard_data.yourStatus = 'Member';

      }
      else {
        this.details.dashboard_data.yourStatus = await this.utility.getStorage("CHANGE_DASH");
      }
      if( details.data.dashboard_data.yourStatus != null &&  details.data.dashboard_data.yourStatus != ''){
        details.data.dashboard_data.yourStatus =  details.data.dashboard_data.yourStatus.toLowerCase();
      }
      console.log(details.data.dashboard_data.yourStatus)
    }
    else {
      this.details = {}
    }
    loading.dismiss();

  }

  async goTo(link) {
    this.utility.goNext(link);
  }

  async shareReffralLink(link) {
    console.log(link)
    await Share.share({
      text: this.utility.translateText('DASHBAORD').your_link  ,
      url: link,
    });
  }

  // dateDifference(expiryDate) {
  //   var date1 = new Date(expiryDate);
  //   var currentDate = new Date();

  //   // To calculate the time difference of two dates
  //   var Difference_In_Time = date1.getTime() - currentDate.getTime();

  //   // To calculate the no. of days between two dates
  //   let Difference_In_Days: any = Difference_In_Time / (1000 * 3600 * 24);
  //   Difference_In_Days = parseInt(Difference_In_Days)
  //    console.log(Difference_In_Days)
  //   return Difference_In_Days
  // }

  ionViewWillLeave() {
    // this.subscription.unsubscribe();
  }

}
