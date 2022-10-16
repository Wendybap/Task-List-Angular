import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';
import { TASKS } from '../mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// TODO:COMPONENTE HIJO de app-task

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() taskItem: Task = TASKS[0];

  // TODO: Usamos el Output para extraer la funcion onDelete(taskItem) para que cuando se de click
  // TODO: esta funcionalidad se maneje desde el padre con por medio de otra función que va a recibir a deleteTask(tasksList) que se crea en
  // TODO: el PADRE task.ts
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  //TODO: Icons
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  //TODO: Método para borrar un item, aquí recibe a onDeleteTask() que viene del PADRE task.html
  onDelete(taskItem: Task) {
    this.onDeleteTask.emit(taskItem);
  }

  //TODO: Método para saber si es reminder  o no reminder  para que se active el [ngClass]= reminder
  onToggle(taskItem: Task) {
    this.onToggleReminder.emit(taskItem);
  }
}
