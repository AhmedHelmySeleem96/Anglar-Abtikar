/* tslint:disable */
/* eslint-disable */
import { Item } from './item';
export interface ItemGroup {
  branchId?: number;
  branchName?: null | string;
  cancelBy?: null | string;
  cancelById?: number;
  cancelDate?: string;
  code?: null | string;
  companyId?: number;
  companyName?: null | string;
  createById?: null | string;
  createByName?: null | string;
  createdDate?: string;
  discRate?: number;
  docRefGuid?: string;
  guid?: string;
  id?: number;
  isActive?: boolean;
  isCanceled?: boolean;
  isNegativeSelling?: boolean;
  isParent?: boolean;
  isUpdated?: boolean;
  item?: null | Array<Item>;
  itemGroupImage?: null | string;
  lastModifiedDate?: string;
  lastUpdatedBy?: null | string;
  lastUpdatedDate?: string;
  level?: number;
  modifyById?: null | string;
  modifyByName?: null | string;
  modifyCount?: number;
  nameAr?: null | string;
  nameEn?: null | string;
  no?: number;
  notes?: null | string;
  parentCode?: null | string;
  parentId?: number;
  tbl006ID?: number;
  updateFlag?: null | string;
  updatedCount?: number;
}
