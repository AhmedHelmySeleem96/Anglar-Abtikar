
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  XtraAndPosCityService, XtraAndPosCountryService } from 'src/app/shared/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.css']
})
export class CreateCityComponent implements OnInit {
  constructor(
    private toastr:ToastrService,
    private XtraAndPOS_City :XtraAndPosCityService
    ,private XtraAndPos_Country :  XtraAndPosCountryService,
    private router: Router,
    private fb:FormBuilder,private route: ActivatedRoute){}
    isEdit:boolean= false ;
     formCity :FormGroup= this.fb.group({cityNameAr: new FormControl('', [Validators.required]),
     cityNameEn: new FormControl(''),
     countryId :new FormControl('', [Validators.required]),
     notes: new FormControl(null),})
    countryData :any[]= [] ;
    cityData:any[]= [] ;
    currentCity :any ;
    ngOnInit(): void {
       this.isEdit = this.route.snapshot.queryParams['edit'] ;
       const queryParams = this.route.root.snapshot.queryParams;
       if(queryParams['cityData']){
      const updatedcityData = JSON.parse(queryParams['cityData']);
      this.currentCity = updatedcityData ;
      if (this.isEdit && updatedcityData) {
        this.formCity.patchValue({
          cityNameAr: updatedcityData.NameAr,
          cityNameEn: updatedcityData.NameEn,
          countryId: updatedcityData.CountryId,
          notes: updatedcityData.Notes

        });   }   }
      this.XtraAndPos_Country.httpGetXtraAndPosCountryGetCountryService().subscribe((value:any)=>{
        let jsonData = JSON.parse(value);
        this.countryData = jsonData.Obj.country;
      });
    }
    goHome(){
      this.router.navigateByUrl('hr/city');
    }
    OnSubmit(Form: FormGroup) {
      if(!this.isEdit){
      if(this.formCity.valid)
      {
      let model = this.formCity.value;
      this.XtraAndPOS_City.httpPostXtraAndPosCityCreateCityService({
        body : model
      }).subscribe((value:any)=>{
        let jsonData = JSON.parse(value);
          this.toastr.success(jsonData.Message)
          this.formCity.reset();
      })}else{
        this.toastr.success("ادخل البيانات المطلوبة")
      }
    }else{
      let model = this.formCity.value;
      model.Id = this.currentCity.Id;
      this.XtraAndPOS_City.httpPutXtraAndPosCityUpdateCityService({
        id: this.currentCity.Id,
        body: model
      }).subscribe((value: any) => {
        let jsonData = JSON.parse(value);
        this.toastr.success(jsonData.Message);
      });
      }
        }

    }




