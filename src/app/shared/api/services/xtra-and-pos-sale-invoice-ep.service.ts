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

import { RequestResult } from '../models/request-result';
import { SaleInvoice } from '../models/sale-invoice';
import { SaleinvoicefilterDto } from '../models/saleinvoicefilter-dto';
import { SearchModel } from '../models/search-model';

@Injectable({ providedIn: 'root' })
export class XtraAndPosSaleInvoiceEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpPostExtraAndPosSaleInvoiceCreate()` */
  static readonly HttpPostExtraAndPosSaleInvoiceCreatePath = '/ExtraAndPOS_SaleInvoice/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosSaleInvoiceCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosSaleInvoiceCreate$Response(
    params?: {
      body?: SaleInvoice
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosSaleInvoiceEpService.HttpPostExtraAndPosSaleInvoiceCreatePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosSaleInvoiceCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosSaleInvoiceCreate(
    params?: {
      body?: SaleInvoice
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosSaleInvoiceCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutExtraAndPosSaleInvoiceUpdate()` */
  static readonly HttpPutExtraAndPosSaleInvoiceUpdatePath = '/ExtraAndPOS_SaleInvoice/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutExtraAndPosSaleInvoiceUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosSaleInvoiceUpdate$Response(
    params?: {
      body?: SaleInvoice
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosSaleInvoiceEpService.HttpPutExtraAndPosSaleInvoiceUpdatePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutExtraAndPosSaleInvoiceUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosSaleInvoiceUpdate(
    params?: {
      body?: SaleInvoice
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutExtraAndPosSaleInvoiceUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosSaleInvoiceGetByArrow()` */
  static readonly HttpPostExtraAndPosSaleInvoiceGetByArrowPath = '/ExtraAndPOS_SaleInvoice/GetByArrow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosSaleInvoiceGetByArrow()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosSaleInvoiceGetByArrow$Response(
    params?: {
      body?: RequestResult
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosSaleInvoiceEpService.HttpPostExtraAndPosSaleInvoiceGetByArrowPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosSaleInvoiceGetByArrow$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosSaleInvoiceGetByArrow(
    params?: {
      body?: RequestResult
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosSaleInvoiceGetByArrow$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetExtraAndPosSaleInvoiceGetByNo()` */
  static readonly HttpGetExtraAndPosSaleInvoiceGetByNoPath = '/ExtraAndPOS_SaleInvoice/GetByNo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosSaleInvoiceGetByNo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosSaleInvoiceGetByNo$Response(
    params: {
      data: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosSaleInvoiceEpService.HttpGetExtraAndPosSaleInvoiceGetByNoPath, 'get');
    if (params) {
      rb.query('data', params.data, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosSaleInvoiceGetByNo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosSaleInvoiceGetByNo(
    params: {
      data: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosSaleInvoiceGetByNo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetExtraAndPosSaleInvoiceGetOfferToInvoice()` */
  static readonly HttpGetExtraAndPosSaleInvoiceGetOfferToInvoicePath = '/ExtraAndPOS_SaleInvoice/GetOfferToInvoice';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosSaleInvoiceGetOfferToInvoice()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosSaleInvoiceGetOfferToInvoice$Response(
    params: {
      no: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosSaleInvoiceEpService.HttpGetExtraAndPosSaleInvoiceGetOfferToInvoicePath, 'get');
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosSaleInvoiceGetOfferToInvoice$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosSaleInvoiceGetOfferToInvoice(
    params: {
      no: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosSaleInvoiceGetOfferToInvoice$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosSaleInvoiceItemBanalnce()` */
  static readonly HttpPostExtraAndPosSaleInvoiceItemBanalncePath = '/ExtraAndPOS_SaleInvoice/ItemBanalnce';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosSaleInvoiceItemBanalnce()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpPostExtraAndPosSaleInvoiceItemBanalnce$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosSaleInvoiceEpService.HttpPostExtraAndPosSaleInvoiceItemBanalncePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosSaleInvoiceItemBanalnce$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpPostExtraAndPosSaleInvoiceItemBanalnce(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosSaleInvoiceItemBanalnce$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetExtraAndPosSaleInvoiceManagementInfo()` */
  static readonly HttpGetExtraAndPosSaleInvoiceManagementInfoPath = '/ExtraAndPOS_SaleInvoice/ManagementInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosSaleInvoiceManagementInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosSaleInvoiceManagementInfo$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosSaleInvoiceEpService.HttpGetExtraAndPosSaleInvoiceManagementInfoPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosSaleInvoiceManagementInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosSaleInvoiceManagementInfo(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosSaleInvoiceManagementInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosSaleInvoiceList()` */
  static readonly HttpPostExtraAndPosSaleInvoiceListPath = '/ExtraAndPOS_SaleInvoice/List';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosSaleInvoiceList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosSaleInvoiceList$Response(
    params?: {
      body?: SearchModel
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosSaleInvoiceEpService.HttpPostExtraAndPosSaleInvoiceListPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosSaleInvoiceList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosSaleInvoiceList(
    params?: {
      body?: SearchModel
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosSaleInvoiceList$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetExtraAndPosSaleInvoiceSearchInfo()` */
  static readonly HttpGetExtraAndPosSaleInvoiceSearchInfoPath = '/ExtraAndPOS_SaleInvoice/SearchInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosSaleInvoiceSearchInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosSaleInvoiceSearchInfo$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosSaleInvoiceEpService.HttpGetExtraAndPosSaleInvoiceSearchInfoPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosSaleInvoiceSearchInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosSaleInvoiceSearchInfo(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosSaleInvoiceSearchInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetExtraAndPosSaleInvoiceGetById()` */
  static readonly HttpGetExtraAndPosSaleInvoiceGetByIdPath = '/ExtraAndPOS_SaleInvoice/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosSaleInvoiceGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosSaleInvoiceGetById$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosSaleInvoiceEpService.HttpGetExtraAndPosSaleInvoiceGetByIdPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosSaleInvoiceGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosSaleInvoiceGetById(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosSaleInvoiceGetById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetExtraAndPosSaleInvoiceGetByShiftId()` */
  static readonly HttpGetExtraAndPosSaleInvoiceGetByShiftIdPath = '/ExtraAndPOS_SaleInvoice/GetByShiftId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosSaleInvoiceGetByShiftId()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosSaleInvoiceGetByShiftId$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosSaleInvoiceEpService.HttpGetExtraAndPosSaleInvoiceGetByShiftIdPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosSaleInvoiceGetByShiftId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosSaleInvoiceGetByShiftId(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosSaleInvoiceGetByShiftId$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetExtraAndPosSaleInvoiceGetReturnById()` */
  static readonly HttpGetExtraAndPosSaleInvoiceGetReturnByIdPath = '/ExtraAndPOS_SaleInvoice/GetReturnById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosSaleInvoiceGetReturnById()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosSaleInvoiceGetReturnById$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosSaleInvoiceEpService.HttpGetExtraAndPosSaleInvoiceGetReturnByIdPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosSaleInvoiceGetReturnById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosSaleInvoiceGetReturnById(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosSaleInvoiceGetReturnById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosSaleInvoiceInvLIstByOffer()` */
  static readonly HttpPostExtraAndPosSaleInvoiceInvLIstByOfferPath = '/ExtraAndPOS_SaleInvoice/InvLIstByOffer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosSaleInvoiceInvLIstByOffer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosSaleInvoiceInvLIstByOffer$Response(
    params?: {
      body?: SaleinvoicefilterDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosSaleInvoiceEpService.HttpPostExtraAndPosSaleInvoiceInvLIstByOfferPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosSaleInvoiceInvLIstByOffer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosSaleInvoiceInvLIstByOffer(
    params?: {
      body?: SaleinvoicefilterDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosSaleInvoiceInvLIstByOffer$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteExtraAndPosSaleInvoiceDelete()` */
  static readonly HttpDeleteExtraAndPosSaleInvoiceDeletePath = '/ExtraAndPOS_SaleInvoice/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteExtraAndPosSaleInvoiceDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosSaleInvoiceDelete$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosSaleInvoiceEpService.HttpDeleteExtraAndPosSaleInvoiceDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteExtraAndPosSaleInvoiceDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosSaleInvoiceDelete(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteExtraAndPosSaleInvoiceDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
