import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TodoList } from './../../models/todo-list.model';
import { Filter } from './../../models/filter.model';
import { TodoItemState } from './../../enums/todo-item-state.enum';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {

  constructor(private todos: TodoList, private filter: Filter, private ref: ChangeDetectorRef) {
    //  this.ref.detach();
  }

  public get todoList() {
    return this.todos.list.filter(item => {
      if (!this.isSatisfySerchFilter(item, this.filter.searchFilter)) {
        return false;
      }
      switch (this.filter.stateFilter) {
        case TodoItemState.ACTIVE: return !item.done;
        case TodoItemState.DONE: return item.done;
        default: return true;
      }
    });
  }

  public get isTodoEmpty() {
    return this.todos.list.length === 0;
  }

  private isSatisfySerchFilter(todoItem, serchFilter: string) {
    if (serchFilter.trim().length === 0) {
      return true;
    }

    return todoItem.title.includes(serchFilter);
  }

  logChangeDetection() {
    console.log('...ch/d in list...' + JSON.stringify(this.todoList));
  }  
}
