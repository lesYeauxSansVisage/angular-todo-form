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
    this.todos.push(todo);
  }

  deleteTodos(id: number): Todo[] {
    return (this.todos = this.todos.filter((todo) => todo.id !== id));
  }

  toggleCompleted(id: number): Todo[] {
    return (this.todos = this.todos.map((el) =>
      el.id === id ? { ...el, completed: !el.completed } : el
    ));
  }
}
