import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Jumbotron } from 'src/app/models/jumbotron';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { ActivatedRoute } from '@angular/router';
import { Tip } from 'src/app/models/tip';
import { TipService } from 'src/app/services/tip.service';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styles: []
})
export class TipComponent implements OnInit {
  @ViewChild('jumbotronTip') jumbotronTip: ElementRef;
  jumbotron: Jumbotron;
  id: number;
  tip: Tip;

  constructor(private solicitudService: SolicitudService, private renderer: Renderer2,
    private ruta: ActivatedRoute, private tipService: TipService) {
    this.id = Number(this.ruta.snapshot.paramMap.get('id'));
    console.log(this.id);
    this.tipService.obtenerTipPorId(this.id).subscribe(
      (data: Tip) => {
        this.tip = data;
        console.log(this.tip);
      }, error => console.log(error)
    );
  }

  ngOnInit() {
    this.solicitudService.obtenerJumbotron('tips').subscribe(
      (data: Jumbotron) => {
        this.jumbotron = data;
        this.renderer.setStyle(this.jumbotronTip.nativeElement, 'background',
        `linear-gradient(45deg, ${this.jumbotron.color2}, ${this.jumbotron.color1}), url(${this.jumbotron.img}) left no-repeat`);
        this.renderer.setStyle(this.jumbotronTip.nativeElement, 'background-size', 'cover');
      }, error => console.log(error)
    );
  }

}
