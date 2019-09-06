import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UpdateProductComponent } from './admin/update-product/update-product.component';

const routes: Routes = [
  
  {path:'updateproduct',component:UpdateProductComponent},
  {path:'auth',loadChildren:()=>AdminModule},
  {path:'',loadChildren:()=>UserModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
