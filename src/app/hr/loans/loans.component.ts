import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent {
  constructor(private router :Router){}
  newContactClick(){
    this.router.navigateByUrl('hr/empContract/newEmpcontract');
  }
  transContactClick(){
    this.router.navigateByUrl('hr/empContract/transEmpcontract');
  }
}
