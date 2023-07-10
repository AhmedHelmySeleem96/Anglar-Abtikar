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

import { TrailBalance } from '../models/trail-balance';

@Injectable({ providedIn: 'root' })
export class TrailBalanceControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetExtraAndPosTrailBalanceGetAll()` */
  static readonly HttpGetExtraAndPosTrailBalanceGetAllPath = '/ExtraAndPOS_TrailBalance/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosTrailBalanceGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosTrailBalanceGetAll$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, TrailBalanceControllerService.HttpGetExtraAndPosTrailBalanceGetAllPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosTrailBalanceGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosTrailBalanceGetAll(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosTrailBalanceGetAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosTrailBalanceTrailBAlanceSearch()` */
  static readonly HttpPostExtraAndPosTrailBalanceTrailBAlanceSearchPath = '/ExtraAndPOS_TrailBalance/TrailBAlanceSearch';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosTrailBalanceTrailBAlanceSearch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosTrailBalanceTrailBAlanceSearch$Response(
    params?: {
      body?: TrailBalance
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, TrailBalanceControllerService.HttpPostExtraAndPosTrailBalanceTrailBAlanceSearchPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosTrailBalanceTrailBAlanceSearch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosTrailBalanceTrailBAlanceSearch(
    params?: {
      body?: TrailBalance
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosTrailBalanceTrailBAlanceSearch$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutExtraAndPosTrailBalanceUpdate()` */
  static readonly HttpPutExtraAndPosTrailBalanceUpdatePath = '/ExtraAndPOS_TrailBalance/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutExtraAndPosTrailBalanceUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosTrailBalanceUpdate$Response(
    params?: {
      body?: TrailBalance
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, TrailBalanceControllerService.HttpPutExtraAndPosTrailBalanceUpdatePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutExtraAndPosTrailBalanceUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosTrailBalanceUpdate(
    params?: {
      body?: TrailBalance
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutExtraAndPosTrailBalanceUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
