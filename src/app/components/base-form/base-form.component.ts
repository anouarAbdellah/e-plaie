import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss']
})
export class BaseFormComponent implements OnInit {
  @Input() isLoading = false;
  @Input() steps = [];
  @Input() fields = [];
  @Input() data = {};
  @Output() submit = new EventEmitter();
  active_step = null;

  constructor() { }

  ngOnInit(): void {
    if (this.steps && this.steps.length > 0) {
      this.onActiveStepChange(this.steps[0])
    }
  }

  onActiveStepChange(step) {
    this.active_step = step.key;
  }

  onSubmit() {
    this.submit.emit();
  }

}
