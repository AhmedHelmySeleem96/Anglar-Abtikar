/* tslint:disable */
/* eslint-disable */
import { ClientType } from './client-type';
import { DocType } from './doc-type';
import { PaymentType } from './payment-type';
import { TransferDetails } from './transfer-details';
import { TransferDocStatus } from './transfer-doc-status';
import { TransferStatus } from './transfer-status';
export interface Transfer {
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
  docManualNo?: number;
  docNo?: number;
  docRefGuid?: string;
  docType?: DocType;
  employeeId?: number;
  employeeName?: null | string;
  extraDisc?: number;
  fromStoreId?: number;
  fromStoreName?: null | string;
  groupId?: number;
  groupName?: null | string;
  guid?: string;
  id?: number;
  isActive?: boolean;
  isUpdated?: boolean;
  itemsNo?: number;
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
  toStoreId?: number;
  toStoreName?: null | string;
  totalDisc?: number;
  totalDiscRate?: number;
  totalDiscafterVat?: number;
  totalInvoice?: number;
  totalInvoiceAfterDisc?: number;
  totalInvoiceAfterVat?: number;
  totalInvoiceDu?: number;
  totalInvoiceGross?: number;
  totalInvoiceVatAmount?: number;
  totalQty?: number;
  totalVatRate?: number;
  transferDetails?: null | Array<TransferDetails>;
  transferDocStatus?: TransferDocStatus;
  transferStatus?: TransferStatus;
  treasuryId?: number;
  updatedCount?: number;
  userId?: string;
  visa?: number;
}
