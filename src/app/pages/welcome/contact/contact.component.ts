import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { Jumbotron } from 'src/app/models/jumbotron';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {
  @ViewChild('jumbotronLogin') jumbotronLogin: ElementRef;
  jumbotron: Jumbotron;

  constructor(private solicitudService: SolicitudService, private renderer: Renderer2) { }

  ngOnInit() {
    this.solicitudService.obtenerJumbotron('login').subscribe(
      (data: Jumbotron) => {
        this.jumbotron = data;
        this.renderer.setStyle(this.jumbotronLogin.nativeElement, 'background',
        `linear-gradient(45deg, ${this.jumbotron.color1}, ${this.jumbotron.color2}), url(${this.jumbotron.img}) left no-repeat`);
        this.renderer.setStyle(this.jumbotronLogin.nativeElement, 'background-size', 'cover');
      }, error => console.log(error)
    );
  }

}
