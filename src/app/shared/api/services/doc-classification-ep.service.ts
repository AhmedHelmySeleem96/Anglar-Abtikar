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

import { DocClassification } from '../models/doc-classification';

@Injectable({ providedIn: 'root' })
export class DocClassificationEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetDocClassificationGetAll()` */
  static readonly HttpGetDocClassificationGetAllPath = '/DocClassification/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetDocClassificationGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetDocClassificationGetAll$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, DocClassificationEpService.HttpGetDocClassificationGetAllPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetDocClassificationGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetDocClassificationGetAll(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetDocClassificationGetAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostDocClassificationCreate()` */
  static readonly HttpPostDocClassificationCreatePath = '/DocClassification/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostDocClassificationCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostDocClassificationCreate$Response(
    params?: {
      body?: DocClassification
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, DocClassificationEpService.HttpPostDocClassificationCreatePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostDocClassificationCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostDocClassificationCreate(
    params?: {
      body?: DocClassification
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostDocClassificationCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutDocClassificationUpdate()` */
  static readonly HttpPutDocClassificationUpdatePath = '/DocClassification/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutDocClassificationUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutDocClassificationUpdate$Response(
    params?: {
      body?: DocClassification
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, DocClassificationEpService.HttpPutDocClassificationUpdatePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutDocClassificationUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutDocClassificationUpdate(
    params?: {
      body?: DocClassification
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutDocClassificationUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteDocClassificationDelete()` */
  static readonly HttpDeleteDocClassificationDeletePath = '/DocClassification/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteDocClassificationDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteDocClassificationDelete$Response(
    params: {
      Id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, DocClassificationEpService.HttpDeleteDocClassificationDeletePath, 'delete');
    if (params) {
      rb.query('Id', params.Id, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpDeleteDocClassificationDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteDocClassificationDelete(
    params: {
      Id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteDocClassificationDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
