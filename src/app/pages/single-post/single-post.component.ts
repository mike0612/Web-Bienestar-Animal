import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styles: []
})
export class SinglePostComponent implements OnInit {
  id: number;
  noticia: Noticia;

  constructor(private route: ActivatedRoute, private noticiaService: NoticiaService) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.noticiaService.obtenerNoticiaPorId(this.id)
    .subscribe( (data: Noticia) => this.noticia = data, error => console.log(error) );
  }

  ngOnInit() {
  }

}
