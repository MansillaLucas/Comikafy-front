import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comic-section',
  templateUrl: './comic-section.component.html',
  styleUrls: ['./comic-section.component.css']
})
export class ComicSectionComponent implements OnInit {

  @Input() categoryInfo:any;
  @Input() comicCardList:any = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
