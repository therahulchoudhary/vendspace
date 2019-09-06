import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../middlewayer/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allproducts : any[] =[];
  constructor(private productservice : ProductsService,public router:Router) { }

  ngOnInit() {
    this.fetchallproducts();
  }
  fetchallproducts(){
    this.productservice.productdata(null,'getallproduct').subscribe(data=>{
      this.allproducts = data.body;
      console.log(data.body);
    });
    
  }

}
