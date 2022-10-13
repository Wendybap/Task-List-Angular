import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import { TASKS } from '../mock-tasks';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() taskItem: Task = TASKS[0];
  constructor() {}

  ngOnInit(): void {}
}
