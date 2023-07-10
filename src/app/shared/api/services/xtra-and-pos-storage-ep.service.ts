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

import { ItemBalanceStorageDto } from '../models/item-balance-storage-dto';
import { RequestResult } from '../models/request-result';
import { SearchStorage } from '../models/search-storage';
import { Storage } from '../models/storage';
import { StorageOpenDto } from '../models/storage-open-dto';
import { StoreAdjustment } from '../models/store-adjustment';
import { StoreAdjustmentUploadedFile } from '../models/store-adjustment-uploaded-file';
import { Transfer } from '../models/transfer';

@Injectable({ providedIn: 'root' })
export class XtraAndPosStorageEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetExtraAndPosStorageManagementInfo()` */
  static readonly HttpGetExtraAndPosStorageManagementInfoPath = '/ExtraAndPOS_Storage/ManagementInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosStorageManagementInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosStorageManagementInfo$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosStorageEpService.HttpGetExtraAndPosStorageManagementInfoPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosStorageManagementInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosStorageManagementInfo(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosStorageManagementInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetExtraAndPosStorageStoreAdjustmentInfo()` */
  static readonly HttpGetExtraAndPosStorageStoreAdjustmentInfoPath = '/ExtraAndPOS_Storage/StoreAdjustmentInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosStorageStoreAdjustmentInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosStorageStoreAdjustmentInfo$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosStorageEpService.HttpGetExtraAndPosStorageStoreAdjustmentInfoPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosStorageStoreAdjustmentInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosStorageStoreAdjustmentInfo(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosStorageStoreAdjustmentInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutExtraandposStorageUpdateStoreAdjustment()` */
  static readonly HttpPutExtraandposStorageUpdateStoreAdjustmentPath = '/extraandpos_storage/UpdateStoreAdjustment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutExtraandposStorageUpdateStoreAdjustment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraandposStorageUpdateStoreAdjustment$Response(
    params?: {
      body?: StoreAdjustment
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosStorageEpService.HttpPutExtraandposStorageUpdateStoreAdjustmentPath, 'put');
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
   * To access the full response (for headers, for example), `httpPutExtraandposStorageUpdateStoreAdjustment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraandposStorageUpdateStoreAdjustment(
    params?: {
      body?: StoreAdjustment
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutExtraandposStorageUpdateStoreAdjustment$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosStorageCreateStoreAdjustment()` */
  static readonly HttpPostExtraAndPosStorageCreateStoreAdjustmentPath = '/ExtraAndPOS_Storage/CreateStoreAdjustment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosStorageCreateStoreAdjustment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosStorageCreateStoreAdjustment$Response(
    params?: {
      body?: StoreAdjustment
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosStorageEpService.HttpPostExtraAndPosStorageCreateStoreAdjustmentPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosStorageCreateStoreAdjustment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosStorageCreateStoreAdjustment(
    params?: {
      body?: StoreAdjustment
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosStorageCreateStoreAdjustment$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteExtraAndPosStorageDeleteStoreAdjustment()` */
  static readonly HttpDeleteExtraAndPosStorageDeleteStoreAdjustmentPath = '/ExtraAndPOS_Storage/DeleteStoreAdjustment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteExtraAndPosStorageDeleteStoreAdjustment()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosStorageDeleteStoreAdjustment$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosStorageEpService.HttpDeleteExtraAndPosStorageDeleteStoreAdjustmentPath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteExtraAndPosStorageDeleteStoreAdjustment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosStorageDeleteStoreAdjustment(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteExtraAndPosStorageDeleteStoreAdjustment$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosStorageCreate()` */
  static readonly HttpPostExtraAndPosStorageCreatePath = '/ExtraAndPOS_Storage/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosStorageCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosStorageCreate$Response(
    params?: {
      body?: Storage
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosStorageEpService.HttpPostExtraAndPosStorageCreatePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosStorageCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosStorageCreate(
    params?: {
      body?: Storage
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosStorageCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosStorageTransferGetByArrow()` */
  static readonly HttpPostExtraAndPosStorageTransferGetByArrowPath = '/ExtraAndPOS_StorageTransfer/GetByArrow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosStorageTransferGetByArrow()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosStorageTransferGetByArrow$Response(
    params?: {
      body?: RequestResult
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosStorageEpService.HttpPostExtraAndPosStorageTransferGetByArrowPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosStorageTransferGetByArrow$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosStorageTransferGetByArrow(
    params?: {
      body?: RequestResult
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosStorageTransferGetByArrow$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetExtraAndPosStorageTransferManagementInfo()` */
  static readonly HttpGetExtraAndPosStorageTransferManagementInfoPath = '/ExtraAndPOS_StorageTransfer/ManagementInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosStorageTransferManagementInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosStorageTransferManagementInfo$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosStorageEpService.HttpGetExtraAndPosStorageTransferManagementInfoPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosStorageTransferManagementInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosStorageTransferManagementInfo(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosStorageTransferManagementInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosStorageTransferCreate()` */
  static readonly HttpPostExtraAndPosStorageTransferCreatePath = '/ExtraAndPOS_StorageTransfer/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosStorageTransferCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosStorageTransferCreate$Response(
    params?: {
      body?: Transfer
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosStorageEpService.HttpPostExtraAndPosStorageTransferCreatePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosStorageTransferCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosStorageTransferCreate(
    params?: {
      body?: Transfer
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosStorageTransferCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutExtraAndPosStorageTransferUpdate()` */
  static readonly HttpPutExtraAndPosStorageTransferUpdatePath = '/ExtraAndPOS_StorageTransfer/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutExtraAndPosStorageTransferUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosStorageTransferUpdate$Response(
    params?: {
      body?: Transfer
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosStorageEpService.HttpPutExtraAndPosStorageTransferUpdatePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutExtraAndPosStorageTransferUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosStorageTransferUpdate(
    params?: {
      body?: Transfer
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutExtraAndPosStorageTransferUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteExtraAndPosStorageTransferDeleteTransfer()` */
  static readonly HttpDeleteExtraAndPosStorageTransferDeleteTransferPath = '/ExtraAndPOS_StorageTransfer/DeleteTransfer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteExtraAndPosStorageTransferDeleteTransfer()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosStorageTransferDeleteTransfer$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosStorageEpService.HttpDeleteExtraAndPosStorageTransferDeleteTransferPath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteExtraAndPosStorageTransferDeleteTransfer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosStorageTransferDeleteTransfer(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteExtraAndPosStorageTransferDeleteTransfer$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutExtraAndPosStorageTransferUpdateStorge()` */
  static readonly HttpPutExtraAndPosStorageTransferUpdateStorgePath = '/ExtraAndPOS_StorageTransfer/UpdateStorge';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutExtraAndPosStorageTransferUpdateStorge()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosStorageTransferUpdateStorge$Response(
    params?: {
      body?: Storage
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosStorageEpService.HttpPutExtraAndPosStorageTransferUpdateStorgePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutExtraAndPosStorageTransferUpdateStorge$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosStorageTransferUpdateStorge(
    params?: {
      body?: Storage
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutExtraAndPosStorageTransferUpdateStorge$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteExtraAndPosStorageTransferDelete()` */
  static readonly HttpDeleteExtraAndPosStorageTransferDeletePath = '/ExtraAndPOS_StorageTransfer/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteExtraAndPosStorageTransferDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosStorageTransferDelete$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosStorageEpService.HttpDeleteExtraAndPosStorageTransferDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteExtraAndPosStorageTransferDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosStorageTransferDelete(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteExtraAndPosStorageTransferDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosStorageTransferGetItemBalanceFromStorage()` */
  static readonly HttpPostExtraAndPosStorageTransferGetItemBalanceFromStoragePath = '/ExtraAndPOS_StorageTransfer/GetItemBalanceFromStorage';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosStorageTransferGetItemBalanceFromStorage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosStorageTransferGetItemBalanceFromStorage$Response(
    params?: {
      body?: ItemBalanceStorageDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosStorageEpService.HttpPostExtraAndPosStorageTransferGetItemBalanceFromStoragePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosStorageTransferGetItemBalanceFromStorage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosStorageTransferGetItemBalanceFromStorage(
    params?: {
      body?: ItemBalanceStorageDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosStorageTransferGetItemBalanceFromStorage$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteExtraAndPosDeleteOpenStorageDelete()` */
  static readonly HttpDeleteExtraAndPosDeleteOpenStorageDeletePath = '/ExtraAndPOS_DeleteOpenStorage/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteExtraAndPosDeleteOpenStorageDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosDeleteOpenStorageDelete$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosStorageEpService.HttpDeleteExtraAndPosDeleteOpenStorageDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteExtraAndPosDeleteOpenStorageDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosDeleteOpenStorageDelete(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteExtraAndPosDeleteOpenStorageDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutExtraAndPosUpdateOpenStorageUpdate()` */
  static readonly HttpPutExtraAndPosUpdateOpenStorageUpdatePath = '/ExtraAndPOS_UpdateOpenStorage/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutExtraAndPosUpdateOpenStorageUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosUpdateOpenStorageUpdate$Response(
    params?: {
      body?: StorageOpenDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosStorageEpService.HttpPutExtraAndPosUpdateOpenStorageUpdatePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutExtraAndPosUpdateOpenStorageUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosUpdateOpenStorageUpdate(
    params?: {
      body?: StorageOpenDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutExtraAndPosUpdateOpenStorageUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetExtraAndPosGetAllOpenStorageGetAll()` */
  static readonly HttpGetExtraAndPosGetAllOpenStorageGetAllPath = '/ExtraAndPOS_GetAllOpenStorage/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosGetAllOpenStorageGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosGetAllOpenStorageGetAll$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosStorageEpService.HttpGetExtraAndPosGetAllOpenStorageGetAllPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosGetAllOpenStorageGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosGetAllOpenStorageGetAll(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosGetAllOpenStorageGetAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosTransferTransferByArrow()` */
  static readonly HttpPostExtraAndPosTransferTransferByArrowPath = '/ExtraAndPOS_Transfer/TransferByArrow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosTransferTransferByArrow()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosTransferTransferByArrow$Response(
    params?: {
      body?: RequestResult
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosStorageEpService.HttpPostExtraAndPosTransferTransferByArrowPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosTransferTransferByArrow$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosTransferTransferByArrow(
    params?: {
      body?: RequestResult
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosTransferTransferByArrow$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosCreateOpenStorageCreate()` */
  static readonly HttpPostExtraAndPosCreateOpenStorageCreatePath = '/ExtraAndPOS_CreateOpenStorage/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosCreateOpenStorageCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosCreateOpenStorageCreate$Response(
    params?: {
      body?: StorageOpenDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosStorageEpService.HttpPostExtraAndPosCreateOpenStorageCreatePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosCreateOpenStorageCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosCreateOpenStorageCreate(
    params?: {
      body?: StorageOpenDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosCreateOpenStorageCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosStorageTransferSearch()` */
  static readonly HttpPostExtraAndPosStorageTransferSearchPath = '/ExtraAndPOS_StorageTransfer/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosStorageTransferSearch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosStorageTransferSearch$Response(
    params?: {
      body?: SearchStorage
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosStorageEpService.HttpPostExtraAndPosStorageTransferSearchPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosStorageTransferSearch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosStorageTransferSearch(
    params?: {
      body?: SearchStorage
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosStorageTransferSearch$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetStorageGetAllForDropDown()` */
  static readonly HttpGetStorageGetAllForDropDownPath = '/Storage/GetAllForDropDown';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetStorageGetAllForDropDown()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetStorageGetAllForDropDown$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosStorageEpService.HttpGetStorageGetAllForDropDownPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetStorageGetAllForDropDown$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetStorageGetAllForDropDown(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetStorageGetAllForDropDown$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostUpdateStoreAdjustmentGetStoreAdjustmentUploaded()` */
  static readonly HttpPostUpdateStoreAdjustmentGetStoreAdjustmentUploadedPath = '/UpdateStoreAdjustment/GetStoreAdjustmentUploaded';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostUpdateStoreAdjustmentGetStoreAdjustmentUploaded()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostUpdateStoreAdjustmentGetStoreAdjustmentUploaded$Response(
    params?: {
      body?: StoreAdjustmentUploadedFile
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosStorageEpService.HttpPostUpdateStoreAdjustmentGetStoreAdjustmentUploadedPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostUpdateStoreAdjustmentGetStoreAdjustmentUploaded$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostUpdateStoreAdjustmentGetStoreAdjustmentUploaded(
    params?: {
      body?: StoreAdjustmentUploadedFile
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostUpdateStoreAdjustmentGetStoreAdjustmentUploaded$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
