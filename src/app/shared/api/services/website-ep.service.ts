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

import { PagingBaseRequest } from '../models/paging-base-request';
import { WebsiteDto } from '../models/website-dto';

@Injectable({ providedIn: 'root' })
export class WebsiteEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetMarketWebsiteGetAll()` */
  static readonly HttpGetMarketWebsiteGetAllPath = '/market/website/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetMarketWebsiteGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetMarketWebsiteGetAll$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, WebsiteEpService.HttpGetMarketWebsiteGetAllPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetMarketWebsiteGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetMarketWebsiteGetAll(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetMarketWebsiteGetAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetMarketWebsiteGetById()` */
  static readonly HttpGetMarketWebsiteGetByIdPath = '/market/website/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetMarketWebsiteGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetMarketWebsiteGetById$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, WebsiteEpService.HttpGetMarketWebsiteGetByIdPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetMarketWebsiteGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetMarketWebsiteGetById(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetMarketWebsiteGetById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostMarketWebsiteCreate()` */
  static readonly HttpPostMarketWebsiteCreatePath = '/market/website/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostMarketWebsiteCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostMarketWebsiteCreate$Response(
    params?: {
      body?: WebsiteDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, WebsiteEpService.HttpPostMarketWebsiteCreatePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostMarketWebsiteCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostMarketWebsiteCreate(
    params?: {
      body?: WebsiteDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostMarketWebsiteCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutMarketWebsiteUpdate()` */
  static readonly HttpPutMarketWebsiteUpdatePath = '/market/website/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutMarketWebsiteUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutMarketWebsiteUpdate$Response(
    params?: {
      body?: WebsiteDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, WebsiteEpService.HttpPutMarketWebsiteUpdatePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutMarketWebsiteUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutMarketWebsiteUpdate(
    params?: {
      body?: WebsiteDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutMarketWebsiteUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostMarketWebsiteDelete()` */
  static readonly HttpPostMarketWebsiteDeletePath = '/market/website/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostMarketWebsiteDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostMarketWebsiteDelete$Response(
    params?: {
      body?: WebsiteDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, WebsiteEpService.HttpPostMarketWebsiteDeletePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostMarketWebsiteDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostMarketWebsiteDelete(
    params?: {
      body?: WebsiteDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostMarketWebsiteDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostMarketWebsiteGetAllPaging()` */
  static readonly HttpPostMarketWebsiteGetAllPagingPath = '/market/website/GetAllPaging';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostMarketWebsiteGetAllPaging()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostMarketWebsiteGetAllPaging$Response(
    params?: {
      body?: PagingBaseRequest
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, WebsiteEpService.HttpPostMarketWebsiteGetAllPagingPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostMarketWebsiteGetAllPaging$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostMarketWebsiteGetAllPaging(
    params?: {
      body?: PagingBaseRequest
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostMarketWebsiteGetAllPaging$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
