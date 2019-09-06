import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { ProductsService } from '../../' 

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id:number;
  constructor(public route:ActivatedRoute) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.queryParamMap.get('id'));
    console.log(this.id);
  }
}
