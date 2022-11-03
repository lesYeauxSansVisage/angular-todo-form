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

  addTodo(todo: Todo) {
    const newTodo: Todo = {
      id: this.todos.length + 1,
      name: todo.name,
      description: todo.description,
      priority: todo.priority,
    };

    this.todos.push(newTodo);
  }

  logTodos(): void {
    console.log(this.todos);
  }

  deleteTodos(id: number): Todo[] {
    return (this.todos = this.todos.filter((todo) => todo.id !== id));
  }
}
