import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [NavigationComponent, FormComponent, UserDashboardComponent, ContactComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    NavigationComponent,
    FormComponent,
    ContactComponent
  ]
})
export class UserModule { }
