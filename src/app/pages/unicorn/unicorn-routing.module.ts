import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvenGuard } from '../../shared/guards/even.guard';
import { UnicornComponent } from './unicorn.component';

const routes: Routes = [{ path: ':id', component: UnicornComponent, canActivate: [EvenGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnicornRoutingModule {}
