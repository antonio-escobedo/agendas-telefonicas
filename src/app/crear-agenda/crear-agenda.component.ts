import { Component, OnInit } from '@angular/core';
import { Agenda } from '../agenda'
import { AgendaService } from '../agenda.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-agenda',
  templateUrl: './crear-agenda.component.html',
  styleUrls: ['./crear-agenda.component.css']
})
export class CrearAgendaComponent implements OnInit {
  agenda: Agenda = new Agenda();

  constructor(private agendaService: AgendaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  private guardarAgenda() {
    this.agendaService.crearAgenda(this.agenda).subscribe(data => {
      this.obtenerAgendas();
    },
      error => console.log(error));
  }

  obtenerAgendas() {
    this.router.navigate(['/agendas'])
  }

  onSubmit() {
    console.log(this.agenda);
    this.guardarAgenda();
  }

}

