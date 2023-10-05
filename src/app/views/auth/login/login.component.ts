import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Apiservice } from 'src/app/shared/services/crud/apiservice.service';
import { LoginVm, UserEpService, UserRequest } from 'src/app/shared/api';
import { json, response } from 'express';
import { userInfo } from 'os';
import {FormsModule}from'@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit , OnDestroy {

  
  
  
  SubscriptionArr: Subscription[] = []
  showpass:boolean = true
  Formlogin: FormGroup;
  
  branchData: { id: number; name: string }[] = [ 
    { id: 1, name: "فرع 1" }, 
    { id: 2, name: "فرع 2" }, 
    { id: 3, name: "فرع 3" }, 
    { id: 4, name: "فرع 4" }, 
  ]; 
 
  selectedBranchId: number =0

  constructor(
    private toastr:ToastrService,
    private _Apiservice:Apiservice ,
    private UserEpService  : UserEpService,
    public _Router: Router,
    private FormBuilder:FormBuilder
   ) 
   { 
    this.Formlogin=this.FormBuilder.group({ 
      UserName:new FormControl(null,[Validators.required]), 
      Password:new FormControl(null,[Validators.required]) ,
      selectedBranchId:[null,[Validators.required]],
      Rememberme:['']
    })


  }
    ngOnInit(): void {

    if(localStorage.getItem('RememberLogin') == 'true')
    { 
      this.Formlogin.get('UserName')?.setValue('Al Ibtekar User');

      const token=localStorage.getItem('usernamerememeberd');
      if  (token != null)
      {
        const DecodedToken:any=jwtDecode(token);
        const userInfo=DecodedToken;
        console.log(userInfo);
        this.Formlogin.get('UserName')?.setValue(localStorage.getItem('usernamerememeberd'));

        this.Formlogin.get('UserName')?.setValue(DecodedToken.userName);
        this.Formlogin.get('Password')?.setValue(DecodedToken.password);

      }

      this.Formlogin.get('Rememberme')?.setValue('true');

    } 

  }
  togglVisible():void
  {


  }

  submitlogin(forminfo:FormGroup)
  {
      let model :LoginVm = {
      userName:this.Formlogin.get('UserName')?.value,
      password:this.Formlogin.get('Password')?.value,
      branchId :this.Formlogin.get('selectedBranchId')?.value,
      rememberMe:this.Formlogin.get('Rememberme')?.value,


    }
    console.log(this.Formlogin.invalid);
    console.log(model.userName,model.password,model.branchId,model.rememberMe);
    localStorage.setItem('RememberLogin',String(model.rememberMe))

       this.UserEpService.httpPostLogin({ body : model}).subscribe((Response :any)=>{
        if (Response.issuccess)
        {
        let jsonData = JSON.parse(Response);
        localStorage.setItem('usertoken',jsonData.token)

        const DecodedToken:any=jwtDecode(jsonData.token);
        const userInfo=DecodedToken;
        console.log(userInfo);
          
        this.toastr.success(jsonData.Message)
        this._Router.navigate(['/home'])

        }else
        {
          this.toastr.success("Email or Password Is wrong Plz Try Again")
          localStorage.setItem('RememberLogin','false')
        }
    })

  }
  ngOnDestroy(): void {

  }


}
