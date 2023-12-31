import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { HospitalCreateComponent } from './hospital-create/hospital-create.component';
import { HospitalPreviewComponent } from './hospital-preview/hospital-preview.component';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    HospitalCreateComponent,
    HospitalPreviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path :'' ,component:HospitalPreviewComponent}
    ,{path:'createHospital' ,component:HospitalCreateComponent}]
   ),
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    DropdownModule,
    ToastModule,
    ConfirmDialogModule,
    MessagesModule
  ]
})
export class HospitalModule {
 }
