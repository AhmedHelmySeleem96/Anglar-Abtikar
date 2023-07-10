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

import { PricingManagement } from '../models/pricing-management';

@Injectable({ providedIn: 'root' })
export class PricingMangementControlerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetPricingmanagementPricingManagementInfo()` */
  static readonly HttpGetPricingmanagementPricingManagementInfoPath = '/pricingmanagement/PricingManagementInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetPricingmanagementPricingManagementInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetPricingmanagementPricingManagementInfo$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PricingMangementControlerService.HttpGetPricingmanagementPricingManagementInfoPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetPricingmanagementPricingManagementInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetPricingmanagementPricingManagementInfo(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetPricingmanagementPricingManagementInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostPricingmanagementCreatePricingManagement()` */
  static readonly HttpPostPricingmanagementCreatePricingManagementPath = '/pricingmanagement/CreatePricingManagement';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostPricingmanagementCreatePricingManagement()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostPricingmanagementCreatePricingManagement$Response(
    params?: {
      body?: PricingManagement
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PricingMangementControlerService.HttpPostPricingmanagementCreatePricingManagementPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostPricingmanagementCreatePricingManagement$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostPricingmanagementCreatePricingManagement(
    params?: {
      body?: PricingManagement
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostPricingmanagementCreatePricingManagement$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutPricingmanagementUpdatePricingManagement()` */
  static readonly HttpPutPricingmanagementUpdatePricingManagementPath = '/pricingmanagement/UpdatePricingManagement';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutPricingmanagementUpdatePricingManagement()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutPricingmanagementUpdatePricingManagement$Response(
    params?: {
      body?: PricingManagement
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PricingMangementControlerService.HttpPutPricingmanagementUpdatePricingManagementPath, 'put');
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
   * To access the full response (for headers, for example), `httpPutPricingmanagementUpdatePricingManagement$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutPricingmanagementUpdatePricingManagement(
    params?: {
      body?: PricingManagement
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutPricingmanagementUpdatePricingManagement$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeletePricingmanagementDeletePricingManagement()` */
  static readonly HttpDeletePricingmanagementDeletePricingManagementPath = '/pricingmanagement/DeletePricingManagement';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeletePricingmanagementDeletePricingManagement()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeletePricingmanagementDeletePricingManagement$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PricingMangementControlerService.HttpDeletePricingmanagementDeletePricingManagementPath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeletePricingmanagementDeletePricingManagement$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeletePricingmanagementDeletePricingManagement(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeletePricingmanagementDeletePricingManagement$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutPricingmanagementCancelPricingManagement()` */
  static readonly HttpPutPricingmanagementCancelPricingManagementPath = '/pricingmanagement/CancelPricingManagement';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutPricingmanagementCancelPricingManagement()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpPutPricingmanagementCancelPricingManagement$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PricingMangementControlerService.HttpPutPricingmanagementCancelPricingManagementPath, 'put');
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
   * To access the full response (for headers, for example), `httpPutPricingmanagementCancelPricingManagement$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpPutPricingmanagementCancelPricingManagement(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutPricingmanagementCancelPricingManagement$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
