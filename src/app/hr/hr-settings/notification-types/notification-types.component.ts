import { LoansServiceService } from '../../../shared/services/Loans/loans-service.service';
import { Component,ElementRef, OnInit, ViewChild  } from '@angular/core';
import { TranslateModule,TranslateService } from '@ngx-translate/core';
import {  XtraAndPosLookUpsService } from 'src/app/shared/api';
import {FormGroup,FormControl,Validators, FormBuilder} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-notification-types',
  templateUrl: './notification-types.component.html',
  styleUrls: ['./notification-types.component.css'],
  providers: [MessageService]

})
export class NotificationTypesComponent {
  statusData :any[] = [] ;
  constructor(public translate : TranslateService,
    private xtraAndPosLookUpsService :XtraAndPosLookUpsService,
    private LoansServiceService:LoansServiceService,
    private toastr:ToastrService,private fb:FormBuilder,
    private MessageService : MessageService) {}

    
    NotificationData :any[] = [] ;
    StatuesId:any;
    cols :any ;
    deleteId : any ;
    @ViewChild('dt') dt: any;
    FormNotificationTypes :FormGroup= this.fb.group(
      {NotificationNameAr: new FormControl('', [Validators.required,Validators.minLength(3)]),
    NotificationNameEn: new FormControl(''),
    StatuesId: new FormControl(1,[Validators.required]),
    Notes: new FormControl(null),})
    isEdit:boolean= false ;
    @ViewChild('formElement') formElement!: ElementRef;
    currentNotificationId :any ;


  ngOnInit(): void {
    this.xtraAndPosLookUpsService.httpGetXtraAndPosLookUpsGetStatus().subscribe((value:any)=>{
      let jsonData = JSON.parse(value);
      this.statusData = jsonData;
            // console.log(jsonData)


    });


    this.LoansServiceService.GettNotificationService().subscribe((value:any)=>{
      // console.log(value.Obj.NotificationType)
      this.NotificationData = value.Obj.NotificationType;
      // console.log(this.NotificationData)
    });


    this.cols = [
      { field: 'Id', header: 'NotificationId' },
      { field: 'CreatedDate', header: 'CreatedDate' },
      { field: 'NameAr', header: 'NameAr' },
      { field: 'NameEn', header: 'NameEn' },
      { field: 'Notes', header: 'Notes' },
    ];
  }
  // FormNotificationTypes: FormGroup = new FormGroup(
  //   {
  //     NotificationNameAr: new FormControl(null,[Validators.required]),
  //     NotificationNameEn: new FormControl(null),
  //     StatuesId: new FormControl(1,[Validators.required]),
  //     Notes: new FormControl(null)
  //   })
        

//  Submit(FormOperationTypes:FormGroup) 
//   { 
//     console.log(FormOperationTypes.value)  
//     this.LoansServiceService.PostNotificationService(FormOperationTypes.value).subscribe({ 
//       next:(Response)=>{ 
//         console.log(Response.IsSuccess)
//         if(Response.IsSuccess)
//         { 
//           this.toastr.success(Response.Message)
//           console.log(Response.Message)
//           console.log('Success') 
//         }else{ 
//           this.toastr.error(Response.Message)
//           console.log('fail') 
//         } 
//       } 
 
//     }) 
//   }



  Submit(FormNotificationTypes: FormGroup) {

    if(FormNotificationTypes.valid)
    {
      if(!this.isEdit){
        this.LoansServiceService.PostNotificationService(this.FormNotificationTypes.value).subscribe({
          next:(Response)=>{ 
                    // console.log(Response.IsSuccess)
                    if(Response.IsSuccess)
                    { 
                      this.toastr.success(Response.Message)
                      // console.log(Response.Message)
                      // console.log('Success') 
                      this.FormNotificationTypes.reset();
                      this.refreshTable();
                    }else{ 
                      this.toastr.error(Response.Message)
                      // console.log('fail') 
                    } 
                  } 
    
        })
      }else{
        let model = this.FormNotificationTypes.value;
        model.Id = this.currentNotificationId;
        // console.log(this.currentNotificationId, this.FormNotificationTypes.value);
        this.LoansServiceService.PutNotificationService(this.currentNotificationId,this.FormNotificationTypes.value) 
      .subscribe((value: any) => { 
            this.toastr.success(value.Message)
    
        this.refreshTable()
        this.FormNotificationTypes.reset();
        this.isEdit = false;
    
      });
    
        }
    }else
    {
      this.toastr.error("يرجي ادخال البيانات المطلوبه")

    }

  
      }

getNotification(id :any){
  return this.NotificationData.filter((r)=>r.Id===id)[0]
}

  setEdit(Notification: any) {
    // console.log(Notification);
    this.FormNotificationTypes.patchValue({
      NotificationNameAr: Notification.NameAr,
      NotificationNameEn: Notification.NameEn,
      StatuesId:Notification.StatusId,
      Notes: Notification.Notes
    });
    this.isEdit = true;
    this.currentNotificationId = Notification.Id;
  // console.log(this.currentNotificationId,this.isEdit,Notification.StatusId);
    this.focusOnForm();
  }
  focusOnForm() {
    if (this.formElement && this.formElement.nativeElement) {
      this.formElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
      this.formElement.nativeElement.focus();
    }
  }

  refreshTable() {
      this.LoansServiceService.GettNotificationService().subscribe((value:any)=>{
        // console.log(value.Obj.NotificationType)
        this.NotificationData = value.Obj.NotificationType;
        // console.log(this.NotificationData)
    });
  }
  onSearch(searchValue:Event): void {
    
    this.dt.filterGlobal((searchValue.target as HTMLInputElement).value, 'contains');
  }



  showDeleteConfirm(Notification: any) {
    // console.log(Notification,Notification.Id);
    this.deleteId = Notification.Id,
    this.MessageService.add({
      key: 'c',
      sticky: true,
      severity: 'warn',
      summary: this.translate.instant('AreYouSureToDelete') + ' ' + Notification.NameAr + ' ' + this.translate.instant('?'),
      detail: this.translate.instant('Confirmtoproceed'),
    });
  }

  onDeleteReject() {
    this.MessageService.clear('c');
  }

  onDeleteConfirm() {
    this.LoansServiceService.DeleteNotificationService  (this.deleteId) 
    .subscribe((value: any) => { 
        this.deleteId = 0;
        this.MessageService.add({
          severity: 'success',
          detail: value.Message});
        this.refreshTable();
        this.FormNotificationTypes.reset();
        this.MessageService.clear('c')
      }, (error: any) => {
        this.toastr.error('Failed to delete country.');
      });
  }
  
}

