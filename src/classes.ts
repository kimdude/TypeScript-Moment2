import { toDo } from "./interface";

export class toDoObject implements toDo {
    task: string;
    completed: boolean;
    priority: number;

    constructor(task: string, completed: boolean, priority: number) {
        this.task = task;
        this.completed = completed;
        this.priority = priority;
    }
}

//Class for toDo-list
export class toDoList{
    toDos: toDoObject[] = [];
  
    addToDo(item: toDoObject): boolean {
      if (item.task && item.priority) {
        this.toDos.push(item);
        return true

      } else {
        return false

      }
    } 

    markToDoCompleted(toDoIndex: number): void {
        this.toDos[toDoIndex].completed = true;
        this.toDos.push(this.toDos.splice(toDoIndex,1)[0]);
    }

    getToDos(): toDoObject[] {
        return this.toDos;
    }
}