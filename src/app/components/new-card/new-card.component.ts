import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styles: []
})
export class NewCardComponent implements OnInit {
  @Input() noticia: Noticia;

  constructor() {}

  ngOnInit() {
  }

}
