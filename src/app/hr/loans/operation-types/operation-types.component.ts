import { TranslateModule,TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import {  XtraAndPosLookUpsService } from 'src/app/shared/api';

@Component({
  selector: 'app-operation-types',
  templateUrl: './operation-types.component.html',
  styleUrls: ['./operation-types.component.css']
})
export class OperationTypesComponent {
  statusData :any[] = [] ;
  constructor(public translate : TranslateService,private XtraAndPosLookUpsService :XtraAndPosLookUpsService) {
    
  }

  ngOnInit(): void {
    this.XtraAndPosLookUpsService.httpGetXtraAndPosLookUpsGetStatus().subscribe((value:any)=>{
      let jsonData = JSON.parse(value);
      this.statusData = jsonData;
            console.log(jsonData)

    });
 

  } 

}

