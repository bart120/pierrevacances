import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  @ViewChild('password', { static: false })
  passwd: ElementRef;

  user: any = { email: 'test@test.com' };

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }



  onLogin(mail) {
    console.log({ mail: mail, pwd: this.passwd.nativeElement.value });
    this.auth.login(mail, this.passwd.nativeElement.value);
  }

  onSubmit(f) {
    console.log(this.user);
    if (f.valid) {
      this.auth.login(this.user.login, this.user.password);
    }
  }

}
