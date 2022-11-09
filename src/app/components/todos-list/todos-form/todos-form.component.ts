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

  ngOnInit(): void {}

  onSubmit(
    name: HTMLInputElement,
    description: HTMLInputElement,
    priority: HTMLSelectElement
  ) {
    // this.todosService.addTodo();

    if (!name.value || !priority.value) {
      console.log('You must have a name and a priority');
      return;
    }

    const newTodo = {
      name: name.value,
      description: description.value,
      priority: priority.value,
      completed: false,
    };

    this.todosService.addTodo(newTodo);

    // form.reset();
  }
}
