/* tslint:disable */
/* eslint-disable */
import { EnvironmentMode } from './environment-mode';
import { InvoiceThem } from './invoice-them';
export interface Branch {
  activityType?: number;
  additionalStreetName?: null | string;
  address?: null | string;
  alMhannaItemCode?: boolean;
  approvalOrdersDrainageTransferred?: boolean;
  barCodeLength?: number;
  barCodeStart?: number;
  branchId?: number;
  branchLogo?: null | string;
  branchName?: null | string;
  branchSignature?: null | string;
  buildingNumber?: null | string;
  buyNumber?: number;
  buyOfferInBuysinRow?: boolean;
  buySymbole?: null | string;
  cancelBy?: null | string;
  cancelById?: number;
  cancelDate?: string;
  cityName?: null | string;
  citySubdivisionName?: null | string;
  commercialNo?: null | string;
  companyId?: number;
  companyName?: null | string;
  countrySubentity?: null | string;
  createById?: null | string;
  createByName?: null | string;
  createdDate?: string;
  discountRate?: boolean;
  docRefGuid?: string;
  environmentMode?: EnvironmentMode;
  guid?: string;
  hideBalance?: boolean;
  hideBalanceBuyOffer?: boolean;
  hideBouns?: boolean;
  hideBuyColor?: boolean;
  hideBuySize?: boolean;
  hideBuyTall?: boolean;
  hideBuyWeight?: boolean;
  hideBuyWide?: boolean;
  hideColorBuyOffer?: boolean;
  hideDateArrivalBuyOffer?: boolean;
  hideDiscount?: boolean;
  hideDiscountClient?: boolean;
  hideDocClassification?: boolean;
  hideDocClassificationSale?: boolean;
  hideDocProjects?: boolean;
  hideDocProjectsSale?: boolean;
  hideItemData?: boolean;
  hideItemSpare?: boolean;
  hideNotesSale?: boolean;
  hideTotalAfterVat?: boolean;
  hideVat?: boolean;
  id?: number;
  industry?: null | string;
  invoiceThem?: InvoiceThem;
  isActive?: boolean;
  isCanceled?: boolean;
  isDirectSale?: boolean;
  isMustOpenShift?: boolean;
  isUpdated?: boolean;
  lastModifiedDate?: string;
  lastUpdatedBy?: null | string;
  lastUpdatedDate?: string;
  licenseNo?: null | string;
  modifyById?: null | string;
  modifyByName?: null | string;
  modifyCount?: number;
  nameAr?: null | string;
  nameEn?: null | string;
  nationalAddress?: null | string;
  no?: number;
  notes?: null | string;
  otp?: null | string;
  phoneNo?: null | string;
  plotIdentification?: null | string;
  postalBox?: null | string;
  postalZone?: null | string;
  priceLength?: number;
  pricePolicyId?: number;
  pricePolicyName?: null | string;
  priceSeparator?: number;
  priceStart?: number;
  qtyLength?: number;
  qtySeparator?: number;
  qtyStart?: number;
  registrationName?: null | string;
  roomNo?: null | string;
  saleByMinus?: boolean;
  saleNumber?: number;
  saleSymbole?: null | string;
  schemeId?: null | string;
  sellingWithPricePolicy?: boolean;
  separateUnit?: boolean;
  separateUnitBuyOffer?: boolean;
  separateUnitBuyOfferPrice?: boolean;
  separateUnitBuys?: boolean;
  separateUnitTransferred?: boolean;
  seperateSaleOffer?: boolean;
  streetName?: null | string;
  taxNo?: null | string;
  tbL005ID?: number;
  transferNumber?: number;
  transferSymbole?: null | string;
  transferWithPrice?: boolean;
  treasurInNumber?: number;
  treasurInSymbole?: null | string;
  treasurOutNumber?: number;
  treasurOutSymbole?: null | string;
  updateFlag?: null | string;
  updatedCount?: number;
  zakatAuthority?: boolean;
}
