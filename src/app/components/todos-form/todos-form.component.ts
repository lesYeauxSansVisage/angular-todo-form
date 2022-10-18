import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import Todo from 'src/app/interfaces/Todo';

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.css'],
})
export class TodosFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  getValues(value: any): void {
    console.log(value);
  }
}
