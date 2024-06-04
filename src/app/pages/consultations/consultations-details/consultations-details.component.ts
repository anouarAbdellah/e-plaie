import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {constants, wound_coloration_codes} from "../../../shared/constants";
import { environment } from 'src/environments/environment';
import { MotifsService } from 'src/app/shared/services/motifs.service';

@Component({
  selector: 'app-consultations-details',
  templateUrl: './consultations-details.component.html',
  styleUrls: ['./consultations-details.component.scss']
})
export class ConsultationsDetailsComponent implements OnInit {
  url = environment.url;
  title = constants.CONSULTATIONS;
  @Input() consultation;
  @Output() closingEvent = new EventEmitter();
  motifs: any = [];
  constructor(private motifsService: MotifsService) { }

  ngOnInit(): void {
    console.log(this.consultation)
    this.motifsService.all({params: {}}).subscribe(
      (result) => {
        console.log(result)
        this.motifs = result.data;
      }, 
      (error) => {
      }
    );
  }

  getMotifs() {
    const motifNames = JSON.parse(this.consultation.motif_ids);
    return motifNames.join(", ");
  }
  getIMCBackground() {
    if (this.consultation.imc) {
      if (Number(this.consultation.imc) <= 18.5 || Number(this.consultation.imc) > 35) {
        return "#ef0b0b";
      }
      if (Number(this.consultation.imc) > 25 && Number(this.consultation.imc) <= 35) {
        return "#ef6a0b";
      }
      if (Number(this.consultation.imc) >= 18.5 && Number(this.consultation.imc) <= 25) {
        return "#0ed353";
      }
    } else {
      return "#fff";
    }
  }

  onClose() {
    this.closingEvent.emit();
  }

  downloadFile(link) {

  }

}
