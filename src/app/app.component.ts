import { Component, VERSION } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private title: Title) { }
  
  ngOnInit() {
    this.title.setTitle(`Emily's Portfolio ${VERSION.full}`)
  }
}
