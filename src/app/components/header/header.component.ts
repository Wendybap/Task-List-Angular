import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = 'My Task List';
  showAddTask: boolean = true;
  Subscription?: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.Subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  // TODO: Método para mostrar u ocultar el componente app-button
  // TODO: dependiendo de si esta o no en la ruta
  hasRoute(route: string) {
    return this.router.url === route;
  }
}
