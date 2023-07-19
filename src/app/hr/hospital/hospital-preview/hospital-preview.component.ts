import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { XtraAndPosHospitalService, XtraAndPosLookUpsService } from 'src/app/shared/api';
import { ExportData } from 'src/app/services/Export-data.service';
@Component({
  selector: 'app-hospital-preview',
  templateUrl: './hospital-preview.component.html',
  styleUrls: ['./hospital-preview.component.css'],
  providers: [ExportData]

})
export class HospitalPreviewComponent implements OnInit {
    constructor(private router: Router,private toastr:ToastrService
      ,private XtraAndPosHospitalService :  XtraAndPosHospitalService,private ExportData :ExportData,
      private XtraAndPosLookUpsService :XtraAndPosLookUpsService){};
      addHospital(){
        this.router.navigateByUrl('hr/hospital/createHospital');
      }
      hospitalData :any[] = [] ;
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
          { field: 'Id', header: 'HospitalId' },
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
      setEdit(hospital: any) {
        const navigationExtras: NavigationExtras = {
          queryParams: { edit: true, hospitalData: JSON.stringify(hospital)
          },
        };

        this.router.navigate(['hr/hospital/createHospital'], navigationExtras);
      }
      onSearch(searchValue:Event): void {
        this.dt.filterGlobal((searchValue.target as HTMLInputElement).value, 'contains');
      }
      showDeleteConfirm(hospital: any) {
        this.toastr
          .info('Do you want to delete this hospital?', 'Confirmation', {
            timeOut: 0,
            extendedTimeOut: 0,
            closeButton: true,
            positionClass: 'toast-top-center',
            tapToDismiss: false,
          })
          .onTap.subscribe(() => {
            this.deleteHospital(hospital);
          });
      }
      deleteHospital(hospital: any) {
        this.XtraAndPosHospitalService.httpDeleteXtraAndPosHospitalDeleteHospitalService({
          id: hospital.Id,
        }).subscribe((value: any) => {
          let jsonData = JSON.parse(value);
          this.toastr.clear();
          this.toastr.success(jsonData.Message);
          this.refreshTable();
        }, (error: any) => {
          this.toastr.error('Failed to delete hospital.');
        });
      }

      refreshTable() {
        this.XtraAndPosHospitalService.httpGetXtraAndPosHospitalGetHospitalService().subscribe((value: any) => {
          let jsonhospitalData = JSON.parse(value);
          this.hospitalData = jsonhospitalData.Obj.hospital;
        });
      }
      gethospital(id :any){
        return this.hospitalData.filter((r)=>r.Id===id)[0]
      }
      goHome(){
        this.router.navigateByUrl('');
      }


      printPdf() {
        const tableData = this.hospitalData.map((hospital) => {
          return {
            notes: hospital.Notes,
            hospitalNameEn: hospital.NameEn,
            hospitalNameAr: hospital.NameAr,
            createdDate: hospital.CreatedDate,
            id: hospital.Id
          };
        });

       const columns = ['ملاحظات',' الاسم بالانجليزية','الاسم ','تاريخ الانشاء','كود المستشفي'];
        this.ExportData.printPdf(tableData,columns,'hospital.pdf')
      }


      exportData() {
        const tableData = this.hospitalData.map((hospital) => {
          return {
            id:hospital.Id,
            createdDate : hospital.CreatedDate,
            hospitalNameAr: hospital.NameAr,
            hospitalNameEn: hospital.NameEn,
            notes: hospital.Notes
          };
        });
      this.ExportData.toExcel(tableData,'hospital.xlsx')

      }
}
