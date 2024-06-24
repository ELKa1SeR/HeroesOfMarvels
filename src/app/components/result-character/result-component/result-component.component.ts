import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-component',
  template: `<span class="result">50 RESULTS</span>`,
  styleUrls: ['./result-component.component.css']
})
export class ResultComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
