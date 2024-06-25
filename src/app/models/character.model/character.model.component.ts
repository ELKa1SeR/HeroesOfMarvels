import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../../services/marvel-api.service';
import { HeroResult } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-character-model',
  templateUrl: './character.html',
  styleUrls: ['./character.model.component.css']
})
export class CharacterModelComponent implements OnInit {
  heroes: HeroResult[] = [];

  constructor(private marvelApiService: MarvelApiService) {}

  ngOnInit(): void {
    this.marvelApiService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }
}

