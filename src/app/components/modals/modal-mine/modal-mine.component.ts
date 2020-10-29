import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Perdido } from 'src/app/models/perdido';

@Component({
  selector: 'app-modal-mine',
  templateUrl: './modal-mine.component.html',
  styles: []
})
export class ModalMineComponent implements OnInit {
  @Input() perdido: Perdido;
  @Output() emitState: EventEmitter<any>;

  constructor() { 
    this.emitState = new EventEmitter();
  }

  ngOnInit() {
  }

  bindState(state: any) {
    this.emitState.emit(state);
  }
}
