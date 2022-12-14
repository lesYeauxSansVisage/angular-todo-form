import { Component, OnInit } from '@angular/core';
import Todo from 'src/app/interfaces/Todo';

import { TodosServiceService } from 'src/app/services/todos-service.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css'],
})
export class TodosListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodosServiceService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
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

  delete(id: any) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  getBadgeColor(priority: string): string {
    interface Colors {
      low: string;
      medium: string;
      high: string;
    }

    const colors: Colors = {
      low: '#0bb84d',
      medium: '#1041b3',
      high: '#701411',
    };

    return colors[priority as keyof Colors];
  }

  toggleCompleted(id: any) {
    const todoId: number = id!;

    const currentTodoIndex = this.todos.findIndex((todo) => todo.id === todoId);

    this.todos[currentTodoIndex].completed =
      !this.todos[currentTodoIndex].completed;

    
  }

  filterCompleted() {
    this.todos = this.todos.filter((todo) => todo.completed);
  }

  showAll() {
    this.todos = this.todoService.getTodos();
  }
}
