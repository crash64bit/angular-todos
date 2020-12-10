import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-count',
  templateUrl: './todo-count.component.html',
  styleUrls: ['./todo-count.component.scss']
})
export class TodoCountComponent implements OnInit {
  @Input() count: number;

  constructor() {
  }

  ngOnInit(): void {
  }
}
