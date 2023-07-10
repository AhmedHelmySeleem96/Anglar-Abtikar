import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorydetailsComponent } from './categorydetails.component';
import { CategorydetailsResolver } from 'src/app/shared/services/resolver/categorydetails.resolver';

const routes: Routes = [
  {path:"",
  title:"Category Details",
  resolve:[CategorydetailsResolver],
  component:CategorydetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
