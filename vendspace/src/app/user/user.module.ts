import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';



@NgModule({
  declarations: [NavigationComponent, FormComponent, ProductsComponent, UserDashboardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavigationComponent,
    FormComponent,
    ProductsComponent
  ]
})
export class UserModule { }
