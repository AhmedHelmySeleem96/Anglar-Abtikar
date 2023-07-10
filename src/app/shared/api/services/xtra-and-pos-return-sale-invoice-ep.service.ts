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

import { RequestResult } from '../models/request-result';
import { SaleInvoiceReturn } from '../models/sale-invoice-return';
import { SearchModel } from '../models/search-model';

@Injectable({ providedIn: 'root' })
export class XtraAndPosReturnSaleInvoiceEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetExtraAndPosReturnSaleInvoiceGetByNo()` */
  static readonly HttpGetExtraAndPosReturnSaleInvoiceGetByNoPath = '/ExtraAndPOS_ReturnSaleInvoice/GetByNo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosReturnSaleInvoiceGetByNo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosReturnSaleInvoiceGetByNo$Response(
    params: {
      data: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosReturnSaleInvoiceEpService.HttpGetExtraAndPosReturnSaleInvoiceGetByNoPath, 'get');
    if (params) {
      rb.query('data', params.data, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosReturnSaleInvoiceGetByNo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosReturnSaleInvoiceGetByNo(
    params: {
      data: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosReturnSaleInvoiceGetByNo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosReturnSaleInvoiceReturn()` */
  static readonly HttpPostExtraAndPosReturnSaleInvoiceReturnPath = '/ExtraAndPOS_ReturnSaleInvoice/Return';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosReturnSaleInvoiceReturn()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosReturnSaleInvoiceReturn$Response(
    params?: {
      body?: SaleInvoiceReturn
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosReturnSaleInvoiceEpService.HttpPostExtraAndPosReturnSaleInvoiceReturnPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosReturnSaleInvoiceReturn$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosReturnSaleInvoiceReturn(
    params?: {
      body?: SaleInvoiceReturn
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosReturnSaleInvoiceReturn$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetExtraAndPosReturnSaleInvoiceManagementInfo()` */
  static readonly HttpGetExtraAndPosReturnSaleInvoiceManagementInfoPath = '/ExtraAndPOS_ReturnSaleInvoice/ManagementInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosReturnSaleInvoiceManagementInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosReturnSaleInvoiceManagementInfo$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosReturnSaleInvoiceEpService.HttpGetExtraAndPosReturnSaleInvoiceManagementInfoPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosReturnSaleInvoiceManagementInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosReturnSaleInvoiceManagementInfo(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosReturnSaleInvoiceManagementInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosReturnSaleInvoiceGetByArrow()` */
  static readonly HttpPostExtraAndPosReturnSaleInvoiceGetByArrowPath = '/ExtraAndPOS_ReturnSaleInvoice/GetByArrow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosReturnSaleInvoiceGetByArrow()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosReturnSaleInvoiceGetByArrow$Response(
    params?: {
      body?: RequestResult
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosReturnSaleInvoiceEpService.HttpPostExtraAndPosReturnSaleInvoiceGetByArrowPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosReturnSaleInvoiceGetByArrow$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosReturnSaleInvoiceGetByArrow(
    params?: {
      body?: RequestResult
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosReturnSaleInvoiceGetByArrow$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosReturnSaleInvoiceList()` */
  static readonly HttpPostExtraAndPosReturnSaleInvoiceListPath = '/ExtraAndPOS_ReturnSaleInvoice/List';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosReturnSaleInvoiceList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosReturnSaleInvoiceList$Response(
    params?: {
      body?: SearchModel
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosReturnSaleInvoiceEpService.HttpPostExtraAndPosReturnSaleInvoiceListPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosReturnSaleInvoiceList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosReturnSaleInvoiceList(
    params?: {
      body?: SearchModel
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosReturnSaleInvoiceList$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteExtraAndPosReturnSaleInvoiceDeleteReturnSaleInvoice()` */
  static readonly HttpDeleteExtraAndPosReturnSaleInvoiceDeleteReturnSaleInvoicePath = '/ExtraAndPOS_ReturnSaleInvoice/DeleteReturnSaleInvoice';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteExtraAndPosReturnSaleInvoiceDeleteReturnSaleInvoice()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosReturnSaleInvoiceDeleteReturnSaleInvoice$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosReturnSaleInvoiceEpService.HttpDeleteExtraAndPosReturnSaleInvoiceDeleteReturnSaleInvoicePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteExtraAndPosReturnSaleInvoiceDeleteReturnSaleInvoice$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosReturnSaleInvoiceDeleteReturnSaleInvoice(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteExtraAndPosReturnSaleInvoiceDeleteReturnSaleInvoice$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosReturnSaleInvoiceCustomerInvoice()` */
  static readonly HttpPostExtraAndPosReturnSaleInvoiceCustomerInvoicePath = '/ExtraAndPOS_ReturnSaleInvoice/CustomerInvoice';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosReturnSaleInvoiceCustomerInvoice()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpPostExtraAndPosReturnSaleInvoiceCustomerInvoice$Response(
    params: {
      data: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosReturnSaleInvoiceEpService.HttpPostExtraAndPosReturnSaleInvoiceCustomerInvoicePath, 'post');
    if (params) {
      rb.query('data', params.data, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosReturnSaleInvoiceCustomerInvoice$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpPostExtraAndPosReturnSaleInvoiceCustomerInvoice(
    params: {
      data: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosReturnSaleInvoiceCustomerInvoice$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
