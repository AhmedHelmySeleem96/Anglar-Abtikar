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

import { VacationTypesDto } from '../models/vacation-types-dto';

@Injectable({ providedIn: 'root' })
export class XtraAndPosVacationTypesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpPostXtraAndPosVacationTypesCreateVacationTypesService()` */
  static readonly HttpPostXtraAndPosVacationTypesCreateVacationTypesServicePath = '/XtraAndPOS_VacationTypes/CreateVacationTypesService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosVacationTypesCreateVacationTypesService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosVacationTypesCreateVacationTypesService$Response(
    params?: {
      body?: VacationTypesDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosVacationTypesService.HttpPostXtraAndPosVacationTypesCreateVacationTypesServicePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosVacationTypesCreateVacationTypesService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosVacationTypesCreateVacationTypesService(
    params?: {
      body?: VacationTypesDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosVacationTypesCreateVacationTypesService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutXtraAndPosVacationTypesUpdateVacationTypesService()` */
  static readonly HttpPutXtraAndPosVacationTypesUpdateVacationTypesServicePath = '/XtraAndPOS_VacationTypes/UpdateVacationTypesService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutXtraAndPosVacationTypesUpdateVacationTypesService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosVacationTypesUpdateVacationTypesService$Response(
    params: {
      id: number;
      body?: VacationTypesDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosVacationTypesService.HttpPutXtraAndPosVacationTypesUpdateVacationTypesServicePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutXtraAndPosVacationTypesUpdateVacationTypesService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosVacationTypesUpdateVacationTypesService(
    params: {
      id: number;
      body?: VacationTypesDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutXtraAndPosVacationTypesUpdateVacationTypesService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteXtraAndPosVacationTypesDeleteVacationTypesService()` */
  static readonly HttpDeleteXtraAndPosVacationTypesDeleteVacationTypesServicePath = '/XtraAndPOS_VacationTypes/DeleteVacationTypesService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteXtraAndPosVacationTypesDeleteVacationTypesService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosVacationTypesDeleteVacationTypesService$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosVacationTypesService.HttpDeleteXtraAndPosVacationTypesDeleteVacationTypesServicePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteXtraAndPosVacationTypesDeleteVacationTypesService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosVacationTypesDeleteVacationTypesService(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteXtraAndPosVacationTypesDeleteVacationTypesService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosVacationTypesGetVacationTypesService()` */
  static readonly HttpGetXtraAndPosVacationTypesGetVacationTypesServicePath = '/XtraAndPOS_VacationTypes/GetVacationTypesService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosVacationTypesGetVacationTypesService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosVacationTypesGetVacationTypesService$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosVacationTypesService.HttpGetXtraAndPosVacationTypesGetVacationTypesServicePath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosVacationTypesGetVacationTypesService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosVacationTypesGetVacationTypesService(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosVacationTypesGetVacationTypesService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
