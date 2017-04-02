import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule} from '@angular/router'; // 路由模块

// component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// service
import { AuthService } from './services/auth.service';
import { TodoService } from './todo/todo.service';

// route
import { routing } from './app.routes';
import { TodoComponent } from './todo/todo.component';

// db
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTodoDbService } from './todo/todo-data';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryTodoDbService),
    routing
  ],
  providers: [
    { provide: 'auth', useClass: AuthService},
    { provide: 'todo', useClass: TodoService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
