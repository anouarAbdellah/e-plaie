import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-base-filter',
  templateUrl: './base-filter.component.html',
  styleUrls: ['./base-filter.component.scss']
})
export class BaseFilterComponent implements OnInit {
  @Input() filters;
  @Output() onFilterChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onFilter() {
    let filters = {};
    for (let filter of this.filters)
      filters[filter.name] = filter.value;
    this.onFilterChange.emit(filters);
  }

}
