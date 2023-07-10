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

import { DefaultOptions } from '../models/default-options';

@Injectable({ providedIn: 'root' })
export class XtraAndPosDefaultOptionsEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetExtraAndPosDefaultOptionsManagementInfo()` */
  static readonly HttpGetExtraAndPosDefaultOptionsManagementInfoPath = '/ExtraAndPOS_DefaultOptions/ManagementInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosDefaultOptionsManagementInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosDefaultOptionsManagementInfo$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosDefaultOptionsEpService.HttpGetExtraAndPosDefaultOptionsManagementInfoPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosDefaultOptionsManagementInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosDefaultOptionsManagementInfo(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosDefaultOptionsManagementInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutExtraAndPosDefaultOptionsUpdate()` */
  static readonly HttpPutExtraAndPosDefaultOptionsUpdatePath = '/ExtraAndPOS_DefaultOptions/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutExtraAndPosDefaultOptionsUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosDefaultOptionsUpdate$Response(
    params?: {
      body?: DefaultOptions
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosDefaultOptionsEpService.HttpPutExtraAndPosDefaultOptionsUpdatePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutExtraAndPosDefaultOptionsUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosDefaultOptionsUpdate(
    params?: {
      body?: DefaultOptions
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutExtraAndPosDefaultOptionsUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
