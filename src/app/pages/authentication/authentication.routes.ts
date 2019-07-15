import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const ROUTES: Routes = [
    {
        path: 'auth', children: [
            { path: 'login', component: LoginComponent }
        ]
    }
];
