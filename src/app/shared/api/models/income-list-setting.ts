/* tslint:disable */
/* eslint-disable */
import { IncomeListDetails } from './income-list-details';
export interface IncomeListSetting {
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
  expensesId?: number;
  expensesName?: null | string;
  guid?: string;
  id?: number;
  incomeId?: number;
  incomeListDetails?: null | Array<IncomeListDetails>;
  incomeName?: null | string;
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
  updateFlag?: null | string;
  updatedCount?: number;
}
