import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from 'src/app/models/mascota';

@Component({
  selector: 'app-card-adopt',
  templateUrl: './card-adopt.component.html',
  styles: []
})
export class CardAdoptComponent implements OnInit {
  @Input() mascota: Mascota;
  @Output() adopt: EventEmitter<any>;

  constructor() {
    this.adopt = new EventEmitter();
  }

  ngOnInit() {
  }

  sendModalRequest() {
    const emisor = {mascota: this.mascota, mostrarModal: true};
    this.adopt.emit(emisor);
  }

}
