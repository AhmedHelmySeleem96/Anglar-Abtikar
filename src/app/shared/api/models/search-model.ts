/* tslint:disable */
/* eslint-disable */
import { PaymentMethod } from './payment-method';
import { SearchStatus } from './search-status';
export interface SearchModel {
  branchID?: number;
  companyID?: number;
  customerId?: number;
  fromDate?: string;
  groupGuid?: string;
  groupId?: number;
  isShiftOpen?: boolean;
  itemID?: number;
  itemUnitId?: number;
  modelName?: null | string;
  modelTypeName?: null | string;
  objectId?: number;
  paymentMethod?: PaymentMethod;
  paymentType?: number;
  pricingID?: number;
  salesManId?: number;
  searchStatus?: SearchStatus;
  shiftID?: number;
  storeID?: number;
  toDate?: string;
  userId?: string;
}
