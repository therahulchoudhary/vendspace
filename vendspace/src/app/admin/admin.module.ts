import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';



@NgModule({
  declarations: [NavigationComponent, AddproductComponent, AddcategoryComponent, AdminDashboardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    NavigationComponent,
    AddproductComponent,
    AddcategoryComponent,
    AdminDashboardComponent
  ]
})
export class AdminModule { }
