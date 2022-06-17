import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { pattern } from "src/app/utility/pattern";
import { message, session } from "src/app/utility/message";
@Component({
  selector: 'app-commission-option',
  templateUrl: './commission-option.page.html',
  styleUrls: ['./commission-option.page.scss'],
})
export class CommissionOptionPage implements OnInit {
  cardPaymentoption: any = {};
  countries: any = [];
  form: FormGroup;
  paymnetMethod: any;
  iban: any
  bitcoin: any;
  ibanCheck: any = 'notchecked';
  error: any = '';
  validationMessage: any;
  maxLength: any;
  erroriban: any;
  bic: any;
  constructor(public utilSer: UtilService, private apiSer: ApiService, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      wallet: ["", [Validators.required]],
      ibanNo: ["", [Validators.required, Validators.maxLength(6), Validators.minLength(4), Validators.pattern(pattern.alphaNumeric)]],
      iban: [false],
      bitcoin: [false],
      ibancode: ['']


    });
    let messages = this.utilSer.translateText('MSG')
    this.validationMessage = {
      ibanNo: [
        { type: "required", message: messages.required },
        { type: "maxlength", message: message.maxLength(this.maxLength, messages.maxLength, messages.characters) },
        { type: "minlength", message: message.minLength(this.maxLength, messages.minLength, messages.characters) },
        { type: "alphaNumeric", message: messages.alphaNumeric },
      ],
      wallet: [
        { type: "required", message: messages.required },
        // { type: "maxlength", message: message.maxLength(100) },
      ],

    };
  }

  ionViewWillEnter() {
    this.getPaymentoption();

  }
  async getPaymentoption() {
    let loading = await this.utilSer.presentLoading();
    let result: any = await this.apiSer.paymentOption();
    loading.dismiss();
    let selectedCountry;
    if (result.status == 1) {
      this.cardPaymentoption = result.data;
      this.form.get("wallet").setValue(this.cardPaymentoption.bitcoinAddress);
      this.cardPaymentoption.bic = this.bic;

      if (this.cardPaymentoption.commissionPaymentOption == 'Bitcoin') {
        this.form.get("bitcoin").setValue(true);

      }
      else {
        this.form.get("iban").setValue(true);
      }
      this.getCountries();


    }


  }

  async getCountries() {
    // let result: any = await this.apiSer.getCountryList();
    // this.countries = result.countries;
    this.countries = [
      { 'name': "Austria", 'IBAN': 'AT', 'totalLength': 20 },
      { 'name': "Andorra", 'IBAN': 'AD', 'totalLength': 24 },
      { 'name': "Belgium", 'IBAN': 'BE', 'totalLength': 16 },
      { 'name': "Bulgaria", 'IBAN': 'BG', 'totalLength': 22 },
      { 'name': "Croatia", 'IBAN': 'HR', 'totalLength': 21 },
      { 'name': "Cyprus", 'IBAN': 'CY', 'totalLength': 28 },
      { 'name': "Czech Republic", 'IBAN': 'CZ', 'totalLength': 24 },
      { 'name': "Denmark", 'IBAN': 'DK', 'totalLength': 18 },
      { 'name': "Estonia", 'IBAN': 'EE', 'totalLength': 20 },
      { 'name': "Finland", 'IBAN': 'FI', 'totalLength': 18 },
      { 'name': "France", 'IBAN': 'FR', 'totalLength': 27 },
      { 'name': "Germany", 'IBAN': 'DE', 'totalLength': 22 },
      { 'name': "Gibraltar", 'IBAN': 'GI', 'totalLength': 23 },
      { 'name': "Greece", 'IBAN': 'GR', 'totalLength': 27 },
      { 'name': "Hungary", 'IBAN': 'HU', 'totalLength': 28 },
      { 'name': "Iceland", 'IBAN': 'IS', 'totalLength': 26 },
      { 'name': "Ireland", 'IBAN': 'IE', 'totalLength': 22 },

      { 'name': "Italy", 'IBAN': 'IT', 'totalLength': 27 },
      { 'name': "Latvia", 'IBAN': 'LV', 'totalLength': 21 },
      { 'name': "Liechtenstein", 'IBAN': 'LI', 'totalLength': 21 },
      { 'name': "Lithuania", 'IBAN': 'LT', 'totalLength': 20 },
      { 'name': "Luxembourg", 'IBAN': 'LU', 'totalLength': 20 },
      { 'name': "Malta", 'IBAN': 'MT', 'totalLength': 31 },
      { 'name': "Monaco", 'IBAN': 'MC', 'totalLength': 27 },
      { 'name': "Netherlands", 'IBAN': 'NL', 'totalLength': 18 },
      { 'name': "Norway", 'IBAN': 'NO', 'totalLength': 15 },
      { 'name': "Poland", 'IBAN': 'PL', 'totalLength': 28 },
      { 'name': "Portugal", 'IBAN': 'PT', 'totalLength': 25 },
      { 'name': "Romania", 'IBAN': 'RO', 'totalLength': 24 },
      { 'name': "San Marino", 'IBAN': 'SM', 'totalLength': 27 },
      { 'name': "Slovakia", 'IBAN': 'SK', 'totalLength': 24 },
      { 'name': "Slovenia", 'IBAN': 'SI', 'totalLength': 19 },
      { 'name': "Spain", 'IBAN': 'ES', 'totalLength': 24 },
      { 'name': "Sweden", 'IBAN': 'SE', 'totalLength': 24 },
      { 'name': "Switzerland", 'IBAN': 'CH', 'totalLength': 21 },
      { 'name': "UK", 'IBAN': 'GB', 'totalLength': 22 }
    ]
    if (this.cardPaymentoption.iban != '') {
      // let countrycode = this.cardPaymentoption.iban.splice(0,2);

      this.form.get("ibanNo").setValue(this.cardPaymentoption.iban.substring(2));
      console.log(this.cardPaymentoption.iban.slice(0, 2))

      let selectedCountry = this.countries.filter(item => item.IBAN == this.cardPaymentoption.iban.slice(0, 2))




      console.log(selectedCountry);
      if (selectedCountry != undefined && selectedCountry.length >= 0) {
        // selectedCountry = selectedCountry[0].countryCode;
        this.maxLength = selectedCountry[0].totalLength;
        this.form.get("ibancode").setValue(selectedCountry[0].IBAN);

      }
      else {
        this.form.get("ibancode").setValue(this.countries[11].IBAN);
        this.maxLength = this.countries[11].totalLength;
      }



    }
    else {
      this.form.get("ibancode").setValue(this.countries[11].IBAN);
      this.maxLength = this.countries[11].totalLength;

    }


  }

  async changeCode(event) {
    console.log(event)

  }

  onIBANchange(event) {

    if (this.form.get("iban").value == true) {
      this.bitcoin = false;
      this.cardPaymentoption.commissionPaymentOption = 'Bank Transfer';


    }
    else {
      this.bitcoin = true;
      this.cardPaymentoption.commissionPaymentOption = 'Bitcoin'

    }

    // this.bitcoin=false;

  }

  onBitcoinChange(event) {
    if (this.form.get("bitcoin").value == true) {
      this.iban = false;
      this.cardPaymentoption.commissionPaymentOption = 'Bitcoin'

      // this.iban =false;
    }
    else {
      this.cardPaymentoption.commissionPaymentOption = 'Bank Transfer';

      this.iban = true;
    }



  }

  async checkIban(ibanNos) {
    this.erroriban = ''
    let iban = this.form.get("ibanNo").value

    // if(iban.match(pattern.alphaNumeric) ){
    //   this.error = "Please enter valid IBAN no."
    //   return false;
    // }
    if (iban == '' || iban == undefined) {
      this.ibanCheck = 'fail';
      this.erroriban = this.utilSer.translateText('PAYMENT_OPTON').msg.validIBAN;
      return false;


    }
    else if (iban.length > this.maxLength) {
      this.erroriban = 'IBAN length is gretaer than expected.';
      //this.utilSer.translateText('PAYMENT_OPTON').msg.reqIBAN; 
      return false;
    }
    else if (iban.length < this.maxLength) {
      this.erroriban = 'IBAN length is smaller than expected.'
      // this.erroriban = this.utilSer.translateText('PAYMENT_OPTON').msg.reqIBAN; 
      return false;
    }
    else {
      let ibanNo = this.form.get("ibancode").value + "" + this.form.get("ibanNo").value;
      console.log(ibanNo)
      let loading = await this.utilSer.presentLoading();
      let data = { 'iban': ibanNo }

      let result: any = await this.apiSer.checkIban(data);
      loading.dismiss();
      let selectedCountry;
      if (result.status == 1) {
        this.ibanCheck = 'pass';
        this.bic = result.bic;
        this.cardPaymentoption.bic = result.bic;

        let  data = {
          'iban': this.form.get("ibancode").value + "" + this.form.get("ibanNo").value,
          'bic': result.bic
        }
        data['commissionPaymentOption'] = this.cardPaymentoption.commissionPaymentOption;
        let loading = await this.utilSer.presentLoading();
        let results: any = await this.apiSer.commissionPayment(data);
        loading.dismiss();
        if (results.status == 1) {
          this.utilSer.presentToast(this.utilSer.translateText('PAYMENT_OPTON').msg.payment, 'top');
          this.getPaymentoption()
        }
        this.error = '';
  
      
        return true;

      }
      else {
        this.ibanCheck = 'fail';
        this.erroriban = this.utilSer.translateText('PAYMENT_OPTON').msg.validIBAN;
        return false;

      }

    }


  }

  async savePayment(type) {
    console.log(this.form)
    console.log(this.form.valid)
    // let data = {};
    this.error = '';
    let iban = this.form.get("ibancode").value + "" + this.form.get("ibanNo").value;
    this.checkIban(iban);
    // if (type == 'bitcoin') {
    //   if (this.form.get("wallet").value != '' && this.form.get("wallet").value != undefined) {
    //     data = {
    //       'bitcoinAddress': this.form.get("wallet").value
    //     }
    //   }
    //   else {
    //     this.error = this.utilSer.translateText('PAYMENT_OPTON').msg.walletAdd;
    //     return false;
    //   }
    // }
    // else if (type == 'iban') {
     
      // if (!this.checkIban(iban)) {
      //   return false;
      // }

    // let  data = {
    //     'iban': this.form.get("ibancode").value + "" + this.form.get("ibanNo").value,
    //     'bic': this.cardPaymentoption.bic
    //   }
    //   data['commissionPaymentOption'] = this.cardPaymentoption.commissionPaymentOption;
    //   let loading = await this.utilSer.presentLoading();
    //   let result: any = await this.apiSer.commissionPayment(data);
    //   loading.dismiss();
    //   if (result.status == 1) {
    //     this.utilSer.presentToast(this.utilSer.translateText('PAYMENT_OPTON').msg.payment, 'top');
    //     this.getPaymentoption()
    //   }
    //   this.error = '';

    // }

  



   }

}
