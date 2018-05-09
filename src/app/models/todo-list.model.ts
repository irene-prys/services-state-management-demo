import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item.model';

@Injectable()
export class TodoList {
  list: TodoItem[];

  constructor() {
    this.list = [];
  }

  addNew(title: string) {
    if (!this.isInList(title)) {
      this.list.push(new TodoItem(title, false));
    }
  }

  isInList(title) {
    return this.list.find(item => item.title === title);
  }
  // todo: implement removing
}