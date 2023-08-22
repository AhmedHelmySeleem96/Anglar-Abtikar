/* tslint:disable */
/* eslint-disable */
import { RoleGroup } from './role-group';
import { UserBranch } from './user-branch';
export interface ApplicationUser {
  accessFailedCount?: number;
  accessToken?: null | string;
  allowToChangePrice?: boolean;
  allowToGiveDiscount?: boolean;
  branches?: null | Array<UserBranch>;
  companyId?: number;
  concurrencyStamp?: null | string;
  email?: null | string;
  emailConfirmed?: boolean;
  employeeId?: number;
  id?: null | string;
  lockoutEnabled?: boolean;
  lockoutEnd?: null | string;
  normalizedEmail?: null | string;
  normalizedUserName?: null | string;
  passwordHash?: null | string;
  phoneNumber?: null | string;
  phoneNumberConfirmed?: boolean;
  pricePolicyId?: number;
  pricePolicyName?: null | string;
  role?: RoleGroup;
  roleId?: number;
  roleName?: null | string;
  securityStamp?: null | string;
  twoFactorEnabled?: boolean;
  userName?: null | string;
}
