import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  @ViewChild('password', { static: false })
  passwd: ElementRef;

  user: any = { email: 'test@test.com' };

  constructor() { }

  ngOnInit() {
  }

  onLogin(mail) {
    console.log({ mail: mail, pwd: this.passwd.nativeElement.value });
  }

  onSubmit(f) {
    console.log(this.user);
    if (f.valid) {

    }
  }

}
