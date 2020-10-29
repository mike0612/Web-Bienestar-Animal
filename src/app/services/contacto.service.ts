import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(private database: AngularFireDatabase) {}

  enviarContacto(contacto: Contacto) {
    this.database.database.ref(`contacto/${contacto.id}`).set(contacto);
  }
}
