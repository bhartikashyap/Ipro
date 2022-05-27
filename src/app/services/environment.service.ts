import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor() { }

  get apiUrl() {
    return environment.baseurl;
  }

  get fileUrl() {
    return environment.fileurl;
  }

  get production() {
    return environment.production;
  }

  get plans() {
    return environment.plans;
  }

  get videosGerman() {
    return environment.videosGermany;
  }
  get videosEnglish() {
    return environment.videosEnglish;
  }

  get pdfGerman() {
    return environment.germanyPdfs;
  }
  get pdfEnglish() {
    return environment.englishPdfs;
  }
  getEnglishError(){
    return environment.englishErrors;
  }
  getGermanError(){
    return environment.englishErrors;
  }
}
