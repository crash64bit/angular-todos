import { Component, OnInit } from '@angular/core';
import { Todo } from './models/todo.model';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  activeFilter = 'all';

  todos: Todo[];
  filteredTodos: Todo[];

  count: number;

  service: TodosService;

  constructor() {
    this.service = new TodosService();
  }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.todos = this.service.load();
    this.filteredTodos = this.filterTodo();

    this.updateCount();
  }

  save(): void {
    this.service.save();

    this.updateCount();
  }

  remove(id: number): void {
    if (id !== -1) {
        this.todos.splice(id, 1);
    }

    this.filteredTodos = this.filterTodo();

    this.save();
  }

  edit(id: number, input?: HTMLInputElement): void {
    this.todos[id].edited = !this.todos[id].edited;
    if (input) {
      setTimeout(() => { // this will make the execution after the above boolean has changed
        input.focus();
      }, 0);
    }
  }

  updateCount(): void {
    this.count = this.todos.filter(t => !t.completed).length;
  }

  saveEdit(id: number, title: string): void {
    console.log(id, title);
    if (title === '') {
      this.remove(id);
    }
    else {
      this.todos[id].title = title;
      this.edit(id);
      this.save();
    }
  }

  cancelEdit(id: number): void {
    if (this.todos[id] && this.todos[id].edited) {
      this.todos[id].edited = false;
    }
  }

  add(value: string): void {
    const todo = {
      title: value,
      completed: false,
      edited: false
    };

    this.todos.push(todo);

    this.save();
  }

  completed(id: number): void {
    this.todos[id].completed = !this.todos[id].completed;

    this.save();
  }

  log(msg: string): void {
    console.log(msg);
  }

  toggleAll(): void {
    // let count = this.todos.filter(t => !t.completed).length;
    let complete = true;

    if (this.count === 0) {
      complete = false;
    }
    this.todos.forEach(t => t.completed =  complete);

    this.save();
  }

  filter(filter: string): void {
    this.activeFilter = filter;
  }

  filterTodo(): Todo[] {

    if (this.activeFilter === 'completed') {
      return this.todos.filter(t => t.completed);
    }
    else if (this.activeFilter === 'active') {
      return this.todos.filter(t => !t.completed);
    }

    // return this.todos;
    return Object.assign([], this.todos);
  }

  clearCompleted(): void {
    this.todos = this.todos.filter(t => !t.completed);

    this.save();
  }
}
