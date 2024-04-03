import { ModuleWithProviders, NgModule, Provider } from "@angular/core";
import { TaskRepository } from "../@core/repositories/task.repository";
import { TaskMock } from "./tasks/task.mock";
import { CommonModule } from "@angular/common";

const DATA_SERVICES: Provider[] = [
    { provide: TaskRepository, useClass: TaskMock }
];

@NgModule({
    declarations: [],
    imports: [CommonModule]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [...DATA_SERVICES]
        }
    }
}