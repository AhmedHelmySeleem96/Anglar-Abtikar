import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Apiservice } from '../../services/crud/apiservice.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit,OnDestroy {
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

  UserLogin(){
    let token = localStorage.getItem("Token")!
    let data = JSON.parse(token)
    if(data != null && data.AccessToken != null){
        this.userLogin = true
    }
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
    this.userLogin = false
  }

  search(){

  }

  ngOnDestroy(): void {
    for (let i = 0; i < this.SubscriptionArr.length; i++) {
      this.SubscriptionArr[i].unsubscribe()
    }
  }
}
