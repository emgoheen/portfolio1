import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  name = 'Emily Tracy';
  year = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
