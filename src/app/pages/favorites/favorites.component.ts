import { Component, OnInit } from "@angular/core";
import { SearchForm } from "../../models/search.model/search-form";
import { FormGroup } from "@angular/forms";
import { HeroResult } from "../../interfaces/hero.interface";
import { MarvelApiService } from "../../services/marvel-api.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent implements OnInit {

  // cramos una variable de tipo FormGroup y le pasamos la clase que hemos creado para el formulario
  searchForm =new FormGroup<SearchForm>(new SearchForm());
  searchTerm: string = '';

  heroes: HeroResult[] = [];
  heroesFiltered: HeroResult[] = [];

  constructor(
    private readonly marvelApiService: MarvelApiService,
    private readonly router: Router
  ) { }

  ngOnInit(): void{
   // sirve para subscribirme a los cambios de un formulario reactivo
  this.searchForm.valueChanges.subscribe((value) => {
    // hacemos el if para que no venga vacio porque puede contener nullos
    if (!value.search) {
      // si no escribe nada el usuario volvemos al filtrado original
      this.heroesFiltered = [...this.heroes]
      return
    }

    const term = value.search.trim().toLowerCase();
    // el filter genera un nuevo array con los datos que cumplan esa condicion
    this.heroesFiltered = this.heroes.filter(hero =>
      hero.name.toLowerCase().includes(term)
    )
  })

  this.marvelApiService.getHeroes().subscribe((heroes) => {
    console.log('Heroes received:', heroes);  // Esto debería mostrar una lista de héroes
    this.heroes = heroes.map(chat => ({
      ...chat
    }))
    // clona el array original para hacer el filtrado sobre el nuevo array
    this.heroesFiltered = [...heroes]
  });
}

}
