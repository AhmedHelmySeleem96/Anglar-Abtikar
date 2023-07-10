/* tslint:disable */
/* eslint-disable */
import { CollectionInvoiceDetails } from './collection-invoice-details';
export interface CollectionInvoice {
  branchId?: number;
  branchName?: null | string;
  cancelBy?: null | string;
  cancelById?: number;
  cancelDate?: string;
  clientId?: number;
  clientName?: null | string;
  companyId?: number;
  companyName?: null | string;
  createById?: null | string;
  createByName?: null | string;
  createdDate?: string;
  docDate?: string;
  docGuid?: string;
  docNo?: number;
  docNoManual?: number;
  docRefGuid?: string;
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
  price?: number;
  saleinvoiceId?: number;
  treasuryId?: number;
  treasuryName?: null | string;
  treasuryTransactionsDetails?: null | Array<CollectionInvoiceDetails>;
  updatedCount?: number;
}
