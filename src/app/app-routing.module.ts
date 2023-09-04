import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { UserLayoutComponent } from './shared/components/layouts/user-layout/user-layout.component';
import { VisitorLayoutComponent } from './shared/components/layouts/visitor-layout/visitor-layout.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { AdminGuard } from './shared/services/guard/admin.guard';
import { UserGuard } from './shared/services/guard/user.guard';

const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},

{path:'home' ,
loadChildren: () => import('./hr/hr.module').then(m => m.HrModule)
},
{path:'contact' ,component:VisitorLayoutComponent,
  children:[{path:"",loadChildren: () => import('./views/visitor/contact/contact.module').then(m => m.ContactModule)}]
},
{path:'about' ,component:VisitorLayoutComponent,
  children:[{path:"",loadChildren: () => import('./views/visitor/about/about.module').then(m => m.AboutModule)}]
},
{path:'productdetails/:id' ,component:VisitorLayoutComponent,
  children:[{path:"",loadChildren: () => import('./views/visitor/productdetails/productdetails.module').then(m => m.ProductdetailsModule)}]
},
{path:'checkout' ,component:VisitorLayoutComponent,
  children:[{path:"",loadChildren: () => import('./views/visitor/checkout/checkout.module').then(m => m.CheckoutModule)}]
},
{path:'categorydetails/:id' ,component:VisitorLayoutComponent,
  children:[{path:"",loadChildren: () => import('./views/visitor/categories/categories.module').then(m => m.CategoriesModule)}]
},
//

{path:'auth',redirectTo:"auth/login",pathMatch:'full'},
{path:"auth/login",component:AuthLayoutComponent,
children:[{path:"",loadChildren: () => import('./views/auth/login/login.module').then(m => m.LoginModule)}]
},
{path:"auth/register",component:AuthLayoutComponent,
children:[{path:"",loadChildren: () => import('./views/auth/register/register.module').then(m => m.RegisterModule)}]
},
//

{path:'admin',redirectTo:"admin/settings",pathMatch:'full'},
{path:"admin/settings" ,component:AdminLayoutComponent,
//canActivate:[AdminGuard],
children:[{path:"",loadChildren: () => import('./views/admin/setting/setting.module').then(m => m.SettingModule)}]
},
//

{path:'user',redirectTo:"user/home",pathMatch:'full'},

{path:"user/home",component:UserLayoutComponent,
canActivate:[UserGuard],
children:[{path:"",loadChildren: () => import('./views/user/userhome/userhome.module').then(m => m.UserhomeModule)}]
},
{path:"user/checkout",component:UserLayoutComponent,
canActivate:[UserGuard],
children:[{path:"",loadChildren: () => import('./views/user/checkout/checkout.module').then(m => m.CheckoutModule)}]
},
//

{
  path: 'hr',
  loadChildren: () => import('./hr/hr.module').then(m => m.HrModule)
},

{path:"**",title:"NotFound",component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash:true,
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
