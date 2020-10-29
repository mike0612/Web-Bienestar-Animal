import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { Jumbotron } from 'src/app/models/jumbotron';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styles: []
})
export class NewsComponent implements OnInit {
  @ViewChild('jumbotronNews') jumbotronNews: ElementRef;
  noticias: Noticia[];
  jumbotron: Jumbotron;

  constructor(private noticiaService: NoticiaService, private solicitudService: SolicitudService, private renderer: Renderer2) {
    this.noticiaService.obtenerNoticias().subscribe(
      (data: Noticia[]) => {
        this.noticias = data;
        console.log(this.noticias);
      },
      error => console.log(error)
    );
  }

  ngOnInit() {
    this.solicitudService.obtenerJumbotron('noticias').subscribe(
      (data: Jumbotron) => {
        this.jumbotron = data;
        this.renderer.setStyle(this.jumbotronNews.nativeElement, 'background', `linear-gradient(45deg, ${this.jumbotron.color1} 60%, ${this.jumbotron.color2}), url(${this.jumbotron.img}) left no-repeat`);
        this.renderer.setStyle(this.jumbotronNews.nativeElement, 'background-size', 'cover');
      }, error => console.log(error)
    );
  }

}
