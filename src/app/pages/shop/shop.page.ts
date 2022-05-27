import { Component, OnInit } from '@angular/core';
import { UtilService } from "src/app/services/util.service";
import { ApiService } from "src/app/services/api.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
 allProducts:any=[];
 allCategories:any;
 selectedOption:any = 'all';
  constructor(  
    private utility: UtilService,
    private apiService: ApiService, 
    private router:Router,
    
    ) {

     }

  ngOnInit() {
   
  }

  ionViewWillEnter(){
    this.utility.removeStorage('Prod')
    this.getShopCategory();
    this.getProducts(); 
    this.utility.removeStorage('Prod');
  }

  async getProducts(){
   let loading = await this.utility.presentLoading();
    let body = {
      productCategoryId:this.selectedOption
    }
     this.apiService.getProducts(body).then((res: any) => {
       loading.dismiss();
        // console.log(res);
        this.allProducts = res.data;
        this.allProducts.map((item)=>{
          console.log(item.avail_runtime[1])
       })
     })
  }

  async getShopCategory(){
    this.apiService.getShopCategory().then((res: any) => {
      // console.log(res);
      this.allCategories = res.data;
      
   })
  }

  changeCategory(event){
     this.getProducts();
  }

  openDetailsWithQueryParams(item) {
    this.utility.setStorage('Prod', JSON.stringify(item));
    this.router.navigate(["/tabs/product-detail"]);
  }

}
