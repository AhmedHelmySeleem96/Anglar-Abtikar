import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportData } from 'src/app/services/Export-data.service';
import { XtraAndPosJobNameService, XtraAndPosLookUpsService } from 'src/app/shared/api';


@Component({
  selector: 'app-jobs-names',
  templateUrl: './jobs-names.component.html',
  styleUrls: ['./jobs-names.component.css'],
  providers: [ExportData]
})
export class JobsNamesComponent implements OnInit {
  constructor(
    private toastr:ToastrService,
    private router: Router,private ExportData :ExportData,  private XtraAndPosLookUpsService :XtraAndPosLookUpsService,  private XtraAndPosJobNameService :XtraAndPosJobNameService,
    private fb:FormBuilder,private route: ActivatedRoute){this.formJob = this.createForm();}
    formJob : FormGroup;
      createForm() : FormGroup{
        return this.fb.group({NameAr: new FormControl('', [Validators.required]),
        NameEn: new FormControl('', [Validators.required]),
        StatusId:new FormControl('1'),
        notes: new FormControl(null),})
      }
      isEdit:boolean= false ;

      JobData :any[] = [] ;
      statusData : any[] = [];
      cols :any ;
      currentJobId: any  ;
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
          { field: 'Id', header: 'JobNameId' },
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
      setEdit(job: any) {
        this.formJob.patchValue({
          NameAr: job.NameAr,
          NameEn: job.NameEn,
          statusId : job.StatusId,
          notes: job.Notes
        });
        this.isEdit = true;
        this.currentJobId = job.Id;

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
      showDeleteConfirm(job: any) {
        this.toastr
          .info('Do you want to delete this job?', 'Confirmation', {
            timeOut: 0,
            extendedTimeOut: 0,
            closeButton: true,
            positionClass: 'toast-top-center',
            tapToDismiss: false,
          })
          .onTap.subscribe(() => {
            this.deleteJob(job);
          });
      }
      deleteJob(job: any) {
        this.XtraAndPosJobNameService.httpDeleteXtraAndPosJobNameDeleteJobNameService({
          id: job.Id,
        }).subscribe((value: any) => {
          let jsonData = JSON.parse(value);
          this.toastr.clear();
          this.toastr.success(jsonData.Message);
          this.refreshTable();
          this.formJob.reset();
          this.formJob.get('StatusId')?.setValue('1');
        }, (error: any) => {
          this.toastr.error('Failed to delete job.');
        });
      }
      OnSubmit(Form: FormGroup) {
        if(!this.isEdit){
        if(this.formJob.valid)
        {
        let model = this.formJob.value;
        model.statusId= 1  ;
        this.XtraAndPosJobNameService.httpPostXtraAndPosJobNameCreateJobNameService({
          body : model
        }).subscribe((value:any)=>{
          let jsonData = JSON.parse(value);
            this.toastr.success(jsonData.Message)
            this.formJob.reset();
          this.formJob.get('StatusId')?.setValue('1');
            this.refreshTable();
        })}else{
          this.toastr.success("ادخل البيانات المطلوبة")
        }
      }else{
        let model = this.formJob.value;
        model.Id = this.currentJobId;
        this.XtraAndPosJobNameService.httpPutXtraAndPosJobNameUpdateJobNameService({
          id: this.currentJobId,
          body: model
        }).subscribe((value: any) => {
          let jsonData = JSON.parse(value);
          this.toastr.success(jsonData.Message);
          this.refreshTable();
          this.isEdit=false;
          this.formJob.reset();

        });
        }
          }
      refreshTable() {
        this.XtraAndPosJobNameService.httpGetXtraAndPosJobNameGetJobNameService().subscribe((value: any) => {
          let jsonJobData = JSON.parse(value);
          this.JobData = jsonJobData.Obj.jobName;
        });
      }
      getJob(id :any){
        return this.JobData.filter((r)=>r.Id===id)[0]
      }
      goHome(){
        this.router.navigateByUrl('');
      }


      printPdf() {
        const tableData = this.JobData.map((job) => {
          return {
            notes: job.Notes,
            JobNameEn: job.NameEn,
            JobNameAr: job.NameAr,
            createdDate: job.CreatedDate,
            id: job.Id
          };
        });

       const columns = ['ملاحظات',' الاسم بالانجليزية','الاسم ','تاريخ الانشاء','كود المستشفي'];
        this.ExportData.printPdf(tableData,columns,'jobCategories.pdf')
      }


      exportData() {
        const tableData = this.JobData.map((job) => {
          return {
            id:job.Id,
            createdDate : job.CreatedDate,
            JobNameAr: job.NameAr,
            JobNameEn: job.NameEn,
            notes: job.Notes
          };
        });
      this.ExportData.toExcel(tableData,'job.xlsx')

      }
}
