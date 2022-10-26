import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosFormComponent } from './components/todos-form/todos-form.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';

@NgModule({
  declarations: [AppComponent, TodosFormComponent, TodosListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
