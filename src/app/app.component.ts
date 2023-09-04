import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { SwRegistrationOptions, SwUpdate } from '@angular/service-worker';
import { TranslateService } from '@ngx-translate/core';
import { Apiservice } from './shared/services/crud/apiservice.service';
import {ApiConfiguration} from './shared/api'
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Abtikar';

  constructor(
    private _Apiservice:Apiservice,
    register:SwRegistrationOptions,
    private apiConfiguration :ApiConfiguration,
    updates: SwUpdate,
    public _Router: Router,
    private translate:TranslateService,
    @Inject(DOCUMENT) private document: Document) {
      apiConfiguration.rootUrl=environment.url;
       console.log(`Service-Worker Register: ${register.enabled}`)
       console.log(`Service-Worker isEnabled: ${updates.isEnabled}`)

      // updates.available.subscribe(event => {
      // updates.activateUpdate().then(() => document.location.reload());
      // })

     }


  ngOnInit(): void {
    // let token = localStorage.getItem("Token")!
    // let data = JSON.parse(token)
    // if(data == null || data.AccessToken == null){
    //   this._Router.navigate(['/auth/login'])}

    const headTag = this.document.getElementsByTagName('head')[0] as HTMLHeadElement;
    //
    const bundleName =  'bootstrap.min.css';
    const newLink = this.document.createElement('link');
    newLink.rel = 'stylesheet';
    newLink.id = 'bootstrap.min.css';
    newLink.href = bundleName;
    newLink.media = 'all'
    headTag.appendChild(newLink);
    //
    const bundleName2 =  'toastr.css';
    const newLink2 = this.document.createElement('link');
    newLink2.rel = 'stylesheet';
    newLink2.id = 'toastr.css';
    newLink2.href = bundleName2;
    newLink2.media = 'all'
    headTag.appendChild(newLink2);
    //
    const bundleName3 =  'styles.css';
    const newLink3 = this.document.createElement('link');
    newLink3.id = 'styles.css';
    newLink3.rel = 'preload'
    newLink3.as = "style"
    newLink3.href = bundleName3;
    newLink3.media = 'all'
    newLink3.onload = function(e){
      newLink3.rel = 'stylesheet';
    }
    headTag.appendChild(newLink3);
    //
    const bundleName4 =  'swiper-bundle.min.css';
    const newLink4 = this.document.createElement('link');
    newLink4.rel = 'stylesheet';
    newLink4.id = 'swiper-bundle.min.css';
    newLink4.href = bundleName4;
    newLink4.media = 'all'
    headTag.appendChild(newLink4);
    //


    if(this._Apiservice.isServer == false){

      let getLang = localStorage.getItem("USER_LANGUAGE")
      if(getLang != null){

        if(getLang == 'ar'){
          this.document.dir = "rtl"
          this.document.getElementsByTagName('html')[0].lang = 'ar'
          this.translate.use("ar")
          this._Apiservice.Language = "ar"
        }else if(getLang == 'en'){
          this.document.dir = "ltr"
          this.document.getElementsByTagName('html')[0].lang = 'en'
          this.translate.use("en")
          this._Apiservice.Language = "en"
        }
      }else {
        this.document.dir = "rtl"
        this.document.getElementsByTagName('html')[0].lang = 'ar'
        localStorage.setItem("USER_LANGUAGE",'ar')
        this.translate.use("ar")
        this._Apiservice.Language = "ar"
      }

      let getThem = localStorage.getItem("Theme")
      if(getThem != null || getThem != undefined){
        if(getThem == "Dark"){
          this.document.getElementsByTagName('body')[0].classList.add("active")
        }else if(getThem == "White"){
          this.document.getElementsByTagName('body')[0].classList.remove("active")
        }
      }

     }




  }


}
