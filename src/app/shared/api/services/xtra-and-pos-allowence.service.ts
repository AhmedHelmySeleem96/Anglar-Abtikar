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

import { AllowenceDto } from '../models/allowence-dto';

@Injectable({ providedIn: 'root' })
export class XtraAndPosAllowenceService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpPostXtraAndPosAllowenceCreateAllowenceService()` */
  static readonly HttpPostXtraAndPosAllowenceCreateAllowenceServicePath = '/XtraAndPOS_Allowence/CreateAllowenceService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosAllowenceCreateAllowenceService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosAllowenceCreateAllowenceService$Response(
    params?: {
      body?: AllowenceDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosAllowenceService.HttpPostXtraAndPosAllowenceCreateAllowenceServicePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosAllowenceCreateAllowenceService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosAllowenceCreateAllowenceService(
    params?: {
      body?: AllowenceDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosAllowenceCreateAllowenceService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutXtraAndPosAllowenceUpdateAllowenceService()` */
  static readonly HttpPutXtraAndPosAllowenceUpdateAllowenceServicePath = '/XtraAndPOS_Allowence/UpdateAllowenceService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutXtraAndPosAllowenceUpdateAllowenceService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosAllowenceUpdateAllowenceService$Response(
    params: {
      id: number;
      body?: AllowenceDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosAllowenceService.HttpPutXtraAndPosAllowenceUpdateAllowenceServicePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutXtraAndPosAllowenceUpdateAllowenceService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosAllowenceUpdateAllowenceService(
    params: {
      id: number;
      body?: AllowenceDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutXtraAndPosAllowenceUpdateAllowenceService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteXtraAndPosAllowenceDeleteAllowenceService()` */
  static readonly HttpDeleteXtraAndPosAllowenceDeleteAllowenceServicePath = '/XtraAndPOS_Allowence/DeleteAllowenceService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteXtraAndPosAllowenceDeleteAllowenceService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosAllowenceDeleteAllowenceService$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosAllowenceService.HttpDeleteXtraAndPosAllowenceDeleteAllowenceServicePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteXtraAndPosAllowenceDeleteAllowenceService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosAllowenceDeleteAllowenceService(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteXtraAndPosAllowenceDeleteAllowenceService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosAllowenceGetAllowenceService()` */
  static readonly HttpGetXtraAndPosAllowenceGetAllowenceServicePath = '/XtraAndPOS_Allowence/GetAllowenceService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosAllowenceGetAllowenceService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosAllowenceGetAllowenceService$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosAllowenceService.HttpGetXtraAndPosAllowenceGetAllowenceServicePath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosAllowenceGetAllowenceService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosAllowenceGetAllowenceService(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosAllowenceGetAllowenceService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
