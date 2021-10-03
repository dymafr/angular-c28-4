import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo } from '../interfaces/todo.interface';
import { todoFeatureKey, TodosState } from './todos.reducer';

export const selectTodosFeature =
  createFeatureSelector<TodosState>(todoFeatureKey);

export const selectTodosData = createSelector(
  selectTodosFeature,
  (state: TodosState): Todo[] => {
    return state.data;
  }
);
