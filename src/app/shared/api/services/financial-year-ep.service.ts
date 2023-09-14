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

import { FinancialYearMaster } from '../models/financial-year-master';

@Injectable({ providedIn: 'root' })
export class FinancialYearEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetFinancialYearGetAllForDropDown()` */
  static readonly HttpGetFinancialYearGetAllForDropDownPath = '/FinancialYear/GetAllForDropDown';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetFinancialYearGetAllForDropDown()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetFinancialYearGetAllForDropDown$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, FinancialYearEpService.HttpGetFinancialYearGetAllForDropDownPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetFinancialYearGetAllForDropDown$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetFinancialYearGetAllForDropDown(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetFinancialYearGetAllForDropDown$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostFinancialYearCreate()` */
  static readonly HttpPostFinancialYearCreatePath = '/FinancialYear/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostFinancialYearCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostFinancialYearCreate$Response(
    params?: {
      body?: FinancialYearMaster
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, FinancialYearEpService.HttpPostFinancialYearCreatePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostFinancialYearCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostFinancialYearCreate(
    params?: {
      body?: FinancialYearMaster
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostFinancialYearCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutFinancialYearUpdate()` */
  static readonly HttpPutFinancialYearUpdatePath = '/FinancialYear/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutFinancialYearUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutFinancialYearUpdate$Response(
    params?: {
      body?: FinancialYearMaster
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, FinancialYearEpService.HttpPutFinancialYearUpdatePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutFinancialYearUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutFinancialYearUpdate(
    params?: {
      body?: FinancialYearMaster
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutFinancialYearUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteFinancialYearDelete()` */
  static readonly HttpDeleteFinancialYearDeletePath = '/FinancialYear/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteFinancialYearDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteFinancialYearDelete$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, FinancialYearEpService.HttpDeleteFinancialYearDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteFinancialYearDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteFinancialYearDelete(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteFinancialYearDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetFinancialYearGetAll()` */
  static readonly HttpGetFinancialYearGetAllPath = '/FinancialYear/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetFinancialYearGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetFinancialYearGetAll$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, FinancialYearEpService.HttpGetFinancialYearGetAllPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetFinancialYearGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetFinancialYearGetAll(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetFinancialYearGetAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteFinancialYearDeleteFinancialPeriod()` */
  static readonly HttpDeleteFinancialYearDeleteFinancialPeriodPath = '/FinancialYear/DeleteFinancialPeriod';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteFinancialYearDeleteFinancialPeriod()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteFinancialYearDeleteFinancialPeriod$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, FinancialYearEpService.HttpDeleteFinancialYearDeleteFinancialPeriodPath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteFinancialYearDeleteFinancialPeriod$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteFinancialYearDeleteFinancialPeriod(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteFinancialYearDeleteFinancialPeriod$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetFinancialYearOpenFinancialPeriod()` */
  static readonly HttpGetFinancialYearOpenFinancialPeriodPath = '/FinancialYear/OpenFinancialPeriod';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetFinancialYearOpenFinancialPeriod()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetFinancialYearOpenFinancialPeriod$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, FinancialYearEpService.HttpGetFinancialYearOpenFinancialPeriodPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetFinancialYearOpenFinancialPeriod$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetFinancialYearOpenFinancialPeriod(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetFinancialYearOpenFinancialPeriod$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetFinancialYearCloseFinancialPeriod()` */
  static readonly HttpGetFinancialYearCloseFinancialPeriodPath = '/FinancialYear/CloseFinancialPeriod';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetFinancialYearCloseFinancialPeriod()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetFinancialYearCloseFinancialPeriod$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, FinancialYearEpService.HttpGetFinancialYearCloseFinancialPeriodPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetFinancialYearCloseFinancialPeriod$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetFinancialYearCloseFinancialPeriod(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetFinancialYearCloseFinancialPeriod$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
