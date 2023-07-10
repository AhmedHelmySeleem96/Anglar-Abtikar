import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { XtraAndPosCityService, XtraAndPosCountryService } from 'src/app/shared/api';

@Component({
  selector: 'app-city-preview',
  templateUrl: './city-preview.component.html',
  styleUrls: ['./city-preview.component.css']
})
export class CityPreviewComponent implements OnInit {
  constructor(private router: Router,private toastr:ToastrService
    ,private XtraAndPOS_City :XtraAndPosCityService
    ,private XtraAndPos_Country :  XtraAndPosCountryService){};
    AddCity(){
      this.router.navigateByUrl('hr/city/createCity');
  }
  cityData :any[] = [] ;
  countryData :any[] = [] ;
  cols :any ;
  products  = [{name : 'ahmed'}]
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
      { field: 'CreatedDate', header: 'CreatedData' },
      { field: 'NameAr', header: 'NameAr' },
      { field: 'NameEn', header: 'NameEn' },
      { field: 'CountryId', header: 'Country' },
      { field: 'Notes', header: 'Notes' },
    ];
  }
  setEdit(city: any) {
    const navigationExtras: NavigationExtras = {
      queryParams: { edit: true, cityData: JSON.stringify(city)
      },
    };

    this.router.navigate(['hr/city/createCity'], navigationExtras);
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
    this.toastr.success(jsonData.Message);
    this.toastr.clear();
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
GetCountry(id :any){
  return this.countryData.filter((r)=>r.Id===id)[0]
}
GoHome(){
  this.router.navigateByUrl('');
}
}
