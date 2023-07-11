import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CityComponent } from './city/city.component';
import { HrComponent } from './hr.component';
import { CountryComponent } from './country/country.component';
import { NationalityComponent } from './nationality/nationality.component';
@NgModule({
  declarations: [
  CityComponent,
  HrComponent,
  CountryComponent,
  NationalityComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path : '',component:HrComponent,children :[{
        path : "city" , loadChildren: () => import('./city/city.module').then(m => m.CityModule),
      },{
        path : "country" , loadChildren: () => import('./country/country.module').then(m => m.CountryModule)
      },{
        path : "nationality" , loadChildren: () => import('./nationality/nationality.module').then(m => m.NationalityModule)
      }]
    }]),
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class HrModule { }
