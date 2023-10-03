/* tslint:disable */
/* eslint-disable */
import { EmpVacationTrxTypes } from './emp-vacation-trx-types';
export interface EmployeeVacationTrxDto {
  deductionDate?: null | string;
  employeeId?: null | number;
  extensionEndDate?: null | string;
  extensionPeriod?: null | number;
  reason?: null | string;
  trxType?: EmpVacationTrxTypes;
  vacId?: null | number;
}
