import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-count',
  templateUrl: './todo-count.component.html',
  styleUrls: ['./todo-count.component.scss']
})
export class TodoCountComponent implements OnInit {
  @Input() todos: {
    title: string,
    completed: boolean,
    edited: boolean
  }[];
  
  count: number;

  constructor() {
  }

  ngOnInit(): void {
  }


  public countTodos() {
    return this.todos.filter(t => !t.completed).length
  }

}
