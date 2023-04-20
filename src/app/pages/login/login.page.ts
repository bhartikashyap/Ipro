import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MenuController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";
import { message, session } from "src/app/utility/message";
import { pattern } from "src/app/utility/pattern";
import { timer } from 'rxjs';
@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  get formControls() {
    return this.form.controls;
  }
  submitted = false;
  validationMessage: any;
//   public customClas:any='logo1 animate__animated animate__slideInUp animate__slow';
//   public customClas1:any='';
//   public loginAnimation:any='';
//  public val=10;
  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private _translate: TranslateService,
    private utility: UtilService,
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {

  }
  type = "password";
  ionViewDidEnter() {
    this.menuCtrl.enable(false);
   // this.val=10;
//timer(3000).subscribe(() => (this.val = -1));

    // this.customClas='logo1 animate__animated animate__slideInUp animate__slow';
    // this.customClas1='';
    // this.loginAnimation=''
  }
  initForm() {
    this.form = this.formBuilder.group({
      email: [
        "",
        [
          Validators.required,
         // Validators.pattern(pattern.email),
          Validators.maxLength(100),
        ],
      ],
      password: ["", [Validators.required, Validators.maxLength(100)]],
    });
    let messages = this.utility.translateText('MSG')
    this.validationMessage = {
      email: [
        { type: "required", message: messages.required },
        { type: "pattern", message: messages.email },
        { type: "maxlength", message: message.maxLength(100 ,messages.maxLength,messages.characters) },
      ],
      password: [
        { type: "required", message: messages.required },
        { type: "pattern", message: messages.password },
        { type: "maxlength", message: message.maxLength(100 ,messages.maxLength,messages.characters) },
      ],
    };
  }
  ngOnInit() {
    this.initForm();
    this.menuCtrl.enable(false);
   
  }

  changeType() {
    if (this.type == "password") {
      this.type = "text";
    } else {
      this.type = "password";
    }
  }
  signup() {

    this.router.navigate(["/register"]);
  //   this.customClas='logo1 animate__animated animate__rotateIn animate__slow';
    
  //   this.customClas1='change'
  //   setTimeout(
  //     ()=>{
  //       this.router.navigate(["/register"]);

  // },1000)
  }
  async login() {
    this.submitted = true;
    if (this.form.valid && this.utility.checkNetwork()) {
      this.submitted = false;
      let params: any = this.form.getRawValue();
      params['notificationToken'] = this.utility.FCMToken;
      console.log(params)
      let loading = await this.utility.presentLoading();
      this.apiService
        .loginUser(params) 
        .then((res: any) => {
          loading.dismiss();
          if (res.status == 1) {
            let token = res.jwt;
            let data = res.data;
            this.utility.checkQuestionaire();
            this.utility.setStorage(session.AUTH_STATUS, 1);
            this.utility.setStorage(session.AUTH_TOKEN, token);
            this.utility.setStorage(session.AUTH_USER, JSON.stringify(data));
            this.utility.userRole=data.userRole;
            this.utility.setStorage('userRole',data.userLevelStatus);
            this.utility.setStorage('firstLogin', new Date());
            // this.customClas='logo1 animate__animated animate__flip animate__slow';
            // this.customClas1='change';
            // this.loginAnimation = 'animate__animated  animate__fast animate__fadeOutUp';
            if(data.userRole == 'Prospect'){
              ///animation
            //   setTimeout(
            //     ()=>{
            //   this.val = 10;

            //     },500)
            //   setTimeout(
            //     ()=>{
            //       this.utility.goNext(["/tabs/area-of-interest"]);
            // },1000)

            ///animation
              this.router.navigate(["/tabs/area-of-interest"]);
            }
            else{
              let dash;
              // if(data.defaultDashboard != undefined && data.defaultDashboard != '' && data.defaultDashboard != null){
              //   dash = data.defaultDashboard;
              // }
             
              // else{
                dash = data.userLevelStatus;
              // }
              this.utility.setStorage('CHANGE_DASH',dash);
              this.utility.goNext(["/tabs/dashboard/"+dash])
              
            //   setTimeout(
            //     ()=>{
            //       this.utility.goNext(["/tabs/dashboard/"+dash])

          
            // },1000)
            }

          } else if(res.status == 2){
           
              this.utility.presentToast(this.utility.translateText('MSG').verifyEmail,"bottom");

            }
            else{
              this.utility.presentToast(res?.msg,"bottom");
              //this.utility.presentToast(this.utility.translateText('MSG').someissueInNetwork,"bottom");

           
          }
        })
        .catch((err: any) => {
          console.log(err);
          loading.dismiss();
        });
      console.log(params);
    }
  }

  animation(){
    // this.customClas='logo1 animate__animated animate__flip animate__slow';
    // this.customClas1='change'
    // this.utility.goNext(["/splash"]);

  }

  ngOnDestroy() {
   
    // this.customClas='logo1 animate__animated animate__flip animate__slow';
    // this.customClas1='change'
  }

}
