import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-comic.model',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: ``,
  styleUrl: './comic.model.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComicModelComponent { }
