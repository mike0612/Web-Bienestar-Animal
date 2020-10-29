import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Perdido } from 'src/app/models/perdido';
import { PetService } from 'src/app/services/pet.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Reporte } from 'src/app/models/reporte';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { Jumbotron } from 'src/app/models/jumbotron';

@Component({
  selector: 'app-lost',
  templateUrl: './lost.component.html',
  styles: []
})
export class LostComponent implements OnInit {
  @ViewChild('jumbotronLost') jumbotronLost: ElementRef;
  show = false;
  perdidos: Perdido[];
  elegido: Perdido;
  conocido = false;
  formulario: FormGroup;
  url: any;
  jumbotron: Jumbotron;

  constructor(private petService: PetService, private solicitudService: SolicitudService, private renderer: Renderer2) {
    this.petService.obtenerMascotarPerdidas()
      .subscribe((data: Perdido[]) => this.perdidos = data, error => console.log(error));
    this.formulario = new FormGroup({
      'nombre': new FormControl(null, Validators.required),
      'telefono': new FormControl(null, Validators.required),
      'direccion': new FormControl(null, Validators.required),
      'calles': new FormControl(null, Validators.required),
      'referencia': new FormControl(null, Validators.required),
      'asunto': new FormControl(null, Validators.required),
      'descripcion': new FormControl(null, Validators.required),
      'caracteristicas': new FormControl(null, Validators.required),
      'foto': new FormControl(null),
      'nombreDueno': new FormControl(null),
      'direccionDueno': new FormControl(null),
      'callesDueno': new FormControl(null),
      'referenciaDueno': new FormControl(null),
      'caracteristicasDueno': new FormControl(null)
    });
  }

  ngOnInit() {
    this.solicitudService.obtenerJumbotron('reportes').subscribe(
      (data: Jumbotron) => {
        this.jumbotron = data;
        this.renderer.setStyle(this.jumbotronLost.nativeElement,
          'background', `linear-gradient(45deg, ${this.jumbotron.color1} 
            60%, ${this.jumbotron.color2}), url(${this.jumbotron.img}) left no-repeat`);
        this.renderer.setStyle(this.jumbotronLost.nativeElement, 'background-size', 'cover');
      }
    );
  }

  changeState(state: any) {
    this.show = state.mostrarModal;
    this.elegido = state.perdido;
  }

  cambiarConocido() {
    this.conocido = !this.conocido;
  }

  construirObjeto(): Reporte {
    const reporte: Reporte = {
      id: Date.now(),
      datosReportante: {
        nombre: this.formulario.controls['nombre'].value,
        telefono: this.formulario.controls['telefono'].value,
        direccion: this.formulario.controls['direccion'].value,
        calles: this.formulario.controls['calles'].value,
        referencia: this.formulario.controls['referencia'].value,
        asunto: this.formulario.controls['asunto'].value,
        descripcion: this.formulario.controls['descripcion'].value,
        caracteristicas: this.formulario.controls['caracteristicas'].value
      }
    };
    return reporte;
  }

  async enviarReporte() {
    try {
      if (this.formulario.valid) {
        let imagen = null;
        let reporte = this.construirObjeto();
        if (this.url) {
          const id = Date.now();
          imagen = await this.solicitudService.subirFoto(id, this.url);
          if (imagen) {
            this.solicitudService.obtenerUrlFoto(id).subscribe(url => {
              reporte.foto = url;
            });
          }
        }
        await this.solicitudService.crearReporte(reporte);
        this.formulario.reset();
        this.url = null;
        alert('Tu reporte ha sido enviado');
      }
    } catch (error) {
      console.log(error);
      alert('Ocurrió un error al enviar el reporte');
    }
  }



  elegirImagen(event) {
    const imagenSeleccionada: File = event.target.files[0];

    if (imagenSeleccionada.type.indexOf('image') < 0) {
      alert('Elige sólo imágenes');
    } else {
      const reader = new FileReader();
      const urlFile = reader.readAsDataURL(imagenSeleccionada);
      reader.onloadend = () => {
        this.url = reader.result;
      };
    }
  }
}
