import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  title: string;
  subtitle: string;

  constructor() {
    this.title = 'Todos List';
    this.subtitle = 'Simple todos list';
  }

  ngOnInit(): void {
    this.log(`onInit`);
  }

  private log(msg: string) {
    console.log(msg);
  }
}
