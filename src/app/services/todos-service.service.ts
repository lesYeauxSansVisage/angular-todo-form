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
    const todosLength: number = this.todos.length;

    const newTodo: Todo = {
      id: todosLength > 0 ? this.todos[todosLength - 1].id! + 1 : 1,
      name: todo.name,
      description: todo.description,
      priority: todo.priority,
      completed: false,
    };

    this.todos.push(newTodo);
  }

  logTodos(): void {
    console.log(this.todos);
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
