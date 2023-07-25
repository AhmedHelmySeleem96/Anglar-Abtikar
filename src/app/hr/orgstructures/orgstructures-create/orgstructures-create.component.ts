import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {    OrgStructuresCreateDto, XtraAndPosBranchEpService, XtraAndPosOrgStructLevelsService, XtraAndPosOrgStructuresService } from 'src/app/shared/api';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService, TreeNode } from 'primeng/api';
@Component({
  selector: 'app-orgstructures-create',
  templateUrl: './orgstructures-create.component.html',
  styleUrls: ['./orgstructures-create.component.css']
})
export class OrgstructuresCreateComponent  implements OnInit {
  constructor(
    private toastr:ToastrService,
    private orgStructLevelsService: XtraAndPosOrgStructLevelsService,private XtraAndPosBranchEpService : XtraAndPosBranchEpService,
    private XtraAndPosOrgStructuresService: XtraAndPosOrgStructuresService,
    private fb:FormBuilder,private router: Router,private route: ActivatedRoute){this.formorgStruct = this.createForm();}
    branchData : any[] = [] ;
    orgStructLevels :any[]= [] ;
    orgStructuresDataDropDown :any [] = []
    cols :any ;
    isEdit : boolean = false;
    currentLevelId : any ;
    selectedNode: TreeNode | null = null;
    @ViewChild('formElement') formElement!: ElementRef;
@ViewChild('dt') dt: any;
treeData: TreeNode[] = [];
orgStructuresData:any[] = [] ;
 formorgStruct :FormGroup ;
 parentDropDown : any[] = [] ;
 createForm(): FormGroup {
  return this.fb.group({
    NameAr: new FormControl('', [Validators.required]),
    NameEn: new FormControl('', [Validators.required]),
    ParentId: new FormControl(0),
    LevelId: new FormControl('', [Validators.required]),
    branchId :new FormControl('', [Validators.required]),
  });
}
ngOnInit(): void {
  this.createForm();
  this.orgStructLevelsService.httpGetXtraAndPosOrgStructLevelsGetOrgStructLevelService().subscribe((value: any) => {
    let jsonData = JSON.parse(value);
    this.orgStructLevels = jsonData.Obj.OrgStructLevels;
  });
  this.XtraAndPosBranchEpService.httpGetBranchGetAllForDropDown().subscribe((value:any)=>{
    let jsonData = JSON.parse(value);
    this.branchData = jsonData ;
  })
  this.refreshTable();
  this.cols = [
    { field: 'NameAr', header: 'Hr.OrgStructureNameAr' },
    { field: 'NameEn', header: 'Hr.OrgStructureNameEn' },
    { field: 'ParentId', header: 'Hr.SelectLevel' },
    { field: 'BranchId', header: 'Hr.BranchId' },
    { field: 'LevelId', header: 'Hr.SelectParent' },
  ];
}
OnSubmit(Form: FormGroup) {
  if(!this.isEdit){
  if(this.formorgStruct.valid)
  {
  let model : OrgStructuresCreateDto = this.formorgStruct.value;
  this.XtraAndPosOrgStructuresService.httpPostXtraAndPosOrgStructuresCreateOrgStructuresService({
    body : model
  }).subscribe((value:any)=>{
    let jsonData = JSON.parse(value);
      this.toastr.success(jsonData.Message);
      this.refreshTable();
      if(jsonData.IsSuccess===true){
        this.formorgStruct.reset();
        this.formorgStruct.get('parentId')?.setValue('0');
        this.createForm();
      }
  })}else{
    this.toastr.success("ادخل البيانات المطلوبة")
  }
}else{
  if(this.formorgStruct.valid)
  {
    let model : OrgStructuresCreateDto = this.formorgStruct.value;
    this.XtraAndPosOrgStructuresService.httpPutXtraAndPosOrgStructuresUpdateOrgStructuresService({
      id : this.currentLevelId,
      body : model
    }).subscribe((value:any)=>{
      let jsonData = JSON.parse(value);
        this.toastr.success(jsonData.Message);
        if(jsonData.IsSuccess===true){
          this.formorgStruct.reset();
          this.formorgStruct.get('parentId')?.setValue('0');
          this.createForm();
        }
        this.refreshTable();
        this.isEdit = false;
        this.currentLevelId = '';
    })
  }
}
    }
    onParentSelect(event: Event) {
      this.orgStructuresDataDropDown  = [];
      const target = event.target as HTMLSelectElement;
      const parentId = target.value;
      if (parentId) {
        let Id = Number(parentId)
      this.XtraAndPosOrgStructuresService.httpGetXtraAndPosOrgStructuresGetOrgStructuresServiceById({
        id : Id,
      }).subscribe((value:any)=>{
        let jsonData = JSON.parse(value);
        if(jsonData.Message){
        this.toastr.success(jsonData.Message);
        }
        this.orgStructuresDataDropDown = jsonData.Obj.orgstructures;
      })
    }
    }
    getBranch(id :any){
      return this.branchData.filter((r)=>r.Id===id)[0]
    }
    onBranchChange(event:Event){
      const target = event.target as HTMLSelectElement;
      const branchId = target.value;
      if(branchId){
        let branch  = Number(branchId) ;
      this.XtraAndPosOrgStructuresService.httpGetXtraAndPosOrgStructuresGetParentOrgStructLevelService({
            branchId : branch
      }).subscribe((value : any)=>{
        let jsonData = JSON.parse(value);
        this.parentDropDown = jsonData.Obj.OrgStructLevels;
      })
    }
  }
    setEdit(level: any) {
      this.formorgStruct.patchValue({
        NameAr: level.NameAr,
        NameEn: level.NameEn,
        ParentId: level.ParentId,
        LevelId: level.LevelId
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
      this.XtraAndPosOrgStructuresService.httpDeleteXtraAndPosOrgStructuresDeleteOrgStructuresService({
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

    refreshTable() {
      this.XtraAndPosOrgStructuresService.httpGetXtraAndPosOrgStructuresGetOrgStructuresService().subscribe((value: any) => {
        let jsonData = JSON.parse(value);
        this.orgStructuresData = jsonData.Obj.orgStructures;
        this.treeData = this.generateTreeData(this.orgStructuresData);
      });
    }
    generateTreeData(orgStructData: any[]): TreeNode[] {
      const treeNodes: TreeNode[] = [];
      const idToNodeMap: { [key: number]: TreeNode } = {};
      for (const node of orgStructData) {
        const treeNode: TreeNode = {
          data: node,
          label: node.NameAr,
          icon: 'pi pi-fw pi-inbox',
          children: []
        };
        idToNodeMap[node.Id] = treeNode;
      }

      for (const node of orgStructData) {
        if (node.ParentId !== 0) {
          const parent = idToNodeMap[node.ParentId];
          if (parent) {
            parent.children = parent.children || [];
            parent.children.push(idToNodeMap[node.Id]);              }
        } else {
          treeNodes.push(idToNodeMap[node.Id]);
        }
      }

      return treeNodes;
    }

    getLevel(id :any){
      return this.orgStructuresData.filter((r)=>r.Id===id)[0]
    }
    getParent(id :any){
      return this.orgStructLevels.filter((r)=>r.Id===id)[0]
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
