import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Comic, ComicResult } from '../interfaces/comics.interface';
import { environments } from '../../environments/environment';
import { Hero, HeroResult } from '../interfaces/hero.interface';



@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {
  private apiUrl = environments.PUBLIC_API_COMIC;
  private apiUrlHeroes = environments.PUBLIC_API_CHARACTER
  constructor(private http: HttpClient) {}

  getComics(): Observable<ComicResult[]> {
    return this.http.get<Comic>(`${this.apiUrl}`)
      .pipe(map(response => response.data.results));
  }

  getHeroes(): Observable<HeroResult[]> {
    return this.http.get<Hero>(`${this.apiUrlHeroes}`)
      .pipe(map(response => response.data.results));
  }


}
