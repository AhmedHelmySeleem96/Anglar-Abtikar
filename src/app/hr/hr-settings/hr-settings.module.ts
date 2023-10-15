import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrSettingsComponent } from './hr-settings.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AccountsSettingsComponent } from './accounts-settings/accounts-settings.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationTypesComponent } from './notification-types/notification-types.component';
import { OperationTypesComponent } from './operation-types/operation-types.component';
import {FormGroup,ReactiveFormsModule} from '@angular/forms'
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [HrSettingsComponent,AccountsSettingsComponent,WorkflowComponent,NotificationComponent,
  NotificationTypesComponent,OperationTypesComponent],
  imports: [
    CommonModule,TranslateModule,ReactiveFormsModule,TableModule,ToastModule,
    RouterModule.forChild([{path :'' ,component:HrSettingsComponent},
    {path:'HrSettings',component:HrSettingsComponent},
    {path:'AccountsSettings',component:AccountsSettingsComponent},
    {path:'Workflow',component:WorkflowComponent},
    {path:'Notification',component:NotificationComponent},
    {path:'OperationTypes',component:OperationTypesComponent},
    {path:'NotificationTypes',component:NotificationTypesComponent}]
   )
  ]
})
export class HrSettingsModule { 
  constructor(public translate : TranslateModule){}
}
