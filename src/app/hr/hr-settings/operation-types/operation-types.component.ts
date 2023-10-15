import { LoansServiceService } from '../../../shared/services/Loans/loans-service.service';
import { TranslateModule,TranslateService } from '@ngx-translate/core';
import { Component,ViewChild ,ElementRef} from '@angular/core';
import {  XtraAndPosLookUpsService } from 'src/app/shared/api';
import {FormGroup,FormControl,ReactiveFormsModule,Validators,FormBuilder} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-operation-types',
  templateUrl: './operation-types.component.html',
  styleUrls: ['./operation-types.component.css'],
  providers: [MessageService]

})
export class OperationTypesComponent {
  statusData :any[] = [] ;
  constructor(public translate : TranslateService,private xtraAndPosLookUpsService :XtraAndPosLookUpsService,
  private  LoansServiceService:LoansServiceService, private toastr:ToastrService,
  private MessageService : MessageService,private fb:FormBuilder ) {
    
  }


  OperationsData :any[] = [] ;
  cols :any ;
  deleteId : any ;
  @ViewChild('dt') dt: any;
  FormOperationTypes :FormGroup= this.fb.group({OperationNameAr: new FormControl('', [Validators.required,Validators.minLength(3)]),
  OperationNameEn: new FormControl(''),
  StatuesId: new FormControl(1, [Validators.required]),
  Notes: new FormControl(null),})
  isEdit:boolean= false ;
  @ViewChild('formElement') formElement!: ElementRef;
  CurrentoperationId :any ;

  


  ngOnInit(): void {
    this.xtraAndPosLookUpsService.httpGetXtraAndPosLookUpsGetStatus().subscribe((value:any)=>{
      let jsonData = JSON.parse(value);
      this.statusData = jsonData;
            // console.log(jsonData)
    });

    this.LoansServiceService.GetOperationService().subscribe((value:any)=>{
      // console.log(value.Obj.OperationTypes)
      this.OperationsData = value.Obj.OperationTypes;
      // console.log(this.OperationsData)
    });

    this.cols = [
      { field: 'Id', header: 'operationId' },
      { field: 'CreatedDate', header: 'CreatedDate' },
      { field: 'NameAr', header: 'NameAr' },
      { field: 'NameEn', header: 'NameEn' },
      { field: 'Notes', header: 'Notes' },
    ];
  } 


  // FormOperationTypes: FormGroup = new FormGroup(
  //   {
  //     OperationNameAr: new FormControl(null,[Validators.required]),
  //     OperationNameEn: new FormControl(null),
  //     StatuesId: new FormControl(1,[Validators.required]),
  //     Notes: new FormControl(null)
  //   })

  // FormOperationTypes: FormGroup = this.fb.group({ 
  //   OperationNameAr: new FormControl(null,[Validators.required]),
  //     OperationNameEn: new FormControl(null),
  //     StatuesId: new FormControl(1,[Validators.required]),
  //     Notes: new FormControl(null)
  // });
        
    getOperation(id :any){
      return this.OperationsData.filter((r)=>r.Id===id)[0]
    }

    setEdit(Operation: any) {
      // console.log(Operation);
      this.FormOperationTypes.patchValue({
        OperationNameAr: Operation.NameAr,
        OperationNameEn: Operation.NameEn,
        StatuesId:Operation.StatusId,
        Notes: Operation.Notes
      });
      this.isEdit = true;
      this.CurrentoperationId = Operation.Id;
    // console.log(this.CurrentoperationId,this.isEdit,Operation.StatusId);
      this.focusOnForm();
    }

    focusOnForm() {
      if (this.formElement && this.formElement.nativeElement) {
        this.formElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
        this.formElement.nativeElement.focus();
      }
    }
//  Submit(FormOperationTypes:FormGroup) 
//   { 
//     console.log(FormOperationTypes.value)  
//     this.LoansServiceService.PostOperationService(FormOperationTypes.value).subscribe({ 
//       next:(Response)=>{ 
//         console.log(Response.IsSuccess)
//         if(Response.IsSuccess)
//         { 
//           this.toastr.success(Response.Message)
//           console.log('Success') 
//         }else{ 
//           this.toastr.error(Response.Message)
//           console.log('fail') 
//         } 
//       } 
 
//     }) 
//   }


  Submit(FormOperationTypes: FormGroup) {
    if  (FormOperationTypes.valid)
    {
    if(!this.isEdit){
    this.LoansServiceService.PostOperationService(this.FormOperationTypes.value).subscribe({
      next:(Response)=>{ 
                // console.log(Response.IsSuccess)
                if(Response.IsSuccess)
                { 
                  this.toastr.success(Response.Message)
                  // console.log(Response.Message)
                  // console.log('Success') 
                  this.FormOperationTypes.reset();
                  this.refreshTable();
                }else{ 
                  this.toastr.error(Response.Message)
                  // console.log('fail') 
                } 
              } 

    })
  }else{
    let model = this.FormOperationTypes.value;
    model.Id = this.CurrentoperationId;
    console.log(this.CurrentoperationId, this.FormOperationTypes.value);
    this.LoansServiceService.PutoperationService(this.CurrentoperationId,this.FormOperationTypes.value) 
  .subscribe((value: any) => { 
        this.toastr.success(value.Message)

    this.refreshTable()
    this.FormOperationTypes.reset();
    this.isEdit = false;

  });
}

    }else
    {
      this.toastr.error("يرجي ادخال البيانات ")
    }
  
      }





  refreshTable() {
    this.LoansServiceService.GetOperationService().subscribe((value:any)=>{
      // console.log(value.Obj.OperationTypes)
      this.OperationsData = value.Obj.OperationTypes;
      // console.log(this.OperationsData)
  });
}

  onDeleteReject() {
    this.MessageService.clear('c');
  }

  onDeleteConfirm() 
  {
    this.LoansServiceService.DeleteOperationService(this.deleteId) 
    .subscribe((value: any) => { 
        this.deleteId = 0;
        this.MessageService.add({
          severity: 'success',
          detail: value.Message});
        this.refreshTable();
        this.FormOperationTypes.reset();
        this.MessageService.clear('c')
      }, (error: any) => {
        this.toastr.error('Failed to delete country.');
      });
  }

  
  showDeleteConfirm(Operation: any) {
    this.deleteId = Operation.Id,
    this.MessageService.add({
      key: 'c',
      sticky: true,
      severity: 'warn',
      summary: this.translate.instant('AreYouSureToDelete') + ' ' + Operation.NameAr + ' ' + this.translate.instant('?'),
      detail: this.translate.instant('Confirmtoproceed'),
    });
  }
  
}
