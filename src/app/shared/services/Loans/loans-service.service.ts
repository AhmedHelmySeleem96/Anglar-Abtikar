import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

HttpClient
@Injectable({
  providedIn: 'root'
})
export class LoansServiceService {

  constructor(private _httpclient:HttpClient)
   { }

   GetOperationService():Observable<any>
   {
     return this._httpclient.get('https://localhost:7502/XtraAndPOS_OperationsTypes/GetOperationService') 
   }
   PostOperationService(formData:object):Observable<any> 
    { 
     return this._httpclient.post('https://localhost:7502/XtraAndPOS_OperationsTypes/CreateOperationService',formData) 
    }
    PutoperationService(id: number, formData: object): Observable<any> { 
      const url = `https://localhost:7502/XtraAndPOS_OperationsTypes/UpdateOperationService?id=${id}`; 
   
      return this._httpclient.put(url, formData); 
    }
    DeleteOperationService(id: number, ): Observable<any> { 
      const url = `https://localhost:7502/XtraAndPOS_OperationsTypes/DeleteOperationService?id=${id}`; 
   
      return this._httpclient.delete(url); 
    }



  
    
    
    
    
    GettNotificationService():Observable<any> 
    { 
      return this._httpclient.get('https://localhost:7502/XtraAndPOS_NotificationTypes/GetNotificationService') 
    }
    PostNotificationService(formData:object):Observable<any> 
    { 
     return this._httpclient.post('https://localhost:7502/XtraAndPOS_NotificationTypes/CreateNotificationService',formData) 
    }
    PutNotificationService(id: number, formData: object): Observable<any> { 
      const url = `https://localhost:7502/XtraAndPOS_NotificationTypes/UpdateNotificationService?id=${id}`; 
   
      return this._httpclient.put(url, formData); 
    }
    DeleteNotificationService(id: number, ): Observable<any> { 
      const url = `https://localhost:7502/XtraAndPOS_NotificationTypes/DeleteNotificationService?id=${id}`; 
   
      return this._httpclient.delete(url); 
    }




    PostLoan(formData:object):Observable<any> 
    { 
     return this._httpclient.post('https://localhost:7502/XtraAndPOS_Loans/CreateLoanService',formData) 
    }
    PuttLoan(id: number, formData: object): Observable<any> { 
      const url = `https://localhost:7502/XtraAndPOS_Loans/UpdateLoanService?id=${id}`; 
      return this._httpclient.put(url, formData); 
    }

    GettLoan():Observable<any> 
    { 
     return this._httpclient.get('https://localhost:7502/XtraAndPOS_Loans/GetLoanService') 
    }

    DeleteLoanService(id: number, ): Observable<any> { 
      const url = `https://localhost:7502/XtraAndPOS_Loans/DeleteLoanService?id=${id}`; 
      return this._httpclient.delete(url); 
    }

}
