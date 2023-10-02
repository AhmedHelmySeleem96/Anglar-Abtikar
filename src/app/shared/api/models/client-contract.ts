/* tslint:disable */
/* eslint-disable */
import { AchievingTargets } from './achieving-targets';
import { Offers } from './offers';
export interface ClientContract {
  achievingTargets?: null | Array<AchievingTargets>;
  branchId?: number;
  branchName?: null | string;
  cancelBy?: null | string;
  cancelById?: number;
  cancelDate?: string;
  clientId?: number;
  clientName?: null | string;
  companyId?: number;
  companyName?: null | string;
  contractEndDate?: string;
  contractNo?: null | string;
  contractStartingDate?: string;
  createById?: null | string;
  createByName?: null | string;
  createdDate?: string;
  customerDiscount?: boolean;
  customerDiscountPercentage?: number;
  docNo?: null | string;
  docRefGuid?: string;
  guid?: string;
  id?: number;
  isAchievingTargets?: boolean;
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
  offers?: null | Array<Offers>;
  updateFlag?: null | string;
  updatedCount?: number;
  warehouseSupply?: boolean;
  warehouseSupplyDiscountPercentage?: number;
}
