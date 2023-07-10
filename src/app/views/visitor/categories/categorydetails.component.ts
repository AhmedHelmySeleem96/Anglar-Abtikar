import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ItemGroup } from 'src/app/shared/models/item-group';
import { ItemUnit } from 'src/app/shared/models/item-unit';
import { Apiservice } from 'src/app/shared/services/crud/apiservice.service';
import { environment } from 'src/environments/environment';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-categorydetails',
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.css']
})
export class CategorydetailsComponent  implements OnInit,OnDestroy {
  categoryinfo:ItemGroup = {
    Id: 0,
    CreatedDate: '',
    IsParent: false,
    ItemGroupImage: '',
    Level: 0,
    NameAr: '',
    NameEn: '',
    Notes: '',
    ParentCode: '',
    Item: []
  }
  categoryArr:ItemGroup[] = []
  cartitemsArr:ItemUnit[] = []
  ItemUnitArr:ItemUnit[] = []
  SubscriptionArr:Subscription[] = []
  whatsapp:string = environment.whatsappUrl
  gmail:string = environment.gmailUrl
  twitter:string = environment.twitterUrl
  facebook:string = environment.facebookUrl
  urlshare:string = `${environment.host}productdetails`
  categorySlide: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    autoHeight: true,
    grabCursor:true,
    updateOnWindowResize:true,
    allowTouchMove: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      425: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 6,
      },
      991: {
        slidesPerView: 10,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true
  };
  constructor(
    private toastr:ToastrService,
    private _Router:Router,
    private activeRoute:ActivatedRoute,
    @Inject(DOCUMENT) private document: Document,public _Apiservice:Apiservice){

  }

ngOnInit(): void {
  this.getCategory()
  this.getAllCategory()
  this.getCart()
}

getCart(){
    let getCartLocal:any = localStorage.getItem("VisitorCart")
    if(getCartLocal != null){
    this.cartitemsArr = JSON.parse(getCartLocal)
    this.totalCart()
  }
}

addToCart(item:ItemUnit){
    if(item.Qty == 0){
      this.toastr.error("error",'عفوا كمية المنتج صفر')

      return
    }

    let IsExist = this.cartitemsArr.find(el=>el.Id == item.Id)

    if(IsExist == undefined){
        this.toastr.success("success",`تم اضافة المنتج ${item.NameAr} للسلة`)

      this.cartitemsArr.push(item)
    }
    this.cartitemsArr = this.cartitemsArr.filter(el=>Number(el.Qty) > 0)
    localStorage.setItem("VisitorCart",JSON.stringify(this.cartitemsArr))
}

getItemTotal(item:ItemUnit) {
   return ( item.Quantity && item.Price) ? Number(item.Price) * item.Quantity : 0;
}

removeCart(item:ItemUnit){
this.cartitemsArr = this.cartitemsArr.filter(el=>el.Id != item.Id)
localStorage.setItem("VisitorCart",JSON.stringify(this.cartitemsArr))
}

downQuantity(cartitem:ItemUnit){

    cartitem.Quantity--

    if(Number(cartitem.Quantity) > Number(cartitem.Qty) || Number(cartitem.Qty) <= 0){
      cartitem.Quantity = Number(cartitem.Qty)
    }

    if(cartitem.Quantity < 0 ){
      cartitem.Quantity = 1
      this.totalCart()
      return
    }
    localStorage.setItem("VisitorCart",JSON.stringify(this.cartitemsArr))
}

upQuantity(cartitem:any){

      cartitem.quantity++

    if(cartitem.quantity > Number(cartitem.Qty)){
        cartitem.quantity = Number(cartitem.Qty)
        this.totalCart()
        return
    }
   localStorage.setItem("VisitorCart",JSON.stringify(this.cartitemsArr))
}

totalCart(){
    return this.cartitemsArr.reduce(
      (price,item)=>{
        price += this.getItemTotal(item)
        return price
      },0
  )
}

getAllCategory(){
    let CallApi:Subscription=this._Apiservice.get("itemgroup/getall").subscribe({
      next:(res:any)=>{
        if(res.IsSuccess == true && res.Message  == "success"){
          this.categoryArr = res.Obj
        }
      }
    })
  this.SubscriptionArr.push(CallApi)
}

getCategory(){
   let changeRout:Subscription = this.activeRoute.data.subscribe({
      next:(resolve:any)=>{
        this.categoryinfo = resolve[0].Obj
        for (let i = 0; i < this.categoryinfo.Item.length; i++) {
          for (let x = 0; x < this.categoryinfo.Item[i].ItemUnits.length; x++) {
            this.categoryinfo.Item[i].ItemUnits[x].Qty = i+2
            this.ItemUnitArr.push(this.categoryinfo.Item[i].ItemUnits[x])
          }
        }
      }
    })
  this.SubscriptionArr.push(changeRout)
}

clear(){
 this.cartitemsArr = []
  localStorage.removeItem("VisitorCart")
}

buy(){
localStorage.setItem("VisitorCart",JSON.stringify(this.cartitemsArr))
this._Router.navigate(["/checkout"])
}

ngOnDestroy(): void {
}

}
