import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from './environment.service';
import * as api from '../utility/api';

@Injectable({
  providedIn: "root",
})
export class ApiService extends EnvironmentService {
  constructor(private http: HttpClient) {
    super();
  }

  async loginUser(body: any = {}) {
    return await this.http.post(this.apiUrl + api.LOGIN_USER, body).toPromise();
  }

  async registerUser(body: any = {}) {
    return await this.http.post(this.apiUrl + api.REGISTER, body).toPromise();
  }

  async getQuestions() {
    return await this.http.get(this.apiUrl + api.GET_QUESTION).toPromise();
  }

  async forgotPassword(body: any = {}) {
    return await this.http
      .post(this.apiUrl + api.FORGOT_PASSWORD, body)
      .toPromise();
  }

  async getCountryList() {
    return await this.http.get(this.apiUrl + api.GET_COUNTRY).toPromise();
  }

  async getProfile() {
    return await this.http.get(this.apiUrl + api.GET_PROFILE).toPromise();
  }

  async checkZip(body: any = {}) {
    return await this.http.post(this.apiUrl + api.CHECK_ZIP, body).toPromise();
  }

  async checkEmail(email: string) {
    let body={email};
    return await this.http.post(this.apiUrl + api.CHECK_EMAIL, body).toPromise();
  }

  async checkTaxId(countryId: number,taxId:string) {
    let body={
      countryId:countryId ? Number(countryId) : null,
      taxId:taxId ? taxId.toString() : null
    };
    return await this.http.post(this.apiUrl + api.CHECK_TAX_ID, body).toPromise();
  }

  async updateProfile(body: any = {}) {
    return await this.http.post(this.apiUrl + api.UPDATE_PROFILE, body).toPromise();
  }

  async getPlanDetail(selected_plan:string) {
    let body={selected_plan}
     return await this.http.post(this.apiUrl + api.GET_PLAN,body).toPromise();
  }

  async createPayment(body: any = {}) {
    return await this.http.post(this.apiUrl + api.CREATE_PAYMENT, body).toPromise();
  }

  async paymentStatus(body:any  = {}) {
    return await this.http.post(this.apiUrl + api.CHECK_PAYMENT_STATUS, body).toPromise();
  }

  async proceedRegistration(body:any  = {}) {
    return await this.http.post(this.apiUrl + api.PROCEED_REGISTRATION, body).toPromise();
  }

  async submitAnswer(body:any  = {}) {
    return await this.http.post(this.apiUrl + api.SUBMIT_ANSWER, body).toPromise();
  }

  async logoutUser(body: any = {}) {
    return await this.http.post(this.apiUrl + api.LOGOUT_USER, body).toPromise();
  }
  async getShopCategory(body: any = {}) {
    return await this.http.post(this.apiUrl + api.GET_CATEGORY, body).toPromise();
  }
  async getProducts(body: any = {}) {
    return await this.http.post(this.apiUrl + api.GET_PRODUCTS, body).toPromise();
  }
  async addToCart(body: any = {}) {
    return await this.http.post(this.apiUrl + api.ADD_TO_CART, body).toPromise();
  }
   async removeFromCart(body: any = {}) {
    return await this.http.post(this.apiUrl + api.REMOVE_FROM_CART, body).toPromise();
  }
  async getCart(body: any = {}) {
    return await this.http.post(this.apiUrl + api.GET_CART, body).toPromise();
  }
  async cartPayment(body: any = {}) {
    return await this.http.post(this.apiUrl + api.CART_PAYMENT, body).toPromise();
  }
  async buyNow(body: any = {}) {
    return await this.http.post(this.apiUrl + api.BUY_NOW, body).toPromise();
  }
  async changePassword(body: any = {}) {
    return await this.http.post(this.apiUrl + api.CHANGE_PASS, body).toPromise();
  }
  async changeLanguage(body: any = {}) {
    return await this.http.post(this.apiUrl + api.CHANGE_LANG, body).toPromise();
  }
  async getVideo(body: any = {}) {
    return await this.http.post(this.apiUrl + api.GET_VIDEO_DURATION, body).toPromise();
  }
  async saveVideo(body: any = {}) {
    return await this.http.post(this.apiUrl + api.SAVE_VIDEO_DURATION, body).toPromise();
  }
  async getMembers(body: any = {}) {
    return await this.http.post(this.apiUrl + api.GET_MEMBERS, body).toPromise();
  }
  async getProspects(body: any = {}) {
    return await this.http.post(this.apiUrl + api.GET_PROSPECT, body).toPromise();
  }
  async saveNotes(body: any = {}) {
    return await this.http.post(this.apiUrl + api.SAVE_NOTES, body).toPromise();
  }

