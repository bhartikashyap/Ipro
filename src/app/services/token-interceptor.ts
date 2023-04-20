import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UtilService } from './util.service';
import { Storage } from "@capacitor/storage";
import { Router } from '@angular/router';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authenticationService: UtilService, private router: Router) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.authenticationService.getToken();
    console.log(token);
    if (token) {
     
      const cloned = request.clone({
        headers: request.headers.set(
          "Authorization",
          "auth_token " + token
        ),
      });

    



      // return next.handle(request).pipe(catchError(err => {
      //   console.log(err);
      //   if (err.status === 401) {
      //     // auto logout if 401 response returned from api
      //     // this.authenticationService.logout();
      //     // location.reload(true);
      //   }
      //   const error = err.error.message || err.statusText;
      //   return throwError(error);
      // }))

      //  next.handle(request).subscribe((res) => {
       
      //   let result: any = res;
      //   if (result?.body?.msg) {
      //     console.log(res)
      //     if (result.body.msg == "Token not found in request" || result.body.msg == "Unauthorized") {
      //       this.authenticationService.silentLogout();
      //      console.log(" in token here")

           
      //     }
          
           
      //   }
      //   return next.handle(cloned);
      // })
      return next.handle(cloned);
      
    }
    else{
      //this.router.navigate(['/login']);
    }
    return next.handle(request);
  }

}
