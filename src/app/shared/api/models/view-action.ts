/* tslint:disable */
/* eslint-disable */
import { Action } from './action';
import { Screen } from './screen';
export interface ViewAction {
  action?: Action;
  branchId?: number;
  branchName?: null | string;
  cancelBy?: null | string;
  cancelById?: number;
  cancelDate?: string;
  companyId?: number;
  companyName?: null | string;
  createById?: null | string;
  createByName?: null | string;
  createdDate?: string;
  docRefGuid?: string;
  guid?: string;
  id?: number;
  isActive?: boolean;
  isCanceled?: boolean;
  isUpdated?: boolean;
  lastModifiedDate?: string;
  lastUpdatedBy?: null | string;
  lastUpdatedDate?: string;
  modifyById?: null | string;
  modifyByName?: null | string;
  modifyCount?: number;
  nameAr?: null | string;
  nameEn?: null | string;
  no?: number;
  notes?: null | string;
  parentNo?: Screen;
  roleScreenId?: number;
  roleScreenName?: null | string;
  updateFlag?: null | string;
  updatedCount?: number;
  visible?: boolean;
}
