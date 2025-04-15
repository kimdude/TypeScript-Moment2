//Importing classes
import { toDoList } from "./classes";
import { toDoObject } from "./classes";

//Fetching HTML-elements
const addBtn = document.getElementById("addItem") as HTMLButtonElement;
const error = document.getElementById("errorMessage") as HTMLButtonElement;
const clearBtn = document.getElementById("clearList") as HTMLButtonElement;

//Creating todo-list
const fullList = new toDoList;

//Fetching list on page load
window.onload = (): void => {
  const currentList = fullList.getToDos();
  displayList(currentList);
}

//Adding todo-item on click
addBtn.addEventListener("click", function() {
  createToDo();
})

//Clearing list on click
clearBtn.addEventListener("click", function() {
  fullList.clearLocalStorage();
  displayList(fullList.getToDos());
})

//Function creating todo-items
function createToDo(): void {
  const toDoInput = document.getElementById("toDoInput") as HTMLInputElement;
  const priorityInput = document.getElementById("priorityInput") as HTMLInputElement;
  const newToDo = new toDoObject(toDoInput.value, false, parseInt(priorityInput.value));
    
  const added = fullList.addToDo(newToDo);
  if(added === true) {
    error.innerHTML = "";
    toDoInput.value = "";

    const currentList = fullList.getToDos();
    
    displayList(currentList);
  } else {
    error.innerHTML = "Beskriv uppgiften och välj en prioritetsgrad 1-3";
  }
}

//Displaying list
function displayList(currentList: toDoObject[]): void {

  const list = currentList.sort((a,b) => a.priority - b.priority);

  const listSection = document.getElementById("toDoList") as HTMLElement;
  const completedSection = document.getElementById("finishedTasks") as HTMLElement;
  listSection.innerHTML = "<h2>Att göra:<h1>";
  completedSection.innerHTML = "<h2>Avklarade idag:<h2>";
  
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
      check.classList.add("done");
      completedSection.appendChild(article);
    } else {
      listSection.appendChild(article);
    }

    article.appendChild(taskNode);
    article.appendChild(check);
  }

  //Saving list to localStorage
  fullList.saveToLocalStorage();

}

//Updating list after finished task
function updateList(index: number): void {
  fullList.markToDoCompleted(index);

  displayList(fullList.getToDos());
}