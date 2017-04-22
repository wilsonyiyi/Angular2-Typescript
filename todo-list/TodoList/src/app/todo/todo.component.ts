import { Component, OnInit, Inject } from '@angular/core';

// model 
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
	desc: string = '';
	todos: Todo[] = [];

	constructor(@Inject('todo') private service) { }

	ngOnInit() {
		this.getTodos();
	}
  
  	// addTodo
  	addTodo() {  
		this.service
			.addTodo(this.desc)
			.then(todo => { // todos, 是resolve获取的结果
				this.todos = [...this.todos, todo];
				this.desc = '';
			})
	}

	// toggleTodo
	toggleTodo(todo: Todo) {
		const i = this.todos.indexOf(todo);
		this.service
			.toggleTodo(todo)
			.then(t => {
				this.todos = [
				...this.todos.slice(0, i),
				t,
				...this.todos.slice(i + 1)
				];
			})
	}

	// removeTodo
	removeTodo(todo: Todo) {
		const i = this.todos.indexOf(todo);
		this.service
			.deleteTodoById(todo.id)
			.then(() => {
			this.todos = [
				...this.todos.slice(0, i),
				...this.todos.slice(i + 1)
			]
		})
	}
  
	// getTodos
	getTodos(): void {
		this.service
			.getTodos()
			.then(todos => this.todos = [...todos]);
	}
}
