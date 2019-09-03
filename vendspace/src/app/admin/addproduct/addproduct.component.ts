import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, FormsModule} from '@angular/forms';
import {ProductsService} from '../../middlewayer/products.service';
import { CategoryService } from 'src/app/middlewayer/category.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
// Form Validation variables
addProduct : FormGroup;
allcategories : any[] = [];
submitted = false;

constructor(private formBuilder: FormBuilder,private productService : ProductsService,private categoryService : CategoryService) {
}
ngOnInit() {
  this.addProduct = this.formBuilder.group({
    productname: ['', Validators.required],
    price: ['', Validators.required],
    available: ['', Validators.required],
    description: ['',Validators.required],
    category: ['',Validators.required],
    offer:['',Validators.required]
  });
  this.categoryService.categorydata(null,'getcategory').subscribe(data=>{
    this.allcategories =data.body; 
    console.log(this.allcategories);
  });
  }
onSubmit() {
  
  this.submitted = true;
  
  if (this.addProduct.invalid) {
      return;
  }
  console.log("is av");
  console.log(JSON.stringify(this.addProduct.value));
  this.productService.productdata(this.addProduct.value,'addproduct').subscribe(data => console.log(data));  
  }

}
