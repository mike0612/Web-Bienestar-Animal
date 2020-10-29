import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styles: []
})
export class DatesComponent implements OnInit {
  usuario: Usuario;

  constructor() {
    this.usuario = JSON.parse(localStorage.getItem('usuarioActual'));
  }

  ngOnInit() {
  }

}
