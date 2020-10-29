import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styles: []
})
export class FormSearchComponent implements OnInit, OnDestroy {
  @ViewChild('filterType') filterType: ElementRef;
  @ViewChild('filterGenre') filterGenre: ElementRef;
  @Output() emitirBusqueda: EventEmitter<any>;

  constructor() {
    this.emitirBusqueda = new EventEmitter();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('Destruyendo componente');
    this.emitirBusqueda.unsubscribe();
  }

  enviarBusqueda() {
    if (this.filterType.nativeElement.value !== '' && this.filterGenre.nativeElement.value !== '') {
      const tipo = this.filterType.nativeElement.value;
      const sexo = this.filterGenre.nativeElement.value;
      console.log('Emitiendo búsqueda...');
      this.emitirBusqueda.emit({tipo, sexo});
    } else {
      console.log('Llena todos los campos');
    }
  }
}
