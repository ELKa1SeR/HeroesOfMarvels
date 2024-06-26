import { Component, Input, OnInit, input } from '@angular/core';
import { ComicResult } from '../../interfaces/comics.interface';
import { MarvelApiService } from '../../services/marvel-api.service';
import { ComicsItem } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-comic-model',
  templateUrl: './comic.html',
  styleUrls: ['./comic.model.component.css'],
})
export class ComicModelComponent implements OnInit {

  @Input()
  heroId!: number;

  comics: ComicResult[] = [];

  selectedComicIndex: number = 0;

  constructor(private marvelService: MarvelApiService) {}

  ngOnInit() {

    this.marvelService.getComicsByHeroId(this.heroId).subscribe((data) => {
      this.comics = data;
    });
  }

  selectComic(index: number) {
    this.selectedComicIndex = index + 1;
  }

  get progressWidth(): number {
    return this.comics.length > 0 ? (this.selectedComicIndex / this.comics.length) * 100 : 0;
  }
}
