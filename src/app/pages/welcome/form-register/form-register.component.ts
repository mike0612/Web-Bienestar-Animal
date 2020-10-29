import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { Jumbotron } from 'src/app/models/jumbotron';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styles: []
})
export class FormRegisterComponent implements OnInit {
  @ViewChild('jumbotronRegister') jumbotronRegister: ElementRef;
  jumbotron: Jumbotron;

  constructor(private solicitudService: SolicitudService, private renderer: Renderer2) { }

  ngOnInit() {
    this.solicitudService.obtenerJumbotron('registro').subscribe(
      (data: Jumbotron) => {
        this.jumbotron = data;
        this.renderer.setStyle(this.jumbotronRegister.nativeElement, 'background',
        `linear-gradient(45deg, ${this.jumbotron.color1}, ${this.jumbotron.color2}), url(${this.jumbotron.img}) left top no-repeat`);
        this.renderer.setStyle(this.jumbotronRegister.nativeElement, 'background-size', 'cover');
      }, error => console.log(error)
    );
  }

}
