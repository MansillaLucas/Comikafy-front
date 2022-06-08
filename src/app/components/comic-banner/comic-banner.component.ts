import { Component, OnInit } from '@angular/core';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-comic-banner',
  templateUrl: './comic-banner.component.html',
  styleUrls: ['./comic-banner.component.css']
})
export class ComicBannerComponent implements OnInit {

  comicsBanner:any = [];

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this.restService.get('http://localhost:4200/api/banners')
    .subscribe(respuesta => {
      this.comicsBanner = respuesta;
    });
  }

}
