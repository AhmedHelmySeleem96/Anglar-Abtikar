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

import { JobNameDto } from '../models/job-name-dto';

@Injectable({ providedIn: 'root' })
export class XtraAndPosJobNameService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpPostXtraAndPosJobNameCreateJobNameService()` */
  static readonly HttpPostXtraAndPosJobNameCreateJobNameServicePath = '/XtraAndPOS_JobName/CreateJobNameService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosJobNameCreateJobNameService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosJobNameCreateJobNameService$Response(
    params?: {
      body?: JobNameDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosJobNameService.HttpPostXtraAndPosJobNameCreateJobNameServicePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosJobNameCreateJobNameService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosJobNameCreateJobNameService(
    params?: {
      body?: JobNameDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosJobNameCreateJobNameService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutXtraAndPosJobNameUpdateJobNameService()` */
  static readonly HttpPutXtraAndPosJobNameUpdateJobNameServicePath = '/XtraAndPOS_JobName/UpdateJobNameService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutXtraAndPosJobNameUpdateJobNameService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosJobNameUpdateJobNameService$Response(
    params: {
      id: number;
      body?: JobNameDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosJobNameService.HttpPutXtraAndPosJobNameUpdateJobNameServicePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutXtraAndPosJobNameUpdateJobNameService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosJobNameUpdateJobNameService(
    params: {
      id: number;
      body?: JobNameDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutXtraAndPosJobNameUpdateJobNameService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteXtraAndPosJobNameDeleteJobNameService()` */
  static readonly HttpDeleteXtraAndPosJobNameDeleteJobNameServicePath = '/XtraAndPOS_JobName/DeleteJobNameService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteXtraAndPosJobNameDeleteJobNameService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosJobNameDeleteJobNameService$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosJobNameService.HttpDeleteXtraAndPosJobNameDeleteJobNameServicePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteXtraAndPosJobNameDeleteJobNameService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosJobNameDeleteJobNameService(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteXtraAndPosJobNameDeleteJobNameService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosJobNameGetJobNameService()` */
  static readonly HttpGetXtraAndPosJobNameGetJobNameServicePath = '/XtraAndPOS_JobName/GetJobNameService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosJobNameGetJobNameService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosJobNameGetJobNameService$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosJobNameService.HttpGetXtraAndPosJobNameGetJobNameServicePath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosJobNameGetJobNameService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosJobNameGetJobNameService(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosJobNameGetJobNameService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
