import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';
import { Mascota } from 'src/app/models/mascota';
import { Usuario } from 'src/app/models/usuario';
import { Jumbotron } from 'src/app/models/jumbotron';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-adopt-acat',
  templateUrl: './adopt-acat.component.html',
  styles: []
})
export class AdoptACatComponent implements OnInit {
  @ViewChild('jumbotronAdopt') jumbotronAdopt: ElementRef;
  jumbotron: Jumbotron;
  gatos: Mascota[];
  usuario: Usuario;
  mostrarModal: boolean;
  mascotaElegida: Mascota;

  constructor(private petService: PetService, private solicitudService: SolicitudService, private renderer: Renderer2) {
    this.usuario = JSON.parse(localStorage.getItem('usuarioActual'));
    this.petService.buscarMascotasPorTipo('Felino')
    .subscribe((data: Mascota[]) => this.gatos = data, error => console.log(error));
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

  changeState(evento: any) {
    this.mostrarModal = evento.mostrarModal;
    this.mascotaElegida = evento.mascota;
  }
}
