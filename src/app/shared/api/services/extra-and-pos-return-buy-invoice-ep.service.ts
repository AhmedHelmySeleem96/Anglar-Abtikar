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

import { BuyInvoiceReturn } from '../models/buy-invoice-return';
import { RequestResult } from '../models/request-result';
import { SearchModel } from '../models/search-model';

@Injectable({ providedIn: 'root' })
export class ExtraAndPosReturnBuyInvoiceEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetExtraAndPosReturnBuyInvoiceGetByNo()` */
  static readonly HttpGetExtraAndPosReturnBuyInvoiceGetByNoPath = '/ExtraAndPOS_ReturnBuyInvoice/GetByNo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosReturnBuyInvoiceGetByNo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosReturnBuyInvoiceGetByNo$Response(
    params: {
      data: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ExtraAndPosReturnBuyInvoiceEpService.HttpGetExtraAndPosReturnBuyInvoiceGetByNoPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosReturnBuyInvoiceGetByNo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosReturnBuyInvoiceGetByNo(
    params: {
      data: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosReturnBuyInvoiceGetByNo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosReturnBuyInvoiceReturn()` */
  static readonly HttpPostExtraAndPosReturnBuyInvoiceReturnPath = '/ExtraAndPOS_ReturnBuyInvoice/Return';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosReturnBuyInvoiceReturn()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosReturnBuyInvoiceReturn$Response(
    params?: {
      body?: BuyInvoiceReturn
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ExtraAndPosReturnBuyInvoiceEpService.HttpPostExtraAndPosReturnBuyInvoiceReturnPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosReturnBuyInvoiceReturn$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosReturnBuyInvoiceReturn(
    params?: {
      body?: BuyInvoiceReturn
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosReturnBuyInvoiceReturn$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosReturnBuyInvoiceCustomerInvoice()` */
  static readonly HttpPostExtraAndPosReturnBuyInvoiceCustomerInvoicePath = '/ExtraAndPOS_ReturnBuyInvoice/CustomerInvoice';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosReturnBuyInvoiceCustomerInvoice()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpPostExtraAndPosReturnBuyInvoiceCustomerInvoice$Response(
    params: {
      data: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ExtraAndPosReturnBuyInvoiceEpService.HttpPostExtraAndPosReturnBuyInvoiceCustomerInvoicePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosReturnBuyInvoiceCustomerInvoice$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpPostExtraAndPosReturnBuyInvoiceCustomerInvoice(
    params: {
      data: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosReturnBuyInvoiceCustomerInvoice$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetExtraAndPosReturnBuyInvoiceManagementInfo()` */
  static readonly HttpGetExtraAndPosReturnBuyInvoiceManagementInfoPath = '/ExtraAndPOS_ReturnBuyInvoice/ManagementInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosReturnBuyInvoiceManagementInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosReturnBuyInvoiceManagementInfo$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ExtraAndPosReturnBuyInvoiceEpService.HttpGetExtraAndPosReturnBuyInvoiceManagementInfoPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosReturnBuyInvoiceManagementInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosReturnBuyInvoiceManagementInfo(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosReturnBuyInvoiceManagementInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosReturnBuyInvoiceGetByArrow()` */
  static readonly HttpPostExtraAndPosReturnBuyInvoiceGetByArrowPath = '/ExtraAndPOS_ReturnBuyInvoice/GetByArrow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosReturnBuyInvoiceGetByArrow()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosReturnBuyInvoiceGetByArrow$Response(
    params?: {
      body?: RequestResult
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ExtraAndPosReturnBuyInvoiceEpService.HttpPostExtraAndPosReturnBuyInvoiceGetByArrowPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosReturnBuyInvoiceGetByArrow$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosReturnBuyInvoiceGetByArrow(
    params?: {
      body?: RequestResult
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosReturnBuyInvoiceGetByArrow$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosReturnBuyInvoiceList()` */
  static readonly HttpPostExtraAndPosReturnBuyInvoiceListPath = '/ExtraAndPOS_ReturnBuyInvoice/List';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosReturnBuyInvoiceList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosReturnBuyInvoiceList$Response(
    params?: {
      body?: SearchModel
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ExtraAndPosReturnBuyInvoiceEpService.HttpPostExtraAndPosReturnBuyInvoiceListPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosReturnBuyInvoiceList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosReturnBuyInvoiceList(
    params?: {
      body?: SearchModel
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosReturnBuyInvoiceList$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
