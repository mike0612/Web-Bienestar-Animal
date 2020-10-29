import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit, OnDestroy {
  formulario: FormGroup;
  datos: any;

  constructor(private enrutador: Router) {
    this.formulario = new FormGroup({
      'nombre': new FormControl(null, Validators.required),
      'telefono': new FormControl(null, Validators.required),
      'ciudad': new FormControl(null, Validators.required),
      'fecha': new FormControl(null, Validators.required),
      'estado': new FormControl(null, Validators.required),
      'direccion': new FormControl(null, Validators.required),
      'correo': new FormControl(null, [Validators.required, Validators.email]),
      'telefonoDos': new FormControl(null),
      'celular': new FormControl(null, Validators.required),
      'referencia': new FormControl(null)
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  construirObjeto() {
    this.datos = {
      'nombre': this.formulario.controls['nombre'].value,
      'telefono': this.formulario.controls['telefono'].value,
      'ciudad': this.formulario.controls['ciudad'].value,
      'fecha': this.formulario.controls['fecha'].value,
      'estado': this.formulario.controls['estado'].value,
      'direccion': this.formulario.controls['direccion'].value,
      'correo': this.formulario.controls['correo'].value,
      'telefonoDos': this.formulario.controls['telefonoDos'].value,
      'celular': this.formulario.controls['celular'].value,
      'referencia': this.formulario.controls['referencia'].value
    };
  }

  enviarDatos() {
    if (this.formulario.valid) {
      this.construirObjeto();
      let rutaActual = this.enrutador.url;
      rutaActual = rutaActual.replace('data', 'answers');
      this.enrutador.navigate([rutaActual]);
    }
  }
}
