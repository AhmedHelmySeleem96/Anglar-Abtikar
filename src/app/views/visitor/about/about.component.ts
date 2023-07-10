import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PaymentServiceService } from 'src/app/shared/services/payment/payment-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit,OnDestroy {
  SubscriptionArr:Subscription[] = []

  constructor() {}


  ngOnInit(): void {



  }





ngOnDestroy(): void {

}


}
