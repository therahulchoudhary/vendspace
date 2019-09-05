import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../middlewayer/products.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  allproducts : any[] =[];
  constructor(private productservice : ProductsService) { }

  ngOnInit() {
    this.fetchallproducts();
  }
  fetchallproducts(){
    this.productservice.productdata(null,'getallproduct').subscribe(data=>{
      this.allproducts = data.body;
      console.log(data.body);
    })
  }
}
