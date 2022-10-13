import { Component, OnInit } from '@angular/core';
import { TASKS } from '../mock-tasks';
import { Task } from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  task: Task[] = TASKS;

  constructor() {}

  ngOnInit(): void {}
}
