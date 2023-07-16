/* tslint:disable */
/* eslint-disable */
import { TreasuryTransactionOutDetail } from './treasury-transaction-out-detail';
import { TreasuryType } from './treasury-type';
export interface TreasuryTransactionOut {
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
  docDate?: string;
  docGuid?: string;
  docNo?: number;
  docNoManual?: number;
  docRefGuid?: string;
  guid?: string;
  id?: number;
  isActive?: boolean;
  isUpdated?: boolean;
  lastModifiedDate?: string;
  lastUpdatedBy?: null | string;
  lastUpdatedDate?: string;
  mainBank?: number;
  mainCostCenter?: number;
  modifyById?: null | string;
  modifyByName?: null | string;
  modifyCount?: number;
  nameAr?: null | string;
  nameEn?: null | string;
  no?: number;
  notes?: null | string;
  totalAmount?: number;
  treasuryId?: number;
  treasuryName?: null | string;
  treasuryTransactionOutDetails?: null | Array<TreasuryTransactionOutDetail>;
  treasuryType?: TreasuryType;
  typeofpayment?: number;
  updateFlag?: null | string;
  updatedCount?: number;
}
