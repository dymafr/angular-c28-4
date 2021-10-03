import { createAction, props } from '@ngrx/store';
import { Todo } from '../interfaces/todo.interface';

export const fetchTodosAction = createAction('[ todos ] fetch todos');
export const fetchTodosSuccessAction = createAction(
  '[ todos ] fetch todos success',
  props<{ todos: Todo[] }>()
);

export const tryAddTodoAction = createAction(
  '[ todos ] try add todo',
  props<{ todo: Todo }>()
);

export const errorTodoAction = createAction(
  '[ todos ] error todos',
  props<{ error: any }>()
);

export const addTodoAction = createAction(
  '[ todos ] add todo',
  props<{ todo: Todo }>()
);

export const tryDeleteTodoAction = createAction(
  '[ todos ] try delete todo',
  props<{ todo: Todo }>()
);

export const deleteTodoAction = createAction(
  '[ todos ] delete todo',
  props<{ todo: Todo }>()
);

export const tryUpdateTodoAction = createAction(
  '[ todos ] try update todo',
  props<{ todo: Todo }>()
);

export const updateTodoAction = createAction(
  '[ todos ] update todo',
  props<{ todo: Todo }>()
);
