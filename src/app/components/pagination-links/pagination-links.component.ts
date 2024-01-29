import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-links',
  templateUrl: './pagination-links.component.html',
  styleUrls: ['./pagination-links.component.scss']
})
export class PaginationLinksComponent implements OnInit {
  @Input() page = 1;
  @Input() pagesCount = 1;
  @Output() onPageChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  arrayOfN(n) {
    return Array(n);
  }
  
  nextPage() {
    if (this.page < this.pagesCount) {
      this.page++;
      this.onPageChange.emit(this.page);
    }
  }
  previousPage() {
    if (this.page > 1) {
      this.page--;
      this.onPageChange.emit(this.page);
    }
  }
  goToPage(page) {
    if (page != this.page && page > 0 && page <= this.pagesCount) {
      this.page = page;
      this.onPageChange.emit(this.page);
    }
  }

}
