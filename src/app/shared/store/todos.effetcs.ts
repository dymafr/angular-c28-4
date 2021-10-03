import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Todo } from '../interfaces/todo.interface';
import { TodosService } from '../services/todos.service';
import {
  fetchTodosAction,
  fetchTodosSuccessAction,
  errorTodoAction,
  tryAddTodoAction,
  addTodoAction,
  tryDeleteTodoAction,
  deleteTodoAction,
  tryUpdateTodoAction,
  updateTodoAction,
} from './todos.actions';

@Injectable()
export class TodoEffects {
  fetchTodosEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchTodosAction),
      switchMap(() =>
        this.todosService.fetchTodos().pipe(
          map((todos: Todo[]) => fetchTodosSuccessAction({ todos })),
          catchError((error) => of(errorTodoAction({ error })))
        )
      )
    )
  );

  addTodoEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tryAddTodoAction),
      switchMap(({ todo }: { todo: Todo }) =>
        this.todosService.addTodo(todo).pipe(
          map((todo: Todo) => addTodoAction({ todo })),
          catchError((error) => of(errorTodoAction({ error })))
        )
      )
    )
  );

  deleteTodoEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tryDeleteTodoAction),
      switchMap(({ todo }: { todo: Todo }) =>
        this.todosService.deleteTodo(todo).pipe(
          map(() => deleteTodoAction({ todo })),
          catchError((error) => of(errorTodoAction({ error })))
        )
      )
    )
  );

  updateTodoEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tryUpdateTodoAction),
      switchMap(({ todo }: { todo: Todo }) =>
        this.todosService.updateTodo(todo).pipe(
          map((todo: Todo) => updateTodoAction({ todo })),
          catchError((error) => of(errorTodoAction({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private todosService: TodosService) {}
}
