import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CityComponent } from './city/city.component';
import { HrComponent } from './hr.component';

@NgModule({
  declarations: [
  CityComponent,
  HrComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path : '',component:HrComponent,children :[{
        path : "city" , loadChildren: () => import('./city/city.module').then(m => m.CityModule)
      }]
    }]),
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class HrModule { }
