import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {   OrgStructLevelCreateDto, XtraAndPosBranchEpService, XtraAndPosOrgStructLevelsService } from 'src/app/shared/api';
import { ActivatedRoute, Router } from '@angular/router';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-orgstructlevel-create',
  templateUrl: './orgstructlevel-create.component.html',
  styleUrls: ['./orgstructlevel-create.component.css']
})
export class OrgstructlevelCreateComponent  implements OnInit {
  constructor(
    private toastr:ToastrService,
    private orgStructLevelsService: XtraAndPosOrgStructLevelsService,private XtraAndPosBranchEpService : XtraAndPosBranchEpService,
    private fb:FormBuilder,private router: Router,private route: ActivatedRoute){}
    formorgStruct :FormGroup= this.fb.group({levelNameAr: new FormControl('', [Validators.required]),
    levelNameEn: new FormControl('', [Validators.required]),
    parentId :new FormControl(0),
    branchId :new FormControl('', [Validators.required]),
  })
    orgStructData :any[]= [] ;
    parentDropDown : any[] = [] ;
    cols :any ;
    isEdit : boolean = false;
    currentLevelId : any ;

    selectedNode: TreeNode | null = null;
    @ViewChild('formElement') formElement!: ElementRef;
@ViewChild('dt') dt: any;
treeData: TreeNode[] = [];
BranchData : any[] = [] ;

recursiveTemplate!: TemplateRef<any>;

    ngOnInit(): void {
      this.refreshTable();
      this.cols = [
        { field: 'NameAr', header: 'Hr.OrgStructNameAr' },
        { field: 'NameEn', header: 'Hr.OrgStructNameEn' },
        { field: 'BranchId', header: 'Hr.BranchId' },
        { field: 'ParentId', header: 'Hr.SelectParent' },
      ];
      this.XtraAndPosBranchEpService.httpGetBranchGetAllForDropDown().subscribe((value:any)=>{
        let jsonData = JSON.parse(value);
        this.BranchData = jsonData ;
      })
    }

    OnSubmit(Form: FormGroup) {
      if(!this.isEdit){
      if(this.formorgStruct.valid)
      {
      let model : OrgStructLevelCreateDto = this.formorgStruct.value;
      this.orgStructLevelsService.httpPostXtraAndPosOrgStructLevelsCreateOrgStructLevelService({
        body : model
      }).subscribe((value:any)=>{
        let jsonData = JSON.parse(value);
          this.toastr.success(jsonData.Message);
          this.refreshTable();
          if(jsonData.IsSuccess===true){
            this.formorgStruct.reset();
            this.formorgStruct.get('parentId')?.setValue('0');
          }
      })}else{
        this.toastr.success("ادخل البيانات المطلوبة")
      }
    }else{
      if(this.formorgStruct.valid)
      {
        let model : OrgStructLevelCreateDto = this.formorgStruct.value;
        this.orgStructLevelsService.httpPutXtraAndPosOrgStructLevelsUpdateOrgStructLevelService({
          id : this.currentLevelId,
          body : model
        }).subscribe((value:any)=>{
          let jsonData = JSON.parse(value);
            this.toastr.success(jsonData.Message);
            if(jsonData.IsSuccess===true){
              this.formorgStruct.reset();
            this.formorgStruct.get('parentId')?.setValue('0');

            }
            this.refreshTable();
            this.isEdit = false;
            this.currentLevelId = '';
        })
      }
    }
        }
        getBranch(id :any){
          return this.BranchData.filter((r)=>r.Id===id)[0]
        }

        setEdit(level: any) {
          this.formorgStruct.patchValue({
            levelNameAr: level.NameAr,
            levelNameEn: level.NameEn,
            parentId: level.ParentId
          });
          this.isEdit = true;
          this.currentLevelId = level.Id;
          this.focusOnForm();
        }
        focusOnForm() {
          if (this.formElement && this.formElement.nativeElement) {
            this.formElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
            this.formElement.nativeElement.focus();
          }
        }
        onSearch(searchValue:Event): void {
          this.dt.filterGlobal((searchValue.target as HTMLInputElement).value, 'contains');
        }
        showDeleteConfirm(Level: any) {
          this.toastr
            .info('Do you want to delete this Level?', 'Confirmation', {
              timeOut: 0,
              extendedTimeOut: 0,
              closeButton: true,
              positionClass: 'toast-top-center',
              tapToDismiss: false,
            })
            .onTap.subscribe(() => {
              this.deleteLevel(Level);
            });
        }
        deleteLevel(Level: any) {
          this.orgStructLevelsService.httpDeleteXtraAndPosOrgStructLevelsDeleteOrgStructLevelService({
            id: Level.Id,
          }).subscribe((value: any) => {
            let jsonData = JSON.parse(value);
            this.toastr.clear();
            this.toastr.success(jsonData.Message);
            this.refreshTable();
          }, (error: any) => {
            this.toastr.error('Failed to delete Level.');
          });
        }
        onBranchChange(event:Event){
          const target = event.target as HTMLSelectElement;
          const branchId = target.value;
          if(branchId){
            let branch  = Number(branchId) ;
          this.orgStructLevelsService.httpGetXtraAndPosOrgStructLevelsGetParentOrgStructLevelService({
                branchId : branch
          }).subscribe((value : any)=>{
            let jsonData = JSON.parse(value);
            this.parentDropDown = jsonData.Obj.OrgStructLevels;
          })
        }
      }
        refreshTable() {
          this.orgStructLevelsService.httpGetXtraAndPosOrgStructLevelsGetOrgStructLevelService().subscribe((value: any) => {
            let jsonData = JSON.parse(value);
            this.orgStructData = jsonData.Obj.OrgStructLevels;
            this.treeData = this.generateTreeData(this.orgStructData);

          });
        }
        generateTreeData(orgStructData: any[]): TreeNode[] {
          const treeNodes: TreeNode[] = [];
          const branchMap: { [key: number]: TreeNode } = {};

          for (const node of orgStructData) {
            const branchId = node.BranchId;
            const treeNode: TreeNode = {
              data: node,
              label: node.NameAr,
              children: []
            };
            if (branchMap[branchId]) {
              branchMap[branchId].children?.push(treeNode);
            } else {

              const branchNode: TreeNode = {
                data: { NameAr: this.getBranch(branchId).NameAr },
                label: this.getBranch(branchId)?.NameAr,
                children: [treeNode]
              };
              branchMap[branchId] = branchNode;
              treeNodes.push(branchNode);
            }
          }
          return treeNodes;
        }
        getLevel(id :any){
          return this.orgStructData.filter((r)=>r.Id===id)[0]
        }
        goHome(){
          this.router.navigateByUrl('');
        }
        expandAll() {
          this.expandRecursive(this.treeData, true);
        }

        collapseAll() {
          this.expandRecursive(this.treeData, false);
        }

        expandRecursive(nodes: TreeNode[], isExpand: boolean) {
          if (nodes && nodes.length > 0) {
            for (const node of nodes) {
              node.expanded = isExpand;
              if (node.children && node.children.length > 0) {
                this.expandRecursive(node.children, isExpand);
              }
            }
          }
        }
}
