import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CityComponent } from './city/city.component';
import { HrComponent } from './hr.component';
import { CountryComponent } from './country/country.component';
import { NationalityComponent } from './nationality/nationality.component';
import { OrgstructlevelComponent } from './orgstructlevel/orgstructlevel.component';
import { OrgstructuresComponent } from './orgstructures/orgstructures.component';
import { HospitalComponent } from './hospital/hospital.component';
import { JobsComponent } from './jobs/jobs.component';
import { SpecializationsComponent } from './specializations/specializations.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpContractsComponent } from './emp-contracts/emp-contracts.component';
import { AllowanceComponent } from './allowence/allowence.component';
@NgModule({
  declarations: [
  CityComponent,
  HrComponent,
  CountryComponent,
  NationalityComponent,
  OrgstructlevelComponent,
  OrgstructuresComponent,
  AllowanceComponent,
  HospitalComponent,
JobsComponent,
SpecializationsComponent,
EmployeeComponent,
EmpContractsComponent,

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
      },{
        path : "orgstructlevel" , loadChildren: () => import('./orgstructlevel/orgstructlevel.module').then(m => m.OrgstructlevelModule)
      },{
        path : "orgstructures" , loadChildren: () => import('./orgstructures/orgstructures.module').then(m => m.OrgstructuresModule)
      },{
        path : "hospital" , loadChildren: () => import('./hospital/hospital.module').then(m => m.HospitalModule)
      },{
        path : "allowance" , loadChildren: () => import('./allowence/allowence.module').then(m => m.AllowenecModule)
      },{
        path : "jobs" , loadChildren: () => import('./jobs/jobs.module').then(m => m.JobModule)
      },{
        path : "specializations" , loadChildren: () => import('./specializations/specializations.module').then(m => m.SpecializationsModule)
      },{
        path : "employee" , loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
      },{
        path : "docTypes" , loadChildren: () => import('./doc-types/doc-types.module').then(m => m.DocTypesModule)
      },{
        path : "workCard" , loadChildren: () => import('./work-card/work-card.module').then(m => m.WorkCardModule)
      },{
        path : "empContract" , loadChildren: () => import('./emp-contracts/emp-contracts.module').then(m => m.EmpContractModule)
      },{
        path : "vacTypes" , loadChildren: () => import('./vac-types/vac-types.module').then(m => m.VacTypesModule)
      }]
    }]),
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class HrModule { }
