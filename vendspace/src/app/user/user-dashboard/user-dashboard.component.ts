import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../middlewayer/category.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  allcategories : any[] =[];
  constructor(private categoryservice : CategoryService) { }

  ngOnInit() {
    this.fetchallcategories();
  }
  fetchallcategories(){
    this.categoryservice.categorydata(null,'getcategory').subscribe(data=>{
      this.allcategories = data.body;
    }); 
  }
}
