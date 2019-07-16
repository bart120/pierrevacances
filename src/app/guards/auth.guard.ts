import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    private user: User;

    constructor(private auth: AuthService, private router: Router, private snack: MatSnackBar) {
        this.auth.user.subscribe(data => this.user = data);
        // this.auth.user.toPromise().then(data => this.user = data);
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (this.user === null) {
            this.snack.open('Accès interdit', 'ok', { duration: 3000, verticalPosition: 'top' });
            this.router.navigate(['/auth/login']);
            return false;
        }
        return true;
    }
}
