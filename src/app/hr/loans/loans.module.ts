import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import { LoansCreateComponent } from './loans-create/loans-create.component';
import { LoansComponent } from './loans.component';
import { TranslateService,TranslateModule } from '@ngx-translate/core';
import {FormGroup,ReactiveFormsModule} from '@angular/forms'
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [LoansCreateComponent,LoansComponent],
  imports: [
    CommonModule  ,TranslateModule,ReactiveFormsModule,TableModule,ToastModule,
      RouterModule.forChild([{path :'' ,component:LoansCreateComponent},
    {path:'CreateLoans',component:LoansCreateComponent}]
   )
  ,
 TranslateModule ]
})
export class LoansModule {

  constructor(public translate : TranslateModule) {
    
    
  }
 }
