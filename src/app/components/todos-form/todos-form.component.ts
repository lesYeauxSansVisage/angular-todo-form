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

  todo = {
    name: '',
    description: '',
    priority: '',
  };

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.todosService.addTodo(this.todo);

    form.reset();
  }
}
