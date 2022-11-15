import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos-filter',
  templateUrl: './todos-filter.component.html',
  styleUrls: ['./todos-filter.component.css'],
})
export class TodosFilterComponent implements OnInit {
  @Output() filterCompleted = new EventEmitter<void>();
  @Output() showAll = new EventEmitter<void>();

  search: string = '';

  todosLength: number = 0;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosLength = this.todosService.todos.length;
  }

  filterByCompleted() {
    this.filterCompleted.emit();
  }

  showAllTodos() {
    this.showAll.emit();
  }
}
