import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { ExportData } from 'src/app/services/Export-data.service';
import { XtraAndPosLookUpsService,XtraAndPosBranchEpService, XtraAndPosEmployeeContractService, XtraAndPosNationalityService, XtraAndPosSpecializationsService, XtraAndPosJobDifinitionService, XtraAndPosJobNameService, CurrencyEpService, RoleGroupEpService, ApplicationUser, XtraAndPosOrgStructuresService, ExtraAndPosBankEpService, EmployeeContractDto, XtraAndPosWorkCardService, XtraAndPosAllowenceService, XtraAndPosHrEmployeeService } from 'src/app/shared/api';


@Component({
  selector: 'app-emp-contract-new',
  templateUrl: './emp-contract-new.component.html',
  styleUrls: ['./emp-contract-new.component.css'],
  providers: [ExportData]
})
export class EmpContractNewComponent implements OnInit  {
  constructor(
    private toastr:ToastrService,
    private router: Router
    ,private ExportData :ExportData
    ,private  CurrencyEpService : CurrencyEpService ,
    private XtraAndPosLookUpsService :XtraAndPosLookUpsService
    ,private XtraAndPosBranchEpService : XtraAndPosBranchEpService
    ,public translate : TranslateService
    ,private XtraAndPosWorkCardService: XtraAndPosWorkCardService
    ,private XtraAndPosAllowenceService : XtraAndPosAllowenceService
    ,private fb:FormBuilder,
    private XtraAndPosEmployeeContractService: XtraAndPosEmployeeContractService,
    private XtraAndPosHrEmployeeService :XtraAndPosHrEmployeeService,
    private  XtraAndPosJobDifinitionService :XtraAndPosJobDifinitionService,
    private XtraAndPosOrgStructuresService:XtraAndPosOrgStructuresService
    ){this.formContract = this.createForm();}
    formContract : FormGroup;
    currencyData :any [] = [] ;
    statusData : any[] = [];
    branchData : any[] = [] ;
    currentContractId: any  ;
    workCardData :any[]  = [] ;
    allowenceTypeData :any[]  = [] ;
    allowenceValueTypeData :any[]  = [] ;
    orgStructuresData :any[]  = [] ;

cols : any  ;
searchCols : any  ;
isEdit:boolean= false ;
periodReadOnly =false ;
@ViewChild('dt') dt: any;
@ViewChild('dr') dr: any;
@ViewChild('inputSearch') inputSearch: any;
@ViewChild('branch') branch: any;
@ViewChild('empName') empName: any;
@ViewChild('job') job: any;
@ViewChild('division') division: any;
@ViewChild('inputOperation') inputOperation: any;
@ViewChild('formElement') formElement!: ElementRef;
ContractData :any[] = [] ;
EmployeeData :any[] = [] ;
allowenceData  :any[] = [] ;
JobData  :any[] = [] ;
displayPrivew : boolean = false;
numberColumns : EmployeeContractDto [] = [] ;
createForm(): FormGroup {
     return this.fb.group({
      branchId: new FormControl(null),
      employeeId: new FormControl(null),
      jobId: new FormControl(null),
      divisionId: new FormControl(null),
      contractNo: new FormControl(null,Validators.required),
      contractStartDate: new FormControl(null,Validators.required),
      contractPeriod: new FormControl(null,Validators.required),
      contractEndDate: new FormControl(null,Validators.required),
      basicSalary: new FormControl(null,Validators.required),
      currencyId: new FormControl(null,Validators.required),
      workCardId: new FormControl(null,Validators.required),
      allowenceId: new FormControl(null,Validators.required),
      allowenceType: new FormControl(null,Validators.required),
      allowenceValueType: new FormControl(null,Validators.required),
      allowenceValue: new FormControl(null,Validators.required),
    })
}
ngOnInit(): void {
  this.createForm();
  this.cols = [
    { field: 'Id', header: 'ContractId' },
    { field: 'CreatedDate', header: 'CreatedDate' },
    { field: 'BranchId', header: 'BranchId' },
    { field: 'NameAr', header: 'NameAr' },
    { field: 'NameEn', header: 'NameEn' },
    { field: 'JobName', header: 'JobName' },
  ];
  this.searchCols = [
    { field: 'Id', header: 'EmployeeId' },
    { field: 'NameAr', header: 'NameAr' },
    { field: 'NameEn', header: 'NameEn' },
  ];
  this.getData();
  this.refreshTable();

}
setEdit(contract: any) {

  this.formContract.patchValue({
    branchId: contract.BranchId,
    employeeId: contract.EmployeeId,
    jobId: contract.JobId,
    divisionId: contract.DivisionId,
    date: contract.Date,
    contractNo: contract.ContractNo,
    contractstartDate: contract.ContractStartDate,
    contractPeriod: contract.ContractPeriod,
    contractEndDate: contract.ContractEndDate,
    basicSalary: contract.BasicSalary,
    currencyId: contract.CurrencyId,
    workCardId: contract.WorkCardId,
    allowenceId: contract.AllowenceId,
    allowenceType: contract.AllowenceType,
    allowenceValueType: contract.AllowenceValueType,
    allowenceValue: contract.AllowenceValue,
  });
  this.branch.nativeElement.value = this.getBranch(contract.BranchId)?.NameAr
  this.job.nativeElement.value = this.getJob(contract.JobId)?.NameAr
  this.division.nativeElement.value = this.getLevelName(contract.DivisionId)?.NameAr
  this.isEdit = true;
  this.currentContractId = contract.Id;

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
getData(){
  this.XtraAndPosBranchEpService.httpGetBranchGetAllForDropDown().subscribe((value:any)=>{
    let jsonData = JSON.parse(value);
    this.branchData = jsonData ;
  });
  this.XtraAndPosWorkCardService.httpGetXtraAndPosWorkCardGetWorkCardService().subscribe((value: any) => {
    let jsonworkCardData = JSON.parse(value);
    this.workCardData = jsonworkCardData.Obj.card;
  });
  this.XtraAndPosOrgStructuresService.httpGetXtraAndPosOrgStructuresGetOrgStructuresService().subscribe((value:any)=>{
    let jsonData = JSON.parse(value);
    this.orgStructuresData = jsonData.Obj.orgStructures;
  });
  this.XtraAndPosAllowenceService.httpGetXtraAndPosAllowenceGetAllowenceService().subscribe((value: any) => {
    let jsonworkCardData = JSON.parse(value);
    this.allowenceData = jsonworkCardData.Obj.allowence;
  });
  this.XtraAndPosHrEmployeeService.httpGetXtraAndPosHrEmployeeGetHrEmployeeService().subscribe((value: any) => {
    let jsonEmployeeData = JSON.parse(value);
    this.EmployeeData = jsonEmployeeData.Obj.emp;
  });
  this.XtraAndPosLookUpsService.httpGetXtraAndPosLookUpsGetStatus().subscribe((value:any)=>{
    let jsonData = JSON.parse(value);
    this.statusData = jsonData;
  });
  this.XtraAndPosLookUpsService.httpGetXtraAndPosLookUpsGetAllowenceTypes().subscribe((value:any)=>{
    let jsonData = JSON.parse(value);
    this.allowenceTypeData = jsonData;
  });
  this.XtraAndPosLookUpsService.httpGetXtraAndPosLookUpsGetAllowenceValueTypes().subscribe((value:any)=>{
    let jsonData = JSON.parse(value);
    this.allowenceValueTypeData = jsonData;
  });
  this.CurrencyEpService.httpGetCurrencyGetAll().subscribe((value:any)=>{
    let jsonData = JSON.parse(value);
    this.currencyData = jsonData.Obj.Currencies;
  });
  setTimeout(()=>{
    if (this.currencyData){
      let defaultCur =  this.currencyData.filter(r=>r.IsDefault ==true );
      if(defaultCur){
        this.formContract.get('currencyId')?.setValue(defaultCur.map(r=>r.Id))
      }
    };
    },500)
  this.XtraAndPosJobDifinitionService.httpGetXtraAndPosJobDifinitionGetJobDifinitionService().subscribe((value: any) => {
    let jsonJobData = JSON.parse(value);
    this.JobData = jsonJobData.Obj.jobDif;
  });

}
getStatus(Id :any){
  return this.statusData.filter(r=>r.id===Id)[0];
}
showDeleteConfirm(contract: any) {
  this.toastr
    .info('Do you want to delete this contract?', 'Confirmation', {
      timeOut: 0,
      extendedTimeOut: 0,
      closeButton: true,
      positionClass: 'toast-top-center',
      tapToDismiss: false,
    })
    .onTap.subscribe(() => {
      this.deleteContract(contract);
    this.empName.nativeElement.value = "";
    });
}
deleteContract(contract: any) {
  this.XtraAndPosEmployeeContractService.httpDeleteXtraAndPosEmployeeContractDeleteEmployeeContractService({
    id: contract.Id,
  }).subscribe((value: any) => {
    let jsonData = JSON.parse(value);
    this.toastr.clear();
    this.toastr.success(jsonData.Message);
    this.refreshTable();
    this.formContract.reset();
  }, (error: any) => {
    this.toastr.error('Failed to delete contract.');
  });
}
onSubmit(Form: FormGroup) {
  if(!this.isEdit){
  if(this.formContract.valid)
  {
  const model: EmployeeContractDto = {
    ...this.formContract.value,
    statusId: 1,
    fileName: this.uploadedFiles[0]?.name}
  this.XtraAndPosEmployeeContractService.httpPostXtraAndPosEmployeeContractCreateEmployeeContractService({
    body : model
  }).subscribe((value:any)=>{
    let jsonData = JSON.parse(value);
      this.toastr.success(jsonData.Message)
      this.formContract.reset();
    this.formContract.get('StatusId')?.setValue('1');
    this.empName.nativeElement.value = "";

      this.refreshTable();
  },
  (error: any) => {
    this.toastr.error('Failed to create contract.');
  })}else{
    this.toastr.success("ادخل البيانات المطلوبة")
  }
}else{
  let model = this.formContract.value;
  model.Id = this.currentContractId;
  this.XtraAndPosEmployeeContractService.httpPutXtraAndPosEmployeeContractUpdateEmployeeContractService({
    id: this.currentContractId,
    body: model
  }).subscribe((value: any) => {
    let jsonData = JSON.parse(value);
    this.toastr.success(jsonData.Message);
    this.refreshTable();
    this.isEdit=false;
    this.formContract.reset();

  });
  }
    }
refreshTable() {
  this.XtraAndPosEmployeeContractService.httpGetXtraAndPosEmployeeContractGetEmployeeContractService().subscribe((value: any) => {
    let jsonContractData = JSON.parse(value);
    this.ContractData = jsonContractData.Obj.empContract;
  });
}
getContract(id :any){
  return this.ContractData.filter((r)=>r.Id===id)[0]
}
goHome(){
  this.router.navigateByUrl('');
}
getBranch(id :any){
  return this.branchData.filter((r)=>r.Id===id)[0]
}

printPdf() {
  const tableData = this.ContractData.map((contract) => {
    return {
      notes: contract.Notes,
      ContractNameEn: contract.NameEn,
      ContractNameAr: contract.NameAr,
      createdDate: contract.CreatedDate,
      id: contract.Id
    };
  });

 const columns = ['ملاحظات',' الاسم بالانجليزية','الاسم ','تاريخ الانشاء','كود الموظف'];
  this.ExportData.printPdf(tableData,columns,'Contract.pdf')
}

uploadedFiles : any[] = []
      onUpload(event:any) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }
}
exportData() {
  const tableData = this.ContractData.map((contract) => {
    return {
      id:contract.Id,
      createdDate : contract.CreatedDate,
      ContractNameAr: contract.NameAr,
      ContractNameEn: contract.NameEn,
      notes: contract.Notes
    };
  });
this.ExportData.toExcel(tableData,'contract.xlsx')

}
contractStartDateChange(event :Event){
  const target = event.target as HTMLInputElement;
    const addedYears = Number(target.value);
      const startDate = this.formContract.get('contractStartDate')?.value;
    if (startDate && addedYears) {
      const date = new Date(startDate);
      const endDate = new Date(date);
      endDate.setFullYear(date.getFullYear() + addedYears);
      const formattedEndDate = endDate.toISOString().slice(0, 10);
      this.formContract.get('contractEndDate')?.setValue(formattedEndDate);
  }
  }
  onchangeStatDate(){
      this.periodReadOnly =true ;
  }
  searchTableVisible = false ;

  onSearchLookup(searchValue: Event) {
    this.dr?.filterGlobal((searchValue.target as HTMLInputElement).value, 'contains');
    if(this.inputSearch.nativeElement.value != ""&&this.inputSearch.nativeElement.value !=null){
      this.searchTableVisible = true
    }else{
      this.searchTableVisible = false
    }
  }
  fillEmp(emp :any){
    this.formContract.get('branchId')?.setValue(emp.BranchId);
    this.branch.nativeElement.value = this.getBranch(emp.BranchId)?.NameAr
    this.formContract.get('employeeId')?.setValue(emp.Id);
    this.empName.nativeElement.value = emp.NameAr
    this.formContract.get('jobId')?.setValue(emp.JobId);
    this.job.nativeElement.value = this.getJob(emp.JobId)?.NameAr
    this.formContract.get('divisionId')?.setValue(emp.DivisionId);
    this.division.nativeElement.value = this.getLevelName(emp.DivisionId)?.NameAr
    this.searchTableVisible = false
  }

  getLevelName(id: any) {
    if (Array.isArray(this.orgStructuresData)) {
      return this.orgStructuresData.filter((r) => r.Id === id)[0];
    }
    return null;
  }
  getJob(id :any){
    return this.JobData.filter((r)=>r.Id===id)[0]
  }
  allowenceValueTypeChange(event:Event){
let target =  event.target as HTMLSelectElement;
let value = Number(target.value)
if(value==3){
  this.displayPrivew =true;
  this.displayOperation =true;
}else{
  this.displayPrivew=false ;
  this.displayOperation=false ;
}

  }
  operation : number = 0 ;
  operationColumns: { id: string, value: number }[] = [];
  displayOperation = false ;
  operationColumnClick(id: number) {
    if (id == 1) {
      this.operationColumns.push({ id: 'الراتب الاساسي', value: this.formContract.get('basicSalary')?.value });
    } else if (id == 2) {
      this.operationColumns.push({ id: 'ايام العمل', value: 30 });
    }else if (id == 3) {
      this.operationColumns.push({ id: 'ساعات العمل', value: 8 });
    }else if (id ==4) {
      let value = this.formContract.get('basicSalary')?.value / 30
      this.operationColumns.push({ id: 'راتب اليوم الواحد', value: value });
    }


  }
  confirmOperation(){
    this.displayPrivew = false ;
    debugger
    let opr : string='' ;
    let columnValues =  this.operationColumns.map(r=>r.value)
    if(this.operation==1){
      opr = "X"
      this.formContract.get('allowenceValue')?.setValue(Number( columnValues[0])*Number( columnValues[1]))
    }else if(this.operation ==2 ){
      opr = "/"
      this.formContract.get('allowenceValue')?.setValue(Number( columnValues[0])/Number( columnValues[1]))
    }else if(this.operation ==3 ){
      opr = "+"
      this.formContract.get('allowenceValue')?.setValue(Number( columnValues[0])+Number(columnValues[1]))

    }else if(this.operation ==4 ){
      opr = "-"
      this.formContract.get('allowenceValue')?.setValue(Number( columnValues[0])-Number( columnValues[1]))
    }
    let columnNames =  this.operationColumns.map(r=>r.id)
    this.inputOperation.nativeElement.value = columnNames.join(opr)
    this.operationColumns = [];
  }
}
