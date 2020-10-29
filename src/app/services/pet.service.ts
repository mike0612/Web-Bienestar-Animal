import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {map} from 'rxjs/operators';
import { Mascota } from '../models/mascota';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private database: AngularFireDatabase) { }

  descargarMascotas() {
    return this.database.list('mascotas/')
    .valueChanges();
  }

  buscarMascotasPorFiltro(tipo: string, sexo: string) {
    return this.database.list('mascotas/', ref => ref.orderByChild('tipo').equalTo(tipo))
    .valueChanges().pipe(map(data => data.filter((item: Mascota) => item.sexo === sexo)));
  }

  buscarMascotasPorTipo(tipo: string) {
    return this.database.list('mascotas', ref => ref.orderByChild('tipo').equalTo(tipo)).valueChanges();
  }

  buscarMascotaPorId(id: number) {
    return this.database.object(`mascotas/${id}`).valueChanges();
  }

  obtenerMascotarPerdidas() {
    return this.database.list('perdidos').valueChanges();
  }

  actualizarMascota(mascota: Mascota) {
    return this.database.database.ref(`mascotas/${mascota.id}`).set(mascota);
  }
}
