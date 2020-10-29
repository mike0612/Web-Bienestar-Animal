import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Tip } from 'src/app/models/tip';
import { TipService } from 'src/app/services/tip.service';
import { Jumbotron } from 'src/app/models/jumbotron';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styles: []
})
export class TipsComponent implements OnInit {
  @ViewChild('jumbotronTips') jumbotronTips: ElementRef;
  jumbotron: Jumbotron;
  tips: Tip[];

  constructor(private tipService: TipService, private solicitudService: SolicitudService, private renderer: Renderer2) {
    this.tipService.obtenerTips()
    .subscribe( (data: Tip[]) => this.tips = data, error => console.log(error));
  }

  ngOnInit() {
    this.solicitudService.obtenerJumbotron('tips').subscribe(
      (data: Jumbotron) => {
        this.jumbotron = data;
        this.renderer.setStyle(this.jumbotronTips.nativeElement, 'background', 
        `linear-gradient(45deg, ${this.jumbotron.color2}, ${this.jumbotron.color1}), url(${this.jumbotron.img}) left no-repeat`);
        this.renderer.setStyle(this.jumbotronTips.nativeElement, 'background-size', 'cover');
      }, error => console.log(error)
    );
  }

}
