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

import { AccTree } from '../models/acc-tree';

@Injectable({ providedIn: 'root' })
export class XtraAndPosAccTreeEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpPostExtraAndPosAccTreeCreate()` */
  static readonly HttpPostExtraAndPosAccTreeCreatePath = '/ExtraAndPOS_AccTree/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosAccTreeCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosAccTreeCreate$Response(
    params?: {
      body?: AccTree
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosAccTreeEpService.HttpPostExtraAndPosAccTreeCreatePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosAccTreeCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosAccTreeCreate(
    params?: {
      body?: AccTree
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosAccTreeCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutExtraAndPosAccTreeUpdate()` */
  static readonly HttpPutExtraAndPosAccTreeUpdatePath = '/ExtraAndPOS_AccTree/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutExtraAndPosAccTreeUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosAccTreeUpdate$Response(
    params?: {
      body?: AccTree
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosAccTreeEpService.HttpPutExtraAndPosAccTreeUpdatePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutExtraAndPosAccTreeUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosAccTreeUpdate(
    params?: {
      body?: AccTree
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutExtraAndPosAccTreeUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetExtraAndPosAccTreeManagementInfo()` */
  static readonly HttpGetExtraAndPosAccTreeManagementInfoPath = '/ExtraAndPOS_AccTree/ManagementInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosAccTreeManagementInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosAccTreeManagementInfo$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosAccTreeEpService.HttpGetExtraAndPosAccTreeManagementInfoPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosAccTreeManagementInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosAccTreeManagementInfo(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosAccTreeManagementInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetExtraAndPosAccTreeGetPrimaryCode()` */
  static readonly HttpGetExtraAndPosAccTreeGetPrimaryCodePath = '/ExtraAndPOS_AccTree/GetPrimaryCode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosAccTreeGetPrimaryCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosAccTreeGetPrimaryCode$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosAccTreeEpService.HttpGetExtraAndPosAccTreeGetPrimaryCodePath, 'get');
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosAccTreeGetPrimaryCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosAccTreeGetPrimaryCode(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosAccTreeGetPrimaryCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetExtraAndPosAccTreeGetSubCode()` */
  static readonly HttpGetExtraAndPosAccTreeGetSubCodePath = '/ExtraAndPOS_AccTree/GetSubCode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosAccTreeGetSubCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosAccTreeGetSubCode$Response(
    params: {
      AccParent?: string;
      AccClass: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosAccTreeEpService.HttpGetExtraAndPosAccTreeGetSubCodePath, 'get');
    if (params) {
      rb.query('AccParent', params.AccParent, {"style":"form"});
      rb.query('AccClass', params.AccClass, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosAccTreeGetSubCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosAccTreeGetSubCode(
    params: {
      AccParent?: string;
      AccClass: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosAccTreeGetSubCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetExtraAndPosAccTreeGetAccByAutoCode()` */
  static readonly HttpGetExtraAndPosAccTreeGetAccByAutoCodePath = '/ExtraAndPOS_AccTree/GetAccByAutoCode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosAccTreeGetAccByAutoCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosAccTreeGetAccByAutoCode$Response(
    params?: {
      Code?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosAccTreeEpService.HttpGetExtraAndPosAccTreeGetAccByAutoCodePath, 'get');
    if (params) {
      rb.query('Code', params.Code, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosAccTreeGetAccByAutoCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosAccTreeGetAccByAutoCode(
    params?: {
      Code?: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosAccTreeGetAccByAutoCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetExtraAndPosAccTreeGetAccByManualCode()` */
  static readonly HttpGetExtraAndPosAccTreeGetAccByManualCodePath = '/ExtraAndPOS_AccTree/GetAccByManualCode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosAccTreeGetAccByManualCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosAccTreeGetAccByManualCode$Response(
    params?: {
      Code?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosAccTreeEpService.HttpGetExtraAndPosAccTreeGetAccByManualCodePath, 'get');
    if (params) {
      rb.query('Code', params.Code, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosAccTreeGetAccByManualCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosAccTreeGetAccByManualCode(
    params?: {
      Code?: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosAccTreeGetAccByManualCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteExtraAndPosAccTreeDelete()` */
  static readonly HttpDeleteExtraAndPosAccTreeDeletePath = '/ExtraAndPOS_AccTree/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteExtraAndPosAccTreeDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosAccTreeDelete$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosAccTreeEpService.HttpDeleteExtraAndPosAccTreeDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteExtraAndPosAccTreeDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosAccTreeDelete(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteExtraAndPosAccTreeDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteExtraAndPosAccTreeDeleteAll()` */
  static readonly HttpDeleteExtraAndPosAccTreeDeleteAllPath = '/ExtraAndPOS_AccTree/DeleteAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteExtraAndPosAccTreeDeleteAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosAccTreeDeleteAll$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosAccTreeEpService.HttpDeleteExtraAndPosAccTreeDeleteAllPath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteExtraAndPosAccTreeDeleteAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosAccTreeDeleteAll(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteExtraAndPosAccTreeDeleteAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
