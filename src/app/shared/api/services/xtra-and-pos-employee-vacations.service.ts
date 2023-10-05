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

import { EmpPreviousVacationsBalanceDto } from '../models/emp-previous-vacations-balance-dto';
import { EmployeeVacationTrxDto } from '../models/employee-vacation-trx-dto';
import { EmployeeVacationsDto } from '../models/employee-vacations-dto';

@Injectable({ providedIn: 'root' })
export class XtraAndPosEmployeeVacationsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpPostXtraAndPosEmployeeVacationsCreateEmployeeVacationsService()` */
  static readonly HttpPostXtraAndPosEmployeeVacationsCreateEmployeeVacationsServicePath = '/XtraAndPOS_EmployeeVacations/CreateEmployeeVacationsService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosEmployeeVacationsCreateEmployeeVacationsService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosEmployeeVacationsCreateEmployeeVacationsService$Response(
    params?: {
      body?: EmployeeVacationsDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeVacationsService.HttpPostXtraAndPosEmployeeVacationsCreateEmployeeVacationsServicePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosEmployeeVacationsCreateEmployeeVacationsService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosEmployeeVacationsCreateEmployeeVacationsService(
    params?: {
      body?: EmployeeVacationsDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosEmployeeVacationsCreateEmployeeVacationsService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostXtraAndPosEmployeeVacationsCreateEmployeeVacationBalanceService()` */
  static readonly HttpPostXtraAndPosEmployeeVacationsCreateEmployeeVacationBalanceServicePath = '/XtraAndPOS_EmployeeVacations/CreateEmployeeVacationBalanceService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosEmployeeVacationsCreateEmployeeVacationBalanceService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosEmployeeVacationsCreateEmployeeVacationBalanceService$Response(
    params?: {
      body?: EmpPreviousVacationsBalanceDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeVacationsService.HttpPostXtraAndPosEmployeeVacationsCreateEmployeeVacationBalanceServicePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosEmployeeVacationsCreateEmployeeVacationBalanceService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosEmployeeVacationsCreateEmployeeVacationBalanceService(
    params?: {
      body?: EmpPreviousVacationsBalanceDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosEmployeeVacationsCreateEmployeeVacationBalanceService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostXtraAndPosEmployeeVacationsCreateEmployeeVacationTrxService()` */
  static readonly HttpPostXtraAndPosEmployeeVacationsCreateEmployeeVacationTrxServicePath = '/XtraAndPOS_EmployeeVacations/CreateEmployeeVacationTrxService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosEmployeeVacationsCreateEmployeeVacationTrxService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosEmployeeVacationsCreateEmployeeVacationTrxService$Response(
    params?: {
      body?: EmployeeVacationTrxDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeVacationsService.HttpPostXtraAndPosEmployeeVacationsCreateEmployeeVacationTrxServicePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosEmployeeVacationsCreateEmployeeVacationTrxService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostXtraAndPosEmployeeVacationsCreateEmployeeVacationTrxService(
    params?: {
      body?: EmployeeVacationTrxDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosEmployeeVacationsCreateEmployeeVacationTrxService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutXtraAndPosEmployeeVacationsUpdateEmployeeVacationsService()` */
  static readonly HttpPutXtraAndPosEmployeeVacationsUpdateEmployeeVacationsServicePath = '/XtraAndPOS_EmployeeVacations/UpdateEmployeeVacationsService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutXtraAndPosEmployeeVacationsUpdateEmployeeVacationsService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosEmployeeVacationsUpdateEmployeeVacationsService$Response(
    params: {
      id: number;
      body?: EmployeeVacationsDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeVacationsService.HttpPutXtraAndPosEmployeeVacationsUpdateEmployeeVacationsServicePath, 'put');
    if (params) {
      rb.query('id', params.id, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpPutXtraAndPosEmployeeVacationsUpdateEmployeeVacationsService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosEmployeeVacationsUpdateEmployeeVacationsService(
    params: {
      id: number;
      body?: EmployeeVacationsDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutXtraAndPosEmployeeVacationsUpdateEmployeeVacationsService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutXtraAndPosEmployeeVacationsUpdateEmployeeVacationTrxService()` */
  static readonly HttpPutXtraAndPosEmployeeVacationsUpdateEmployeeVacationTrxServicePath = '/XtraAndPOS_EmployeeVacations/UpdateEmployeeVacationTrxService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutXtraAndPosEmployeeVacationsUpdateEmployeeVacationTrxService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosEmployeeVacationsUpdateEmployeeVacationTrxService$Response(
    params: {
      id: number;
      body?: EmployeeVacationTrxDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeVacationsService.HttpPutXtraAndPosEmployeeVacationsUpdateEmployeeVacationTrxServicePath, 'put');
    if (params) {
      rb.query('id', params.id, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpPutXtraAndPosEmployeeVacationsUpdateEmployeeVacationTrxService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutXtraAndPosEmployeeVacationsUpdateEmployeeVacationTrxService(
    params: {
      id: number;
      body?: EmployeeVacationTrxDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutXtraAndPosEmployeeVacationsUpdateEmployeeVacationTrxService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteXtraAndPosEmployeeVacationsDeleteEmployeeVacationsService()` */
  static readonly HttpDeleteXtraAndPosEmployeeVacationsDeleteEmployeeVacationsServicePath = '/XtraAndPOS_EmployeeVacations/DeleteEmployeeVacationsService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteXtraAndPosEmployeeVacationsDeleteEmployeeVacationsService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosEmployeeVacationsDeleteEmployeeVacationsService$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeVacationsService.HttpDeleteXtraAndPosEmployeeVacationsDeleteEmployeeVacationsServicePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteXtraAndPosEmployeeVacationsDeleteEmployeeVacationsService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteXtraAndPosEmployeeVacationsDeleteEmployeeVacationsService(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteXtraAndPosEmployeeVacationsDeleteEmployeeVacationsService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosEmployeeVacationsGetEmployeeVacationsService()` */
  static readonly HttpGetXtraAndPosEmployeeVacationsGetEmployeeVacationsServicePath = '/XtraAndPOS_EmployeeVacations/GetEmployeeVacationsService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosEmployeeVacationsGetEmployeeVacationsService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosEmployeeVacationsGetEmployeeVacationsService$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeVacationsService.HttpGetXtraAndPosEmployeeVacationsGetEmployeeVacationsServicePath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosEmployeeVacationsGetEmployeeVacationsService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosEmployeeVacationsGetEmployeeVacationsService(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosEmployeeVacationsGetEmployeeVacationsService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosEmployeeVacationsGetEmployeeVacationTrxService()` */
  static readonly HttpGetXtraAndPosEmployeeVacationsGetEmployeeVacationTrxServicePath = '/XtraAndPOS_EmployeeVacations/GetEmployeeVacationTrxService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosEmployeeVacationsGetEmployeeVacationTrxService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosEmployeeVacationsGetEmployeeVacationTrxService$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeVacationsService.HttpGetXtraAndPosEmployeeVacationsGetEmployeeVacationTrxServicePath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosEmployeeVacationsGetEmployeeVacationTrxService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosEmployeeVacationsGetEmployeeVacationTrxService(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosEmployeeVacationsGetEmployeeVacationTrxService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosEmployeeVacationsGetEmployeeVacationBalanceService()` */
  static readonly HttpGetXtraAndPosEmployeeVacationsGetEmployeeVacationBalanceServicePath = '/XtraAndPOS_EmployeeVacations/GetEmployeeVacationBalanceService';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosEmployeeVacationsGetEmployeeVacationBalanceService()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosEmployeeVacationsGetEmployeeVacationBalanceService$Response(
    params: {
      employeeId: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeVacationsService.HttpGetXtraAndPosEmployeeVacationsGetEmployeeVacationBalanceServicePath, 'get');
    if (params) {
      rb.query('employeeId', params.employeeId, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosEmployeeVacationsGetEmployeeVacationBalanceService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosEmployeeVacationsGetEmployeeVacationBalanceService(
    params: {
      employeeId: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosEmployeeVacationsGetEmployeeVacationBalanceService$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
