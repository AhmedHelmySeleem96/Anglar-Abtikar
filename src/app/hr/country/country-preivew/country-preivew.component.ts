import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { XtraAndPosCountryService } from 'src/app/shared/api';

@Component({
  selector: 'app-country-preivew',
  templateUrl: './country-preivew.component.html',
  styleUrls: ['./country-preivew.component.css']
})
export class CountryPreivewComponent implements OnInit  {
  constructor(private router: Router,private toastr:ToastrService
    ,private XtraAndPos_Country :  XtraAndPosCountryService){};
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
    { field: 'Id', header: 'CityId' },
    { field: 'CreatedDate', header: 'CreatedData' },
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
    .info('Do you want to delete this city?', 'Confirmation', {
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
    this.toastr.error('Failed to delete city.');
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
}

