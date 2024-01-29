import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss']
})
export class BaseTableComponent implements OnInit {
  @Input() isLoading;
  @Input() data;
  @Input() tableData;
  @Input() viewLink;
  @Output() onToggleStatus = new EventEmitter();
  @Output() onEdit = new EventEmitter();

  constructor(private translate: TranslateService, private router: Router) { }

  ngOnInit(): void {
  }

  toggleStatusChange(status, id) {
    this.onToggleStatus.emit({
      id: id,
      status: status
    })
  }

  edit(item) {
    this.onEdit.emit(item);
  }

  view(item) {
    this.router.navigate([this.viewLink, item.id]);
  }

}
