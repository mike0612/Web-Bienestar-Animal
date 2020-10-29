import { Component, OnInit } from '@angular/core';
import { CitaService } from 'src/app/services/cita.service';
import { Cita } from 'src/app/models/cita';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-agendadas',
  templateUrl: './agendadas.component.html',
  styles: []
})
export class AgendadasComponent implements OnInit {
  citasAgendadas: Cita[];
  usuario: Usuario;

  constructor(private citaService: CitaService) {
    this.usuario = JSON.parse(localStorage.getItem('usuarioActual'));
    this.citaService.obtenerCitasPorUsuario(`${this.usuario.nombre} ${this.usuario.apellidoPaterno} ${this.usuario.apellidoMaterno}`)
    .subscribe((data: Cita[]) => this.citasAgendadas = data, error => console.log(error));
  }

  ngOnInit() {
  }

}
