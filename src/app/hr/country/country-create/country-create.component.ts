import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  XtraAndPosCountryService } from 'src/app/shared/api';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-country-create',
  templateUrl: './country-create.component.html',
  styleUrls: ['./country-create.component.css']
})
export class CountryCreateComponent implements OnInit {
  constructor(
    private toastr:ToastrService,
    private router: Router,
    private XtraAndPos_Country :  XtraAndPosCountryService,private fb:FormBuilder,private route: ActivatedRoute){}

    isEdit:boolean= false ;
    formCountry :FormGroup= this.fb.group({countryNameAr: new FormControl('', [Validators.required]),
    countryNameEn: new FormControl('', [Validators.required]),
    notes: new FormControl(null),})
    currentcountry :any ;
    ngOnInit(): void {
       this.isEdit = this.route.snapshot.queryParams['edit'] ;
       const queryParams = this.route.root.snapshot.queryParams;
       if(queryParams['countryData']){
      const updatedcountryData = JSON.parse(queryParams['countryData']);
      this.currentcountry = updatedcountryData ;
      if (this.isEdit && updatedcountryData) {
        this.formCountry.patchValue({
          countryNameAr: updatedcountryData.NameAr,
          countryNameEn: updatedcountryData.NameEn,
          notes: updatedcountryData.Notes
        });    }  }

    }
    goHome(){
      this.router.navigateByUrl('hr/country');
    }
    OnSubmit(Form: FormGroup) {
      if(!this.isEdit){
      if(this.formCountry.valid)
      {
      let model = this.formCountry.value;
      this.XtraAndPos_Country.httpPostXtraAndPosCountryCreateCountryService({
        body : model
      }).subscribe((value:any)=>{
        let jsonData = JSON.parse(value);
          this.toastr.success(jsonData.Message)
          this.formCountry.reset();
      })}else{
        this.toastr.success("ادخل البيانات المطلوبة")
      }
    }else{
      let model = this.formCountry.value;
      model.Id = this.currentcountry.Id;
      this.XtraAndPos_Country.httpPutXtraAndPosCountryUpdateCountryService({
        id: this.currentcountry.Id,
        body: model
      }).subscribe((value: any) => {
        let jsonData = JSON.parse(value);
        this.toastr.success(jsonData.Message);
      });
      }
        }
}
