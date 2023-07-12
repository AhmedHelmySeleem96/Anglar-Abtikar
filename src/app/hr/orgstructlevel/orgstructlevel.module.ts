import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { OrgstructlevelCreateComponent } from './orgstructlevel-create/orgstructlevel-create.component';
import { TreeModule } from 'primeng/tree';

@NgModule({
  declarations: [
    OrgstructlevelCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path :'' ,component:OrgstructlevelCreateComponent}]
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
export class OrgstructlevelModule {
 }
