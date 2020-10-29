import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private database: AngularFireDatabase) { }

  obtenerNoticias() {
    return this.database.list('noticias').valueChanges();
  }

  obtenerNoticiaPorId(id: number) {
    return this.database.object(`noticias/${id}`).valueChanges();
  }
}
