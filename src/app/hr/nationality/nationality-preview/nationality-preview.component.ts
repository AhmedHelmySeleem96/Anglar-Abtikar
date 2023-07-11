import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { XtraAndPosEmployeeEpService } from 'src/app/shared/api';
@Component({
  selector: 'app-nationality-preview',
  templateUrl: './nationality-preview.component.html',
  styleUrls: ['./nationality-preview.component.css']
})
export class NationalityPreviewComponent implements OnInit  {
  constructor(private router: Router,private toastr:ToastrService
    ,private XtraAndPosEmployeeEpService :  XtraAndPosEmployeeEpService){};
    addNationality(){
      this.router.navigateByUrl('hr/nationality/createNationality');
    }
    nationalityData :any[] = [] ;
    cols :any ;
    @ViewChild('dt') dt: any;
    ngOnInit(): void {

      this.XtraAndPosEmployeeEpService.httpGetExtraAndPosEmployeeManagementInfo().subscribe((value:any)=>{
        let jsonData = JSON.parse(value);
        console.log(jsonData)
        this.nationalityData = jsonData.Obj.nationality;
      });
      this.cols = [
        { field: 'Id', header: 'CityId' },
        { field: 'CreatedDate', header: 'CreatedData' },
        { field: 'NameAr', header: 'NameAr' },
        { field: 'NameEn', header: 'NameEn' },
        { field: 'Notes', header: 'Notes' },
      ];
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
      this.XtraAndPosEmployeeEpService.httpDeleteExtraAndPosEmployeeDeleteNationality({
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
      this.XtraAndPosEmployeeEpService.httpGetExtraAndPosEmployeeManagementInfo().subscribe((value: any) => {
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




