import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PdfRoutingModule } from './pdf-routing.module';
import { PdfComponent } from './pdf.component';

@NgModule({
  declarations: [PdfComponent],
  imports: [CommonModule, PdfRoutingModule, SharedModule],
})
export class PdfModule {}
