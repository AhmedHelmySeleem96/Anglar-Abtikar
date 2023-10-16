import { Component,ViewChild,ElementRef} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CurrencyEpService}from 'src/app/shared/api';
import {FormGroup,FormControl,ReactiveFormsModule,Validators,FormBuilder} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { LoansServiceService } from '../../../shared/services/Loans/loans-service.service';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {DatePipe} from '@angular/common'

@Component({
  selector: 'app-loans-create',
  templateUrl: './loans-create.component.html',
  styleUrls: ['./loans-create.component.css'],
  providers: [MessageService,DatePipe]

})
export class LoansCreateComponent {
   Defaultdate= new Date().getDate().toString;
   isVisible: boolean = true;

   
  constructor(public translate : TranslateService,
    private currencyEpService:CurrencyEpService, private toastr:ToastrService,
    private  LoansServiceService:LoansServiceService, private fb:FormBuilder,
    private MessageService : MessageService,
    private datePipe:DatePipe) {

  }

  toggleVisibility() { 
    debugger;
    if(this.isVisible)
    {
      this.isVisible = !this.isVisible; 
    }
    // else
    // {
    //   this.isVisible = true; 
    // }
  }

   send_date=new Date(); 
   formattedDate : any;
   
  currencyData :any [] = [] ;



  LoanData :any[] = [] ;
    cols :any ;
    deleteId : any ;
    @ViewChild('dt') dt: any;
    FormLoans :FormGroup= this.fb.group(
      {branchId: new FormControl(1),
        currencyId: new FormControl(1),
        debtId: new FormControl(1),
        debts: new FormControl(0),
        employeeId: new FormControl(1),
        endInstallment : new FormControl(this.Defaultdate,[Validators.required]),
        installmentCount : new FormControl(null,[Validators.required]),
        installmentValue : new FormControl(null),
        jobId : new FormControl(1),
       lastInstallmentValue : new FormControl(null),
        notes : new FormControl(null),
        startInstallment : new FormControl(null,[Validators.required]),
        totaloan : new FormControl(null,[Validators.required]),
      })

      FormLoans2 :FormGroup= new FormGroup(  {
        branchId: new FormControl(1),
          currencyId: new FormControl(1),
          debtId: new FormControl(1),
          debts: new FormControl(0),
          employeeId: new FormControl(1),
          endInstallment : new FormControl(this.Defaultdate,[Validators.required]),
          installmentCount : new FormControl(null,[Validators.required]),
          installmentValue : new FormControl(null),
          jobId : new FormControl(1),
         lastInstallmentValue : new FormControl(null),
          notes : new FormControl(null),
          startInstallment : new FormControl(null,[Validators.required]),
          totaloan : new FormControl(null,[Validators.required]),
        })

    isEdit:boolean= false ;
    @ViewChild('formElement') formElement!: ElementRef;
    currentLoanId :any ;



  ngOnInit(): void {
    this.currencyEpService.httpGetCurrencyGetAll().subscribe((value:any)=>{
      let jsonData = JSON.parse(value);
      this.currencyData = jsonData.Obj.Currencies;
      console.log(this.currencyData);

      
    if (this.currencyData){
      let defaultCur =  this.currencyData.filter(r=>r.IsDefault ==true );
      if(defaultCur){
        this.FormLoans.get('currencyId')?.setValue(defaultCur.map(r=>r.Id))
        this.FormLoans2.get('currencyId')?.setValue(defaultCur.map(r=>r.Id))

      }
    };
    });



    this.cols = [
      { field: 'Id', header: 'loanId' },
      { field: 'EmployeeId', header: 'employeeId' },
      { field: 'NameAr', header: 'ُemplyeename' },
      { field: 'Totaloan', header: 'loanvalue' },
      { field: 'Debts', header: 'Debts' },
      { field: 'CurrencyId', header: 'currency' },
    ];


    this.LoansServiceService.GettLoan().subscribe((value:any)=>{
      console.log(value.Obj.Loans)
      this.LoanData = value.Obj.Loans;
      console.log(this.LoanData)
    });

  }
    

    Submit(FormLoans:FormGroup) 
    { 
debugger;
        if(!this.isEdit){
          this.LoansServiceService.PostLoan(FormLoans.value).subscribe({
            next:(Response)=>{ 
                      console.log(Response.IsSuccess)
                      if(Response.IsSuccess)
                      { 
                        this.toastr.success(Response.Message)
                        console.log(Response.Message)
                        console.log('Success') 
                        this.FormLoans.reset();
                        this.refreshTable();
                      }else{ 
                        this.toastr.error(Response.Message)
                        console.log('fail') 
                      } 
                    } 
      
          })
        }else{
          let model = this.FormLoans.value;
          model.Id = this.FormLoans;
          console.log(this.FormLoans, this.FormLoans.value);
          this.LoansServiceService.PuttLoan(this.currentLoanId,this.FormLoans.value) 
        .subscribe((value: any) => { 
              this.toastr.success(value.Message)
      
          this.refreshTable()
          this.FormLoans.reset();
          this.isEdit = false;
      
        });
      
          }
      
      
    }

    Submit2(FormLoans2:FormGroup) 
    { 
debugger;
        if(!this.isEdit){
          this.LoansServiceService.PostLoan(FormLoans2.value).subscribe({
            next:(Response)=>{ 
                      console.log(Response.IsSuccess)
                      if(Response.IsSuccess)
                      { 
                        this.toastr.success(Response.Message)
                        console.log(Response.Message)
                        console.log('Success') 
                        this.FormLoans.reset();
                        this.refreshTable();

                      }else{ 
                        this.toastr.error(Response.Message)
                        console.log('fail') 
                      } 
                    } 
      
          })
        }else{
          console.log(this.FormLoans2.value);
          console.log(this.currentLoanId,this.FormLoans2.value);
          this.LoansServiceService.PuttLoan(this.currentLoanId,this.FormLoans2.value) 
        .subscribe((value: any) => {
          console.log(value.Message); 
              this.toastr.success(value.Message)
              this.isVisible=false;
              this.toggleVisibility();
          this.refreshTable()
          this.FormLoans2.reset();
          this.isEdit = false;
      
        });
      
          }
      
      
    }

