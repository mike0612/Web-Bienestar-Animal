import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from 'src/app/components/data/data.component';
import { AnswersComponent } from 'src/app/components/answers/answers.component';
import { ConfirmComponent } from 'src/app/components/confirm/confirm.component';

const routes: Routes = [
  {path: 'data', component: DataComponent},
  {path: 'answers', component: AnswersComponent},
  {path: 'confirm', component: ConfirmComponent},
  {path: '', pathMatch: 'full', redirectTo: 'data'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdopcionRoutingModule { }
