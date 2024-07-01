// character.model.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { MarvelApiService } from '../../services/marvel-api.service';
import { HeroResult } from '../../interfaces/hero.interface';
import { Router } from '@angular/router';
import { SearchForm } from '../search.model/search-form';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-character-model',
  templateUrl: './character.html',
  styleUrls: ['./character.model.component.css']
})
export class CharacterModelComponent implements OnInit {

  @Input()
  heroes: HeroResult[] = [];

  @Input()
  searchForm!: FormGroup<SearchForm>;

  constructor(private marvelApiService: MarvelApiService, private router: Router) {}

  ngOnInit(): void {

  }

  onSelectedHero( hero: HeroResult) {
    this.router.navigate(['/hero',hero.id]);
  }
}
