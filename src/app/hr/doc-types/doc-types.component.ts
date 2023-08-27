import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { XtraAndPosCountryService, XtraAndPosDocTypesService } from 'src/app/shared/api';
import { ExportData } from 'src/app/services/Export-data.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-doc-types',
  templateUrl: './doc-types.component.html',
  styleUrls: ['./doc-types.component.css'],
  providers: [ExportData,MessageService]
})
export class DocTypesComponent implements OnInit  {
  constructor(private router: Router,private toastr:ToastrService,private fb:FormBuilder
    ,private XtraAndPosDocTypesService :  XtraAndPosDocTypesService,private ExportData :ExportData,
    private MessageService : MessageService,public translate :TranslateService){};
    docData :any[] = [] ;
cols :any ;
deleteId : any ;
@ViewChild('dt') dt: any;
formDoc :FormGroup= this.fb.group({docNameAr: new FormControl('', [Validators.required]),
docNameEn: new FormControl('', [Validators.required]),
notes: new FormControl(null),})
isEdit:boolean= false ;
@ViewChild('formElement') formElement!: ElementRef;
currentdocId :any ;
ngOnInit(): void {
  this.XtraAndPosDocTypesService.httpGetXtraAndPosDocTypesGetDocTypesService().subscribe((value:any)=>{
    let jsonData = JSON.parse(value);
    this.docData = jsonData.Obj.doc;
  });
  this.cols = [
    { field: 'Id', header: 'Id' },
    { field: 'CreatedDate', header: 'CreatedDate' },
    { field: 'NameAr', header: 'NameAr' },
    { field: 'NameEn', header: 'NameEn' },
    { field: 'Notes', header: 'Notes' },
  ];
}


setEdit(doc: any) {
  this.formDoc.patchValue({
    docNameAr: doc.NameAr,
    docNameEn: doc.NameEn,
    notes: doc.Notes
  });
  this.isEdit = true;
  this.currentdocId = doc.Id;

  this.focusOnForm();
}
focusOnForm() {
  if (this.formElement && this.formElement.nativeElement) {
    this.formElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
    this.formElement.nativeElement.focus();
  }
}
onSearch(searchValue:Event): void {
  this.dt.filterGlobal((searchValue.target as HTMLInputElement).value, 'contains');
}
showDeleteConfirm(doc: any) {
  this.deleteId = doc.Id,
  this.MessageService.add({
    key: 'c',
    sticky: true,
    severity: 'warn',
    summary: this.translate.instant('AreYouSureToDelete') + ' ' + doc.NameAr + ' ' + this.translate.instant('?'),
    detail: this.translate.instant('Confirmtoproceed'),
  });
}
onDeleteConfirm() {
  this.XtraAndPosDocTypesService.httpDeleteXtraAndPosDocTypesDeleteDocTypesService({
    id: this.deleteId,
  }).subscribe((value: any) => {
    let jsonData = JSON.parse(value);
    this.deleteId = 0;
    this.MessageService.add({
      severity: 'success',
      detail: jsonData.Message});
    this.refreshTable();
    this.formDoc.reset();
    this.MessageService.clear('c')
  }, (error: any) => {
    this.toastr.error('Failed to delete doc.');
  });
}
onDeleteReject() {
  this.MessageService.clear('c');
}
refreshTable() {
  this.XtraAndPosDocTypesService.httpGetXtraAndPosDocTypesGetDocTypesService().subscribe((value: any) => {
    let jsondocData = JSON.parse(value);
    this.docData = jsondocData.Obj.doc;
  });
}
getDoc(id :any){
  return this.docData.filter((r)=>r.Id===id)[0]
}
goHome(){
  this.router.navigateByUrl('');
}
onSubmit(Form: FormGroup) {
  if(!this.isEdit){
  if(this.formDoc.valid)
  {
  let model = this.formDoc.value;
  this.XtraAndPosDocTypesService.httpPostXtraAndPosDocTypesCreateDocTypesService({
    body : model
  }).subscribe((value:any)=>{
    let jsonData = JSON.parse(value);
    this.MessageService.add({
      severity: 'success',
      detail: jsonData.Message});
      this.formDoc.reset();
      this.refreshTable();
  })}else{
    this.MessageService.add({
      severity: 'error',
      detail: this.translate.instant('EnterAllData')});
  }
}else{
  let model = this.formDoc.value;
  model.Id = this.currentdocId;
  this.XtraAndPosDocTypesService.httpPutXtraAndPosDocTypesUpdateDocTypesService({
    id: this.currentdocId,
    body: model
  }).subscribe((value: any) => {
    let jsonData = JSON.parse(value);
    this.MessageService.add({
      severity: 'success',
      detail: jsonData.Message});
    this.refreshTable()
    this.formDoc.reset();
    this.isEdit = false;
  });
  }

    }
printPdf() {
  const tableData = this.docData.map((doc) => {
    return {
      notes: doc.Notes,
      docNameEn: doc.NameEn,
      docNameAr: doc.NameAr,
      createdDate: doc.CreatedDate,
      id: doc.Id
    };
  });

 const columns = ['ملاحظات',' الاسم بالانجليزية','الاسم ','تاريخ الانشاء','كود المستند'];
  this.ExportData.printPdf(tableData,columns,'doc.pdf')
}


exportData() {
  const tableData = this.docData.map((doc) => {
    return {
      id:doc.Id,
      createdDate : doc.CreatedDate,
      docNameAr: doc.NameAr,
      docNameEn: doc.NameEn,
      notes: doc.Notes
    };
  });
this.ExportData.toExcel(tableData,'doc.xlsx')

}


}
