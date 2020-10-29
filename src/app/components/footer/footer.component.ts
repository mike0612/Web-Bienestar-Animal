import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ContactoService } from 'src/app/services/contacto.service';
import { Contacto } from 'src/app/models/contacto';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {
  @ViewChild('txtFooterNombre') nombre: ElementRef;
  @ViewChild('txtFooterEmail') email: ElementRef;
  @ViewChild('txtFooterMensaje') mensaje: ElementRef;

  constructor(private contactoService: ContactoService) {}

  ngOnInit() {
  }

  crearObjeto(): Contacto {
    return {
      id: Date.now(),
      nombre: `${this.nombre.nativeElement.value}`,
      email: `${this.email.nativeElement.value}`,
      mensaje: `${this.mensaje.nativeElement.value}`
    };
  }

  limpiarFormulario() {
    this.nombre.nativeElement.value = '';
    this.email.nativeElement.value = '';
    this.mensaje.nativeElement.value = '';
  }

  async guardarContacto() {
    try {
      if (this.nombre.nativeElement.value && this.email.nativeElement.value && this.mensaje.nativeElement.value) {
        await this.contactoService.enviarContacto(this.crearObjeto());
        this.limpiarFormulario();
        alert('Tu mensaje ha sido enviado');
      }
    } catch (error) {
      alert('Ocurrió un error al enviar tu mensaje')
    }
  }
}
