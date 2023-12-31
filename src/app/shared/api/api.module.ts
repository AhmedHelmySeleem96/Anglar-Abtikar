/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AccountingPeriodEpService } from './services/accounting-period-ep.service';
import { BudgetReportEpService } from './services/budget-report-ep.service';
import { BuyInvoiceCostsControllerService } from './services/buy-invoice-costs-controller.service';
import { BuyOfferTransactionEpService } from './services/buy-offer-transaction-ep.service';
import { CartEpService } from './services/cart-ep.service';
import { ClientContractEpService } from './services/client-contract-ep.service';
import { CollectionInvoiceControllerService } from './services/collection-invoice-controller.service';
import { CurrencyEpService } from './services/currency-ep.service';
import { DashboardEpService } from './services/dashboard-ep.service';
import { DocClassificationEpService } from './services/doc-classification-ep.service';
import { DocProjectsEpService } from './services/doc-projects-ep.service';
import { ExtraAndPosBankAccountEpService } from './services/extra-and-pos-bank-account-ep.service';
import { ExtraAndPosBankEpService } from './services/extra-and-pos-bank-ep.service';
import { ExtraAndPosBuyInvoiceEpService } from './services/extra-and-pos-buy-invoice-ep.service';
import { ExtraAndPosReturnBuyInvoiceEpService } from './services/extra-and-pos-return-buy-invoice-ep.service';
import { FinancialYearEpService } from './services/financial-year-ep.service';
import { InitGlCreateEpService } from './services/init-gl-create-ep.service';
import { InitGlReceptEpService } from './services/init-gl-recept-ep.service';
import { ItemOfferEpService } from './services/item-offer-ep.service';
import { ItemUnitEpService } from './services/item-unit-ep.service';
import { LdgerEpService } from './services/ldger-ep.service';
import { ManageUserEpService } from './services/manage-user-ep.service';
import { NotesInvoiceEpService } from './services/notes-invoice-ep.service';
import { PortalEpService } from './services/portal-ep.service';
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
import { XtraAndPosAllowanceService } from './services/xtra-and-pos-allowance.service';
import { XtraAndPosBranchEpService } from './services/xtra-and-pos-branch-ep.service';
import { XtraAndPosBuyOfferPricesEpService } from './services/xtra-and-pos-buy-offer-prices-ep.service';
import { XtraAndPosCityService } from './services/xtra-and-pos-city.service';
import { XtraAndPosClientEpService } from './services/xtra-and-pos-client-ep.service';
import { XtraAndPosCompanySettingEpService } from './services/xtra-and-pos-company-setting-ep.service';
import { XtraAndPosCostCenterEpService } from './services/xtra-and-pos-cost-center-ep.service';
import { XtraAndPosCountryService } from './services/xtra-and-pos-country.service';
import { XtraAndPosDailyMovmentEpService } from './services/xtra-and-pos-daily-movment-ep.service';
import { XtraAndPosDefaultOptionsEpService } from './services/xtra-and-pos-default-options-ep.service';
import { XtraAndPosDocTypesService } from './services/xtra-and-pos-doc-types.service';
import { XtraAndPosEmployeeAllowanceTrxService } from './services/xtra-and-pos-employee-allowance-trx.service';
import { XtraAndPosEmployeeContractService } from './services/xtra-and-pos-employee-contract.service';
import { XtraAndPosEmployeeContractTrxService } from './services/xtra-and-pos-employee-contract-trx.service';
import { XtraAndPosEmployeeEpService } from './services/xtra-and-pos-employee-ep.service';
import { XtraAndPosEmployeeSettingService } from './services/xtra-and-pos-employee-setting.service';
import { XtraAndPosEmployeeVacationsService } from './services/xtra-and-pos-employee-vacations.service';
import { XtraAndPosEmpVacationTypesService } from './services/xtra-and-pos-emp-vacation-types.service';
import { XtraAndPosExchangeRateEpService } from './services/xtra-and-pos-exchange-rate-ep.service';
import { XtraAndPosFinanceEpService } from './services/xtra-and-pos-finance-ep.service';
import { XtraAndPosGeneralLedgerEpService } from './services/xtra-and-pos-general-ledger-ep.service';
import { XtraAndPosGlobalService } from './services/xtra-and-pos-global.service';
import { XtraAndPosHospitalService } from './services/xtra-and-pos-hospital.service';
import { XtraAndPosHrEmployeeService } from './services/xtra-and-pos-hr-employee.service';
import { XtraAndPosIncomeStatementEpService } from './services/xtra-and-pos-income-statement-ep.service';
import { XtraAndPosItemEpService } from './services/xtra-and-pos-item-ep.service';
import { XtraAndPosJobCategoryService } from './services/xtra-and-pos-job-category.service';
import { XtraAndPosJobDifinitionService } from './services/xtra-and-pos-job-difinition.service';
import { XtraAndPosJobNameService } from './services/xtra-and-pos-job-name.service';
import { XtraAndPosLookUpsService } from './services/xtra-and-pos-look-ups.service';
import { XtraAndPosNationalityService } from './services/xtra-and-pos-nationality.service';
import { XtraAndPosOrgStructLevelsService } from './services/xtra-and-pos-org-struct-levels.service';
import { XtraAndPosOrgStructuresService } from './services/xtra-and-pos-org-structures.service';
import { XtraAndPosResetGlepService } from './services/xtra-and-pos-reset-glep.service';
import { XtraAndPosReturnSaleInvoiceEpService } from './services/xtra-and-pos-return-sale-invoice-ep.service';
import { XtraAndPosSaleInvoiceEpService } from './services/xtra-and-pos-sale-invoice-ep.service';
import { XtraAndPosSaleOfferPricesEpService } from './services/xtra-and-pos-sale-offer-prices-ep.service';
import { XtraAndPosShiftEpService } from './services/xtra-and-pos-shift-ep.service';
import { XtraAndPosSpecializationsService } from './services/xtra-and-pos-specializations.service';
import { XtraAndPosSpendAndReceiveGoodsEpService } from './services/xtra-and-pos-spend-and-receive-goods-ep.service';
import { XtraAndPosStorageEpService } from './services/xtra-and-pos-storage-ep.service';
import { XtraAndPosSupplierEpService } from './services/xtra-and-pos-supplier-ep.service';
import { XtraAndPosTreasuriesEpService } from './services/xtra-and-pos-treasuries-ep.service';
import { XtraAndPosTreasuryEpService } from './services/xtra-and-pos-treasury-ep.service';
import { XtraAndPosWorkCardService } from './services/xtra-and-pos-work-card.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AccountingPeriodEpService,
    BudgetReportEpService,
    BuyInvoiceCostsControllerService,
    BuyOfferTransactionEpService,
    CartEpService,
    ClientContractEpService,
    CollectionInvoiceControllerService,
    CurrencyEpService,
    DashboardEpService,
    DocClassificationEpService,
    DocProjectsEpService,
    ExtraAndPosBankAccountEpService,
    ExtraAndPosBankEpService,
    ExtraAndPosBuyInvoiceEpService,
    ExtraAndPosReturnBuyInvoiceEpService,
    FinancialYearEpService,
    InitGlCreateEpService,
    InitGlReceptEpService,
    ItemOfferEpService,
    ItemUnitEpService,
    LdgerEpService,
    ManageUserEpService,
    NotesInvoiceEpService,
    PortalEpService,
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
    XtraAndPosAllowanceService,
    XtraAndPosBranchEpService,
    XtraAndPosBuyOfferPricesEpService,
    XtraAndPosCityService,
    XtraAndPosClientEpService,
    XtraAndPosCompanySettingEpService,
    XtraAndPosCostCenterEpService,
    XtraAndPosCountryService,
    XtraAndPosDailyMovmentEpService,
    XtraAndPosDefaultOptionsEpService,
    XtraAndPosDocTypesService,
    XtraAndPosEmployeeAllowanceTrxService,
    XtraAndPosEmployeeContractService,
    XtraAndPosEmployeeContractTrxService,
    XtraAndPosEmployeeEpService,
    XtraAndPosEmployeeSettingService,
    XtraAndPosEmployeeVacationsService,
    XtraAndPosEmpVacationTypesService,
    XtraAndPosExchangeRateEpService,
    XtraAndPosFinanceEpService,
    XtraAndPosGeneralLedgerEpService,
    XtraAndPosGlobalService,
    XtraAndPosHospitalService,
    XtraAndPosHrEmployeeService,
    XtraAndPosIncomeStatementEpService,
    XtraAndPosItemEpService,
    XtraAndPosJobCategoryService,
    XtraAndPosJobDifinitionService,
    XtraAndPosJobNameService,
    XtraAndPosLookUpsService,
    XtraAndPosNationalityService,
    XtraAndPosOrgStructLevelsService,
    XtraAndPosOrgStructuresService,
    XtraAndPosResetGlepService,
    XtraAndPosReturnSaleInvoiceEpService,
    XtraAndPosSaleInvoiceEpService,
    XtraAndPosSaleOfferPricesEpService,
    XtraAndPosShiftEpService,
    XtraAndPosSpecializationsService,
    XtraAndPosSpendAndReceiveGoodsEpService,
    XtraAndPosStorageEpService,
    XtraAndPosSupplierEpService,
    XtraAndPosTreasuriesEpService,
    XtraAndPosTreasuryEpService,
    XtraAndPosWorkCardService,
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
