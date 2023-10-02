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

import { EmpVacationTypesDto } from '../models/emp-vacation-types-dto';

@Injectable({ providedIn: 'root' })
export class XtraAndPosEmpVacationTypesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpPostXtraAndPosEmpVacationTypesCreateEmpVacationTypesService()` */
  static readonly HttpPostXtraAndPosEmpVacationTypesCreateEmpVacationTypesServicePath = '/XtraAndPOS_EmpVacationTypes/CreateEmpVacationTypesService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosEmpVacationTypesCreateEmpVacationTypesService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosEmpVacationTypesCreateEmpVacationTypesService$Response(
    params?: {
      body?: EmpVacationTypesDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmpVacationTypesService.HttpPostXtraAndPosEmpVacationTypesCreateEmpVacationTypesServicePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosEmpVacationTypesCreateEmpVacationTypesService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosEmpVacationTypesCreateEmpVacationTypesService(
    params?: {
      body?: EmpVacationTypesDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosEmpVacationTypesCreateEmpVacationTypesService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutXtraAndPosEmpVacationTypesUpdateEmpVacationTypesService()` */
  static readonly HttpPutXtraAndPosEmpVacationTypesUpdateEmpVacationTypesServicePath = '/XtraAndPOS_EmpVacationTypes/UpdateEmpVacationTypesService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutXtraAndPosEmpVacationTypesUpdateEmpVacationTypesService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosEmpVacationTypesUpdateEmpVacationTypesService$Response(
    params: {
      id: number;
      body?: EmpVacationTypesDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmpVacationTypesService.HttpPutXtraAndPosEmpVacationTypesUpdateEmpVacationTypesServicePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutXtraAndPosEmpVacationTypesUpdateEmpVacationTypesService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosEmpVacationTypesUpdateEmpVacationTypesService(
    params: {
      id: number;
      body?: EmpVacationTypesDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutXtraAndPosEmpVacationTypesUpdateEmpVacationTypesService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteXtraAndPosEmpVacationTypesDeleteEmpVacationTypesService()` */
  static readonly HttpDeleteXtraAndPosEmpVacationTypesDeleteEmpVacationTypesServicePath = '/XtraAndPOS_EmpVacationTypes/DeleteEmpVacationTypesService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteXtraAndPosEmpVacationTypesDeleteEmpVacationTypesService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosEmpVacationTypesDeleteEmpVacationTypesService$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmpVacationTypesService.HttpDeleteXtraAndPosEmpVacationTypesDeleteEmpVacationTypesServicePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteXtraAndPosEmpVacationTypesDeleteEmpVacationTypesService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosEmpVacationTypesDeleteEmpVacationTypesService(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteXtraAndPosEmpVacationTypesDeleteEmpVacationTypesService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosEmpVacationTypesGetEmpVacationTypesService()` */
  static readonly HttpGetXtraAndPosEmpVacationTypesGetEmpVacationTypesServicePath = '/XtraAndPOS_EmpVacationTypes/GetEmpVacationTypesService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosEmpVacationTypesGetEmpVacationTypesService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosEmpVacationTypesGetEmpVacationTypesService$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmpVacationTypesService.HttpGetXtraAndPosEmpVacationTypesGetEmpVacationTypesServicePath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosEmpVacationTypesGetEmpVacationTypesService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosEmpVacationTypesGetEmpVacationTypesService(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosEmpVacationTypesGetEmpVacationTypesService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
