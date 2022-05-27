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
  get formControls() {
    return this.form.controls;
  }
  submitted = false;
  validationMessage: any;
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

  async submit() {
    this.submitted = true;
    if (this.form.valid && this.utility.checkNetwork()) {
      this.submitted = false;
      let loading = await this.utility.presentLoading();
      this.apiService
        .checkZip({
          zipCode: this.form.value.zip,
        })
        .then((res: any) => {
          loading.dismiss();
          if (res.status === 0) {
            this.utility.presentAlert(
              "Alert",
              "",
              [],
              this.utility.translateText('MSG').currentlyUnavailable, [
                {
                  text: this.utility.translateText("MODALS").BUTTONS.OK,
                  handler: async() => {
                    this.utility.getPlanDetail(this.envr.plans.bodyAnlaysis);
                   // this.router.navigate(["/tabs/book-analysis"]);
                  }
                }]
            );
          } else {
           // this.router.navigate(["/tabs/book-analysis"]);
           this.utility.getPlanDetail(this.envr.plans.bodyAnlaysis);
          }
        })
        .catch((err) => {
          loading.dismiss();
        });
    }
  }

  // goBack() {
  //   this.navController.back();
  // }
}
