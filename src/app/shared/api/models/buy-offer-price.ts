/* tslint:disable */
/* eslint-disable */
import { BuyOfferPriceDetails } from './buy-offer-price-details';
import { ClientType } from './client-type';
import { DocType } from './doc-type';
import { PaymentType } from './payment-type';
export interface BuyOfferPrice {
  bankGuid?: string;
  bankId?: number;
  bankName?: null | string;
  branchId?: number;
  branchName?: null | string;
  buyOfferPriceDetails?: null | Array<BuyOfferPriceDetails>;
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
  paymentType?: PaymentType;
  qrCode?: null | string;
  shiftId?: number;
  storeGuid?: string;
  storeId?: number;
  storeName?: null | string;
  totalDisc?: number;
  totalDiscRate?: number;
  totalInvoice?: number;
  totalInvoiceAfterDisc?: number;
  totalInvoiceAfterVat?: number;
  totalInvoiceGross?: number;
  totalInvoiceVatAmount?: number;
  totalVatRate?: number;
  treasuryId?: number;
  updatedCount?: number;
  userId?: string;
  visa?: number;
}
