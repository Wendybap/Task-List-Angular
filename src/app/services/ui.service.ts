import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

// TODO: SERVICIO PARA MANEJAR TODA LA UI DE LA INTERFACE
@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();
  constructor() {}

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }
  // TODO: Método que cambia el valor del toggleShow de falsE a true y es recibido desde el servicio ui
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
