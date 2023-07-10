import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Apiservice } from 'src/app/shared/services/crud/apiservice.service';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent implements OnInit,OnDestroy {
  SubscriptionArr: Subscription[] = [];
  adminLogin:boolean = false
  userLogin:boolean = false
  roles:string = ''
  searching:string = ''

  constructor(
    private translate:TranslateService,
    @Inject(DOCUMENT) private document: Document,
    private toastr:ToastrService,
    public _Apiservice:Apiservice) {}


  ngOnInit(): void {

  }

  changeThems(Theme:string){
    if(Theme == "Dark"){
      localStorage.setItem("Theme",'Dark')
      this.document.getElementsByTagName('body')[0].classList.add("active")
    }else if(Theme == "White"){
      localStorage.setItem("Theme",'White')
      this.document.getElementsByTagName('body')[0].classList.remove("active")
    }
  }

  changeLanguage(language:string){
    if(language == 'ar'){
      this.translate.use('ar')
      this.document.dir = "rtl"
      this.document.getElementsByTagName('html')[0].lang = 'ar'
      localStorage.setItem("USER_LANGUAGE",'ar')
      this._Apiservice.Language = 'ar'
    }else if(language == 'en'){
      this.translate.use('en')
      this.document.dir = "ltr"
      this.document.getElementsByTagName('html')[0].lang = 'en'
      localStorage.setItem("USER_LANGUAGE",'en')
      this._Apiservice.Language = 'en'
    }
  }

  logout(){
    localStorage.removeItem("Token")
  }

  search(){

  }

  ngOnDestroy(): void {
    for (let i = 0; i < this.SubscriptionArr.length; i++) {
      this.SubscriptionArr[i].unsubscribe()
    }
  }
}
