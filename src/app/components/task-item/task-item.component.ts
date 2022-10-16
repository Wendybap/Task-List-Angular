import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';
import { TASKS } from '../mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// !COMPONENTE HIJO de app-task

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() taskItem: Task = TASKS[0];

  // ! Usamos el Output para extraer la funcion onDelete(taskItem) para que cuando se de click
  // ! esta funcionalidad se maneje desde el padre con por medio de otra función que va a recibir a deleteTask(tasksList) que se crea en
  // ! el PADRE task.ts
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  //! Icons
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  //! Método para borrar un item, aquí recibe a onDeleteTask() que viene del PADRE task.html
  onDelete(taskItem: Task) {
    this.onDeleteTask.emit(taskItem);
  }

  //! Método para saber si es reminder  o no reminder  para que se active el [ngClass]= reminder
  onToggle(taskItem: Task) {
    this.onToggleReminder.emit(taskItem);
  }
}
