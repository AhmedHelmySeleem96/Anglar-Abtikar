import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { ExportData } from 'src/app/services/Export-data.service';
import { XtraAndPosLookUpsService,XtraAndPosBranchEpService, XtraAndPosOrgStructuresService, XtraAndPosHrEmployeeService, HrEmployeeDto } from 'src/app/shared/api';


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
    private router: Router,private ExportData :ExportData
    ,  private XtraAndPosLookUpsService :XtraAndPosLookUpsService,private XtraAndPosBranchEpService : XtraAndPosBranchEpService
    ,public translate : TranslateService,private XtraAndPosOrgStructuresService :XtraAndPosOrgStructuresService,
    private fb:FormBuilder,private route: ActivatedRoute,private XtraAndPosHrEmployeeService: XtraAndPosHrEmployeeService){this.formEmployee = this.createForm();}
    formEmployee : FormGroup;
    createForm(): FormGroup {
      return this.fb.group({
        nameAr: new FormControl('', [Validators.required]),
        nameEn: new FormControl('', [Validators.required]),
        sNO: new FormControl('', [Validators.required]),
        branchId: new FormControl('', [Validators.required]),
        statusId: new FormControl('1'),
        nationalityId: new FormControl(''),
        secondName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        title: new FormControl('', [Validators.required]),
        gender: new FormControl(''),
        maritalStatus: new FormControl(''),
        highestAcademicQualification: new FormControl(''),
        identityNumber: new FormControl(''),
        specializationId: new FormControl(''),
        identityCreationDate: new FormControl(''),
        identityEndDate: new FormControl(''),
        birthDate: new FormControl(''),
        identityType: new FormControl(''),
        type: new FormControl(''),
        email: new FormControl('', [Validators.email]),
        mobile: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required]),
        address: new FormControl('', [Validators.required]),
        accountId: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        roleId: new FormControl(''),
        isSalesRepresentative: new FormControl(''),
      });
    }
      isEdit:boolean= false ;
      empInformation =true ;
      info =true ;
      empDocs =true ;
      empUser =true ;
      EmployeeData :any[] = [] ;
      statusData : any[] = [];
      cols :any ;
      currentEmployeeId: any  ;
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
          { field: 'Id', header: 'EmployeeId' },
          { field: 'SNO', header: 'SNO' },
          { field: 'BranchId', header: 'BranchId' },
          { field: 'CreatedDate', header: 'CreatedDate' },
          { field: 'NameAr', header: 'NameAr' },
          { field: 'NameEn', header: 'NameEn' },
          { field: 'StatusId', header: 'StatusId' },
          { field: 'NationalityId', header: 'NationalityId' },
          { field: 'SecoundName', header: 'SecoundName' },
          { field: 'LastName', header: 'LastName' },
          { field: 'Title', header: 'Title' },
          { field: 'Gender', header: 'Gender' },
          { field: 'MaritalStatus', header: 'MaritalStatus' },
          { field: 'IdentityType', header: 'IdentityType' },
          { field: 'HighestAcademicQualification', header: 'HighestAcademicQualification' },
          { field: 'IdentityNumber', header: 'IdentityNumber' },
          { field: 'SpecializationId', header: 'SpecializationId' },
          { field: 'IdentityCreationDate', header: 'IdentityCreationDate' },
          { field: 'IdentityEndDate', header: 'IdentityEndDate' },
          { field: 'BirthDate', header: 'BirthDate' },
          { field: 'Email', header: 'Email' },
          { field: 'Mobile', header: 'Mobile' },
          { field: 'Phone', header: 'Phone' },
          { field: 'Address', header: 'Address' },
          { field: 'AccountId', header: 'AccountId' },
          { field: 'Password', header: 'Password' },
          { field: 'RoleId', header: 'RoleId' },
          { field: 'IsSalesRepresentative', header: 'IsSalesRepresentative' },
          // ... Add other properties here ...
        ];
        this.XtraAndPosBranchEpService.httpGetBranchGetAllForDropDown().subscribe((value:any)=>{
          let jsonData = JSON.parse(value);
          this.branchData = jsonData ;
        });
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
      OnSubmit(Form: FormGroup) {
        debugger
        const modelProperties = Object.keys(this.formEmployee.value);
        const bodyProperties = Object.keys(this.formEmployee.getRawValue());

        // Find the properties that are in model but not in body
        const missingPropertiesInBody = modelProperties.filter(property => !bodyProperties.includes(property));

        // Compare the properties to check if they match
        const propertiesMatch = JSON.stringify(modelProperties) === JSON.stringify(bodyProperties);

        if (!propertiesMatch) {
          console.error("Model properties don't match body properties.");
          console.error("Missing properties in body:", missingPropertiesInBody);
          return;
        }

        if(!this.isEdit){
        if(this.formEmployee.valid)
        {
        let model = this.formEmployee.value;


        model.statusId= 1  ;

        this.XtraAndPosHrEmployeeService.httpPostXtraAndPosHrEmployeeCreateHrEmployeeService({
          body : model
        }).subscribe((value:any)=>{
          let jsonData = JSON.parse(value);
            this.toastr.success(jsonData.Message)
            this.formEmployee.reset();
          this.formEmployee.get('StatusId')?.setValue('1');
            this.refreshTable();
        },
        (error: any) => {
          this.toastr.error('Failed to create employee.');
          console.error(error); // Log the error for debugging
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

        });
        }
          }
      refreshTable() {
        this.XtraAndPosHrEmployeeService.httpGetXtraAndPosHrEmployeeGetHrEmployeeService().subscribe((value: any) => {
          let jsonEmployeeData = JSON.parse(value);
          this.EmployeeData = jsonEmployeeData.Obj.emp;
        });
      }
      checkPropertyMatch(model: HrEmployeeDto): boolean {
        const backendProps: string[] = [
          'accountId', 'address', 'birthDate', 'email', 'gender', 'highestAcademicQualification',
          'identityCreationDate', 'identityEndDate', 'identityNumber', 'identityType',
          'isSalesRepresentative', 'lastName', 'maritalStatus', 'mobile', 'nameAr', 'nameEn',
          'nationalityId', 'password', 'phone', 'roleId', 'secoundName', 'sno', 'specializationId',
          'status', 'title'
        ];

        const frontendProps = Object.keys(model);

        // Compare properties in lowercase
        return backendProps.every(prop => frontendProps.includes(prop.toLowerCase()));
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
      getLevelName(id: any) {
        if (Array.isArray(this.orgStructuresData)) {
          return this.orgStructuresData.filter((r) => r.Id === id)[0];
        }
        return null;
      }
      getEmployeeCategory(id : number ){
        return this.jobCatData.filter((r)=>r.Id==id)[0];
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
      onUpload(event:UploadEvent) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }
}
}
