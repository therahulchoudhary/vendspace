import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [NavigationComponent, FormComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationComponent,
    FormComponent
  ]
})
export class UserModule { }
