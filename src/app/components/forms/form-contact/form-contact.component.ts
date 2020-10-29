import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styles: []
})
export class FormContactComponent implements OnInit {
  formRegistro: FormGroup;
  controls: any;

  constructor(private authService: AuthService, private usuarioService: UsuarioService) {
    this.formRegistro = new FormGroup({
      'nombre': new FormControl('', Validators.required),
      'apellidoPaterno': new FormControl('', Validators.required),
      'apellidoMaterno': new FormControl('', Validators.required),
      'correo': new FormControl('', [Validators.required, Validators.email]),
      'contrasena': new FormControl('', [Validators.required, this.validarLongitud]),
      'confirmar': new FormControl('', [Validators.required, this.validarLongitud]),
      'fecha': new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  validarLongitud (control: FormControl): {[key: string]: boolean} {
    if (`${control.value}`.length < 8) {
      return {
        invalid: true
      };
    }

    return null;
  }

  // compararContrasenas(control: FormControl): {[key: string]: boolean} {
  //   const form = this.formRegistro;

  //   if (`${control.value}` === `${form.controls['contrasena'].value}`) {
  //     return {
  //       notSame: true
  //     };
  //   }

  //   return null;
  // }

  registrarNuevoUsuario() {
    if (this.formRegistro.valid) {
      let usuario = this.construirUsuario();
      this.crearCuentaUsuario(usuario.correo, `${this.formRegistro.controls['confirmar'].value}`)
      .then(id => {
        usuario.id = id;
        this.registrarUsuario(usuario)
        ;
      });
    }
  }


  construirUsuario(): Usuario {
    return new Usuario(
      `${this.formRegistro.controls['nombre'].value}`,
      `${this.formRegistro.controls['apellidoPaterno'].value}`,
      `${this.formRegistro.controls['apellidoMaterno'].value}`,
      `${this.formRegistro.controls['correo'].value}`,
      `${this.formRegistro.controls['fecha'].value}`,
      3
    );
  }

  registrarUsuario(usuario: Usuario) {
    this.usuarioService.crearUsuario(usuario)
    .then(data => alert('Usuario creado'))
    .catch(error => console.log(error));
  }

  async crearCuentaUsuario(email: string, password: string) {
    try {
      const usuario = await this.authService.registrarCuenta(email, password);
      this.authService.iniciarSesion(email, password)
      .then( data => {
        this.authService.auth.auth.currentUser.sendEmailVerification()
        .then(data => this.authService.cerrarSesion())
        .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
      return usuario.user.uid;
    } catch (error) {
      return error;
    }
  }

}
