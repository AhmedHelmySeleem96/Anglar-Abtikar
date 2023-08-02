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

import { JobDifinitionDto } from '../models/job-difinition-dto';

@Injectable({ providedIn: 'root' })
export class XtraAndPosJobDifinitionService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpPostXtraAndPosJobDifinitionCreateJobDifinitionService()` */
  static readonly HttpPostXtraAndPosJobDifinitionCreateJobDifinitionServicePath = '/XtraAndPOS_JobDifinition/CreateJobDifinitionService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosJobDifinitionCreateJobDifinitionService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosJobDifinitionCreateJobDifinitionService$Response(
    params?: {
      body?: JobDifinitionDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosJobDifinitionService.HttpPostXtraAndPosJobDifinitionCreateJobDifinitionServicePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosJobDifinitionCreateJobDifinitionService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosJobDifinitionCreateJobDifinitionService(
    params?: {
      body?: JobDifinitionDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosJobDifinitionCreateJobDifinitionService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutXtraAndPosJobDifinitionUpdateJobDifinitionService()` */
  static readonly HttpPutXtraAndPosJobDifinitionUpdateJobDifinitionServicePath = '/XtraAndPOS_JobDifinition/UpdateJobDifinitionService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutXtraAndPosJobDifinitionUpdateJobDifinitionService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosJobDifinitionUpdateJobDifinitionService$Response(
    params: {
      id: number;
      body?: JobDifinitionDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosJobDifinitionService.HttpPutXtraAndPosJobDifinitionUpdateJobDifinitionServicePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutXtraAndPosJobDifinitionUpdateJobDifinitionService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosJobDifinitionUpdateJobDifinitionService(
    params: {
      id: number;
      body?: JobDifinitionDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutXtraAndPosJobDifinitionUpdateJobDifinitionService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteXtraAndPosJobDifinitionDeleteJobDifinitionService()` */
  static readonly HttpDeleteXtraAndPosJobDifinitionDeleteJobDifinitionServicePath = '/XtraAndPOS_JobDifinition/DeleteJobDifinitionService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteXtraAndPosJobDifinitionDeleteJobDifinitionService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosJobDifinitionDeleteJobDifinitionService$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosJobDifinitionService.HttpDeleteXtraAndPosJobDifinitionDeleteJobDifinitionServicePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteXtraAndPosJobDifinitionDeleteJobDifinitionService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosJobDifinitionDeleteJobDifinitionService(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteXtraAndPosJobDifinitionDeleteJobDifinitionService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosJobDifinitionGetJobDifinitionService()` */
  static readonly HttpGetXtraAndPosJobDifinitionGetJobDifinitionServicePath = '/XtraAndPOS_JobDifinition/GetJobDifinitionService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosJobDifinitionGetJobDifinitionService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosJobDifinitionGetJobDifinitionService$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosJobDifinitionService.HttpGetXtraAndPosJobDifinitionGetJobDifinitionServicePath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosJobDifinitionGetJobDifinitionService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosJobDifinitionGetJobDifinitionService(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosJobDifinitionGetJobDifinitionService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosJobDifinitionGetOrgStructLevelsService()` */
  static readonly HttpGetXtraAndPosJobDifinitionGetOrgStructLevelsServicePath = '/XtraAndPOS_JobDifinition/GetOrgStructLevelsService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosJobDifinitionGetOrgStructLevelsService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosJobDifinitionGetOrgStructLevelsService$Response(
    params: {
      branchId: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosJobDifinitionService.HttpGetXtraAndPosJobDifinitionGetOrgStructLevelsServicePath, 'get');
    if (params) {
      rb.query('branchId', params.branchId, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosJobDifinitionGetOrgStructLevelsService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosJobDifinitionGetOrgStructLevelsService(
    params: {
      branchId: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosJobDifinitionGetOrgStructLevelsService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
