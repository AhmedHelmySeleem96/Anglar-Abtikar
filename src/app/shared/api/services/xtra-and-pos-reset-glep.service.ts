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

import { IResetGlService } from '../models/i-reset-gl-service';

@Injectable({ providedIn: 'root' })
export class XtraAndPosResetGlepService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpPostResetGlepBuyReturnRest()` */
  static readonly HttpPostResetGlepBuyReturnRestPath = '/ResetGLEP/BuyReturnRest';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostResetGlepBuyReturnRest()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostResetGlepBuyReturnRest$Response(
    params?: {
      body?: IResetGlService
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosResetGlepService.HttpPostResetGlepBuyReturnRestPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostResetGlepBuyReturnRest$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostResetGlepBuyReturnRest(
    params?: {
      body?: IResetGlService
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostResetGlepBuyReturnRest$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
