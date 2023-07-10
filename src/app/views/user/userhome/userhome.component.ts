import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ItemGroup } from 'src/app/shared/models/item-group';
import { Apiservice } from 'src/app/shared/services/crud/apiservice.service';
import { environment } from 'src/environments/environment';
import { SwiperOptions } from 'swiper';
import * as signalR from '@microsoft/signalr'



@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})

export class UserhomeComponent implements OnInit,OnDestroy {
  SubscriptionArr:Subscription[] = []
  Categories:ItemGroup[] = []
  ItemUnitArr:any[] = []
  ItemUnitSelect:any[] = []
  cartitemsArr:any[] = []
  bigSlider:any[] = []
  smallBanner1:any = {}
  smallBanner2:any = {}
  cartId:number = 0
  SaveTheBasket:any[] = []
  UserAction:string = 'addCart'
  userId:string = '00000-00000-00000'
  bigSlide: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    autoHeight: true,
    grabCursor:true,
    allowTouchMove: true,
    autoplay: {
      delay: 5000,
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
    public _Apiservice:Apiservice){}


tranformNumber(string:string){
  return Number(string)
}

  ngOnInit(): void {
   this.startConnection()

    if(this.Hub_Connection?.state == "Connecting"){
      this.askServerAddItemGroup()
      this.askServerUpdateItemGroup()
      this.askServerDeleteItemGroup()
    }else {
      this.toastr.error("Error Hub Connection")
    }


    this.getAllCategories()
    this.getAllItemUnit()
    this.getCart()
    this.getBigBanner()
    this.getSmallBanner1()
    this.getSmallBanner2()
  }

