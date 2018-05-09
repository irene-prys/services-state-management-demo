import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TodoList } from './../../models/todo-list.model';

@Component({
  selector: 'todo-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionsComponent {
  titleToAdd: string;
  constructor(private todos: TodoList, private ref: ChangeDetectorRef) {
    //  this.ref.detach();
  }

  add(event) {
    if (event.keyCode === 13) {
      this.todos.addNew(this.titleToAdd);
      this.titleToAdd = '';
    }
  }

  logChangeDetection() {
    console.log('...ch/d in actions...');
  }
}