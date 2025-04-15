# DT208G - Moment 2
## Todo-lista

En webbplats programmerad med TypeScript för att spara en todo-lista.

När webbplatsen laddas skapas en ny variabel med klassen toDoList. Det triggar i sin tur en constructor som fyller arrayen toDos med toDo-objekt från local storage. När sidan laddar används klassens getToDos method som returnerar arrayen.

Sedan skickas arrayen till funktionen displayList, som sorterar listan i stigande ordning utifrån priority-propertyn. Därefter loopar den igenom alla objekt i arrayen och skapar en artikel med en knapp för varje. Funktionen kontrollerar om uppgiften är avklarad eller inte och sorterar utifrån det in den i korrekt sektion. Avslutningsvis anropar funktionen klassens method saveToLocalStorage. SaveToLocalStorage tar arrayen toDos och sparar den i JSON-format.

Vid klick på knappen anropas klassens markToDoCompleted method. Methoden tar objektets index och kontrollerar om den är avklarad eller inte. Utifrån det ändrar den till motsatt - är uppgiften inte avklarad ändras den till avklarad och vice versa. 

Om en ny uppgift läggs till, används klassen toDoObject. ToDoObject använder sig av interfacet toDo och skapar, med hjälp en constructor, ett objekt av uppgiften. När det skapats skickas detta till klassen toDoLists method addToDo. Om alla fält är ifyllda returnerar methoden true och lägger till den i arrayen toDos.