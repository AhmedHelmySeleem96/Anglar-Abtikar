import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpEventType,
} from '@angular/common/http';
import { Observable, catchError, of, finalize, tap, filter } from 'rxjs';
import { Apiservice } from '../crud/apiservice.service';


@Injectable({
  providedIn: 'root'
})


export class InterceptorServices implements HttpInterceptor {

  constructor(private _ApiserviceService:Apiservice ) {

  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this._ApiserviceService.isLoading = true

    // if(this._ApiserviceService.getToken() != '' && this._ApiserviceService.getToken() != undefined && this._ApiserviceService.getToken() != null){
    //   request = request.clone({
    //     headers: request.headers.set('Authorization', `Bearer ${this._ApiserviceService.getToken()}`),
    //     reportProgress: true,
    //   });

    // }

    return next.handle(request).pipe(
      catchError((error)=>{

        setTimeout(() => {
          this._ApiserviceService.isLoading = false
        }, 1500);

        return of(error)
      }),finalize(()=>{

        setTimeout(() => {
          this._ApiserviceService.isLoading = false
        }, 1500);

      })
    )
  }
}
