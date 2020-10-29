import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }

  iniciarSesion(email: string, password: string) {
    return this.auth.auth.signInWithEmailAndPassword(email, password);
  }

  registrarCuenta(email: string, password: string) {
    return this.auth.auth.createUserWithEmailAndPassword(email, password);
  }

  cerrarSesion() {
    return this.auth.auth.signOut();
  }

  obtenerEstado() {
    return this.auth.authState;
  }

}
