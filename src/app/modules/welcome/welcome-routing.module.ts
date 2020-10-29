import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from 'src/app/pages/welcome/landing/landing.component';
import { AdoptComponent } from 'src/app/pages/welcome/adopt/adopt.component';
import { AdoptACatComponent } from 'src/app/pages/welcome/adopt-acat/adopt-acat.component';
import { AdoptADogComponent } from 'src/app/pages/welcome/adopt-adog/adopt-adog.component';
import { LostComponent } from 'src/app/pages/welcome/lost/lost.component';
import { NewsComponent } from 'src/app/pages/welcome/news/news.component';
import { DatesComponent } from 'src/app/pages/welcome/dates/dates.component';
import { TipsComponent } from 'src/app/pages/welcome/tips/tips.component';
import { ContactComponent } from 'src/app/pages/welcome/contact/contact.component';
import { LoginComponent } from 'src/app/pages/welcome/login/login.component';
import { IsMineComponent } from 'src/app/pages/is-mine/is-mine.component';
import { SinglePostComponent } from 'src/app/pages/single-post/single-post.component';
import { FormRegisterComponent } from 'src/app/pages/welcome/form-register/form-register.component';
import { PerfilComponent } from 'src/app/pages/welcome/perfil/perfil/perfil.component';
import { PerfilGuard } from 'src/app/guards/perfil.guard';
import { RequestComponent } from 'src/app/components/request/request.component';
import { TipComponent } from 'src/app/pages/welcome/tip/tip.component';

const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: 'adopt', component: AdoptComponent},
  {path: 'adopt-dogs', component: AdoptADogComponent},
  {path: 'adopt-cats', component: AdoptACatComponent},
  {path: 'lost', component: LostComponent},
  {path: 'news', component: NewsComponent},
  {path: 'dates', component: DatesComponent},
  {path: 'tips', component: TipsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'is-mine', component: IsMineComponent},
  {path: 'single-post/:id', component: SinglePostComponent},
  {path: 'tip/:id', component: TipComponent},
  {path: 'register', component: FormRegisterComponent},
// tslint:disable-next-line: max-line-length
  {path: 'request/:id', component: RequestComponent, loadChildren: '../adopcion/adopcion.module#AdopcionModule'},
  {path: 'perfil', component: PerfilComponent, loadChildren: '../perfil/perfil.module#PerfilModule', canActivate: [PerfilGuard]},
  {path: '', pathMatch: 'full', redirectTo: 'landing'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
