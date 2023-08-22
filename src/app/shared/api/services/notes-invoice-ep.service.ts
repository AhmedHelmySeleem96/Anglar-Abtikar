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

import { NotesInvoice } from '../models/notes-invoice';

@Injectable({ providedIn: 'root' })
export class NotesInvoiceEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetNotesInvoiceGetAll()` */
  static readonly HttpGetNotesInvoiceGetAllPath = '/NotesInvoice/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetNotesInvoiceGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetNotesInvoiceGetAll$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, NotesInvoiceEpService.HttpGetNotesInvoiceGetAllPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetNotesInvoiceGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetNotesInvoiceGetAll(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetNotesInvoiceGetAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostNotesInvoiceCreate()` */
  static readonly HttpPostNotesInvoiceCreatePath = '/NotesInvoice/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostNotesInvoiceCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostNotesInvoiceCreate$Response(
    params?: {
      body?: NotesInvoice
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, NotesInvoiceEpService.HttpPostNotesInvoiceCreatePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostNotesInvoiceCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostNotesInvoiceCreate(
    params?: {
      body?: NotesInvoice
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostNotesInvoiceCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutNotesInvoiceUpdate()` */
  static readonly HttpPutNotesInvoiceUpdatePath = '/NotesInvoice/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutNotesInvoiceUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutNotesInvoiceUpdate$Response(
    params?: {
      body?: NotesInvoice
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, NotesInvoiceEpService.HttpPutNotesInvoiceUpdatePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutNotesInvoiceUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutNotesInvoiceUpdate(
    params?: {
      body?: NotesInvoice
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutNotesInvoiceUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteNotesInvoiceDelete()` */
  static readonly HttpDeleteNotesInvoiceDeletePath = '/NotesInvoice/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteNotesInvoiceDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteNotesInvoiceDelete$Response(
    params: {
      Id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, NotesInvoiceEpService.HttpDeleteNotesInvoiceDeletePath, 'delete');
    if (params) {
      rb.query('Id', params.Id, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpDeleteNotesInvoiceDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteNotesInvoiceDelete(
    params: {
      Id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteNotesInvoiceDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
