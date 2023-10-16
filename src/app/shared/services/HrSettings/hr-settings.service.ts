import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrSettingsService {

  constructor(private _httpclient:HttpClient) { }




  GettAccountSettingsService():Observable<any> 
  { 
    return this._httpclient.get('https://localhost:7502/XtraAndPOS_AccountSettings/GetAccountSettingsService') 
  }
  PostAccountSettingsService(formData:object):Observable<any> 
  { 
   return this._httpclient.post('  https://localhost:7502/XtraAndPOS_AccountSettings/CreateAccountSettingsService   ',formData) 
  }
  PutAccountSettingsService(id: number, formData: object): Observable<any> { 
    const url = `https://localhost:7502/XtraAndPOS_AccountSettings/UpdateAccountSettingsService?id=${id}`; 
 
    return this._httpclient.put(url, formData); 
  }
 




  GettNotificationService():Observable<any> 
  { 
    return this._httpclient.get('  https://localhost:7502/XtraAndPOS_Notification/GetNotificationService') 
  }
  PostNotificationService(formData:object):Observable<any> 
  { 
   return this._httpclient.post('https://localhost:7502/XtraAndPOS_Notification/CreateNotificationService',formData) 
  }
  PutNotificationService(id: number, formData: object): Observable<any> { 
    const url = `https://localhost:7502/XtraAndPOS_Notification/UpdateNotificationService?id=${id}`; 
 
    return this._httpclient.put(url, formData); 
  }



  GettNotificationTypesLookupsService():Observable<any> 
  { 
    return this._httpclient.get('https://localhost:7502/XtraAndPOS_LookUps/GetNotificationTypes') 
  }

  DeleteNotification(id: number, ): Observable<any> { 
    const url = `https://localhost:7502/XtraAndPOS_Notification/DeleteNotificationService?id=${id}`; 
    return this._httpclient.delete(url); 
  }

}
