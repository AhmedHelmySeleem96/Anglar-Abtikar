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

import { EmployeeSettingDto } from '../models/employee-setting-dto';

@Injectable({ providedIn: 'root' })
export class XtraAndPosEmployeeSettingService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpPostXtraAndPosEmployeeSettingCreateEmployeeSettingService()` */
  static readonly HttpPostXtraAndPosEmployeeSettingCreateEmployeeSettingServicePath = '/XtraAndPOS_EmployeeSetting/CreateEmployeeSettingService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosEmployeeSettingCreateEmployeeSettingService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosEmployeeSettingCreateEmployeeSettingService$Response(
    params?: {
      body?: EmployeeSettingDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeSettingService.HttpPostXtraAndPosEmployeeSettingCreateEmployeeSettingServicePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosEmployeeSettingCreateEmployeeSettingService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosEmployeeSettingCreateEmployeeSettingService(
    params?: {
      body?: EmployeeSettingDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosEmployeeSettingCreateEmployeeSettingService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutXtraAndPosEmployeeSettingUpdateEmployeeSettingService()` */
  static readonly HttpPutXtraAndPosEmployeeSettingUpdateEmployeeSettingServicePath = '/XtraAndPOS_EmployeeSetting/UpdateEmployeeSettingService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutXtraAndPosEmployeeSettingUpdateEmployeeSettingService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosEmployeeSettingUpdateEmployeeSettingService$Response(
    params: {
      id: number;
      body?: EmployeeSettingDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeSettingService.HttpPutXtraAndPosEmployeeSettingUpdateEmployeeSettingServicePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutXtraAndPosEmployeeSettingUpdateEmployeeSettingService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosEmployeeSettingUpdateEmployeeSettingService(
    params: {
      id: number;
      body?: EmployeeSettingDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutXtraAndPosEmployeeSettingUpdateEmployeeSettingService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteXtraAndPosEmployeeSettingDeleteEmployeeSettingService()` */
  static readonly HttpDeleteXtraAndPosEmployeeSettingDeleteEmployeeSettingServicePath = '/XtraAndPOS_EmployeeSetting/DeleteEmployeeSettingService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteXtraAndPosEmployeeSettingDeleteEmployeeSettingService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosEmployeeSettingDeleteEmployeeSettingService$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeSettingService.HttpDeleteXtraAndPosEmployeeSettingDeleteEmployeeSettingServicePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteXtraAndPosEmployeeSettingDeleteEmployeeSettingService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosEmployeeSettingDeleteEmployeeSettingService(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteXtraAndPosEmployeeSettingDeleteEmployeeSettingService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosEmployeeSettingGetEmployeeSettingService()` */
  static readonly HttpGetXtraAndPosEmployeeSettingGetEmployeeSettingServicePath = '/XtraAndPOS_EmployeeSetting/GetEmployeeSettingService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosEmployeeSettingGetEmployeeSettingService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosEmployeeSettingGetEmployeeSettingService$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeSettingService.HttpGetXtraAndPosEmployeeSettingGetEmployeeSettingServicePath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosEmployeeSettingGetEmployeeSettingService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosEmployeeSettingGetEmployeeSettingService(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosEmployeeSettingGetEmployeeSettingService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
