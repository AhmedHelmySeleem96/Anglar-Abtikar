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

import { Currency } from '../models/currency';
import { CurrencyExchange } from '../models/currency-exchange';

@Injectable({ providedIn: 'root' })
export class CurrencyEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetCurrencyGetAll()` */
  static readonly HttpGetCurrencyGetAllPath = '/Currency/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetCurrencyGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetCurrencyGetAll$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, CurrencyEpService.HttpGetCurrencyGetAllPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetCurrencyGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetCurrencyGetAll(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetCurrencyGetAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostCurrencyCreate()` */
  static readonly HttpPostCurrencyCreatePath = '/Currency/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostCurrencyCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostCurrencyCreate$Response(
    params?: {
      body?: Currency
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, CurrencyEpService.HttpPostCurrencyCreatePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostCurrencyCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostCurrencyCreate(
    params?: {
      body?: Currency
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostCurrencyCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutCurrencyUpdate()` */
  static readonly HttpPutCurrencyUpdatePath = '/Currency/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutCurrencyUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutCurrencyUpdate$Response(
    params?: {
      body?: Currency
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, CurrencyEpService.HttpPutCurrencyUpdatePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutCurrencyUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutCurrencyUpdate(
    params?: {
      body?: Currency
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutCurrencyUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteCurrencyDelete()` */
  static readonly HttpDeleteCurrencyDeletePath = '/Currency/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteCurrencyDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteCurrencyDelete$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, CurrencyEpService.HttpDeleteCurrencyDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteCurrencyDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteCurrencyDelete(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteCurrencyDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetCurrencyGetById()` */
  static readonly HttpGetCurrencyGetByIdPath = '/Currency/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetCurrencyGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetCurrencyGetById$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, CurrencyEpService.HttpGetCurrencyGetByIdPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetCurrencyGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetCurrencyGetById(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetCurrencyGetById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetCurrencyExchangeCurrencyExchangeManagementInfo()` */
  static readonly HttpGetCurrencyExchangeCurrencyExchangeManagementInfoPath = '/CurrencyExchange/CurrencyExchangeManagementInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetCurrencyExchangeCurrencyExchangeManagementInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetCurrencyExchangeCurrencyExchangeManagementInfo$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, CurrencyEpService.HttpGetCurrencyExchangeCurrencyExchangeManagementInfoPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetCurrencyExchangeCurrencyExchangeManagementInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetCurrencyExchangeCurrencyExchangeManagementInfo(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetCurrencyExchangeCurrencyExchangeManagementInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostCurrencyExchangeCreateCurrencyExchange()` */
  static readonly HttpPostCurrencyExchangeCreateCurrencyExchangePath = '/CurrencyExchange/CreateCurrencyExchange';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostCurrencyExchangeCreateCurrencyExchange()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostCurrencyExchangeCreateCurrencyExchange$Response(
    params?: {
      body?: CurrencyExchange
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, CurrencyEpService.HttpPostCurrencyExchangeCreateCurrencyExchangePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostCurrencyExchangeCreateCurrencyExchange$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostCurrencyExchangeCreateCurrencyExchange(
    params?: {
      body?: CurrencyExchange
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostCurrencyExchangeCreateCurrencyExchange$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutCurrencyExchangeUpdateCurrencyExchange()` */
  static readonly HttpPutCurrencyExchangeUpdateCurrencyExchangePath = '/CurrencyExchange/UpdateCurrencyExchange';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutCurrencyExchangeUpdateCurrencyExchange()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutCurrencyExchangeUpdateCurrencyExchange$Response(
    params?: {
      body?: CurrencyExchange
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, CurrencyEpService.HttpPutCurrencyExchangeUpdateCurrencyExchangePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutCurrencyExchangeUpdateCurrencyExchange$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutCurrencyExchangeUpdateCurrencyExchange(
    params?: {
      body?: CurrencyExchange
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutCurrencyExchangeUpdateCurrencyExchange$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteCurrencyExchangeDeleteCurrencyExchange()` */
  static readonly HttpDeleteCurrencyExchangeDeleteCurrencyExchangePath = '/CurrencyExchange/DeleteCurrencyExchange';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteCurrencyExchangeDeleteCurrencyExchange()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteCurrencyExchangeDeleteCurrencyExchange$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, CurrencyEpService.HttpDeleteCurrencyExchangeDeleteCurrencyExchangePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteCurrencyExchangeDeleteCurrencyExchange$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteCurrencyExchangeDeleteCurrencyExchange(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteCurrencyExchangeDeleteCurrencyExchange$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetCurrencyExchangeGetCurrencyExchangeByCurrencyId()` */
  static readonly HttpGetCurrencyExchangeGetCurrencyExchangeByCurrencyIdPath = '/CurrencyExchange/GetCurrencyExchangeByCurrencyId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetCurrencyExchangeGetCurrencyExchangeByCurrencyId()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetCurrencyExchangeGetCurrencyExchangeByCurrencyId$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, CurrencyEpService.HttpGetCurrencyExchangeGetCurrencyExchangeByCurrencyIdPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetCurrencyExchangeGetCurrencyExchangeByCurrencyId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetCurrencyExchangeGetCurrencyExchangeByCurrencyId(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetCurrencyExchangeGetCurrencyExchangeByCurrencyId$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
