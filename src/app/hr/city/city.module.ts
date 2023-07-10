import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CityPreviewComponent } from './city-preview/city-preview.component';
import { CreateCityComponent } from './create-city/create-city.component';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    CityPreviewComponent,
    CreateCityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path :'' ,component:CityPreviewComponent}
    ,{path:'createCity' ,component:CreateCityComponent}]
   ),
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    DropdownModule,
    ToastModule
  ]
})
export class CityModule {
 }
