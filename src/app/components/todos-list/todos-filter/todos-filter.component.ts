import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos-filter',
  templateUrl: './todos-filter.component.html',
  styleUrls: ['./todos-filter.component.css'],
})
export class TodosFilterComponent implements OnInit {
  @Output() filterCompleted = new EventEmitter<void>();
  @Output() filterActive = new EventEmitter<void>();
  @Output() clearCompleted = new EventEmitter<void>();
  @Output() showAll = new EventEmitter<void>();

  search: string = '';

  todosLength: number = 0;

  constructor(private todosService: TodosService) {
    this.todosLength = this.todosService.todos.length;
  }

  ngOnInit(): void {
    this.todosLength = this.todosService.todos.length;
  }

  filterByCompleted() {
    this.filterCompleted.emit();
  }

  filterByActive() {
    this.filterActive.emit();
  }

  showAllTodos() {
    this.showAll.emit();
  }

  clearCompletedTodos() {
    this.clearCompleted.emit();
  }
}
