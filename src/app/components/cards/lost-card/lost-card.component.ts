import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Perdido } from 'src/app/models/perdido';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-lost-card',
  templateUrl: './lost-card.component.html',
  styles: []
})
export class LostCardComponent implements OnInit {
  @Output() emitModal: EventEmitter<any>;
  @Input() perdido: Perdido;
  login: Usuario;

  constructor() { 
    this.emitModal = new EventEmitter();
    this.login = JSON.parse(localStorage.getItem('usuarioActual'));
  }

  ngOnInit() {
  }

  showModal() {
    this.emitModal.emit({mostrarModal: true, perdido: this.perdido});
  }

}
