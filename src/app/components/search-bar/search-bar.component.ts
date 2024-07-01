import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeroResult } from '../../interfaces/hero.interface';
import { MarvelApiService } from '../../services/marvel-api.service';
import { Router } from '@angular/router';
import { SearchForm } from '../../models/search.model/search-form';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  template: `
  <!-- le asignamos al formulario la instancia del formulario reactivo que hemos creado en
  el padre utilizando form group (Recordar importar el ReactiveFormsModule) -->

  <form [formGroup]="searchForm" class="search__container">
    <!-- tenemos que asignar el nombre de la variable del formcontrol al nombre del input utilizando formControlName  -->
    <input class="search__input" type="text" placeholder="Search a Character" formControlName="search">
  </form>`,
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @Input() searchForm!: FormGroup<SearchForm>;

  constructor() {}
}
