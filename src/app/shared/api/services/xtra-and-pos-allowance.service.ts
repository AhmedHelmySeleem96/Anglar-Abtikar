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

import { AllowanceDto } from '../models/allowance-dto';

@Injectable({ providedIn: 'root' })
export class XtraAndPosAllowanceService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpPostXtraAndPosAllowanceCreateAllowanceService()` */
  static readonly HttpPostXtraAndPosAllowanceCreateAllowanceServicePath = '/XtraAndPOS_Allowance/CreateAllowanceService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosAllowanceCreateAllowanceService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosAllowanceCreateAllowanceService$Response(
    params?: {
      body?: AllowanceDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosAllowanceService.HttpPostXtraAndPosAllowanceCreateAllowanceServicePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosAllowanceCreateAllowanceService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosAllowanceCreateAllowanceService(
    params?: {
      body?: AllowanceDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosAllowanceCreateAllowanceService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutXtraAndPosAllowanceUpdateAllowanceService()` */
  static readonly HttpPutXtraAndPosAllowanceUpdateAllowanceServicePath = '/XtraAndPOS_Allowance/UpdateAllowanceService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutXtraAndPosAllowanceUpdateAllowanceService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosAllowanceUpdateAllowanceService$Response(
    params: {
      id: number;
      body?: AllowanceDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosAllowanceService.HttpPutXtraAndPosAllowanceUpdateAllowanceServicePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutXtraAndPosAllowanceUpdateAllowanceService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosAllowanceUpdateAllowanceService(
    params: {
      id: number;
      body?: AllowanceDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutXtraAndPosAllowanceUpdateAllowanceService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteXtraAndPosAllowanceDeleteAllowanceService()` */
  static readonly HttpDeleteXtraAndPosAllowanceDeleteAllowanceServicePath = '/XtraAndPOS_Allowance/DeleteAllowanceService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteXtraAndPosAllowanceDeleteAllowanceService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosAllowanceDeleteAllowanceService$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosAllowanceService.HttpDeleteXtraAndPosAllowanceDeleteAllowanceServicePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteXtraAndPosAllowanceDeleteAllowanceService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosAllowanceDeleteAllowanceService(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteXtraAndPosAllowanceDeleteAllowanceService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosAllowanceGetAllowanceService()` */
  static readonly HttpGetXtraAndPosAllowanceGetAllowanceServicePath = '/XtraAndPOS_Allowance/GetAllowanceService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosAllowanceGetAllowanceService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosAllowanceGetAllowanceService$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosAllowanceService.HttpGetXtraAndPosAllowanceGetAllowanceServicePath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosAllowanceGetAllowanceService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosAllowanceGetAllowanceService(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosAllowanceGetAllowanceService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
