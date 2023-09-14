import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { XtraAndPosLookUpsService, XtraAndPosVacationTypesService } from 'src/app/shared/api';
import { ExportData } from 'src/app/services/Export-data.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-vac-types',
  templateUrl: './vac-types.component.html',
  styleUrls: ['./vac-types.component.css'],
  providers: [ExportData]
})
export class VacTypesComponent  implements OnInit {
  constructor(private router: Router,private toastr:ToastrService,
    private fb:FormBuilder,
    private XtraAndPosLookUpsService:XtraAndPosLookUpsService
    ,private XtraAndPosVacationTypesService :  XtraAndPosVacationTypesService
    ,private ExportData :ExportData){};
    addVac(){
      this.router.navigateByUrl('hr/vac/createVac');
    }
    vacData :any[] = [] ;
    cols :any ;
    @ViewChild('dt') dt: any;
    isEdit:boolean= false ;
    currentvacId : any ;
    formVac :FormGroup= this.fb.group({
    nameAr: new FormControl(null, [Validators.required]),
    nameEn: new FormControl(null, [Validators.required]),
    salaryDeduction: new FormControl(null, [Validators.required]),
    maxVacDays: new FormControl(null, [Validators.required]),
    vacRejectPeriod: new FormControl(null, [Validators.required]),
    isMustAlternative: new FormControl(false, [Validators.required]),
    isExtendOrCut: new FormControl(false, [Validators.required]),
    isDeportation: new FormControl(false, [Validators.required]),
    date : new FormControl(null),
    notes: new FormControl(null),
    statusId: new FormControl(1)})
@ViewChild('formElement') formElement!: ElementRef;
statusData :any[] = [] ;
salarDeductionData :any[] = [] ;
boolData = [
{id:'Yes',value:true}
,{id:'No',value:false}
]
    ngOnInit(): void {
      this.formVac.get('statusId')?.setValue('1');
      this.cols = [
        { field: 'Id', header: 'Id' },
        { field: 'CreatedDate', header: 'CreatedDate' },
        { field: 'NameAr', header: 'NameAr' },
        { field: 'NameEn', header: 'NameEn' },
        { field: 'Notes', header: 'Notes' },
      ];
      this.getData();
    }
    getData(){
      this.XtraAndPosVacationTypesService.httpGetXtraAndPosVacationTypesGetVacationTypesService().subscribe((value:any)=>{
        let jsonData = JSON.parse(value);
        this.vacData = jsonData.Obj.vac;
      });
      this.XtraAndPosLookUpsService.httpGetXtraAndPosLookUpsGetStatus().subscribe((value:any)=>{
        let jsonData = JSON.parse(value);
        this.statusData = jsonData;
      });
      this.XtraAndPosLookUpsService.httpGetXtraAndPosLookUpsGetSalaryDeductionTypes().subscribe((value:any)=>{
        let jsonData = JSON.parse(value);
        this.salarDeductionData = jsonData;
      });
    }
    exportData() {
      const tableData = this.vacData.map((vac) => {
        return {
          id:vac.Id,
          createdDate : vac.CreatedDate,
          vacNameAr: vac.NameAr,
          vacNameEn: vac.NameEn,
          notes: vac.Notes
        };
      });

      this.ExportData.toExcel(tableData,'vac.xlsx')
    }


    printPdf() {
      const tableData = this.vacData.map((vac) => {
        return {
          id:vac.Id,
          createdDate : vac.CreatedDate,
          vacNameAr: vac.NameAr,
          vacNameEn: vac.NameEn,
          notes: vac.Notes
        };
      });

      const columns = ['ملاحظات',' الاسم بالانجليزية','الاسم ','تاريخ الانشاء','كود الجنسية'];
      this.ExportData.printPdf(tableData,columns,'vac.pdf')
    }
    onSubmit(Form: FormGroup) {
      if(!this.isEdit){
      if(this.formVac.valid)
      {
      let model = this.formVac.value;
      if(model.isDeportation=='true'){
        model.isDeportation =true ;
      }else{
        model.isDeportation =false ;
      }
      if(model.isExtendOrCut=='true'){
        model.isExtendOrCut =true ;
      }else{
        model.isExtendOrCut =false ;
      }
      if(model.isMustAlternative=='true'){
        model.isMustAlternative =true ;
      }else{
        model.isMustAlternative =false ;
      }
       model.statusId= 1  ;
      this.XtraAndPosVacationTypesService.httpPostXtraAndPosVacationTypesCreateVacationTypesService({
        body : model
      }).subscribe((value:any)=>{
        let jsonData = JSON.parse(value);
          this.toastr.success(jsonData.Message)
          this.formVac.reset();
          this.refreshTable();
      })}else{
        this.toastr.success("ادخل البيانات المطلوبة")
      }
    }else{
      let model = this.formVac.value;
      model.Id = this.currentvacId;
      this.XtraAndPosVacationTypesService.httpPutXtraAndPosVacationTypesUpdateVacationTypesService({
        id : this.currentvacId,
        body: model
      }).subscribe((value: any) => {
        let jsonData = JSON.parse(value);
        this.toastr.success(jsonData.Message);
        this.formVac.reset();
        this.isEdit= false;
        this.refreshTable();

      });
      }
        }
    setEdit(vac: any) {
      this.formVac.patchValue({
        nameAr: vac.nameAr,
        nameEn: vac.nameEn,
        salaryDeduction: vac.SalaryDeduction,
        maxVacDays: vac.MaxVacDays,
        vacRejectPeriod: vac.VacRejectPeriod,
        isMustAlternative: vac.IsMustAlternative,
        isExtendOrCut: vac.IsExtendOrCut,
        isDeportation: vac.IsDeportation,
        notes: vac.Notes,
        statusId: vac.StatusId

      });
      this.isEdit = true;
      this.currentvacId = vac.Id;

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
    showDeleteConfirm(vac: any) {
      this.toastr
        .info('Do you want to delete this vac?', 'Confirmation', {
          timeOut: 0,
          extendedTimeOut: 0,
          closeButton: true,
          positionClass: 'toast-top-center',
          tapToDismiss: false,
        })
        .onTap.subscribe(() => {
          this.deleteVac(vac);
        });
    }
    deleteVac(vac: any) {
      this.XtraAndPosVacationTypesService.httpDeleteXtraAndPosVacationTypesDeleteVacationTypesService({
        id: vac.Id,
      }).subscribe((value: any) => {
        let jsonData = JSON.parse(value);
        this.toastr.clear();
        this.toastr.success(jsonData.Message);
        this.refreshTable();
        this.formVac.reset();
      }, (error: any) => {
        this.toastr.error('Failed to delete vac.');
      });
    }

    refreshTable() {
      this.XtraAndPosVacationTypesService.httpGetXtraAndPosVacationTypesGetVacationTypesService().subscribe((value: any) => {
        let jsonvacData = JSON.parse(value);
        this.vacData = jsonvacData.Obj.vac;
      });
    }
    getVac(id :any){
      return this.vacData.filter((r)=>r.Id===id)[0]
    }
    goHome(){
      this.router.navigateByUrl('');
    }
}
