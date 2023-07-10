import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ItemUnit } from 'src/app/shared/models/item-unit';
import { Apiservice } from 'src/app/shared/services/crud/apiservice.service';
import { PaymentServiceService } from 'src/app/shared/services/payment/payment-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit,OnDestroy {
  SubscriptionArr: Subscription[] = [];
  cartitemsArr:ItemUnit[] = []

  constructor(
    private paymentService:PaymentServiceService,
    private toastr:ToastrService,
    public _Apiservice:Apiservice){}

  ngOnInit(): void {
    this.getCart()
  }

  getCart(){
    let getCartLocal:any = localStorage.getItem("VisitorCart")
    if(getCartLocal != null){
    this.cartitemsArr = JSON.parse(getCartLocal)
    this.totalCart()
    }
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

  Apply(){
      this.toastr.info("نورتنا ولكن يجب تسجيل الدخول")

  }
// ثلاث خطوات اساسية قبل اي عمليه دفع
payment(){

  let orderExample = {
    "auth_token":  "ZXlKaGlPaUpJVXpVeE1pSX1Y0NJmV5Sn...",
    "delivery_needed": "false",
    "amount_cents": "100",
    "currency": "EGP",
   // "merchant_order_id": 5,
    "items": [
      {
          "name": "ASC1515",
          "amount_cents": "500000",
          "description": "Smart Watch",
          "quantity": "1"
      },
      {
          "name": "ERT6565",
          "amount_cents": "200000",
          "description": "Power Bank",
          "quantity": "1"
      }
      ],
    "shipping_data": {
      "apartment": "803",
      "email": "claudette09@exa.com",
      "floor": "42",
      "first_name": "Clifford",
      "street": "Ethan Land",
      "building": "8028",
      "phone_number": "+86(8)9135210487",
      "postal_code": "01898",
       "extra_description": "8 Ram , 128 Giga",
      "city": "Jaskolskiburgh",
      "country": "CR",
      "last_name": "Nicolas",
      "state": "Utah"
    },
      "shipping_details": {
          "notes" : " test",
          "number_of_packages": 1,
          "weight" : 1,
          "weight_unit" : "Kilogram",
          "length" : 1,
          "width" :1,
          "height" :1,
          "contents" : "product of some sorts"
      }
  }

  let paymentRequestExample = {
    "auth_token": "ZXlKaGlPaUpJVXpVeE1pSX1Y0NJmV5Sn...",
    "amount_cents": "100",
    "expiration": 3600,
    "order_id": "103",
    "billing_data": {
      "apartment": "803",
      "email": "claudette09@exa.com",
      "floor": "42",
      "first_name": "Clifford",
      "street": "Ethan Land",
      "building": "8028",
      "phone_number": "+86(8)9135210487",
      "shipping_method": "PKG",
      "postal_code": "01898",
      "city": "Jaskolskiburgh",
      "country": "CR",
      "last_name": "Nicolas",
      "state": "Utah"
    },
    "currency": "EGP",
    "integration_id": 3715988,
    //"integration_id": 3716857
    //"lock_order_when_paid": "false"
  }

  let CallApi1:Subscription=this.paymentService.auth().subscribe({
    next:(res:any)=>{
    //console.log(res)
    orderExample.auth_token = res.token
    paymentRequestExample.auth_token = res.token
    //console.log(orderExample)
  let CallApi2:Subscription=this.paymentService.OrderRegistration(orderExample).subscribe({
    next:(res:any)=>{
    ///console.log(res)
    paymentRequestExample.order_id = res.id
    // console.log(paymentRequestExample)
  let CallApi3:Subscription=this.paymentService.PaymentKeyRequest(paymentRequestExample).subscribe({
    next:(res:any)=>{

    if(res.message == "ok"){
      console.log(res)
    }else {
      this.cardPayment(res.token)
    }


     }
     })
     this.SubscriptionArr.push(CallApi3)
     }
     })
     this.SubscriptionArr.push(CallApi2)
     },
     })
     this.SubscriptionArr.push(CallApi1)
  }

  cardPayment(token:string){
  //console.log("cardPayment")
  console.log(token)
  //let iFrameUrl = `https://accept.paymob.com/api/acceptance/iframes/750085?payment_token=${token}`
  let iFrameUrl = `https://accept.paymob.com/api/acceptance/iframes/750084?payment_token=${token}`
  console.log(iFrameUrl)
  location.href = iFrameUrl
  }

  ngOnDestroy(): void {

  }


}
