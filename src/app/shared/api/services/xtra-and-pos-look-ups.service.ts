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

  /** Path part for operation `httpGetXtraAndPosLookUpsGetLatestAllowance()` */
  static readonly HttpGetXtraAndPosLookUpsGetLatestAllowancePath = '/XtraAndPOS_LookUps/GetLatestAllowance';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosLookUpsGetLatestAllowance()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosLookUpsGetLatestAllowance$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosLookUpsService.HttpGetXtraAndPosLookUpsGetLatestAllowancePath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosLookUpsGetLatestAllowance$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosLookUpsGetLatestAllowance(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosLookUpsGetLatestAllowance$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosLookUpsGetAllowanceTypes()` */
  static readonly HttpGetXtraAndPosLookUpsGetAllowanceTypesPath = '/XtraAndPOS_LookUps/GetAllowanceTypes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosLookUpsGetAllowanceTypes()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosLookUpsGetAllowanceTypes$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosLookUpsService.HttpGetXtraAndPosLookUpsGetAllowanceTypesPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosLookUpsGetAllowanceTypes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosLookUpsGetAllowanceTypes(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosLookUpsGetAllowanceTypes$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosLookUpsGetAllowanceValueTypes()` */
  static readonly HttpGetXtraAndPosLookUpsGetAllowanceValueTypesPath = '/XtraAndPOS_LookUps/GetAllowanceValueTypes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosLookUpsGetAllowanceValueTypes()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosLookUpsGetAllowanceValueTypes$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosLookUpsService.HttpGetXtraAndPosLookUpsGetAllowanceValueTypesPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosLookUpsGetAllowanceValueTypes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosLookUpsGetAllowanceValueTypes(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosLookUpsGetAllowanceValueTypes$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosLookUpsGetAllowancePaidTimes()` */
  static readonly HttpGetXtraAndPosLookUpsGetAllowancePaidTimesPath = '/XtraAndPOS_LookUps/GetAllowancePaidTimes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosLookUpsGetAllowancePaidTimes()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosLookUpsGetAllowancePaidTimes$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosLookUpsService.HttpGetXtraAndPosLookUpsGetAllowancePaidTimesPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosLookUpsGetAllowancePaidTimes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosLookUpsGetAllowancePaidTimes(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosLookUpsGetAllowancePaidTimes$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosLookUpsGetReniewTypes()` */
  static readonly HttpGetXtraAndPosLookUpsGetReniewTypesPath = '/XtraAndPOS_LookUps/GetReniewTypes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosLookUpsGetReniewTypes()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosLookUpsGetReniewTypes$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosLookUpsService.HttpGetXtraAndPosLookUpsGetReniewTypesPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosLookUpsGetReniewTypes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosLookUpsGetReniewTypes(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosLookUpsGetReniewTypes$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `httpGetXtraAndPosLookUpsGetSalaryDeductionTypes()` */
  static readonly HttpGetXtraAndPosLookUpsGetSalaryDeductionTypesPath = '/XtraAndPOS_LookUps/GetSalaryDeductionTypes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpGetXtraAndPosLookUpsGetSalaryDeductionTypes()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosLookUpsGetSalaryDeductionTypes$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosLookUpsService.HttpGetXtraAndPosLookUpsGetSalaryDeductionTypesPath, 'get');
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
   * To access the full response (for headers, for example), `httpGetXtraAndPosLookUpsGetSalaryDeductionTypes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpGetXtraAndPosLookUpsGetSalaryDeductionTypes(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpGetXtraAndPosLookUpsGetSalaryDeductionTypes$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
