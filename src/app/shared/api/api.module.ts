/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AccountingPeriodEpService } from './services/accounting-period-ep.service';
import { BuyInvoiceCostsControllerService } from './services/buy-invoice-costs-controller.service';
import { CartEpService } from './services/cart-ep.service';
import { CollectionInvoiceControllerService } from './services/collection-invoice-controller.service';
import { CurrencyEpService } from './services/currency-ep.service';
import { ExtraAndPosBankAccountEpService } from './services/extra-and-pos-bank-account-ep.service';
import { ExtraAndPosBankEpService } from './services/extra-and-pos-bank-ep.service';
import { ExtraAndPosBuyInvoiceEpService } from './services/extra-and-pos-buy-invoice-ep.service';
import { ExtraAndPosReturnBuyInvoiceEpService } from './services/extra-and-pos-return-buy-invoice-ep.service';
import { InitGlCreateEpService } from './services/init-gl-create-ep.service';
import { InitGlReceptEpService } from './services/init-gl-recept-ep.service';
import { ItemUnitEpService } from './services/item-unit-ep.service';
import { LdgerEpService } from './services/ldger-ep.service';
import { ManageUserEpService } from './services/manage-user-ep.service';
import { PriceListControllerService } from './services/price-list-controller.service';
import { PricingMangementControlerService } from './services/pricing-mangement-controler.service';
import { ReportEpService } from './services/report-ep.service';
import { RoleGroupEpService } from './services/role-group-ep.service';
import { SettingsEpService } from './services/settings-ep.service';
import { ShippingMaService } from './services/shipping-ma.service';
import { TrailBalanceControllerService } from './services/trail-balance-controller.service';
import { UserEpService } from './services/user-ep.service';
import { WebsiteEpService } from './services/website-ep.service';
import { XtraAndPosAccTreeEpService } from './services/xtra-and-pos-acc-tree-ep.service';
import { XtraAndPosAllowenceService } from './services/xtra-and-pos-allowence.service';
import { XtraAndPosBranchEpService } from './services/xtra-and-pos-branch-ep.service';
import { XtraAndPosBuyOfferPricesEpService } from './services/xtra-and-pos-buy-offer-prices-ep.service';
import { XtraAndPosCityService } from './services/xtra-and-pos-city.service';
import { XtraAndPosClientEpService } from './services/xtra-and-pos-client-ep.service';
import { XtraAndPosCompanySettingEpService } from './services/xtra-and-pos-company-setting-ep.service';
import { XtraAndPosCostCenterEpService } from './services/xtra-and-pos-cost-center-ep.service';
import { XtraAndPosCountryService } from './services/xtra-and-pos-country.service';
import { XtraAndPosDefaultOptionsEpService } from './services/xtra-and-pos-default-options-ep.service';
import { XtraAndPosEmployeeEpService } from './services/xtra-and-pos-employee-ep.service';
import { XtraAndPosFinanceEpService } from './services/xtra-and-pos-finance-ep.service';
import { XtraAndPosGeneralLedgerEpService } from './services/xtra-and-pos-general-ledger-ep.service';
import { XtraAndPosHospitalService } from './services/xtra-and-pos-hospital.service';
import { XtraAndPosItemEpService } from './services/xtra-and-pos-item-ep.service';
import { XtraAndPosLookUpsService } from './services/xtra-and-pos-look-ups.service';
import { XtraAndPosNationalityService } from './services/xtra-and-pos-nationality.service';
import { XtraAndPosOrgStructLevelsService } from './services/xtra-and-pos-org-struct-levels.service';
import { XtraAndPosOrgStructuresService } from './services/xtra-and-pos-org-structures.service';
import { XtraAndPosReturnSaleInvoiceEpService } from './services/xtra-and-pos-return-sale-invoice-ep.service';
import { XtraAndPosSaleInvoiceEpService } from './services/xtra-and-pos-sale-invoice-ep.service';
import { XtraAndPosSaleOfferPricesEpService } from './services/xtra-and-pos-sale-offer-prices-ep.service';
import { XtraAndPosShiftEpService } from './services/xtra-and-pos-shift-ep.service';
import { XtraAndPosStorageEpService } from './services/xtra-and-pos-storage-ep.service';
import { XtraAndPosSupplierEpService } from './services/xtra-and-pos-supplier-ep.service';
import { XtraAndPosTreasuriesEpService } from './services/xtra-and-pos-treasuries-ep.service';
import { XtraAndPosTreasuryEpService } from './services/xtra-and-pos-treasury-ep.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AccountingPeriodEpService,
    BuyInvoiceCostsControllerService,
    CartEpService,
    CollectionInvoiceControllerService,
    CurrencyEpService,
    ExtraAndPosBankAccountEpService,
    ExtraAndPosBankEpService,
    ExtraAndPosBuyInvoiceEpService,
    ExtraAndPosReturnBuyInvoiceEpService,
    InitGlCreateEpService,
    InitGlReceptEpService,
    ItemUnitEpService,
    LdgerEpService,
    ManageUserEpService,
    PriceListControllerService,
    PricingMangementControlerService,
    ReportEpService,
    RoleGroupEpService,
    SettingsEpService,
    ShippingMaService,
    TrailBalanceControllerService,
    UserEpService,
    WebsiteEpService,
    XtraAndPosAccTreeEpService,
    XtraAndPosAllowenceService,
    XtraAndPosBranchEpService,
    XtraAndPosBuyOfferPricesEpService,
    XtraAndPosCityService,
    XtraAndPosClientEpService,
    XtraAndPosCompanySettingEpService,
    XtraAndPosCostCenterEpService,
    XtraAndPosCountryService,
    XtraAndPosDefaultOptionsEpService,
    XtraAndPosEmployeeEpService,
    XtraAndPosFinanceEpService,
    XtraAndPosGeneralLedgerEpService,
    XtraAndPosHospitalService,
    XtraAndPosItemEpService,
    XtraAndPosLookUpsService,
    XtraAndPosNationalityService,
    XtraAndPosOrgStructLevelsService,
    XtraAndPosOrgStructuresService,
    XtraAndPosReturnSaleInvoiceEpService,
    XtraAndPosSaleInvoiceEpService,
    XtraAndPosSaleOfferPricesEpService,
    XtraAndPosShiftEpService,
    XtraAndPosStorageEpService,
    XtraAndPosSupplierEpService,
    XtraAndPosTreasuriesEpService,
    XtraAndPosTreasuryEpService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
