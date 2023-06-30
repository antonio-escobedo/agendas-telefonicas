import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAgendasComponent } from './listar-agendas/listar-agendas.component';
import { CrearAgendaComponent } from './crear-agenda/crear-agenda.component';
import { ActualizarAgendaComponent } from './actualizar-agenda/actualizar-agenda.component';
import { AgendaDetallesComponent } from './agenda-detalles/agenda-detalles.component';

const routes: Routes = [
  {path: 'agendas', component: ListarAgendasComponent},
  {path: 'crear-agenda', component: CrearAgendaComponent},
  {path: '', redirectTo: 'agendas', pathMatch: 'full'},
  {path: 'actualizar-agenda/:id', component: ActualizarAgendaComponent},
  {path: 'agenda-detalles/:id', component: AgendaDetallesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
