import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-banner',
  templateUrl: './category-banner.component.html',
  styleUrls: ['./category-banner.component.css']
})
export class CategoryBannerComponent implements OnInit {
  
  categoryInfo:any;
  @Input() comicCardFeaturedList:any = [];

  constructor() {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.categoryInfo = {
      "name":"Featured",
      "id":10,
      "color":"#72A0C1"
    }
  }

}
