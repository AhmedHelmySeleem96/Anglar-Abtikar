import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { NationalityPreviewComponent } from './nationality-preview/nationality-preview.component';
import { NationalityCreateComponent } from './nationality-create/nationality-create.component';
@NgModule({
  declarations: [
    NationalityPreviewComponent,
    NationalityCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path :'' ,component:NationalityPreviewComponent}
    ,{path:'createNationality' ,component:    NationalityCreateComponent
  }]
   ),
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    DropdownModule,
    ToastModule
  ]
})
export class NationalityModule {
 }
