import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CurrencyEpService}from 'src/app/shared/api';

@Component({
  selector: 'app-loans-create',
  templateUrl: './loans-create.component.html',
  styleUrls: ['./loans-create.component.css']
})
export class LoansCreateComponent {
  
  currencyData :any [] = [] ;
  constructor(public translate : TranslateService,private CurrencyEpService:CurrencyEpService) {

  }
  ngOnInit(): void {
    this.CurrencyEpService.httpGetCurrencyGetAll().subscribe((value:any)=>{
      let jsonData = JSON.parse(value);
      this.currencyData = jsonData.Obj.Currencies;
      console.log(this.currencyData);
    });
  }
}
