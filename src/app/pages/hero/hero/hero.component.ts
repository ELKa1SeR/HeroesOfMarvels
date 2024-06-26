import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../../../services/marvel-api.service';
import { ActivatedRoute } from '@angular/router';
import { HeroResult } from '../../../interfaces/hero.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero?: HeroResult;

  constructor(private route: ActivatedRoute, private marvelApiService: MarvelApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.marvelApiService.getHeroById(id).subscribe(hero => {
        this.hero = hero;
      });
    });
  }
}
