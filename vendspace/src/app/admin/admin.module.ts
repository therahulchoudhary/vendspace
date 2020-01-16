import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'dashboard',pathMatch:'full' },
  {
  path: '', component: AdminDashboardComponent,
  children: [
  { path: 'allusers', component: AllUsersComponent },
  { path: 'addcategory', component: AddcategoryComponent },
  { path: 'addproduct', component: AddproductComponent },
  { path: 'allcontacts', component: AllContactsComponent },
  { path: 'allproducts', component: AllProductsComponent },
  { path: 'allreviews', component: AllReviewsComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: '**', redirectTo:'' }
  ]
  }
  ];

@NgModule({
  declarations: [NavigationComponent, AddproductComponent, AddcategoryComponent, AdminDashboardComponent, AllProductsComponent, AllContactsComponent, AllReviewsComponent, AllUsersComponent, UpdateProductComponent, DashboardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    NavigationComponent,
    AddproductComponent,
    AddcategoryComponent,
    AdminDashboardComponent,
    AllProductsComponent,
    AllContactsComponent,
    AllReviewsComponent,
    AllUsersComponent,
    UpdateProductComponent,
    DashboardComponent
  ]
})
export class AdminModule { }
