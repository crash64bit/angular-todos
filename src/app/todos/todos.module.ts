import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosComponent } from './todos.component';
import { TodoCountComponent } from '../todo-count/todo-count.component';


@NgModule({
  declarations: [
    TodosComponent,
    TodoCountComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodosComponent
  ]
})
export class TodosModule { }
