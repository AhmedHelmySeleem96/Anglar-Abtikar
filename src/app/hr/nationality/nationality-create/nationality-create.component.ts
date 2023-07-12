import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { XtraAndPosNationalityService } from 'src/app/shared/api';



@Component({
  selector: 'app-nationality-create',
  templateUrl: './nationality-create.component.html',
  styleUrls: ['./nationality-create.component.css']
})
export class NationalityCreateComponent implements OnInit  {
  constructor(
    private toastr:ToastrService,
    private router: Router,
    private XtraAndPosNationalityService :  XtraAndPosNationalityService,private fb:FormBuilder,private route: ActivatedRoute){}
    isEdit:boolean= false ;
    formNationality :FormGroup= this.fb.group({nationalityNameAr: new FormControl('', [Validators.required]),
    nationalityNameEn: new FormControl('', [Validators.required]),
    notes: new FormControl(null),})
    currentNationality :any ;
    ngOnInit(): void {
      this.isEdit = this.route.snapshot.queryParams['edit'] ;
      const queryParams = this.route.root.snapshot.queryParams;
      if(queryParams['NationalityData']){
     const updatedNationalityData = JSON.parse(queryParams['NationalityData']);
     this.currentNationality = updatedNationalityData ;
     if (this.isEdit && updatedNationalityData) {
       this.formNationality.patchValue({
         nationalityNameAr: updatedNationalityData.NameAr,
         nationalityNameEn: updatedNationalityData.NameEn,
         notes: updatedNationalityData.Notes
       });    }  }

   }
   goHome(){
    this.router.navigateByUrl('hr/nationality');
  }
   OnSubmit(Form: FormGroup) {
    if(!this.isEdit){
    if(this.formNationality.valid)
    {
    let model = this.formNationality.value;
    this.XtraAndPosNationalityService.httpPostXtraAndPosNationalityCreateNationalityService({
      body : model
    }).subscribe((value:any)=>{
      let jsonData = JSON.parse(value);
        this.toastr.success(jsonData.Message)
        this.formNationality.reset();
    })}else{
      this.toastr.success("ادخل البيانات المطلوبة")
    }
  }else{
    let model = this.formNationality.value;
    model.Id = this.currentNationality.Id;
    this.XtraAndPosNationalityService.httpPutXtraAndPosNationalityUpdateNationalityService({
      id : this.currentNationality.Id,
      body: model
    }).subscribe((value: any) => {
      let jsonData = JSON.parse(value);
      this.toastr.success(jsonData.Message);
    });
    }
      }
}
