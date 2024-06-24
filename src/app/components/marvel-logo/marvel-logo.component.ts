import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvel-logo',
  template: '<div class="img"><img src="../../../assets/marvelinsiderlogo.png"></div>',
  styleUrls:['./marvel-logo.css']

})
export class MarvelLogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
