import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Usuario } from '../models/usuario';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private database: AngularFireDatabase) { }

  crearUsuario(usuario: Usuario) {
    return this.database.database.ref(`usuarios/${usuario.id}`).set(usuario);
  }

  obtenerUsuario(id: string) {
    return this.database.object(`usuarios/${id}`).valueChanges()
    .pipe(filter((usuario: Usuario) => usuario.tipo === 3));
  }

  actualizarUsuario(usuario: Usuario) {
    return this.database.database.ref(`usuarios/${usuario.id}`).set(usuario);
  }
}
