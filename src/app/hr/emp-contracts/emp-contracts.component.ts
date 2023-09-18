import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-contracts',
  templateUrl: './emp-contracts.component.html',
  styleUrls: ['./emp-contracts.component.css']
})
export class EmpContractsComponent {
  constructor(private router :Router){}
  newContactClick(){
    this.router.navigateByUrl('hr/empContract/newEmpcontract');
  }
  transContactClick(){
    this.router.navigateByUrl('hr/empContract/transEmpcontract');
  }
}
