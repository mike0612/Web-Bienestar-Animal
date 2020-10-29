import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';

@Component({
  selector: 'app-single-post-card',
  templateUrl: './single-post-card.component.html',
  styles: []
})
export class SinglePostCardComponent implements OnInit {
  @Input() noticia: Noticia;

  constructor() { }

  ngOnInit() {
  }

}
