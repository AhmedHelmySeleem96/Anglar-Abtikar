
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CityDto, XtraAndPosCityService, XtraAndPosCountryService } from 'src/app/shared/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.css']
})
export class CreateCityComponent {
  constructor(
    private toastr:ToastrService,
    private XtraAndPOS_City :XtraAndPosCityService
    ,private XtraAndPos_Country :  XtraAndPosCountryService,private fb:FormBuilder,private route: ActivatedRoute){}
     Data = [] ;
    isEdit:boolean= false ;
     formCity :FormGroup= this.fb.group({cityNameAr: new FormControl('', [Validators.required]),
     cityNameEn: new FormControl('', [Validators.required]),
     countryId :new FormControl('', [Validators.required]),
     notes: new FormControl(null),})
     selectedCountry: any;
    countryData :any[]= [] ;
    cityData:any[]= [] ;
    currentCity :any ;
    ngOnInit(): void {
       this.isEdit = this.route.snapshot.queryParams['edit'] === 'true';
      const updatedcityData = JSON.parse(this.route.root.snapshot.queryParams['cityData']);
      this.currentCity = updatedcityData ;
      if (this.isEdit && updatedcityData) {
        this.formCity.patchValue({
          cityNameAr: updatedcityData.NameAr,
          cityNameEn: updatedcityData.NameEn,
          countryId: updatedcityData.CountryId,
          notes: updatedcityData.Notes
        });      }
      this.XtraAndPos_Country.httpGetXtraAndPosCountryGetCountryService().subscribe((value:any)=>{
        let jsonData = JSON.parse(value);
        this.countryData = jsonData.Obj.country;
      });
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




