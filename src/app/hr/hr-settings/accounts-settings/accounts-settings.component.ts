import { XtraAndPosAccTreeEpService } from './../../../shared/api/services/xtra-and-pos-acc-tree-ep.service';
import { Component } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms'
import { HrSettingsService } from 'src/app/shared/services/HrSettings/hr-settings.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-accounts-settings',
  templateUrl: './accounts-settings.component.html',
  styleUrls: ['./accounts-settings.component.css']
})
export class AccountsSettingsComponent {

  constructor(private fb:FormBuilder,
    private HrSettingsService:HrSettingsService,
    private XtraAndPosAccTreeEpService:XtraAndPosAccTreeEpService,
    private toastr:ToastrService) {
        
  }
  loading: boolean = true;
  AccountsData :any[] = [] ;
  SettingsAccountsData :any;

  cols :any ;
  deleteId : any ;
  FormAccountSettings :FormGroup= this.fb.group({
    EmployeeAccount: new FormControl(null,[Validators.required]),
    LoanAccount: new FormControl(null),
    Salaryaccount: new FormControl(null),
    LiquedationAccount: new FormControl(null),
    DeductionAccount: new FormControl(null),
    RebatesAccount: new FormControl(null),
    OverTimeAccount: new FormControl(null)})
  isEdit:boolean= false ;
  currenSettingId :any ;


  ngOnInit(): void {

    this.loading=true;

    this.XtraAndPosAccTreeEpService.httpGetExtraAndPosAccTreeManagementInfo().subscribe((value:any)=>{
      let jsonData = JSON.parse(value);
      this.AccountsData = jsonData.Obj.accTree;
      this.loading=false;
    });

    this.HrSettingsService.GettAccountSettingsService().subscribe((value:any)=>{
      // console.log(value);
      // let jsonData = JSON.parse(value);
      // this.SettingsAccountsData = jsonData.Obj.AccountSetting      ;
      // console.log(jsonData.Obj.AccountSetting);

      this.SettingsAccountsData = value.Obj.AccountSetting;

      this.FormAccountSettings.patchValue({
        EmployeeAccount:this.SettingsAccountsData[0].EmployeeAccount,
        LoanAccount:this.SettingsAccountsData[0].LoanAccount,
        Salaryaccount:this.SettingsAccountsData[0].Salaryaccount,
        LiquedationAccount: this.SettingsAccountsData[0].LiquedationAccount,

        DeductionAccount: this.SettingsAccountsData[0].DeductionAccount,
        RebatesAccount: this.SettingsAccountsData[0].RebatesAccount,
        OverTimeAccount: this.SettingsAccountsData[0].OverTimeAccount

      });
      console.log(this.FormAccountSettings.get('EmployeeAccount')?.value);
      this.currenSettingId=this.SettingsAccountsData[0].Id
    });
    console.log("finishloading");
  } 

  Submit(_FormAccountSettings:FormGroup)
  {
    debugger;
    console.log(this.SettingsAccountsData.length);

    if(this.SettingsAccountsData.length == 0)
    {

      this.HrSettingsService.PostAccountSettingsService(this.FormAccountSettings.value).subscribe({
        next:(Response)=>{ 
                  if(Response.IsSuccess)
                  { 
                    this.loading=false;
                    this.toastr.success(Response.Message)
                  }else{ 
                    this.toastr.error(Response.Message)
                  } 
                } 
              })
    }else
    {
      this.HrSettingsService.PutAccountSettingsService(this.currenSettingId,this.FormAccountSettings.value) 
      .subscribe((value: any) => { 
        if(value.IsSuccess)
        { 
          this.loading=false;
          this.toastr.success(value.Message)
        }else{ 
          this.toastr.error(value.Message)
        } 
    
      });
    }



  }

}
