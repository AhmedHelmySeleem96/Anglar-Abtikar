import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { XtraAndPosSpecializationsService, XtraAndPosLookUpsService } from 'src/app/shared/api';
import { ExportData } from 'src/app/services/Export-data.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-specializations-create',
  templateUrl: './specializations-create.component.html',
  styleUrls: ['./specializations-create.component.css'],
  providers: [ExportData]
})
export class SpecializationsCreateComponent  implements OnInit{
  constructor(private router: Router,private toastr:ToastrService,private fb:FormBuilder
    ,private XtraAndPosSpecializationsService :  XtraAndPosSpecializationsService,private ExportData :ExportData,
    private XtraAndPosLookUpsService :XtraAndPosLookUpsService){this.formSpecializations = this.createForm();};
    addSpecializations(){
      this.router.navigateByUrl('hr/specializations/createSpecializations');
    }
    formSpecializations : FormGroup;
    createForm() : FormGroup{
      return this.fb.group({NameAr: new FormControl('', [Validators.required]),
      NameEn: new FormControl(''),
      StatusId:new FormControl('1'),
      notes: new FormControl(null),})
    }
    isEdit:boolean= false ;

    specializationsData :any[] = [] ;
    statusData : any[] = [];
    cols :any ;
    currentspecializationsId: any  ;
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
        { field: 'Id', header: 'SpecializationsId' },
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
    setEdit(specializations: any) {
      this.formSpecializations.patchValue({
        NameAr: specializations.NameAr,
        NameEn: specializations.NameEn,
        statusId : specializations.StatusId,
        notes: specializations.Notes
      });
      this.isEdit = true;
      this.currentspecializationsId = specializations.Id;

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
    showDeleteConfirm(specializations: any) {
      this.toastr
        .info('Do you want to delete this specializations?', 'Confirmation', {
          timeOut: 0,
          extendedTimeOut: 0,
          closeButton: true,
          positionClass: 'toast-top-center',
          tapToDismiss: false,
        })
        .onTap.subscribe(() => {
          this.deleteSpecializations(specializations);
        });
    }
    deleteSpecializations(specializations: any) {
      this.XtraAndPosSpecializationsService.httpDeleteXtraAndPosSpecializationsDeleteSpecializationsService({
        id: specializations.Id,
      }).subscribe((value: any) => {
        let jsonData = JSON.parse(value);
        this.toastr.clear();
        this.toastr.success(jsonData.Message);
        this.refreshTable();
        this.formSpecializations.reset();
      }, (error: any) => {
        this.toastr.error('Failed to delete specializations.');
      });
    }
    onSubmit(Form: FormGroup) {
      if(!this.isEdit){
      if(this.formSpecializations.valid)
      {
      let model = this.formSpecializations.value;
      model.statusId= 1  ;
      this.XtraAndPosSpecializationsService.httpPostXtraAndPosSpecializationsCreateSpecializationsService({
        body : model
      }).subscribe((value:any)=>{
        let jsonData = JSON.parse(value);
          this.toastr.success(jsonData.Message)
          this.formSpecializations.reset();
        this.formSpecializations.get('StatusId')?.setValue('1');
          this.refreshTable();
      })}else{
        this.toastr.success("ادخل البيانات المطلوبة")
      }
    }else{
      let model = this.formSpecializations.value;
      model.Id = this.currentspecializationsId;
      this.XtraAndPosSpecializationsService.httpPutXtraAndPosSpecializationsUpdateSpecializationsService({
        id: this.currentspecializationsId,
        body: model
      }).subscribe((value: any) => {
        let jsonData = JSON.parse(value);
        this.toastr.success(jsonData.Message);
        this.refreshTable();
        this.isEdit=false;
        this.formSpecializations.reset();

      });
      }
        }
    refreshTable() {
      this.XtraAndPosSpecializationsService.httpGetXtraAndPosSpecializationsGetSpecializationsService().subscribe((value: any) => {
        let jsonspecializationsData = JSON.parse(value);
        this.specializationsData = jsonspecializationsData.Obj.spec;
      });
    }
    getspecializations(id :any){
      return this.specializationsData.filter((r)=>r.Id===id)[0]
    }
    goHome(){
      this.router.navigateByUrl('');
    }


    printPdf() {
      const tableData = this.specializationsData.map((specializations) => {
        return {
          notes: specializations.Notes,
          specializationsNameEn: specializations.NameEn,
          specializationsNameAr: specializations.NameAr,
          createdDate: specializations.CreatedDate,
          id: specializations.Id
        };
      });

     const columns = ['ملاحظات',' الاسم بالانجليزية','الاسم ','تاريخ الانشاء','كود المستشفي'];
      this.ExportData.printPdf(tableData,columns,'specializations.pdf')
    }


    exportData() {
      const tableData = this.specializationsData.map((specializations) => {
        return {
          id:specializations.Id,
          createdDate : specializations.CreatedDate,
          specializationsNameAr: specializations.NameAr,
          specializationsNameEn: specializations.NameEn,
          notes: specializations.Notes
        };
      });
    this.ExportData.toExcel(tableData,'specializations.xlsx')

    }
}
