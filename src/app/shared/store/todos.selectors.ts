import { Params } from '@angular/router';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo } from '../interfaces/todo.interface';
import { selectRouteParams } from './router.selector';
import { todoFeatureKey, TodosState } from './todos.reducer';

export const selectTodosFeature =
  createFeatureSelector<TodosState>(todoFeatureKey);

export const selectTodosData = createSelector(
  selectTodosFeature,
  (state: TodosState): Todo[] => {
    return state.data;
  }
);

export const selectTodo = createSelector(
  selectTodosData,
  selectRouteParams,
  (todos: Todo[], params: Params) => {
    const todoId = params['todoId'];
    if (todoId && todos.length) {
      return todos.find((t) => t._id === todoId);
    } else {
      return null;
    }
  }
);
