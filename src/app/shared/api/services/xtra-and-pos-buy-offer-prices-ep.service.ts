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

import { BuyOfferPrice } from '../models/buy-offer-price';
import { RequestResult } from '../models/request-result';
import { SearchModel } from '../models/search-model';

@Injectable({ providedIn: 'root' })
export class XtraAndPosBuyOfferPricesEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetBuyOfferPricesGetInfo()` */
  static readonly HttpGetBuyOfferPricesGetInfoPath = '/BuyOfferPrices/GetInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetBuyOfferPricesGetInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetBuyOfferPricesGetInfo$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosBuyOfferPricesEpService.HttpGetBuyOfferPricesGetInfoPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetBuyOfferPricesGetInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetBuyOfferPricesGetInfo(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetBuyOfferPricesGetInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostBuyOfferPricesCreate()` */
  static readonly HttpPostBuyOfferPricesCreatePath = '/BuyOfferPrices/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostBuyOfferPricesCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostBuyOfferPricesCreate$Response(
    params?: {
      body?: BuyOfferPrice
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosBuyOfferPricesEpService.HttpPostBuyOfferPricesCreatePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostBuyOfferPricesCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostBuyOfferPricesCreate(
    params?: {
      body?: BuyOfferPrice
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostBuyOfferPricesCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostBuyOfferPricesUpdate()` */
  static readonly HttpPostBuyOfferPricesUpdatePath = '/BuyOfferPrices/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostBuyOfferPricesUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostBuyOfferPricesUpdate$Response(
    params?: {
      body?: BuyOfferPrice
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosBuyOfferPricesEpService.HttpPostBuyOfferPricesUpdatePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostBuyOfferPricesUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostBuyOfferPricesUpdate(
    params?: {
      body?: BuyOfferPrice
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostBuyOfferPricesUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostBuyOfferPricesList()` */
  static readonly HttpPostBuyOfferPricesListPath = '/BuyOfferPrices/List';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostBuyOfferPricesList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostBuyOfferPricesList$Response(
    params?: {
      body?: SearchModel
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosBuyOfferPricesEpService.HttpPostBuyOfferPricesListPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostBuyOfferPricesList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostBuyOfferPricesList(
    params?: {
      body?: SearchModel
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostBuyOfferPricesList$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostBuyOfferPricesGetByArrow()` */
  static readonly HttpPostBuyOfferPricesGetByArrowPath = '/BuyOfferPrices/GetByArrow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostBuyOfferPricesGetByArrow()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostBuyOfferPricesGetByArrow$Response(
    params?: {
      body?: RequestResult
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosBuyOfferPricesEpService.HttpPostBuyOfferPricesGetByArrowPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostBuyOfferPricesGetByArrow$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostBuyOfferPricesGetByArrow(
    params?: {
      body?: RequestResult
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostBuyOfferPricesGetByArrow$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteBuyOfferPricesDelete()` */
  static readonly HttpDeleteBuyOfferPricesDeletePath = '/BuyOfferPrices/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteBuyOfferPricesDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteBuyOfferPricesDelete$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosBuyOfferPricesEpService.HttpDeleteBuyOfferPricesDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteBuyOfferPricesDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteBuyOfferPricesDelete(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteBuyOfferPricesDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
