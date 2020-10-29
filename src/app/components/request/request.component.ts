import { Component, OnInit } from '@angular/core';
import { SolicitudAdopcion } from 'src/app/models/solicitud-adopcion';
import { PetService } from 'src/app/services/pet.service';
import { Mascota } from 'src/app/models/mascota';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { DataComponent } from '../data/data.component';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styles: []
})
export class RequestComponent implements OnInit {
  solicitud: SolicitudAdopcion;
  mascota: Mascota;
  idRuta: any;

  constructor(private petService: PetService, private rutaActual: ActivatedRoute) {
    this.idRuta = this.rutaActual.snapshot.paramMap.get('id');
    this.petService.buscarMascotaPorId(this.idRuta)
    .subscribe((data: Mascota) => {
      this.mascota = data;
      this.solicitud = new SolicitudAdopcion(Date.now(), 'En proceso', this.mascota);
    }, error => console.log(error));
  }

  ngOnInit() {
  }

  irACuestionario(datos: any) {
    this.solicitud.datosPersonales = datos;
  }

  onDeactivate(component: any) {
    if (component.datos) {
      this.solicitud.datosPersonales = component.datos;
      console.log(this.solicitud);
    } else if (component.respuestas) {
      this.solicitud.respuestas = component.respuestas;
      console.log(this.solicitud);
    }
  }

  onActivate(component: any) {
     component.solicitud = this.solicitud;
  }
}
