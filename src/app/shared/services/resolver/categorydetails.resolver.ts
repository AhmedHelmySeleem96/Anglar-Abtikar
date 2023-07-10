import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { Apiservice } from '../crud/apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class CategorydetailsResolver implements Resolve<boolean> {
  constructor(private _Router:Router,private _Apiservice:Apiservice){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const id = Number(route.paramMap.get("id"))
    return id ? this._Apiservice.get(`ItemGroup/Get?id=${id}`):EMPTY
  }
}
