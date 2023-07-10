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

import { CartDto } from '../models/cart-dto';
import { PagingBaseRequest } from '../models/paging-base-request';

@Injectable({ providedIn: 'root' })
export class CartEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetMarketCartGetAll()` */
  static readonly HttpGetMarketCartGetAllPath = '/market/Cart/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetMarketCartGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetMarketCartGetAll$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, CartEpService.HttpGetMarketCartGetAllPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetMarketCartGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetMarketCartGetAll(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetMarketCartGetAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostMarketCartGetAllPaging()` */
  static readonly HttpPostMarketCartGetAllPagingPath = '/market/Cart/GetAllPaging';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostMarketCartGetAllPaging()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostMarketCartGetAllPaging$Response(
    params?: {
      body?: PagingBaseRequest
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, CartEpService.HttpPostMarketCartGetAllPagingPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostMarketCartGetAllPaging$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostMarketCartGetAllPaging(
    params?: {
      body?: PagingBaseRequest
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostMarketCartGetAllPaging$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetMarketCartGetById()` */
  static readonly HttpGetMarketCartGetByIdPath = '/market/Cart/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetMarketCartGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetMarketCartGetById$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, CartEpService.HttpGetMarketCartGetByIdPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetMarketCartGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetMarketCartGetById(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetMarketCartGetById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetMarketCartUserCart()` */
  static readonly HttpGetMarketCartUserCartPath = '/market/Cart/UserCart';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetMarketCartUserCart()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetMarketCartUserCart$Response(
    params?: {
      id?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, CartEpService.HttpGetMarketCartUserCartPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetMarketCartUserCart$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetMarketCartUserCart(
    params?: {
      id?: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetMarketCartUserCart$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostMarketCartCreate()` */
  static readonly HttpPostMarketCartCreatePath = '/market/Cart/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostMarketCartCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostMarketCartCreate$Response(
    params?: {
      body?: CartDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, CartEpService.HttpPostMarketCartCreatePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostMarketCartCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostMarketCartCreate(
    params?: {
      body?: CartDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostMarketCartCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetMarketCartPayment()` */
  static readonly HttpGetMarketCartPaymentPath = '/market/Cart/Payment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetMarketCartPayment()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetMarketCartPayment$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, CartEpService.HttpGetMarketCartPaymentPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetMarketCartPayment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetMarketCartPayment(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetMarketCartPayment$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutMarketCartUpdate()` */
  static readonly HttpPutMarketCartUpdatePath = '/market/Cart/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutMarketCartUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutMarketCartUpdate$Response(
    params?: {
      body?: CartDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, CartEpService.HttpPutMarketCartUpdatePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutMarketCartUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutMarketCartUpdate(
    params?: {
      body?: CartDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutMarketCartUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteMarketCartDelete()` */
  static readonly HttpDeleteMarketCartDeletePath = '/market/Cart/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteMarketCartDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteMarketCartDelete$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, CartEpService.HttpDeleteMarketCartDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteMarketCartDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteMarketCartDelete(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteMarketCartDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
