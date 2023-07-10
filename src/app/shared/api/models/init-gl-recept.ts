/* tslint:disable */
/* eslint-disable */
import { InitGlReceptDetail } from './init-gl-recept-detail';
import { InitGlType } from './init-gl-type';
export interface InitGlRecept {
  branchId?: number;
  branchName?: null | string;
  cancelBy?: null | string;
  cancelById?: number;
  cancelDate?: string;
  code?: null | string;
  companyId?: number;
  companyName?: null | string;
  crAmount?: number;
  createById?: null | string;
  createByName?: null | string;
  createdDate?: string;
  docDate?: string;
  docNo?: number;
  docNoManual?: number;
  docRefGuid?: string;
  drAmount?: number;
  guid?: string;
  id?: number;
  initGlReceptDetails?: null | Array<InitGlReceptDetail>;
  initGlType?: InitGlType;
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
  updatedCount?: number;
}
