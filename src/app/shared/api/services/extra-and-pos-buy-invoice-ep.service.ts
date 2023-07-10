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

import { BuyInvoice } from '../models/buy-invoice';
import { BuyInvoiceReturn } from '../models/buy-invoice-return';
import { RequestResult } from '../models/request-result';
import { SearchModel } from '../models/search-model';

@Injectable({ providedIn: 'root' })
export class ExtraAndPosBuyInvoiceEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetExtraAndPosBuyInvoiceManagementInfo()` */
  static readonly HttpGetExtraAndPosBuyInvoiceManagementInfoPath = '/ExtraAndPOS_BuyInvoice/ManagementInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosBuyInvoiceManagementInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosBuyInvoiceManagementInfo$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ExtraAndPosBuyInvoiceEpService.HttpGetExtraAndPosBuyInvoiceManagementInfoPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosBuyInvoiceManagementInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosBuyInvoiceManagementInfo(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosBuyInvoiceManagementInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosBuyInvoiceCreate()` */
  static readonly HttpPostExtraAndPosBuyInvoiceCreatePath = '/ExtraAndPOS_BuyInvoice/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosBuyInvoiceCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosBuyInvoiceCreate$Response(
    params?: {
      body?: BuyInvoice
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ExtraAndPosBuyInvoiceEpService.HttpPostExtraAndPosBuyInvoiceCreatePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosBuyInvoiceCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosBuyInvoiceCreate(
    params?: {
      body?: BuyInvoice
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosBuyInvoiceCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosBuyInvoiceList()` */
  static readonly HttpPostExtraAndPosBuyInvoiceListPath = '/ExtraAndPOS_BuyInvoice/List';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosBuyInvoiceList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosBuyInvoiceList$Response(
    params?: {
      body?: SearchModel
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ExtraAndPosBuyInvoiceEpService.HttpPostExtraAndPosBuyInvoiceListPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosBuyInvoiceList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosBuyInvoiceList(
    params?: {
      body?: SearchModel
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosBuyInvoiceList$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosBuyInvoiceEdit()` */
  static readonly HttpPostExtraAndPosBuyInvoiceEditPath = '/ExtraAndPOS_BuyInvoice/Edit';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosBuyInvoiceEdit()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosBuyInvoiceEdit$Response(
    params?: {
      body?: BuyInvoice
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ExtraAndPosBuyInvoiceEpService.HttpPostExtraAndPosBuyInvoiceEditPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosBuyInvoiceEdit$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosBuyInvoiceEdit(
    params?: {
      body?: BuyInvoice
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosBuyInvoiceEdit$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosBuyInvoiceReturn()` */
  static readonly HttpPostExtraAndPosBuyInvoiceReturnPath = '/ExtraAndPOS_BuyInvoice/Return';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosBuyInvoiceReturn()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosBuyInvoiceReturn$Response(
    params?: {
      body?: BuyInvoiceReturn
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ExtraAndPosBuyInvoiceEpService.HttpPostExtraAndPosBuyInvoiceReturnPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosBuyInvoiceReturn$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosBuyInvoiceReturn(
    params?: {
      body?: BuyInvoiceReturn
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosBuyInvoiceReturn$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosBuyInvoiceGetByArrow()` */
  static readonly HttpPostExtraAndPosBuyInvoiceGetByArrowPath = '/ExtraAndPOS_BuyInvoice/GetByArrow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosBuyInvoiceGetByArrow()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosBuyInvoiceGetByArrow$Response(
    params?: {
      body?: RequestResult
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ExtraAndPosBuyInvoiceEpService.HttpPostExtraAndPosBuyInvoiceGetByArrowPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosBuyInvoiceGetByArrow$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosBuyInvoiceGetByArrow(
    params?: {
      body?: RequestResult
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosBuyInvoiceGetByArrow$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetExtraAndPosBuyInvoiceGetOfferToInvoice()` */
  static readonly HttpGetExtraAndPosBuyInvoiceGetOfferToInvoicePath = '/ExtraAndPOS_BuyInvoice/GetOfferToInvoice';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosBuyInvoiceGetOfferToInvoice()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosBuyInvoiceGetOfferToInvoice$Response(
    params: {
      no: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ExtraAndPosBuyInvoiceEpService.HttpGetExtraAndPosBuyInvoiceGetOfferToInvoicePath, 'get');
    if (params) {
      rb.query('no', params.no, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosBuyInvoiceGetOfferToInvoice$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosBuyInvoiceGetOfferToInvoice(
    params: {
      no: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosBuyInvoiceGetOfferToInvoice$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetExtraAndPosBuyInvoiceGetById()` */
  static readonly HttpGetExtraAndPosBuyInvoiceGetByIdPath = '/ExtraAndPOS_BuyInvoice/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosBuyInvoiceGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosBuyInvoiceGetById$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ExtraAndPosBuyInvoiceEpService.HttpGetExtraAndPosBuyInvoiceGetByIdPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosBuyInvoiceGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosBuyInvoiceGetById(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosBuyInvoiceGetById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteExtraAndPosBuyInvoiceDeleteBuyInvoice()` */
  static readonly HttpDeleteExtraAndPosBuyInvoiceDeleteBuyInvoicePath = '/ExtraAndPOS_BuyInvoice/DeleteBuyInvoice';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteExtraAndPosBuyInvoiceDeleteBuyInvoice()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosBuyInvoiceDeleteBuyInvoice$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ExtraAndPosBuyInvoiceEpService.HttpDeleteExtraAndPosBuyInvoiceDeleteBuyInvoicePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteExtraAndPosBuyInvoiceDeleteBuyInvoice$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosBuyInvoiceDeleteBuyInvoice(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteExtraAndPosBuyInvoiceDeleteBuyInvoice$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetExtraAndPosBuyInvoiceSearchInfo()` */
  static readonly HttpGetExtraAndPosBuyInvoiceSearchInfoPath = '/ExtraAndPOS_BuyInvoice/SearchInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosBuyInvoiceSearchInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosBuyInvoiceSearchInfo$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ExtraAndPosBuyInvoiceEpService.HttpGetExtraAndPosBuyInvoiceSearchInfoPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosBuyInvoiceSearchInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosBuyInvoiceSearchInfo(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosBuyInvoiceSearchInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
