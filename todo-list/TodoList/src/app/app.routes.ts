import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { DateComponent } from './date/date.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'todo',
        pathMatch: 'full'
    },
    {
        path: 'todo',
        component: TodoComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'date',
        component: DateComponent
    }
]

export const routing = RouterModule.forRoot(routes);