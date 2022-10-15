import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Task } from '../components/task';
import { TASKS } from '../components/mock-tasks';

// ! ESTE SERVICIO SE ENCARGARA DE CREAR, EDITAR Y BORRAR LAS TAREAS

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  //! Método para obtener las tareas
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  //! Método para eliminar una tarea
  deleteTask(tasksList: Task): Observable<Task> {
    const url = `${this.apiUrl}/${tasksList.id}`;
    return this.http.delete<Task>(url);
  }
}
