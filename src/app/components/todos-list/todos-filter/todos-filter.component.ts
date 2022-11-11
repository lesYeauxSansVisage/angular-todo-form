import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-todos-filter',
  templateUrl: './todos-filter.component.html',
  styleUrls: ['./todos-filter.component.css'],
})
export class TodosFilterComponent implements OnInit {
  @Output() filterCompleted = new EventEmitter<void>();
  @Output() showAll = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  filterByCompleted() {
    this.filterCompleted.emit();
  }

  showAllTodos() {
    this.showAll.emit();
  }
}
