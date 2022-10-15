import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../../services/task.service';

// !COMPONENTE PADRE de app-task-item

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    //! El subscribe son como las promesas
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
  deleteTask(tasksList: Task) {
    this.taskService.deleteTask(tasksList).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== tasksList.id);
    });
  }
}
