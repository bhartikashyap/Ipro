import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-prospect-managment',
  templateUrl: './prospect-managment.page.html',
  styleUrls: ['./prospect-managment.page.scss'],
})
export class ProspectManagmentPage implements OnInit {
  userData: any=[];
  title:any="";
  noRecords:any;''
  constructor(private utiSer: UtilService,
    private apiSer: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private  transSer:TranslateService) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
console.log(this.transSer)

  
    this.route.params.subscribe(params => {
      console.log(params.type);
      if(params.type == "prospect") {
        this.getProspects();
        this.transSer.get('PROSPECT_MANAGEMENT.title').subscribe((text:string) => {
          console.log(text)
          this.title=text;
        });
        this.noRecords = this.utiSer.translateText("SHOP").NP;       
      }
      else {
        this.getMembers();
        this.transSer.get('MEMBER_MANAGEMENT.title').subscribe((text:string) => {
          console.log(text)
          this.title=text;
        });
        this.noRecords = this.utiSer.translateText("SHOP").NM;    
       
      }

    });

  }
  async getProspects() {
    let loading = await this.utiSer.presentLoading();
    this.userData = await this.apiSer.getProspects();
    if (this.userData.status) {
      this.userData = this.userData?.data?.prospects;
    }
    else {
      this.userData = [];
    }
    loading.dismiss();
    console.log(this.userData);

  }
  async getMembers() {
    let loading = await this.utiSer.presentLoading();
    this.userData = await this.apiSer.getMembers();
    if (this.userData.status) {
      this.userData = this.userData?.data?.members;
    }
    else {
      this.userData = [];
    }
    loading.dismiss();
    console.log(this.userData);

  }
  detail(data) {
    data["customizeRole"] = this.title;
    this.utiSer.setStorage("details",JSON.stringify(data));

    //this.router.navigate(['tabs/detail']);
    this.utiSer.goNext('/tabs/detail')
  }



}
