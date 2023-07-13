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

import { OrgStructuresCreateDto } from '../models/org-structures-create-dto';

@Injectable({ providedIn: 'root' })
export class XtraAndPosOrgStructuresService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpPostXtraAndPosOrgStructuresCreateOrgStructuresService()` */
  static readonly HttpPostXtraAndPosOrgStructuresCreateOrgStructuresServicePath = '/XtraAndPOS_OrgStructures/CreateOrgStructuresService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosOrgStructuresCreateOrgStructuresService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosOrgStructuresCreateOrgStructuresService$Response(
    params?: {
      body?: OrgStructuresCreateDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosOrgStructuresService.HttpPostXtraAndPosOrgStructuresCreateOrgStructuresServicePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosOrgStructuresCreateOrgStructuresService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosOrgStructuresCreateOrgStructuresService(
    params?: {
      body?: OrgStructuresCreateDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosOrgStructuresCreateOrgStructuresService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutXtraAndPosOrgStructuresUpdateOrgStructuresService()` */
  static readonly HttpPutXtraAndPosOrgStructuresUpdateOrgStructuresServicePath = '/XtraAndPOS_OrgStructures/UpdateOrgStructuresService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutXtraAndPosOrgStructuresUpdateOrgStructuresService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosOrgStructuresUpdateOrgStructuresService$Response(
    params: {
      id: number;
      body?: OrgStructuresCreateDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosOrgStructuresService.HttpPutXtraAndPosOrgStructuresUpdateOrgStructuresServicePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutXtraAndPosOrgStructuresUpdateOrgStructuresService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosOrgStructuresUpdateOrgStructuresService(
    params: {
      id: number;
      body?: OrgStructuresCreateDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutXtraAndPosOrgStructuresUpdateOrgStructuresService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteXtraAndPosOrgStructuresDeleteOrgStructuresService()` */
  static readonly HttpDeleteXtraAndPosOrgStructuresDeleteOrgStructuresServicePath = '/XtraAndPOS_OrgStructures/DeleteOrgStructuresService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteXtraAndPosOrgStructuresDeleteOrgStructuresService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosOrgStructuresDeleteOrgStructuresService$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosOrgStructuresService.HttpDeleteXtraAndPosOrgStructuresDeleteOrgStructuresServicePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteXtraAndPosOrgStructuresDeleteOrgStructuresService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosOrgStructuresDeleteOrgStructuresService(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteXtraAndPosOrgStructuresDeleteOrgStructuresService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosOrgStructuresGetOrgStructuresService()` */
  static readonly HttpGetXtraAndPosOrgStructuresGetOrgStructuresServicePath = '/XtraAndPOS_OrgStructures/GetOrgStructuresService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosOrgStructuresGetOrgStructuresService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosOrgStructuresGetOrgStructuresService$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosOrgStructuresService.HttpGetXtraAndPosOrgStructuresGetOrgStructuresServicePath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosOrgStructuresGetOrgStructuresService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosOrgStructuresGetOrgStructuresService(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosOrgStructuresGetOrgStructuresService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosOrgStructuresGetOrgStructuresServiceById()` */
  static readonly HttpGetXtraAndPosOrgStructuresGetOrgStructuresServiceByIdPath = '/XtraAndPOS_OrgStructures/GetOrgStructuresServiceById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosOrgStructuresGetOrgStructuresServiceById()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosOrgStructuresGetOrgStructuresServiceById$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosOrgStructuresService.HttpGetXtraAndPosOrgStructuresGetOrgStructuresServiceByIdPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosOrgStructuresGetOrgStructuresServiceById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosOrgStructuresGetOrgStructuresServiceById(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosOrgStructuresGetOrgStructuresServiceById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
