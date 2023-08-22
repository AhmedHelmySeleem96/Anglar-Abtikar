/* tslint:disable */
/* eslint-disable */
import { DocMovementProcessType } from './doc-movement-process-type';
import { DocType } from './doc-type';
import { DocsStatus } from './docs-status';
export interface DocMovement {
  branchId?: number;
  branchName?: null | string;
  cancelBy?: null | string;
  cancelById?: number;
  cancelDate?: string;
  clientId?: number;
  clientName?: null | string;
  companyId?: number;
  companyName?: null | string;
  crAmount?: number;
  createById?: null | string;
  createByName?: null | string;
  createdDate?: string;
  docDate?: string;
  docGuid?: string;
  docName?: null | string;
  docNo?: number;
  docNoManual?: number;
  docRefGuid?: string;
  docType?: DocType;
  docsStatus?: DocsStatus;
  drAmount?: number;
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
  processType?: DocMovementProcessType;
  supplierId?: number;
  supplierName?: null | string;
  updateFlag?: null | string;
  updatedCount?: number;
}
