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

function displayList(list: toDoObject[]): void {
  console.log(list);
}