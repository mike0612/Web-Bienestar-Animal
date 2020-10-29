import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { Jumbotron } from 'src/app/models/jumbotron';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styles: []
})
export class LandingComponent implements OnInit {
  @ViewChild('jumbotronHome') jumbotronHome: ElementRef;
  jumbotron: Jumbotron;

  constructor(private solicitudService: SolicitudService, private renderer: Renderer2) {
  }

  ngOnInit() {
    console.log(this.jumbotronHome);
    this.solicitudService.obtenerJumbotron('home').
    subscribe((data: Jumbotron) => {
      this.jumbotron = data;
// tslint:disable-next-line: max-line-length
      this.renderer.setStyle(this.jumbotronHome.nativeElement, 'background', `linear-gradient(45deg, ${this.jumbotron.color1}, ${this.jumbotron.color2}), url(${this.jumbotron.img}) left no-repeat`);
      this.renderer.setStyle(this.jumbotronHome.nativeElement, 'background-size', 'cover');
    }, error => console.log(error));
  }

}
