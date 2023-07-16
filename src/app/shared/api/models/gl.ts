/* tslint:disable */
/* eslint-disable */
import { DocType } from './doc-type';
import { DocsStatus } from './docs-status';
import { GlDetail } from './gl-detail';
import { InitGlType } from './init-gl-type';
export interface Gl {
  branchId?: number;
  branchName?: null | string;
  cancelBy?: null | string;
  cancelById?: number;
  cancelDate?: string;
  companyId?: number;
  companyName?: null | string;
  costCenterId?: number;
  costCenterName?: null | string;
  crAmount?: number;
  createById?: null | string;
  createByName?: null | string;
  createdDate?: string;
  currencyId?: number;
  currencyName?: null | string;
  docDate?: string;
  docName?: null | string;
  docNo?: number;
  docNoManual?: number;
  docRefGuid?: string;
  docType?: DocType;
  docsStatus?: DocsStatus;
  drAmount?: number;
  glDetails?: null | Array<GlDetail>;
  guid?: string;
  id?: number;
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
  updateFlag?: null | string;
  updatedCount?: number;
}
