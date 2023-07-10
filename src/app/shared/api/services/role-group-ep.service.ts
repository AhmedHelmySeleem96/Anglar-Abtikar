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

import { RoleGroup } from '../models/role-group';

@Injectable({ providedIn: 'root' })
export class RoleGroupEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetRoleGroupGetAll()` */
  static readonly HttpGetRoleGroupGetAllPath = '/RoleGroup/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetRoleGroupGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetRoleGroupGetAll$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, RoleGroupEpService.HttpGetRoleGroupGetAllPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetRoleGroupGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetRoleGroupGetAll(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetRoleGroupGetAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostRoleGroupCreate()` */
  static readonly HttpPostRoleGroupCreatePath = '/RoleGroup/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostRoleGroupCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostRoleGroupCreate$Response(
    params?: {
      body?: RoleGroup
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, RoleGroupEpService.HttpPostRoleGroupCreatePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostRoleGroupCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostRoleGroupCreate(
    params?: {
      body?: RoleGroup
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostRoleGroupCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutRoleGroupUpdate()` */
  static readonly HttpPutRoleGroupUpdatePath = '/RoleGroup/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutRoleGroupUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutRoleGroupUpdate$Response(
    params?: {
      body?: RoleGroup
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, RoleGroupEpService.HttpPutRoleGroupUpdatePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutRoleGroupUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutRoleGroupUpdate(
    params?: {
      body?: RoleGroup
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutRoleGroupUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteDelete()` */
  static readonly HttpDeleteDeletePath = '/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteDelete$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, RoleGroupEpService.HttpDeleteDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteDelete(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetIsVisiable()` */
  static readonly HttpGetIsVisiablePath = '/IsVisiable';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetIsVisiable()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetIsVisiable$Response(
    params: {
      screenNo: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, RoleGroupEpService.HttpGetIsVisiablePath, 'get');
    if (params) {
      rb.query('screenNo', params.screenNo, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpGetIsVisiable$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetIsVisiable(
    params: {
      screenNo: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetIsVisiable$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetRoleGroupGetAllForDropDown()` */
  static readonly HttpGetRoleGroupGetAllForDropDownPath = '/RoleGroup/GetAllForDropDown';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetRoleGroupGetAllForDropDown()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetRoleGroupGetAllForDropDown$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, RoleGroupEpService.HttpGetRoleGroupGetAllForDropDownPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetRoleGroupGetAllForDropDown$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetRoleGroupGetAllForDropDown(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetRoleGroupGetAllForDropDown$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
