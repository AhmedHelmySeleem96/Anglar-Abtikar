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

import { FinanceSettings } from '../models/finance-settings';

@Injectable({ providedIn: 'root' })
export class XtraAndPosFinanceEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetExtraAndPosFinanceManagementInfo()` */
  static readonly HttpGetExtraAndPosFinanceManagementInfoPath = '/ExtraAndPOS_Finance/ManagementInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosFinanceManagementInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosFinanceManagementInfo$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosFinanceEpService.HttpGetExtraAndPosFinanceManagementInfoPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosFinanceManagementInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosFinanceManagementInfo(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosFinanceManagementInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutExtraAndPosFinanceUpdate()` */
  static readonly HttpPutExtraAndPosFinanceUpdatePath = '/ExtraAndPOS_Finance/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutExtraAndPosFinanceUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosFinanceUpdate$Response(
    params?: {
      body?: FinanceSettings
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosFinanceEpService.HttpPutExtraAndPosFinanceUpdatePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutExtraAndPosFinanceUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosFinanceUpdate(
    params?: {
      body?: FinanceSettings
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutExtraAndPosFinanceUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetExtraAndPosFinanceAccountsGuideByTerm()` */
  static readonly HttpGetExtraAndPosFinanceAccountsGuideByTermPath = '/ExtraAndPOS_Finance/AccountsGuideByTerm';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosFinanceAccountsGuideByTerm()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosFinanceAccountsGuideByTerm$Response(
    params?: {
      term?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosFinanceEpService.HttpGetExtraAndPosFinanceAccountsGuideByTermPath, 'get');
    if (params) {
      rb.query('term', params.term, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosFinanceAccountsGuideByTerm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosFinanceAccountsGuideByTerm(
    params?: {
      term?: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosFinanceAccountsGuideByTerm$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetExtraAndPosFinanceAccountsForFinanceSettings()` */
  static readonly HttpGetExtraAndPosFinanceAccountsForFinanceSettingsPath = '/ExtraAndPOS_Finance/AccountsForFinanceSettings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosFinanceAccountsForFinanceSettings()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosFinanceAccountsForFinanceSettings$Response(
    params?: {
      term?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosFinanceEpService.HttpGetExtraAndPosFinanceAccountsForFinanceSettingsPath, 'get');
    if (params) {
      rb.query('term', params.term, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosFinanceAccountsForFinanceSettings$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosFinanceAccountsForFinanceSettings(
    params?: {
      term?: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosFinanceAccountsForFinanceSettings$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetExtraAndPosFinanceCheckAccountsGuideByGuid()` */
  static readonly HttpGetExtraAndPosFinanceCheckAccountsGuideByGuidPath = '/ExtraAndPOS_Finance/CheckAccountsGuideByGuid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosFinanceCheckAccountsGuideByGuid()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosFinanceCheckAccountsGuideByGuid$Response(
    params: {
      Guid: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosFinanceEpService.HttpGetExtraAndPosFinanceCheckAccountsGuideByGuidPath, 'get');
    if (params) {
      rb.query('Guid', params.Guid, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosFinanceCheckAccountsGuideByGuid$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosFinanceCheckAccountsGuideByGuid(
    params: {
      Guid: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosFinanceCheckAccountsGuideByGuid$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
