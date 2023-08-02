import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { JobsCategoriesComponent } from './jobs-categories/jobs-categories.component';
import { JobsCreateComponent } from './jobs-create/jobs-create.component';
import { JobsNamesComponent } from './jobs-names/jobs-names.component';

@NgModule({
  declarations: [
    JobsCategoriesComponent,
    JobsCreateComponent,
    JobsNamesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path :'createJobs' ,component:JobsCreateComponent}
    ,{path:'jobsNames' ,component:JobsNamesComponent},
  {path:'jobsCategories',component:JobsCategoriesComponent}]
   ),
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    DropdownModule,
    ToastModule
  ]
})
export class JobModule {
 }
