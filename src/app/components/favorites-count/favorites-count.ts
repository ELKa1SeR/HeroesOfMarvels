import { Component } from "@angular/core";
import { OnInit } from "@angular/core";

@Component({
  selector: 'app-favorites-count',
  template: `<span class="count">1</span>`,
  styleUrls: ['./favorites-count.css']

})
export class FavoritesCountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
