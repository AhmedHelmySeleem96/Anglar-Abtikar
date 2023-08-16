/* tslint:disable */
/* eslint-disable */
import { ApplicationUser } from './application-user';
export interface HrEmployeeDto {
  address?: null | string;
  annualVacDays?: null | number;
  bankAccountId?: null | number;
  barcode?: null | string;
  basicSalary?: null | number;
  birthDate?: null | string;
  contractEndDate?: null | string;
  contractPeriod?: null | number;
  contractStartDate?: null | string;
  currencyId?: null | number;
  date?: null | string;
  divisionId?: null | number;
  email?: null | string;
  fileDescription?: null | string;
  fileName?: null | string;
  fileSize?: number;
  fileType?: null | string;
  gender?: null | number;
  highestAcademicQualification?: null | number;
  iban?: null | string;
  identityCreationDate?: null | string;
  identityEndDate?: null | string;
  identityNumber?: null | number;
  identityType?: null | number;
  isSalesRepresentative?: null | boolean;
  jobId?: null | number;
  jobNameId?: null | number;
  lastName?: null | string;
  maritalStatus?: null | number;
  mobile?: null | string;
  nameAr?: null | string;
  nameEn?: null | string;
  nationalityId?: null | number;
  password?: null | string;
  phone?: null | string;
  secondName?: null | string;
  sno?: null | number;
  specializationId?: null | number;
  startDate?: null | string;
  statusId?: null | number;
  title?: null | string;
  user?: ApplicationUser;
  userName?: null | string;
}
