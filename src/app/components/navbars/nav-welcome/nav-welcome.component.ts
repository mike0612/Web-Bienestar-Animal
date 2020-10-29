import { Component, OnInit, OnDestroy } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-welcome',
  templateUrl: './nav-welcome.component.html',
  styles: []
})
export class NavWelcomeComponent implements OnInit, OnDestroy {

  toggled = false;
  nombre: string;
  usuario: Usuario;

  constructor(private authService: AuthService, private router: Router) {
    this.usuario = JSON.parse(localStorage.getItem('usuarioActual'));

    if (this.usuario) {
      this.nombre = this.usuario.nombre.split(' ')[0];
      console.log(this.nombre);
    }

    this.authService.obtenerEstado().subscribe(data => {
      if (!data) {
        localStorage.removeItem('usuarioActual');
        if (this.router.url.indexOf('perfil') > 0) {
          location.reload();
        }
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.authService.cerrarSesion();
  }

  cerrarSesion() {
    this.authService.cerrarSesion();
    this.nombre = null;
    this.usuario = null;
  }

}
