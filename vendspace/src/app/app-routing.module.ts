import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcategoryComponent } from './admin/addcategory/addcategory.component';
import { AddproductComponent} from './admin/addproduct/addproduct.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { FormComponent } from "./user/form/form.component";
import { ProductsComponent} from "./user/products/products.component";
import { UserDashboardComponent} from './user/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:'addcategory',component : AddcategoryComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'admindashboard',component:AdminDashboardComponent},
  {path:'form',component:FormComponent},
  {path:'products', component:ProductsComponent},
  {path:'',component:UserDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
