import { Component, OnInit } from '@angular/core';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.css']
})
export class ComicCardComponent implements OnInit {

  genreList:any = [];
  comicCardList:any = [];
  generoActivo = 1;

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this.restService.get('http://localhost:4200/api/genres')
    .subscribe(respuesta => {
      this.genreList = respuesta;
    });
    this.restService.get('http://localhost:4200/api/cardGroupList')
    .subscribe(respuesta => {
      this.comicCardList = respuesta;
    });
  }

}
