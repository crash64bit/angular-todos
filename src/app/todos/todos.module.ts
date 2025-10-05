import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosComponent } from './todos.component';
import { TodoCountComponent } from '../todo-count/todo-count.component';
import { TodosCountPipe } from './todos-count.pipe';


@NgModule({
  declarations: [
    TodosComponent,
    TodoCountComponent,
    TodosCountPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodosComponent
  ]
})
export class TodosModule { }
