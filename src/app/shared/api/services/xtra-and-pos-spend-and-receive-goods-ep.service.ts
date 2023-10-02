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

import { RequestResult } from '../models/request-result';
import { SendAndReceive } from '../models/send-and-receive';

@Injectable({ providedIn: 'root' })
export class XtraAndPosSpendAndReceiveGoodsEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetXtraAndPosSpendAndReceiveGoodsSpendAndReceiveGoodsInfo()` */
  static readonly HttpGetXtraAndPosSpendAndReceiveGoodsSpendAndReceiveGoodsInfoPath = '/XtraAndPOS_SpendAndReceiveGoods/SpendAndReceiveGoodsInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosSpendAndReceiveGoodsSpendAndReceiveGoodsInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosSpendAndReceiveGoodsSpendAndReceiveGoodsInfo$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosSpendAndReceiveGoodsEpService.HttpGetXtraAndPosSpendAndReceiveGoodsSpendAndReceiveGoodsInfoPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosSpendAndReceiveGoodsSpendAndReceiveGoodsInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosSpendAndReceiveGoodsSpendAndReceiveGoodsInfo(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosSpendAndReceiveGoodsSpendAndReceiveGoodsInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostXtraAndPosSpendAndReceiveGoodsCreateSendAndReceive()` */
  static readonly HttpPostXtraAndPosSpendAndReceiveGoodsCreateSendAndReceivePath = '/XtraAndPOS_SpendAndReceiveGoods/CreateSendAndReceive';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosSpendAndReceiveGoodsCreateSendAndReceive()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosSpendAndReceiveGoodsCreateSendAndReceive$Response(
    params?: {
      body?: SendAndReceive
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosSpendAndReceiveGoodsEpService.HttpPostXtraAndPosSpendAndReceiveGoodsCreateSendAndReceivePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosSpendAndReceiveGoodsCreateSendAndReceive$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosSpendAndReceiveGoodsCreateSendAndReceive(
    params?: {
      body?: SendAndReceive
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosSpendAndReceiveGoodsCreateSendAndReceive$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostXtraAndPosSpendAndReceiveGoodsUpdateSendAndReceive()` */
  static readonly HttpPostXtraAndPosSpendAndReceiveGoodsUpdateSendAndReceivePath = '/XtraAndPOS_SpendAndReceiveGoods/UpdateSendAndReceive';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosSpendAndReceiveGoodsUpdateSendAndReceive()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosSpendAndReceiveGoodsUpdateSendAndReceive$Response(
    params?: {
      body?: SendAndReceive
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosSpendAndReceiveGoodsEpService.HttpPostXtraAndPosSpendAndReceiveGoodsUpdateSendAndReceivePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosSpendAndReceiveGoodsUpdateSendAndReceive$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosSpendAndReceiveGoodsUpdateSendAndReceive(
    params?: {
      body?: SendAndReceive
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosSpendAndReceiveGoodsUpdateSendAndReceive$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteXtraAndPosSpendAndReceiveGoodsDeleteSendAndReceive()` */
  static readonly HttpDeleteXtraAndPosSpendAndReceiveGoodsDeleteSendAndReceivePath = '/XtraAndPOS_SpendAndReceiveGoods/DeleteSendAndReceive';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteXtraAndPosSpendAndReceiveGoodsDeleteSendAndReceive()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosSpendAndReceiveGoodsDeleteSendAndReceive$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosSpendAndReceiveGoodsEpService.HttpDeleteXtraAndPosSpendAndReceiveGoodsDeleteSendAndReceivePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteXtraAndPosSpendAndReceiveGoodsDeleteSendAndReceive$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosSpendAndReceiveGoodsDeleteSendAndReceive(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteXtraAndPosSpendAndReceiveGoodsDeleteSendAndReceive$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostXtraAndPosSpendAndReceiveGoodsSendAndReceiveByArrow()` */
  static readonly HttpPostXtraAndPosSpendAndReceiveGoodsSendAndReceiveByArrowPath = '/XtraAndPOS_SpendAndReceiveGoods/SendAndReceiveByArrow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosSpendAndReceiveGoodsSendAndReceiveByArrow()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosSpendAndReceiveGoodsSendAndReceiveByArrow$Response(
    params?: {
      body?: RequestResult
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosSpendAndReceiveGoodsEpService.HttpPostXtraAndPosSpendAndReceiveGoodsSendAndReceiveByArrowPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosSpendAndReceiveGoodsSendAndReceiveByArrow$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosSpendAndReceiveGoodsSendAndReceiveByArrow(
    params?: {
      body?: RequestResult
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosSpendAndReceiveGoodsSendAndReceiveByArrow$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
