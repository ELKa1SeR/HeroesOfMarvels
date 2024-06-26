// character.model.component.ts
import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../../services/marvel-api.service';
import { HeroResult } from '../../interfaces/hero.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-model',
  templateUrl: './character.html',
  styleUrls: ['./character.model.component.css']
})
export class CharacterModelComponent implements OnInit {

  heroes: HeroResult[] = [];

  constructor(private marvelApiService: MarvelApiService, private router: Router) {}

  ngOnInit(): void {
    this.marvelApiService.getHeroes().subscribe((heroes) => {
      console.log('Heroes received:', heroes);  // Esto debería mostrar una lista de héroes
      this.heroes = heroes.map(chat => ({
        ...chat
      }))
    });
  }

  onSelectedHero( hero: HeroResult) {
    this.router.navigate(['/hero',hero.id]);
  }
}
