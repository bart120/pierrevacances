import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private subject: BehaviorSubject<User> = new BehaviorSubject<User>(null);

    get user(): Observable<User> {
        return this.subject.asObservable();
    }

    constructor(private router: Router) {
        const u = JSON.parse(sessionStorage.getItem('USER'));
        if (u != null) {
            console.log('next service');
            this.subject.next(u);
        }
    }

    login(username: string, password: string): void {
        //appel serveur
        const user: User = { name: username, token: 'SDFSF9R48TURGJFI8UTR', login: '' };
        sessionStorage.setItem('USER', JSON.stringify(user));
        this.subject.next(user);
    }

    logout(): void {

        sessionStorage.removeItem('USER');
        this.subject.next(null);
        this.router.navigate(['/home']);
    }
}
