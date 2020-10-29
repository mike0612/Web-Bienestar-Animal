import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { SolicitudAdopcion } from '../models/solicitud-adopcion';
import { SolicitudPerdido } from '../models/solicitud-perdido';
import { Reporte } from '../models/reporte';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(private database: AngularFireDatabase, private storage: AngularFireStorage) { }

  crearSolicitud(solicitud: SolicitudAdopcion) {
    return this.database.database.ref(`solicitudesAdopcion/${solicitud.id}`).set(solicitud);
  }

  crearSolicitudPerdido(solicitud: SolicitudPerdido) {
    return this.database.database.ref(`solicitudesPerdido/${solicitud.id}`).set(solicitud);
  }

  crearReporte(reporte: Reporte) {
    return this.database.database.ref(`reportes/${reporte.id}`).set(reporte);
  }

  subirFoto(path: any, image: any) {
    return this.storage.ref(`reportes/${path}`).putString(image, 'data_url');
  }

  obtenerUrlFoto(path: any) {
    return this.storage.ref(`reportes/${path}`).getDownloadURL();
  }

  obtenerJumbotron(id: string) {
    return this.database.object(`web/${id}`).valueChanges();
  }
}
