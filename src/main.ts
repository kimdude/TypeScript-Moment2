//Importing classes
import { toDoList } from "./classes";
import { toDoObject } from "./classes";

//Fetching HTML-elements
const addBtn = document.getElementById("addItem") as HTMLButtonElement;

//Adding eventlistener
addBtn.addEventListener("click", function() {
  createToDo();
})

//Creating todo-list
const fullList = new toDoList;

//Function creating todo-items
function createToDo(): void {
  const toDoInput = document.getElementById("toDoInput") as HTMLInputElement;
  const priorityInput = document.getElementById("priorityInput") as HTMLInputElement;

  if(toDoInput.value && priorityInput.value) {
    const newToDo = new toDoObject(toDoInput.value, false, parseInt(priorityInput.value));
    
    fullList.addToDo(newToDo);
    displayList(fullList.getToDos());
  }
}

//Displaying list
function displayList(list: toDoObject[]): void {
  const listSection = document.getElementById("toDoList") as HTMLElement;
  listSection.innerHTML = "";
  
  for(let i = 0; i < list.length; i++) {
    const article: HTMLElement = document.createElement("article");

    if(list[i].priority === 1) {
      article.classList.add("veryImportant");
    } else if(list[i].priority === 2) {
      article.classList.add("important");
    }

    const task = list[i].task;
    const taskNode = document.createTextNode(task)
    const check: HTMLButtonElement = document.createElement("button");

    check.addEventListener("click", function() {
      updateList(i);
    })

    if(list[i].completed === true ) {
      check.classList.add("done")
    }

    listSection.appendChild(article);
    article.appendChild(taskNode);
    article.appendChild(check);
  }
}

//Updating list after finished task
function updateList(index: number): void {
  fullList.markToDoCompleted(index);
  displayList(fullList.getToDos());
}