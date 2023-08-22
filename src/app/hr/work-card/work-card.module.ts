import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { WorkCardComponent } from './work-card.component';

@NgModule({
  declarations: [
    WorkCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path :'' ,component:WorkCardComponent}
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
export class WorkCardModule {
 }
