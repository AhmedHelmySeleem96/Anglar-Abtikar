import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { LayoutsModule } from './shared/components/layouts/layouts.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { httpInterceptorProviders } from './shared/services/interceptor';
import { Apiservice } from './shared/services/crud/apiservice.service';
import { AdminGuard } from './shared/services/guard/admin.guard';
import { UserGuard } from './shared/services/guard/user.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentServiceService } from './shared/services/payment/payment-service.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NotfoundComponent
  ],
  imports: [
    LayoutsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut:2500,
      progressBar:true,
      progressAnimation:"increasing",
      preventDuplicates:true,
    }),
    TranslateModule.forRoot({
      defaultLanguage: 'ar',
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps:[HttpClient]
      }
  }),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    httpInterceptorProviders,
    Apiservice,
    PaymentServiceService,
    UserGuard,
    AdminGuard,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}
