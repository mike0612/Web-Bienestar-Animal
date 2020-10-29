import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private emitChangeSource = new Subject<any>();

  changeEmmited$ = this.emitChangeSource.asObservable();

  emitChange(data: any) {
    this.emitChangeSource.next(data);
  }
}
