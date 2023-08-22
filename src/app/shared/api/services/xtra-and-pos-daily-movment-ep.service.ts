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

import { DailyMovementsDto } from '../models/daily-movements-dto';

@Injectable({ providedIn: 'root' })
export class XtraAndPosDailyMovmentEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetExtraAndPosDailyMovmentGetAlll()` */
  static readonly HttpGetExtraAndPosDailyMovmentGetAlllPath = '/ExtraAndPOS_DailyMovment/GetAlll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosDailyMovmentGetAlll()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosDailyMovmentGetAlll$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosDailyMovmentEpService.HttpGetExtraAndPosDailyMovmentGetAlllPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosDailyMovmentGetAlll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosDailyMovmentGetAlll(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosDailyMovmentGetAlll$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosDailyMovmentSearchhh()` */
  static readonly HttpPostExtraAndPosDailyMovmentSearchhhPath = '/ExtraAndPOS_DailyMovment/Searchhh';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosDailyMovmentSearchhh()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosDailyMovmentSearchhh$Response(
    params?: {
      body?: DailyMovementsDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosDailyMovmentEpService.HttpPostExtraAndPosDailyMovmentSearchhhPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosDailyMovmentSearchhh$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosDailyMovmentSearchhh(
    params?: {
      body?: DailyMovementsDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosDailyMovmentSearchhh$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
