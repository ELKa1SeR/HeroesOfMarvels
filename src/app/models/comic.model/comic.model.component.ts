import { Component, OnInit } from '@angular/core';
import { ComicResult } from '../../interfaces/comics.interface';
import { MarvelApiService } from '../../services/marvel-api.service';

@Component({
  selector: 'app-comic-model',
  templateUrl: './comic.html',
  styleUrls: ['./comic.model.component.css'],
})
export class ComicModelComponent implements OnInit {
  comics: ComicResult[] = [];
  selectedComicIndex: number = 0;

  constructor(private marvelService: MarvelApiService) {}

  ngOnInit() {
    this.marvelService.getComics().subscribe(data => {
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
