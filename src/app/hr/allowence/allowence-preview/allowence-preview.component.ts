import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { XtraAndPosAllowanceService, XtraAndPosLookUpsService } from 'src/app/shared/api';
import { ExportData } from 'src/app/services/Export-data.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-allowence-preview',
  templateUrl: './allowence-preview.component.html',
  styleUrls: ['./allowence-preview.component.css'],
  providers: [ExportData]

})
export class AllowancePreviewComponent implements OnInit {
  constructor(private router: Router,private toastr:ToastrService,private fb:FormBuilder
    ,private XtraAndPosAllowanceService :  XtraAndPosAllowanceService,private ExportData :ExportData,
    private XtraAndPosLookUpsService :XtraAndPosLookUpsService){};
    addAllowance(){
      this.router.navigateByUrl('hr/allowance/createAllowance');
    }
    isEdit:boolean= false ;
    formAllowance :FormGroup= this.fb.group({NameAr: new FormControl('', [Validators.required]),
    NameEn: new FormControl(''),
    StatusId:new FormControl('1'),
    notes: new FormControl(null),})
    allowanceData :any[] = [] ;
    statusData : any[] = [];
    cols :any ;
    @ViewChild('dt') dt: any;
    @ViewChild('formElement') formElement!: ElementRef;

    currentallowanceId:any ;
    ngOnInit(): void {
     this.refreshTable();
      this.XtraAndPosLookUpsService.httpGetXtraAndPosLookUpsGetStatus().subscribe((value:any)=>{
        let jsonData = JSON.parse(value);
        this.statusData = jsonData;
      });
      this.cols = [
        { field: 'Id', header: 'AllowanceId' },
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

    onSubmit(Form: FormGroup) {
      if(!this.isEdit){
      if(this.formAllowance.valid)
      {
      let model = this.formAllowance.value;
      this.XtraAndPosAllowanceService.httpPostXtraAndPosAllowanceCreateAllowanceService({
        body : model
      }).subscribe((value:any)=>{
        let jsonData = JSON.parse(value);
          this.toastr.success(jsonData.Message)
          this.formAllowance.reset();
        this.formAllowance.get('StatusId')?.setValue('1');
          this.refreshTable();

      })}else{
        this.toastr.success("ادخل البيانات المطلوبة")
      }
    }else{
      let model = this.formAllowance.value;
      model.Id = this.currentallowanceId;
      this.XtraAndPosAllowanceService.httpPutXtraAndPosAllowanceUpdateAllowanceService({
        id: this.currentallowanceId,
        body: model
      }).subscribe((value: any) => {
        let jsonData = JSON.parse(value);
        this.toastr.success(jsonData.Message);
        this.formAllowance.reset();
        this.isEdit= false;
        this.refreshTable();

      });
      }
        }
        setEdit(allowance: any) {
          this.formAllowance.patchValue({
            NameAr: allowance.NameAr,
            NameEn: allowance.NameEn,
            statusId : allowance.StatusId,
            notes: allowance.Notes
          });
          this.isEdit = true;
          this.currentallowanceId = allowance.Id;

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
    showDeleteConfirm(allowance: any) {
      this.toastr
        .info('Do you want to delete this allowance?', 'Confirmation', {
          timeOut: 0,
          extendedTimeOut: 0,
          closeButton: true,
          positionClass: 'toast-top-center',
          tapToDismiss: false,
        })
        .onTap.subscribe(() => {
          this.deleteAllowance(allowance);
        });
    }
    deleteAllowance(allowance: any) {
      this.XtraAndPosAllowanceService.httpDeleteXtraAndPosAllowanceDeleteAllowanceService({
        id: allowance.Id,
      }).subscribe((value: any) => {
        let jsonData = JSON.parse(value);
        this.toastr.clear();
        this.toastr.success(jsonData.Message);
        this.refreshTable();
        this.formAllowance.reset();

      }, (error: any) => {
        this.toastr.error('Failed to delete allowance.');
      });
    }

    refreshTable() {
      this.XtraAndPosAllowanceService.httpGetXtraAndPosAllowanceGetAllowanceService().subscribe((value: any) => {
        let jsonallowanceData = JSON.parse(value);
        this.allowanceData = jsonallowanceData.Obj.allowance;
      });
    }
    getallowance(id :any){
      return this.allowanceData.filter((r)=>r.Id===id)[0]
    }
    goHome(){
      this.router.navigateByUrl('');
    }


    printPdf() {
      const tableData = this.allowanceData.map((allowance) => {
        return {
          notes: allowance.Notes,
          allowanceNameEn: allowance.NameEn,
          allowanceNameAr: allowance.NameAr,
          createdDate: allowance.CreatedDate,
          id: allowance.Id
        };
      });

     const columns = ['ملاحظات',' الاسم بالانجليزية','الاسم ','تاريخ الانشاء','كود البدل'];
      this.ExportData.printPdf(tableData,columns,'allowance.pdf')
    }


    exportData() {
      const tableData = this.allowanceData.map((allowance) => {
        return {
          id:allowance.Id,
          createdDate : allowance.CreatedDate,
          allowanceNameAr: allowance.NameAr,
          allowanceNameEn: allowance.NameEn,
          notes: allowance.Notes
        };
      });
    this.ExportData.toExcel(tableData,'allowance.xlsx')
    }
}
