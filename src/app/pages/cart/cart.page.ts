import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(
     private utility: UtilService,
    private apiService: ApiService,
    private router: Router, private navController: NavController) { }

  ngOnInit() {
    this.getPlanDetail();
  }
  async getPlanDetail() {
    let loading = await this.utility.presentLoading();
    let res: any = await this.apiService.getPlanDetail();
    loading.dismiss();
    console.log(res);
  }

  goBack(){
    this.navController.back();
  }
   

}
