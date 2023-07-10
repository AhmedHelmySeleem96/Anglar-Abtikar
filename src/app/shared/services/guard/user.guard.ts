import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Apiservice } from '../crud/apiservice.service';

@Injectable({
  providedIn: 'root'
})

export class UserGuard implements CanActivate {

  UserIsLogin:any

  constructor(
    private _ApiserviceService:Apiservice,
    private _Router:Router){

  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {

      return this.UserLogin()

  }

UserLogin():any{
    if(this._ApiserviceService.isServer == false){

      let token = localStorage.getItem("Token")!
      let data = JSON.parse(token)


      if(token != null && token != undefined){
        let decode:any = jwtDecode(data.AccessToken)
     //   console.log(decode)
       // console.log(decode.RoleName)

        if(decode.RoleName == "Admin" || decode.RoleName == "User"){
          return true
        }else {
          return false
        }
      }else {
        this._Router.navigate([`/auth/login`])
        return false
      }

    }
}

}
