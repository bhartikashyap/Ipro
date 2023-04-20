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
 slideOpts = {
  initialSlide: 0,
  speed: 400,
  loop: true
};
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

        this.allProducts.map((item,index)=>{
          console.log(item.packageId,index);
          item["avail_runtime_default"] = item.avail_runtime[Object.keys(item.avail_runtime)[0]];
          item["changedPrice"] = parseInt(Object.keys(item.avail_runtime)[0]) * item.your_price;
          item.changedPrice = this.utility.convertBacktoString(item.changedPrice,2, ',', '.');
          item.standard_price = parseInt(Object.keys(item.avail_runtime)[0]) *  item.standard_price;
          item.standard_price = this.utility.convertBacktoString(item.standard_price,2, ',', '.');
          console.log(item.productCatId)
          // item.productDescription =  item.productDescription+" <br> hjdscbhjdsbc <br>hjsbgxhsvsv<br>hjbhjcbdsc"
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