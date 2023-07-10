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

import { CompanySetting } from '../models/company-setting';

@Injectable({ providedIn: 'root' })
export class XtraAndPosCompanySettingEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetExtraAndPosCompanySettingManagementInfo()` */
  static readonly HttpGetExtraAndPosCompanySettingManagementInfoPath = '/ExtraAndPOS_CompanySetting/ManagementInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosCompanySettingManagementInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosCompanySettingManagementInfo$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosCompanySettingEpService.HttpGetExtraAndPosCompanySettingManagementInfoPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosCompanySettingManagementInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosCompanySettingManagementInfo(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosCompanySettingManagementInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutExtraAndPosCompanySettingUpdate()` */
  static readonly HttpPutExtraAndPosCompanySettingUpdatePath = '/ExtraAndPOS_CompanySetting/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutExtraAndPosCompanySettingUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosCompanySettingUpdate$Response(
    params?: {
      body?: CompanySetting
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosCompanySettingEpService.HttpPutExtraAndPosCompanySettingUpdatePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutExtraAndPosCompanySettingUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosCompanySettingUpdate(
    params?: {
      body?: CompanySetting
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutExtraAndPosCompanySettingUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosCompanySettingCreate()` */
  static readonly HttpPostExtraAndPosCompanySettingCreatePath = '/ExtraAndPOS_CompanySetting/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosCompanySettingCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosCompanySettingCreate$Response(
    params?: {
      body?: CompanySetting
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosCompanySettingEpService.HttpPostExtraAndPosCompanySettingCreatePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosCompanySettingCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosCompanySettingCreate(
    params?: {
      body?: CompanySetting
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosCompanySettingCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
