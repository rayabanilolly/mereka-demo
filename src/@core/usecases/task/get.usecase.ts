import { Observable } from "rxjs";
import { Task } from "../../entities/task.entities";
import { TaskRepository } from "../../repositories/task.repository";
import { UseCase } from "../../utils/usecase";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class GetTaskUseCase implements UseCase<null, Task[]> {
    constructor(private taskRepository: TaskRepository) {}

    execute(): Observable<Task[]> {
        return this.taskRepository.get();
    }
}