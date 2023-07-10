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

import { CostInvoiceDto } from '../models/cost-invoice-dto';

@Injectable({ providedIn: 'root' })
export class BuyInvoiceCostsControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetBuyInvoiceCostsGetAll()` */
  static readonly HttpGetBuyInvoiceCostsGetAllPath = '/BuyInvoiceCosts/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetBuyInvoiceCostsGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetBuyInvoiceCostsGetAll$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, BuyInvoiceCostsControllerService.HttpGetBuyInvoiceCostsGetAllPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetBuyInvoiceCostsGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetBuyInvoiceCostsGetAll(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetBuyInvoiceCostsGetAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostBuyInvoiceCostsCreate()` */
  static readonly HttpPostBuyInvoiceCostsCreatePath = '/BuyInvoiceCosts/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostBuyInvoiceCostsCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostBuyInvoiceCostsCreate$Response(
    params?: {
      body?: CostInvoiceDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, BuyInvoiceCostsControllerService.HttpPostBuyInvoiceCostsCreatePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostBuyInvoiceCostsCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostBuyInvoiceCostsCreate(
    params?: {
      body?: CostInvoiceDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostBuyInvoiceCostsCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutBuyInvoiceCostsUpdate()` */
  static readonly HttpPutBuyInvoiceCostsUpdatePath = '/BuyInvoiceCosts/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutBuyInvoiceCostsUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutBuyInvoiceCostsUpdate$Response(
    params?: {
      body?: CostInvoiceDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, BuyInvoiceCostsControllerService.HttpPutBuyInvoiceCostsUpdatePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutBuyInvoiceCostsUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutBuyInvoiceCostsUpdate(
    params?: {
      body?: CostInvoiceDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutBuyInvoiceCostsUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteBuyInvoiceCostsDelete()` */
  static readonly HttpDeleteBuyInvoiceCostsDeletePath = '/BuyInvoiceCosts/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteBuyInvoiceCostsDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteBuyInvoiceCostsDelete$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, BuyInvoiceCostsControllerService.HttpDeleteBuyInvoiceCostsDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteBuyInvoiceCostsDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteBuyInvoiceCostsDelete(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteBuyInvoiceCostsDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
