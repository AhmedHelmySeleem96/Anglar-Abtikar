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

import { Treasury } from '../models/treasury';

@Injectable({ providedIn: 'root' })
export class XtraAndPosTreasuryEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetExtraAndPosTreasuryManagementInfo()` */
  static readonly HttpGetExtraAndPosTreasuryManagementInfoPath = '/ExtraAndPOS_Treasury/ManagementInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosTreasuryManagementInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosTreasuryManagementInfo$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosTreasuryEpService.HttpGetExtraAndPosTreasuryManagementInfoPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosTreasuryManagementInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosTreasuryManagementInfo(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosTreasuryManagementInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosTreasuryCreate()` */
  static readonly HttpPostExtraAndPosTreasuryCreatePath = '/ExtraAndPOS_Treasury/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosTreasuryCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosTreasuryCreate$Response(
    params?: {
      body?: Treasury
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosTreasuryEpService.HttpPostExtraAndPosTreasuryCreatePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosTreasuryCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosTreasuryCreate(
    params?: {
      body?: Treasury
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosTreasuryCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutExtraAndPosTreasuryUpdate()` */
  static readonly HttpPutExtraAndPosTreasuryUpdatePath = '/ExtraAndPOS_Treasury/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutExtraAndPosTreasuryUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosTreasuryUpdate$Response(
    params?: {
      body?: Treasury
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosTreasuryEpService.HttpPutExtraAndPosTreasuryUpdatePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutExtraAndPosTreasuryUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosTreasuryUpdate(
    params?: {
      body?: Treasury
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutExtraAndPosTreasuryUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteExtraAndPosTreasuryDelete()` */
  static readonly HttpDeleteExtraAndPosTreasuryDeletePath = '/ExtraAndPOS_Treasury/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteExtraAndPosTreasuryDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosTreasuryDelete$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosTreasuryEpService.HttpDeleteExtraAndPosTreasuryDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteExtraAndPosTreasuryDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosTreasuryDelete(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteExtraAndPosTreasuryDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetTreasuryGetAllForDropDown()` */
  static readonly HttpGetTreasuryGetAllForDropDownPath = '/Treasury/GetAllForDropDown';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetTreasuryGetAllForDropDown()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetTreasuryGetAllForDropDown$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosTreasuryEpService.HttpGetTreasuryGetAllForDropDownPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetTreasuryGetAllForDropDown$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetTreasuryGetAllForDropDown(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetTreasuryGetAllForDropDown$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
