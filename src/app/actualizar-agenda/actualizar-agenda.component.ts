import { Component, OnInit } from '@angular/core';
import { Agenda } from '../agenda'
import { AgendaService } from '../agenda.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-agenda',
  templateUrl: './actualizar-agenda.component.html',
  styleUrls: ['./actualizar-agenda.component.css']
})
export class ActualizarAgendaComponent implements OnInit {
  id: number;
  agenda: Agenda = new Agenda();

  constructor(private agendaService: AgendaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.agendaService.obtenerAgendaPorId(this.id).subscribe(data => {
      this.agenda = data;
    }, error => console.log(error));
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
    this.agendaService.actualizarAgenda(this.id, this.agenda).subscribe(data => {
      this.obtenerAgendas();
    }
      , error => console.log(error));
  }
}