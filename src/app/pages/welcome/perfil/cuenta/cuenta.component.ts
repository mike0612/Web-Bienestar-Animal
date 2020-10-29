import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styles: []
})
export class CuentaComponent implements OnInit {
  usuario: Usuario;

  constructor() {
    this.usuario = JSON.parse(localStorage.getItem('usuarioActual'));
  }

  ngOnInit() {
  }

}
