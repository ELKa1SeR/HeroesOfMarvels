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
  private apiUrlHeroes = environments.PUBLIC_API_CHARACTER;
  private apiUrlHeroes50 = environments.PUBLIC_API_CHARACTER50;
  private baseUrl = environments.BASE_URL;
  private apiKey = environments.APIKEY;


  constructor(private http: HttpClient) {}

  getHeroes(limit: number = 50): Observable<HeroResult[]> {
    const apiUrl = limit === 50 ? this.apiUrlHeroes50 : `${this.apiUrlHeroes}&limit=${limit}`;
    return this.http.get<Hero>(apiUrl)
      .pipe(map(response => response.data.results));
  }

  getHeroById(id: number): Observable<HeroResult> {
    return this.http.get<Hero>(`${this.baseUrl}/${id}?${this.apiKey}`)
      .pipe(map(response => response.data.results[0]));
  }

  getComicsByHeroId(heroId: number): Observable<ComicResult[]>{
    return this.http.get<Comic>(`${this.baseUrl}/${heroId}/comics?${this.apiKey}`)
      .pipe(map(response => response.data.results));

  }



}
