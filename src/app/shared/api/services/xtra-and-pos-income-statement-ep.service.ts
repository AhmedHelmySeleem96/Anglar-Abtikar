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

import { IncomeListSetting } from '../models/income-list-setting';
import { IncomeStatements } from '../models/income-statements';

@Injectable({ providedIn: 'root' })
export class XtraAndPosIncomeStatementEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetIncomeStatementGetAll()` */
  static readonly HttpGetIncomeStatementGetAllPath = '/IncomeStatement/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetIncomeStatementGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetIncomeStatementGetAll$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosIncomeStatementEpService.HttpGetIncomeStatementGetAllPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetIncomeStatementGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetIncomeStatementGetAll(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetIncomeStatementGetAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostIncomeStatementIncomeStatementSearch()` */
  static readonly HttpPostIncomeStatementIncomeStatementSearchPath = '/IncomeStatement/IncomeStatementSearch';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostIncomeStatementIncomeStatementSearch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostIncomeStatementIncomeStatementSearch$Response(
    params?: {
      body?: IncomeStatements
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosIncomeStatementEpService.HttpPostIncomeStatementIncomeStatementSearchPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostIncomeStatementIncomeStatementSearch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostIncomeStatementIncomeStatementSearch(
    params?: {
      body?: IncomeStatements
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostIncomeStatementIncomeStatementSearch$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetIncomeSettingIncomeSettingInfo()` */
  static readonly HttpGetIncomeSettingIncomeSettingInfoPath = '/IncomeSetting/IncomeSettingInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetIncomeSettingIncomeSettingInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetIncomeSettingIncomeSettingInfo$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosIncomeStatementEpService.HttpGetIncomeSettingIncomeSettingInfoPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetIncomeSettingIncomeSettingInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetIncomeSettingIncomeSettingInfo(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetIncomeSettingIncomeSettingInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostIncomeSettingCreate()` */
  static readonly HttpPostIncomeSettingCreatePath = '/IncomeSetting/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostIncomeSettingCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostIncomeSettingCreate$Response(
    params?: {
      body?: IncomeListSetting
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosIncomeStatementEpService.HttpPostIncomeSettingCreatePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostIncomeSettingCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostIncomeSettingCreate(
    params?: {
      body?: IncomeListSetting
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostIncomeSettingCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutIncomeSettingUpdateIncomeSetting()` */
  static readonly HttpPutIncomeSettingUpdateIncomeSettingPath = '/IncomeSetting/UpdateIncomeSetting';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutIncomeSettingUpdateIncomeSetting()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutIncomeSettingUpdateIncomeSetting$Response(
    params?: {
      body?: IncomeListSetting
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosIncomeStatementEpService.HttpPutIncomeSettingUpdateIncomeSettingPath, 'put');
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
   * To access the full response (for headers, for example), `httpPutIncomeSettingUpdateIncomeSetting$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutIncomeSettingUpdateIncomeSetting(
    params?: {
      body?: IncomeListSetting
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutIncomeSettingUpdateIncomeSetting$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteIncomeSettingDelete()` */
  static readonly HttpDeleteIncomeSettingDeletePath = '/IncomeSetting/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteIncomeSettingDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteIncomeSettingDelete$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosIncomeStatementEpService.HttpDeleteIncomeSettingDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteIncomeSettingDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteIncomeSettingDelete(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteIncomeSettingDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
