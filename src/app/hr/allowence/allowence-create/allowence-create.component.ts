import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  XtraAndPosAllowanceService,XtraAndPosLookUpsService } from 'src/app/shared/api';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-allowence-create',
  templateUrl: './allowence-create.component.html',
  styleUrls: ['./allowence-create.component.css']
})
export class AllowanceCreateComponent implements OnInit {
  constructor(
    private toastr:ToastrService,
    private router: Router, private XtraAndPosLookUpsService :XtraAndPosLookUpsService,
    private XtraAndPosAllowanceService :  XtraAndPosAllowanceService,private fb:FormBuilder,private route: ActivatedRoute){}
    isEdit:boolean= false ;
    formAllowance :FormGroup= this.fb.group({NameAr: new FormControl('', [Validators.required]),
    NameEn: new FormControl(''),
    StatusId:new FormControl('1'),
    notes: new FormControl(null),})
    currentallowance :any ;
    statusData : any[] = [] ;
    ngOnInit(): void {
      this.XtraAndPosLookUpsService.httpGetXtraAndPosLookUpsGetStatus().subscribe((value:any)=>{
        let jsonData = JSON.parse(value);
        this.statusData = jsonData;
      });
       this.isEdit = this.route.snapshot.queryParams['edit'] ;
       const queryParams = this.route.root.snapshot.queryParams;
       if(queryParams['allowanceData']){
      const updatedallowanceData = JSON.parse(queryParams['allowanceData']);
      this.currentallowance = updatedallowanceData ;
      if (this.isEdit && updatedallowanceData) {
        this.formAllowance.patchValue({
          NameAr: updatedallowanceData.NameAr,
          NameEn: updatedallowanceData.NameEn,
          statusId : updatedallowanceData.StatusId,
          notes: updatedallowanceData.Notes
        });    }  }

    }
    goHome(){
      this.router.navigateByUrl('hr/allowance');
    }
    OnSubmit(Form: FormGroup) {
      if(!this.isEdit){
      if(this.formAllowance.valid)
      {
      let model = this.formAllowance.value;
      this.XtraAndPosAllowanceService.httpPostXtraAndPosAllowanceCreateAllowanceService({
        body : model
      }).subscribe((value:any)=>{
        let jsonData = JSON.parse(value);
          this.toastr.success(jsonData.Message)
          this.formAllowance.reset();
      })}else{
        this.toastr.success("ادخل البيانات المطلوبة")
      }
    }else{
      let model = this.formAllowance.value;
      model.Id = this.currentallowance.Id;
      this.XtraAndPosAllowanceService.httpPutXtraAndPosAllowanceUpdateAllowanceService({
        id: this.currentallowance.Id,
        body: model
      }).subscribe((value: any) => {
        let jsonData = JSON.parse(value);
        this.toastr.success(jsonData.Message);
      });
      }
        }
}
