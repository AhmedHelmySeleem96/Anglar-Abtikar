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

import { Branch } from '../models/branch';

@Injectable({ providedIn: 'root' })
export class XtraAndPosBranchEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetExtraAndPosBranchEditInfo()` */
  static readonly HttpGetExtraAndPosBranchEditInfoPath = '/ExtraAndPOS_Branch/EditInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosBranchEditInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosBranchEditInfo$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosBranchEpService.HttpGetExtraAndPosBranchEditInfoPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosBranchEditInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosBranchEditInfo(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosBranchEditInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetExtraAndPosBranchManagementInfo()` */
  static readonly HttpGetExtraAndPosBranchManagementInfoPath = '/ExtraAndPOS_Branch/ManagementInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosBranchManagementInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosBranchManagementInfo$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosBranchEpService.HttpGetExtraAndPosBranchManagementInfoPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosBranchManagementInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosBranchManagementInfo(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosBranchManagementInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosBranchCreate()` */
  static readonly HttpPostExtraAndPosBranchCreatePath = '/ExtraAndPOS_Branch/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosBranchCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosBranchCreate$Response(
    params?: {
      body?: Branch
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosBranchEpService.HttpPostExtraAndPosBranchCreatePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosBranchCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosBranchCreate(
    params?: {
      body?: Branch
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosBranchCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteExtraAndPosBranchDelete()` */
  static readonly HttpDeleteExtraAndPosBranchDeletePath = '/ExtraAndPOS_Branch/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteExtraAndPosBranchDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosBranchDelete$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosBranchEpService.HttpDeleteExtraAndPosBranchDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteExtraAndPosBranchDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosBranchDelete(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteExtraAndPosBranchDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutExtraAndPosBranchUpdate()` */
  static readonly HttpPutExtraAndPosBranchUpdatePath = '/ExtraAndPOS_Branch/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutExtraAndPosBranchUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosBranchUpdate$Response(
    params?: {
      body?: Branch
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosBranchEpService.HttpPutExtraAndPosBranchUpdatePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutExtraAndPosBranchUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosBranchUpdate(
    params?: {
      body?: Branch
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutExtraAndPosBranchUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetExtraAndPosBranchGet()` */
  static readonly HttpGetExtraAndPosBranchGetPath = '/ExtraAndPOS_Branch/Get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosBranchGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosBranchGet$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosBranchEpService.HttpGetExtraAndPosBranchGetPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosBranchGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosBranchGet(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosBranchGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetBranchGetAllForDropDown()` */
  static readonly HttpGetBranchGetAllForDropDownPath = '/Branch/GetAllForDropDown';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetBranchGetAllForDropDown()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetBranchGetAllForDropDown$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosBranchEpService.HttpGetBranchGetAllForDropDownPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetBranchGetAllForDropDown$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetBranchGetAllForDropDown(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetBranchGetAllForDropDown$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
