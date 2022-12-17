import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaListComponent } from './agenda-list/agenda-list.component';
import { AgendaCreateComponent } from './agenda-create/agenda-create.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    component: AgendaListComponent
  },
  {
    path: 'create',
    component: AgendaCreateComponent
  },
  {
    path: 'edit/:id',
    component: AgendaCreateComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AgendaListComponent,
    AgendaCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AgendaModule { }
