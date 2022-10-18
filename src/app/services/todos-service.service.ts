import { Injectable } from '@angular/core';
import Todo from '../interfaces/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodosServiceService {
  todos: Todo[] = [];

  constructor() {}

  
}
