import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, FormsModule} from '@angular/forms';
import {CategoryService} from '../../middlewayer/category.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
// Form Validation variables
addcategoryForm : FormGroup;
submitted = false;

constructor(private formBuilder: FormBuilder,private categoryService : CategoryService) {
}
ngOnInit() {
  this.addcategoryForm = this.formBuilder.group({
    categoryname: ['', Validators.required]
  });
  }
onSubmit() {
  
  this.submitted = true;
  
  if (this.addcategoryForm.invalid) {
    
      return;
  }
  console.log("is av");
  console.log(JSON.stringify(this.addcategoryForm.value));
  this.categoryService.categorydata(this.addcategoryForm.value,'addcategory').subscribe(data => console.log(data));  
  }

}
