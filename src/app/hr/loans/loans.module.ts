import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import { LoansCreateComponent } from './loans-create/loans-create.component';
import { LoansComponent } from './loans.component';
import { TranslateService,TranslateModule } from '@ngx-translate/core';
import { OperationTypesComponent } from './operation-types/operation-types.component';


@NgModule({
  declarations: [LoansCreateComponent,LoansComponent,OperationTypesComponent],
  imports: [
    CommonModule  ,TranslateModule,
      RouterModule.forChild([{path :'' ,component:LoansCreateComponent},
    {path:'CreateLoans',component:LoansCreateComponent},
    {path:'OperationTypes',component:OperationTypesComponent}]
   )
  ,
 TranslateModule ]
})
export class LoansModule {

  constructor(public translate : TranslateModule) {
    
    
  }
 }
