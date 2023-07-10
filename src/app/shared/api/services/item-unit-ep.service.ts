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

import { Item } from '../models/item';
import { ItemUnit } from '../models/item-unit';
import { PagingBaseRequest } from '../models/paging-base-request';

@Injectable({ providedIn: 'root' })
export class ItemUnitEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetMarketItemGetAll()` */
  static readonly HttpGetMarketItemGetAllPath = '/market/Item/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetMarketItemGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetMarketItemGetAll$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ItemUnitEpService.HttpGetMarketItemGetAllPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetMarketItemGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetMarketItemGetAll(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetMarketItemGetAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetMarketItemGetById()` */
  static readonly HttpGetMarketItemGetByIdPath = '/market/Item/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetMarketItemGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetMarketItemGetById$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ItemUnitEpService.HttpGetMarketItemGetByIdPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetMarketItemGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetMarketItemGetById(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetMarketItemGetById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostMarketItemCreate()` */
  static readonly HttpPostMarketItemCreatePath = '/market/Item/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostMarketItemCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostMarketItemCreate$Response(
    params?: {
      body?: Item
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ItemUnitEpService.HttpPostMarketItemCreatePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostMarketItemCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostMarketItemCreate(
    params?: {
      body?: Item
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostMarketItemCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutMarketItemUpdate()` */
  static readonly HttpPutMarketItemUpdatePath = '/market/Item/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutMarketItemUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutMarketItemUpdate$Response(
    params?: {
      body?: ItemUnit
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ItemUnitEpService.HttpPutMarketItemUpdatePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutMarketItemUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutMarketItemUpdate(
    params?: {
      body?: ItemUnit
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutMarketItemUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteMarketItemDelete()` */
  static readonly HttpDeleteMarketItemDeletePath = '/market/Item/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteMarketItemDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteMarketItemDelete$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ItemUnitEpService.HttpDeleteMarketItemDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteMarketItemDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteMarketItemDelete(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteMarketItemDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostMarketItemGetAllPaging()` */
  static readonly HttpPostMarketItemGetAllPagingPath = '/market/Item/GetAllPaging';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostMarketItemGetAllPaging()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostMarketItemGetAllPaging$Response(
    params?: {
      body?: PagingBaseRequest
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ItemUnitEpService.HttpPostMarketItemGetAllPagingPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostMarketItemGetAllPaging$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostMarketItemGetAllPaging(
    params?: {
      body?: PagingBaseRequest
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostMarketItemGetAllPaging$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
