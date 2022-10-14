import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Task } from '../components/task';
import { TASKS } from '../components/mock-tasks';
import { Observable, of } from 'rxjs';

// ! ESTE SERVIVIO SE ENCARGARA DE BORRAR, EDITAR Y AGREGAR LAS TAREAS

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) {}

  // Metodo para obtener las tareas
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  // Metodo para eliminar una tarea
  deleteTask(tasksList: Task): Observable<Task> {
    const url = `${this.apiUrl}/${tasksList.id}`;
    return this.http.delete<Task>(url);
  }
}
