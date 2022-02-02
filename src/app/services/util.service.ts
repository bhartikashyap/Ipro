import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Network } from '@capacitor/network';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: "root",
})
export class UtilService {
  constructor(
    private toastController: ToastController,
    private loadingController: LoadingController,
    private router: Router,
    private alertController: AlertController
  ) {}

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 5000,
    });
    toast.present();
  }

  async presentAlert(header, subHeader, message, buttons) {
    const alert = await this.alertController.create({
      header: header,
      mode: "ios",
      subHeader: subHeader,
      message: message,
      buttons: buttons,
    });
    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Please wait...",
      translucent: true,
      cssClass: "custom-class custom-loading",
    });
    loading.present();
    return await loading;
  }

  setStorage = async (key: string, data: any) => {
    await Storage.set({
      key: key,
      value: data,
    });
  };

  getStorage = async (key: string) => {
    const { value } = await Storage.get({ key: key });
    return value;
  };

  removeStorage = async (key: string) => {
    await Storage.remove({ key: key });
  };

  getToken() {
    if (localStorage.getItem("CapacitorStorage.AUTH_TOKEN")) {
      return localStorage.getItem("CapacitorStorage.AUTH_TOKEN");
    } else {
      return null;
    }
  }
  async checkNetwork() {
    const status = await Network.getStatus();
    if (status.connectionType == "none" || status.connectionType == "unknown") {
      this.presentAlert(
        "Error",
        "",
        "Please check your network connection and then try again.",
        ["OK"]
      );
      return false;
    } else {
      return true;
    }
  }

  checkLiveUrl(url) {
    let status = false;
    if (url) {
      if (url.indexOf("https:") != -1) {
        status = true;
      } else if (url.indexOf("http:") != -1) {
        status = true;
      } else {
        status = false;
      }
    }
    return status;
  }
}
