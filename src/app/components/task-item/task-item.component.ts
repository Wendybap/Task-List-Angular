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
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  // Icons
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(taskItem: Task) {
    this.onDeleteTask.emit(taskItem);
  }
}
