import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})
export class CardPageComponent implements OnInit {

  @Input() cCardInfo:any;
  @Input() genreInfo:any;

  constructor() { }

  ngOnInit(): void {
  }

}
