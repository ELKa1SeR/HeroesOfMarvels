import { Component, OnInit } from "@angular/core";
import { HeroResult } from "../../interfaces/hero.interface";
import { MarvelApiService } from "../../services/marvel-api.service";


@Component({
  selector: 'app-detail-model',
  templateUrl: './detail.model.html',
  styleUrls: ['./detail.model.css'],
})

export class DetailModelComponent implements OnInit {
  hero?: HeroResult;

  constructor(private marvelApiService: MarvelApiService) {}

  ngOnInit(): void {
    // // Replace with the actual id you want to fetch
    // this.marvelApiService.getHeroById(hero.id).subscribe((hero) => {
    //   console.log('Hero received:', hero);
    //   this.hero = hero.map( => ({

    //   }));
    // });
  }
}
