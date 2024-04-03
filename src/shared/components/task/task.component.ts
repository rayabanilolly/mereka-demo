import { Component, Input } from '@angular/core';
import { Task } from '../../../@core/entities/task.entities';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() data!: Task;
  loading: boolean = false;

  toggle(): Promise<boolean> {
    this.loading = true;

    return new Promise((resolve) => {
      setTimeout(() => {
        this.loading = false;
        resolve(this.data.completed = !this.data.completed);
      }, 2500);
    });
  }
}
