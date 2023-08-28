import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { ExportData } from 'src/app/services/Export-data.service';
import { XtraAndPosLookUpsService,XtraAndPosBranchEpService, XtraAndPosEmployeeContractService, XtraAndPosNationalityService, XtraAndPosSpecializationsService, XtraAndPosJobDifinitionService, XtraAndPosJobNameService, CurrencyEpService, RoleGroupEpService, ApplicationUser, XtraAndPosOrgStructuresService, ExtraAndPosBankEpService, EmployeeContractDto, XtraAndPosWorkCardService, XtraAndPosAllowenceService } from 'src/app/shared/api';


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
    ,private XtraAndPosJobNameService : XtraAndPosJobNameService
    ,private XtraAndPosJobDifinitionService :XtraAndPosJobDifinitionService,private XtraAndPosWorkCardService: XtraAndPosWorkCardService
    ,private XtraAndPosAllowenceService : XtraAndPosAllowenceService
    ,private fb:FormBuilder,
    private XtraAndPosEmployeeContractService: XtraAndPosEmployeeContractService,
    ){this.formContract = this.createForm();}
    formContract : FormGroup;
    currencyData :any [] = [] ;
    statusData : any[] = [];
    branchData : any[] = [] ;
    currentContractId: any  ;
    workCardData :any[]  = [] ;
    allowenceTypeData :any[]  = [] ;
    allowenceValueTypeData :any[]  = [] ;

cols : any  ;
isEdit:boolean= false ;
periodReadOnly =false ;
@ViewChild('dt') dt: any;
@ViewChild('formElement') formElement!: ElementRef;
ContractData :any[] = [] ;
allowenceData  :any[] = [] ;
createForm(): FormGroup {
     return this.fb.group({
      branchId: new FormControl(null,Validators.required),
      employeeId: new FormControl(null,Validators.required),
      jobId: new FormControl(null,Validators.required),
      divisionId: new FormControl(null,Validators.required),
      contractNo: new FormControl(null,Validators.required),
      contractStartDate: new FormControl(null,Validators.required),
      contractPeriod: new FormControl(null,Validators.required),
      contractEndDate: new FormControl(null,Validators.required),
      basicSalary: new FormControl(null,Validators.required),
      currencyId: new FormControl(null,Validators.required),
      workCardId: new FormControl(null,Validators.required),
      allowenceName: new FormControl(null,Validators.required),
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
    { field: 'NationalityId', header: 'NationalityId' },
    { field: 'JobId', header: 'JobId' },
    { field: 'JobName', header: 'JobName' },
    { field: 'StatusId', header: 'StatusId' },
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
    contractstartDate: contract.ContractstartDate,
    contractPeriod: contract.ContractPeriod,
    contractEndDate: contract.ContractEndDate,
    basicSalary: contract.BasicSalary,
    currencyId: contract.CurrencyId,
    workCardId: contract.WorkCardId,
    allowenceName: contract.AllowenceName,
    allowenceType: contract.AllowenceType,
    allowenceValueType: contract.AllowenceValueType,
    allowenceValue: contract.AllowenceValue,
  });
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
  this.XtraAndPosAllowenceService.httpGetXtraAndPosAllowenceGetAllowenceService().subscribe((value: any) => {
    let jsonworkCardData = JSON.parse(value);
    this.allowenceData = jsonworkCardData.Obj.allowence;
    console.log(this.allowenceData)
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
    console.log(jsonData)
    this.currencyData = jsonData.Obj.Currencies;
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
  debugger
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
}
