import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Apiservice } from 'src/app/shared/services/crud/apiservice.service';
import { LoginVm, UserEpService, UserRequest } from 'src/app/shared/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit , OnDestroy {

  SubscriptionArr: Subscription[] = []
  showpass:boolean = true

  Formlogin: FormGroup = new FormGroup(
    {
      UserName: new FormControl(null),
      Password: new FormControl(null)
    }
  )

  constructor(
    private toastr:ToastrService,
    private _Apiservice:Apiservice ,
    private UserEpService  : UserEpService
,
    public _Router: Router) {
      this.isLogin()
    }

get UserName() {
  return this.Formlogin.get('UserName')
}
get Password() {
  return this.Formlogin.get('Password')
}

  ngOnInit(): void {



    //console.log(JSON.parse(token))
  }


isLogin(){
  let token = localStorage.getItem("Token")!
  let data = JSON.parse(token)
  if(data != null && data.AccessToken != null){
    this._Router.navigate(['/home'])
  }
 // let decode = jwtDecode(data.AccessToken)
  //console.log(decode)
}


  login(Form: FormGroup) {

    let model :LoginVm = {
      userName:this.UserName?.value,
      password:this.Password?.value,
      rememberMe: true,
      branchId :1

    }

    this.UserEpService.httpPostLogin({ body : model}).subscribe((value:any)=>{
      let jsonData = JSON.parse(value);
        this.toastr.success(jsonData.Message)
        this._Router.navigate(['/home'])
    })

  }





  ngOnDestroy(): void {

  }


}
