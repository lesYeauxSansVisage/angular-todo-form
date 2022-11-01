import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TodosServiceService } from 'src/app/services/todos-service.service';

import Todo from 'src/app/interfaces/Todo';

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.css'],
})
export class TodosFormComponent implements OnInit {
  constructor(private todosService: TodosServiceService) {}

  name: string = '';
  description: string = '';
  priority: string = '';

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    // this.todosService.addTodo();

    if (!this.name || !this.priority) {
      console.log('You must have a name and a priority');
      return;
    }

    const newTodo = {
      name: this.name,
      description: this.description,
      priority: this.priority,
    };

    this.todosService.addTodo(newTodo)

    form.reset();
  }
}
