/* tslint:disable */
/* eslint-disable */
import { ClientType } from './client-type';
import { DocType } from './doc-type';
import { PaymentType } from './payment-type';
import { StoreAdjustmentDetalils } from './store-adjustment-detalils';
import { StoreAdjustmentType } from './store-adjustment-type';
export interface StoreAdjustment {
  bankGuid?: string;
  bankId?: number;
  bankName?: null | string;
  branchId?: number;
  branchName?: null | string;
  cancelBy?: null | string;
  cancelById?: number;
  cancelDate?: string;
  cash?: number;
  clientGuid?: string;
  clientId?: number;
  clientName?: null | string;
  clientType?: ClientType;
  companyId?: number;
  companyName?: null | string;
  costCenterGuid?: string;
  costCenterId?: number;
  costCenterName?: null | string;
  createById?: null | string;
  createByName?: null | string;
  createdDate?: string;
  debt?: number;
  docDate?: string;
  docGuid?: string;
  docNo?: number;
  docRefGuid?: string;
  docType?: DocType;
  extraDisc?: number;
  guid?: string;
  id?: number;
  isActive?: boolean;
  isCanceled?: boolean;
  isUpdated?: boolean;
  itemType?: null | string;
  itemTypeID?: number;
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
  paymentType?: PaymentType;
  pricePolicyId?: number;
  pricePolicyName?: null | string;
  qrCode?: null | string;
  shiftId?: number;
  storageName?: null | string;
  storeAdjustmentDetalils?: null | Array<StoreAdjustmentDetalils>;
  storeAdjustmentType?: StoreAdjustmentType;
  storeGuid?: string;
  storeId?: number;
  storeName?: null | string;
  totalBookQty?: number;
  totalCorrectAmount?: number;
  totalDisc?: number;
  totalDiscRate?: number;
  totalDiscafterVat?: number;
  totalInvoice?: number;
  totalInvoiceAfterDisc?: number;
  totalInvoiceAfterVat?: number;
  totalInvoiceDu?: number;
  totalInvoiceGross?: number;
  totalInvoiceVatAmount?: number;
  totalSubtraction?: number;
  totalVatRate?: number;
  treasuryId?: number;
  updateFlag?: null | string;
  updatedCount?: number;
  userId?: string;
  visa?: number;
}
