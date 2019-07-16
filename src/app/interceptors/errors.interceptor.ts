import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private snack: MatSnackBar) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        req = req.clone({
            setHeaders: { 'Content-Type': 'application/json' }
        });
        // console.log('intercept');
        /*        const obs = next.handle(req);
                obs.subscribe(
                    data => console.log(data)
                );
                return obs;*/
        // if (!window.navigator.onLine) {
        return next.handle(req).pipe(
            catchError(err => {


                const code = err.statusCode;
                if (code == 401) {
                    // redirection login
                }
                console.log(err);
                const message = err.message || err.error.message || err.statusText;
                this.snack.open(`Erreur: ${message}.`, 'OK', { duration: 3000 });
                return throwError(`${code}: ${message}`);
            })
        );
        // }
    }
}