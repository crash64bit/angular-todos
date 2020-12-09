import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: {
    title: string,
    completed: boolean
  }[];

  constructor() { }

  ngOnInit(): void {
    this.load();
  }

  private load() {
    this.todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
  }

  private save() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  private remove(id: number) {
    if (id !== -1) {
        this.todos.splice(id, 1);
    } 

    this.save();
  }

  public add(value: string) {
    let todo = {
      title: value,
      completed: false
    }

    this.todos.push(todo);  

    this.save();
  }

  private completed(id: number) {
    this.todos[id].completed = !this.todos[id].completed;

    this.save();
  }

}
