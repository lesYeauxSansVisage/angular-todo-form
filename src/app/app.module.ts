import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosFormComponent } from './components/todos-list/todos-form/todos-form.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { TodoItemComponent } from './components/todos-list/todo-item/todo-item.component';
import { TodosFilterComponent } from './components/todos-list/todos-filter/todos-filter.component';
import { TodosService } from './services/todos.service';

@NgModule({
  declarations: [
    AppComponent,
    TodosFormComponent,
    TodosListComponent,
    TodoItemComponent,
    TodosFilterComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [TodosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
