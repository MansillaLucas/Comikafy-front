import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {

  active = '1';
  newsList:any = [];

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this.restService.get('http://localhost:4200/api/newsGroupList')
    .subscribe(respuesta => {
      this.newsList = respuesta;
    });
  }

}
