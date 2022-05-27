import { Component, OnInit } from '@angular/core';

import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";
@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.page.html',
  styleUrls: ['./myproducts.page.scss'],
})
export class MyproductsPage implements OnInit {
myproducts:any;
  constructor(private apiSer:ApiService,private utliSer:UtilService) { }

  ngOnInit() {
  }
  async ionViewWillEnter() {
    this.getProducts();
  }

  async getProducts(){
    let loading = await this.utliSer.presentLoading();
    this.apiSer.manageProducts().then((res)=>{
      this.myproducts = res;
      if(this.myproducts?.status){
        this.myproducts = this.myproducts.data.products;
      }
      else{
        this.myproducts=[];
      }
      console.log( this.myproducts)

      loading.dismiss();

    })

  }

  async productAction(packageId,action){
    let data ={
      "packageId":packageId,
      "action":action
    }
    let loading = await this.utliSer.presentLoading();
    this.apiSer.subscribeProducts(data).then((res)=>{
      let result :any = res;
      if(result.status){
        if(action == 'cancel'){
          this.utliSer.presentToast("Product cancelled","top");
        }
        else{
          this.utliSer.presentToast("Product Subscribed","top");
        }
        this.getProducts();

      }
      loading.dismiss();
    })

  }

  // async cancelProduct(packageId,action){
  //   let data ={
  //     "packageId":packageId,
  //     "action":action
  //   }
  //   let loading = await this.utliSer.presentLoading();
  //   this.apiSer.subscribeProducts(data).then((res)=>{
  //     let result :any = res;
  //     if(result.status){
  //       this.utliSer.presentToast("Product Subscribed","bottom")
  //     }
  //     loading.dismiss();
  //   })

  // }

  async buyAgain(packageId,runtime){
    console.log(runtime[1]);
    let data ={
      "packageId":packageId,
      "runtime":runtime[1]
    }
    let loading = await this.utliSer.presentLoading();
    this.apiSer.addToCart(data).then((res)=>{
      let result :any = res;
      if(result.status){
        this.utliSer.presentToast("Product Added","bottom");
        this.utliSer.getCart('cart');
        this.getProducts();
      }
      loading.dismiss();
     
      
    })

  }

}
