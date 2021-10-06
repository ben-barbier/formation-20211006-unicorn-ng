import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PdfRoutingModule } from './pdf-routing.module';
import { PdfComponent } from './pdf.component';

@NgModule({
  declarations: [PdfComponent],
  imports: [CommonModule, PdfRoutingModule],
})
export class PdfModule {}
