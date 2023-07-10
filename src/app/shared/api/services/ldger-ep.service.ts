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

import { LdgerDto } from '../models/ldger-dto';

@Injectable({ providedIn: 'root' })
export class LdgerEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetLdgerLdgerInfo()` */
  static readonly HttpGetLdgerLdgerInfoPath = '/Ldger/LdgerInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetLdgerLdgerInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetLdgerLdgerInfo$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, LdgerEpService.HttpGetLdgerLdgerInfoPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetLdgerLdgerInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetLdgerLdgerInfo(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetLdgerLdgerInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostLdgerAccBalance()` */
  static readonly HttpPostLdgerAccBalancePath = '/Ldger/AccBalance';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostLdgerAccBalance()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostLdgerAccBalance$Response(
    params?: {
      body?: LdgerDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, LdgerEpService.HttpPostLdgerAccBalancePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostLdgerAccBalance$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostLdgerAccBalance(
    params?: {
      body?: LdgerDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostLdgerAccBalance$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostLdgerAccTransaction()` */
  static readonly HttpPostLdgerAccTransactionPath = '/Ldger/AccTransaction';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostLdgerAccTransaction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostLdgerAccTransaction$Response(
    params?: {
      body?: LdgerDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, LdgerEpService.HttpPostLdgerAccTransactionPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostLdgerAccTransaction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostLdgerAccTransaction(
    params?: {
      body?: LdgerDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostLdgerAccTransaction$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
