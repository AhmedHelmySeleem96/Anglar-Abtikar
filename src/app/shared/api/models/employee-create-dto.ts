/* tslint:disable */
/* eslint-disable */
import { ApplicationUser } from './application-user';
import { Employee } from './employee';
import { EmployeeFiles } from './employee-files';
export interface EmployeeCreateDto {
  employee?: Employee;
  employeeFiles?: EmployeeFiles;
  password?: null | string;
  user?: ApplicationUser;
  uuserName?: null | string;
}
