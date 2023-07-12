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

import { NationalitiesDto } from '../models/nationalities-dto';

@Injectable({ providedIn: 'root' })
export class XtraAndPosNationalityService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpPostXtraAndPosNationalityCreateNationalityService()` */
  static readonly HttpPostXtraAndPosNationalityCreateNationalityServicePath = '/XtraAndPOS_Nationality/CreateNationalityService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosNationalityCreateNationalityService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosNationalityCreateNationalityService$Response(
    params?: {
      body?: NationalitiesDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosNationalityService.HttpPostXtraAndPosNationalityCreateNationalityServicePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosNationalityCreateNationalityService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosNationalityCreateNationalityService(
    params?: {
      body?: NationalitiesDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosNationalityCreateNationalityService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutXtraAndPosNationalityUpdateNationalityService()` */
  static readonly HttpPutXtraAndPosNationalityUpdateNationalityServicePath = '/XtraAndPOS_Nationality/UpdateNationalityService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutXtraAndPosNationalityUpdateNationalityService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosNationalityUpdateNationalityService$Response(
    params: {
      id: number;
      body?: NationalitiesDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosNationalityService.HttpPutXtraAndPosNationalityUpdateNationalityServicePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutXtraAndPosNationalityUpdateNationalityService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosNationalityUpdateNationalityService(
    params: {
      id: number;
      body?: NationalitiesDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutXtraAndPosNationalityUpdateNationalityService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteXtraAndPosNationalityDeleteNationalityService()` */
  static readonly HttpDeleteXtraAndPosNationalityDeleteNationalityServicePath = '/XtraAndPOS_Nationality/DeleteNationalityService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteXtraAndPosNationalityDeleteNationalityService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosNationalityDeleteNationalityService$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosNationalityService.HttpDeleteXtraAndPosNationalityDeleteNationalityServicePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteXtraAndPosNationalityDeleteNationalityService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosNationalityDeleteNationalityService(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteXtraAndPosNationalityDeleteNationalityService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosNationalityGetNationalityService()` */
  static readonly HttpGetXtraAndPosNationalityGetNationalityServicePath = '/XtraAndPOS_Nationality/GetNationalityService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosNationalityGetNationalityService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosNationalityGetNationalityService$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosNationalityService.HttpGetXtraAndPosNationalityGetNationalityServicePath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosNationalityGetNationalityService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosNationalityGetNationalityService(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosNationalityGetNationalityService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
