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
import { BuyOfferPriceBalance } from '../models/buy-offer-price-balance';
import { RequestResult } from '../models/request-result';
import { SearchModel } from '../models/search-model';
import { GetItemPrice } from '../models/get-item-price';

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

  /** Path part for operation `httpGetBuyOfferPricesBuyOfferPriceBalanceInfo()` */
  static readonly HttpGetBuyOfferPricesBuyOfferPriceBalanceInfoPath = '/BuyOfferPrices/BuyOfferPriceBalanceInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetBuyOfferPricesBuyOfferPriceBalanceInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetBuyOfferPricesBuyOfferPriceBalanceInfo$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosBuyOfferPricesEpService.HttpGetBuyOfferPricesBuyOfferPriceBalanceInfoPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetBuyOfferPricesBuyOfferPriceBalanceInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetBuyOfferPricesBuyOfferPriceBalanceInfo(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetBuyOfferPricesBuyOfferPriceBalanceInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostBuyOfferPricesGetOfferPriceBalanceByDate()` */
  static readonly HttpPostBuyOfferPricesGetOfferPriceBalanceByDatePath = '/BuyOfferPrices/GetOfferPriceBalanceByDate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostBuyOfferPricesGetOfferPriceBalanceByDate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostBuyOfferPricesGetOfferPriceBalanceByDate$Response(
    params?: {
      body?: GetItemPrice
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosBuyOfferPricesEpService.HttpPostBuyOfferPricesGetOfferPriceBalanceByDatePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostBuyOfferPricesGetOfferPriceBalanceByDate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostBuyOfferPricesGetOfferPriceBalanceByDate(
    params?: {
      body?: GetItemPrice
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostBuyOfferPricesGetOfferPriceBalanceByDate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostBuyOfferPricesCreateBuyOfferBalance()` */
  static readonly HttpPostBuyOfferPricesCreateBuyOfferBalancePath = '/BuyOfferPrices/CreateBuyOfferBalance';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostBuyOfferPricesCreateBuyOfferBalance()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostBuyOfferPricesCreateBuyOfferBalance$Response(
    params?: {
      body?: BuyOfferPriceBalance
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosBuyOfferPricesEpService.HttpPostBuyOfferPricesCreateBuyOfferBalancePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostBuyOfferPricesCreateBuyOfferBalance$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostBuyOfferPricesCreateBuyOfferBalance(
    params?: {
      body?: BuyOfferPriceBalance
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostBuyOfferPricesCreateBuyOfferBalance$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostBuyOfferPricesUpdateBuyOfferBalance()` */
  static readonly HttpPostBuyOfferPricesUpdateBuyOfferBalancePath = '/BuyOfferPrices/UpdateBuyOfferBalance';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostBuyOfferPricesUpdateBuyOfferBalance()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostBuyOfferPricesUpdateBuyOfferBalance$Response(
    params?: {
      body?: BuyOfferPriceBalance
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosBuyOfferPricesEpService.HttpPostBuyOfferPricesUpdateBuyOfferBalancePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostBuyOfferPricesUpdateBuyOfferBalance$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostBuyOfferPricesUpdateBuyOfferBalance(
    params?: {
      body?: BuyOfferPriceBalance
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostBuyOfferPricesUpdateBuyOfferBalance$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteBuyOfferPricesDeleteBuyOfferBalance()` */
  static readonly HttpDeleteBuyOfferPricesDeleteBuyOfferBalancePath = '/BuyOfferPrices/DeleteBuyOfferBalance';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteBuyOfferPricesDeleteBuyOfferBalance()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteBuyOfferPricesDeleteBuyOfferBalance$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosBuyOfferPricesEpService.HttpDeleteBuyOfferPricesDeleteBuyOfferBalancePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteBuyOfferPricesDeleteBuyOfferBalance$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteBuyOfferPricesDeleteBuyOfferBalance(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteBuyOfferPricesDeleteBuyOfferBalance$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
