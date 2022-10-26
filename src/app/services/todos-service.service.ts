import { Injectable } from '@angular/core';
import Todo from '../interfaces/Todo';
import { mockTodos } from '../mock-todos';

@Injectable({
  providedIn: 'root',
})
export class TodosServiceService {
  todos: Todo[] = mockTodos;

  constructor() {}

  getTodos(): Todo[] {
    return this.todos;
  }

  logTodos(): void {
    console.log(this.todos);
  }
}
