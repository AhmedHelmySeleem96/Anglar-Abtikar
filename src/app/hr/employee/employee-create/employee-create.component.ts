import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { ExportData } from 'src/app/services/Export-data.service';
import { XtraAndPosLookUpsService,XtraAndPosBranchEpService, XtraAndPosHrEmployeeService, XtraAndPosNationalityService, XtraAndPosSpecializationsService, XtraAndPosJobDifinitionService, XtraAndPosJobNameService, CurrencyEpService, RoleGroupEpService } from 'src/app/shared/api';


interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css'],
  providers: [ExportData]
})
export class EmployeeCreateComponent {
  constructor(
    private toastr:ToastrService,
    private router: Router
    ,private ExportData :ExportData
    ,private  CurrencyEpService : CurrencyEpService ,
    private XtraAndPosLookUpsService :XtraAndPosLookUpsService
    ,private XtraAndPosBranchEpService : XtraAndPosBranchEpService
    ,public translate : TranslateService
    ,private XtraAndPosJobNameService : XtraAndPosJobNameService
    ,private XtraAndPosJobDifinitionService :XtraAndPosJobDifinitionService
    ,private XtraAndPosSpecializationsService: XtraAndPosSpecializationsService,
    private XtraAndPosNationalityService : XtraAndPosNationalityService,
    private fb:FormBuilder,
    private XtraAndPosHrEmployeeService: XtraAndPosHrEmployeeService,
    private RoleGroupEpService  : RoleGroupEpService){this.formEmployee = this.createForm();}
    formEmployee : FormGroup;
    createForm(): FormGroup {
      return this.fb.group({
        nameAr: new FormControl(null, [Validators.required]),
        nameEn: new FormControl(null, [Validators.required]),
        sNO: new FormControl(null),
        nationalityId: new FormControl(null),
        secondName: new FormControl(null),
        lastName: new FormControl(null),
        title: new FormControl(null),
        branchId: new FormControl(null),
        statusId: new FormControl('1'),
        gender: new FormControl(null),
        maritalStatus: new FormControl(null, [Validators.required]),
        highestAcademicQualification: new FormControl(null, [Validators.required]),
        identityNumber: new FormControl(null, [Validators.required]),
        specializationId: new FormControl(null),
        identityCreationDate: new FormControl(null),
        identityEndDate: new FormControl(null),
        birthDate: new FormControl(null),
        identityType: new FormControl(null, [Validators.required]),
        email: new FormControl(null),
        mobile: new FormControl(null, [Validators.required]),
        phone: new FormControl(null),
        address: new FormControl(null, [Validators.required]),
        accountId: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required]),
        roleId: new FormControl(null),
        isSalesRepresentative: new FormControl(false),
        jobId: new FormControl(null, [Validators.required]),
        jobNameId: new FormControl(null, [Validators.required]),
        divisionId: new FormControl(null),
        contractPeriod: new FormControl(null, [Validators.required]),
        contractStartDate: new FormControl(null, [Validators.required]),
        contractEndDate: new FormControl(null),
        basicSalary: new FormControl(null, [Validators.required]),
        currencyId: new FormControl(null, [Validators.required]),
        annualVacDays: new FormControl(null),
        bankAccountId: new FormControl(null),
        iban: new FormControl(null),
        barcode: new FormControl(null, [Validators.required]),
        startDate: new FormControl(null, [Validators.required]),
        date : new FormControl(null, [Validators.required]),
        fileDescription : new FormControl(null),
        file : new FormControl(null),
      });
    }

      isEdit:boolean= false ;
      empInformation =true ;
      info =true ;
      empDocs =true ;
      empUser =true ;
      EmployeeData :any[] = [] ;
      roleGroup :any[] = [] ;
      statusData : any[] = [];
      genderData : any[] = [];
      martialStatusData : any[] = [];
      nationalityData : any[] = [];
      spelizationsData : any[] = [];
      highestQualificationData : any[] = [];
      identityTypeData : any[] = [];
      cols :any ;
      currentEmployeeId: any  ;
      @ViewChild('dt') dt: any;
      @ViewChild('formElement') formElement!: ElementRef;
      branchData : any[] = [] ;
      jobDifServiceData :any []  = [] ;
      jobNamesData :any [] = [] ;
      jobDifData :any [] = [] ;
      orgStructuresData :any [] = [] ;
      currencyData :any [] = [] ;
      @ViewChild('password') password!: ElementRef;
      @ViewChild('confirmPassword') confirmPassword!: ElementRef;
      highestDegree :boolean = false ;
      ngOnInit(): void {
        this.createForm();
        this.cols = [
          { field: 'Id', header: 'EmployeeId' },
          { field: 'CreatedDate', header: 'CreatedDate' },
          { field: 'BranchId', header: 'BranchId' },
          { field: 'NameAr', header: 'NameAr' },
          { field: 'NameEn', header: 'NameEn' },
          { field: 'NationalityId', header: 'NationalityId' },
          { field: 'JobId', header: 'JobId' },
          { field: 'JobName', header: 'JobName' },
          { field: 'StatusId', header: 'StatusId' },
        ];
        this.getData();
        this.refreshTable();
        this.formEmployee.get('date')?.setValue(Date.now());
      }

      getData(){
        this.XtraAndPosBranchEpService.httpGetBranchGetAllForDropDown().subscribe((value:any)=>{
          let jsonData = JSON.parse(value);
          this.branchData = jsonData ;
        });
        this.XtraAndPosLookUpsService.httpGetXtraAndPosLookUpsGetStatus().subscribe((value:any)=>{
          let jsonData = JSON.parse(value);
          this.statusData = jsonData;
        });
        this.XtraAndPosLookUpsService.httpGetXtraAndPosLookUpsGetGender().subscribe((value:any)=>{
          let jsonData = JSON.parse(value);
          this.genderData = jsonData;
        });
        this.XtraAndPosNationalityService.httpGetXtraAndPosNationalityGetNationalityService().subscribe((value:any)=>{
          let jsonData = JSON.parse(value);
          this.nationalityData = jsonData.Obj.nationality;
        });
        this.XtraAndPosSpecializationsService.httpGetXtraAndPosSpecializationsGetSpecializationsService().subscribe((value:any)=>{
          let jsonData = JSON.parse(value);
          this.spelizationsData = jsonData.Obj.spec;
        });
        this.XtraAndPosLookUpsService.httpGetXtraAndPosLookUpsGetHighestAcademicQualification().subscribe((value:any)=>{
          let jsonData = JSON.parse(value);
          this.highestQualificationData = jsonData;
        });
        this.XtraAndPosLookUpsService.httpGetXtraAndPosLookUpsGetIdentityType().subscribe((value:any)=>{
          let jsonData = JSON.parse(value);
          this.identityTypeData = jsonData;
        });
        this.XtraAndPosLookUpsService.httpGetXtraAndPosLookUpsGetMartialStatus().subscribe((value:any)=>{
          let jsonData = JSON.parse(value);
          this.martialStatusData = jsonData;
        });
        this.XtraAndPosJobDifinitionService.httpGetXtraAndPosJobDifinitionGetJobDifinitionService().subscribe((value:any)=>{
          let jsonData = JSON.parse(value);
          this.jobDifData = jsonData.Obj.jobDif;
        });
        this.XtraAndPosJobNameService.httpGetXtraAndPosJobNameGetJobNameService().subscribe((value:any)=>{
          let jsonData = JSON.parse(value);
          this.jobNamesData = jsonData.Obj.jobName;
        });
        this.CurrencyEpService.httpGetCurrencyGetAll().subscribe((value:any)=>{
          let jsonData = JSON.parse(value);
          this.currencyData = jsonData.Obj.Currencies;
        });
        this.RoleGroupEpService.httpGetRoleGroupGetAll().subscribe((value:any)=>{
          let jsonData = JSON.parse(value);
          this.roleGroup = jsonData.Obj.rolescreens;
        });
      }
      getStatus(Id :any){
        return this.statusData.filter(r=>r.id===Id)[0];
      }
      passNotMatch : boolean = true ;
      checkPass(){
        if(this.password.nativeElement.value!=this.confirmPassword.nativeElement.value){
          this.passNotMatch = false;
        }else{
          this.passNotMatch = true;
        }
      }
      setEdit(employee: any) {
        this.formEmployee.patchValue({
          nameAr: employee.nameAr,
          nameEn: employee.nameEn,
          statusId: employee.statusId,
          branchId: employee.branchId,
          sno: employee.sNO,
          nationalityId: employee.nationalityId,
          secoundName: employee.secoundName,
          lastName: employee.lastName,
          title: employee.title,
          gender: employee.gender,
          maritalStatus: employee.maritalStatus,
          identityType: employee.identityType,
          highestAcademicQualification: employee.highestAcademicQualification,
          identityNumber: employee.identityNumber,
          specializationId: employee.specializationId,
          identityCreationDate: employee.identityCreationDate,
          identityEndDate: employee.identityEndDate,
          birthDate: employee.birthDate,
          email: employee.email,
          mobile: employee.mobile,
          phone: employee.phone,
          address: employee.address,
          accountId: employee.accountId,
          password: employee.password,
          roleId: employee.roleId,
          isSalesRepresentative: employee.isSalesRepresentative,
          jobId: employee.jobId,
          jobNameId: employee.jobNameId,
          divisionId: employee.divisionId,
          contractPeriod: employee.contractPeriod,
          contractStartDate: employee.contractStartDate,
          contractEndDate: employee.contractEndDate,
          basicSalary: employee.basicSalary,
          currencyId: employee.currencyId,
          annualVacDays: employee.annualVacDays,
          bankAccountId: employee.bankAccountId,
          iban: employee.iban,
          barcode: employee.barcode,
          startDate: employee.startDate
        });
        this.isEdit = true;
        this.currentEmployeeId = employee.Id;

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


      showDeleteConfirm(employee: any) {
        this.toastr
          .info('Do you want to delete this employee?', 'Confirmation', {
            timeOut: 0,
            extendedTimeOut: 0,
            closeButton: true,
            positionClass: 'toast-top-center',
            tapToDismiss: false,
          })
          .onTap.subscribe(() => {
            this.deleteEmployee(employee);
          });
      }
      deleteEmployee(employee: any) {
        this.XtraAndPosHrEmployeeService.httpDeleteXtraAndPosHrEmployeeDeleteHrEmployeeService({
          id: employee.Id,
        }).subscribe((value: any) => {
          let jsonData = JSON.parse(value);
          this.toastr.clear();
          this.toastr.success(jsonData.Message);
          this.refreshTable();
          this.formEmployee.reset();
          this.formEmployee.get('StatusId')?.setValue('1');
        }, (error: any) => {
          this.toastr.error('Failed to delete employee.');
        });
      }
      onSubmit(Form: FormGroup) {
        console.log(this.formEmployee.value);
        if(!this.isEdit){
        if(this.formEmployee.valid)
        {
        let model = this.formEmployee.value;
        model.statusId = 1 ;
        model.fileName = this.uploadedFiles[0]?.name;
        model.fileSize = this.uploadedFiles[0]?.size;
        model.fileType =this.uploadedFiles[0]?.type;
        this.XtraAndPosHrEmployeeService.httpPostXtraAndPosHrEmployeeCreateHrEmployeeService({
          body : model
        }).subscribe((value:any)=>{
          let jsonData = JSON.parse(value);
            this.toastr.success(jsonData.Message)
            this.formEmployee.reset();
          this.formEmployee.get('StatusId')?.setValue('1');
          this.uploadedFiles = [];
            this.refreshTable();
        },
        (error: any) => {
          this.toastr.error('Failed to create employee.');
        })}else{
          this.toastr.success("ادخل البيانات المطلوبة")
        }
      }else{
        let model = this.formEmployee.value;
        model.Id = this.currentEmployeeId;
        this.XtraAndPosHrEmployeeService.httpPutXtraAndPosHrEmployeeUpdateHrEmployeeService({
          id: this.currentEmployeeId,
          body: model
        }).subscribe((value: any) => {
          let jsonData = JSON.parse(value);
          this.toastr.success(jsonData.Message);
          this.refreshTable();
          this.isEdit=false;
          this.formEmployee.reset();
          this.formEmployee.get('StatusId')?.setValue('1');
          this.uploadedFiles = [];
        });
        }
          }
      refreshTable() {
        this.XtraAndPosHrEmployeeService.httpGetXtraAndPosHrEmployeeGetHrEmployeeService().subscribe((value: any) => {
          let jsonEmployeeData = JSON.parse(value);
          this.EmployeeData = jsonEmployeeData.Obj.emp;
        });
      }
      getEmployee(id :any){
        return this.EmployeeData.filter((r)=>r.Id===id)[0]
      }
      goHome(){
        this.router.navigateByUrl('');
      }
      getBranch(id :any){
        return this.branchData.filter((r)=>r.Id===id)[0]
      }

      printPdf() {
        const tableData = this.EmployeeData.map((employee) => {
          return {
            notes: employee.Notes,
            EmployeeNameEn: employee.NameEn,
            EmployeeNameAr: employee.NameAr,
            createdDate: employee.CreatedDate,
            id: employee.Id
          };
        });

       const columns = ['ملاحظات',' الاسم بالانجليزية','الاسم ','تاريخ الانشاء','كود المستشفي'];
        this.ExportData.printPdf(tableData,columns,'jobCategories.pdf')
      }


      exportData() {
        const tableData = this.EmployeeData.map((employee) => {
          return {
            id:employee.Id,
            createdDate : employee.CreatedDate,
            EmployeeNameAr: employee.NameAr,
            EmployeeNameEn: employee.NameEn,
            notes: employee.Notes
          };
        });
      this.ExportData.toExcel(tableData,'employee.xlsx')

      }

      uploadedFiles : any[] = []
      onUpload(event:any) {
        console.log(event)
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }
}
highestQualificationChange(event:Event){
const target = event.target as HTMLSelectElement;
const id = Number(target.value);
if(id>2){
this.highestDegree = true;
}else{
this.highestDegree = false;
}
}
}
