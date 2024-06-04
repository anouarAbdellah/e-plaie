import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {constants, wound_coloration_codes} from "../../../shared/constants";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ptsi-list',
  templateUrl: './ptsi-list.component.html',
  styleUrls: ['./ptsi-list.component.scss']
})
export class PtsiListComponent implements OnInit {
  url = environment.url;
  title = constants.PTSI;
  wound_coloration_codes = wound_coloration_codes;
  @Input() ptsi;
  @Output() closingEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.closingEvent.emit();
  }

}
