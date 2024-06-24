import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  template: `
  <div class="search__container">
    <input class="search__input" type="text" placeholder="Search a Character">
  </div>
`,
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
