import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import Todo from 'src/app/interfaces/Todo';

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

  @Output() deleteTodo = new EventEmitter<void>();
  @Output() toggle = new EventEmitter<void>();

  constructor() {}

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

  toggleCompleted() {
    this.toggle.emit();
  }

  delete() {
    this.deleteTodo.emit();
  }
}
