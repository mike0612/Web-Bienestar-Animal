import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TipService {

  constructor(private database: AngularFireDatabase) { }

  obtenerTips() {
    return this.database.list('tips').valueChanges();
  }

  obtenerTipPorId(id: number) {
    return this.database.object(`tips/${id}`).valueChanges();
  }
}
