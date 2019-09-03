import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';



@NgModule({
  declarations: [NavigationComponent, AddproductComponent, AddcategoryComponent, AdminDashboardComponent, AllProductsComponent, AllContactsComponent, AllReviewsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    NavigationComponent,
    AddproductComponent,
    AddcategoryComponent,
    AdminDashboardComponent,
    AllProductsComponent,
    AllContactsComponent,
    AllReviewsComponent
  ]
})
export class AdminModule { }
