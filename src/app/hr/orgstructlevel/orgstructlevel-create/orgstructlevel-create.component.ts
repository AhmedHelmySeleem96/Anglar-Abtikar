import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {   OrgStructLevelCreateDto, XtraAndPosOrgStructLevelsService } from 'src/app/shared/api';
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
    private orgStructLevelsService: XtraAndPosOrgStructLevelsService,
    private fb:FormBuilder,private router: Router,private route: ActivatedRoute){}
    formorgStruct :FormGroup= this.fb.group({levelNameAr: new FormControl('', [Validators.required]),
    levelNameEn: new FormControl('', [Validators.required]),
    parentId :new FormControl(0),
     })
    orgStructData :any[]= [] ;
    cols :any ;
    isEdit : boolean = false;
    currentLevelId : any ;
    selectedNode: TreeNode | null = null;
    @ViewChild('formElement') formElement!: ElementRef;
@ViewChild('dt') dt: any;
treeData: TreeNode[] = [];


    ngOnInit(): void {
      this.refreshTable();
      this.cols = [
        { field: 'NameAr', header: 'Hr.OrgStructNameAr' },
        { field: 'NameEn', header: 'Hr.OrgStructNameEn' },
        { field: 'ParentId', header: 'Hr.SelectParent' },
      ];
    }

    OnSubmit(Form: FormGroup) {
      debugger
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
            }
            this.refreshTable();
            this.isEdit = false;
            this.currentLevelId = '';
        })
      }
    }
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

        refreshTable() {
          this.orgStructLevelsService.httpGetXtraAndPosOrgStructLevelsGetOrgStructLevelService().subscribe((value: any) => {
            let jsonData = JSON.parse(value);
            this.orgStructData = jsonData.Obj.OrgStructLevels;
            this.treeData = this.generateTreeData(this.orgStructData);

          });
        }
        generateTreeData(orgStructData: any[]): TreeNode[] {
          const treeNodes: TreeNode[] = [];
          const idToNodeMap: { [key: number]: TreeNode } = {};
          for (const node of orgStructData) {
            const treeNode: TreeNode = {
              data: node,
              label: node.NameAr,
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
          console.log(this.orgStructData.filter((r)=>r.Id===id)[0])
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
