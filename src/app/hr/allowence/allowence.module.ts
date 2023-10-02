import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { AllowanceCreateComponent } from './allowence-create/allowence-create.component';
import { AllowancePreviewComponent } from './allowence-preview/allowence-preview.component';
@NgModule({
  declarations: [
    AllowanceCreateComponent,
    AllowancePreviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path :'' ,component:AllowancePreviewComponent}
    ,{path:'createAllowance' ,component:AllowanceCreateComponent}]
   ),
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    DropdownModule,
    ToastModule
  ]
})
export class AllowenecModule {
 }
