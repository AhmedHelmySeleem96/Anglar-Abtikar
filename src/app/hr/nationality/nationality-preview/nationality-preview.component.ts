import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { XtraAndPosNationalityService } from 'src/app/shared/api';
import { ExportData } from 'src/app/services/Export-data.service';


@Component({
  selector: 'app-nationality-preview',
  templateUrl: './nationality-preview.component.html',
  styleUrls: ['./nationality-preview.component.css'],
  providers: [ExportData]
})
export class NationalityPreviewComponent implements OnInit  {
  constructor(private router: Router,private toastr:ToastrService
    ,private XtraAndPosNationalityService :  XtraAndPosNationalityService,private ExportData :ExportData){};
    addNationality(){
      this.router.navigateByUrl('hr/nationality/createNationality');
    }
    nationalityData :any[] = [] ;
    cols :any ;
    @ViewChild('dt') dt: any;
    ngOnInit(): void {

      this.XtraAndPosNationalityService.httpGetXtraAndPosNationalityGetNationalityService().subscribe((value:any)=>{
        let jsonData = JSON.parse(value);
        console.log(jsonData)
        this.nationalityData = jsonData.Obj.nationality;
      });
      this.cols = [
        { field: 'Id', header: 'CityId' },
        { field: 'CreatedDate', header: 'CreatedDate' },
        { field: 'NameAr', header: 'NameAr' },
        { field: 'NameEn', header: 'NameEn' },
        { field: 'Notes', header: 'Notes' },
      ];
    }
    exportData() {
      const tableData = this.nationalityData.map((nationality) => {
        return {
          id:nationality.Id,
          createdDate : nationality.CreatedDate,
          nationalityNameAr: nationality.NameAr,
          nationalityNameEn: nationality.NameEn,
          notes: nationality.Notes
        };
      });

      this.ExportData.toExcel(tableData,'nationality.xlsx')
    }


    printPdf() {
      const tableData = this.nationalityData.map((nationality) => {
        return {
          id:nationality.Id,
          createdDate : nationality.CreatedDate,
          nationalityNameAr: nationality.NameAr,
          nationalityNameEn: nationality.NameEn,
          notes: nationality.Notes
        };
      });

      const columns = ['ملاحظات',' الاسم بالانجليزية','الاسم ','تاريخ الانشاء','كود الجنسية'];
      this.ExportData.printPdf(tableData,columns,'nationality.pdf')
    }

    setEdit(nationality: any) {
      const navigationExtras: NavigationExtras = {
        queryParams: { edit: true, nationalityData: JSON.stringify(nationality)
        },
      };

      this.router.navigate(['hr/nationality/createNationality'], navigationExtras);
    }
    onSearch(searchValue:Event): void {
      this.dt.filterGlobal((searchValue.target as HTMLInputElement).value, 'contains');
    }
    showDeleteConfirm(nationality: any) {
      this.toastr
        .info('Do you want to delete this city?', 'Confirmation', {
          timeOut: 0,
          extendedTimeOut: 0,
          closeButton: true,
          positionClass: 'toast-top-center',
          tapToDismiss: false,
        })
        .onTap.subscribe(() => {
          this.deleteNationality(nationality);
        });
    }
    deleteNationality(nationality: any) {
      this.XtraAndPosNationalityService.httpDeleteXtraAndPosNationalityDeleteNationalityService({
        id: nationality.Id,
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
      this.XtraAndPosNationalityService.httpGetXtraAndPosNationalityGetNationalityService().subscribe((value: any) => {
        let jsonnationalityData = JSON.parse(value);
        this.nationalityData = jsonnationalityData.Obj.nationality;
      });
    }
    getnationality(id :any){
      return this.nationalityData.filter((r)=>r.Id===id)[0]
    }
    goHome(){
      this.router.navigateByUrl('');
    }
}




