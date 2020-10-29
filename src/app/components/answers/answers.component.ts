import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styles: []
})
export class AnswersComponent implements OnInit {
  formulario: FormGroup;
  respuestas: any;

  constructor(private enrutador: Router) {
    this.formulario = new FormGroup({
      'pregunta1': new FormControl(null, Validators.required),
      'pregunta2': new FormControl(null, Validators.required),
      'pregunta3': new FormControl(null),
      'pregunta4': new FormControl(null, Validators.required),
      'pregunta5': new FormControl(null),
      'pregunta6': new FormControl(null, Validators.required),
      'pregunta7': new FormControl(null, Validators.required),
      'pregunta8': new FormControl(null, Validators.required),
      'pregunta9': new FormControl(null, Validators.required),
      'pregunta10': new FormControl(null, Validators.required),
      'pregunta11': new FormControl(null, Validators.required),
      'pregunta12': new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
  }

  construirObjeto() {
    this.respuestas = {
      'respuesta1': this.formulario.controls['pregunta1'].value,
      'respuesta2': this.formulario.controls['pregunta2'].value,
      'respuesta3': this.formulario.controls['pregunta3'].value,
      'respuesta4': this.formulario.controls['pregunta4'].value,
      'respuesta5': this.formulario.controls['pregunta5'].value,
      'respuesta6': this.formulario.controls['pregunta6'].value,
      'respuesta7': this.formulario.controls['pregunta7'].value,
      'respuesta8': this.formulario.controls['pregunta8'].value,
      'respuesta9': this.formulario.controls['pregunta9'].value,
      'respuesta10': this.formulario.controls['pregunta10'].value,
      'respuesta11': this.formulario.controls['pregunta11'].value,
      'respuesta12': this.formulario.controls['pregunta12'].value,
    };
  }

  enviarRespuestas() {
    if (this.formulario.valid) {
      this.construirObjeto();
      let url = this.enrutador.url;
      url = url.replace('answers', 'confirm');
      this.enrutador.navigate([url]);
    }
  }

}
