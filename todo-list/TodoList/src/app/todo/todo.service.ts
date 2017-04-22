import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { UUID } from 'angular2-uuid';

// model
import { Todo } from './todo.model'; // Todo数据模型

// db
import { InMemoryTodoDbService } from './todo-data';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {

  // webApi地址
  private api_url = 'api/todos';
  private headers = new Headers({'Content-Type': 'application/json'});

  // todos: Todo[] = [];

  constructor(private http: Http) { }

  // Post /todos
  addTodo(desc: string): Promise<Todo> {
    let todo = {
      id: UUID.UUID(),
      desc: desc,
      completed: false
    };

    return this.http
            .post(this.api_url, JSON.stringify(todo), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Todo)
            .catch(this.handlerError);
  }

  // PUT /todos/:id
  toggleTodo(todo: Todo): Promise<Todo> {
    const url = `${this.api_url}/${todo.id}`;
    console.log('url: ' + url);

    let updateTodo = Object.assign({}, todo, {completed: !todo.completed});
    return this.http
            .put(url, JSON.stringify(updateTodo), {headers: this.headers})
            .toPromise()
            .then(() => updateTodo)
            .catch(this.handlerError);
  }

  // DELETE /todos/:id
  deleteTodoById(id: string): Promise<void> {
    const url = `${this.api_url}/${id}`;
    return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handlerError)
  }

  // GET /todos
  getTodos(): Promise<Todo[]> {
    return this.http.get(this.api_url)
            .toPromise()
            .then(res => res.json().data as Todo[])
            .catch(this.handlerError)
  }

  private handlerError(error: any): Promise<any> {
    console.error('An error occurred ', error );
    return Promise.reject(error.message || error);
  }

  // addTodo(todoItem: string): Todo[] {
  //   let todo = {
  //     id: UUID.UUID(),
  //     desc: todoItem,
  //     completed: false
  //   }
  //   this.todos.push(todo);

  //   return this.todos;
  // }
}
