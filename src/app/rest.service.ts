import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// TIP: Recordar importar el modulo en app.module. El modulo tiene el nombre HttpClientModule

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

  public get(url:string){
    return this.http.get(url);
  }

  public post(url:string, body){
    return this.http.post(url,body);
  }

}