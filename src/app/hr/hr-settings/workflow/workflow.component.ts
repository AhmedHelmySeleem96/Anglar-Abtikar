import { Component } from '@angular/core';
import { LoansServiceService } from '../../../shared/services/Loans/loans-service.service';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent {
  
  constructor(private LoansServiceService:LoansServiceService) {
    

  }
  OperationData :any[] = [] ;

  ngOnInit(): void {
    this.LoansServiceService.GetOperationService().subscribe((value:any)=>{
      console.log(value.Obj.OperationTypes)
      this.OperationData = value.Obj.OperationTypes;
    });
  }
}
