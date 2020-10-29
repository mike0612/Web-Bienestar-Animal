import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Mascota } from 'src/app/models/mascota';
import { PetService } from 'src/app/services/pet.service';
import { Usuario } from 'src/app/models/usuario';
import { Jumbotron } from 'src/app/models/jumbotron';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-adopt-adog',
  templateUrl: './adopt-adog.component.html',
  styles: []
})
export class AdoptADogComponent implements OnInit {
  @ViewChild('jumbotronAdopt') jumbotronAdopt: ElementRef;
  jumbotron: Jumbotron;
  perros: Mascota[];
  usuario: Usuario;
  mostrarModal: boolean;
  mascotaElegida: Mascota;

  constructor(private petService: PetService,
    private solicitudService: SolicitudService,
    private renderer: Renderer2) {
    this.usuario = JSON.parse(localStorage.getItem('usuarioActual'));
    this.petService.buscarMascotasPorTipo('Canino').subscribe(
      (data: Mascota[]) => this.perros = data, error => console.log(error)
    );
  }

  ngOnInit() {
    this.solicitudService.obtenerJumbotron('adopta').subscribe(
      (data: Jumbotron) => {
        this.jumbotron = data;
        // tslint:disable-next-line: max-line-length
        this.renderer.setStyle(this.jumbotronAdopt.nativeElement, 
          'background', 
          `linear-gradient(45deg, ${this.jumbotron.color1}, ${this.jumbotron.color2}), url(${this.jumbotron.img}) left no-repeat`);
        this.renderer.setStyle(this.jumbotronAdopt.nativeElement, 'background-size', 'cover');
      }, error => console.log(error)
    );
  }

  changeState(evento: any) {
    this.mostrarModal = evento.mostrarModal;
    this.mascotaElegida = evento.mascota;
  }
}
