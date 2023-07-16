import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { XtraAndPosCountryService } from 'src/app/shared/api';
import { ExportData } from 'src/app/services/Export-data.service';
import { table } from 'console';

@Component({
  selector: 'app-country-preivew',
  templateUrl: './country-preivew.component.html',
  styleUrls: ['./country-preivew.component.css'],
  providers: [ExportData]
})
export class CountryPreivewComponent implements OnInit  {
  constructor(private router: Router,private toastr:ToastrService
    ,private XtraAndPos_Country :  XtraAndPosCountryService,private ExportData :ExportData){};
addCountry(){
  this.router.navigateByUrl('hr/country/createCountry');
}
countryData :any[] = [] ;
cols :any ;
@ViewChild('dt') dt: any;

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
  const navigationExtras: NavigationExtras = {
    queryParams: { edit: true, countryData: JSON.stringify(country)
    },
  };

  this.router.navigate(['hr/country/createCountry'], navigationExtras);
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
this.ExportData.toExcel(table,'country.xlsx')

}



}

