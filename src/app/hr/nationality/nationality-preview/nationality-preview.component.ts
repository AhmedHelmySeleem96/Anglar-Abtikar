import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { XtraAndPosNationalityService } from 'src/app/shared/api';
import { ExportData } from 'src/app/services/Export-data.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-nationality-preview',
  templateUrl: './nationality-preview.component.html',
  styleUrls: ['./nationality-preview.component.css'],
  providers: [ExportData]
})
export class NationalityPreviewComponent implements OnInit  {
  constructor(private router: Router,private toastr:ToastrService,private fb:FormBuilder
    ,private XtraAndPosNationalityService :  XtraAndPosNationalityService,private ExportData :ExportData){};
    addNationality(){
      this.router.navigateByUrl('hr/nationality/createNationality');
    }
    nationalityData :any[] = [] ;
    cols :any ;
    @ViewChild('dt') dt: any;
    isEdit:boolean= false ;
    currentnationalityId : any ;
    formNationality :FormGroup= this.fb.group({nationalityNameAr: new FormControl('', [Validators.required]),
    nationalityNameEn: new FormControl(''),
    notes: new FormControl(null),})
@ViewChild('formElement') formElement!: ElementRef;

    ngOnInit(): void {

      this.XtraAndPosNationalityService.httpGetXtraAndPosNationalityGetNationalityService().subscribe((value:any)=>{
        let jsonData = JSON.parse(value);
        this.nationalityData = jsonData.Obj.nationality;
      });
      this.cols = [
        { field: 'Id', header: 'Id' },
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
    onSubmit(Form: FormGroup) {
      if(!this.isEdit){
      if(this.formNationality.valid)
      {
      let model = this.formNationality.value;
      this.XtraAndPosNationalityService.httpPostXtraAndPosNationalityCreateNationalityService({
        body : model
      }).subscribe((value:any)=>{
        let jsonData = JSON.parse(value);
          this.toastr.success(jsonData.Message)
          this.formNationality.reset();
          this.refreshTable();
      })}else{
        this.toastr.success("ادخل البيانات المطلوبة")
      }
    }else{
      let model = this.formNationality.value;
      model.Id = this.currentnationalityId;
      this.XtraAndPosNationalityService.httpPutXtraAndPosNationalityUpdateNationalityService({
        id : this.currentnationalityId,
        body: model
      }).subscribe((value: any) => {
        let jsonData = JSON.parse(value);
        this.toastr.success(jsonData.Message);
        this.formNationality.reset();
        this.isEdit= false;
        this.refreshTable();

      });
      }
        }
    setEdit(nationality: any) {
      this.formNationality.patchValue({
        nationalityNameAr: nationality.NameAr,
        nationalityNameEn: nationality.NameEn,
        notes: nationality.Notes
      });
      this.isEdit = true;
      this.currentnationalityId = nationality.Id;

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
    showDeleteConfirm(nationality: any) {
      this.toastr
        .info('Do you want to delete this nationality?', 'Confirmation', {
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
        this.formNationality.reset();
      }, (error: any) => {
        this.toastr.error('Failed to delete nationality.');
      });
    }

    refreshTable() {
      this.XtraAndPosNationalityService.httpGetXtraAndPosNationalityGetNationalityService().subscribe((value: any) => {
        let jsonnationalityData = JSON.parse(value);
        this.nationalityData = jsonnationalityData.Obj.nationality;
      });
    }
    getNationality(id :any){
      return this.nationalityData.filter((r)=>r.Id===id)[0]
    }
    goHome(){
      this.router.navigateByUrl('');
    }
}




