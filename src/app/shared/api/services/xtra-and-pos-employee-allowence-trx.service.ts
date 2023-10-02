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

import { EmployeeAllowenceTrxDto } from '../models/employee-allowence-trx-dto';

@Injectable({ providedIn: 'root' })
export class XtraAndPosEmployeeAllowenceTrxService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpPostXtraAndPosEmployeeAllowenceTrxCreateEmployeeAllowenceTrxService()` */
  static readonly HttpPostXtraAndPosEmployeeAllowenceTrxCreateEmployeeAllowenceTrxServicePath = '/XtraAndPOS_EmployeeAllowenceTrx/CreateEmployeeAllowenceTrxService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosEmployeeAllowenceTrxCreateEmployeeAllowenceTrxService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosEmployeeAllowenceTrxCreateEmployeeAllowenceTrxService$Response(
    params?: {
      body?: EmployeeAllowenceTrxDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeAllowenceTrxService.HttpPostXtraAndPosEmployeeAllowenceTrxCreateEmployeeAllowenceTrxServicePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosEmployeeAllowenceTrxCreateEmployeeAllowenceTrxService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosEmployeeAllowenceTrxCreateEmployeeAllowenceTrxService(
    params?: {
      body?: EmployeeAllowenceTrxDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosEmployeeAllowenceTrxCreateEmployeeAllowenceTrxService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutXtraAndPosEmployeeAllowenceTrxUpdateEmployeeAllowenceTrxService()` */
  static readonly HttpPutXtraAndPosEmployeeAllowenceTrxUpdateEmployeeAllowenceTrxServicePath = '/XtraAndPOS_EmployeeAllowenceTrx/UpdateEmployeeAllowenceTrxService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutXtraAndPosEmployeeAllowenceTrxUpdateEmployeeAllowenceTrxService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosEmployeeAllowenceTrxUpdateEmployeeAllowenceTrxService$Response(
    params: {
      id: number;
      body?: EmployeeAllowenceTrxDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeAllowenceTrxService.HttpPutXtraAndPosEmployeeAllowenceTrxUpdateEmployeeAllowenceTrxServicePath, 'put');
    if (params) {
      rb.query('id', params.id, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpPutXtraAndPosEmployeeAllowenceTrxUpdateEmployeeAllowenceTrxService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosEmployeeAllowenceTrxUpdateEmployeeAllowenceTrxService(
    params: {
      id: number;
      body?: EmployeeAllowenceTrxDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutXtraAndPosEmployeeAllowenceTrxUpdateEmployeeAllowenceTrxService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteXtraAndPosEmployeeAllowenceTrxDeleteEmployeeAllowenceTrxService()` */
  static readonly HttpDeleteXtraAndPosEmployeeAllowenceTrxDeleteEmployeeAllowenceTrxServicePath = '/XtraAndPOS_EmployeeAllowenceTrx/DeleteEmployeeAllowenceTrxService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteXtraAndPosEmployeeAllowenceTrxDeleteEmployeeAllowenceTrxService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosEmployeeAllowenceTrxDeleteEmployeeAllowenceTrxService$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeAllowenceTrxService.HttpDeleteXtraAndPosEmployeeAllowenceTrxDeleteEmployeeAllowenceTrxServicePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteXtraAndPosEmployeeAllowenceTrxDeleteEmployeeAllowenceTrxService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosEmployeeAllowenceTrxDeleteEmployeeAllowenceTrxService(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteXtraAndPosEmployeeAllowenceTrxDeleteEmployeeAllowenceTrxService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosEmployeeAllowenceTrxGetEmployeeAllowenceTrxService()` */
  static readonly HttpGetXtraAndPosEmployeeAllowenceTrxGetEmployeeAllowenceTrxServicePath = '/XtraAndPOS_EmployeeAllowenceTrx/GetEmployeeAllowenceTrxService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosEmployeeAllowenceTrxGetEmployeeAllowenceTrxService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosEmployeeAllowenceTrxGetEmployeeAllowenceTrxService$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeAllowenceTrxService.HttpGetXtraAndPosEmployeeAllowenceTrxGetEmployeeAllowenceTrxServicePath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosEmployeeAllowenceTrxGetEmployeeAllowenceTrxService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosEmployeeAllowenceTrxGetEmployeeAllowenceTrxService(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosEmployeeAllowenceTrxGetEmployeeAllowenceTrxService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
