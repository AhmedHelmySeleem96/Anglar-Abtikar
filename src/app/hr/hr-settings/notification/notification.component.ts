import { Component } from '@angular/core';
import { LoansServiceService } from '../../../shared/services/Loans/loans-service.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  NotificationData :any[] = [] ;

  constructor(private LoansServiceService:LoansServiceService) {
    

  }
  ngOnInit(): void {
    this.LoansServiceService.GettNotificationService().subscribe((value:any)=>{
      console.log(value.Obj.NotificationType)
      this.NotificationData = value.Obj.NotificationType;
    });
  }
}


