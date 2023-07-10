import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategorydetailsComponent } from './categorydetails.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    CategorydetailsComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    TranslateModule,
    NgxUsefulSwiperModule,
    NgbRatingModule

  ]
})
export class CategoriesModule { }
