import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';
import { Mascota } from 'src/app/models/mascota';
import { Usuario } from 'src/app/models/usuario';
import { Jumbotron } from 'src/app/models/jumbotron';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styles: []
})
export class AdoptComponent implements OnInit {
  @ViewChild('jumbotronAdopt') jumbotronAdopt: ElementRef;
  mascotas: Mascota[];
  usuario: Usuario;
  showModal: boolean;
  mascotaElegida: Mascota;
  jumbotron: Jumbotron;
  categoriaPerro: Jumbotron;
  categoriaGato: Jumbotron;

  constructor(private petService: PetService, private solicitudService: SolicitudService, private renderer: Renderer2) {
    this.usuario = JSON.parse(localStorage.getItem('usuarioActual'));
    this.showModal = false;
    this.solicitudService.obtenerJumbotron('tips').subscribe(
      (data: Jumbotron) => this.categoriaGato = data, error => console.log(error)
    );
    this.solicitudService.obtenerJumbotron('noticias').subscribe(
      (data: Jumbotron) => this.categoriaPerro = data, error => console.log(error)
    );
  }

  ngOnInit() {
    this.solicitudService.obtenerJumbotron('adopta').subscribe(
      (data: Jumbotron) => {
        this.jumbotron = data;
// tslint:disable-next-line: max-line-length
        this.renderer.setStyle(this.jumbotronAdopt.nativeElement, 'background', `linear-gradient(45deg, ${this.jumbotron.color1}, ${this.jumbotron.color2}), url(${this.jumbotron.img}) left no-repeat`);
        this.renderer.setStyle(this.jumbotronAdopt.nativeElement, 'background-size', 'cover');
      }, error => console.log(error)
    );
  }

  buscarMascotas(busqueda: any) {
    this.petService.buscarMascotasPorFiltro(busqueda.tipo, busqueda.sexo)
    .subscribe((data: Mascota[]) => {
      this.mascotas = data;
      console.log(this.mascotas);
    }, error => console.log(error));
  }

  changeState(evento: any) {
    this.showModal = evento.mostrarModal;
    this.mascotaElegida = evento.mascota;
  }

}
