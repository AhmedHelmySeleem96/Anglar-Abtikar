import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  XtraAndPosHospitalService,XtraAndPosLookUpsService } from 'src/app/shared/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hospital-create',
  templateUrl: './hospital-create.component.html',
  styleUrls: ['./hospital-create.component.css']
})
export class HospitalCreateComponent implements OnInit{
  constructor(
    private toastr:ToastrService,
    private router: Router,  private XtraAndPosLookUpsService :XtraAndPosLookUpsService,
    private XtraAndPosHospitalService :  XtraAndPosHospitalService,private fb:FormBuilder,private route: ActivatedRoute){}
    isEdit:boolean= false ;
    formHospital :FormGroup= this.fb.group({NameAr: new FormControl('', [Validators.required]),
    NameEn: new FormControl(''),
    StatusId:new FormControl('1'),
    notes: new FormControl(null),})
    currenthospital :any ;
    statusData :any[] = [];
    ngOnInit(): void {
      this.XtraAndPosLookUpsService.httpGetXtraAndPosLookUpsGetStatus().subscribe((value:any)=>{
        let jsonData = JSON.parse(value);
        this.statusData = jsonData;
      });
       this.isEdit = this.route.snapshot.queryParams['edit'] ;
       const queryParams = this.route.root.snapshot.queryParams;
       if(queryParams['hospitalData']){
      const updatedhospitalData = JSON.parse(queryParams['hospitalData']);
      this.currenthospital = updatedhospitalData ;
      if (this.isEdit && updatedhospitalData) {
        this.formHospital.patchValue({
          NameAr: updatedhospitalData.NameAr,
          NameEn: updatedhospitalData.NameEn,
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
