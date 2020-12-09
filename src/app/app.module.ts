import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { TodosComponent } from './todos/todos.component';
import { TodoCountComponent } from './todo-count/todo-count.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    TodosComponent,
    TodoCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
