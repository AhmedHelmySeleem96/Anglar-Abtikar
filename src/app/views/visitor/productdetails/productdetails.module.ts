import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductdetailsRoutingModule } from './productdetails-routing.module';
import { ProductdetailsComponent } from './productdetails.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';


@NgModule({
  declarations: [
    ProductdetailsComponent
  ],
  imports: [
    CommonModule,
    ProductdetailsRoutingModule,
    TranslateModule,
    NgbRatingModule,
    NgxUsefulSwiperModule
  ]
})
export class ProductdetailsModule { }
