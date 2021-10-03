import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  public fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://restapi.fr/api/ngrxtodos');
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    const { _id, ...newTodo } = todo;
    return this.http.patch<Todo>(
      `https://restapi.fr/api/ngrxtodos/${todo._id}`,
      newTodo
    );
  }

  public deleteTodo(todo: Todo): Observable<any> {
    return this.http.delete(`https://restapi.fr/api/ngrxtodos/${todo._id}`);
  }

  public addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('https://restapi.fr/api/ngrxtodos', todo);
  }
}
