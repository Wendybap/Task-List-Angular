import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../components/task';

// TODO: ESTE SERVICIO SE ENCARGARA DE CREAR, EDITAR Y BORRAR LAS TAREAS

// Aqui comunico a la db loas actualizaciones de la tarjeta, el cambio de true al false
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  //TODO: Método para obtener las tareas
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  //TODO: Método para eliminar una tarea
  deleteTask(tasksList: Task): Observable<Task> {
    const url = `${this.apiUrl}/${tasksList.id}`;
    return this.http.delete<Task>(url);
  }

  // TODO: Método para Actualizar el la db el valor del de tarjeta de true a false cuando le hacen click
  // TODO: por lo que hacemos put para subir y por medio de httpOptions le indicamos al backend(servidor) que le enviamos un json por medio del put
  updateTaskReminder(tasksList: Task): Observable<Task> {
    const url = `${this.apiUrl}/${tasksList.id}`;
    return this.http.put<Task>(url, tasksList, httpOptions);
  }

  //TODO: Método para CREAR una tareas
  addTask(tasksList: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, tasksList, httpOptions);
  }
}
