import { Component, OnInit } from '@angular/core';
import { ReviewsService } from 'src/app/middlewayer/reviews.service';

@Component({
  selector: 'app-all-reviews',
  templateUrl: './all-reviews.component.html',
  styleUrls: ['./all-reviews.component.css']
})
export class AllReviewsComponent implements OnInit {
  allreviews : any[] = [];
  constructor(private reviewsService : ReviewsService) { }

  ngOnInit() {
    this.reviewsService.reviewsdata(null,'getreviews').subscribe(data=>{
      this.allreviews =data.body; 
      console.log(this.allreviews);
    });
  }

}
