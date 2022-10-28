import { Injectable } from '@angular/core';
import Todo from '../interfaces/Todo';
import { mockTodos } from '../mock-todos';

@Injectable({
  providedIn: 'root',
})
export class TodosServiceService {
  todos: Todo[] = mockTodos;

  todo = {
    id: undefined,
    name: '',
    description: '',
    priority: '',
  };

  constructor() {}

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo) {
    todo.id = this.todos.length + 1;
    todo.name = todo.name;
    todo.description = todo.description;
    todo.priority = todo.priority;

    this.todos.push(todo);

    todo.id = 0;
    todo.name = '';
    todo.description = '';
    todo.priority = '';

    console.log(this.todos);
  }

  logTodos(): void {
    console.log(this.todos);
  }
}
