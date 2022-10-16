import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from '../task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})

//  TODO:componente HIJO del templete task.component.ts
export class AddTaskComponent implements OnInit {
  @Output() OnAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription?: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  // TODO: Directiva para capturar cuando se haga submit al botón
  onSubmit() {
    if (this.text.length === 0) {
      alert('please add a task');
      return;
    }

    //TODO: construimos el nuevo objeto que vamos a recibir
    const { text, day, reminder } = this;
    const newTask = { text, day, reminder };

    this.OnAddTask.emit(newTask);
  }
}
