/* tslint:disable */
/* eslint-disable */
import { ClientItemsDetails } from './client-items-details';
export interface ClientItems {
  branchId?: number;
  branchName?: null | string;
  cancelBy?: null | string;
  cancelById?: number;
  cancelDate?: string;
  clientId?: number;
  clientItemsDetails?: null | Array<ClientItemsDetails>;
  clientName?: null | string;
  companyId?: number;
  companyName?: null | string;
  createById?: null | string;
  createByName?: null | string;
  createdDate?: string;
  discount?: number;
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
  updateFlag?: null | string;
  updatedCount?: number;
}
