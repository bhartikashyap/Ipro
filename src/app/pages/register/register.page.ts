import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicSelectableComponent } from '@ionic-selectable/angular';
import { MenuController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';
import { message, session } from 'src/app/utility/message';
import { pattern } from 'src/app/utility/pattern';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form: FormGroup;
  submitted = false;
  countires: any = [];
  validationMessage: any;
  country: any = null;
  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private _translate: TranslateService,
    private utility: UtilService,
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
    this.getCountries();
  }
  async getCountries() {
    let result: any = await this.apiService.getCountryList();
    console.log(result);
    this.countires = result.countries;
  }
  async openModal() {
    // const modal = await this.modalController.create({
    //   component: SearchComponent,
    //   cssClass: 'my-search-class',
    // });
    // return await modal.present();
  }

  countryChange(event: any) { 
    console.log(event);
    if (event) {
this.form.get('phoneCode').setValue(event.phoneCode);
    } 
  }

  async submit() {
    this.submitted = true;
    if (this.form.valid) {
      this.submitted = false;
      let params: any = this.form.getRawValue();
      let loading = await this.utility.presentLoading();
      params.country = params.country.countryId;
      this.apiService
        .registerUser(params)
        .then((res: any) => {
          loading.dismiss();
          if (res.status == 1) {
            let token = res.jwt;
            let data = res.data;
            this.utility.setStorage(session.AUTH_STATUS, 1);
            this.utility.setStorage(session.AUTH_TOKEN, token);
            this.utility.setStorage(session.AUTH_USER, JSON.stringify(data));
            this.router.navigate(['/area-of-interest']);
          } else {
            this.utility.presentToast(res.msg);
          }
        })
        .catch((err: any) => {
          console.log(err);
          loading.dismiss();
        });
      console.log(params);
    }
  }
  get formControls() {
    return this.form.controls;
  }
  initForm() {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(100)]],
      lastName: ['', [Validators.required, Validators.maxLength(100)]],
      honor: ['', [Validators.required]],
      sponsorId: ['', [Validators.required, Validators.maxLength(5)]],
      email: ['', [Validators.required, Validators.pattern(pattern.email)]],
      language: ['', [Validators.required]],
      country: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      phoneCode: [''],
      notificationToken: [''],
      agree: [false, [Validators.requiredTrue]]
    });

    this.validationMessage = {
      firstName: [
        { type: 'required', message: message.required },
        { type: 'maxlength', message: message.maxLength(100) },
      ],
      lastName: [
        { type: 'required', message: message.required },
        { type: 'maxlength', message: message.maxLength(100) },
      ],
      honor: [{ type: 'required', message: message.required }],
      agree: [{ type: 'required', message: message.required }],
      sponsorId: [
        { type: 'required', message: message.required },
        { type: 'maxlength', message: message.maxLength(5) },
      ],
      email: [
        { type: 'required', message: message.required },
        { type: 'pattern', message: message.email },
      ],
      language: [{ type: 'required', message: message.required }],
      country: [{ type: 'required', message: message.required }],
      phone: [{ type: 'required', message: message.required }],
    };
  }
}