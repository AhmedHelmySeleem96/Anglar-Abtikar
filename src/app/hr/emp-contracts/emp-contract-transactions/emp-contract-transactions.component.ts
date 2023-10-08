import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { ExportData } from 'src/app/services/Export-data.service';
import { XtraAndPosLookUpsService,XtraAndPosBranchEpService,
   XtraAndPosEmployeeContractService, XtraAndPosJobDifinitionService,
    CurrencyEpService,
     EmployeeContractDto, XtraAndPosWorkCardService, XtraAndPosAllowanceService,
      XtraAndPosHrEmployeeService,
      XtraAndPosJobNameService,
      XtraAndPosEmployeeAllowanceTrxService,
      XtraAndPosEmployeeContractTrxService,
      XtraAndPosEmployeeVacationsService,
      XtraAndPosEmpVacationTypesService,
      ExtraAndPosBankAccountEpService,
      XtraAndPosClientEpService,
      } from 'src/app/shared/api';

@Component({
  selector: 'app-emp-contract-transactions',
  templateUrl: './emp-contract-transactions.component.html',
  styleUrls: ['./emp-contract-transactions.component.css'],
  providers: [ExportData]
})
export class EmpContractTransactionsComponent implements OnInit  {

  constructor(
    private toastr:ToastrService,
    private router: Router
    ,private ExportData :ExportData
    ,private  CurrencyEpService : CurrencyEpService ,
    private XtraAndPosLookUpsService :XtraAndPosLookUpsService
    ,private XtraAndPosBranchEpService : XtraAndPosBranchEpService
    ,public translate : TranslateService
    ,private XtraAndPosWorkCardService: XtraAndPosWorkCardService
    ,private XtraAndPosAllowanceService : XtraAndPosAllowanceService
    ,private fb:FormBuilder,
    private XtraAndPosEmployeeContractService: XtraAndPosEmployeeContractService,
    private XtraAndPosHrEmployeeService :XtraAndPosHrEmployeeService,
    private  XtraAndPosJobDifinitionService :XtraAndPosJobDifinitionService,
    private XtraAndPosEmpAllownceTransactionsService : XtraAndPosEmployeeAllowanceTrxService,
    private XtraAndPosEmpContractTransactionsService  : XtraAndPosEmployeeContractTrxService,
    private XtraAndPosEmpVacationTransactionsService : XtraAndPosEmployeeVacationsService,
    private XtraAndPosJobNameService :XtraAndPosJobNameService,
    private XtraAndPosVacationTypesService : XtraAndPosEmpVacationTypesService,
    private ViewportScroller : ViewportScroller,
    private ExtraAndPosBankAccountEpService : ExtraAndPosBankAccountEpService,
    private  XtraAndPosClientEpService : XtraAndPosClientEpService,

    ){
    this.formReniew = this.createFormReniew();
    this.formAllowance = this.createFormAllowance();
    this.formVac = this.createFormVac();
    this.formContract = this.createForm();
    this.formEmployeeSetting = this.createformEmployeeSetting();
  }
    formReniew : FormGroup;
    formContract : FormGroup;
    formVacPrevious:FormGroup[]=[];
    formAllowance : FormGroup;
    formVac : FormGroup;
    formEmployeeSetting :FormGroup;
    currencyData :any [] = [] ;
    statusData : any[] = [];
    reniewTypeData : any[] = [];
    branchData : any[] = [] ;
    currentContractId: any  ;
    workCardData :any[]  = [] ;
    allowanceTypeData :any[]  = [] ;
    vacTypesData :any[]  = [] ;
    allowanceValueTypeData :any[]  = [] ;
    orgStructuresData :any[]  = [] ;
    addAllowance = false ;
cols : any  ;
searchCols : any  ;
allowanceCols : any  ;
vacCols : any  ;
isEdit:boolean= false ;
periodReadOnly =false ;
@ViewChild('dt') dt: any;
@ViewChild('dr') dr: any;
@ViewChild('inputSearch') inputSearch: any;
@ViewChild('branch') branch: any;
@ViewChild('empId') empId: any;
@ViewChild('empName') empName: any;
@ViewChild('job') job: any;
@ViewChild('division') division: any;
@ViewChild('fileUpload') fileUpload: any;
@ViewChild('inputOperation') inputOperation: any;
@ViewChild('percentage') percentage: any;
@ViewChild('formElement') formElement!: ElementRef;
ContractData :any[] = [] ;
EmployeeData :any[] = [] ;
allowanceData  :any[] = [] ;
allowancePaidTimes  :any[] = [] ;
transDialog =false ;
btnReniewOnly = false;
btnReniewAndProm = false;
employeeSettingsCols :any;
JobData  :any[] = [] ;
jobNamesData : any [] = [] ;
displayPrivew : boolean = false;
numberColumns : EmployeeContractDto [] = [] ;
contractTrxData :any[] = [] ;
allowanceTrxData :any[] = [] ;
vacTrxData :any[] = [] ;
vacTrxDialog = false ;
vacTrxDeduction = false;
vacTrxExtension = false ;
createFormAllowance():FormGroup{
return this.fb.group({
  allowanceId: new FormControl(null),
  employeeId: new FormControl(null, [Validators.required]),
  branchId: new FormControl(null, [Validators.required]),
  allowanceTypeId: new FormControl(null),
  allowanceValueTypeId: new FormControl(null),
  allowanceValue: new FormControl(null),
  allowancePaidTimeId: new FormControl(null),
  currencyId: new FormControl(null),
})
}
createFormReniew() : FormGroup{
  return this.fb.group({
    reniewTypeId: new FormControl(null, [Validators.required]),
    employeeId: new FormControl(null, [Validators.required]),
    branchId: new FormControl(null, [Validators.required]),
    reniewPeriod: new FormControl(null, [Validators.required]),
    reniewEndDate: new FormControl(null, [Validators.required]),
    jobDifinitionId: new FormControl(null),
    divisionId: new FormControl(null),
    jobNameId: new FormControl(null),
    basicSalary: new FormControl(null),
    currencyId: new FormControl(null),
    statusId: new FormControl(null, [Validators.required]),

  })
}
createformEmployeeSetting() : FormGroup{
  return this.fb.group({
    employeeId: new FormControl(null, [Validators.required]),
    employeeAccountId: new FormControl(null, [Validators.required]),
    tresauryId: new FormControl(null, [Validators.required]),
    inventoryId: new FormControl(null, [Validators.required]),
    customerGroupId: new FormControl(null, [Validators.required]),
    salesPriceId: new FormControl(null, [Validators.required]),
    canAddDiscount:new FormControl(false, [Validators.required]),
    canAddSalesPrice:new FormControl(false, [Validators.required]),
  })
}
vacTypeValue:any ;
createFormVac() : FormGroup{
  return this.fb.group({
    employeeId: new FormControl(null, [Validators.required]),
    branchId: new FormControl(null, [Validators.required]),
    vacTypeId: new FormControl(null, [Validators.required]),
    vacStartDate: new FormControl(null, [Validators.required]),
    vacPeriod: new FormControl(null, [Validators.required]),
    vacEndDate: new FormControl(null, [Validators.required]),
    empReplacementId: new FormControl(null, [Validators.required]),
    notes: new FormControl(null)
  })
}
createFormPrevious(obj: any): FormGroup {
  return this.fb.group({
    employeeId: new FormControl(null, [Validators.required]),
    previousBalance: new FormControl(null, [Validators.required]),
    vacTypeId: new FormControl(obj.Id, [Validators.required]),
  });
}
createForm(): FormGroup {
  return this.fb.group({
   branchId: new FormControl(null),
   employeeId: new FormControl(null),
   jobId: new FormControl(null),
   divisionId: new FormControl(null),
   contractNo: new FormControl(null),
   contractStartDate: new FormControl(null),
   contractPeriod: new FormControl(null),
   contractEndDate: new FormControl(null),
   basicSalary: new FormControl(null),
   currencyId: new FormControl(null),
   workCardId: new FormControl(null),
 })
}
ngOnInit(): void {
  this.cols = [
    { field: 'Id', header: 'Id' },
    { field: 'CreatedDate', header: 'CreatedDate' },
    { field: 'BranchId', header: 'BranchId' },
    { field: 'EmployeeId', header: 'NameAr' },
    { field: 'JobId', header: 'JobName' },
  ];
  this.vacCols = [
    { field: 'VacTypeId', header: 'Id' },
    { field: 'EmployeeId', header: 'NameAr' },
    { field: 'VacStartDate', header: 'VacStartDate' },
    { field: 'VacPeriod', header: 'VacPeriod' },
    { field: 'VacEndDate', header: 'VacEndDate' },
    { field: 'EmpReplacementId', header: 'EmpReplacementId' },
  ];
  this.employeeSettingsCols = [
    { field: 'EmployeeAccountId', header: 'Employee Account' },
    { field: 'TresauryId', header: 'Tresaury' },
    { field: 'InventoryId', header: 'Inventory' },
    { field: 'CustomerGroupId', header: 'Customer Group' },
    { field: 'SalesPriceId', header: 'Sales Price' },
    { field: 'CanAddDiscount', header: 'Can Add Discount' },
    { field: 'CanAddSalesPrice', header: 'Can Add Sales Price' },
];
  this.allowanceCols = [
    { field: 'Id', header: 'Id' },
    { field: 'CreatedDate', header: 'CreatedDate' },
    { field: 'BranchId', header: 'BranchId' },
    { field: 'EmployeeId', header: 'NameAr' },
    { field: 'AllowanceId', header: 'Allowance' },
    { field: 'AllowanceTypeId', header: 'AllowanceType' },
  ];
  this.searchCols = [
    { field: 'Id', header: 'EmployeeId' },
    { field: 'NameAr', header: 'NameAr' },
    { field: 'NameEn', header: 'NameEn' },
  ];
  this.refreshTable();
  this.getData();
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
  this.XtraAndPosAllowanceService.httpGetXtraAndPosAllowanceGetAllowanceService().subscribe((value: any) => {
    let jsonworkCardData = JSON.parse(value);
    this.allowanceData = jsonworkCardData.Obj.allowance;
  });
  this.XtraAndPosHrEmployeeService.httpGetXtraAndPosHrEmployeeGetHrEmployeeService().subscribe((value: any) => {
    let jsonEmployeeData = JSON.parse(value);
    this.EmployeeData = jsonEmployeeData.Obj.emp;
  });
  this.XtraAndPosLookUpsService.httpGetXtraAndPosLookUpsGetStatus().subscribe((value:any)=>{
    let jsonData = JSON.parse(value);
    this.statusData = jsonData;
  });
  this.XtraAndPosLookUpsService.httpGetXtraAndPosLookUpsGetReniewTypes().subscribe((value:any)=>{
    let jsonData = JSON.parse(value);
    this.reniewTypeData = jsonData;
  });
  this.XtraAndPosLookUpsService.httpGetXtraAndPosLookUpsGetAllowancePaidTimes().subscribe((value:any)=>{
    let jsonData = JSON.parse(value);
    this.allowancePaidTimes = jsonData;
  });
  this.XtraAndPosLookUpsService.httpGetXtraAndPosLookUpsGetAllowanceTypes().subscribe((value:any)=>{
    let jsonData = JSON.parse(value);
    this.allowanceTypeData = jsonData;
  });
  this.XtraAndPosLookUpsService.httpGetXtraAndPosLookUpsGetAllowanceValueTypes().subscribe((value:any)=>{
    let jsonData = JSON.parse(value);
    this.allowanceValueTypeData = jsonData;
  });
  this.CurrencyEpService.httpGetCurrencyGetAll().subscribe((value:any)=>{
    let jsonData = JSON.parse(value);
    this.currencyData = jsonData.Obj.Currencies;
  });
  this.XtraAndPosJobNameService.httpGetXtraAndPosJobNameGetJobNameService().subscribe((value:any)=>{
    let jsonData = JSON.parse(value);
    this.jobNamesData = jsonData.Obj.jobName;
  });
  this.XtraAndPosJobDifinitionService.httpGetXtraAndPosJobDifinitionGetJobDifinitionService().subscribe((value: any) => {
    let jsonJobData = JSON.parse(value);
    this.JobData = jsonJobData.Obj.jobDif;
  });
   this.XtraAndPosEmployeeContractService.httpGetXtraAndPosEmployeeContractGetEmployeeContractService().subscribe((value: any) => {
    let jsonContractData = JSON.parse(value);
    this.ContractData = jsonContractData.Obj.empContract;
  });
    this.XtraAndPosVacationTypesService.httpGetXtraAndPosEmpVacationTypesGetEmpVacationTypesService().subscribe((value: any) => {
      let jsonContractData = JSON.parse(value);
      this.vacTypesData = jsonContractData.Obj.vac;
      this.vacTypesData.forEach(obj => {
        this.formVacPrevious.push(this.createFormPrevious(obj));

      });
      //
      // const vacId = this.vacTypesData.map(r=>r.Id);
      // for(let i of vacId){
      //   this.formVacPrevious.forEach(formGroup => {
      //     formGroup.get('vacTypeId')?.setValue(i);
      //   });
      // }

    });

;

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
  this.XtraAndPosEmpContractTransactionsService.httpDeleteXtraAndPosEmployeeContractTrxDeleteEmployeeContractTrxService({
    id: contract.Id,
  }).subscribe((value: any) => {
    let jsonData = JSON.parse(value);
    this.toastr.clear();
    this.toastr.success(jsonData.Message);
    this.refreshTable();
  }, (error: any) => {
    this.toastr.error('Failed to delete contract.');
  });
}

refreshTable() {
  this.XtraAndPosEmpContractTransactionsService.httpGetXtraAndPosEmployeeContractTrxGetEmployeeContractTrxService().subscribe((value: any) => {
    let jsonContractData = JSON.parse(value);
    this.contractTrxData = jsonContractData.Obj.contract;
  });
  this.XtraAndPosEmpAllownceTransactionsService.httpGetXtraAndPosEmployeeAllowanceTrxGetEmployeeAllowanceTrxService().subscribe((value: any) => {
    let jsonContractData = JSON.parse(value);
    this.allowanceTrxData = jsonContractData.Obj.allowance;
  });
  this.XtraAndPosEmpVacationTransactionsService.httpGetXtraAndPosEmployeeVacationsGetEmployeeVacationsService().subscribe((value: any) => {
    let jsonContractData = JSON.parse(value);
    this.vacTrxData = jsonContractData.Obj.vac;
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

getEmployee(id :any){
  return this.EmployeeData.filter((r)=>r.Id===id)[0]
}
getAllowance(id :any){
  return this.allowanceData.filter((r)=>r.Id===id)[0]
}
getAllowanceType(id :any){
  return this.allowanceTypeData.filter((r)=>r.Id===id)[0]
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
  previousBalance :any[]=[] ;
  hasPreviousBalance =false;
  fillEmp(emp :any){
    this.formReniew.get('statusId')?.setValue('1');
    this.formReniew.get('branchId')?.setValue(emp.BranchId);
    if(this.branch){
      this.branch.nativeElement.value = this.getBranch(emp.BranchId)?.NameAr
    }
    if(this.empName){
      this.empName.nativeElement.value = this.getEmployee(emp.EmployeeId)?.NameAr
    }
    if(this.job){
      this.job.nativeElement.value = this.getJob(emp.JobId)?.NameAr
    }
    this.formReniew.get('employeeId')?.setValue(emp.EmployeeId);
    if(this.division){
      this.division.nativeElement.value = this.getLevelName(emp.DivisionId)?.NameAr
    }
    this.formContract.patchValue({
      branchId: emp.BranchId,
      employeeId: emp.EmployeeId,
      jobId: emp.JobId,
      divisionId: emp.DivisionId,
      date: emp.Date,
      contractNo: emp.ContractNo,
      contractstartDate: emp.ContractStartDate,
      contractPeriod: emp.ContractPeriod,
      contractEndDate: emp.ContractEndDate,
      basicSalary: emp.BasicSalary,
      currencyId: emp.CurrencyId,
      workCardId: emp.WorkCardId,
    });
    this.searchTableVisible = false
    this.XtraAndPosEmpVacationTransactionsService.httpGetXtraAndPosEmployeeVacationsGetEmployeeVacationBalanceService({employeeId:Number(emp.EmployeeId)}).subscribe((value: any) => {
      let jsonContractData = JSON.parse(value);
      this.previousBalance = jsonContractData.Obj.vac;

      if(this.previousBalance.length==0){
        this.hasPreviousBalance = false ;
        this.formVacPrevious.forEach(formGroup => {
          formGroup.get('employeeId')?.setValue(emp.EmployeeId);
        });
      }else{
        this.hasPreviousBalance = true ;
        this.formVacPrevious.forEach((form, index) => {
          form.patchValue({
            employeeId: emp.EmployeeId,
            vacTypeId: this.previousBalance[index].VacTypeId,
            previousBalance: this.previousBalance[index].PreviousBalance
          });
        });
      }
    });


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
  allowanceValueTypeChange(event:Event){
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
setContractEdit(contract:any){

  this.transDialog =true ;
  this.btnReniewAndProm = true ;
  this.formReniew.patchValue({
      statusId: contract.StatusId,
      reniewTypeId: contract.ReniewTypeId,
      reniewPeriod: contract.ReniewPeriod,
      reniewEndDate: contract.ReniewEndDate,
      jobDifinitionId: contract.JobDifinitionId,
      divisionId: contract.DivisionId,
      jobNameId: contract.JobNameId,
      basicSalary: contract.BasicSalary,
      currencyId: contract.CurrencyId,
  });
  this.branch.nativeElement.value = this.getBranch(contract.BranchId)?.NameAr;
  this.empName.nativeElement.value = this.getEmployee(contract.EmployeeId)?.NameAr;
  this.empId.nativeElement.value = contract.EmployeeId;
  this.isEdit = true;
this.currentContractId = contract.Id;

  this.ViewportScroller.scrollToPosition([10,10]) ;

}
currentEmployeeSettingId : any ;
currentVacId :any ;
setVacEdit(vac:any){
  this.formVac.patchValue({
    vacTypeId: vac.VacTypeId,
    vacStartDate: vac.VacStartDate,
    vacPeriod: vac.VacPeriod,
    vacEndDate: vac.VacEndDate,
    empReplacementId: vac.EmpReplacementId,
    notes: vac.Notes,
  })
  this.formVac.get('employeeId')?.setValue(vac.EployeeId);
  this.formVac.get('branchId')?.setValue(vac.BranchId);
  this.branch.nativeElement.value = this.getBranch(vac.BranchId)?.NameAr;
  this.empName.nativeElement.value = this.getEmployee(vac.EmployeeId)?.NameAr;
  this.empId.nativeElement.value = vac.EmployeeId;
  // if(this.previousBalance){
  //   this.formVacPrevious.patchValue({
  //     previousBalance : this.previousBalance[0].PreviousBalance
  //   })
  // }
  this.isEdit = true;
  this.currentVacId = vac.Id;
  this.ViewportScroller.scrollToPosition([10,10]) ;
}
setEmployeeSettingEdit(empSetting:any){
  this.formEmployeeSetting.patchValue({
    employeeAccountId: empSetting.EmployeeAccountId,
    tresauryId: empSetting.TresauryId,
    inventoryId: empSetting.InventoryId,
    customerGroupId: empSetting.CustomerGroupId,
    salesPriceId: empSetting.SalesPriceId,
    canAddDiscount: empSetting.CanAddDiscount,
    canAddSalesPrice: empSetting.CanAddSalesPrice,
  })
  this.formEmployeeSetting.get('employeeId')?.setValue(empSetting.EployeeId);
  this.formEmployeeSetting.get('branchId')?.setValue(empSetting.BranchId);

  this.isEdit = true;
  this.currentEmployeeSettingId = empSetting.Id;
  this.ViewportScroller.scrollToPosition([10,10]) ;
}
currentAllowanceId : any ;
setAllowanceEdit(allowance:any){
  this.addAllowance =true ;
  this.formAllowance.patchValue({
    allowanceId: allowance.AllowanceId,
    allowanceTypeId: allowance.AllowanceTypeId,
    allowanceValueTypeId: allowance.AllowanceValueTypeId,
    allowancePaidTimeId: allowance.AllowancePaidTimeId,
    operation: allowance.Operation,
    allowanceValue: allowance.AllowanceValue,
    currencyId: allowance.CurrencyId,
  });
  this.formAllowance.get('employeeId')?.setValue(allowance.EmployeeId);
this.formAllowance.get('branchId')?.setValue(allowance.BranchId);
this.branch.nativeElement.value = this.getBranch(allowance.BranchId)?.NameAr;
this.empName.nativeElement.value = this.getEmployee(allowance.EmployeeId)?.NameAr;
this.empId.nativeElement.value = allowance.EmployeeId;

this.isEdit = true;
this.currentAllowanceId = allowance.Id;

this.ViewportScroller.scrollToPosition([10,10]) ;

}
  confirmOperation(){
    this.transDialog = false ;
    let opr : string='' ;
    let columnValues =  this.operationColumns.map(r=>r.value)
    if(this.operationColumns.length==1&&this.percentage.nativeElement.value!=null){
      columnValues.push((Number(this.percentage.nativeElement.value)/100));
    }
    if(this.operation==1){
      opr = "X"
      this.formAllowance.get('allowanceValue')?.setValue(Number( columnValues[0])*Number( columnValues[1]))
    }else if(this.operation ==2 ){
      opr = "/"
      this.formAllowance.get('allowanceValue')?.setValue(Number( columnValues[0])/Number( columnValues[1]))
    }else if(this.operation ==3 ){
      opr = "+"
      this.formAllowance.get('allowanceValue')?.setValue(Number( columnValues[0])+Number(columnValues[1]))

    }else if(this.operation ==4 ){
      opr = "-"
      this.formAllowance.get('allowanceValue')?.setValue(Number( columnValues[0])-Number( columnValues[1]))
    }
    let columnNames =  this.operationColumns.map(r=>r.id)
    if(this.percentage.nativeElement.value!=null){
      this.inputOperation.nativeElement.value = 'نسبه'
    }else{
      this.inputOperation.nativeElement.value = columnNames.join(opr)
    }
    this.operationColumns = [];
  }
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


  onFileSelected(event: any): void {
    const fileInput = event.target;
    if (fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      if (selectedFile.name.endsWith('.xlsx')) {
        this.processExcelFile(selectedFile);
      } else {
        this.toastr.error('Please select a valid Excel file with .xlsx extension.');
      }
    }
  }

  processExcelFile(file: File): void {
    const blob = new Blob([file], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    const requestBody = {
      body: {
        file: blob
      }
    };

    this.XtraAndPosEmployeeContractService.httpPostXtraAndPosEmployeeContractImportExcel(requestBody).subscribe((value: any) => {
      let jsonData = JSON.parse(value);
      this.toastr.success(jsonData);
      this.refreshTable();
      this.fileUpload.nativeElement.value = '';
    },(error)=>{
      this.fileUpload.nativeElement.value = '';

    });

  }
  transDialogClick(){
    this.transDialog =true;
  }
  btnReniewClick(id : number){
    if(id==1){
      this. btnReniewOnly =true  ;
      this. btnReniewAndProm =false  ;
    }else{
      this. btnReniewOnly =false  ;
      this. btnReniewAndProm =true  ;
    }


  }
  addAllowanceClick(){
    this.addAllowance = true;
  }
  contractPeriodDateChange(event :Event){
    const target = event.target as HTMLInputElement;
    const addedValue = Number(target.value);
    const  empId = this.formReniew.get('employeeId')?.value
    var employee = this.EmployeeData.filter(r=>r.Id == empId);
    if (employee.length > 0) {
      const contractEndDate = new Date(employee[0].ContractEndDate); // Convert to Date object
      if (contractEndDate instanceof Date && !isNaN(contractEndDate.getTime()) && addedValue) {
        const endDate = new Date(contractEndDate);
        if(!this.formReniew.get('reniewTypeId')?.value){
          this.toastr.error('ادخل نوع التجديد')
        }else{
          if(Number(this.formReniew.get('reniewTypeId')?.value)==1){
            endDate.setDate(contractEndDate.getDate() + addedValue);
          }else if(Number(this.formReniew.get('reniewTypeId')?.value)==2){
            endDate.setMonth(contractEndDate.getMonth() + addedValue);
          }else {
            endDate.setFullYear(contractEndDate.getFullYear() + addedValue);
          }
        }
        const formattedEndDate = endDate.toISOString().slice(0, 10);
        this.formReniew.get('reniewEndDate')?.setValue(formattedEndDate);
      }
    }
  }
  vacStartDateChange(event :Event){
    const target = event.target as HTMLInputElement;
    const addValue = Number(target.value);
      const startDate = this.formVac.get('vacStartDate')?.value;
    if (startDate && addValue) {
      const date = new Date(startDate);
      const endDate = new Date(date);
      endDate.setDate(date.getDate() + addValue);
      const formattedEndDate = endDate.toISOString().slice(0, 10);
      this.formVac.get('vacEndDate')?.setValue(formattedEndDate);
  }
  }
  onSubmitReniew(form : FormGroup){
    if(!this.isEdit){

    this.transDialog = false;
    if(this.formReniew.valid)
    {
    const model = this.formReniew.value;

    this.XtraAndPosEmpContractTransactionsService.httpPostXtraAndPosEmployeeContractTrxCreateEmployeeContractTrxService({
      body : model
    }).subscribe((value:any)=>{
      let jsonData = JSON.parse(value);
        this.toastr.success(jsonData.Message)
        this.formReniew.reset();
        this.refreshTable();
    },
    (error: any) => {
      this.toastr.error('Failed to create contract.');
    })}else{
      this.toastr.success("ادخل البيانات المطلوبة")
    }

  }else{
    let model = this.formVac.value;
    model.Id = this.currentContractId;
    const empId = this.formReniew.get('employeeId')?.value;
    const branchId = this.formReniew.get('branchId')?.value;
    this.formReniew.get('employeeId')?.setValue(empId);
    this.formReniew.get('branchId')?.setValue(branchId);
    this.XtraAndPosEmpContractTransactionsService.httpPutXtraAndPosEmployeeContractTrxUpdateEmployeeContractTrxService({
      id: this.currentContractId,
      body: model
    }).subscribe((value: any) => {
      let jsonData = JSON.parse(value);
      this.toastr.success(jsonData.Message);
      this.refreshTable();
      this.isEdit=false;
      this.formReniew.reset();

    });
  }
  }
  onSubmitVac(form : FormGroup){
if(!this.isEdit){


      if(this.previousBalance.length==0){
        const modelPrevious = this.formVacPrevious.map(r=>r.value) ;
        this.XtraAndPosEmpVacationTransactionsService.httpPostXtraAndPosEmployeeVacationsCreateEmployeeVacationBalanceService({body:modelPrevious})
        .subscribe((value:any)=>{
        })
      }
    this.transDialog = false;
    const empId = this.formReniew.get('employeeId')?.value;
    const branchId = this.formReniew.get('branchId')?.value;
    this.formVac.get('employeeId')?.setValue(empId);
    this.formVac.get('branchId')?.setValue(branchId);
    if(this.formVac.valid)
    {
    const model = this.formVac.value;

    this.XtraAndPosEmpVacationTransactionsService.httpPostXtraAndPosEmployeeVacationsCreateEmployeeVacationsService({
      body : model
    }).subscribe((value:any)=>{
      let jsonData = JSON.parse(value);
        this.toastr.success(jsonData.Message)
        this.formVac.reset();
        this.refreshTable();
    },
    (error: any) => {
      this.toastr.error('Failed to create contract.');
    })}else{
      this.toastr.success("ادخل البيانات المطلوبة")
    }
  }else{
    let model = this.formVac.value;
    model.Id = this.currentVacId;
    const empId = this.formReniew.get('employeeId')?.value;
    const branchId = this.formReniew.get('branchId')?.value;
    this.formVac.get('employeeId')?.setValue(empId);
    this.formVac.get('branchId')?.setValue(branchId);
    this.XtraAndPosEmpVacationTransactionsService.httpPutXtraAndPosEmployeeVacationsUpdateEmployeeVacationsService({
      id: this.currentVacId,
      body: model
    }).subscribe((value: any) => {
      let jsonData = JSON.parse(value);
      this.toastr.success(jsonData.Message);
      this.refreshTable();
      this.isEdit=false;
      this.formVac.reset();

    });
  }

}
  onSubmitAllowance(form : FormGroup){
    if(!this.isEdit){
    this.transDialog = false;
    const empId = this.formReniew.get('employeeId')?.value;
    const branchId = this.formReniew.get('branchId')?.value;
    this.formAllowance.get('employeeId')?.setValue(empId);
    this.formAllowance.get('branchId')?.setValue(branchId);
    if(this.formAllowance.valid)
    {
    const model = this.formAllowance.value;

    this.XtraAndPosEmpAllownceTransactionsService.httpPostXtraAndPosEmployeeAllowanceTrxCreateEmployeeAllowanceTrxService({
      body : model
    }).subscribe((value:any)=>{
      let jsonData = JSON.parse(value);
        this.toastr.success(jsonData.Message)
        this.formAllowance.reset();
        this.refreshTable();
    },
    (error: any) => {
      this.toastr.error('Failed to create contract.');
    })}else{
      this.toastr.success("ادخل البيانات المطلوبة")
    }
  }else{
    let model = this.formAllowance.value;
    model.Id = this.currentAllowanceId;
    const empId = this.formReniew.get('employeeId')?.value;
    const branchId = this.formReniew.get('branchId')?.value;
    this.formAllowance.get('employeeId')?.setValue(empId);
    this.formAllowance.get('branchId')?.setValue(branchId);
    this.XtraAndPosEmpAllownceTransactionsService.httpPutXtraAndPosEmployeeAllowanceTrxUpdateEmployeeAllowanceTrxService({
      id: this.currentAllowanceId,
      body: model
    }).subscribe((value: any) => {
      let jsonData = JSON.parse(value);
      this.toastr.success(jsonData.Message);
      this.refreshTable();
      this.isEdit=false;
      this.formAllowance.reset();

    });
  }
}

  showDeleteVacConfirm(vac: any) {
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
      this.empName.nativeElement.value = "";
      });
  }
  deleteVac(contract: any) {
    this.XtraAndPosEmpVacationTransactionsService.httpDeleteXtraAndPosEmployeeVacationsDeleteEmployeeVacationsService({
      id: contract.Id,
    }).subscribe((value: any) => {
      let jsonData = JSON.parse(value);
      this.toastr.clear();
      this.toastr.success(jsonData.Message);
      this.refreshTable();
    }, (error: any) => {
      this.toastr.error('Failed to delete vac.');
    });
  }
  showDeleteAllowanceConfirm(allowance: any) {
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
      this.empName.nativeElement.value = "";
      });
  }
  deleteAllowance(contract: any) {
    this.XtraAndPosEmpAllownceTransactionsService.httpDeleteXtraAndPosEmployeeAllowanceTrxDeleteEmployeeAllowanceTrxService({
      id: contract.Id,
    }).subscribe((value: any) => {
      let jsonData = JSON.parse(value);
      this.toastr.clear();
      this.toastr.success(jsonData.Message);
      this.refreshTable();
    }, (error: any) => {
      this.toastr.error('Failed to delete allowance.');
    });
  }
}

