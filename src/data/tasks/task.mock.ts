import { Observable, of } from "rxjs";
import { Task } from "../../@core/entities/task.entities";
import { TaskRepository } from "../../@core/repositories/task.repository";

export class TaskMock implements TaskRepository {
    get(): Observable<Task[]> {
        return of([
            {
                id: 1,
                title: "Laundry",
                description: "do laundry",
                completed: true
            },
            {
                id: 2,
                title: "Wash the dishes",
                description: "wash dishes with soap and water",
                completed: true
            },
            {
                id: 3,
                title: "Clean the house",
                description: "clean the house today",
                completed: false
            },
        ])
    }
}