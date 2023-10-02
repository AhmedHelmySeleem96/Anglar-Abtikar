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

import { ClientContract } from '../models/client-contract';
import { JqdtParams } from '../models/jqdt-params';
import { SearchClientContractJqdtParams } from '../models/search-client-contract-jqdt-params';

@Injectable({ providedIn: 'root' })
export class ClientContractEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetClientContractGetAllForDropDown()` */
  static readonly HttpGetClientContractGetAllForDropDownPath = '/ClientContract/GetAllForDropDown';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetClientContractGetAllForDropDown()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetClientContractGetAllForDropDown$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ClientContractEpService.HttpGetClientContractGetAllForDropDownPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetClientContractGetAllForDropDown$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetClientContractGetAllForDropDown(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetClientContractGetAllForDropDown$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostClientContractCreate()` */
  static readonly HttpPostClientContractCreatePath = '/ClientContract/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostClientContractCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostClientContractCreate$Response(
    params?: {
      body?: ClientContract
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ClientContractEpService.HttpPostClientContractCreatePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostClientContractCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostClientContractCreate(
    params?: {
      body?: ClientContract
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostClientContractCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutClientContractUpdate()` */
  static readonly HttpPutClientContractUpdatePath = '/ClientContract/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutClientContractUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutClientContractUpdate$Response(
    params?: {
      body?: ClientContract
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ClientContractEpService.HttpPutClientContractUpdatePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutClientContractUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutClientContractUpdate(
    params?: {
      body?: ClientContract
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutClientContractUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetClientContractClientContractInfo()` */
  static readonly HttpGetClientContractClientContractInfoPath = '/ClientContract/ClientContractInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetClientContractClientContractInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetClientContractClientContractInfo$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ClientContractEpService.HttpGetClientContractClientContractInfoPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetClientContractClientContractInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetClientContractClientContractInfo(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetClientContractClientContractInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetClientContractGet()` */
  static readonly HttpGetClientContractGetPath = '/ClientContract/Get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetClientContractGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetClientContractGet$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ClientContractEpService.HttpGetClientContractGetPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetClientContractGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetClientContractGet(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetClientContractGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteClientContractDelete()` */
  static readonly HttpDeleteClientContractDeletePath = '/ClientContract/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteClientContractDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteClientContractDelete$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ClientContractEpService.HttpDeleteClientContractDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteClientContractDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteClientContractDelete(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteClientContractDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostClientContractClientContractDataTable()` */
  static readonly HttpPostClientContractClientContractDataTablePath = '/ClientContract/ClientContractDataTable';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostClientContractClientContractDataTable()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostClientContractClientContractDataTable$Response(
    params?: {
      body?: JqdtParams
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ClientContractEpService.HttpPostClientContractClientContractDataTablePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostClientContractClientContractDataTable$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostClientContractClientContractDataTable(
    params?: {
      body?: JqdtParams
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostClientContractClientContractDataTable$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostClientContractGetSearchClientContractDataTable()` */
  static readonly HttpPostClientContractGetSearchClientContractDataTablePath = '/ClientContract/GetSearchClientContractDataTable';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostClientContractGetSearchClientContractDataTable()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostClientContractGetSearchClientContractDataTable$Response(
    params?: {
      body?: SearchClientContractJqdtParams
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ClientContractEpService.HttpPostClientContractGetSearchClientContractDataTablePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostClientContractGetSearchClientContractDataTable$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostClientContractGetSearchClientContractDataTable(
    params?: {
      body?: SearchClientContractJqdtParams
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostClientContractGetSearchClientContractDataTable$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
