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
export class XtraAndPosZktFingerPrintService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `httpPostXtraAndPosZktFingerPrintConnectToZkt()` */
  static readonly HttpPostXtraAndPosZktFingerPrintConnectToZktPath = '/XtraAndPos_ZktFingerPrint/ConnectToZkt';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpPostXtraAndPosZktFingerPrintConnectToZkt()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpPostXtraAndPosZktFingerPrintConnectToZkt$Response(
    params: {
      ipAddress?: string;
      port?: string;
      machineNumber: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, XtraAndPosZktFingerPrintService.HttpPostXtraAndPosZktFingerPrintConnectToZktPath, 'post');
    if (params) {
      rb.query('ipAddress', params.ipAddress, {"style":"form"});
      rb.query('port', params.port, {"style":"form"});
      rb.query('machineNumber', params.machineNumber, {"style":"form"});
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
   * To access the full response (for headers, for example), `httpPostXtraAndPosZktFingerPrintConnectToZkt$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpPostXtraAndPosZktFingerPrintConnectToZkt(
    params: {
      ipAddress?: string;
      port?: string;
      machineNumber: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.httpPostXtraAndPosZktFingerPrintConnectToZkt$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
