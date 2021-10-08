import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/unicorns-list/unicorns-list.module').then((m) => m.UnicornsListModule) },
  { path: 'unicorn', loadChildren: () => import('./pages/unicorn/unicorn.module').then((m) => m.UnicornModule) },
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then((m) => m.AdminModule) },
  { path: 'pdf', loadChildren: () => import('./pages/pdf/pdf.module').then((m) => m.PdfModule) },
  { path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then((m) => m.CartModule) },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
