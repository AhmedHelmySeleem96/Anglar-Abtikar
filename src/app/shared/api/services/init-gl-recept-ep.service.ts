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

import { InitGlRecept } from '../models/init-gl-recept';

@Injectable({ providedIn: 'root' })
export class InitGlReceptEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetInitGlReceptGetAll()` */
  static readonly HttpGetInitGlReceptGetAllPath = '/InitGlRecept/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetInitGlReceptGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetInitGlReceptGetAll$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, InitGlReceptEpService.HttpGetInitGlReceptGetAllPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetInitGlReceptGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetInitGlReceptGetAll(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetInitGlReceptGetAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostInitGlReceptCreate()` */
  static readonly HttpPostInitGlReceptCreatePath = '/InitGlRecept/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostInitGlReceptCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostInitGlReceptCreate$Response(
    params?: {
      body?: InitGlRecept
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, InitGlReceptEpService.HttpPostInitGlReceptCreatePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostInitGlReceptCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostInitGlReceptCreate(
    params?: {
      body?: InitGlRecept
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostInitGlReceptCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutInitGlReceptUpdate()` */
  static readonly HttpPutInitGlReceptUpdatePath = '/InitGlRecept/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutInitGlReceptUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutInitGlReceptUpdate$Response(
    params?: {
      body?: InitGlRecept
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, InitGlReceptEpService.HttpPutInitGlReceptUpdatePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutInitGlReceptUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutInitGlReceptUpdate(
    params?: {
      body?: InitGlRecept
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutInitGlReceptUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteInitGlReceptDelete()` */
  static readonly HttpDeleteInitGlReceptDeletePath = '/InitGlRecept/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteInitGlReceptDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteInitGlReceptDelete$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, InitGlReceptEpService.HttpDeleteInitGlReceptDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteInitGlReceptDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteInitGlReceptDelete(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteInitGlReceptDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetInitGlReceptGetById()` */
  static readonly HttpGetInitGlReceptGetByIdPath = '/InitGlRecept/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetInitGlReceptGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetInitGlReceptGetById$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, InitGlReceptEpService.HttpGetInitGlReceptGetByIdPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetInitGlReceptGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetInitGlReceptGetById(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetInitGlReceptGetById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
