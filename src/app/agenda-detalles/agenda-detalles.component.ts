import { Component, OnInit } from '@angular/core';
import { Agenda } from '../agenda'
import { AgendaService } from '../agenda.service'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-agenda-detalles',
  templateUrl: './agenda-detalles.component.html',
  styleUrls: ['./agenda-detalles.component.css']
})
export class AgendaDetallesComponent implements OnInit{
  id: number;
  agenda: Agenda;
  constructor(private route: ActivatedRoute, private agendaService: AgendaService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.agenda = new Agenda();
    this.agendaService.obtenerAgendaPorId(this.id).subscribe( data => {
      this.agenda = data;
    });
  }
}
