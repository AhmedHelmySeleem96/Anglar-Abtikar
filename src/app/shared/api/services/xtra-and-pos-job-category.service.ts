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

import { JobCategoryDto } from '../models/job-category-dto';

@Injectable({ providedIn: 'root' })
export class XtraAndPosJobCategoryService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpPostXtraAndPosJobCategoryCreateJobCategoryService()` */
  static readonly HttpPostXtraAndPosJobCategoryCreateJobCategoryServicePath = '/XtraAndPOS_JobCategory/CreateJobCategoryService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosJobCategoryCreateJobCategoryService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosJobCategoryCreateJobCategoryService$Response(
    params?: {
      body?: JobCategoryDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosJobCategoryService.HttpPostXtraAndPosJobCategoryCreateJobCategoryServicePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosJobCategoryCreateJobCategoryService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosJobCategoryCreateJobCategoryService(
    params?: {
      body?: JobCategoryDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosJobCategoryCreateJobCategoryService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutXtraAndPosJobCategoryUpdateJobCategoryService()` */
  static readonly HttpPutXtraAndPosJobCategoryUpdateJobCategoryServicePath = '/XtraAndPOS_JobCategory/UpdateJobCategoryService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutXtraAndPosJobCategoryUpdateJobCategoryService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosJobCategoryUpdateJobCategoryService$Response(
    params: {
      id: number;
      body?: JobCategoryDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosJobCategoryService.HttpPutXtraAndPosJobCategoryUpdateJobCategoryServicePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutXtraAndPosJobCategoryUpdateJobCategoryService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosJobCategoryUpdateJobCategoryService(
    params: {
      id: number;
      body?: JobCategoryDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutXtraAndPosJobCategoryUpdateJobCategoryService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteXtraAndPosJobCategoryDeleteJobCategoryService()` */
  static readonly HttpDeleteXtraAndPosJobCategoryDeleteJobCategoryServicePath = '/XtraAndPOS_JobCategory/DeleteJobCategoryService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteXtraAndPosJobCategoryDeleteJobCategoryService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosJobCategoryDeleteJobCategoryService$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosJobCategoryService.HttpDeleteXtraAndPosJobCategoryDeleteJobCategoryServicePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteXtraAndPosJobCategoryDeleteJobCategoryService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosJobCategoryDeleteJobCategoryService(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteXtraAndPosJobCategoryDeleteJobCategoryService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosJobCategoryGetJobCategoryService()` */
  static readonly HttpGetXtraAndPosJobCategoryGetJobCategoryServicePath = '/XtraAndPOS_JobCategory/GetJobCategoryService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosJobCategoryGetJobCategoryService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosJobCategoryGetJobCategoryService$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosJobCategoryService.HttpGetXtraAndPosJobCategoryGetJobCategoryServicePath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosJobCategoryGetJobCategoryService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosJobCategoryGetJobCategoryService(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosJobCategoryGetJobCategoryService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
