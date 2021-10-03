import { Routes } from '@angular/router';
import { TodosComponent } from './features/todos.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
  {
    path: ':todoId',
    component: TodosComponent,
  },
];