    onSearch(searchValue:Event): void {
    
      this.dt.filterGlobal((searchValue.target as HTMLInputElement).value, 'contains');
    }
  
    getLoan(id :any){
      return this.LoanData.filter((r)=>r.Id===id)[0]
    }

    onInputChange(event: any) {
      debugger;
      // const newValue = event.target.value; 
      const newValue =  this.FormLoans.get('installmentCount')?.value; 
      let totaloan=this.FormLoans.get('totaloan')?.value;
      let startdate=this.FormLoans.get('startInstallment')?.value;
      let debtscounr=this.FormLoans.get('installmentCount')?.value;
      // console.log(totaloan,startdate,debtscounr);
    if(totaloan!= null && startdate != null && debtscounr != null)
      {
        console.log(this.FormLoans.get('startInstallment')?.value);
      const startInstallmentControl=this.FormLoans.get('startInstallment')?.value; 
      this.send_date=new Date(startInstallmentControl);
      const Debtcount = newValue 
      const intValue = Number(Debtcount);
      console.log(Debtcount);
      
      if (!isNaN(Debtcount)) { 
        const intValue = Number(Debtcount); 
 
       this.send_date.setMonth(this.send_date.getMonth() + intValue); 
       this.formattedDate = this.send_date.toISOString().slice(0, 10); 
      } 
      else 
      { 
        console.error('Debtcount is not a valid number.'); 
      }
        this.FormLoans.get('installmentValue')?.setValue(totaloan/newValue);
        this.FormLoans.get('lastInstallmentValue')?.setValue(totaloan/newValue);
        this.FormLoans.get('endInstallment')?.setValue(this.formattedDate);
      }


      const newValue2 =  this.FormLoans2.get('installmentCount')?.value; 
      let totaloan2=this.FormLoans2.get('totaloan')?.value;
      let startdate2=this.FormLoans2.get('startInstallment')?.value;
      let debtscounr2=this.FormLoans2.get('installmentCount')?.value;
      // console.log(totaloan2,startdate2,debtscounr2);
    if(totaloan2!= null && startdate2 != null && debtscounr2 != null)
      {
        // console.log(this.FormLoans2.get('startInstallment')?.value);
      const startInstallmentControl=this.FormLoans2.get('startInstallment')?.value; 
      this.send_date=new Date(startInstallmentControl);
      const Debtcount = newValue2 
      const intValue = Number(Debtcount);
      console.log(Debtcount);
      
      if (!isNaN(Debtcount)) { 
        const intValue = Number(Debtcount); 
 
       this.send_date.setMonth(this.send_date.getMonth() + intValue); 
       this.formattedDate = this.send_date.toISOString().slice(0, 10); 
      } 
      else 
      { 
        console.error('Debtcount is not a valid number.'); 
      }
        this.FormLoans2.get('installmentValue')?.setValue(totaloan2/newValue2);
        this.FormLoans2.get('lastInstallmentValue')?.setValue(totaloan2/newValue2);
        this.FormLoans2.get('endInstallment')?.setValue(this.formattedDate);
      }
    }

    setEdit(loan: any) {
      this.toggleVisibility();
      console.log(loan);
      this.FormLoans2.patchValue({

       
        currencyId: loan.CurrencyId,
        debtId: loan.DebtId,
        debts:loan.Debts,
        employeeId: loan.EmployeeId,
        jobId : loan.JobId,
        notes : loan.Notes,
        branchId:loan.BranchId,
        startInstallment: this.datePipe.transform(loan.StartInstallment, 'yyyy-MM-dd'),
        endInstallment: this.datePipe.transform(loan.EndInstallment, 'yyyy-MM-dd'),
        installmentCount: loan.InstallmentCount,
        installmentValue: loan.InstallmentValue,
        lastInstallmentValue: loan.LastInstallmentValue,
        totaloan:loan.Totaloan
      });

      this.isEdit = true;
      this.currentLoanId = loan.Id;
    console.log(this.currentLoanId,this.isEdit);
      // this.focusOnForm();
    }

    showDeleteConfirm(loan: any) {
      console.log(loan);
      this.deleteId = loan.Id,
      console.log(this.deleteId);
      this.MessageService.add({
        key: 'c',
        sticky: true,
        severity: 'warn',
        summary: this.translate.instant('AreYouSureToDelete') + ' ' + loan.NameAr + ' ' + this.translate.instant('?'),
        detail: this.translate.instant('Confirmtoproceed'),
      });
    }

    onDeleteConfirm() {
      this.LoansServiceService.DeleteLoanService  (this.deleteId) 
      .subscribe((value: any) => { 
          this.deleteId = 0;
          this.MessageService.add({
            severity: 'success',
            detail: value.Message});
          this.refreshTable();
          this.FormLoans.reset();
          this.MessageService.clear('c')
        }, (error: any) => {
          this.toastr.error('Failed to delete loan.');
        });
    }

    onDeleteReject() {
      this.MessageService.clear('c');
    }

    refreshTable() {
      this.LoansServiceService.GettLoan().subscribe((value:any)=>{
        console.log(value.Obj.Loans)
        this.LoanData = value.Obj.Loans;
        console.log(this.LoanData)
      });
}
}