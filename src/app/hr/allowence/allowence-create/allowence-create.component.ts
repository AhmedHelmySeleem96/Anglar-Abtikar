import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  XtraAndPosAllowenceService,XtraAndPosLookUpsService } from 'src/app/shared/api';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-allowence-create',
  templateUrl: './allowence-create.component.html',
  styleUrls: ['./allowence-create.component.css']
})
export class AllowenceCreateComponent implements OnInit {
  constructor(
    private toastr:ToastrService,
    private router: Router, private XtraAndPosLookUpsService :XtraAndPosLookUpsService,
    private XtraAndPosAllowenceService :  XtraAndPosAllowenceService,private fb:FormBuilder,private route: ActivatedRoute){}
    isEdit:boolean= false ;
    formAllowence :FormGroup= this.fb.group({NameAr: new FormControl('', [Validators.required]),
    NameEn: new FormControl(''),
    StatusId:new FormControl('1'),
    notes: new FormControl(null),})
    currentallowence :any ;
    statusData : any[] = [] ;
    ngOnInit(): void {
      this.XtraAndPosLookUpsService.httpGetXtraAndPosLookUpsGetStatus().subscribe((value:any)=>{
        let jsonData = JSON.parse(value);
        this.statusData = jsonData;
      });
       this.isEdit = this.route.snapshot.queryParams['edit'] ;
       const queryParams = this.route.root.snapshot.queryParams;
       if(queryParams['allowenceData']){
      const updatedallowenceData = JSON.parse(queryParams['allowenceData']);
      this.currentallowence = updatedallowenceData ;
      if (this.isEdit && updatedallowenceData) {
        this.formAllowence.patchValue({
          NameAr: updatedallowenceData.NameAr,
          NameEn: updatedallowenceData.NameEn,
          statusId : updatedallowenceData.StatusId,
          notes: updatedallowenceData.Notes
        });    }  }

    }
    goHome(){
      this.router.navigateByUrl('hr/allowence');
    }
    OnSubmit(Form: FormGroup) {
      if(!this.isEdit){
      if(this.formAllowence.valid)
      {
      let model = this.formAllowence.value;
      this.XtraAndPosAllowenceService.httpPostXtraAndPosAllowenceCreateAllowenceService({
        body : model
      }).subscribe((value:any)=>{
        let jsonData = JSON.parse(value);
          this.toastr.success(jsonData.Message)
          this.formAllowence.reset();
      })}else{
        this.toastr.success("ادخل البيانات المطلوبة")
      }
    }else{
      let model = this.formAllowence.value;
      model.Id = this.currentallowence.Id;
      this.XtraAndPosAllowenceService.httpPutXtraAndPosAllowenceUpdateAllowenceService({
        id: this.currentallowence.Id,
        body: model
      }).subscribe((value: any) => {
        let jsonData = JSON.parse(value);
        this.toastr.success(jsonData.Message);
      });
      }
        }
}
