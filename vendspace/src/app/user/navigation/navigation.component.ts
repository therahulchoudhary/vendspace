import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../middlewayer/category.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
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
