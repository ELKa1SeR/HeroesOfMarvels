import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-character.model',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>character.model works!</p>`,
  styleUrl: './character.model.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterModelComponent { }
