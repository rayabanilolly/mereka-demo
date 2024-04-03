import { Observable } from "rxjs";
import { Task } from "../entities/task.entities";

export abstract class TaskRepository {
    abstract get(): Observable<Task[]>;
}