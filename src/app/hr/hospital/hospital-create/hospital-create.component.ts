import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  XtraAndPosHospitalService } from 'src/app/shared/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hospital-create',
  templateUrl: './hospital-create.component.html',
  styleUrls: ['./hospital-create.component.css']
})
export class HospitalCreateComponent implements OnInit{
  constructor(
    private toastr:ToastrService,
    private router: Router,
    private XtraAndPosHospitalService :  XtraAndPosHospitalService,private fb:FormBuilder,private route: ActivatedRoute){}
    isEdit:boolean= false ;
    formHospital :FormGroup= this.fb.group({hospitalNameAr: new FormControl('', [Validators.required]),
    hospitalNameEn: new FormControl('', [Validators.required]),
    statusId:new FormControl(1),
    notes: new FormControl(null),})
    currenthospital :any ;
    ngOnInit(): void {
       this.isEdit = this.route.snapshot.queryParams['edit'] ;
       const queryParams = this.route.root.snapshot.queryParams;
       if(queryParams['hospitalData']){
      const updatedhospitalData = JSON.parse(queryParams['hospitalData']);
      this.currenthospital = updatedhospitalData ;
      if (this.isEdit && updatedhospitalData) {
        this.formHospital.patchValue({
          hospitalNameAr: updatedhospitalData.NameAr,
          hospitalNameEn: updatedhospitalData.NameEn,
          statusId : updatedhospitalData.StatusId,
          notes: updatedhospitalData.Notes
        });    }  }

    }
    goHome(){
      this.router.navigateByUrl('hr/hospital');
    }
    OnSubmit(Form: FormGroup) {
      if(!this.isEdit){
      if(this.formHospital.valid)
      {
      let model = this.formHospital.value;
      this.XtraAndPosHospitalService.httpPostXtraAndPosHospitalCreateHospitalService({
        body : model
      }).subscribe((value:any)=>{
        let jsonData = JSON.parse(value);
          this.toastr.success(jsonData.Message)
          this.formHospital.reset();
      })}else{
        this.toastr.success("ادخل البيانات المطلوبة")
      }
    }else{
      let model = this.formHospital.value;
      model.Id = this.currenthospital.Id;
      this.XtraAndPosHospitalService.httpPutXtraAndPosHospitalUpdateHospitalService({
        id: this.currenthospital.Id,
        body: model
      }).subscribe((value: any) => {
        let jsonData = JSON.parse(value);
        this.toastr.success(jsonData.Message);
      });
      }
        }
}
