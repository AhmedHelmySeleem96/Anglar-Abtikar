import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { TreeModule } from 'primeng/tree';
import { OrgstructuresCreateComponent } from './orgstructures-create/orgstructures-create.component';

@NgModule({
  declarations: [
    OrgstructuresCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path :'' ,component:OrgstructuresCreateComponent}]
   ),
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    DropdownModule,
    ToastModule,
    TreeModule,
  ]
})
export class OrgstructuresModule {
 }
