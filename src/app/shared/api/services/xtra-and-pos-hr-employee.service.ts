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

import { HrEmployeeDto } from '../models/hr-employee-dto';

@Injectable({ providedIn: 'root' })
export class XtraAndPosHrEmployeeService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpPostXtraAndPosHrEmployeeCreateHrEmployeeService()` */
  static readonly HttpPostXtraAndPosHrEmployeeCreateHrEmployeeServicePath = '/XtraAndPOS_HREmployee/CreateHREmployeeService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosHrEmployeeCreateHrEmployeeService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosHrEmployeeCreateHrEmployeeService$Response(
    params?: {
      body?: HrEmployeeDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosHrEmployeeService.HttpPostXtraAndPosHrEmployeeCreateHrEmployeeServicePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosHrEmployeeCreateHrEmployeeService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosHrEmployeeCreateHrEmployeeService(
    params?: {
      body?: HrEmployeeDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosHrEmployeeCreateHrEmployeeService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutXtraAndPosHrEmployeeUpdateHrEmployeeService()` */
  static readonly HttpPutXtraAndPosHrEmployeeUpdateHrEmployeeServicePath = '/XtraAndPOS_HREmployee/UpdateHREmployeeService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutXtraAndPosHrEmployeeUpdateHrEmployeeService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosHrEmployeeUpdateHrEmployeeService$Response(
    params: {
      id: number;
      body?: HrEmployeeDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosHrEmployeeService.HttpPutXtraAndPosHrEmployeeUpdateHrEmployeeServicePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutXtraAndPosHrEmployeeUpdateHrEmployeeService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosHrEmployeeUpdateHrEmployeeService(
    params: {
      id: number;
      body?: HrEmployeeDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutXtraAndPosHrEmployeeUpdateHrEmployeeService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteXtraAndPosHrEmployeeDeleteHrEmployeeService()` */
  static readonly HttpDeleteXtraAndPosHrEmployeeDeleteHrEmployeeServicePath = '/XtraAndPOS_HREmployee/DeleteHREmployeeService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteXtraAndPosHrEmployeeDeleteHrEmployeeService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosHrEmployeeDeleteHrEmployeeService$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosHrEmployeeService.HttpDeleteXtraAndPosHrEmployeeDeleteHrEmployeeServicePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteXtraAndPosHrEmployeeDeleteHrEmployeeService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosHrEmployeeDeleteHrEmployeeService(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteXtraAndPosHrEmployeeDeleteHrEmployeeService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosHrEmployeeGetHrEmployeeService()` */
  static readonly HttpGetXtraAndPosHrEmployeeGetHrEmployeeServicePath = '/XtraAndPOS_HREmployee/GetHREmployeeService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosHrEmployeeGetHrEmployeeService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosHrEmployeeGetHrEmployeeService$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosHrEmployeeService.HttpGetXtraAndPosHrEmployeeGetHrEmployeeServicePath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosHrEmployeeGetHrEmployeeService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosHrEmployeeGetHrEmployeeService(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosHrEmployeeGetHrEmployeeService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
