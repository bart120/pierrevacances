import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Pierre & Vacances';
  user: User = null;

  constructor(private auth: AuthService) {

  }

  ngOnInit(): void {
    console.log('subscribe');
    this.auth.user.subscribe(
      data => {
        this.user = data;
      }
    );
  }

  logout(): void {
    this.auth.logout();
  }
}
