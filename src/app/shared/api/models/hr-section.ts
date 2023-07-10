/* tslint:disable */
/* eslint-disable */
import { Job } from './job';
export interface HrSection {
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
  docRefGuid?: string;
  guid?: string;
  hrManagmentId?: number;
  id?: number;
  isActive?: boolean;
  isUpdated?: boolean;
  jobs?: null | Array<Job>;
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
  updatedCount?: number;
}
