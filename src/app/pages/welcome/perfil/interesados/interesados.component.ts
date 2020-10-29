import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-interesados',
  templateUrl: './interesados.component.html',
  styles: []
})
export class InteresadosComponent implements OnInit {
  usuario: Usuario;

  constructor(private usuarioService: UsuarioService) {
    const id = JSON.parse(localStorage.getItem('usuarioActual')).id;
    this.usuarioService.obtenerUsuario(id).subscribe(
      (data: Usuario) => this.usuario = data, error => console.log(error)
    );
  }

  ngOnInit() {
  }

}
