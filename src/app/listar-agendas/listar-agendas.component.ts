import { Component, OnInit } from '@angular/core';
import { Agenda } from '../agenda'
import { AgendaService } from '../agenda.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-agendas',
  templateUrl: './listar-agendas.component.html',
  styleUrls: ['./listar-agendas.component.css']
})
export class ListarAgendasComponent implements OnInit {

  agendas: Agenda[];

  constructor(private agendaService: AgendaService,
    private router: Router) { }

  ngOnInit(): void {
    this.obtenerAgendas();
  }

  private obtenerAgendas() {
    this.agendaService.obtenerListaAgenda().subscribe(data => {
      this.agendas = data;
    });
  }

  agendaDetalles(id: number) {
    this.router.navigate(['agenda-detalles', id]);
  }

  actualizarAgenda(id: number) {
    this.router.navigate(['actualizar-agenda', id]);
  }

  eliminarAgenda(id: number) {
    this.agendaService.eliminarAgenda(id).subscribe(data => {
      this.obtenerAgendas();
    })
  }
}

