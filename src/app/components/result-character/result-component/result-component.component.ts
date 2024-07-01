import { Component, Input, OnInit } from '@angular/core';
import { HeroResult } from '../../../interfaces/hero.interface';
import { MarvelApiService } from '../../../services/marvel-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-component',
  template: `
  <span class="result" *ngFor="let hero of heroes"></span>
  <p class="results">{{ heroes.length }} Result</p>
  `,
  styleUrls: ['./result-component.component.css']
})
export class ResultComponentComponent implements OnInit {

  @Input()
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

}
