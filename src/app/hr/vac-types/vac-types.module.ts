import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { VacTypesComponent } from './vac-types.component';

@NgModule({
  declarations: [
    VacTypesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path :'' ,component:VacTypesComponent}
    ]
   ),
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    DropdownModule,
    ToastModule
  ]
})
export class VacTypesModule {
 }
