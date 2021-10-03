import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../shared/interfaces/todo.interface';
import {
  fetchTodosAction,
  tryAddTodoAction,
  tryDeleteTodoAction,
  tryUpdateTodoAction,
} from '../shared/store/todos.actions';
import { selectTodo, selectTodosData } from '../shared/store/todos.selectors';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  public todos$: Observable<Todo[]> = this.store.select(selectTodosData);
  public message!: string;
  public selectedTodo$: Observable<Todo | null | undefined> =
    this.store.select(selectTodo);

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
