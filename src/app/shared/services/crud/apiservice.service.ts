import { HttpClient } from '@angular/common/http';
import {  Inject, Injectable, PLATFORM_ID } from '@angular/core';
import jwtDecode from 'jwt-decode';
import {  Observable } from 'rxjs';
import { isPlatformServer } from '@angular/common';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class Apiservice {

 public isLoading:boolean = true
 public isServer:boolean = false
 public Language:string = 'ar'


  constructor(
    @Inject(PLATFORM_ID) platformID:Object,
    private _HttpClient:HttpClient)
    {
    this.isServer = isPlatformServer(platformID)
    this.language()
    }


// loading(){
//  setTimeout(() => {
//   this.isLoading = false
//  }, 2500);
// }

language():any{
  if(this.isServer == false){
    let x = localStorage.getItem("USER_LANGUAGE")
    if( x == undefined || x == null){
      this.Language  = "en"
    }else {
      this.Language  = x
    }
  return this.Language
}
}

get<T>(controller:string , actionUrl?:string):Observable<T>{
    if (actionUrl == undefined) {
      return this._HttpClient.get<T>(`${environment.url}/${controller}`)
    } else {
      return this._HttpClient.get<T>(`${environment.url}/${controller}/${actionUrl}`)
    }
}

getById<T>( controller:string , modelID:number | string , actionUrl?:string):Observable<T> {
    if (actionUrl == undefined) {
      return this._HttpClient.get<T>(`${environment.url}/${controller}/${modelID}`)
    } else {
      return this._HttpClient.get<T>(`${environment.url}/${controller}/${actionUrl}/${modelID}`)
    }
}

post<T>(controller:string , model:T , actionUrl?:string):Observable<T> {
    if (actionUrl == undefined) {
      return this._HttpClient.post<T>(`${environment.url}/${controller}/`,model)
    }else{
      return this._HttpClient.post<T>(`${environment.url}/${controller}/${actionUrl}/`,model)
    }
}

delete<T>(controller:string , modelID:any , actionUrl?:string):Observable<T>{
    if (actionUrl == undefined) {
      return this._HttpClient.delete<T>(`${environment.url}/${controller}/${modelID}`)
    }else{
      return this._HttpClient.delete<T>(`${environment.url}/${controller}/${actionUrl}/${modelID}`)
    }
}

put<T>(controller:string , model:T  , actionUrl?:string ):Observable<T>{
    if (actionUrl == undefined) {
      return this._HttpClient.put<T>(`${environment.url}/${controller}/`,model)
    }else{
      return this._HttpClient.put<T>(`${environment.url}/${controller}/${actionUrl}/`,model)
    }
}

getrating<T>(userID:string,productID:number):Observable<T>{
    return this._HttpClient.get<T>(`${environment.url}/product/${userID}/${productID}`)
}

}
