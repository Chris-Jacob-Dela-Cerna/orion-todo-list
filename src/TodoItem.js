
export default class TodoItem {

  constructor({name, dueDate, isChecked, lastModified, priorityLevel}) {
    this.name = name;
    this.dueDate = dueDate;
    this.isChecked = isChecked;
    this.lastModified = lastModified;
    this.priorityLevel = priorityLevel;
  }

}