import { Component, OnInit } from '@angular/core';
import Todo from 'src/app/interfaces/Todo';

import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css'],
})
export class TodosListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodosService) {}

  ngOnInit(): void {
    this.todos = this.todoService.todos;
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

  filterCompleted() {
    this.todos = this.todos.filter((todo) => todo.completed);
  }

  filterActive() {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }

  showAll() {
    this.todos = this.todoService.todos;
  }

  clearCompleted() {
    this.todoService.clearCompleted();
    this.todos = this.todoService.todos;
  }
}
