import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { CuentaComponent } from 'src/app/pages/welcome/perfil/cuenta/cuenta.component';
import { AdoptadosComponent } from 'src/app/pages/welcome/perfil/adoptados/adoptados.component';
import { InteresadosComponent } from 'src/app/pages/welcome/perfil/interesados/interesados.component';
import { AgendadasComponent } from 'src/app/pages/welcome/perfil/agendadas/agendadas.component';
import { AcercaComponent } from 'src/app/pages/welcome/perfil/acerca/acerca.component';

@NgModule({
  declarations: [
    CuentaComponent,
    AdoptadosComponent,
    InteresadosComponent,
    AgendadasComponent,
    AcercaComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule
  ]
})
export class PerfilModule { }
