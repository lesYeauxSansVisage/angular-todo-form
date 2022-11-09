import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import Todo from 'src/app/interfaces/Todo';

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.css'],
})
export class TodosFormComponent implements OnInit {
  @Output() onTodoAdd = new EventEmitter<Todo>();

  name = '';
  description = '';
  priority = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.name || !this.priority) {
      console.log('You must have a name and a priority');
      return;
    }

    const newTodo: Todo = {
      name: this.name,
      description: this.description,
      priority: this.priority,
      completed: false,
    };

    this.onTodoAdd.emit(newTodo);

    this.name = '';
    this.description = '';
    this.priority = '';
  }
}
