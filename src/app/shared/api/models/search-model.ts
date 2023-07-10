/* tslint:disable */
/* eslint-disable */
import { SearchStatus } from './search-status';
export interface SearchModel {
  branchID?: number;
  companyID?: number;
  fromDate?: string;
  groupGuid?: string;
  groupId?: number;
  isShiftOpen?: boolean;
  itemID?: number;
  objectId?: number;
  paymentType?: number;
  salesManId?: number;
  searchStatus?: SearchStatus;
  shiftID?: number;
  storeID?: number;
  toDate?: string;
  userId?: string;
}
