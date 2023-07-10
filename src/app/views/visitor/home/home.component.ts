import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apiservice } from 'src/app/shared/services/crud/apiservice.service';
import { SwiperOptions } from 'swiper';
import { ItemGroup } from 'src/app/shared/models/item-group';
import { Router } from '@angular/router';
import * as signalR from '@microsoft/signalr'
import { ItemUnit } from 'src/app/shared/models/item-unit';
import { Website } from 'src/app/shared/models/website';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit,OnDestroy {
  SubscriptionArr:Subscription[] = []
  Categories:ItemGroup[] = []
  ItemUnitArr:ItemUnit[] = []
  ItemUnitSelect:ItemUnit[] = []
  cartitemsArr:ItemUnit[] = []
  bigSlider:Website[] = []
  smallBanner1:Website = {
    Id: 0,
    ArabicHeading: '',
    EnglishHeading: '',
    ArabicContent: '',
    EnglishContent: '',
    ImagePath: '',
    Type: 0
  }
  smallBanner2:Website = {
    Id: 0,
    ArabicHeading: '',
    EnglishHeading: '',
    ArabicContent: '',
    EnglishContent: '',
    ImagePath: '',
    Type: 0
  }
  bigSlide: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    autoHeight: true,
    updateOnWindowResize:true,
    grabCursor:true,
    allowTouchMove: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: true
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true
  };
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
  Hub_Connection?:signalR.HubConnection;

constructor(
  private _Router:Router,
  private toastr:ToastrService,
  public _Apiservice:Apiservice){

}

isLogin(){
  let token = localStorage.getItem("Token")!
  let data = JSON.parse(token)
  if(data != null && data.AccessToken != null){
    this._Router.navigate(['/user/home'])
    return true
  }else {
      return false
  }
}

tranformNumber(string:string){
  return Number(string)
}

ngOnInit(): void {

 // console.log(this.isLogin())

  if(this.isLogin() == false){

    this.startConnection()

    if(this.Hub_Connection?.state == "Connecting"){
      this.askServerAddItemGroup()
      this.askServerUpdateItemGroup()
      this.askServerDeleteItemGroup()
    }else {
      this.toastr.error("Error Hub Connection")
    }

this.getAllCategories()
//this.getAllItemUnit()
this.getCart()
//this.getBigBanner()
this.getSmallBanner1()
//this.getSmallBanner2()

}

}

startConnection(){
  this.Hub_Connection = new signalR.HubConnectionBuilder()
  .withUrl(`${environment.signalrUrl}ItemGroup`,{
  skipNegotiation:true,
  transport:signalR.HttpTransportType.WebSockets,
  }).build()
  this.Hub_Connection.start().then(()=>{
 // console.clear()
  }).catch(err => {console.log(`Error Hub Connection`,err)})
}

// item group
askServerAddItemGroup(){
    this.Hub_Connection?.on(`AddItemGroup`,(res:ItemGroup)=>{
    this.Categories.push(res)
  })
}

askServerDeleteItemGroup(){
    this.Hub_Connection?.on(`DeleteItemGroup`,(res:ItemGroup)=>{
    this.Categories = this.Categories.filter(e=>e.Id != res.Id)
  })
}

askServerUpdateItemGroup(){
    this.Hub_Connection?.on(`UpdateItemGroup`,(res:ItemGroup)=>{
      let itemGroupExsit = this.Categories.find(e=>e.Id = res.Id)
      if(itemGroupExsit != undefined){
        itemGroupExsit.IsParent = res.IsParent
        itemGroupExsit.CreatedDate = res.CreatedDate
        itemGroupExsit.ItemGroupImage = res.ItemGroupImage
        itemGroupExsit.Level = res.Level
        itemGroupExsit.NameAr = res.NameAr
        itemGroupExsit.NameEn = res.NameEn
        itemGroupExsit.ParentCode = res.ParentCode
        itemGroupExsit.Notes = res.Notes
    }
  })
}
// item group
getBigBanner(){
 let CallApi:Subscription= this._Apiservice.get("market/website/GetById?id=1").subscribe({
    next:(res:any)=>{
      console.log(res)
      this.bigSlider = res.Obj
    }
  })
  this.SubscriptionArr.push(CallApi)
}

getSmallBanner1(){
 let CallApi:Subscription=this._Apiservice.get("market/website/GetById?id=2").subscribe({
    next:(res:any)=>{
      console.log(res)
      //this.smallBanner1 = res.Obj[0]
    }
  })
  this.SubscriptionArr.push(CallApi)
}

getSmallBanner2(){
 let CallApi:Subscription=this._Apiservice.get("market/website/GetById?id=3").subscribe({
    next:(res:any)=>{
      this.smallBanner2 = res.Obj[0]
    }
  })
  this.SubscriptionArr.push(CallApi)
}

