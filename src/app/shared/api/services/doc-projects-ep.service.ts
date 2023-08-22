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

import { DocProjects } from '../models/doc-projects';

@Injectable({ providedIn: 'root' })
export class DocProjectsEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetDocProjectsGetAll()` */
  static readonly HttpGetDocProjectsGetAllPath = '/DocProjects/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetDocProjectsGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetDocProjectsGetAll$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, DocProjectsEpService.HttpGetDocProjectsGetAllPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetDocProjectsGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetDocProjectsGetAll(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetDocProjectsGetAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostDocProjectsCreate()` */
  static readonly HttpPostDocProjectsCreatePath = '/DocProjects/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostDocProjectsCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostDocProjectsCreate$Response(
    params?: {
      body?: DocProjects
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, DocProjectsEpService.HttpPostDocProjectsCreatePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostDocProjectsCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostDocProjectsCreate(
    params?: {
      body?: DocProjects
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostDocProjectsCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutDocProjectsUpdate()` */
  static readonly HttpPutDocProjectsUpdatePath = '/DocProjects/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutDocProjectsUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutDocProjectsUpdate$Response(
    params?: {
      body?: DocProjects
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, DocProjectsEpService.HttpPutDocProjectsUpdatePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutDocProjectsUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutDocProjectsUpdate(
    params?: {
      body?: DocProjects
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutDocProjectsUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteDocProjectsDelete()` */
  static readonly HttpDeleteDocProjectsDeletePath = '/DocProjects/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteDocProjectsDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteDocProjectsDelete$Response(
    params: {
      Id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, DocProjectsEpService.HttpDeleteDocProjectsDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteDocProjectsDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteDocProjectsDelete(
    params: {
      Id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteDocProjectsDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
