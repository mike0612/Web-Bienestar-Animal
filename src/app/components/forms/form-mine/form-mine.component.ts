import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Mascota } from 'src/app/models/mascota';
import { Perdido } from 'src/app/models/perdido';
import { SolicitudPerdido } from 'src/app/models/solicitud-perdido';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-form-mine',
  templateUrl: './form-mine.component.html',
  styles: []
})
export class FormMineComponent implements OnInit {
  @Input() perdido: Perdido;
  @Output() closeModal: EventEmitter<any>;
  formMine: FormGroup;

  constructor(private solicitudService: SolicitudService) {
    this.closeModal = new EventEmitter();
    this.formMine = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null, Validators.required),
      'comment': new FormControl(null, Validators.required)
    });
    this.formMine.markAsUntouched();
  }

  ngOnInit() {
  }

  emitCloseModal() {
    this.closeModal.emit({mostrarModal: false, perdido: this.perdido});
  }

  construirObjeto(): SolicitudPerdido {
    return {
      id: Date.now(),
      nombre: `${this.formMine.controls['name'].value}`,
      correo: `${this.formMine.controls['email'].value}`,
      telefono: `${this.formMine.controls['phone'].value}`,
      mensaje: `${this.formMine.controls['comment'].value}`
    };
  }

  async enviarSolicitud() {
    try {
      if (this.formMine.valid) {
        await this.solicitudService.crearSolicitudPerdido(this.construirObjeto());
        alert('Tu solicitud ha sido enviada');
        this.emitCloseModal();
      }
    } catch (error) {
      console.log(error);
      this.emitCloseModal();
    }
  }
}
