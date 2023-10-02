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

import { EmployeeAllowanceTrxDto } from '../models/employee-allowance-trx-dto';

@Injectable({ providedIn: 'root' })
export class XtraAndPosEmployeeAllowanceTrxService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpPostXtraAndPosEmployeeAllowanceTrxCreateEmployeeAllowanceTrxService()` */
  static readonly HttpPostXtraAndPosEmployeeAllowanceTrxCreateEmployeeAllowanceTrxServicePath = '/XtraAndPOS_EmployeeAllowanceTrx/CreateEmployeeAllowanceTrxService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosEmployeeAllowanceTrxCreateEmployeeAllowanceTrxService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosEmployeeAllowanceTrxCreateEmployeeAllowanceTrxService$Response(
    params?: {
      body?: EmployeeAllowanceTrxDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeAllowanceTrxService.HttpPostXtraAndPosEmployeeAllowanceTrxCreateEmployeeAllowanceTrxServicePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosEmployeeAllowanceTrxCreateEmployeeAllowanceTrxService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosEmployeeAllowanceTrxCreateEmployeeAllowanceTrxService(
    params?: {
      body?: EmployeeAllowanceTrxDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosEmployeeAllowanceTrxCreateEmployeeAllowanceTrxService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutXtraAndPosEmployeeAllowanceTrxUpdateEmployeeAllowanceTrxService()` */
  static readonly HttpPutXtraAndPosEmployeeAllowanceTrxUpdateEmployeeAllowanceTrxServicePath = '/XtraAndPOS_EmployeeAllowanceTrx/UpdateEmployeeAllowanceTrxService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutXtraAndPosEmployeeAllowanceTrxUpdateEmployeeAllowanceTrxService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosEmployeeAllowanceTrxUpdateEmployeeAllowanceTrxService$Response(
    params: {
      id: number;
      body?: EmployeeAllowanceTrxDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeAllowanceTrxService.HttpPutXtraAndPosEmployeeAllowanceTrxUpdateEmployeeAllowanceTrxServicePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutXtraAndPosEmployeeAllowanceTrxUpdateEmployeeAllowanceTrxService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosEmployeeAllowanceTrxUpdateEmployeeAllowanceTrxService(
    params: {
      id: number;
      body?: EmployeeAllowanceTrxDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutXtraAndPosEmployeeAllowanceTrxUpdateEmployeeAllowanceTrxService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteXtraAndPosEmployeeAllowanceTrxDeleteEmployeeAllowanceTrxService()` */
  static readonly HttpDeleteXtraAndPosEmployeeAllowanceTrxDeleteEmployeeAllowanceTrxServicePath = '/XtraAndPOS_EmployeeAllowanceTrx/DeleteEmployeeAllowanceTrxService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteXtraAndPosEmployeeAllowanceTrxDeleteEmployeeAllowanceTrxService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosEmployeeAllowanceTrxDeleteEmployeeAllowanceTrxService$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeAllowanceTrxService.HttpDeleteXtraAndPosEmployeeAllowanceTrxDeleteEmployeeAllowanceTrxServicePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteXtraAndPosEmployeeAllowanceTrxDeleteEmployeeAllowanceTrxService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosEmployeeAllowanceTrxDeleteEmployeeAllowanceTrxService(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteXtraAndPosEmployeeAllowanceTrxDeleteEmployeeAllowanceTrxService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosEmployeeAllowanceTrxGetEmployeeAllowanceTrxService()` */
  static readonly HttpGetXtraAndPosEmployeeAllowanceTrxGetEmployeeAllowanceTrxServicePath = '/XtraAndPOS_EmployeeAllowanceTrx/GetEmployeeAllowanceTrxService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosEmployeeAllowanceTrxGetEmployeeAllowanceTrxService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosEmployeeAllowanceTrxGetEmployeeAllowanceTrxService$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeAllowanceTrxService.HttpGetXtraAndPosEmployeeAllowanceTrxGetEmployeeAllowanceTrxServicePath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosEmployeeAllowanceTrxGetEmployeeAllowanceTrxService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosEmployeeAllowanceTrxGetEmployeeAllowanceTrxService(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosEmployeeAllowanceTrxGetEmployeeAllowanceTrxService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
