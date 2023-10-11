import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { EmpContractNewComponent } from './emp-contract-new/emp-contract-new.component';
import { EmpContractsComponent } from './emp-contracts.component';
import { TabViewModule } from 'primeng/tabview';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { EmpContractTransactionsComponent } from './emp-contract-transactions/emp-contract-transactions.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    EmpContractNewComponent,
    EmpContractTransactionsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path :'' ,component:EmpContractsComponent}
    ,{path:'newEmpcontract' ,component:EmpContractNewComponent},
  {path:'transEmpcontract' , component:EmpContractTransactionsComponent}]
   ),
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    DropdownModule,
    ToastModule,
    ConfirmDialogModule,
    MessagesModule,
    TabViewModule,
    FileUploadModule,
    DialogModule,
    NgbModule,
  ]
})
export class EmpContractModule {
 }
