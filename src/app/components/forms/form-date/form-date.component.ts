import { Component, OnInit } from '@angular/core';
import { CitaService } from 'src/app/services/cita.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cita } from 'src/app/models/cita';

@Component({
  selector: 'app-form-date',
  templateUrl: './form-date.component.html',
  styles: []
})
export class FormDateComponent implements OnInit {
  formulario: FormGroup;

  constructor(private citaService: CitaService) {
    this.formulario = new FormGroup({
      'nombre': new FormControl(null, Validators.required),
      'mascota': new FormControl(null, Validators.required),
      'edadMascota': new FormControl(null, Validators.required),
      'fecha': new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
  }

  obtenerDatosFormulario(): Cita {
    const id = Date.now();
    const cita = new Cita(
      id,
      `${this.formulario.controls['nombre'].value}`,
      `${this.formulario.controls['mascota'].value}`,
      `${this.formulario.controls['edadMascota'].value}`,
      `${this.formulario.controls['fecha'].value}`
    );
    return cita;
  }

  agendarCita() {
    if (this.formulario.valid) {
      this.citaService.agendarCita(this.obtenerDatosFormulario())
      .then(data => alert('Se agendó tu cita exitosamente.'))
      .catch(error => {
        alert('Error al agendar tu cita');
        console.log(error);
      });
    }
  }
}
