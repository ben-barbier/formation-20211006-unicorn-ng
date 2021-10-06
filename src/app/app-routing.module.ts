import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnicornComponent } from './pages/unicorn/unicorn.component';
import { UnicornsListComponent } from './pages/unicorns-list/unicorns-list.component';
import { EvenGuard } from './shared/guards/even.guard';

const routes: Routes = [
  { path: '', component: UnicornsListComponent },
  { path: 'unicorn/:id', component: UnicornComponent, canActivate: [EvenGuard] },
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then((m) => m.AdminModule) },
  { path: 'pdf', loadChildren: () => import('./pages/pdf/pdf.module').then((m) => m.PdfModule) },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
