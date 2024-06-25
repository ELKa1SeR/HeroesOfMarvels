import { Component, Input } from '@angular/core';
import { HeroResult } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent {

  @Input() hero!: HeroResult; 
}
