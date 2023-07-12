import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Apiservice } from '../crud/apiservice.service';
import { isPlatformServer } from '@angular/common';
import {  PLATFORM_ID, Inject  } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})


export class ErrorInterceptor implements HttpInterceptor {
  currentLang:string = ''
  errorArr:any[] = []
  isServer:boolean = false

  constructor(private toastr:ToastrService,@Inject(PLATFORM_ID) platformID:Object,private _ApiserviceService:Apiservice) {

    this.isServer = isPlatformServer(platformID)

  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(err=>{

        console.log(err)

       if(err.status == 404){


       }else if(err.status == 401 || err.status == 403){


       }else if(err.status == 400 ){

        this.toastr.error(err.error.Message)


       }else if(err.status == 415){



       }else if(err.status == 501){


       }else if(err.status == 0 || err.status == 500){


       }
        return throwError(()=> err )
      })
    )


  }
}
