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


@Injectable({ providedIn: 'root' })
export class DashboardEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetDashboardHomeInfo()` */
  static readonly HttpGetDashboardHomeInfoPath = '/Dashboard/HomeInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetDashboardHomeInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetDashboardHomeInfo$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, DashboardEpService.HttpGetDashboardHomeInfoPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetDashboardHomeInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetDashboardHomeInfo(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetDashboardHomeInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetDashboardUpdateUserBranch()` */
  static readonly HttpGetDashboardUpdateUserBranchPath = '/Dashboard/UpdateUserBranch';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetDashboardUpdateUserBranch()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetDashboardUpdateUserBranch$Response(
    params: {
      branchId: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, DashboardEpService.HttpGetDashboardUpdateUserBranchPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetDashboardUpdateUserBranch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetDashboardUpdateUserBranch(
    params: {
      branchId: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetDashboardUpdateUserBranch$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
