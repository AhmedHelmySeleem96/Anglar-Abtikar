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

import { DocTypesDto } from '../models/doc-types-dto';

@Injectable({ providedIn: 'root' })
export class XtraAndPosDocTypesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpPostXtraAndPosDocTypesCreateDocTypesService()` */
  static readonly HttpPostXtraAndPosDocTypesCreateDocTypesServicePath = '/XtraAndPOS_DocTypes/CreateDocTypesService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosDocTypesCreateDocTypesService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosDocTypesCreateDocTypesService$Response(
    params?: {
      body?: DocTypesDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosDocTypesService.HttpPostXtraAndPosDocTypesCreateDocTypesServicePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosDocTypesCreateDocTypesService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosDocTypesCreateDocTypesService(
    params?: {
      body?: DocTypesDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosDocTypesCreateDocTypesService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutXtraAndPosDocTypesUpdateDocTypesService()` */
  static readonly HttpPutXtraAndPosDocTypesUpdateDocTypesServicePath = '/XtraAndPOS_DocTypes/UpdateDocTypesService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutXtraAndPosDocTypesUpdateDocTypesService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosDocTypesUpdateDocTypesService$Response(
    params: {
      id: number;
      body?: DocTypesDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosDocTypesService.HttpPutXtraAndPosDocTypesUpdateDocTypesServicePath, 'put');
    if (params) {
      rb.query('id', params.id, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpPutXtraAndPosDocTypesUpdateDocTypesService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosDocTypesUpdateDocTypesService(
    params: {
      id: number;
      body?: DocTypesDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutXtraAndPosDocTypesUpdateDocTypesService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteXtraAndPosDocTypesDeleteDocTypesService()` */
  static readonly HttpDeleteXtraAndPosDocTypesDeleteDocTypesServicePath = '/XtraAndPOS_DocTypes/DeleteDocTypesService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteXtraAndPosDocTypesDeleteDocTypesService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosDocTypesDeleteDocTypesService$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosDocTypesService.HttpDeleteXtraAndPosDocTypesDeleteDocTypesServicePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteXtraAndPosDocTypesDeleteDocTypesService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosDocTypesDeleteDocTypesService(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteXtraAndPosDocTypesDeleteDocTypesService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosDocTypesGetDocTypesService()` */
  static readonly HttpGetXtraAndPosDocTypesGetDocTypesServicePath = '/XtraAndPOS_DocTypes/GetDocTypesService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosDocTypesGetDocTypesService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosDocTypesGetDocTypesService$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosDocTypesService.HttpGetXtraAndPosDocTypesGetDocTypesServicePath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosDocTypesGetDocTypesService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosDocTypesGetDocTypesService(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosDocTypesGetDocTypesService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
