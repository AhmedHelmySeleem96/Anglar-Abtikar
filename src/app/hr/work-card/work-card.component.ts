import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { XtraAndPosLookUpsService, XtraAndPosWorkCardService } from 'src/app/shared/api';
import { ExportData } from 'src/app/services/Export-data.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    ,private XtraAndPosWorkCardService :  XtraAndPosWorkCardService,private ExportData :ExportData,
    private MessageService : MessageService,public translate :TranslateService,
    private XtraAndPosLookUpsService :XtraAndPosLookUpsService
    ){};
    workCardData :any[] = [] ;
    statusData :any[] = [] ;
    allowenceData :any[] = [] ;
cols :any ;
unspecifiedHours  =false;
deleteId : any ;
@ViewChild('dt') dt: any;
formWorkCard :FormGroup= this.fb.group({cardNameAr: new FormControl('', [Validators.required]),
cardNameEn: new FormControl(''),
notes: new FormControl(null),
unspecifiedHours: new FormControl(false),
startWorkTime: new FormControl(null),
statusId: new FormControl('1'),
endWorkTime: new FormControl(null),
latenessAllowed: new FormControl(null),
latenessAllowedPeriod: new FormControl(null),
latenessAllowedPercent: new FormControl(null),
overTimeAllowed: new FormControl(null),
overTimeAllowedPeriod: new FormControl(null),
overTimeAllowedPercent: new FormControl(null),
holidaysDayIds: this.fb.array([])
})
isEdit:boolean= false ;
@ViewChild('formElement') formElement!: ElementRef;
currentworkCardId :any ;
daysOfWeek : any =[
  { id: 1, NameAr: "السبت", NameEn: "Saturday" },
  { id: 2, NameAr: "الأحد", NameEn: "Sunday" },
  { id: 3, NameAr: "الاثنين", NameEn: "Monday" },
  { id: 4, NameAr: "الثلاثاء", NameEn: "Tuesday" },
  { id: 5, NameAr: "الأربعاء", NameEn: "Wednesday" },
  { id: 6, NameAr: "الخميس", NameEn: "Thursday" },
  { id: 7, NameAr: "الجمعة", NameEn: "Friday" }
];
ngOnInit(): void {
  this.XtraAndPosWorkCardService.httpGetXtraAndPosWorkCardGetWorkCardService().subscribe((value:any)=>{
    let jsonData = JSON.parse(value);
    this.workCardData = jsonData.Obj.card;
  });
  this.cols = [
    { field: 'Id', header: 'Id' },
    { field: 'CreatedDate', header: 'CreatedDate' },
    { field: 'NameAr', header: 'NameAr' },
    { field: 'NameEn', header: 'NameEn' },
    { field: 'Notes', header: 'Notes' },
  ];

  this.XtraAndPosLookUpsService.httpGetXtraAndPosLookUpsGetStatus().subscribe((value:any)=>{
    let jsonData = JSON.parse(value);
    this.statusData = jsonData;
  });
  this.XtraAndPosLookUpsService.httpGetXtraAndPosLookUpsGetLatestAllowence().subscribe((value:any)=>{
    let jsonData = JSON.parse(value);
    this.allowenceData = jsonData;
  });
}
get holidaysDayIds() {
  return this.formWorkCard.get('holidaysDayIds') as FormArray;
}
onCheckboxChange(event: any, id: number) {
  const formArray: FormArray = this.holidaysDayIds;

  if (event.target.checked) {
      formArray.push(this.fb.control(id));
  } else {
      const index = formArray.controls.findIndex(x => x.value === id);
      formArray.removeAt(index);
  }
}

setEdit(workCard: any) {
  console.log(workCard);
  this.formWorkCard.patchValue({
    cardNameAr: workCard.NameAr,
    cardNameEn: workCard.NameEn,
    notes: workCard.Notes,
    statusId: workCard.StatusId,
    unspecifiedHours: workCard.UnspecifiedHours,
    startWorkTime: workCard.StartWorkTime,
    endWorkTime: workCard.EndWorkTime,
    latenessAllowed: workCard.LatenessAllowed,
    latenessAllowedPeriod: workCard.LatenessAllowedPeriod,
    latenessAllowedPercent: workCard.LatenessAllowedPercent,
    overTimeAllowed: workCard.OverTimeAllowed,
    overTimeAllowedPeriod: workCard.OverTimeAllowedPeriod,
    overTimeAllowedPercent: workCard.OverTimeAllowedPercent,
    holidaysDayIds: workCard.HolidaysDayIds,
  });
  this.isEdit = true;
  this.currentworkCardId = workCard.Id;

  this.focusOnForm();
}
unspecifiedHoursChange(){
  this.unspecifiedHours = !this.unspecifiedHours
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
  this.XtraAndPosWorkCardService.httpDeleteXtraAndPosWorkCardDeleteWorkCardService({
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
  this.XtraAndPosWorkCardService.httpGetXtraAndPosWorkCardGetWorkCardService().subscribe((value: any) => {
    let jsonworkCardData = JSON.parse(value);
    this.workCardData = jsonworkCardData.Obj.card;
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
    const selectedDayIds = this.formWorkCard.value.holidaysDayIds;
  let model = this.formWorkCard.value;
  model.statusId= 1  ;
  this.XtraAndPosWorkCardService.httpPostXtraAndPosWorkCardCreateWorkCardService({
    body : model
  }).subscribe((value:any)=>{
    let jsonData = JSON.parse(value);
    this.MessageService.add({
      severity: 'success',
      detail: jsonData.Message});
      this.formWorkCard.reset();
      this.formWorkCard.get('StatusId')?.setValue('1');
      this.refreshTable();
  })}else{
    this.MessageService.add({
      severity: 'error',
      detail: this.translate.instant('EnterAllData')});
  }
}else{
  let model = this.formWorkCard.value;
  model.Id = this.currentworkCardId;
  this.XtraAndPosWorkCardService.httpPutXtraAndPosWorkCardUpdateWorkCardService({
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
