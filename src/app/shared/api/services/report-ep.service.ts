/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';

import { ReportLayout } from '../models/report-layout';
import { SearchModel } from '../models/search-model';

@Injectable({ providedIn: 'root' })
export class ReportEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetSaleReportSaleOffer()` */
  static readonly HttpGetSaleReportSaleOfferPath = '/SaleReport/SaleOffer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetSaleReportSaleOffer()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetSaleReportSaleOffer$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ReportEpService.HttpGetSaleReportSaleOfferPath, 'get');
    if (params) {
      rb.query('id', params.id, {"style":"form"});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `httpGetSaleReportSaleOffer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetSaleReportSaleOffer(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetSaleReportSaleOffer$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetSaleReportSaleInovice()` */
  static readonly HttpGetSaleReportSaleInovicePath = '/SaleReport/SaleInovice';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetSaleReportSaleInovice()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetSaleReportSaleInovice$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ReportEpService.HttpGetSaleReportSaleInovicePath, 'get');
    if (params) {
      rb.query('id', params.id, {"style":"form"});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `httpGetSaleReportSaleInovice$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetSaleReportSaleInovice(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetSaleReportSaleInovice$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetSaleReportSaleInoviceReturn()` */
  static readonly HttpGetSaleReportSaleInoviceReturnPath = '/SaleReport/SaleInoviceReturn';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetSaleReportSaleInoviceReturn()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetSaleReportSaleInoviceReturn$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ReportEpService.HttpGetSaleReportSaleInoviceReturnPath, 'get');
    if (params) {
      rb.query('id', params.id, {"style":"form"});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `httpGetSaleReportSaleInoviceReturn$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetSaleReportSaleInoviceReturn(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetSaleReportSaleInoviceReturn$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostSaleReportShiftReport()` */
  static readonly HttpPostSaleReportShiftReportPath = '/SaleReport/ShiftReport';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostSaleReportShiftReport()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostSaleReportShiftReport$Response(
    params?: {
      body?: SearchModel
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ReportEpService.HttpPostSaleReportShiftReportPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `httpPostSaleReportShiftReport$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostSaleReportShiftReport(
    params?: {
      body?: SearchModel
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostSaleReportShiftReport$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostSaleReportSaleInvoiceReport()` */
  static readonly HttpPostSaleReportSaleInvoiceReportPath = '/SaleReport/SaleInvoiceReport';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostSaleReportSaleInvoiceReport()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostSaleReportSaleInvoiceReport$Response(
    params?: {
      body?: SearchModel
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ReportEpService.HttpPostSaleReportSaleInvoiceReportPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `httpPostSaleReportSaleInvoiceReport$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostSaleReportSaleInvoiceReport(
    params?: {
      body?: SearchModel
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostSaleReportSaleInvoiceReport$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetSaleReportCloseShiftReport()` */
  static readonly HttpGetSaleReportCloseShiftReportPath = '/SaleReport/CloseShiftReport';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetSaleReportCloseShiftReport()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetSaleReportCloseShiftReport$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ReportEpService.HttpGetSaleReportCloseShiftReportPath, 'get');
    if (params) {
      rb.query('id', params.id, {"style":"form"});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `httpGetSaleReportCloseShiftReport$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetSaleReportCloseShiftReport(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetSaleReportCloseShiftReport$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetSaleReportGetInvoiceDesign()` */
  static readonly HttpGetSaleReportGetInvoiceDesignPath = '/SaleReport/GetInvoiceDesign';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetSaleReportGetInvoiceDesign()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetSaleReportGetInvoiceDesign$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ReportEpService.HttpGetSaleReportGetInvoiceDesignPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `httpGetSaleReportGetInvoiceDesign$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetSaleReportGetInvoiceDesign(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetSaleReportGetInvoiceDesign$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutSaleReportUpdateInvoiceDesign()` */
  static readonly HttpPutSaleReportUpdateInvoiceDesignPath = '/SaleReport/UpdateInvoiceDesign';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutSaleReportUpdateInvoiceDesign()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutSaleReportUpdateInvoiceDesign$Response(
    params?: {
      body?: ReportLayout
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ReportEpService.HttpPutSaleReportUpdateInvoiceDesignPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `httpPutSaleReportUpdateInvoiceDesign$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutSaleReportUpdateInvoiceDesign(
    params?: {
      body?: ReportLayout
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutSaleReportUpdateInvoiceDesign$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetBuyReportBuyInovice()` */
  static readonly HttpGetBuyReportBuyInovicePath = '/BuyReport/BuyInovice';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetBuyReportBuyInovice()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetBuyReportBuyInovice$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ReportEpService.HttpGetBuyReportBuyInovicePath, 'get');
    if (params) {
      rb.query('id', params.id, {"style":"form"});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `httpGetBuyReportBuyInovice$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetBuyReportBuyInovice(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetBuyReportBuyInovice$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetBuyReportBuyInoviceReturn()` */
  static readonly HttpGetBuyReportBuyInoviceReturnPath = '/BuyReport/BuyInoviceReturn';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetBuyReportBuyInoviceReturn()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetBuyReportBuyInoviceReturn$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ReportEpService.HttpGetBuyReportBuyInoviceReturnPath, 'get');
    if (params) {
      rb.query('id', params.id, {"style":"form"});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `httpGetBuyReportBuyInoviceReturn$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetBuyReportBuyInoviceReturn(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetBuyReportBuyInoviceReturn$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetBuyReportBuyOffer()` */
  static readonly HttpGetBuyReportBuyOfferPath = '/BuyReport/BuyOffer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetBuyReportBuyOffer()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetBuyReportBuyOffer$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ReportEpService.HttpGetBuyReportBuyOfferPath, 'get');
    if (params) {
      rb.query('id', params.id, {"style":"form"});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `httpGetBuyReportBuyOffer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetBuyReportBuyOffer(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetBuyReportBuyOffer$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostStorageReportItemInventory()` */
  static readonly HttpPostStorageReportItemInventoryPath = '/StorageReport/ItemInventory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostStorageReportItemInventory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostStorageReportItemInventory$Response(
    params?: {
      body?: SearchModel
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ReportEpService.HttpPostStorageReportItemInventoryPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `httpPostStorageReportItemInventory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostStorageReportItemInventory(
    params?: {
      body?: SearchModel
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostStorageReportItemInventory$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetStorageReportStorageTransfer()` */
  static readonly HttpGetStorageReportStorageTransferPath = '/StorageReport/StorageTransfer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetStorageReportStorageTransfer()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetStorageReportStorageTransfer$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ReportEpService.HttpGetStorageReportStorageTransferPath, 'get');
    if (params) {
      rb.query('id', params.id, {"style":"form"});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `httpGetStorageReportStorageTransfer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetStorageReportStorageTransfer(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetStorageReportStorageTransfer$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetStorageReportStoreAdjustmentReport()` */
  static readonly HttpGetStorageReportStoreAdjustmentReportPath = '/StorageReport/StoreAdjustmentReport';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetStorageReportStoreAdjustmentReport()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetStorageReportStoreAdjustmentReport$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ReportEpService.HttpGetStorageReportStoreAdjustmentReportPath, 'get');
    if (params) {
      rb.query('id', params.id, {"style":"form"});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `httpGetStorageReportStoreAdjustmentReport$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetStorageReportStoreAdjustmentReport(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetStorageReportStoreAdjustmentReport$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetTreasuryReportTreasuryTransaction()` */
  static readonly HttpGetTreasuryReportTreasuryTransactionPath = '/TreasuryReport/TreasuryTransaction';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetTreasuryReportTreasuryTransaction()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetTreasuryReportTreasuryTransaction$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ReportEpService.HttpGetTreasuryReportTreasuryTransactionPath, 'get');
    if (params) {
      rb.query('id', params.id, {"style":"form"});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `httpGetTreasuryReportTreasuryTransaction$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetTreasuryReportTreasuryTransaction(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetTreasuryReportTreasuryTransaction$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetTreasuryReportTreasuryTransactionOut()` */
  static readonly HttpGetTreasuryReportTreasuryTransactionOutPath = '/TreasuryReport/TreasuryTransactionOut';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetTreasuryReportTreasuryTransactionOut()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetTreasuryReportTreasuryTransactionOut$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ReportEpService.HttpGetTreasuryReportTreasuryTransactionOutPath, 'get');
    if (params) {
      rb.query('id', params.id, {"style":"form"});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `httpGetTreasuryReportTreasuryTransactionOut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetTreasuryReportTreasuryTransactionOut(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetTreasuryReportTreasuryTransactionOut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostGlReportGlDetailsList()` */
  static readonly HttpPostGlReportGlDetailsListPath = '/GLReport/GLDetailsList';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostGlReportGlDetailsList()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpPostGlReportGlDetailsList$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ReportEpService.HttpPostGlReportGlDetailsListPath, 'post');
    if (params) {
      rb.query('id', params.id, {"style":"form"});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `httpPostGlReportGlDetailsList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpPostGlReportGlDetailsList(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostGlReportGlDetailsList$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostInitGlReportInitGlRecept()` */
  static readonly HttpPostInitGlReportInitGlReceptPath = '/InitGlReport/InitGlRecept';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostInitGlReportInitGlRecept()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpPostInitGlReportInitGlRecept$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ReportEpService.HttpPostInitGlReportInitGlReceptPath, 'post');
    if (params) {
      rb.query('id', params.id, {"style":"form"});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `httpPostInitGlReportInitGlRecept$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpPostInitGlReportInitGlRecept(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostInitGlReportInitGlRecept$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostItemAcvityItemActivity()` */
  static readonly HttpPostItemAcvityItemActivityPath = '/ItemAcvity/ItemActivity';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostItemAcvityItemActivity()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpPostItemAcvityItemActivity$Response(
    params?: {
      FromDate?: string;
      ToDate?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ReportEpService.HttpPostItemAcvityItemActivityPath, 'post');
    if (params) {
      rb.query('FromDate', params.FromDate, {"style":"form"});
      rb.query('ToDate', params.ToDate, {"style":"form"});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `httpPostItemAcvityItemActivity$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpPostItemAcvityItemActivity(
    params?: {
      FromDate?: string;
      ToDate?: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostItemAcvityItemActivity$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetIncomeStatementIncomeStatement()` */
  static readonly HttpGetIncomeStatementIncomeStatementPath = '/IncomeStatement/IncomeStatement';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetIncomeStatementIncomeStatement()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetIncomeStatementIncomeStatement$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ReportEpService.HttpGetIncomeStatementIncomeStatementPath, 'get');
    if (params) {
      rb.query('id', params.id, {"style":"form"});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `httpGetIncomeStatementIncomeStatement$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetIncomeStatementIncomeStatement(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetIncomeStatementIncomeStatement$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
