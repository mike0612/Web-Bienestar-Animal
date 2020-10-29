import { Component, OnInit, Input } from '@angular/core';
import { Tip } from 'src/app/models/tip';

@Component({
  selector: 'app-card-tip',
  templateUrl: './card-tip.component.html',
  styles: []
})
export class CardTipComponent implements OnInit {
  @Input() tip: Tip;

  constructor() { }

  ngOnInit() {
  }

}
