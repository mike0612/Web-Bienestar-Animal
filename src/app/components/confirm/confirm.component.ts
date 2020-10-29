import { Component, OnInit, Input } from '@angular/core';
import { SolicitudAdopcion } from 'src/app/models/solicitud-adopcion';
import { Router } from '@angular/router';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styles: []
})
export class ConfirmComponent implements OnInit {
  solicitud: SolicitudAdopcion;

  constructor(private enrutador: Router, private solicitudService: SolicitudService) {}

  ngOnInit() {
  }

  async confirmarSolicitud() {
    try {
      this.solicitud.status = 'Terminada';
      if (this.solicitud.datosPersonales && this.solicitud.respuestas) {
        await this.solicitudService.crearSolicitud(this.solicitud);
        this.enrutador.navigate(['/welcome']);
      } else {
        alert('Tu solicitud no está llena correctamente');
      }
    } catch (error) {
      console.log(error);
      alert('Ocurrió un error al enviar tu solicitud');
    }
  }
}
