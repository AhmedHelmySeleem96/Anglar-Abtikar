import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { XtraAndPosAllowenceService, XtraAndPosLookUpsService } from 'src/app/shared/api';
import { ExportData } from 'src/app/services/Export-data.service';

@Component({
  selector: 'app-allowence-preview',
  templateUrl: './allowence-preview.component.html',
  styleUrls: ['./allowence-preview.component.css'],
  providers: [ExportData]

})
export class AllowencePreviewComponent implements OnInit {
  constructor(private router: Router,private toastr:ToastrService
    ,private XtraAndPosAllowenceService :  XtraAndPosAllowenceService,private ExportData :ExportData,
    private XtraAndPosLookUpsService :XtraAndPosLookUpsService){};
    addAllowence(){
      this.router.navigateByUrl('hr/allowence/createAllowence');
    }
    allowenceData :any[] = [] ;
    statusData : any[] = [];
    cols :any ;
    @ViewChild('dt') dt: any;

    ngOnInit(): void {
     this.refreshTable();
      this.XtraAndPosLookUpsService.httpGetXtraAndPosLookUpsGetStatus().subscribe((value:any)=>{
        let jsonData = JSON.parse(value);
        this.statusData = jsonData;
      });
      this.cols = [
        { field: 'Id', header: 'AllowenceId' },
        { field: 'CreatedDate', header: 'CreatedDate' },
        { field: 'NameAr', header: 'NameAr' },
        { field: 'NameEn', header: 'NameEn' },
        { field: 'StatusId', header: 'StatusId' },
        { field: 'Notes', header: 'Notes' },
      ];
    }
    getStatus(Id :any){
      return this.statusData.filter(r=>r.id===Id)[0];
    }
    setEdit(allowence: any) {
      const navigationExtras: NavigationExtras = {
        queryParams: { edit: true, allowenceData: JSON.stringify(allowence)
        },
      };

      this.router.navigate(['hr/allowence/createAllowence'], navigationExtras);
    }
    onSearch(searchValue:Event): void {
      this.dt.filterGlobal((searchValue.target as HTMLInputElement).value, 'contains');
    }
    showDeleteConfirm(allowence: any) {
      this.toastr
        .info('Do you want to delete this allowence?', 'Confirmation', {
          timeOut: 0,
          extendedTimeOut: 0,
          closeButton: true,
          positionClass: 'toast-top-center',
          tapToDismiss: false,
        })
        .onTap.subscribe(() => {
          this.deleteAllowence(allowence);
        });
    }
    deleteAllowence(allowence: any) {
      this.XtraAndPosAllowenceService.httpDeleteXtraAndPosAllowenceDeleteAllowenceService({
        id: allowence.Id,
      }).subscribe((value: any) => {
        let jsonData = JSON.parse(value);
        this.toastr.clear();
        this.toastr.success(jsonData.Message);
        this.refreshTable();
      }, (error: any) => {
        this.toastr.error('Failed to delete allowence.');
      });
    }

    refreshTable() {
      this.XtraAndPosAllowenceService.httpGetXtraAndPosAllowenceGetAllowenceService().subscribe((value: any) => {
        let jsonallowenceData = JSON.parse(value);
        this.allowenceData = jsonallowenceData.Obj.allowence;
      });
    }
    getallowence(id :any){
      return this.allowenceData.filter((r)=>r.Id===id)[0]
    }
    goHome(){
      this.router.navigateByUrl('');
    }


    printPdf() {
      const tableData = this.allowenceData.map((allowence) => {
        return {
          notes: allowence.Notes,
          allowenceNameEn: allowence.NameEn,
          allowenceNameAr: allowence.NameAr,
          createdDate: allowence.CreatedDate,
          id: allowence.Id
        };
      });

     const columns = ['ملاحظات',' الاسم بالانجليزية','الاسم ','تاريخ الانشاء','كود البدل'];
      this.ExportData.printPdf(tableData,columns,'allowence.pdf')
    }


    exportData() {
      const tableData = this.allowenceData.map((allowence) => {
        return {
          id:allowence.Id,
          createdDate : allowence.CreatedDate,
          allowenceNameAr: allowence.NameAr,
          allowenceNameEn: allowence.NameEn,
          notes: allowence.Notes
        };
      });
    this.ExportData.toExcel(tableData,'allowence.xlsx')
    }
}
