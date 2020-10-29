import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Cita } from '../models/cita';
import { refCount } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private database: AngularFireDatabase) { }

  agendarCita(cita: Cita) {
    // Creacion de la cita en la colección de citas
    return this.database.database.ref(`citas/${cita.id}`).set(cita);
  }

  obtenerCitasPorUsuario(nombreUsuario: string) {
    return this.database.list('citas', ref => ref.orderByChild('nombreDueno').equalTo(nombreUsuario))
    .valueChanges();
  }
}
