import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { VisitorLayoutComponent } from './visitor-layout/visitor-layout.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    UserLayoutComponent,
    AuthLayoutComponent,
    VisitorLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    FormsModule
  ]
})
export class LayoutsModule { }
