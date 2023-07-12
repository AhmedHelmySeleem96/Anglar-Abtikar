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
exportData() {
  this.XtraAndPos_Country.httpGetXtraAndPosCountryGetCountryService().subscribe(
    (value: any) => {
      let jsonData = JSON.parse(value);
      let countryData = jsonData.Obj.country;

      // Perform the necessary data manipulation and formatting for export

      // Example: Convert the data to a CSV string
      let csvData = this.convertToCsv(countryData);

      // Example: Save the CSV file using file-saver library
      const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
      // saveAs(blob, 'data.csv');
    },
    (error: any) => {
      // Handle error if necessary
    }
  );
}

convertToCsv(data: any[]): string {
  let headerRow = Object.keys(data[0]).join(',');
  let contentRows = data.map((item) => Object.values(item).join(','));
  return headerRow + '\n' + contentRows.join('\n');
}
}

