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

    getToDos(): toDoObject[] {
        return this.toDos;
    }
}