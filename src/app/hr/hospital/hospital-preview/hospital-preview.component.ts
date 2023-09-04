import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { XtraAndPosHospitalService, XtraAndPosLookUpsService } from 'src/app/shared/api';
import { ExportData } from 'src/app/services/Export-data.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-hospital-preview',
  templateUrl: './hospital-preview.component.html',
  styleUrls: ['./hospital-preview.component.css'],
  providers: [ExportData,MessageService]

})
export class HospitalPreviewComponent implements OnInit {
    constructor(private router: Router,private toastr:ToastrService,private fb:FormBuilder
      ,private XtraAndPosHospitalService :  XtraAndPosHospitalService,private ExportData :ExportData,
      private XtraAndPosLookUpsService :XtraAndPosLookUpsService
      ,private MessageService : MessageService,public translate :TranslateService){this.formHospital = this.createForm();};
      addHospital(){
        this.router.navigateByUrl('hr/hospital/createHospital');
      }
      formHospital : FormGroup;
      createForm() : FormGroup{
        return this.fb.group({NameAr: new FormControl('', [Validators.required]),
        NameEn: new FormControl(''),
        StatusId:new FormControl('1'),
        notes: new FormControl(null),})
      }
      isEdit:boolean= false ;

      hospitalData :any[] = [] ;
      statusData : any[] = [];
      cols :any ;
      currenthospitalId: any  ;
      @ViewChild('dt') dt: any;
      @ViewChild('formElement') formElement!: ElementRef;

      ngOnInit(): void {
        this.refreshTable();
        this.createForm();
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
        this.formHospital.patchValue({
          NameAr: hospital.NameAr,
          NameEn: hospital.NameEn,
          statusId : hospital.StatusId,
          notes: hospital.Notes
        });
        this.isEdit = true;
        this.currenthospitalId = hospital.Id;

        this.focusOnForm();
      }
      focusOnForm() {
        if (this.formElement && this.formElement.nativeElement) {
          this.formElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
          this.formElement.nativeElement.focus();
        }
      }
      onSearch(searchValue:Event): void {
        this.dt.filterGlobal((searchValue.target as HTMLInputElement).value, 'contains');
      }
      // showDeleteConfirm(hospital: any) {
      //   this.toastr
      //     .info('Do you want to delete this hospital?', 'Confirmation', {
      //       timeOut: 0,
      //       extendedTimeOut: 0,
      //       closeButton: true,
      //       positionClass: 'toast-top-center',
      //       tapToDismiss: false,
      //     })
      //     .onTap.subscribe(() => {
      //       this.deleteHospital(hospital);
      //     });
      // }
      // deleteHospital(hospital: any) {
      //   this.XtraAndPosHospitalService.httpDeleteXtraAndPosHospitalDeleteHospitalService({
      //     id: hospital.Id,
      //   }).subscribe((value: any) => {
      //     let jsonData = JSON.parse(value);
      //     this.toastr.clear();
      //     this.toastr.success(jsonData.Message);
      //     this.refreshTable();
      //     this.formHospital.reset();
      //     this.formHospital.get('StatusId')?.setValue('1');
      //   }, (error: any) => {
      //     this.toastr.error('Failed to delete hospital.');
      //   });
      // }
      deleteId:any;
      showDeleteConfirm(hospital: any) {
        this.deleteId = hospital.Id,
        this.MessageService.add({
          key: 'c',
          sticky: true,
          severity: 'warn',
          summary: this.translate.instant('AreYouSureToDelete') + ' ' + hospital.NameAr + ' ' + this.translate.instant('?'),
          detail: this.translate.instant('Confirmtoproceed'),
        });
      }
      onDeleteConfirm() {
        this.XtraAndPosHospitalService.httpDeleteXtraAndPosHospitalDeleteHospitalService({
          id: this.deleteId,
        }).subscribe((value: any) => {
          let jsonData = JSON.parse(value);
          this.deleteId = 0;
          this.MessageService.add({
            severity: 'success',
            detail: jsonData.Message});
          this.refreshTable();
          this.formHospital.reset();
          this.MessageService.clear('c')
        }, (error: any) => {
          this.toastr.error('Failed to delete hospital.');
        });
      }
      onDeleteReject() {
        this.MessageService.clear('c');
      }
      onSubmit(Form: FormGroup) {
        if(!this.isEdit){
        if(this.formHospital.valid)
        {
        let model = this.formHospital.value;
        model.statusId= 1  ;
        this.XtraAndPosHospitalService.httpPostXtraAndPosHospitalCreateHospitalService({
          body : model
        }).subscribe((value:any)=>{
          let jsonData = JSON.parse(value);
          this.MessageService.add({
            severity: 'success',
            detail: jsonData.Message});
            this.formHospital.reset();
          this.formHospital.get('StatusId')?.setValue('1');
            this.refreshTable();
        })}else{
          this.MessageService.add({
            severity: 'error',
            detail: this.translate.instant('EnterAllData')});
        }
      }else{
        let model = this.formHospital.value;
        model.Id = this.currenthospitalId;
        this.XtraAndPosHospitalService.httpPutXtraAndPosHospitalUpdateHospitalService({
          id: this.currenthospitalId,
          body: model
        }).subscribe((value: any) => {
          let jsonData = JSON.parse(value);
          this.MessageService.add({
            severity: 'success',
            detail: jsonData.Message});
          this.refreshTable();
          this.isEdit=false;
          this.formHospital.reset();

        });
        }
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
