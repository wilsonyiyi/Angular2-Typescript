import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
InMemoryWebApiModule.forRoot(InMemoryTodoDbService);

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { TodoService } from './todo/todo.service';
import { routing } from './app.routes';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTodoDbService } from './todo/todo-data';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    {provide: 'todo', useClass: TodoService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
