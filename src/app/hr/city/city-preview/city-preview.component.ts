import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportData } from 'src/app/services/Export-data.service';
import { XtraAndPosCityService, XtraAndPosCountryService } from 'src/app/shared/api';
@Component({
  selector: 'app-city-preview',
  templateUrl: './city-preview.component.html',
  styleUrls: ['./city-preview.component.css'],
  providers: [ExportData]
})
export class CityPreviewComponent implements OnInit {
  constructor(private router: Router,private toastr:ToastrService
    ,private XtraAndPOS_City :XtraAndPosCityService,
    private fb:FormBuilder
    ,private XtraAndPos_Country :  XtraAndPosCountryService,private ExportData :ExportData){};
    AddCity(){
      this.router.navigateByUrl('hr/city/createCity');
  }
  isEdit:boolean= false ;
     formCity :FormGroup= this.fb.group({cityNameAr: new FormControl('', [Validators.required]),
     cityNameEn: new FormControl('', [Validators.required]),
     countryId :new FormControl('', [Validators.required]),
     notes: new FormControl(null),})
  cityData :any[] = [] ;
  countryData :any[] = [] ;
  cols :any ;
  currentcityId: any ;
@ViewChild('formElement') formElement!: ElementRef;
  @ViewChild('dt') dt: any;
  ngOnInit(): void {
    this.XtraAndPOS_City.httpGetXtraAndPosCityGetCityService().subscribe((value : any)=>{
      let jsoncityData = JSON.parse(value);
      this.cityData  = jsoncityData.Obj.city;
    });
    this.XtraAndPos_Country.httpGetXtraAndPosCountryGetCountryService().subscribe((value:any)=>{
      let jsonData = JSON.parse(value);
      this.countryData = jsonData.Obj.country;
    });
    this.cols = [
      { field: 'Id', header: 'CityId' },
      { field: 'CreatedDate', header: 'CreatedDate' },
      { field: 'NameAr', header: 'NameAr' },
      { field: 'NameEn', header: 'NameEn' },
      { field: 'CountryId', header: 'Country' },
      { field: 'Notes', header: 'Notes' },
    ];
  }
  setEdit(city: any) {
    this.formCity.patchValue({
      cityNameAr: city.NameAr,
      cityNameEn: city.NameEn,
      countryId: city.CountryId,
      notes: city.Notes

    });
    this.isEdit = true;
    this.currentcityId = city.Id;

    this.focusOnForm();
  }
  focusOnForm() {
    if (this.formElement && this.formElement.nativeElement) {
      this.formElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
      this.formElement.nativeElement.focus();
    }
  }
  OnSubmit(Form: FormGroup) {
    if(!this.isEdit){
    if(this.formCity.valid)
    {
    let model = this.formCity.value;
    this.XtraAndPOS_City.httpPostXtraAndPosCityCreateCityService({
      body : model
    }).subscribe((value:any)=>{
      let jsonData = JSON.parse(value);
        this.toastr.success(jsonData.Message)
        this.formCity.reset();
    this.refreshTable()

    })}else{
      this.toastr.success("ادخل البيانات المطلوبة")
    }
  }else{
    let model = this.formCity.value;
    model.Id = this.currentcityId;
    this.XtraAndPOS_City.httpPutXtraAndPosCityUpdateCityService({
      id: this.currentcityId,
      body: model
    }).subscribe((value: any) => {
      let jsonData = JSON.parse(value);
      this.toastr.success(jsonData.Message);
    this.isEdit = false;
    this.formCity.reset();
    this.refreshTable()

    });
    }
      }

  exportData() {
    const tableData = this.cityData.map((city) => {
      return {
        notes: city.Notes,
        countryId: (this.getCountry(city.CountryId)).NameAr,
        cityNameEn: city.NameEn,
        cityNameAr: city.NameAr,
        createdDate : city.CreatedDate,
        id:city.Id
      };
    });
this.ExportData.toExcel(tableData,'city.xlsx')
  }
  printPdf() {
    const tableData = this.cityData.map((city) => {
      return {
        notes: city.Notes,
        countryId: (this.getCountry(city.CountryId)).NameAr,
        cityNameEn: city.NameEn,
        cityNameAr: city.NameAr,
        createdDate : city.CreatedDate,
        id:city.Id
      };
    });
    const columns = ['كود المدينة','تاريخ الانشاء','الاسم','الاسم بالانجليزية','الدولة','ملاحظات'].reverse();
    this.ExportData.printPdf(tableData,columns,'city.pdf')
  }
onSearch(searchValue:Event): void {
  this.dt.filterGlobal((searchValue.target as HTMLInputElement).value, 'contains');
}
showDeleteConfirm(city: any) {
  this.toastr
    .info('Do you want to delete this city?', 'Confirmation', {
      timeOut: 0,
      extendedTimeOut: 0,
      closeButton: true,
      positionClass: 'toast-top-center',
      tapToDismiss: false,
    })
    .onTap.subscribe(() => {
      this.deleteCity(city);
    });
}
deleteCity(city: any) {
  this.XtraAndPOS_City.httpDeleteXtraAndPosCityDeleteCityService({
    id: city.Id,
  }).subscribe((value: any) => {
    let jsonData = JSON.parse(value);
    this.toastr.clear();
    this.toastr.success(jsonData.Message);
    this.refreshTable();
    this.formCity.reset();
  }, (error: any) => {
    this.toastr.error('Failed to delete city.');
  });
}

refreshTable() {
  this.XtraAndPOS_City.httpGetXtraAndPosCityGetCityService().subscribe((value: any) => {
    let jsoncityData = JSON.parse(value);
    this.cityData = jsoncityData.Obj.city;
  });
}
getCountry(id :any){
  return this.countryData.filter((r)=>r.Id===id)[0]
}
goHome(){
  this.router.navigateByUrl('');
}
}
