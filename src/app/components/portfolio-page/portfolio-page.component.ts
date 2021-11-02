import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {

  name = 'Emily Tracy';
  year = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
