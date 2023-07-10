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

import { EmployeeCreateDto } from '../models/employee-create-dto';
import { HrManagment } from '../models/hr-managment';
import { HrSection } from '../models/hr-section';
import { Job } from '../models/job';
import { Nationality } from '../models/nationality';

@Injectable({ providedIn: 'root' })
export class XtraAndPosEmployeeEpService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetExtraAndPosEmployeeManagementInfo()` */
  static readonly HttpGetExtraAndPosEmployeeManagementInfoPath = '/ExtraAndPOS_Employee/ManagementInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetExtraAndPosEmployeeManagementInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosEmployeeManagementInfo$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeEpService.HttpGetExtraAndPosEmployeeManagementInfoPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetExtraAndPosEmployeeManagementInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetExtraAndPosEmployeeManagementInfo(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetExtraAndPosEmployeeManagementInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosEmployeeCreateEmployee()` */
  static readonly HttpPostExtraAndPosEmployeeCreateEmployeePath = '/ExtraAndPOS_Employee/CreateEmployee';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosEmployeeCreateEmployee()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosEmployeeCreateEmployee$Response(
    params?: {
      body?: EmployeeCreateDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeEpService.HttpPostExtraAndPosEmployeeCreateEmployeePath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosEmployeeCreateEmployee$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosEmployeeCreateEmployee(
    params?: {
      body?: EmployeeCreateDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosEmployeeCreateEmployee$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutExtraAndPosEmployeeUpdateEmployee()` */
  static readonly HttpPutExtraAndPosEmployeeUpdateEmployeePath = '/ExtraAndPOS_Employee/UpdateEmployee';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutExtraAndPosEmployeeUpdateEmployee()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosEmployeeUpdateEmployee$Response(
    params?: {
      body?: EmployeeCreateDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeEpService.HttpPutExtraAndPosEmployeeUpdateEmployeePath, 'put');
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
   * To access the full response (for headers, for example), `httpPutExtraAndPosEmployeeUpdateEmployee$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosEmployeeUpdateEmployee(
    params?: {
      body?: EmployeeCreateDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutExtraAndPosEmployeeUpdateEmployee$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosEmployeeAddManagment()` */
  static readonly HttpPostExtraAndPosEmployeeAddManagmentPath = '/ExtraAndPOS_Employee/AddManagment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosEmployeeAddManagment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosEmployeeAddManagment$Response(
    params?: {
      body?: HrManagment
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeEpService.HttpPostExtraAndPosEmployeeAddManagmentPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosEmployeeAddManagment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosEmployeeAddManagment(
    params?: {
      body?: HrManagment
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosEmployeeAddManagment$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosEmployeeAddSection()` */
  static readonly HttpPostExtraAndPosEmployeeAddSectionPath = '/ExtraAndPOS_Employee/AddSection';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosEmployeeAddSection()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosEmployeeAddSection$Response(
    params?: {
      body?: HrSection
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeEpService.HttpPostExtraAndPosEmployeeAddSectionPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosEmployeeAddSection$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosEmployeeAddSection(
    params?: {
      body?: HrSection
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosEmployeeAddSection$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosEmployeeAddJob()` */
  static readonly HttpPostExtraAndPosEmployeeAddJobPath = '/ExtraAndPOS_Employee/AddJob';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosEmployeeAddJob()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosEmployeeAddJob$Response(
    params?: {
      body?: Job
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeEpService.HttpPostExtraAndPosEmployeeAddJobPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosEmployeeAddJob$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosEmployeeAddJob(
    params?: {
      body?: Job
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosEmployeeAddJob$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPostExtraAndPosEmployeeAddNationality()` */
  static readonly HttpPostExtraAndPosEmployeeAddNationalityPath = '/ExtraAndPOS_Employee/AddNationality';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostExtraAndPosEmployeeAddNationality()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosEmployeeAddNationality$Response(
    params?: {
      body?: Nationality
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeEpService.HttpPostExtraAndPosEmployeeAddNationalityPath, 'post');
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
   * To access the full response (for headers, for example), `httpPostExtraAndPosEmployeeAddNationality$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPostExtraAndPosEmployeeAddNationality(
    params?: {
      body?: Nationality
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostExtraAndPosEmployeeAddNationality$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutExtraAndPosEmployeeUpdateManagment()` */
  static readonly HttpPutExtraAndPosEmployeeUpdateManagmentPath = '/ExtraAndPOS_Employee/UpdateManagment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutExtraAndPosEmployeeUpdateManagment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosEmployeeUpdateManagment$Response(
    params?: {
      body?: HrManagment
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeEpService.HttpPutExtraAndPosEmployeeUpdateManagmentPath, 'put');
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
   * To access the full response (for headers, for example), `httpPutExtraAndPosEmployeeUpdateManagment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosEmployeeUpdateManagment(
    params?: {
      body?: HrManagment
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutExtraAndPosEmployeeUpdateManagment$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutExtraAndPosEmployeeUpdateSection()` */
  static readonly HttpPutExtraAndPosEmployeeUpdateSectionPath = '/ExtraAndPOS_Employee/UpdateSection';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutExtraAndPosEmployeeUpdateSection()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosEmployeeUpdateSection$Response(
    params?: {
      body?: HrSection
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeEpService.HttpPutExtraAndPosEmployeeUpdateSectionPath, 'put');
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
   * To access the full response (for headers, for example), `httpPutExtraAndPosEmployeeUpdateSection$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosEmployeeUpdateSection(
    params?: {
      body?: HrSection
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutExtraAndPosEmployeeUpdateSection$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutExtraAndPosEmployeeUpdateJob()` */
  static readonly HttpPutExtraAndPosEmployeeUpdateJobPath = '/ExtraAndPOS_Employee/UpdateJob';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutExtraAndPosEmployeeUpdateJob()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosEmployeeUpdateJob$Response(
    params?: {
      body?: Job
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeEpService.HttpPutExtraAndPosEmployeeUpdateJobPath, 'put');
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
   * To access the full response (for headers, for example), `httpPutExtraAndPosEmployeeUpdateJob$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosEmployeeUpdateJob(
    params?: {
      body?: Job
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutExtraAndPosEmployeeUpdateJob$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpPutExtraAndPosEmployeeUpdateNationality()` */
  static readonly HttpPutExtraAndPosEmployeeUpdateNationalityPath = '/ExtraAndPOS_Employee/UpdateNationality';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPutExtraAndPosEmployeeUpdateNationality()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosEmployeeUpdateNationality$Response(
    params?: {
      body?: Nationality
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeEpService.HttpPutExtraAndPosEmployeeUpdateNationalityPath, 'put');
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
   * To access the full response (for headers, for example), `httpPutExtraAndPosEmployeeUpdateNationality$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpPutExtraAndPosEmployeeUpdateNationality(
    params?: {
      body?: Nationality
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPutExtraAndPosEmployeeUpdateNationality$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteExtraAndPosEmployeeDeleteSection()` */
  static readonly HttpDeleteExtraAndPosEmployeeDeleteSectionPath = '/ExtraAndPOS_Employee/DeleteSection';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteExtraAndPosEmployeeDeleteSection()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosEmployeeDeleteSection$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeEpService.HttpDeleteExtraAndPosEmployeeDeleteSectionPath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteExtraAndPosEmployeeDeleteSection$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosEmployeeDeleteSection(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteExtraAndPosEmployeeDeleteSection$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteExtraAndPosEmployeeDeleteJob()` */
  static readonly HttpDeleteExtraAndPosEmployeeDeleteJobPath = '/ExtraAndPOS_Employee/DeleteJob';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteExtraAndPosEmployeeDeleteJob()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosEmployeeDeleteJob$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeEpService.HttpDeleteExtraAndPosEmployeeDeleteJobPath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteExtraAndPosEmployeeDeleteJob$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosEmployeeDeleteJob(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteExtraAndPosEmployeeDeleteJob$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteExtraAndPosEmployeeDeleteNationality()` */
  static readonly HttpDeleteExtraAndPosEmployeeDeleteNationalityPath = '/ExtraAndPOS_Employee/DeleteNationality';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteExtraAndPosEmployeeDeleteNationality()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosEmployeeDeleteNationality$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeEpService.HttpDeleteExtraAndPosEmployeeDeleteNationalityPath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteExtraAndPosEmployeeDeleteNationality$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosEmployeeDeleteNationality(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteExtraAndPosEmployeeDeleteNationality$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteExtraAndPosEmployeeDeleteManagment()` */
  static readonly HttpDeleteExtraAndPosEmployeeDeleteManagmentPath = '/ExtraAndPOS_Employee/DeleteManagment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteExtraAndPosEmployeeDeleteManagment()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosEmployeeDeleteManagment$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeEpService.HttpDeleteExtraAndPosEmployeeDeleteManagmentPath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteExtraAndPosEmployeeDeleteManagment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosEmployeeDeleteManagment(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteExtraAndPosEmployeeDeleteManagment$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpDeleteExtraAndPosEmployeeDeleteEmployee()` */
  static readonly HttpDeleteExtraAndPosEmployeeDeleteEmployeePath = '/ExtraAndPOS_Employee/DeleteEmployee';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpDeleteExtraAndPosEmployeeDeleteEmployee()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosEmployeeDeleteEmployee$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosEmployeeEpService.HttpDeleteExtraAndPosEmployeeDeleteEmployeePath, 'delete');
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
   * To access the full response (for headers, for example), `httpDeleteExtraAndPosEmployeeDeleteEmployee$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpDeleteExtraAndPosEmployeeDeleteEmployee(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpDeleteExtraAndPosEmployeeDeleteEmployee$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
