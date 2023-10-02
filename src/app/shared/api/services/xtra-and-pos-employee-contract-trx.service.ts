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

import { EmployeeContractTrxDto } from '../models/employee-contract-trx-dto';

@Injectable({ providedIn: 'root' })
export class XtraAndPosEmployeeContractTrxService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpPostXtraAndPosEmployeeContractTrxCreateEmployeeContractTrxService()` */
  static readonly HttpPostXtraAndPosEmployeeContractTrxCreateEmployeeContractTrxServicePath = '/XtraAndPOS_EmployeeContractTrx/CreateEmployeeContractTrxService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosEmployeeContractTrxCreateEmployeeContractTrxService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosEmployeeContractTrxCreateEmployeeContractTrxService$Response(
    params?: {
      body?: EmployeeContractTrxDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeContractTrxService.HttpPostXtraAndPosEmployeeContractTrxCreateEmployeeContractTrxServicePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosEmployeeContractTrxCreateEmployeeContractTrxService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosEmployeeContractTrxCreateEmployeeContractTrxService(
    params?: {
      body?: EmployeeContractTrxDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosEmployeeContractTrxCreateEmployeeContractTrxService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutXtraAndPosEmployeeContractTrxUpdateEmployeeContractTrxService()` */
  static readonly HttpPutXtraAndPosEmployeeContractTrxUpdateEmployeeContractTrxServicePath = '/XtraAndPOS_EmployeeContractTrx/UpdateEmployeeContractTrxService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutXtraAndPosEmployeeContractTrxUpdateEmployeeContractTrxService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosEmployeeContractTrxUpdateEmployeeContractTrxService$Response(
    params: {
      id: number;
      body?: EmployeeContractTrxDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeContractTrxService.HttpPutXtraAndPosEmployeeContractTrxUpdateEmployeeContractTrxServicePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutXtraAndPosEmployeeContractTrxUpdateEmployeeContractTrxService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosEmployeeContractTrxUpdateEmployeeContractTrxService(
    params: {
      id: number;
      body?: EmployeeContractTrxDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutXtraAndPosEmployeeContractTrxUpdateEmployeeContractTrxService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteXtraAndPosEmployeeContractTrxDeleteEmployeeContractTrxService()` */
  static readonly HttpDeleteXtraAndPosEmployeeContractTrxDeleteEmployeeContractTrxServicePath = '/XtraAndPOS_EmployeeContractTrx/DeleteEmployeeContractTrxService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteXtraAndPosEmployeeContractTrxDeleteEmployeeContractTrxService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosEmployeeContractTrxDeleteEmployeeContractTrxService$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeContractTrxService.HttpDeleteXtraAndPosEmployeeContractTrxDeleteEmployeeContractTrxServicePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteXtraAndPosEmployeeContractTrxDeleteEmployeeContractTrxService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosEmployeeContractTrxDeleteEmployeeContractTrxService(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteXtraAndPosEmployeeContractTrxDeleteEmployeeContractTrxService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosEmployeeContractTrxGetEmployeeContractTrxService()` */
  static readonly HttpGetXtraAndPosEmployeeContractTrxGetEmployeeContractTrxServicePath = '/XtraAndPOS_EmployeeContractTrx/GetEmployeeContractTrxService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosEmployeeContractTrxGetEmployeeContractTrxService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosEmployeeContractTrxGetEmployeeContractTrxService$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeContractTrxService.HttpGetXtraAndPosEmployeeContractTrxGetEmployeeContractTrxServicePath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosEmployeeContractTrxGetEmployeeContractTrxService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosEmployeeContractTrxGetEmployeeContractTrxService(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosEmployeeContractTrxGetEmployeeContractTrxService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
