import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from './shared/interfaces/todo.interface';
import {
  tryDeleteTodoAction,
  tryUpdateTodoAction,
  fetchTodosAction,
  tryAddTodoAction,
} from './shared/store/todos.actions';
import { selectTodosData } from './shared/store/todos.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public todos$: Observable<Todo[]> = this.store.select(selectTodosData);
  public message!: string;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(fetchTodosAction());
  }

  public addTodo() {
    this.store.dispatch(
      tryAddTodoAction({ todo: { message: this.message, done: false } })
    );
  }

  public updateTodo(todo: Todo) {
    const newTodo = { ...todo, done: !todo.done };
    this.store.dispatch(tryUpdateTodoAction({ todo: newTodo }));
  }

  public deleteTodo(todo: Todo) {
    this.store.dispatch(tryDeleteTodoAction({ todo }));
  }
}
