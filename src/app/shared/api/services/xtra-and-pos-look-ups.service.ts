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


@Injectable({ providedIn: 'root' })
export class XtraAndPosLookUpsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpGetXtraAndPosLookUpsGetStatus()` */
  static readonly HttpGetXtraAndPosLookUpsGetStatusPath = '/XtraAndPOS_LookUps/GetStatus';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosLookUpsGetStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosLookUpsGetStatus$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosLookUpsService.HttpGetXtraAndPosLookUpsGetStatusPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosLookUpsGetStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosLookUpsGetStatus(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosLookUpsGetStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosLookUpsGetGender()` */
  static readonly HttpGetXtraAndPosLookUpsGetGenderPath = '/XtraAndPOS_LookUps/GetGender';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosLookUpsGetGender()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosLookUpsGetGender$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosLookUpsService.HttpGetXtraAndPosLookUpsGetGenderPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosLookUpsGetGender$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosLookUpsGetGender(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosLookUpsGetGender$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosLookUpsGetMartialStatus()` */
  static readonly HttpGetXtraAndPosLookUpsGetMartialStatusPath = '/XtraAndPOS_LookUps/GetMartialStatus';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosLookUpsGetMartialStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosLookUpsGetMartialStatus$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosLookUpsService.HttpGetXtraAndPosLookUpsGetMartialStatusPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosLookUpsGetMartialStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosLookUpsGetMartialStatus(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosLookUpsGetMartialStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosLookUpsGetIdentityType()` */
  static readonly HttpGetXtraAndPosLookUpsGetIdentityTypePath = '/XtraAndPOS_LookUps/GetIdentityType';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosLookUpsGetIdentityType()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosLookUpsGetIdentityType$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosLookUpsService.HttpGetXtraAndPosLookUpsGetIdentityTypePath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosLookUpsGetIdentityType$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosLookUpsGetIdentityType(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosLookUpsGetIdentityType$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosLookUpsGetHighestAcademicQualification()` */
  static readonly HttpGetXtraAndPosLookUpsGetHighestAcademicQualificationPath = '/XtraAndPOS_LookUps/GetHighestAcademicQualification';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosLookUpsGetHighestAcademicQualification()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosLookUpsGetHighestAcademicQualification$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosLookUpsService.HttpGetXtraAndPosLookUpsGetHighestAcademicQualificationPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosLookUpsGetHighestAcademicQualification$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosLookUpsGetHighestAcademicQualification(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosLookUpsGetHighestAcademicQualification$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosLookUpsGetLatestAllowence()` */
  static readonly HttpGetXtraAndPosLookUpsGetLatestAllowencePath = '/XtraAndPOS_LookUps/GetLatestAllowence';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosLookUpsGetLatestAllowence()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosLookUpsGetLatestAllowence$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosLookUpsService.HttpGetXtraAndPosLookUpsGetLatestAllowencePath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosLookUpsGetLatestAllowence$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosLookUpsGetLatestAllowence(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosLookUpsGetLatestAllowence$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosLookUpsGetAllowenceTypes()` */
  static readonly HttpGetXtraAndPosLookUpsGetAllowenceTypesPath = '/XtraAndPOS_LookUps/GetAllowenceTypes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosLookUpsGetAllowenceTypes()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosLookUpsGetAllowenceTypes$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosLookUpsService.HttpGetXtraAndPosLookUpsGetAllowenceTypesPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosLookUpsGetAllowenceTypes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosLookUpsGetAllowenceTypes(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosLookUpsGetAllowenceTypes$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosLookUpsGetAllowenceValueTypes()` */
  static readonly HttpGetXtraAndPosLookUpsGetAllowenceValueTypesPath = '/XtraAndPOS_LookUps/GetAllowenceValueTypes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosLookUpsGetAllowenceValueTypes()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosLookUpsGetAllowenceValueTypes$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosLookUpsService.HttpGetXtraAndPosLookUpsGetAllowenceValueTypesPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosLookUpsGetAllowenceValueTypes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosLookUpsGetAllowenceValueTypes(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosLookUpsGetAllowenceValueTypes$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
