import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Mascota } from 'src/app/models/mascota';
import { Usuario } from 'src/app/models/usuario';
import { PetService } from 'src/app/services/pet.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-modal-adopt',
  templateUrl: './modal-adopt.component.html',
  styles: []
})
export class ModalAdoptComponent implements OnInit {
  @Output() closeModal: EventEmitter<any>;
  @Input() mascota: Mascota;
  usuario: Usuario;

  constructor(private petService: PetService, private usuarioService: UsuarioService) {
    this.closeModal = new EventEmitter();
    this.usuario = JSON.parse(localStorage.getItem('usuarioActual'));
  }

  ngOnInit() {
  }

  sendCloseModal() {
    this.closeModal.emit({mascota: this.mascota, mostrarModal: false});
  }

  async seleccionarInteresado() {
    try {
      if (this.mascota.interesados) {
        this.mascota.interesados.push(this.usuario.id);
      } else if (this.usuario.mascotasInteresadas) {
        this.usuario.mascotasInteresadas.push(this.mascota);
      } else {
        this.mascota.interesados = [this.usuario.id];
        this.usuario.mascotasInteresadas = [this.mascota];
      }
      await this.petService.actualizarMascota(this.mascota);
      await this.usuarioService.actualizarUsuario(this.usuario);
      this.sendCloseModal();
    } catch (error) {
      console.log(error);
      alert('Ocurrió un error al agregarte como interesado de esta mascota');
    }


  }

}
