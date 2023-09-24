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

import { EmpAllowenceTransactionsDto } from '../models/emp-allowence-transactions-dto';

@Injectable({ providedIn: 'root' })
export class XtraAndPosEmpAllownceTransactionsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpPostXtraAndPosEmpAllownceTransactionsCreate()` */
  static readonly HttpPostXtraAndPosEmpAllownceTransactionsCreatePath = '/XtraAndPOS_EmpAllownceTransactions/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosEmpAllownceTransactionsCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosEmpAllownceTransactionsCreate$Response(
    params?: {
      body?: EmpAllowenceTransactionsDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmpAllownceTransactionsService.HttpPostXtraAndPosEmpAllownceTransactionsCreatePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosEmpAllownceTransactionsCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosEmpAllownceTransactionsCreate(
    params?: {
      body?: EmpAllowenceTransactionsDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosEmpAllownceTransactionsCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutXtraAndPosEmpAllownceTransactionsUpdate()` */
  static readonly HttpPutXtraAndPosEmpAllownceTransactionsUpdatePath = '/XtraAndPOS_EmpAllownceTransactions/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutXtraAndPosEmpAllownceTransactionsUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosEmpAllownceTransactionsUpdate$Response(
    params: {
      id: number;
      body?: EmpAllowenceTransactionsDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmpAllownceTransactionsService.HttpPutXtraAndPosEmpAllownceTransactionsUpdatePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutXtraAndPosEmpAllownceTransactionsUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosEmpAllownceTransactionsUpdate(
    params: {
      id: number;
      body?: EmpAllowenceTransactionsDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutXtraAndPosEmpAllownceTransactionsUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteXtraAndPosEmpAllownceTransactionsDelete()` */
  static readonly HttpDeleteXtraAndPosEmpAllownceTransactionsDeletePath = '/XtraAndPOS_EmpAllownceTransactions/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteXtraAndPosEmpAllownceTransactionsDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosEmpAllownceTransactionsDelete$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmpAllownceTransactionsService.HttpDeleteXtraAndPosEmpAllownceTransactionsDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteXtraAndPosEmpAllownceTransactionsDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosEmpAllownceTransactionsDelete(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteXtraAndPosEmpAllownceTransactionsDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosEmpAllownceTransactionsGet()` */
  static readonly HttpGetXtraAndPosEmpAllownceTransactionsGetPath = '/XtraAndPOS_EmpAllownceTransactions/Get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosEmpAllownceTransactionsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosEmpAllownceTransactionsGet$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmpAllownceTransactionsService.HttpGetXtraAndPosEmpAllownceTransactionsGetPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosEmpAllownceTransactionsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosEmpAllownceTransactionsGet(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosEmpAllownceTransactionsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