  async saveDiscount(body: any = {}) {
    return await this.http.post(this.apiUrl + api.SAVE_DISCOUNT, body).toPromise();
  }
  async dashboard(body: any = {}) {
    return await this.http.post(this.apiUrl + api.DASHBOARD, body).toPromise();
  }

  async checkQuestion(body: any = {}) {
    return await this.http.post(this.apiUrl + api.CHECK_QUESTION, body).toPromise();
  }
  async mySponsor(body: any = {}) {
    return await this.http.post(this.apiUrl + api.MY_SPONSOR, body).toPromise();
  }

  async defaultDiscount(body: any = {}) {
    return await this.http.post(this.apiUrl + api.DEFAULT_DISCOUNT, body).toPromise();
  }

  async defaultDashboard(body: any = {}) {
    return await this.http.post(this.apiUrl + api.DEFAULT_DASHBOARD, body).toPromise();
  }

  async manageProducts(body: any = {}) {
    return await this.http.post(this.apiUrl + api.MANAGE_PRODUCTS, body).toPromise();
  }

  async subscribeProducts(body: any = {}) {
    return await this.http.post(this.apiUrl + api.SUBSCRIBE_PRODUCT, body).toPromise();
  }
  async placeMember(body: any = {}) {
    return await this.http.post(this.apiUrl + api.PLACE_MEMBER, body).toPromise();
  }
  async searchMember(body: any = {}) {
    return await this.http.post(this.apiUrl + api.SEARCH_MEMBER, body).toPromise();
  }
  async getLowLevel(body: any = {}) {
    return await this.http.post(this.apiUrl + api.GET_LOW_LEVEL, body).toPromise();
  }

  async userForPlacement(body: any = {}) {
    return await this.http.post(this.apiUrl + api.USER_FOR_PLACEMENT, body).toPromise();
  }

  async placementTree(body: any = {}) {
    return await this.http.post(this.apiUrl + api.PLACEMENT_TREE, body).toPromise();
  }

  async prospectDashboard(body: any = {}) {
    return await this.http.post(this.apiUrl + api.PROSPECT_DASHBOARD, body).toPromise();
  }

  async paymentOption(body: any = {}) {
    return await this.http.post(this.apiUrl + api.PAYMENT_OPTION, body).toPromise();
  }

  async checkIban(body: any = {}) {
    return await this.http.post(this.apiUrl + api.CHECK_IBAN, body).toPromise();
  }

  async commissionPayment(body: any = {}) {
    return await this.http.post(this.apiUrl + api.COMMISION_PAYMENT_OPTION, body).toPromise();
  }

  async aboPayment(body: any = {}) {
    return await this.http.post(this.apiUrl + api.ABO_PAYMENT_OPTION, body).toPromise();
  }

  async codeQR(body: any = {}) {
    return await this.http.post(this.apiUrl + api.QR_CODE, body).toPromise();
  }


  async deletPayment(body: any = {}) {
    return await this.http.post(this.apiUrl + api.DELETE_PAYMENT_OPTION, body).toPromise();
  }



  


  
  

}
