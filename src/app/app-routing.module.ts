import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome/welcome.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent, loadChildren: './modules/welcome/welcome.module#WelcomeModule'},
  {path: '', pathMatch: 'full', redirectTo: 'welcome'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
