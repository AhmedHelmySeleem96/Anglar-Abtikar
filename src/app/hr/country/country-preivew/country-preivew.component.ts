import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { XtraAndPosCountryService } from 'src/app/shared/api';
import { ExportData } from 'src/app/services/Export-data.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-country-preivew',
  templateUrl: './country-preivew.component.html',
  styleUrls: ['./country-preivew.component.css'],
  providers: [ExportData]
})
export class CountryPreivewComponent implements OnInit  {
  constructor(private router: Router,private toastr:ToastrService,private fb:FormBuilder
    ,private XtraAndPos_Country :  XtraAndPosCountryService,private ExportData :ExportData){};
addCountry(){
  this.router.navigateByUrl('hr/country/createCountry');
}
countryData :any[] = [] ;
cols :any ;
@ViewChild('dt') dt: any;
formCountry :FormGroup= this.fb.group({countryNameAr: new FormControl('', [Validators.required]),
countryNameEn: new FormControl('', [Validators.required]),
notes: new FormControl(null),})
isEdit:boolean= false ;
@ViewChild('formElement') formElement!: ElementRef;
currentcountryId :any ;
ngOnInit(): void {
  this.XtraAndPos_Country.httpGetXtraAndPosCountryGetCountryService().subscribe((value:any)=>{
    let jsonData = JSON.parse(value);
    this.countryData = jsonData.Obj.country;
  });
  this.cols = [
    { field: 'Id', header: 'CountryId' },
    { field: 'CreatedDate', header: 'CreatedDate' },
    { field: 'NameAr', header: 'NameAr' },
    { field: 'NameEn', header: 'NameEn' },
    { field: 'Notes', header: 'Notes' },
  ];
}


setEdit(country: any) {
  this.formCountry.patchValue({
    countryNameAr: country.NameAr,
    countryNameEn: country.NameEn,
    notes: country.Notes
  });
  this.isEdit = true;
  this.currentcountryId = country.Id;

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
showDeleteConfirm(country: any) {
  this.toastr
    .info('Do you want to delete this Country?', 'Confirmation', {
      timeOut: 0,
      extendedTimeOut: 0,
      closeButton: true,
      positionClass: 'toast-top-center',
      tapToDismiss: false,
    })
    .onTap.subscribe(() => {
      this.deleteCountry(country);
    });
}
deleteCountry(country: any) {
  this.XtraAndPos_Country.httpDeleteXtraAndPosCountryDeleteCountryService({
    id: country.Id,
  }).subscribe((value: any) => {
    let jsonData = JSON.parse(value);
    this.toastr.clear();
    this.toastr.success(jsonData.Message);
    this.refreshTable();
    this.formCountry.reset();
  }, (error: any) => {
    this.toastr.error('Failed to delete country.');
  });
}

refreshTable() {
  this.XtraAndPos_Country.httpGetXtraAndPosCountryGetCountryService().subscribe((value: any) => {
    let jsoncountryData = JSON.parse(value);
    this.countryData = jsoncountryData.Obj.country;
  });
}
getCountry(id :any){
  return this.countryData.filter((r)=>r.Id===id)[0]
}
goHome(){
  this.router.navigateByUrl('');
}
onSubmit(Form: FormGroup) {
  if(!this.isEdit){
  if(this.formCountry.valid)
  {
  let model = this.formCountry.value;
  this.XtraAndPos_Country.httpPostXtraAndPosCountryCreateCountryService({
    body : model
  }).subscribe((value:any)=>{
    let jsonData = JSON.parse(value);
      this.toastr.success(jsonData.Message)
      this.formCountry.reset();
      this.refreshTable();
  })}else{
    this.toastr.success("ادخل البيانات المطلوبة")
  }
}else{
  let model = this.formCountry.value;
  model.Id = this.currentcountryId;
  this.XtraAndPos_Country.httpPutXtraAndPosCountryUpdateCountryService({
    id: this.currentcountryId,
    body: model
  }).subscribe((value: any) => {
    let jsonData = JSON.parse(value);
    this.toastr.success(jsonData.Message);
    this.refreshTable()
    this.formCountry.reset();
    this.isEdit = false;
  });
  }

    }
printPdf() {
  const tableData = this.countryData.map((country) => {
    return {
      notes: country.Notes,
      countryNameEn: country.NameEn,
      countryNameAr: country.NameAr,
      createdDate: country.CreatedDate,
      id: country.Id
    };
  });

 const columns = ['ملاحظات',' الاسم بالانجليزية','الاسم ','تاريخ الانشاء','كود الدولة'];
  this.ExportData.printPdf(tableData,columns,'country.pdf')
}


exportData() {
  const tableData = this.countryData.map((country) => {
    return {
      id:country.Id,
      createdDate : country.CreatedDate,
      countryNameAr: country.NameAr,
      countryNameEn: country.NameEn,
      notes: country.Notes
    };
  });
this.ExportData.toExcel(tableData,'country.xlsx')

}



}

