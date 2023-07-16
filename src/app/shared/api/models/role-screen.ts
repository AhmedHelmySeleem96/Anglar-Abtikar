/* tslint:disable */
/* eslint-disable */
import { ScreenType } from './screen-type';
import { ViewAction } from './view-action';
import { Screen } from './screen';
export interface RoleScreen {
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
  roleGroupId?: number;
  screen?: Screen;
  screenType?: ScreenType;
  updateFlag?: null | string;
  updatedCount?: number;
  viewActions?: null | Array<ViewAction>;
  visible?: boolean;
}
