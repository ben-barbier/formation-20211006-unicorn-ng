import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UnicornRoutingModule } from './unicorn-routing.module';
import { UnicornComponent } from './unicorn.component';

@NgModule({
  declarations: [UnicornComponent],
  imports: [CommonModule, UnicornRoutingModule, SharedModule],
})
export class UnicornModule {}
