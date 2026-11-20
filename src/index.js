import TodoCard from "./TodoCard.js";
import TodoItem from "./TodoItem.js";


//  Example object

const card = {
  "name": "Performance Task",
  "lastModified": "INSERT modified date",
  "sortBy": "lastModified",
  "todos": [
    {
      "name": "Draft proposal paper",
      "dueDate": "INSERT due date",
      "isChecked": false,
      "lastModified": "INSERT modified date",
      "priorityLevel": 2 
    }
  ]
};

console.log(card);
const todoCard = new TodoCard(card);
console.log(todoCard);
todoCard.setName("PETA");
console.log(todoCard);