import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearAgendaComponent } from './crear-agenda/crear-agenda.component';
import { ActualizarAgendaComponent } from './actualizar-agenda/actualizar-agenda.component';
import { AgendaDetallesComponent } from './agenda-detalles/agenda-detalles.component';
import { ListarAgendasComponent } from './listar-agendas/listar-agendas.component';
import { AgendaComponent } from './agenda/agenda.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CrearAgendaComponent,
    ActualizarAgendaComponent,
    AgendaDetallesComponent,
    ListarAgendasComponent,
    AgendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
