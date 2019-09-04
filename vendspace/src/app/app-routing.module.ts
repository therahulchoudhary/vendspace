import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcategoryComponent } from './admin/addcategory/addcategory.component';
import { AddproductComponent} from './admin/addproduct/addproduct.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { FormComponent } from "./user/form/form.component";
import { ProductsComponent} from "./user/products/products.component";
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { AllProductsComponent } from './admin/all-products/all-products.component'; 
import { AllContactsComponent } from './admin/all-contacts/all-contacts.component';
import { AllReviewsComponent} from './admin/all-reviews/all-reviews.component';
import { AllUsersComponent } from './admin/all-users/all-users.component';
import { UpdateProductComponent } from './admin/update-product/update-product.component';

const routes: Routes = [
  {path:'addcategory',component : AddcategoryComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'admindashboard',component:AdminDashboardComponent},
  {path:'form',component:FormComponent},
  {path:'products', component:ProductsComponent},
  {path:'',component:UserDashboardComponent},
  {path:'allproducts',component:AllProductsComponent},
  {path:'allcontacts',component:AllContactsComponent},
  {path:'allreviews',component:AllReviewsComponent},
  {path:'allusers' ,component:AllUsersComponent},
  {path:'updateproduct',component:UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
