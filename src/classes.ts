import { toDo } from "./interface";

//Class for toDo-items
export class toDoObject implements toDo {
    task: string;
    completed: boolean;
    priority: number;

    //Constructs item into an object
    constructor(task: string, completed: boolean, priority: number) {
        this.task = task;
        this.completed = completed;
        this.priority = priority;
    }
}

//Class for toDo-list
export class toDoList {
    toDos: toDoObject[] = [];
  
    //Adds item to todo-list
    addToDo(item: toDoObject): boolean {
      if (item.task && item.priority) { 
        this.toDos.push(item);
        return true
      } else {
        return false
      }
    } 

    //Marks item completed and changes priority
    markToDoCompleted(toDoIndex: number): void {
        this.toDos[toDoIndex].completed = true;
        this.toDos[toDoIndex].priority = 0;
    }

    //Returns todo-list
    getToDos(): toDoObject[] {
        return this.toDos;
    }

    //Saves list to local storage
    saveToLocalStorage(): void {
        const jsonStr = JSON.stringify(this.toDos);
        localStorage.setItem("toDoList", jsonStr);
    }

    //Returns list from localstorage
    loadFromLocalStorage(): any {
        const storedTasks: toDoObject[] = JSON.parse(localStorage.getItem("toDoList") ?? "[]");
        return storedTasks;
    }

    //Clears local storage
    clearLocalStorage(): void {
        localStorage.clear();
        this.toDos.length = 0;
    }
}

/**
 * export class localStorage {
 * 
 * constructor (itemName: string): any {
 * 
 *      saveToLocalStorage(): void {
            const jsonStr = JSON.stringify(this.toDos);
            localStorage.setItem(itemName, jsonStr);
        }

        loadFromLocalStorage(): any {
            const storedTasks: toDoObject[] = JSON.parse(localStorage.getItem(itemName) ?? "[]");
            return storedTasks;
        }

        clearLocalStorage(): void {
            localStorage.clear();
            this.toDos.length = 0;
        }
    }
 * }
 * }
 */
