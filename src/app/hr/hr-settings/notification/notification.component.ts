import { HrSettingsService } from 'src/app/shared/services/HrSettings/hr-settings.service';
import { Component,ViewChild,ElementRef } from '@angular/core';
import { LoansServiceService } from '../../../shared/services/Loans/loans-service.service';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  providers: [MessageService]

})
export class NotificationComponent {
  NotificationTypes :any[] = [] ;
  NotificationsData :any[] = [] ;
  GettNotificationTypesLookupsService:any[] = [] ;
  cols :any ;


  StatuesId:any;
  deleteId : any ;
  @ViewChild('dt') dt: any;

  FormNotifications :FormGroup= this.fb.group( {
    NotificationId: new FormControl(0,[Validators.required,Validators.min(1)]),
    Notificationtype: new FormControl(0),
    Value: new FormControl(''),
    ScreenId: new FormControl(0),
    FieldsScreenId: new FormControl(0),})

  isEdit:boolean= false ;
  @ViewChild('formElement') formElement!: ElementRef;
  currentNotificationId :any ;

  constructor(private LoansServiceService:LoansServiceService,
              private HrSettingsService:HrSettingsService,
              private fb:FormBuilder,
              private toastr:ToastrService, private MessageService: MessageService    ,
              public translate : TranslateService  
                      ) {}
  ngOnInit(): void {
    this.LoansServiceService.GettNotificationService().subscribe((value:any)=>{
      console.log(value.Obj.NotificationType)
      this.NotificationTypes = value.Obj.NotificationType;
    });

    this.HrSettingsService.GettNotificationService().subscribe((value:any)=>{
      console.log(value.Obj.Notification);
      this.NotificationsData = value.Obj.Notification;
    });

    this.HrSettingsService.GettNotificationTypesLookupsService().subscribe((value:any)=>{
      
      console.log("aaa",value);
      this.GettNotificationTypesLookupsService = value;
    });

    
    this.cols = [
      { field: 'NotificationId', header: 'Hr.NotificationNameAr' },
      { field: 'Notificationtype', header: 'Hr.NotificationType' },
      { field: 'Value', header: 'Hr.Count' },
      { field: 'ScreenId', header: 'Hr.Screens' },
      { field: 'FieldsScreenId', header: 'Hr.ScreenFields' },
    ];
  }

  getNotification(id :any){
    return this.NotificationTypes.filter((r)=>r.Id===id)[0]
  }

  Submit(FormNotifications: FormGroup) {

    console.log(FormNotifications.value);
    if(FormNotifications.valid)
    {
      if(!this.isEdit){
        this.HrSettingsService.PostNotificationService(this.FormNotifications.value).subscribe({
          next:(Response)=>{ 
                    // console.log(Response.IsSuccess)
                    if(Response.IsSuccess)
                    { 
                      
                    console.log(Response)
                      this.toastr.success(Response.Message)

                      // this.FormNotificationTypes.reset();
                      // this.refreshTable();
                    }else{ 
                      this.toastr.error(Response.Message)
                    } 
                  } 
    
        })
      }else{
        let model = this.FormNotifications.value;
        model.Id = this.currentNotificationId;
        this.HrSettingsService.PutNotificationService(this.currentNotificationId,this.FormNotifications.value) 
      .subscribe((value: any) => { 
            this.toastr.success(value.Message)
           this.refreshTable()
          this.FormNotifications.reset();
           this.isEdit = false;
    
      });
    
        }
    }else
    {
      this.toastr.error("يرجي ادخال البيانات المطلوبه")

    }

  
    }

    setEdit(Notification: any) {
      // console.log(Notification);
      this.FormNotifications.patchValue({
        NotificationId: Notification.NotificationId,
        Notificationtype: Notification.Notificationtype,
        Value:Notification.Value,
        ScreenId: Notification.ScreenId,
        FieldsScreenId: Notification.FieldsScreenId

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
  getNotificationName(id :any){
    debugger;
    return this.NotificationTypes.filter((r)=>r.Id===id)[0]
  }
  getNotificationType(id :any){
    debugger;
    return this.GettNotificationTypesLookupsService.filter((r)=>r.id===id)[0]
  }

  onSearch(searchValue:Event): void {
    
    this.dt.filterGlobal((searchValue.target as HTMLInputElement).value, 'contains');
  }



  showDeleteConfirm(Notification: any) {
    console.log(Notification,Notification.Id);
    this.deleteId = Notification.Id,
    this.MessageService.add({
      key: 'c',
      sticky: true,
      severity: 'warn',
      summary: this.translate.instant('AreYouSureToDelete') + ' ' + "تنبيه رقم "+Notification.Id + ' ' + this.translate.instant('?'),
      detail: this.translate.instant('Confirmtoproceed'),
    });
  }

  onDeleteReject() {
    this.MessageService.clear('c');
  }

  onDeleteConfirm() {
    this.HrSettingsService.DeleteNotification(this.deleteId) 
    .subscribe((value: any) => { 
        this.deleteId = 0;
        this.MessageService.add({
          severity: 'success',
          detail: value.Message});
        this.refreshTable();
        this.FormNotifications.reset();
        this.MessageService.clear('c')
      }, (error: any) => {
        this.toastr.error('Failed to delete Notification.');
      });
  }

  refreshTable() {
    this.HrSettingsService.GettNotificationService().subscribe((value:any)=>{
      console.log(value.Obj.Notification);
      this.NotificationsData = value.Obj.Notification;
    });
    
    
}
  
}


