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

import { OrgStructLevelCreateDto } from '../models/org-struct-level-create-dto';

@Injectable({ providedIn: 'root' })
export class XtraAndPosOrgStructLevelsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpPostXtraAndPosOrgStructLevelsCreateOrgStructLevelService()` */
  static readonly HttpPostXtraAndPosOrgStructLevelsCreateOrgStructLevelServicePath = '/XtraAndPOS_OrgStructLevels/CreateOrgStructLevelService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosOrgStructLevelsCreateOrgStructLevelService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosOrgStructLevelsCreateOrgStructLevelService$Response(
    params?: {
      body?: OrgStructLevelCreateDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosOrgStructLevelsService.HttpPostXtraAndPosOrgStructLevelsCreateOrgStructLevelServicePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosOrgStructLevelsCreateOrgStructLevelService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosOrgStructLevelsCreateOrgStructLevelService(
    params?: {
      body?: OrgStructLevelCreateDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosOrgStructLevelsCreateOrgStructLevelService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutXtraAndPosOrgStructLevelsUpdateOrgStructLevelService()` */
  static readonly HttpPutXtraAndPosOrgStructLevelsUpdateOrgStructLevelServicePath = '/XtraAndPOS_OrgStructLevels/UpdateOrgStructLevelService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutXtraAndPosOrgStructLevelsUpdateOrgStructLevelService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosOrgStructLevelsUpdateOrgStructLevelService$Response(
    params: {
      id: number;
      body?: OrgStructLevelCreateDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosOrgStructLevelsService.HttpPutXtraAndPosOrgStructLevelsUpdateOrgStructLevelServicePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutXtraAndPosOrgStructLevelsUpdateOrgStructLevelService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosOrgStructLevelsUpdateOrgStructLevelService(
    params: {
      id: number;
      body?: OrgStructLevelCreateDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutXtraAndPosOrgStructLevelsUpdateOrgStructLevelService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteXtraAndPosOrgStructLevelsDeleteOrgStructLevelService()` */
  static readonly HttpDeleteXtraAndPosOrgStructLevelsDeleteOrgStructLevelServicePath = '/XtraAndPOS_OrgStructLevels/DeleteOrgStructLevelService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteXtraAndPosOrgStructLevelsDeleteOrgStructLevelService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosOrgStructLevelsDeleteOrgStructLevelService$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosOrgStructLevelsService.HttpDeleteXtraAndPosOrgStructLevelsDeleteOrgStructLevelServicePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteXtraAndPosOrgStructLevelsDeleteOrgStructLevelService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosOrgStructLevelsDeleteOrgStructLevelService(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteXtraAndPosOrgStructLevelsDeleteOrgStructLevelService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosOrgStructLevelsGetOrgStructLevelService()` */
  static readonly HttpGetXtraAndPosOrgStructLevelsGetOrgStructLevelServicePath = '/XtraAndPOS_OrgStructLevels/GetOrgStructLevelService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosOrgStructLevelsGetOrgStructLevelService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosOrgStructLevelsGetOrgStructLevelService$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosOrgStructLevelsService.HttpGetXtraAndPosOrgStructLevelsGetOrgStructLevelServicePath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosOrgStructLevelsGetOrgStructLevelService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosOrgStructLevelsGetOrgStructLevelService(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosOrgStructLevelsGetOrgStructLevelService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosOrgStructLevelsGetParentOrgStructLevelService()` */
  static readonly HttpGetXtraAndPosOrgStructLevelsGetParentOrgStructLevelServicePath = '/XtraAndPOS_OrgStructLevels/GetParentOrgStructLevelService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosOrgStructLevelsGetParentOrgStructLevelService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosOrgStructLevelsGetParentOrgStructLevelService$Response(
    params: {
      branchId: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosOrgStructLevelsService.HttpGetXtraAndPosOrgStructLevelsGetParentOrgStructLevelServicePath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosOrgStructLevelsGetParentOrgStructLevelService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosOrgStructLevelsGetParentOrgStructLevelService(
    params: {
      branchId: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosOrgStructLevelsGetParentOrgStructLevelService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
