import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/middlewayer/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  allproductsdata : any[] =[];
  constructor(private productservice : ProductsService) { }

  ngOnInit() {
    this.productservice.productdata(null,'getallproduct').subscribe(data=>{
      this.allproductsdata=data.body;
      console.log(this.allproductsdata);
    });
  }
}
