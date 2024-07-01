import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Comic, ComicResult } from '../interfaces/comics.interface';
import { environments } from '../../environments/environment';
import { Hero, HeroResult } from '../interfaces/hero.interface';



@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  private apiUrl = environments.PUBLIC_API_COMIC;
  private apiUrlHeroes = environments.PUBLIC_API_CHARACTER;
  //  private apiUrlHeroes50 = environments.PUBLIC_API_CHARACTER50;
  private baseUrl = environments.BASE_URL;
  private apiKey = environments.APIKEY;
  private hash = environments.KEY_HASH;
  private ts = environments.KEY_TS;
  private publicKey = environments.KEY_PUBLIC;

  public cacheStore: { heroes: HeroResult[] } = {
    heroes: [],
  }

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }
  private saveToLocalStorage(){
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore))
  }

  private loadFromLocalStorage(){
    if (!localStorage.getItem('cacheStore')) return;

    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }


  getHeroes2(limit: number = 89): Observable<HeroResult[]> {
    const apiUrl = limit === 90 ? this.apiUrlHeroes : `${this.apiUrlHeroes}&limit=${limit}`;
    return this.http.get<Hero>(apiUrl)
      .pipe(map(response => response.data.results),
        map((results: HeroResult[]) => results.filter(hero => hero.thumbnail?.path && !hero.thumbnail.path.includes('image_not_available'))),
        map((results: HeroResult[]) => this.shuffleArray(results)),
        map((results: HeroResult[]) => results.slice(0, limit))

    );
  }

  paginacion() {
    const totalPages = 32;
    const limit = 50;

    for (let page = 0; page < totalPages; page++) {
      const offset = page * limit;
      this.getHeroes(limit, offset).subscribe(heroes => {
        console.log(`Page ${page + 1}`, heroes);
      });
    }
  }

  getHeroes(limit: number = 89, offset: number = 0): Observable<HeroResult[]> {
    return this.http.get<Hero>(this.baseUrl, {
      params: {
        limit,
        offset,
        hash: this.hash,
        apikey: this.publicKey,
        ts: this.ts
      }
    }).pipe(
        map(response => response.data.results),
        map((results: HeroResult[]) => results.filter(hero => hero.thumbnail?.path && !hero.thumbnail.path.includes('image_not_available'))),
        map((results: HeroResult[]) => this.shuffleArray(results)),
        map((results: HeroResult[]) => results.slice(0, limit))
    );
  }

  shuffleArray(results: HeroResult[]): HeroResult[] {
    if (results.length === 0) {
      return [];
    }

    return results.sort((a, b) => a.name.localeCompare(b.name));
  }


  getHeroById(id: number): Observable<HeroResult> {
    return this.http.get<Hero>(`${this.baseUrl}/${id}?${this.apiKey}`)
      .pipe(map(response => response.data.results[0]));
  }

  // no toco la funcionalidad porque por defecto me trae 20 comics de limite ( comprobado con el postman)
  getComicsByHeroId(heroId: number): Observable<ComicResult[]>{
    return this.http.get<Comic>(`${this.baseUrl}/${heroId}/comics?${this.apiKey}`)
      .pipe(map(response => response.data.results));

  }


  searchHero(limit: number = 100): Observable<HeroResult[]> {
    // búsqueda del héroe aquí
    //  utilizar el método saveToLocalStorage() para guardar el héroe buscado en el almacenamiento local
    const apiUrl = limit === 100 ? this.apiUrlHeroes : `${this.apiUrlHeroes}&limit=${limit}`;

    return this.http.get<Hero>(apiUrl)
      .pipe(
        map(response => response.data.results),
        tap((results: HeroResult[]) => {
          // Guardar el héroe buscado en el almacenamiento local
          this.cacheStore.heroes.push(...results);
          this.saveToLocalStorage();
        }),
        map(results => results) // Return the results array
      );
  }
}
