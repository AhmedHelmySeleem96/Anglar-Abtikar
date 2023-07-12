import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { XtraAndPosCountryService } from 'src/app/shared/api';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

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
  const tableData = this.countryData.map((country) => {
    return {
      id:country.Id,
      createdDate : country.CreatedDate,
      countryNameAr: country.NameAr,
      countryNameEn: country.NameEn,
      notes: country.Notes
    };
  });

  const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(tableData);
  const columnWidths = this.calculateColumnWidths(tableData);
  worksheet['!cols'] = columnWidths;
  const workbook: XLSX.WorkBook = { Sheets: { 'Data': worksheet }, SheetNames: ['Data'] };
  const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  saveAs(blob, 'Data.xlsx');
}

calculateColumnWidths(data: any[]): XLSX.ColInfo[] {
  const columnWidths: XLSX.ColInfo[] = [];

  const columns = Object.keys(data[0]);
  for (let i = 0; i < columns.length; i++) {
    const column = columns[i];
    const columnWidth: XLSX.ColInfo = { width: 0, wch: 0, MDW: 0 };
    let maxLength = column.length;
    for (let j = 0; j < data.length; j++) {
      const cellValue = data[j][column];
      const cellLength = cellValue ? cellValue.toString().length : 0;
      if (cellLength > maxLength) {
        maxLength = cellLength;
      }
    }

    columnWidth.width = maxLength * 1.2;
    columnWidth.wch = maxLength;
    columnWidth.MDW = 1;

    columnWidths.push(columnWidth);
  }

  return columnWidths;
}

}

