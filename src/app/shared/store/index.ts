import { routerReducer, RouterState } from '@ngrx/router-store';
import { Action, ActionReducerMap } from '@ngrx/store';
import { todoFeatureKey, todosReducer, TodosState } from './todos.reducer';

export interface AppState {
  todos: TodosState;
  router: RouterState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState, Action> = {
  [todoFeatureKey]: todosReducer,
  router: routerReducer,
};