getAllCategories(){
 let CallApi:Subscription=this._Apiservice.get("itemgroup/getall").subscribe({
    next:(res:any)=>{
      if(res.IsSuccess == true && res.Message  == "success"){
        this.Categories = res.Obj
      }
    }
  })
  this.SubscriptionArr.push(CallApi)
}

getAllItemUnit(){
  let CallApi:Subscription=this._Apiservice.get("itemUnit/getall").subscribe({
    next:(res:any)=>{

      for (let i = 0; i < res.length; i++) {
        res[i].Quantity = 1
        res[i].Qty = i+3
      }

      this.ItemUnitArr = res
      this.ItemUnitSelect = this.ItemUnitArr
    }
  })
  this.SubscriptionArr.push(CallApi)
}

addToCart(item:ItemUnit){

for (let x = 0; x < this.ItemUnitSelect.length; x++) {
  for (let i = 0; i < this.cartitemsArr.length; i++) {
    if(this.ItemUnitSelect[x].Id == this.cartitemsArr[i].Id){
      this.cartitemsArr[i].Qty = this.ItemUnitSelect[x].Qty
      if(this.cartitemsArr[i].Quantity > Number(this.ItemUnitSelect[x].Qty)){
        this.cartitemsArr[i].Quantity = Number(this.ItemUnitSelect[x].Qty)
      }
    }
  }
}

if(item.Qty == 0){
    this.toastr.error("error",'Sorry Product Quantity = 0')

  return
}
//
let IsExist = this.cartitemsArr.find(el=>el.Id == item.Id)
// Add To Cart
if(IsExist == undefined){
    this.toastr.success("success",`تم اضافة المنتج ${item.NameAr} للسلة`)

  this.cartitemsArr.push(item)
}
// if exist
else{
  IsExist.Price = this.ItemUnitSelect.find(el=>el.Id == item.Id)!.Price
  IsExist.Qty = this.ItemUnitSelect.find(el=>el.Id == item.Id)!.Qty
}
// all products Qty = Qty Products cartitem
for (let x = 0; x < this.ItemUnitSelect.length; x++) {
  for (let i = 0; i < this.cartitemsArr.length; i++) {
    if(this.ItemUnitSelect[x].Id == this.cartitemsArr[i].Id){
      this.cartitemsArr[i].Qty = this.ItemUnitSelect[x].Qty
    }
  }
}
////
this.cartitemsArr = this.cartitemsArr.filter(el=>Number(el.Qty) > 0)
localStorage.setItem("VisitorCart",JSON.stringify(this.cartitemsArr))
}

removeCart(item:ItemUnit){
this.cartitemsArr = this.cartitemsArr.filter(el=>el.Id != item.Id)
localStorage.setItem("VisitorCart",JSON.stringify(this.cartitemsArr))
}

clear(){
this.cartitemsArr = []
localStorage.removeItem("VisitorCart")
}

upQuantity(item:ItemUnit){

  let productExistSelect = this.ItemUnitSelect.find(el=>el.Id == item.Id  )

  if(productExistSelect){
    item.NameEn = productExistSelect.NameEn
    item.NameAr = productExistSelect.NameAr
    item.Price = productExistSelect.Price
    item.Qty = productExistSelect.Qty
  }

  item.Quantity++

  if(item.Quantity > Number(item.Qty)){
    item.Quantity = Number(item.Qty)
    this.totalCart()
    return
  }
  localStorage.setItem("VisitorCart",JSON.stringify(this.cartitemsArr))
}

downQuantity(cartitem:any){

  let productExistSelect = this.ItemUnitSelect.find(el=>el.Id == cartitem.Id  )

  if(productExistSelect != undefined && productExistSelect != null){
    cartitem.NameEn = productExistSelect.NameEn
    cartitem.NameAr = productExistSelect.NameAr
    cartitem.Price = productExistSelect.Price
    cartitem.Qty = productExistSelect.Qty
  }


  cartitem.quantity--

  if(Number(cartitem.quantity) > Number(cartitem.Qty) || Number(cartitem.Qty) <= 0){
    cartitem.quantity = Number(cartitem.Qty)
  }

  if(cartitem.quantity < 0 ){
    cartitem.quantity = 1
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

getItemTotal(item:ItemUnit):any {
  return ( item?.Quantity && item.Price) ? Number(item.Price) * Number(item.Quantity) : 0;
}

getCart(){
let getCartLocal:any = localStorage.getItem("VisitorCart")
if(getCartLocal != null){
this.cartitemsArr = JSON.parse(getCartLocal)
this.totalCart()
}
}

buy(){
  localStorage.setItem("VisitorCart",JSON.stringify(this.cartitemsArr))
  this._Router.navigate(["/checkout"])
}

ngOnDestroy(): void {
    for (let i = 0; i < this.SubscriptionArr.length; i++) {
      this.SubscriptionArr[i].unsubscribe()
    }
}

}
