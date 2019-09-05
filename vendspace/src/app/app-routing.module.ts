import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { FormComponent } from "./user/form/form.component";
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UpdateProductComponent } from './admin/update-product/update-product.component';
import { ContactComponent } from './user/contact/contact.component';

const routes: Routes = [
  {path:'form',component:FormComponent},
  {path:'',component:UserDashboardComponent},
  {path:'updateproduct',component:UpdateProductComponent},
  {path:'contact',component:ContactComponent},
  {path:'auth',loadChildren:()=>AdminModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
