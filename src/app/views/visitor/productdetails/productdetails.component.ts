import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Apiservice } from './../../../shared/services/crud/apiservice.service';
import { Component, OnInit, OnDestroy, Inject, AfterViewInit, ElementRef, ViewChildren, QueryList, ViewChild, Renderer2 } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DOCUMENT } from '@angular/common';
import { ItemUnit } from 'src/app/shared/models/item-unit';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit,OnDestroy,AfterViewInit {
  productinfo:ItemUnit = {
    Id: 0,
    ItemGroupId: 0,
    NameAr: '',
    NameEn: 0,
    Notes: '',
    Opinions: '',
    CreatedDate: '',
    ModifiedBy: '',
    ModifiedDate: '',
    Description: '',
    HowToUse: '',
    Quantity: 0,
    Qty: 0,
    Price: 0,
    ratingPercentage: 0,
    ItemImages: [],
    Specifications: ''
  }
  cartitemsArr:ItemUnit[] = []
  whatsapp:string = environment.whatsappUrl
  gmail:string = environment.gmailUrl
  twitter:string = environment.twitterUrl
  facebook:string = environment.facebookUrl
  urlshare:string = `${environment.host}productdetails`
  reviewsArr:any[] = [
    {id:1,name:"Ahmed ",createdAt:new Date(),value:"منتج رائع جدا"},
    {id:2,name:"Mostafa ElBagory",createdAt:new Date(),value:"منتج رائع جدا"},
    {id:3,name:"Ahmed Ayman",createdAt:new Date(),value:"منتج رائع جدا"},
    {id:4,name:"Ahmed Mostafa",createdAt:new Date(),value:"منتج رائع جدا"},
    {id:5,name:"Mohamed Ramdan",createdAt:new Date(),value:"منتج رائع جدا"},
  ]
  currentRate:number =  0

  constructor(
    private toastr:ToastrService,
    private _Router:Router,
    private activeRoute:ActivatedRoute,
    @Inject(DOCUMENT) private document: Document,public _Apiservice:Apiservice){

  }



ngOnInit(): void {
this.getProduct()
this.getCart()

}

getCart(){
  let getCartLocal:any = localStorage.getItem("VisitorCart")
  if(getCartLocal != null){
  this.cartitemsArr = JSON.parse(getCartLocal)
  this.totalCart()
  }
}

addCart(item:ItemUnit){
  let IsExist = this.cartitemsArr.find(el=>el.Id == item.Id)
// Add To Cart
if(IsExist == undefined){

  this.cartitemsArr.push(item)
}
}

removeCart(item:ItemUnit){
  this.cartitemsArr = this.cartitemsArr.filter(el=>el.Id != item.Id)
  localStorage.setItem("VisitorCart",JSON.stringify(this.cartitemsArr))
}

downQuantity(item:ItemUnit){

  item.Quantity--

  if(Number(item.Quantity) > Number(item.Qty) || Number(item.Qty) <= 0){
    item.Quantity = Number(item.Qty)
  }

  if(item.Quantity < 0 ){
    item.Quantity = 1
    this.totalCart()
    return
  }
  localStorage.setItem("VisitorCart",JSON.stringify(this.cartitemsArr))
}

upQuantity(item:ItemUnit){

  item.Quantity++

    if(item.Quantity > Number(item.Qty)){
      item.Quantity = Number(item.Qty)
      this.totalCart()
      return
    }
    localStorage.setItem("VisitorCart",JSON.stringify(this.cartitemsArr))
}

getItemTotal(item:ItemUnit) {
  return ( item.Quantity && item.Price) ? Number(item.Price) * item.Quantity : 0;
}

totalCart(){
    return this.cartitemsArr.reduce(
      (price,item)=>{
        price += this.getItemTotal(item)
        return price
      },0
    )
}

getProduct(){
this.activeRoute.data.subscribe({
  next:(resolve:any)=>{
    this.productinfo = resolve[0]
    this.slider()
  }
})
}

ngAfterViewInit(): void {
    setTimeout(() => {
      this.slider()
     }, 1000);
}

slider(){
let images = this.document.querySelectorAll(".itemImage")
let imageMain = this.document.getElementById("imageMain")!
for (let i = 0; i < images.length; i++) {

  images[i].addEventListener("click",function(){

    if(imageMain.classList.contains("fade-in")){

    imageMain.classList.remove("fade-in")
    }

    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("active")
    }

    images[i].classList.add("active")

    setTimeout(() => {
      imageMain.setAttribute("src",images[i].getAttribute("src")!)
      imageMain.classList.add("fade-in")
    }, 50);

  })
}
}

clear(){
  this.cartitemsArr = []
  localStorage.removeItem("VisitorCart")
}

buy(){
   localStorage.setItem("VisitorCart",JSON.stringify(this.cartitemsArr))
   this._Router.navigate(["/checkout"])
}

loginFirst(){

    this.toastr.info("SignIn Please")
  
}

ngOnDestroy(): void {

}

}
