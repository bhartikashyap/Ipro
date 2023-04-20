import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';
// import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { pattern } from "src/app/utility/pattern";
@Component({
  selector: 'app-partner-agreement',
  templateUrl: './partner-agreement.page.html',
  styleUrls: ['./partner-agreement.page.scss'],
})
export class PartnerAgreementPage implements OnInit {
  next: any = false;
  partner: any;
  profile: any;
  lastname: any;
  firstnameMessage: any;
  lastnameMessage: any;
  firstname: any;
  form: any;
  selected_option: any;
  financeDepart: any;
  taxId: any;
  VATId: any;
  errorText: any;
  taxIderror: any;

  constructor(private utility: UtilService, private domSanit: DomSanitizer, public apiService: ApiService) {
    this.partner = this.domSanit.bypassSecurityTrustResourceUrl(this.utility.pdfLink[4].link);
    this.next = false;
    // this.utility.openPdfLinks(this.utility.pdfLink[4].link,'Partner');
  }

  ngOnInit() {
    this.getProfile();
  }

  initForm() {
    // this.form = this.fb.group({
    //   selected_plan: ["", []],
    //   role: ["", [Validators.required]],
    //   email: ["", [Validators.required, Validators.pattern(pattern.email)]],
    //   streetname: ["", [Validators.required, Validators.maxLength(100)]],
    //   nr: ["", [Validators.required, Validators.maxLength(50)]],
    //   city: ["", [Validators.required, Validators.maxLength(100)]],
    // });
  }

  async getProfile() {
    let dob;
    let loading = await this.utility.presentLoading();
    let result: any = await this.apiService.getProfile();
    loading.dismiss();
    if (result.status == 1) {
      this.profile = result.data.profile ? result.data.profile : null;
      console.log(this.profile);
      this.VATId = this.profile?.VATId;
      this.taxId = this.profile?.taxId;
      // if (this.profile.countryId == "84") {
      //   this.next = false;
      // }
      // else {
      //   this.next = true;
      // }
    }
  }

  async checkDigitalSign() {
    this.lastnameMessage = '';
    this.firstnameMessage = '';
    let error = 0;

    if (this.lastname == undefined || this.lastname == '') {
      this.firstnameMessage = this.utility.translateText('QUESTIONNAIRE').completeSign;
      error = 1;
    }
    if (this.firstname == undefined || this.firstname == '') {
      this.firstnameMessage = this.utility.translateText('QUESTIONNAIRE').completeSign;
      error = 1;
    }


    if (this.firstname.toLowerCase() != this.profile.firstName.toLowerCase()) {
      this.firstnameMessage = this.utility.translateText('QUESTIONNAIRE').firstNameError;
      error = 1;
    }
    if (this.lastname.toLowerCase() != this.profile.lastName.toLowerCase()) {
      this.lastnameMessage = this.utility.translateText('QUESTIONNAIRE').lastNameError;
      error = 1;

    }


    if (!error) {
      let data: any;
      // if (this.profile.countryId == "84") {
        data = {
          financeDepart: this.financeDepart ? this.financeDepart : '',
          taxId: this.taxId,
          VATId: this.VATId ? this.VATId : '',
          selected_option: this.selected_option
        };
      // }
      console.log(data)

      let loading = await this.utility.presentLoading();
      let result: any = await this.apiService.partnerAgreement(data);
      loading.dismiss();
      console.log(result)
      if (result.status) {
        console.log(result)
        this.utility.presentToast(this.utility.translateText('MSG').agreementSaved, "top")
        this.utility.goBack();
      }

    }



  }

 async  goForSign() {
    console.log(this.selected_option);
    console.log(this.taxId);
    this.errorText = '';
    this.taxIderror = '';

    if (this.profile.countryId == "84") {
      if (this.selected_option == undefined || this.selected_option == null || this.selected_option == "") {
        this.errorText = this.utility.translateText('Agreement').error ;
      }
    }

    if (this.selected_option == 'check3') {
      if (this.taxId == undefined || this.taxId == null|| this.taxId == "") {
        this.taxIderror =this.utility.translateText('Agreement').taxerror ;
      }
      else{
       
      }
    }
    if (this.VATId != undefined && this.VATId != null && this.VATId != "") {
      this.errorText = ".........";
      let loading = await this.utility.presentLoading();
      let result: any = await this.apiService.validateTaxID({"VATId":this.VATId});
      loading.dismiss();
      if(result.status ){
        this.errorText =  "";
        this.taxIderror = "";
        // this.next = true;
      }
      else{ 
        this.taxIderror = this.utility.translateText('Agreement').UIDerror;
      }
      
    }

    if (this.errorText == '' && this.taxIderror == '') {
      this.next = !this.next;
    }
  }

  async openBrowser(link){
  this.utility.openPdfLinks(this.utility.pdfLink[4].link,'partner')
  }
  

}
