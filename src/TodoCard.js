
export default class TodoCard {

  constructor({title, lastModified, sortBy, todos}) {
    this.title = title;
    this.lastModified = lastModified;
    this.sortBy = sortBy;
    this.todos = todos;
  }

}