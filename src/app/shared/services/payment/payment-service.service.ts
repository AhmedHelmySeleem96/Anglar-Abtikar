import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

  constructor(private _HttpClient:HttpClient) { }




auth<T>():Observable<T>{
let dataSend =  {
 "api_key":"ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2TnpNM01qazFMQ0p1WVcxbElqb2lhVzVwZEdsaGJDSjkuNGtKSHFSUml2UDRIYTRzOWc1aFUtMlRBYWJNaThWamU3UW02UFdJdElLbHgzSjc5LUY5d0dYX2VEaFNDNDZhYm0zNUNVU1FMWnd2bHg3bU5WdWROclE="
}
return this._HttpClient.post<T>(`https://accept.paymob.com/api/auth/tokens`,dataSend)
}

OrderRegistration<T>(model:T):Observable<T>{
return this._HttpClient.post<T>(`https://accept.paymob.com/api/ecommerce/orders`,model)
}

PaymentKeyRequest<T>(model:T):Observable<T>{
//return this._HttpClient.post<T>(`https://accept.paymob.com/api/acceptance/post_pay`,model)
return this._HttpClient.post<T>(`https://accept.paymob.com/api/acceptance/payment_keys`,model)
}

}
