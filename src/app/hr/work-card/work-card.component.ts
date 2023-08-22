import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { XtraAndPosCountryService,XtraAndPosLookUpsService } from 'src/app/shared/api';
import { ExportData } from 'src/app/services/Export-data.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.css'],
  providers: [ExportData,MessageService]
})
export class WorkCardComponent implements OnInit  {
  constructor(private router: Router,private toastr:ToastrService,private fb:FormBuilder
    ,private XtraAndPos_Country :  XtraAndPosCountryService,private ExportData :ExportData,
    private MessageService : MessageService,public translate :TranslateService,
    private XtraAndPosLookUpsService :XtraAndPosLookUpsService
    ){};
    workCardData :any[] = [] ;
    statusData :any[] = [] ;
cols :any ;
deleteId : any ;
@ViewChild('dt') dt: any;
formWorkCard :FormGroup= this.fb.group({workCardNameAr: new FormControl('', [Validators.required]),
workCardNameEn: new FormControl('', [Validators.required]),
notes: new FormControl(null),})
isEdit:boolean= false ;
@ViewChild('formElement') formElement!: ElementRef;
currentworkCardId :any ;
ngOnInit(): void {
  this.XtraAndPos_Country.httpGetXtraAndPosCountryGetCountryService().subscribe((value:any)=>{
    let jsonData = JSON.parse(value);
    this.workCardData = jsonData.Obj.workCard;
  });
  this.cols = [
    { field: 'Id', header: 'WorkCardId' },
    { field: 'CreatedDate', header: 'CreatedDate' },
    { field: 'NameAr', header: 'NameAr' },
    { field: 'NameEn', header: 'NameEn' },
    { field: 'Notes', header: 'Notes' },
  ];
  this.XtraAndPosLookUpsService.httpGetXtraAndPosLookUpsGetStatus().subscribe((value:any)=>{
    let jsonData = JSON.parse(value);
    this.statusData = jsonData;
  });
}


setEdit(workCard: any) {
  this.formWorkCard.patchValue({
    workCardNameAr: workCard.NameAr,
    workCardNameEn: workCard.NameEn,
    notes: workCard.Notes
  });
  this.isEdit = true;
  this.currentworkCardId = workCard.Id;

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
showDeleteConfirm(workCard: any) {
  this.deleteId = workCard.Id,
  this.MessageService.add({
    key: 'c',
    sticky: true,
    severity: 'warn',
    summary: this.translate.instant('AreYouSureToDelete') + ' ' + workCard.NameAr + ' ' + this.translate.instant('?'),
    detail: this.translate.instant('Confirmtoproceed'),
  });
}
onDeleteConfirm() {
  this.XtraAndPos_Country.httpDeleteXtraAndPosCountryDeleteCountryService({
    id: this.deleteId,
  }).subscribe((value: any) => {
    let jsonData = JSON.parse(value);
    this.deleteId = 0;
    this.MessageService.add({
      severity: 'success',
      detail: jsonData.Message});
    this.refreshTable();
    this.formWorkCard.reset();
    this.MessageService.clear('c')
  }, (error: any) => {
    this.toastr.error('Failed to delete workCard.');
  });
}
onDeleteReject() {
  this.MessageService.clear('c');
}
refreshTable() {
  this.XtraAndPos_Country.httpGetXtraAndPosCountryGetCountryService().subscribe((value: any) => {
    let jsonworkCardData = JSON.parse(value);
    this.workCardData = jsonworkCardData.Obj.workCard;
  });
}
getWorkCard(id :any){
  return this.workCardData.filter((r)=>r.Id===id)[0]
}
goHome(){
  this.router.navigateByUrl('');
}
onSubmit(Form: FormGroup) {
  if(!this.isEdit){
  if(this.formWorkCard.valid)
  {
  let model = this.formWorkCard.value;
  this.XtraAndPos_Country.httpPostXtraAndPosCountryCreateCountryService({
    body : model
  }).subscribe((value:any)=>{
    let jsonData = JSON.parse(value);
    this.MessageService.add({
      severity: 'success',
      detail: jsonData.Message});
      this.formWorkCard.reset();
      this.refreshTable();
  })}else{
    this.MessageService.add({
      severity: 'error',
      detail: this.translate.instant('EnterAllData')});
  }
}else{
  let model = this.formWorkCard.value;
  model.Id = this.currentworkCardId;
  this.XtraAndPos_Country.httpPutXtraAndPosCountryUpdateCountryService({
    id: this.currentworkCardId,
    body: model
  }).subscribe((value: any) => {
    let jsonData = JSON.parse(value);
    this.MessageService.add({
      severity: 'success',
      detail: jsonData.Message});
    this.refreshTable()
    this.formWorkCard.reset();
    this.isEdit = false;
  });
  }

    }
printPdf() {
  const tableData = this.workCardData.map((workCard) => {
    return {
      notes: workCard.Notes,
      workCardNameEn: workCard.NameEn,
      workCardNameAr: workCard.NameAr,
      createdDate: workCard.CreatedDate,
      id: workCard.Id
    };
  });

 const columns = ['ملاحظات',' الاسم بالانجليزية','الاسم ','تاريخ الانشاء','كود البطاقة'];
  this.ExportData.printPdf(tableData,columns,'workCard.pdf')
}


exportData() {
  const tableData = this.workCardData.map((workCard) => {
    return {
      id:workCard.Id,
      createdDate : workCard.CreatedDate,
      workCardNameAr: workCard.NameAr,
      workCardNameEn: workCard.NameEn,
      notes: workCard.Notes
    };
  });
this.ExportData.toExcel(tableData,'workCard.xlsx')

}

}
