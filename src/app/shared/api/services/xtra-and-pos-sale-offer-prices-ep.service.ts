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
import { SaleOfferPrice } from '../models/sale-offer-price';
import { SearchModel } from '../models/search-model';

@Injectable({ providedIn: 'root' })
export class XtraAndPosSaleOfferPricesEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetSaleOfferPricesGetInfo()` */
  static readonly HttpGetSaleOfferPricesGetInfoPath = '/SaleOfferPrices/GetInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetSaleOfferPricesGetInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetSaleOfferPricesGetInfo$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosSaleOfferPricesEpService.HttpGetSaleOfferPricesGetInfoPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetSaleOfferPricesGetInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetSaleOfferPricesGetInfo(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetSaleOfferPricesGetInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostSaleOfferPricesCreate()` */
  static readonly HttpPostSaleOfferPricesCreatePath = '/SaleOfferPrices/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostSaleOfferPricesCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostSaleOfferPricesCreate$Response(
    params?: {
      body?: SaleOfferPrice
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosSaleOfferPricesEpService.HttpPostSaleOfferPricesCreatePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostSaleOfferPricesCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostSaleOfferPricesCreate(
    params?: {
      body?: SaleOfferPrice
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostSaleOfferPricesCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostSaleOfferPricesUpdate()` */
  static readonly HttpPostSaleOfferPricesUpdatePath = '/SaleOfferPrices/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostSaleOfferPricesUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostSaleOfferPricesUpdate$Response(
    params?: {
      body?: SaleOfferPrice
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosSaleOfferPricesEpService.HttpPostSaleOfferPricesUpdatePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostSaleOfferPricesUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostSaleOfferPricesUpdate(
    params?: {
      body?: SaleOfferPrice
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostSaleOfferPricesUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostSaleOfferPricesList()` */
  static readonly HttpPostSaleOfferPricesListPath = '/SaleOfferPrices/List';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostSaleOfferPricesList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostSaleOfferPricesList$Response(
    params?: {
      body?: SearchModel
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosSaleOfferPricesEpService.HttpPostSaleOfferPricesListPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostSaleOfferPricesList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostSaleOfferPricesList(
    params?: {
      body?: SearchModel
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostSaleOfferPricesList$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostSaleOfferPricesGetByArrow()` */
  static readonly HttpPostSaleOfferPricesGetByArrowPath = '/SaleOfferPrices/GetByArrow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostSaleOfferPricesGetByArrow()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostSaleOfferPricesGetByArrow$Response(
    params?: {
      body?: RequestResult
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosSaleOfferPricesEpService.HttpPostSaleOfferPricesGetByArrowPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostSaleOfferPricesGetByArrow$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostSaleOfferPricesGetByArrow(
    params?: {
      body?: RequestResult
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostSaleOfferPricesGetByArrow$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteSaleOfferPricesDelete()` */
  static readonly HttpDeleteSaleOfferPricesDeletePath = '/SaleOfferPrices/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteSaleOfferPricesDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteSaleOfferPricesDelete$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosSaleOfferPricesEpService.HttpDeleteSaleOfferPricesDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteSaleOfferPricesDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteSaleOfferPricesDelete(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteSaleOfferPricesDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
