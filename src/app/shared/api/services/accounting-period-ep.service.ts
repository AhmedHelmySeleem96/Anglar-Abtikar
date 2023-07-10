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

import { AccountingPeriod } from '../models/accounting-period';

@Injectable({ providedIn: 'root' })
export class AccountingPeriodEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetAccountingPeriodGetAllForDropDown()` */
  static readonly HttpGetAccountingPeriodGetAllForDropDownPath = '/AccountingPeriod/GetAllForDropDown';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetAccountingPeriodGetAllForDropDown()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetAccountingPeriodGetAllForDropDown$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, AccountingPeriodEpService.HttpGetAccountingPeriodGetAllForDropDownPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetAccountingPeriodGetAllForDropDown$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetAccountingPeriodGetAllForDropDown(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetAccountingPeriodGetAllForDropDown$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostAccountingPeriodCreate()` */
  static readonly HttpPostAccountingPeriodCreatePath = '/AccountingPeriod/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostAccountingPeriodCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostAccountingPeriodCreate$Response(
    params?: {
      body?: AccountingPeriod
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, AccountingPeriodEpService.HttpPostAccountingPeriodCreatePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostAccountingPeriodCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostAccountingPeriodCreate(
    params?: {
      body?: AccountingPeriod
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostAccountingPeriodCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutAccountingPeriodUpdate()` */
  static readonly HttpPutAccountingPeriodUpdatePath = '/AccountingPeriod/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutAccountingPeriodUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutAccountingPeriodUpdate$Response(
    params?: {
      body?: AccountingPeriod
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, AccountingPeriodEpService.HttpPutAccountingPeriodUpdatePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutAccountingPeriodUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutAccountingPeriodUpdate(
    params?: {
      body?: AccountingPeriod
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutAccountingPeriodUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetAccountingPeriodGetAll()` */
  static readonly HttpGetAccountingPeriodGetAllPath = '/AccountingPeriod/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetAccountingPeriodGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetAccountingPeriodGetAll$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, AccountingPeriodEpService.HttpGetAccountingPeriodGetAllPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetAccountingPeriodGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetAccountingPeriodGetAll(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetAccountingPeriodGetAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetAccountingPeriodIsDateInAccountingPeriod()` */
  static readonly HttpGetAccountingPeriodIsDateInAccountingPeriodPath = '/AccountingPeriod/IsDateInAccountingPeriod';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetAccountingPeriodIsDateInAccountingPeriod()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetAccountingPeriodIsDateInAccountingPeriod$Response(
    params: {
      date: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, AccountingPeriodEpService.HttpGetAccountingPeriodIsDateInAccountingPeriodPath, 'get');
    if (params) {
      rb.query('date', params.date, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpGetAccountingPeriodIsDateInAccountingPeriod$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetAccountingPeriodIsDateInAccountingPeriod(
    params: {
      date: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetAccountingPeriodIsDateInAccountingPeriod$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetAccountingPeriodUpdateStatus()` */
  static readonly HttpGetAccountingPeriodUpdateStatusPath = '/AccountingPeriod/UpdateStatus';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetAccountingPeriodUpdateStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetAccountingPeriodUpdateStatus$Response(
    params: {
      id: number;
      status: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, AccountingPeriodEpService.HttpGetAccountingPeriodUpdateStatusPath, 'get');
    if (params) {
      rb.query('id', params.id, {"style":"form"});
      rb.query('status', params.status, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpGetAccountingPeriodUpdateStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetAccountingPeriodUpdateStatus(
    params: {
      id: number;
      status: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetAccountingPeriodUpdateStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteAccountingPeriodDelete()` */
  static readonly HttpDeleteAccountingPeriodDeletePath = '/AccountingPeriod/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteAccountingPeriodDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteAccountingPeriodDelete$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, AccountingPeriodEpService.HttpDeleteAccountingPeriodDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteAccountingPeriodDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteAccountingPeriodDelete(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteAccountingPeriodDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
