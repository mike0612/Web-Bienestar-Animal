import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { FormLoginComponent } from 'src/app/components/forms/form-login/form-login.component';
import { LandingComponent } from 'src/app/pages/welcome/landing/landing.component';
import { LoginComponent } from 'src/app/pages/welcome/login/login.component';
import { ContactComponent } from 'src/app/pages/welcome/contact/contact.component';
import { AdoptComponent } from 'src/app/pages/welcome/adopt/adopt.component';
import { AdoptADogComponent } from 'src/app/pages/welcome/adopt-adog/adopt-adog.component';
import { AdoptACatComponent } from 'src/app/pages/welcome/adopt-acat/adopt-acat.component';
import { LostComponent } from 'src/app/pages/welcome/lost/lost.component';
import { NewsComponent } from 'src/app/pages/welcome/news/news.component';
import { DatesComponent } from 'src/app/pages/welcome/dates/dates.component';
import { TipsComponent } from 'src/app/pages/welcome/tips/tips.component';
import { FormSearchComponent } from 'src/app/components/forms/form-search/form-search.component';
import { NewCardComponent } from 'src/app/components/new-card/new-card.component';
import { CardTypeComponent } from 'src/app/components/cards/card-type/card-type.component';
import { CurrentNewsComponent } from 'src/app/components/sections/current-news/current-news.component';
import { MapComponent } from 'src/app/components/map/map.component';
import { ReportsListComponent } from 'src/app/components/lists/reports-list/reports-list.component';
import { FormDateComponent } from 'src/app/components/forms/form-date/form-date.component';
import { LostCardComponent } from 'src/app/components/cards/lost-card/lost-card.component';
import { SinglePostComponent } from 'src/app/pages/single-post/single-post.component';
import { SinglePostCardComponent } from 'src/app/components/single-post-card/single-post-card.component';
import { FormMineComponent } from 'src/app/components/forms/form-mine/form-mine.component';
import { ModalMineComponent } from 'src/app/components/modals/modal-mine/modal-mine.component';
import { FormLostComponent } from 'src/app/components/forms/form-lost/form-lost.component';
import { IsMineComponent } from 'src/app/pages/is-mine/is-mine.component';
import { CardAdoptComponent } from 'src/app/components/cards/card-adopt/card-adopt.component';
import { FormContactComponent } from 'src/app/components/forms/form-contact/form-contact.component';
import { FormRegisterComponent } from 'src/app/pages/welcome/form-register/form-register.component';
import { CardTipComponent } from 'src/app/components/cards/card-tip/card-tip.component';
import { PerfilComponent } from 'src/app/pages/welcome/perfil/perfil/perfil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalAdoptComponent } from 'src/app/components/modals/modal-adopt/modal-adopt.component';
import { RequestComponent } from 'src/app/components/request/request.component';
import { TipComponent } from 'src/app/pages/welcome/tip/tip.component';

@NgModule({
  declarations: [
    LandingComponent,
    LoginComponent,
    FormLoginComponent,
    ContactComponent,
    AdoptComponent,
    AdoptADogComponent,
    AdoptACatComponent,
    LostComponent,
    NewsComponent,
    DatesComponent,
    TipsComponent,
    FormSearchComponent,
    NewCardComponent,
    CardTypeComponent,
    CurrentNewsComponent,
    MapComponent,
    ReportsListComponent,
    FormDateComponent,
    LostCardComponent,
    SinglePostComponent,
    SinglePostCardComponent,
    FormMineComponent,
    ModalMineComponent,
    FormLostComponent,
    IsMineComponent,
    CardAdoptComponent,
    FormContactComponent,
    FormRegisterComponent,
    CardTipComponent,
    PerfilComponent,
    ModalAdoptComponent,
    RequestComponent,
    TipComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class WelcomeModule { }
