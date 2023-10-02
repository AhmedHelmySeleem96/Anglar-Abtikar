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

import { ItemUnitDataTableJqdtParams } from '../models/item-unit-data-table-jqdt-params';

@Injectable({ providedIn: 'root' })
export class XtraAndPosGlobalService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetXtraAndPosGlobalItemUnitTakeLast10()` */
  static readonly HttpGetXtraAndPosGlobalItemUnitTakeLast10Path = '/XtraAndPOS_Global/ItemUnitTakeLast10';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosGlobalItemUnitTakeLast10()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalItemUnitTakeLast10$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpGetXtraAndPosGlobalItemUnitTakeLast10Path, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosGlobalItemUnitTakeLast10$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalItemUnitTakeLast10(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosGlobalItemUnitTakeLast10$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosGlobalItemUnitByTerm()` */
  static readonly HttpGetXtraAndPosGlobalItemUnitByTermPath = '/XtraAndPOS_Global/ItemUnitByTerm';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosGlobalItemUnitByTerm()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalItemUnitByTerm$Response(
    params?: {
      term?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpGetXtraAndPosGlobalItemUnitByTermPath, 'get');
    if (params) {
      rb.query('term', params.term, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosGlobalItemUnitByTerm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalItemUnitByTerm(
    params?: {
      term?: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosGlobalItemUnitByTerm$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosGlobalMainItemsTakeLast10()` */
  static readonly HttpGetXtraAndPosGlobalMainItemsTakeLast10Path = '/XtraAndPOS_Global/MainItemsTakeLast10';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosGlobalMainItemsTakeLast10()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalMainItemsTakeLast10$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpGetXtraAndPosGlobalMainItemsTakeLast10Path, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosGlobalMainItemsTakeLast10$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalMainItemsTakeLast10(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosGlobalMainItemsTakeLast10$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosGlobalMainItemsByTerm()` */
  static readonly HttpGetXtraAndPosGlobalMainItemsByTermPath = '/XtraAndPOS_Global/MainItemsByTerm';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosGlobalMainItemsByTerm()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalMainItemsByTerm$Response(
    params?: {
      term?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpGetXtraAndPosGlobalMainItemsByTermPath, 'get');
    if (params) {
      rb.query('term', params.term, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosGlobalMainItemsByTerm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalMainItemsByTerm(
    params?: {
      term?: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosGlobalMainItemsByTerm$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosGlobalPricePolicyTakeLast10()` */
  static readonly HttpGetXtraAndPosGlobalPricePolicyTakeLast10Path = '/XtraAndPOS_Global/PricePolicyTakeLast10';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosGlobalPricePolicyTakeLast10()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalPricePolicyTakeLast10$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpGetXtraAndPosGlobalPricePolicyTakeLast10Path, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosGlobalPricePolicyTakeLast10$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalPricePolicyTakeLast10(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosGlobalPricePolicyTakeLast10$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosGlobalPricePolicyByTerm()` */
  static readonly HttpGetXtraAndPosGlobalPricePolicyByTermPath = '/XtraAndPOS_Global/PricePolicyByTerm';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosGlobalPricePolicyByTerm()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalPricePolicyByTerm$Response(
    params?: {
      term?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpGetXtraAndPosGlobalPricePolicyByTermPath, 'get');
    if (params) {
      rb.query('term', params.term, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosGlobalPricePolicyByTerm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalPricePolicyByTerm(
    params?: {
      term?: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosGlobalPricePolicyByTerm$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosGlobalSalesManTakeLast10()` */
  static readonly HttpGetXtraAndPosGlobalSalesManTakeLast10Path = '/XtraAndPOS_Global/SalesManTakeLast10';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosGlobalSalesManTakeLast10()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalSalesManTakeLast10$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpGetXtraAndPosGlobalSalesManTakeLast10Path, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosGlobalSalesManTakeLast10$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalSalesManTakeLast10(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosGlobalSalesManTakeLast10$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosGlobalSalesManByTerm()` */
  static readonly HttpGetXtraAndPosGlobalSalesManByTermPath = '/XtraAndPOS_Global/SalesManByTerm';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosGlobalSalesManByTerm()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalSalesManByTerm$Response(
    params?: {
      term?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpGetXtraAndPosGlobalSalesManByTermPath, 'get');
    if (params) {
      rb.query('term', params.term, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosGlobalSalesManByTerm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalSalesManByTerm(
    params?: {
      term?: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosGlobalSalesManByTerm$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosGlobalCustomerTakeLast10()` */
  static readonly HttpGetXtraAndPosGlobalCustomerTakeLast10Path = '/XtraAndPOS_Global/CustomerTakeLast10';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosGlobalCustomerTakeLast10()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalCustomerTakeLast10$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpGetXtraAndPosGlobalCustomerTakeLast10Path, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosGlobalCustomerTakeLast10$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalCustomerTakeLast10(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosGlobalCustomerTakeLast10$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosGlobalCustomerByTerm()` */
  static readonly HttpGetXtraAndPosGlobalCustomerByTermPath = '/XtraAndPOS_Global/CustomerByTerm';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosGlobalCustomerByTerm()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalCustomerByTerm$Response(
    params?: {
      term?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpGetXtraAndPosGlobalCustomerByTermPath, 'get');
    if (params) {
      rb.query('term', params.term, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosGlobalCustomerByTerm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalCustomerByTerm(
    params?: {
      term?: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosGlobalCustomerByTerm$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosGlobalSuplierTakeLast10()` */
  static readonly HttpGetXtraAndPosGlobalSuplierTakeLast10Path = '/XtraAndPOS_Global/SuplierTakeLast10';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosGlobalSuplierTakeLast10()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalSuplierTakeLast10$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpGetXtraAndPosGlobalSuplierTakeLast10Path, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosGlobalSuplierTakeLast10$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalSuplierTakeLast10(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosGlobalSuplierTakeLast10$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosGlobalSuplierByTerm()` */
  static readonly HttpGetXtraAndPosGlobalSuplierByTermPath = '/XtraAndPOS_Global/SuplierByTerm';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosGlobalSuplierByTerm()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalSuplierByTerm$Response(
    params?: {
      term?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpGetXtraAndPosGlobalSuplierByTermPath, 'get');
    if (params) {
      rb.query('term', params.term, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosGlobalSuplierByTerm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalSuplierByTerm(
    params?: {
      term?: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosGlobalSuplierByTerm$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosGlobalGetSupplierById()` */
  static readonly HttpGetXtraAndPosGlobalGetSupplierByIdPath = '/XtraAndPOS_Global/GetSupplierById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosGlobalGetSupplierById()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalGetSupplierById$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpGetXtraAndPosGlobalGetSupplierByIdPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosGlobalGetSupplierById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalGetSupplierById(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosGlobalGetSupplierById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosGlobalGetItemUnitById()` */
  static readonly HttpGetXtraAndPosGlobalGetItemUnitByIdPath = '/XtraAndPOS_Global/GetItemUnitById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosGlobalGetItemUnitById()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalGetItemUnitById$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpGetXtraAndPosGlobalGetItemUnitByIdPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosGlobalGetItemUnitById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalGetItemUnitById(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosGlobalGetItemUnitById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosGlobalGetItemById()` */
  static readonly HttpGetXtraAndPosGlobalGetItemByIdPath = '/XtraAndPOS_Global/GetItemById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosGlobalGetItemById()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalGetItemById$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpGetXtraAndPosGlobalGetItemByIdPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosGlobalGetItemById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalGetItemById(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosGlobalGetItemById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosGlobalGetClientById()` */
  static readonly HttpGetXtraAndPosGlobalGetClientByIdPath = '/XtraAndPOS_Global/GetClientById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosGlobalGetClientById()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalGetClientById$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpGetXtraAndPosGlobalGetClientByIdPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosGlobalGetClientById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalGetClientById(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosGlobalGetClientById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostXtraAndPosGlobalItemUnitDataTable()` */
  static readonly HttpPostXtraAndPosGlobalItemUnitDataTablePath = '/XtraAndPOS_Global/ItemUnitDataTable';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosGlobalItemUnitDataTable()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosGlobalItemUnitDataTable$Response(
    params?: {
      body?: ItemUnitDataTableJqdtParams
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpPostXtraAndPosGlobalItemUnitDataTablePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosGlobalItemUnitDataTable$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosGlobalItemUnitDataTable(
    params?: {
      body?: ItemUnitDataTableJqdtParams
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosGlobalItemUnitDataTable$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosGlobalGetItemUnitByIdAndUnitId()` */
  static readonly HttpGetXtraAndPosGlobalGetItemUnitByIdAndUnitIdPath = '/XtraAndPOS_Global/GetItemUnitByIdAndUnitId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosGlobalGetItemUnitByIdAndUnitId()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalGetItemUnitByIdAndUnitId$Response(
    params: {
      id: number;
      UnitId: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpGetXtraAndPosGlobalGetItemUnitByIdAndUnitIdPath, 'get');
    if (params) {
      rb.query('id', params.id, {"style":"form"});
      rb.query('UnitId', params.UnitId, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosGlobalGetItemUnitByIdAndUnitId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalGetItemUnitByIdAndUnitId(
    params: {
      id: number;
      UnitId: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosGlobalGetItemUnitByIdAndUnitId$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosGlobalGetItems()` */
  static readonly HttpGetXtraAndPosGlobalGetItemsPath = '/XtraAndPOS_Global/GetItems';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosGlobalGetItems()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalGetItems$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpGetXtraAndPosGlobalGetItemsPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosGlobalGetItems$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalGetItems(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosGlobalGetItems$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosGlobalGetItemUnitsByGroupId()` */
  static readonly HttpGetXtraAndPosGlobalGetItemUnitsByGroupIdPath = '/XtraAndPOS_Global/GetItemUnitsByGroupId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosGlobalGetItemUnitsByGroupId()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalGetItemUnitsByGroupId$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpGetXtraAndPosGlobalGetItemUnitsByGroupIdPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosGlobalGetItemUnitsByGroupId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalGetItemUnitsByGroupId(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosGlobalGetItemUnitsByGroupId$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosGlobalGetItemUnitsForSuplier()` */
  static readonly HttpGetXtraAndPosGlobalGetItemUnitsForSuplierPath = '/XtraAndPOS_Global/GetItemUnitsForSuplier';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosGlobalGetItemUnitsForSuplier()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalGetItemUnitsForSuplier$Response(
    params: {
      SupplierId: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpGetXtraAndPosGlobalGetItemUnitsForSuplierPath, 'get');
    if (params) {
      rb.query('SupplierId', params.SupplierId, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosGlobalGetItemUnitsForSuplier$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalGetItemUnitsForSuplier(
    params: {
      SupplierId: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosGlobalGetItemUnitsForSuplier$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosGlobalGetItemUnitsByBarcodeAndNameArAndCodeAndItemCode()` */
  static readonly HttpGetXtraAndPosGlobalGetItemUnitsByBarcodeAndNameArAndCodeAndItemCodePath = '/XtraAndPOS_Global/GetItemUnitsByBarcodeAndNameArAndCodeAndItemCode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosGlobalGetItemUnitsByBarcodeAndNameArAndCodeAndItemCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalGetItemUnitsByBarcodeAndNameArAndCodeAndItemCode$Response(
    params?: {
      value?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpGetXtraAndPosGlobalGetItemUnitsByBarcodeAndNameArAndCodeAndItemCodePath, 'get');
    if (params) {
      rb.query('value', params.value, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosGlobalGetItemUnitsByBarcodeAndNameArAndCodeAndItemCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalGetItemUnitsByBarcodeAndNameArAndCodeAndItemCode(
    params?: {
      value?: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosGlobalGetItemUnitsByBarcodeAndNameArAndCodeAndItemCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosGlobalGetItemUnitsByItemGroupGuid()` */
  static readonly HttpGetXtraAndPosGlobalGetItemUnitsByItemGroupGuidPath = '/XtraAndPOS_Global/GetItemUnitsByItemGroupGuid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosGlobalGetItemUnitsByItemGroupGuid()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalGetItemUnitsByItemGroupGuid$Response(
    params: {
      ItemGroupGuid: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpGetXtraAndPosGlobalGetItemUnitsByItemGroupGuidPath, 'get');
    if (params) {
      rb.query('ItemGroupGuid', params.ItemGroupGuid, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosGlobalGetItemUnitsByItemGroupGuid$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalGetItemUnitsByItemGroupGuid(
    params: {
      ItemGroupGuid: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosGlobalGetItemUnitsByItemGroupGuid$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosGlobalGetItemByItemId()` */
  static readonly HttpGetXtraAndPosGlobalGetItemByItemIdPath = '/XtraAndPOS_Global/GetItemByItemId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosGlobalGetItemByItemId()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalGetItemByItemId$Response(
    params: {
      ItemId: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpGetXtraAndPosGlobalGetItemByItemIdPath, 'get');
    if (params) {
      rb.query('ItemId', params.ItemId, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosGlobalGetItemByItemId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalGetItemByItemId(
    params: {
      ItemId: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosGlobalGetItemByItemId$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosGlobalAccTreeTerm()` */
  static readonly HttpGetXtraAndPosGlobalAccTreeTermPath = '/XtraAndPOS_Global/AccTreeTerm';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosGlobalAccTreeTerm()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalAccTreeTerm$Response(
    params?: {
      term?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpGetXtraAndPosGlobalAccTreeTermPath, 'get');
    if (params) {
      rb.query('term', params.term, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosGlobalAccTreeTerm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalAccTreeTerm(
    params?: {
      term?: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosGlobalAccTreeTerm$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosGlobalClientTerm()` */
  static readonly HttpGetXtraAndPosGlobalClientTermPath = '/XtraAndPOS_Global/ClientTerm';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosGlobalClientTerm()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalClientTerm$Response(
    params?: {
      term?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpGetXtraAndPosGlobalClientTermPath, 'get');
    if (params) {
      rb.query('term', params.term, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosGlobalClientTerm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalClientTerm(
    params?: {
      term?: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosGlobalClientTerm$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosGlobalMainClientTerm()` */
  static readonly HttpGetXtraAndPosGlobalMainClientTermPath = '/XtraAndPOS_Global/MainClientTerm';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosGlobalMainClientTerm()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalMainClientTerm$Response(
    params?: {
      term?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpGetXtraAndPosGlobalMainClientTermPath, 'get');
    if (params) {
      rb.query('term', params.term, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosGlobalMainClientTerm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalMainClientTerm(
    params?: {
      term?: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosGlobalMainClientTerm$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostXtraAndPosGlobalAccTreeDataTable()` */
  static readonly HttpPostXtraAndPosGlobalAccTreeDataTablePath = '/XtraAndPOS_Global/AccTreeDataTable';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosGlobalAccTreeDataTable()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosGlobalAccTreeDataTable$Response(
    params?: {
      body?: ItemUnitDataTableJqdtParams
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpPostXtraAndPosGlobalAccTreeDataTablePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosGlobalAccTreeDataTable$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosGlobalAccTreeDataTable(
    params?: {
      body?: ItemUnitDataTableJqdtParams
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosGlobalAccTreeDataTable$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostXtraAndPosGlobalAccTreeDataTableForModal()` */
  static readonly HttpPostXtraAndPosGlobalAccTreeDataTableForModalPath = '/XtraAndPOS_Global/AccTreeDataTableForModal';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosGlobalAccTreeDataTableForModal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosGlobalAccTreeDataTableForModal$Response(
    params?: {
      body?: ItemUnitDataTableJqdtParams
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpPostXtraAndPosGlobalAccTreeDataTableForModalPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosGlobalAccTreeDataTableForModal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosGlobalAccTreeDataTableForModal(
    params?: {
      body?: ItemUnitDataTableJqdtParams
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosGlobalAccTreeDataTableForModal$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostXtraAndPosGlobalAccTreeDataTableMultiSelect()` */
  static readonly HttpPostXtraAndPosGlobalAccTreeDataTableMultiSelectPath = '/XtraAndPOS_Global/AccTreeDataTableMultiSelect';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosGlobalAccTreeDataTableMultiSelect()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosGlobalAccTreeDataTableMultiSelect$Response(
    params?: {
      body?: ItemUnitDataTableJqdtParams
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpPostXtraAndPosGlobalAccTreeDataTableMultiSelectPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosGlobalAccTreeDataTableMultiSelect$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosGlobalAccTreeDataTableMultiSelect(
    params?: {
      body?: ItemUnitDataTableJqdtParams
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosGlobalAccTreeDataTableMultiSelect$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosGlobalGetAccountTreebyId()` */
  static readonly HttpGetXtraAndPosGlobalGetAccountTreebyIdPath = '/XtraAndPOS_Global/GetAccountTreebyId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosGlobalGetAccountTreebyId()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalGetAccountTreebyId$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpGetXtraAndPosGlobalGetAccountTreebyIdPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosGlobalGetAccountTreebyId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalGetAccountTreebyId(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosGlobalGetAccountTreebyId$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosGlobalAccountTreeByTerm()` */
  static readonly HttpGetXtraAndPosGlobalAccountTreeByTermPath = '/XtraAndPOS_Global/AccountTreeByTerm';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosGlobalAccountTreeByTerm()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalAccountTreeByTerm$Response(
    params?: {
      term?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosGlobalService.HttpGetXtraAndPosGlobalAccountTreeByTermPath, 'get');
    if (params) {
      rb.query('term', params.term, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosGlobalAccountTreeByTerm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosGlobalAccountTreeByTerm(
    params?: {
      term?: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosGlobalAccountTreeByTerm$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
