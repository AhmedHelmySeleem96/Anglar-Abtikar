/* tslint:disable */
/* eslint-disable */
import { PeriodStatus } from './period-status';
export interface AccountingPeriod {
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
  endDate?: string;
  guid?: string;
  id?: number;
  isActive?: boolean;
  isCanceled?: boolean;
  isPeriodAYear?: boolean;
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
  paymentOrdersLastDate?: string;
  periodStatus?: PeriodStatus;
  settlementLastDate?: string;
  stablishDate?: string;
  startDate?: string;
  updateFlag?: null | string;
  updatedCount?: number;
}
