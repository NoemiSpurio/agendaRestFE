import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./features/welcome/welcome.module').then(m => m.WelcomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'agenda',
    loadChildren: () => import('./features/agenda/agenda.module').then(m => m.AgendaModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
