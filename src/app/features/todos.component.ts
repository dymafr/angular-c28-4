import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
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
