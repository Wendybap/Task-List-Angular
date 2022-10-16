import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../../services/task.service';

// TODO: COMPONENTE PADRE de app-task-item

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    //TODO: El subscribe son como las promesas
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  // TODO: Método para ELIMINAR UN ITEM creado por el PADRE de task-item haciendo uso del servicio porque
  // TODO: hay es donde se creo verdaderamente la funcionalidad de borrar la tarea y es recibido
  // TODO: por el task.html
  deleteTask(tasksList: Task) {
    this.taskService.deleteTask(tasksList).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== tasksList.id);
    });
  }

  // TODO: Método para indicar si el usuario hace click en la tarjeta y cambia el valor de true a false
  // TODO: y viceversa el cual recibimos del service
  onToggleReminder(tasksList: Task) {
    tasksList.reminder = !tasksList.reminder;
    this.taskService.updateTaskReminder(tasksList).subscribe();
  }

  // TODO: Método que recibe el servicio para crear las tareas
  addTask(tasksList: Task) {
    this.taskService.addTask(tasksList).subscribe((tasksList) => {
      this.tasks.push(tasksList);
    });
  }
}
