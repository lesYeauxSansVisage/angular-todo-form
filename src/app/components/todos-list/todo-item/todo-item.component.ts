import { Component, OnInit, Input } from '@angular/core';

import Todo from 'src/app/interfaces/Todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = {
    name: '',
    description: '',
    priority: '',
    completed: false,
  };

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {}

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

  toggleCompleted(id: number) {
    this.todosService.toggleCompleted(id);
  }

  delete(id: number) {
    this.todosService.deleteTodos(id);
  }
}
