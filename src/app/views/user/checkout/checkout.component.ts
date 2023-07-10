import { Apiservice } from 'src/app/shared/services/crud/apiservice.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit,OnDestroy {
  SubscriptionArr: Subscription[] = [];
  cartArr:any[] = []
  FormUserOrder:any = {
    userId: '',
    orderDate: new Date().toISOString(),
    name:"",
    userAddress:"",
    userPhone:"",
    orderDetails:"",
    TotalCart:""
  }
  // FormUserOrder:any = {
  //   orderID: 0,
  //   userId: '',
  //   orderDetails: '',
  //   userAddress: '',
  //   totalOrder: 0,
  //   orderReturns: false,
  //   orderDate: new Date().toISOString(),
  //   delivered: false,
  //   orderSaw: false,
  //   orderItems: [],
  //   deliveredProgress: false,
  //   clientCancle: false,
  //   adminRefuse: false,
  //   clientDeleted: false,
  //   adminDeleted: false,
  //   user: '',
  //   userPhone: '',
  //   name: '',
  //   verifyCode: ''
  // }
  CartId:number = 0

constructor(
  private toastr:ToastrService,
 // @Inject(DOCUMENT) private document: Document,
 // private _ActivatedRoute:ActivatedRoute,
  //private _Router:Router,
  public _Apiservice:Apiservice){}

 ngOnInit(): void {
this.getCart()

}


getCart(){
  this._Apiservice.get("market/cart/usercart?id=00000-00000-00000").subscribe({
    next:(res:any)=>{//

   //  console.log(res.Obj)

      this.FormUserOrder = res.Obj

      this.cartArr = res.Obj.CartItems.filter((el: { ItemUnit: any; })=>el.ItemUnit != null).map((el: { ItemUnit: any; })=>{return el.ItemUnit})




      for (let i = 0; i < this.cartArr.length; i++) {
        this.cartArr[i].quantity = res.Obj.CartItems[i].Quantity
      }

  //    console.log(this.cartArr)

    }
  })
}

  getItemTotal(item:any) {
    return ( item.quantity && item.Price) ? Number(item.Price) * item.quantity : 0;
  }

  totalCart(){
    return this.cartArr.reduce(
      (price,item)=>{
        price += this.getItemTotal(item)
        return price
      },0
    )
}

Apply(){
//console.log(this.FormUserOrder.Id)
let callApi:Subscription = this._Apiservice.get(`market/Cart/Payment?id=${this.FormUserOrder.Id}`).subscribe({
  next:(res:any)=>{


    if(res.IsSuccess == true && res.Message == "success"){
      console.log(res.Obj)
      if(this._Apiservice.Language == "ar"){
        this.toastr.success("تم الدفع بنجاح")
      }else {
        this.toastr.success("تم الدفع بنجاح")
      }
    }



  }
})
this.SubscriptionArr.push(callApi)


}
  ngOnDestroy(): void {

  }

}
