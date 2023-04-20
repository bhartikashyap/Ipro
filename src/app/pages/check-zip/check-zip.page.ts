import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';
import { message } from 'src/app/utility/message'; 
import { EnvironmentService } from 'src/app/services/environment.service';
@Component({
  selector: "app-check-zip",
  templateUrl: "./check-zip.page.html",
  styleUrls: ["./check-zip.page.scss"],
})
export class CheckZipPage implements OnInit {
  form: FormGroup;
  role:any;
  get formControls() {
    return this.form.controls;
  }
  submitted = false;
  validationMessage: any;
  zipCodeFilled:any=false;
  analystList:any=[];
  lightAnlysis:any=false;
  analyst:any="";
  errorMsg:any;
  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private _translate: TranslateService,

    private navController: NavController,
    private formBuilder: FormBuilder,
    private utility: UtilService,
    private apiService: ApiService,
    private envr :EnvironmentService
  ) {}
  ionViewDidEnter() {
    this.menuCtrl.enable(false);
    this.getProfile();
    console.log( this.utility.translateText('MSG').currentlyUnavailable)
  }
  initForm() {
    this.form = this.formBuilder.group({
      zip: ["", [Validators.required, Validators.maxLength(100)]],
    });
    let messages = this.utility.translateText('MSG')
    this.validationMessage = {
      zip: [
        { type: "required", message: messages.required },
        { type: "maxlength", message: message.maxLength(100,messages.maxLength,messages.characters) },
      ],
    };
  }
  ngOnInit() {
    this.initForm();
    this.menuCtrl.enable(false);
  }


  async getProfile(){
    this.zipCodeFilled = false;
    let result: any = await this.apiService.getProfile();
    if(result && result?.data?.profile?.zipCode){
     
      this.role = result?.data?.profile?.role
      if(result?.data?.profile?.role != 'Prospect'){
        this.zipCodeFilled = true;
        this.form.get("zip").setValue(result?.data?.profile?.zipCode);
        this.submit();

      }
      else{
        this.zipCodeFilled = false;
        this.form.get("zip").setValue("");
      }
    }

   
  }
  async submit() {
    this.submitted = true;
    if (this.form.valid ) {
      this.submitted = false;
      this.zipCodeFilled = true;
      let loading = await this.utility.presentLoading();
      this.apiService
        .listOfAnalaysts({
          zipCode: this.form.value.zip,
        })
        .then((res: any) => {
          loading.dismiss();
          if (!res.status) {
          //   this.utility.presentAlert(
          //     "Alert",
          //     "",
          //     [],
          //     this.utility.translateText('MSG').currentlyUnavailable, [
          //       {
          //         text: this.utility.translateText("MODALS").BUTTONS.OK,
          //         handler: async() => {
          //           //this.utility.getPlanDetail(this.envr.plans.bodyAnlaysis);
          //         }
          //       }]
          //   );
           } 
        
           if(res.analysts_list != undefined && res.analysts_list != null){
           
            this.analystList = res?.analysts_list
            this.analystList.forEach(element => {
              console.log(element)
              if(element.name != '' && element.name.indexOf('-')> -1 && element.name.indexOf(',')> -1){
                console.log(element)
                let nameSplited = element.name.split('-');
                let completeName =nameSplited[0];
               
                let splitfromSpace = nameSplited[1].split(" ");
                let zipCode = splitfromSpace[1]
                //nameSplited[1].substring( 0, nameSplited[1].indexOf(","));
                console.log(splitfromSpace);

                let city =  splitfromSpace[2]
                //nameSplited[1].substring( 0, nameSplited[1].indexOf(","));[1].split(' ')[1];
                let distance = splitfromSpace[3] +splitfromSpace[4]
                //nameSplited[1].substring( 0, nameSplited[1].indexOf(","));[1].split(' ')[2]+splitfromComma[1].split(' ')[3];
                element['updatedName'] = " "+completeName +"  "+  distance ;
                element['updatedNames'] =zipCode +" "+ city;
              }
            });
            console.log(this.analystList)
           }
         
        })
        .catch((err) => {
          loading.dismiss();
        });
    }
  }


  async changeAnlayst(event){
    console.log(event)

  }

 async  confirmSubmission() {
    console.log(this.lightAnlysis,this.analyst)
    if(this.analyst == '' && !this.lightAnlysis){
     this.errorMsg = this.utility.translateText("BOOKING_ANALYSIS").errorMsg;
    }
    else{
      this.errorMsg = "";
      let data ={
        zipCode :this.form.value.zip,
        
      }
      // if(this.lightAnlysis){
        data["select_analysis_light"] = this.lightAnlysis
      // }
      // else{
        data["analyst"] = this.analyst
     // }
       
     let result:any = await this.apiService.bookAnlaysis(data);
     if(result?.status){
      // this.utility.getCart("");
      let detail  = await this.utility.getStorage('Prod')
      if(detail != undefined && detail != null){
        detail = JSON.parse(detail);
        detail["disableCart"] = true;
        detail["added_to_cart"]='yes';
        this.utility.setStorage('Prod',JSON.stringify(detail))
      }
      
    this.utility.closeModal();
    this.utility.goNext('tabs/basket')
     }
    }
  }
}
