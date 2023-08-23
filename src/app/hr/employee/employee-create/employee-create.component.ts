import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { ExportData } from 'src/app/services/Export-data.service';
import { XtraAndPosLookUpsService,XtraAndPosBranchEpService, XtraAndPosHrEmployeeService, XtraAndPosNationalityService, XtraAndPosSpecializationsService, XtraAndPosJobDifinitionService, XtraAndPosJobNameService, CurrencyEpService, RoleGroupEpService, ApplicationUser, HrEmployeeDto, XtraAndPosOrgStructuresService, ExtraAndPosBankEpService } from 'src/app/shared/api';



@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css'],
  providers: [ExportData]
})
export class EmployeeCreateComponent implements OnInit {
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
    private RoleGroupEpService  : RoleGroupEpService
    ,private XtraAndPosOrgStructuresService :XtraAndPosOrgStructuresService,
    private ExtraAndPosBankEpService :ExtraAndPosBankEpService){this.formEmployee = this.createForm();}
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
        userName: new FormControl(null, [Validators.required]),
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
      banksData : any[] = [];
      cols :any ;
      currentEmployeeId: any  ;
      @ViewChild('dt') dt: any;
      @ViewChild('formElement') formElement!: ElementRef;
      branchData : any[] = [] ;
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
        this.formEmployee.get('date')?.setValue(this.getFormattedDate());

      }
      getFormattedDate(): string {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
      }
      getData(){
        this.XtraAndPosBranchEpService.httpGetBranchGetAllForDropDown().subscribe((value:any)=>{
          let jsonData = JSON.parse(value);
          this.branchData = jsonData ;
        });
        // this.ExtraAndPosBankEpService.httpGetExtraAndPosBankManagementInfo().subscribe((value:any)=>{
        //   let jsonData = JSON.parse(value);
        //   this.banksData = jsonData.Obj.list ;
        // });
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
        this.XtraAndPosOrgStructuresService.httpGetXtraAndPosOrgStructuresGetOrgStructuresService().subscribe((value:any)=>{
          let jsonData = JSON.parse(value);
          this.orgStructuresData = jsonData.Obj.orgStructures;
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
          this.roleGroup = jsonData.Obj.roleGroups;
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
          nameAr: employee.NameAr,
          nameEn: employee.NameEn,
          statusId: employee.StatusId,
          branchId: employee.BranchId,
          sno: employee.SNO,
          nationalityId: employee.NationalityId,
          secondName: employee.SecondName,
          lastName: employee.LastName,
          title: employee.Title,
          gender: employee.Gender,
          maritalStatus: employee.MaritalStatus,
          highestAcademicQualification: employee.HighestAcademicQualification,
          identityNumber: employee.IdentityNumber,
          specializationId: employee.SpecializationId,
          identityCreationDate: employee.IdentityCreationDate,
          identityEndDate: employee.IdentityEndDate,
          birthDate: employee.BirthDate,
          identityType: employee.IdentityType,
          email: employee.Email,
          mobile: employee.Mobile,
          phone: employee.Phone,
          address: employee.Address,
          userName: employee.UserName,
          password: employee.Password,
          roleId: employee.RoleId,
          isSalesRepresentative: employee.IsSalesRepresentative,
          jobId: employee.JobId,
          jobNameId: employee.JobNameId,
          divisionId: employee.DivisionId,
          contractPeriod: employee.ContractPeriod,
          contractStartDate: employee.ContractStartDate,
          contractEndDate: employee.ContractEndDate,
          basicSalary: employee.BasicSalary,
          currencyId: employee.CurrencyId,
          annualVacDays: employee.AnnualVacDays,
          bankAccountId: employee.BankAccountId,
          iban: employee.Iban,
          barcode: employee.Barcode,
          startDate: employee.StartDate,
          date: employee.Date,
          fileDescription: employee.FileDescription,
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
        }, (error: any) => {
          this.toastr.error('Failed to delete employee.');
        });
      }
      onSubmit(Form: FormGroup) {
        if(!this.isEdit){
        if(this.formEmployee.valid)
        {
        const model: HrEmployeeDto = {
          ...this.formEmployee.value,
          statusId: 1,
          fileName: this.uploadedFiles[0]?.name,
          fileSize: this.uploadedFiles[0]?.size,
          fileType: this.uploadedFiles[0]?.type,
          user: {
            userName: this.formEmployee.get('userName')?.value,
            roleId: this.formEmployee.get('roleId')?.value,
          branchId : this.formEmployee.get('branchId')?.value,

          },
        };
        this.XtraAndPosHrEmployeeService.httpPostXtraAndPosHrEmployeeCreateHrEmployeeService({
          body : model
        }).subscribe((value:any)=>{
          let jsonData = JSON.parse(value);
            this.toastr.success(jsonData.Message)
            this.formEmployee.reset();
          this.formEmployee.get('StatusId')?.setValue('1');
          this.uploadedFiles = [];
          this.confirmPassword.nativeElement.value = ''
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
          this.uploadedFiles = [];
          this.confirmPassword.nativeElement.value = ''

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

       const columns = ['ملاحظات',' الاسم بالانجليزية','الاسم ','تاريخ الانشاء','كود الموظف'];
        this.ExportData.printPdf(tableData,columns,'Employee.pdf')
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
jobChanged(event : Event){
  const target = event.target as HTMLSelectElement ;
  const id = Number(target.value);
  const  job =  this.jobDifData.filter((r)=>r.Id == id )[0]
   const levelName =  this.orgStructuresData.filter((r) => r.Id === job.Level1Id)[0]
   this.formEmployee.get('divisionId')?.setValue(levelName.NameAr);
}
contractStartDateChange(event :Event){
const target = event.target as HTMLInputElement;
  const addedYears = Number(target.value);  const startDate = this.formEmployee.get('contractStartDate')?.value;
  if (startDate && addedYears) {
    const date = new Date(startDate);
    const endDate = new Date(date);
    endDate.setFullYear(date.getFullYear() + addedYears);
    const formattedEndDate = endDate.toISOString().slice(0, 10);
    this.formEmployee.get('contractEndDate')?.setValue(formattedEndDate);
}
}
}
