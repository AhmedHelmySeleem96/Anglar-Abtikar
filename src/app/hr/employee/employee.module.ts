import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { TabViewModule } from 'primeng/tabview';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [
    EmployeeCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path :'' ,component:EmployeeCreateComponent}]
   ),
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    DropdownModule,
    ToastModule,
    TabViewModule,
    FileUploadModule
  ]
})
export class EmployeeModule {
 }
