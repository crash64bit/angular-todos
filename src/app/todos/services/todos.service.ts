import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: Todo[] = [];

  load(): Todo[] {
    this.todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

    return this.todos;
  }

  save(): boolean {
    localStorage.setItem('todos', JSON.stringify(this.todos));

    return true;
  }

  remove(id: number): boolean {
    if (id !== -1) {
        this.todos.splice(id, 1);
    }

    return this.save();
  }
}
