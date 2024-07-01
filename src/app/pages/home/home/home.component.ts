import { Component, OnInit } from '@angular/core';
import { HeroResult } from '../../../interfaces/hero.interface';
import { Route, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { SearchForm } from '../../../models/search.model/search-form';
import { MarvelApiService } from '../../../services/marvel-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// cramos una variable de tipo FormGroup y le pasamos la clase que hemos creado para el formulario
  searchForm = new FormGroup<SearchForm>(new SearchForm());
  searchTerm: string = '';

  heroes: HeroResult[] = [];
  heroesFiltered: HeroResult[] = [];
  currentPage: number = 0;
  limit: number = 50;
  totalPages: number = 32;

  constructor(
    private readonly marvelApiService: MarvelApiService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.searchForm.valueChanges.subscribe((value) => {
      if (!value.search) {
        this.heroesFiltered = [...this.heroes];
        return;
      }

      const term = value.search.trim().toLowerCase();
      this.heroesFiltered = this.heroes.filter(hero =>
        hero.name.toLowerCase().includes(term)
      );
    });

    this.loadHeroes();
  }

  loadHeroes() {
    const offset = this.currentPage * this.limit;
    this.marvelApiService.getHeroes(this.limit, offset).subscribe((heroes) => {
      this.heroes = heroes;
      this.heroesFiltered = [...heroes];
      this.calculateTotalPages(); // Call this method to calculate total pages based on fetched data
    });
  }

  calculateTotalPages() {

    const totalHeroes = 1564;
    this.totalPages = Math.ceil(totalHeroes / this.limit);
  }

  onSelectedHero(hero: HeroResult) {
    this.router.navigate(['/hero', hero.id]);
  }

  onSearch(term: string) {
    this.searchTerm = term;
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadHeroes();
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadHeroes();
    }
  }






  // onSelectedHero( hero: HeroResult) {
  //   console.log(hero);

  //   this.router.navigate(['/hero',hero.id]);
  // }


  // onSearch(term: string) {
  //   this.searchTerm = term;
  //   }

}
