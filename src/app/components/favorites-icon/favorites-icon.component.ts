import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites-icon',
  /* I use the template here for efficiency and cleanliness*/
  template: `<button class="favorites-icon" [class.favorite]="isFavorited" (click)="toggleFavorite()">🤍</button>`,
  styleUrls: ['./favorites-icon.component.css']
})
export class FavoritesIconComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  isFavorited: boolean = false;

  toggleFavorite() {
    this.isFavorited = !this.isFavorited;
  }
}
