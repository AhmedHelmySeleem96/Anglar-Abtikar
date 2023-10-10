import { XtraAndPosBranchEpService } from './../../../shared/api/services/xtra-and-pos-branch-ep.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Apiservice } from 'src/app/shared/services/crud/apiservice.service';
import { LoginVm, PortalEpService, UserEpService, UserRequest } from 'src/app/shared/api';
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
  
  // branchData: { id: number; name: string }[] = [ 
  //   { id: 1, name: "فرع 1" }, 
  //   { id: 2, name: "فرع 2" }, 
  //   { id: 3, name: "فرع 3" }, 
  //   { id: 4, name: "فرع 4" }, 
  // ];
  branchData:any[] = [] ;

 
  selectedBranchId: number =0

  constructor(
    private toastr:ToastrService,
    private _Apiservice:Apiservice ,
    private UserEpService  : UserEpService,
    public _Router: Router,
    private PortalEpService : PortalEpService,
    private FormBuilder:FormBuilder,
    private XtraAndPosBranch:XtraAndPosBranchEpService
   ) 
   { 
    this.Formlogin=this.FormBuilder.group({ 
      UserName:new FormControl(null,[Validators.required]), 
      Password:new FormControl(null,[Validators.required]) ,
      selectedBranchId:[null,[Validators.required]],
      Rememberme:[false]
    })


  }
    ngOnInit(): void {
      // this.XtraAndPosBranch.httpGetBranchGetAllForDropDown$Response().subscribe((value : any)=>{
      //   console.log(value)
      //   this.branchData  = value
      // });

      this.XtraAndPosBranch.httpGetBranchGetAllForDropDown$Response().subscribe( 
        (response: any) => { 
          try { 
            // Parse the JSON array from the response body 
            const jsonArray = JSON.parse(response.body); 
            this.branchData = jsonArray; 
       console.log(jsonArray);
          } catch (error) { 
            console.error('Error parsing JSON:', error); 
            // Handle the error here 
          } 
        }, 
        (error) => { 
          console.error('HTTP request error:', error); 
          // Handle the HTTP request error here 
        } 
      );

    if(localStorage.getItem('RememberLogin') == 'true')
    { 
      let UserName=localStorage.getItem('UserName')
      this.Formlogin.get('UserName')?.setValue(UserName);

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

      this.Formlogin.get('Rememberme')?.setValue(true);

    } 

  }
  togglVisible():void
  {


  }

  submitlogin(forminfo:FormGroup)
  {
    // debugger
      let model :LoginVm = {
      userName:this.Formlogin.get('UserName')?.value,
      password:this.Formlogin.get('Password')?.value,
      branchId :this.Formlogin.get('selectedBranchId')?.value,
      rememberMe:this.Formlogin.get('Rememberme')?.value,
      companyId:1

    }
    // localStorage.setItem('RememberLogin',String(model.rememberMe))
        this.PortalEpService.httpPostPortalLogin({ body : model}).subscribe((Response :any)=>{
        let jsonData = JSON.parse(Response);
        console.log(jsonData.IsSuccess)
        if(jsonData.IsSuccess)
        {
        localStorage.setItem('RememberLogin',String(model.rememberMe))
        localStorage.setItem('usertoken',jsonData.Obj)
        const DecodedToken:any=jwtDecode(jsonData.Obj);
        const userInfo=DecodedToken;
        // console.log(userInfo.sub);
        localStorage.setItem('UserName',userInfo.sub)
        this.toastr.success(jsonData.Message)
        this._Router.navigate(['/home'])

        }else
        {
          this.toastr.error("Email or Password Is wrong Plz Try Again")
          localStorage.setItem('RememberLogin','false')
        }
    })

  }
  ngOnDestroy(): void {

  }


}
