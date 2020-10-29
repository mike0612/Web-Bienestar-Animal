import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-type',
  templateUrl: './card-type.component.html',
  styles: []
})
export class CardTypeComponent implements OnInit {
  @Input() categorie: any;

  constructor() { }

  ngOnInit() {
  }

}
