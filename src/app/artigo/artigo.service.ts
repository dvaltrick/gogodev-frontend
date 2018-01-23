import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Artigo } from './artigo.class';

@Injectable()
export class ArtigoService {
  private url = 'http://localhost:8080/artigos';

  constructor(
    private http: HttpClient
  ) { }

  public getArtigos(): Observable<Artigo[]>{
    return this.http.get<Artigo[]>(this.url);
  }
}
