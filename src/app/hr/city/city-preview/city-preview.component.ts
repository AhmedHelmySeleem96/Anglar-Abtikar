import { Component, OnInit, ViewChild } from '@angular/core';
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
    ,private XtraAndPOS_City :XtraAndPosCityService
    ,private XtraAndPos_Country :  XtraAndPosCountryService,private ExportData :ExportData){};
    AddCity(){
      this.router.navigateByUrl('hr/city/createCity');
  }
  cityData :any[] = [] ;
  countryData :any[] = [] ;
  cols :any ;
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
  setEdit(city: any) {
    const navigationExtras: NavigationExtras = {
      queryParams: { edit: true, cityData: JSON.stringify(city)
      },
    };

    this.router.navigate(['hr/city/createCity'], navigationExtras);
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
