import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { CountryPreivewComponent } from './country-preivew/country-preivew.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CountryCreateComponent } from './country-create/country-create.component';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [
    CountryPreivewComponent,
    CountryCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path :'' ,component:CountryPreivewComponent}
    ,{path:'createCountry' ,component:CountryCreateComponent}]
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
export class CountryModule {
 }
