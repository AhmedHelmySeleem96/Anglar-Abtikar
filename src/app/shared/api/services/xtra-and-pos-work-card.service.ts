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

import { WorkCardDto } from '../models/work-card-dto';

@Injectable({ providedIn: 'root' })
export class XtraAndPosWorkCardService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpPostXtraAndPosWorkCardCreateWorkCardService()` */
  static readonly HttpPostXtraAndPosWorkCardCreateWorkCardServicePath = '/XtraAndPOS_WorkCard/CreateWorkCardService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosWorkCardCreateWorkCardService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosWorkCardCreateWorkCardService$Response(
    params?: {
      body?: WorkCardDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosWorkCardService.HttpPostXtraAndPosWorkCardCreateWorkCardServicePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosWorkCardCreateWorkCardService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosWorkCardCreateWorkCardService(
    params?: {
      body?: WorkCardDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosWorkCardCreateWorkCardService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutXtraAndPosWorkCardUpdateWorkCardService()` */
  static readonly HttpPutXtraAndPosWorkCardUpdateWorkCardServicePath = '/XtraAndPOS_WorkCard/UpdateWorkCardService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutXtraAndPosWorkCardUpdateWorkCardService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosWorkCardUpdateWorkCardService$Response(
    params: {
      id: number;
      body?: WorkCardDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosWorkCardService.HttpPutXtraAndPosWorkCardUpdateWorkCardServicePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutXtraAndPosWorkCardUpdateWorkCardService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosWorkCardUpdateWorkCardService(
    params: {
      id: number;
      body?: WorkCardDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutXtraAndPosWorkCardUpdateWorkCardService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteXtraAndPosWorkCardDeleteWorkCardService()` */
  static readonly HttpDeleteXtraAndPosWorkCardDeleteWorkCardServicePath = '/XtraAndPOS_WorkCard/DeleteWorkCardService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteXtraAndPosWorkCardDeleteWorkCardService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosWorkCardDeleteWorkCardService$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosWorkCardService.HttpDeleteXtraAndPosWorkCardDeleteWorkCardServicePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteXtraAndPosWorkCardDeleteWorkCardService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosWorkCardDeleteWorkCardService(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteXtraAndPosWorkCardDeleteWorkCardService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosWorkCardGetWorkCardService()` */
  static readonly HttpGetXtraAndPosWorkCardGetWorkCardServicePath = '/XtraAndPOS_WorkCard/GetWorkCardService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosWorkCardGetWorkCardService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosWorkCardGetWorkCardService$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosWorkCardService.HttpGetXtraAndPosWorkCardGetWorkCardServicePath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosWorkCardGetWorkCardService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosWorkCardGetWorkCardService(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosWorkCardGetWorkCardService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
