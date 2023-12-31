import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { UserEpService, UserRequest } from 'src/app/shared/api';
import { Apiservice } from 'src/app/shared/services/crud/apiservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit,OnDestroy {
  SubscriptionArr: Subscription[] = []
  showpass:boolean = true

  FormRegister: FormGroup = new FormGroup(
    {
      UserName: new FormControl(null),
      Password: new FormControl(null),
      Email: new FormControl(null),
      NameAr: new FormControl(null),
      PhoneNumber: new FormControl(null)
    }
  )

  constructor(
    private toastr:ToastrService,
    private _Router: Router,
    private _Apiservice:Apiservice,
    private UserEpService  : UserEpService
    ) {
      this.isLogin()
  }

get UserName() {
    return this.FormRegister.get('UserName')
}
get Password() {
  return this.FormRegister.get('Password')
}
get Email() {
  return this.FormRegister.get('Email')
}
get NameAr() {
  return this.FormRegister.get('NameAr')
}
get PhoneNumber() {
  return this.FormRegister.get('PhoneNumber')
}




  ngOnInit(): void {

  }

  isLogin(){
    let token = localStorage.getItem("Token")!
    let data = JSON.parse(token)
    if(data != null && data.AccessToken != null){
      this._Router.navigate(['/user/home'])
    }
   // let decode = jwtDecode(data.AccessToken)
    //console.log(decode)
  }

  Submit(Form:FormGroup) {

    let model :UserRequest = {
      userName:this.UserName?.value,
      password:this.Password?.value,
      email:this.Email?.value,
      nameAr: this.NameAr?.value,
      phoneNumber:this.PhoneNumber?.value,
    }


    console.log(model)
    this.UserEpService.httpPostRegister({ body : model}).subscribe((value:any)=>{
      let jsonData = JSON.parse(value);
        this.toastr.success(jsonData.Message)
    })


// let CallApi:Subscription = this._Apiservice.post("User/Register",model).subscribe({
//   next:(res:any)=>{

//     if(res.IsSuccess == true && res.Message == "Success"){
//       this._Router.navigate([`/auth/login`])

//     }
//   }
// })
// this.SubscriptionArr.push(CallApi)

  }


  ngOnDestroy(): void {
    for (let i = 0 ;i < this.SubscriptionArr.length; i++) {
      this.SubscriptionArr[i].unsubscribe()
    }
  }
}
