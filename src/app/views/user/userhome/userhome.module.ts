import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserhomeRoutingModule } from './userhome-routing.module';
import { UserhomeComponent } from './userhome.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    UserhomeComponent
  ],
  imports: [
    CommonModule,
    UserhomeRoutingModule,
    NgxUsefulSwiperModule,
    TranslateModule,
    NgbRatingModule
  ]
})
export class UserhomeModule { }
