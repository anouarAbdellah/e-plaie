import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.scss']
})
export class BaseModalComponent implements OnInit {
  @ViewChild('contentTemplate') contentTemplate: TemplateRef<any>;
  @Input() title;
  @Input() isLoading = false;
  @Input() showSubmit = true;
  @Output() closingEvent = new EventEmitter();
  @Output() submit = new EventEmitter();

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.open();
  }

  open() {
    console.log('hi')
    this.modalService.open(this.contentTemplate, { windowClass: 'myCustomModal' }).result.then(
      (result) => {
        // Handle the close event here.
        console.log('Modal Closed with:', result);
        this.onClose();
      },
      (reason) => {
        // Handle the dismiss event here.
        console.log('Modal Dismissed with:', reason);
        this.onClose();
      }
    );;
  }

  onClose() {
    this.modalService.dismissAll();
    this.closingEvent.emit();
  }

  onSubmit() {
    this.submit.emit();
  }
  

}
