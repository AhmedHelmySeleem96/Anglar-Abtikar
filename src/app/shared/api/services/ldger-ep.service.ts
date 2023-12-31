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

import { LdgerDto } from '../models/ldger-dto';

@Injectable({ providedIn: 'root' })
export class LdgerEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetLdgerLdgerInfo()` */
  static readonly HttpGetLdgerLdgerInfoPath = '/Ldger/LdgerInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetLdgerLdgerInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetLdgerLdgerInfo$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, LdgerEpService.HttpGetLdgerLdgerInfoPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetLdgerLdgerInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetLdgerLdgerInfo(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetLdgerLdgerInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostLdgerAccBalance()` */
  static readonly HttpPostLdgerAccBalancePath = '/Ldger/AccBalance';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostLdgerAccBalance()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostLdgerAccBalance$Response(
    params?: {
      body?: LdgerDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, LdgerEpService.HttpPostLdgerAccBalancePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostLdgerAccBalance$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostLdgerAccBalance(
    params?: {
      body?: LdgerDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostLdgerAccBalance$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostLdgerAccTransaction()` */
  static readonly HttpPostLdgerAccTransactionPath = '/Ldger/AccTransaction';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostLdgerAccTransaction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostLdgerAccTransaction$Response(
    params?: {
      body?: LdgerDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, LdgerEpService.HttpPostLdgerAccTransactionPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostLdgerAccTransaction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostLdgerAccTransaction(
    params?: {
      body?: LdgerDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostLdgerAccTransaction$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetLdgerResetReturnBuys()` */
  static readonly HttpGetLdgerResetReturnBuysPath = '/Ldger/ResetReturnBuys';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetLdgerResetReturnBuys()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetLdgerResetReturnBuys$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, LdgerEpService.HttpGetLdgerResetReturnBuysPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetLdgerResetReturnBuys$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetLdgerResetReturnBuys(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetLdgerResetReturnBuys$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetLdgerResetReturnSales()` */
  static readonly HttpGetLdgerResetReturnSalesPath = '/Ldger/ResetReturnSales';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetLdgerResetReturnSales()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetLdgerResetReturnSales$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, LdgerEpService.HttpGetLdgerResetReturnSalesPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetLdgerResetReturnSales$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetLdgerResetReturnSales(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetLdgerResetReturnSales$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetLdgerResetBuys()` */
  static readonly HttpGetLdgerResetBuysPath = '/Ldger/ResetBuys';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetLdgerResetBuys()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetLdgerResetBuys$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, LdgerEpService.HttpGetLdgerResetBuysPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetLdgerResetBuys$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetLdgerResetBuys(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetLdgerResetBuys$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetLdgerResetSales()` */
  static readonly HttpGetLdgerResetSalesPath = '/Ldger/ResetSales';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetLdgerResetSales()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetLdgerResetSales$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, LdgerEpService.HttpGetLdgerResetSalesPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetLdgerResetSales$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetLdgerResetSales(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetLdgerResetSales$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetLdgerResetGl()` */
  static readonly HttpGetLdgerResetGlPath = '/Ldger/ResetGl';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetLdgerResetGl()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetLdgerResetGl$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, LdgerEpService.HttpGetLdgerResetGlPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetLdgerResetGl$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetLdgerResetGl(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetLdgerResetGl$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
