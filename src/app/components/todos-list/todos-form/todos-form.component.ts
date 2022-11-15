import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import Todo from 'src/app/interfaces/Todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.css'],
})
export class TodosFormComponent implements OnInit {
  name = '';
  description = '';
  priority = '';

  constructor(private todosService: TodosService) {}

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

    this.todosService.addTodo(newTodo);

    this.name = '';
    this.description = '';
    this.priority = '';
  }
}
