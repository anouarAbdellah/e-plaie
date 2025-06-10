import { Component, Input, Output, EventEmitter, OnInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import {constants, wounds_zones_classes, wound_coloration_codes} from "../../../shared/constants";
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-ptsi-list',
  templateUrl: './ptsi-list.component.html',
  styleUrls: ['./ptsi-list.component.scss']
})
export class PtsiListComponent implements OnInit {
  @ViewChild('ptsiDetailsContent', { static: false }) ptsiDetailsContent!: ElementRef;
  url = environment.url;
  title = constants.PTSI;
  wound_coloration_codes = wound_coloration_codes;
  wounds_zones_classes = wounds_zones_classes;
  @Input() ptsi;
  @Input() patient;
  @Output() closingEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.closingEvent.emit();
  }

  generateLinearGradient() {
    const colorsArray = this.ptsi?.colors;
    if (!Array.isArray(colorsArray) || colorsArray.length === 0) {
      return 'red';
    }
  
    colorsArray.sort((a, b) => a.percentage - b.percentage);
  
    let gradientString = "linear-gradient(to right, ";
    for (let i = 0; i < colorsArray.length; i++) {
      const current = colorsArray[i];
      const next = colorsArray[i + 1];
  
      const start = current.percentage;
      const end = next ? next.percentage : 100;
  
      const colorCode = wound_coloration_codes[current.color];
  
      gradientString += `${colorCode} ${start}%, ${colorCode} ${end}%`;
  
      if (i !== colorsArray.length - 1) {
        gradientString += ", ";
      }
    }
  
    gradientString += ")";
    return gradientString;
  }

  getColorPercentage(color) {
    const foundColor = this.ptsi.colors.find((el: any) => el.color === color);
    return foundColor ? foundColor.percentage : 0;
  }

  calculateAge(dateString) {
    const birthDate = moment(dateString);
    if (!birthDate.isValid()) {
      return "...";
    }
  
    return moment().diff(birthDate, 'years');
  }

  async downloadPtsi() {
    const content = this.ptsiDetailsContent.nativeElement;

    // Use html2canvas to render the content to a canvas
    const canvas = await html2canvas(content, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');

    // Get the content's dimensions in pixels
    const contentWidth = canvas.width;
    const contentHeight = canvas.height;

    // Convert pixel dimensions to mm for jsPDF (1px = 0.264583 mm)
    const pdfWidth = contentWidth * 0.264583;
    const pdfHeight = contentHeight * 0.264583;

    // Initialize jsPDF with the calculated dimensions
    const pdf = new jsPDF({
      orientation: pdfWidth > pdfHeight ? 'landscape' : 'portrait',
      unit: 'mm',
      format: [pdfWidth, pdfHeight],
    });

    // Add the image to the PDF
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

    // Save the PDF
    pdf.save(this.patient.firstname + " " + this.patient.lastname + '-ptsi.pdf');
  }

}
