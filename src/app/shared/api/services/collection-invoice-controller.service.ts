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

import { CollectionInvoice } from '../models/collection-invoice';

@Injectable({ providedIn: 'root' })
export class CollectionInvoiceControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetClientInvoicesGetClients()` */
  static readonly HttpGetClientInvoicesGetClientsPath = '/Client_Invoices/GetClients';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetClientInvoicesGetClients()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetClientInvoicesGetClients$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, CollectionInvoiceControllerService.HttpGetClientInvoicesGetClientsPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetClientInvoicesGetClients$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetClientInvoicesGetClients(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetClientInvoicesGetClients$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetClientInvoicesGetInvoices()` */
  static readonly HttpGetClientInvoicesGetInvoicesPath = '/Client_Invoices/GetInvoices';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetClientInvoicesGetInvoices()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetClientInvoicesGetInvoices$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, CollectionInvoiceControllerService.HttpGetClientInvoicesGetInvoicesPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetClientInvoicesGetInvoices$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetClientInvoicesGetInvoices(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetClientInvoicesGetInvoices$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostClientInvoicesUpdatePrice()` */
  static readonly HttpPostClientInvoicesUpdatePricePath = '/Client_Invoices/UpdatePrice';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostClientInvoicesUpdatePrice()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostClientInvoicesUpdatePrice$Response(
    params?: {
      body?: CollectionInvoice
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, CollectionInvoiceControllerService.HttpPostClientInvoicesUpdatePricePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostClientInvoicesUpdatePrice$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostClientInvoicesUpdatePrice(
    params?: {
      body?: CollectionInvoice
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostClientInvoicesUpdatePrice$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
