import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Task } from '../@core/entities/task.entities';
import { GetTaskUseCase } from '../@core/usecases/task/get.usecase';
import { TaskComponent } from '../shared/components/task/task.component';
import { SortPipe } from '../shared/pipes/sort/sort.pipe';
import { ChartComponent } from '../shared/components/chart/chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TaskComponent,
    ChartComponent,
    FormsModule,
    ReactiveFormsModule,
    SortPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'demo-mereka';
  form!: FormGroup;

  tasks: Task[] = [];

  constructor(
    private getTaskUseCase: GetTaskUseCase,
    private fb: FormBuilder
  ) {
    this.initForm();
    this.getTasks();
  }

  initForm() {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  create(): void {
    if (this.form.invalid) return;

    const task: Task = {
      id: this.tasks.length + 1,
      title: this.form.value.title,
      description: '',
      completed: false
    }

    this.tasks.unshift(task);
    this.form.reset();
  }

  getTasks(): void {
    this.getTaskUseCase.execute().subscribe({
      next: (tasks) => this.tasks = tasks,
      error: (error) => console.error(error)
    })
  }
}
