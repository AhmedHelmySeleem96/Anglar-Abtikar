import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { ExportData } from 'src/app/services/Export-data.service';
import {XtraAndPosJobDifinitionService,XtraAndPosJobCategoryService, XtraAndPosLookUpsService,XtraAndPosBranchEpService, XtraAndPosOrgStructuresService } from 'src/app/shared/api';

@Component({
  selector: 'app-jobs-create',
  templateUrl: './jobs-create.component.html',
  styleUrls: ['./jobs-create.component.css'],
  providers: [ExportData]
})
export class JobsCreateComponent  {
  constructor(
    private toastr:ToastrService,
    private router: Router,private ExportData :ExportData
    ,  private XtraAndPosLookUpsService :XtraAndPosLookUpsService,
    private XtraAndPosJobDifinitionService :XtraAndPosJobDifinitionService,private XtraAndPosBranchEpService : XtraAndPosBranchEpService
    ,private XtraAndPosJobCategoryService : XtraAndPosJobCategoryService,public translate : TranslateService,private XtraAndPosOrgStructuresService :XtraAndPosOrgStructuresService,
    private fb:FormBuilder,private route: ActivatedRoute){this.formJob = this.createForm();}
    formJob : FormGroup;
      createForm() : FormGroup{
        return this.fb.group({NameAr: new FormControl('', [Validators.required]),
        NameEn: new FormControl(''),
        SNO: new FormControl(null),
        JobCategoryId: new FormControl('', [Validators.required]),
        MaxJobsNo: new FormControl('', [Validators.required]),
        BranchId :new FormControl('', [Validators.required]),
        Level1Id: new FormControl(null),
        Level2Id: new FormControl(null),
        Level3Id: new FormControl(null),
        Level4Id: new FormControl(null),
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
      branchData : any[] = [] ;
      jobCatData : any[] = [] ;
      jobDifServiceData :any []  = [] ;
      jobDifNames :any [] = [] ;
      orgStructuresData :any [] = [] ;
      ngOnInit(): void {
        this.createForm();
        this.cols = [
          { field: 'Id', header: 'JobId' },
          { field: 'SNO', header: 'SNO' },
          { field: 'BranchId', header: 'BranchId' },
          { field: 'CreatedDate', header: 'CreatedDate' },
          { field: 'NameAr', header: 'NameAr' },
          { field: 'NameEn', header: 'NameEn' },
          { field: 'MaxJobsNo', header: 'MaxJobsNo' },
          { field: 'Notes', header: 'Notes' },
          { field: 'JobCategoryId', header: 'JobCategoryId' },
          { field: 'StatusId', header: 'StatusId' },
        ];
        this.XtraAndPosBranchEpService.httpGetBranchGetAllForDropDown().subscribe((value:any)=>{
          let jsonData = JSON.parse(value);
          this.branchData = jsonData ;
        });
        this.XtraAndPosJobCategoryService.httpGetXtraAndPosJobCategoryGetJobCategoryService().subscribe((value:any)=>{
          let jsonData = JSON.parse(value);
          this.jobCatData = jsonData.Obj.jobCat ;
        })
        this.XtraAndPosJobDifinitionService.httpGetXtraAndPosJobDifinitionGetOrgStructLevelsService({branchId : 1}).subscribe((value:any)=>{
          let jsonData = JSON.parse(value);
          this.jobDifServiceData = jsonData.Obj ;
          this.jobDifNames = jsonData.Obj.map((item: any) => item.LevelName);
          this.generateDynamicColumns();
        })
        this.XtraAndPosLookUpsService.httpGetXtraAndPosLookUpsGetStatus().subscribe((value:any)=>{
          let jsonData = JSON.parse(value);
          this.statusData = jsonData;
        });
        this.XtraAndPosOrgStructuresService.httpGetXtraAndPosOrgStructuresGetOrgStructuresService().subscribe((value:any)=>{
          let jsonData = JSON.parse(value);
          this.orgStructuresData = jsonData.Obj.orgStructures;
        });
        this.refreshTable();
        const levelHeaders = this.jobDifNames.map((name, index) => {
          return { field: 'Level' + (index + 1) + 'Id', header: name };
        });

        this.generateDynamicColumns();
      }
      generateDynamicColumns(): void {
        for (let i = 0; i < this.jobDifNames.length; i++) {
          const fieldName = 'Level' + (i + 1) + 'Id';
          const headerName = this.jobDifNames[i];
          this.cols.push({ field: fieldName, header: headerName });
        }
      }
      getStatus(Id :any){
        return this.statusData.filter(r=>r.id===Id)[0];
      }
      setEdit(job: any) {
        this.formJob.patchValue({
          NameAr: job.NameAr,
          NameEn: job.NameEn,
          statusId : job.StatusId,
          notes: job.Notes,
          level1Id : job.level1Id,
          level2Id : job.level2Id,
          level3Id : job.level3Id,
          level4Id : job.level4Id,
          JobCategoryId : job.JobCategoryId,
          MaxJobsNo : job.MaxJobsNo,
          SNO : job.SNO,
          BranchId : job.BranchId

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
        this.XtraAndPosJobDifinitionService.httpDeleteXtraAndPosJobDifinitionDeleteJobDifinitionService({
          id: job.Id,
        }).subscribe((value: any) => {
          let jsonData = JSON.parse(value);
          this.toastr.clear();
          this.toastr.success(jsonData.Message);
          this.refreshTable();
          this.formJob.reset();
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
        this.XtraAndPosJobDifinitionService.httpPostXtraAndPosJobDifinitionCreateJobDifinitionService({
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
        this.XtraAndPosJobDifinitionService.httpPutXtraAndPosJobDifinitionUpdateJobDifinitionService({
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
        this.XtraAndPosJobDifinitionService.httpGetXtraAndPosJobDifinitionGetJobDifinitionService().subscribe((value: any) => {
          let jsonJobData = JSON.parse(value);
          this.JobData = jsonJobData.Obj.jobDif;
        });
      }
      getJob(id :any){
        return this.JobData.filter((r)=>r.Id===id)[0]
      }
      goHome(){
        this.router.navigateByUrl('');
      }
      getBranch(id :any){
        return this.branchData.filter((r)=>r.Id===id)[0]
      }
      getLevelName(id: any) {
        if (Array.isArray(this.orgStructuresData)) {
          return this.orgStructuresData.filter((r) => r.Id === id)[0];
        }
        return null;
      }
      getJobCategory(id : number ){
        return this.jobCatData.filter((r)=>r.Id==id)[0];
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
