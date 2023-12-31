/* tslint:disable */
/* eslint-disable */
import { PriceListDetail } from './price-list-detail';
export interface PriceList {
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
  discount?: number;
  docRefGuid?: string;
  groupId?: number;
  groupName?: null | string;
  guid?: string;
  id?: number;
  isActive?: boolean;
  isCanceled?: boolean;
  isUpdated?: boolean;
  lastModifiedDate?: string;
  lastUpdatedBy?: null | string;
  lastUpdatedDate?: string;
  listType?: null | string;
  listTypeId?: number;
  modifyById?: null | string;
  modifyByName?: null | string;
  modifyCount?: number;
  nameAr?: null | string;
  nameEn?: null | string;
  no?: number;
  notes?: null | string;
  priceListDetail?: null | Array<PriceListDetail>;
  pricePolicyId?: number;
  pricePolicyName?: null | string;
  updateFlag?: null | string;
  updatedCount?: number;
}
