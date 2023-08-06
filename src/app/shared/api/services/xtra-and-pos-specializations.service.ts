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

import { SpecializationsDto } from '../models/specializations-dto';

@Injectable({ providedIn: 'root' })
export class XtraAndPosSpecializationsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpPostXtraAndPosSpecializationsCreateSpecializationsService()` */
  static readonly HttpPostXtraAndPosSpecializationsCreateSpecializationsServicePath = '/XtraAndPOS_Specializations/CreateSpecializationsService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosSpecializationsCreateSpecializationsService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosSpecializationsCreateSpecializationsService$Response(
    params?: {
      body?: SpecializationsDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosSpecializationsService.HttpPostXtraAndPosSpecializationsCreateSpecializationsServicePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosSpecializationsCreateSpecializationsService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosSpecializationsCreateSpecializationsService(
    params?: {
      body?: SpecializationsDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosSpecializationsCreateSpecializationsService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutXtraAndPosSpecializationsUpdateSpecializationsService()` */
  static readonly HttpPutXtraAndPosSpecializationsUpdateSpecializationsServicePath = '/XtraAndPOS_Specializations/UpdateSpecializationsService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutXtraAndPosSpecializationsUpdateSpecializationsService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosSpecializationsUpdateSpecializationsService$Response(
    params: {
      id: number;
      body?: SpecializationsDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosSpecializationsService.HttpPutXtraAndPosSpecializationsUpdateSpecializationsServicePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutXtraAndPosSpecializationsUpdateSpecializationsService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosSpecializationsUpdateSpecializationsService(
    params: {
      id: number;
      body?: SpecializationsDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutXtraAndPosSpecializationsUpdateSpecializationsService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteXtraAndPosSpecializationsDeleteSpecializationsService()` */
  static readonly HttpDeleteXtraAndPosSpecializationsDeleteSpecializationsServicePath = '/XtraAndPOS_Specializations/DeleteSpecializationsService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteXtraAndPosSpecializationsDeleteSpecializationsService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosSpecializationsDeleteSpecializationsService$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosSpecializationsService.HttpDeleteXtraAndPosSpecializationsDeleteSpecializationsServicePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteXtraAndPosSpecializationsDeleteSpecializationsService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosSpecializationsDeleteSpecializationsService(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteXtraAndPosSpecializationsDeleteSpecializationsService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosSpecializationsGetSpecializationsService()` */
  static readonly HttpGetXtraAndPosSpecializationsGetSpecializationsServicePath = '/XtraAndPOS_Specializations/GetSpecializationsService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosSpecializationsGetSpecializationsService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosSpecializationsGetSpecializationsService$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosSpecializationsService.HttpGetXtraAndPosSpecializationsGetSpecializationsServicePath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosSpecializationsGetSpecializationsService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosSpecializationsGetSpecializationsService(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosSpecializationsGetSpecializationsService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