  startConnection(){
    this.Hub_Connection = new signalR.HubConnectionBuilder()
    .withUrl(`${environment.signalrUrl}ItemGroup`,{
    skipNegotiation:true,
    transport:signalR.HttpTransportType.WebSockets,
    //accessTokenFactory: () => this._ApiserviceService.getToken()
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
    this._Apiservice.get("market/website/GetById?id=1").subscribe({
      next:(res:any)=>{
        //console.log(res)
        this.bigSlider = res.Obj
       // console.log(this.bigSlider)
      }
    })
  }

  getSmallBanner1(){
    this._Apiservice.get("market/website/GetById?id=2").subscribe({
      next:(res:any)=>{
        //console.log(res)
        this.smallBanner1 = res.Obj[0]
        //console.log(this.smallBanner1)
      }
    })
  }
  getSmallBanner2(){
    this._Apiservice.get("market/website/GetById?id=3").subscribe({
      next:(res:any)=>{
        //console.log(res)
        this.smallBanner2 = res.Obj[0]
       // console.log(this.smallBanner2)
      }
    })
  }
  getAllCategories(){
    let CallApi:Subscription=this._Apiservice.get("itemgroup/getall").subscribe({
       next:(res:any)=>{
         if(res.IsSuccess == true && res.Message  == "success"){
           this.Categories = res.Obj
          // console.log(this.Categories )
         }
       }
     })
     this.SubscriptionArr.push(CallApi)
   }

   changeCategory(event:any){
   let value = Number(event.target.value)
   let categoryExist = this.Categories.find(el=>el.Id === value)

   if(value == 0 || categoryExist != undefined){

if(value == 0){
  this.ItemUnitSelect = this.ItemUnitArr
}else {
  this.ItemUnitSelect = this.ItemUnitArr.filter(e=>e.ItemGroupId == categoryExist!.Id)

}


  //  //  console.log(value)
  //    console.log(categoryExist)
  //   console.log( this.ItemUnitArr)


   }else {

     if(this._Apiservice.Language == "ar"){
       this.toastr.error("بطل لعب")
     }else {
      this.toastr.error("Do Not Play")
     }

   }


   }

   getAllItemUnit(){
    let CallApi:Subscription=this._Apiservice.get("market/item/getall").subscribe({
      next:(res:any)=>{
        for (let i = 0; i < res.Obj.length; i++) {
          res.Obj[i].quantity = 1
          res.Obj[i].Qty = 5
        }
        this.ItemUnitArr = res.Obj
        this.ItemUnitSelect = this.ItemUnitArr
      }
    })
    this.SubscriptionArr.push(CallApi)
  }

  getCart(){

    if(this.userId != '' && this.userId != undefined && this.userId != null){

   let getCart:Subscription=this._Apiservice.get(`market/cart/usercart?id=${this.userId}`).subscribe({

      next:(res:any)=>{
        //console.log(res)

          if(res.IsSuccess == true && res.Message == "success"){
            if(res.Obj.Id > 0){
              this.cartId = res.Obj.Id
              this.UserAction = 'updateCart'
              let data = res.Obj.CartItems

     //   console.log(data)

       this.cartitemsArr = data.filter((el: { ItemUnit: any; })=>el.ItemUnit != null).map((el: { ItemUnit: any; })=>{return el.ItemUnit})
        this.SaveTheBasket = data.filter((el: { ItemUnit: any; })=>el.ItemUnit != null).map((el: { ItemUnit: any; })=>{return el.ItemUnit})


          //  console.log(this.cartitemsArr)

        for (let i = 0; i < this.cartitemsArr.length; i++) {
          this.cartitemsArr[i].quantity = res.Obj.CartItems[i].Quantity
        }

         this.totalCart()

            }else {
              this.UserAction = 'addCart'
            }

          }
      }

    })
  this.SubscriptionArr.push(getCart)
    }
  }

   addToCart(item:any){
   //console.log(item)
   // Qty Home = Qty CartItem
   for (let x = 0; x < this.ItemUnitSelect.length; x++) {
     for (let i = 0; i < this.cartitemsArr.length; i++) {
       if(this.ItemUnitSelect[x].Id == this.cartitemsArr[i].Id){
         this.cartitemsArr[i].Qty = this.ItemUnitSelect[x].Qty
         if(this.cartitemsArr[i].quantity > Number(this.ItemUnitSelect[x].Qty)){
           this.cartitemsArr[i].quantity = Number(this.ItemUnitSelect[x].Qty)
         }
       }
     }
   }
   ///

   // if product Qty = 0
   if(item.Qty == 0){
     if(this._Apiservice.Language == 'en'){
       this.toastr.error("error",'Sorry Product Quantity = 0')
     }else {
       this.toastr.error("error",'عفوا كمية المنتج صفر')
     }
     return
   }
   //

   let IsExist = this.cartitemsArr.find(el=>el.Id == item.Id)
   // Add To Cart
   if(IsExist == undefined){
     if(this._Apiservice.Language == "ar"){
       this.toastr.success("success",`تم اضافة المنتج ${item.NameAr} للسلة`)
     }else {
       this.toastr.success("success",`Product ${item.NameEn} Add Cart Success`)
     }
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

   }

   removeCart(item:any){
   this.cartitemsArr = this.cartitemsArr.filter(el=>el.Id != item.Id)
   }

   clear(){
    if(this.UserAction == 'addCart'){
      this.cartitemsArr = []
    }else if(this.UserAction == 'updateCart'){
     let vlearCart:Subscription=this._Apiservice.delete("cart",this.cartId).subscribe({
        next:(res:any)=>{
          this.cartitemsArr = []
          this.UserAction = 'addCart'
        }
      })
      this.SubscriptionArr.push(vlearCart)
    }
  }

   upQuantity(cartitem:any){

    let productExistSelect = this.ItemUnitSelect.find(el=>el.Id == cartitem.Id  )

     if(productExistSelect != undefined){
       cartitem.NameEn = productExistSelect.NameEn
       cartitem.NameAr = productExistSelect.NameAr
       cartitem.Price = productExistSelect.Price
       cartitem.Qty = productExistSelect.Qty
     }

     cartitem.quantity++

     if(cartitem.quantity > Number(cartitem.Qty)){
       cartitem.quantity = Number(cartitem.Qty)
       this.totalCart()
       return
     }

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

   }

   totalCart(){
     return this.cartitemsArr.reduce(
       (price,item)=>{
         price += this.getItemTotal(item)
         return price
       },0
     )
   }

   getItemTotal(item:any):any {
     return ( item?.quantity && item.Price) ? Number(item.Price) * Number(item.quantity) : 0;
   }

   buy(){
    this.cartitemsArr = this.cartitemsArr.map(el=> {return {...el,totalCart:Number(el.Price) * Number(el.quantity)}})

    for (let i = 0; i < this.cartitemsArr.length; i++) {

      if(this.cartitemsArr[i].quantity == 0){
        if(this._Apiservice.Language == 'en'){
          this.toastr.error("error",`${this.cartitemsArr[i].NameEn} Quantity = 0`)
        }else{
          this.toastr.error("error",`${this.cartitemsArr[i].NameAr} كمية المنتج بصفر`)
        }
        return
      }

      if(this.cartitemsArr[i].quantity > Number(this.cartitemsArr[i].Qty)){
        this.cartitemsArr[i].quantity = Number(this.cartitemsArr[i].Qty)
      }

    }

    if(this.userId == ''){
      if(this._Apiservice.Language == 'en'){
        this.toastr.error("error",`Somthing Error Please!`)
      }else{
        this.toastr.error("error",`هناك خطا من فضلك اعد تسجيل الدخول`)
      }
      return
    }else if(this.cartitemsArr.length == 0){
      this.cartitemsArr = []
      return
    }

    let model = {
      userId:this.userId,
      totalCart:this.totalCart(),
      countItems:this.cartitemsArr.length,
      notes:"",
      cartItems: this.cartitemsArr.map(el=> {return {itemId:el.Id,quantity:el.quantity}})
    }

    //console.log(model)
    //console.log(this.UserAction)

    if(this.UserAction == 'addCart'){

      let addToCart:Subscription= this._Apiservice.post("market/cart/create",model).subscribe({
        next:(res:any)=>{
          this._Router.navigate([`/user/checkout`])
        }
      })
      this.SubscriptionArr.push(addToCart)
    }else if(this.UserAction == 'updateCart'){

  if(this.cartId != 0){

    let model = {
      Id:this.cartId,
      userId:this.userId,
      totalCart:this.totalCart(),
      countItems:this.cartitemsArr.length,
      notes:"",
      cartItems: this.cartitemsArr.map(el=> {return {itemId:el.Id,quantity:el.quantity}})
    }

  let pusCart:Subscription=this._Apiservice.put(`market/cart/update`,model).subscribe({
      next:(res:any)=>{
        this._Router.navigate([`/user/checkout`])
      }
    })

this.SubscriptionArr.push(pusCart)

  }

}





   }

   ngOnDestroy(): void {
       for (let i = 0; i < this.SubscriptionArr.length; i++) {
         this.SubscriptionArr[i].unsubscribe()
       }
   }
}
