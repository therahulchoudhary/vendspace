import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
export const ROUTES: Routes = [
  { path: '', redirectTo: 'dashboard',pathMatch:'full' },
  {
  path: '', component: UserDashboardComponent,
  children: [
  { path:'contact', component:ContactComponent },
  { path:'form', component:FormComponent},
  { path:'dashboard',component:DashboardComponent},
  { path:'productDetail',component:ProductDetailComponent},
  { path: '**', redirectTo:'' }
  ]
  }
  ];


@NgModule({
  declarations: [FormComponent, UserDashboardComponent, ContactComponent, ProductDetailComponent, DashboardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    FormComponent,
    ContactComponent,
    DashboardComponent,
    ProductDetailComponent
  ]
})
export class UserModule { }
