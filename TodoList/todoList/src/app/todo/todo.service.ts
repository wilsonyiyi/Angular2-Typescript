import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Todo } from './todo.model';
import { UUID } from 'angular2-uuid';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {
  
  // 定义假WebAPI地址， 这个定义随意， 只要确保无法访问的地址就行
  private api_url = 'api/todos';
  private headers = new Headers({'Content-Type': 'application/json'})

  constructor(private http: Http) { }
  
  // POST
  addTodo(todoItem:string): Promise<Todo> {
    let todo = {
      id: UUID.UUID(),
      desc: todoItem,
      complete: false
    };

    return this.http  
           .post(this.api_url, JSON.stringify(todo), {headers: this.headers})
           .toPromise()
           .then(res=> res.json().data as Todo)
           .catch(this.handleError) 

    // this.todos.push(todo);

    // return this.todos;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error)
  }
}
