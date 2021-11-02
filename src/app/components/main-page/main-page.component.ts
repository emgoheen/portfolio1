import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  name = 'Emily Tracy';
  year = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
