/* tslint:disable */
/* eslint-disable */
import { ContractStatus } from './contract-status';
export interface Offers {
  branchId?: number;
  branchName?: null | string;
  cancelBy?: null | string;
  cancelById?: number;
  cancelDate?: string;
  companyId?: number;
  companyName?: null | string;
  contractId?: number;
  contractStatus?: ContractStatus;
  createById?: null | string;
  createByName?: null | string;
  createdDate?: string;
  discountPercentage?: number;
  docRefGuid?: string;
  guid?: string;
  id?: number;
  isActive?: boolean;
  isCanceled?: boolean;
  isUpdated?: boolean;
  lastModifiedDate?: string;
  lastUpdatedBy?: null | string;
  lastUpdatedDate?: string;
  manualDisplay?: boolean;
  modifyById?: null | string;
  modifyByName?: null | string;
  modifyCount?: number;
  nameAr?: null | string;
  nameEn?: null | string;
  no?: number;
  notes?: null | string;
  offerName?: null | string;
  offerStartingDate?: string;
  offersEndDate?: string;
  updateFlag?: null | string;
  updatedCount?: number;
}
