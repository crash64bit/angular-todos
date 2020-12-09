import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: {
    title: string,
    done: boolean
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
      done: false
    }

    this.todos.push(todo);  

    this.save();
  }

  private done(id: number) {
    this.todos[id].done = !this.todos[id].done;

    this.save();
  }

}
