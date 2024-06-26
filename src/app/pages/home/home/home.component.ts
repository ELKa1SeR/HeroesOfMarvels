import { Component, OnInit } from '@angular/core';
import { HeroResult } from '../../../interfaces/hero.interface';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit() {
  }

  onSelectedHero( hero: HeroResult) {
    console.log(hero);

    this.router.navigate(['/hero',hero.id]);
  }
}
