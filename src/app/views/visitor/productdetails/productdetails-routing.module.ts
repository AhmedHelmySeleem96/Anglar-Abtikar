import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailsComponent } from './productdetails.component';
import { ProductdetailsResolver } from 'src/app/shared/services/resolver/productdetails.resolver';

const routes: Routes = [
  {path:"",
  title:"Product Details",
  resolve:[ProductdetailsResolver],
  component:ProductdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductdetailsRoutingModule { }
