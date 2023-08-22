/* tslint:disable */
/* eslint-disable */
import { ItemImage } from './item-image';
import { ItemPlace } from './item-place';
import { ItemSpare } from './item-spare';
export interface ItemUnit {
  barcode?: null | string;
  branchId?: number;
  branchName?: null | string;
  cancelBy?: null | string;
  cancelById?: number;
  cancelDate?: string;
  code?: null | string;
  companyId?: number;
  companyName?: null | string;
  createById?: null | string;
  createByName?: null | string;
  createdDate?: string;
  defaultCost?: number;
  description?: null | string;
  docRefGuid?: string;
  factor?: number;
  guid?: string;
  howToUse?: null | string;
  id?: number;
  isActive?: boolean;
  isCanceled?: boolean;
  isUpdated?: boolean;
  itemCode?: null | string;
  itemGroupGuid?: string;
  itemGroupId?: number;
  itemId?: number;
  itemImages?: null | Array<ItemImage>;
  itemPlace?: ItemPlace;
  itemsSpare?: null | Array<ItemSpare>;
  lastModifiedDate?: string;
  lastUpdatedBy?: null | string;
  lastUpdatedDate?: string;
  manualCode?: null | string;
  maxLimit?: number;
  minLimit?: number;
  model?: null | string;
  modelType?: null | string;
  modifyById?: null | string;
  modifyByName?: null | string;
  modifyCount?: number;
  nameAr?: null | string;
  nameEn?: null | string;
  no?: number;
  notes?: null | string;
  opinions?: null | string;
  price?: number;
  priceTax?: number;
  qty?: number;
  specifications?: null | string;
  standerCost?: number;
  standerCostTax?: number;
  supplierId?: number;
  taxRatio?: number;
  unitCode?: null | string;
  unitId?: number;
  unitName?: null | string;
  updateFlag?: null | string;
  updatedCount?: number;
  value?: number;
  vat?: number;
  wa?: number;
  weight?: number;
}
