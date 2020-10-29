import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuentaComponent } from 'src/app/pages/welcome/perfil/cuenta/cuenta.component';
import { AdoptadosComponent } from 'src/app/pages/welcome/perfil/adoptados/adoptados.component';
import { InteresadosComponent } from 'src/app/pages/welcome/perfil/interesados/interesados.component';
import { AgendadasComponent } from 'src/app/pages/welcome/perfil/agendadas/agendadas.component';
import { AcercaComponent } from 'src/app/pages/welcome/perfil/acerca/acerca.component';

const routes: Routes = [
  {path: 'cuenta', component: CuentaComponent},
  {path: 'adoptados', component: AdoptadosComponent},
  {path: 'interesados', component: InteresadosComponent},
  {path: 'agendadas', component: AgendadasComponent},
  {path: 'acerca', component: AcercaComponent},
  {path: '', pathMatch: 'full', redirectTo: 'cuenta'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
