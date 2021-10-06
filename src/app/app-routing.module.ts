import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnicornComponent } from './pages/unicorn/unicorn.component';
import { UnicornsListComponent } from './pages/unicorns-list/unicorns-list.component';
import { EvenGuard } from './shared/guards/even.guard';

const routes: Routes = [
  { path: '', component: UnicornsListComponent },
  { path: 'unicorn/:id', component: UnicornComponent, canActivate: [EvenGuard] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
