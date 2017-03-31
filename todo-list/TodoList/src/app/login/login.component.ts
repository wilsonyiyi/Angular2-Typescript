import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";

  constructor(@Inject('auth') private service) { }

  ngOnInit() {
  }

  Click() {
    console.log('result :' + this.service.loginWithCredentials(this.username, this.password))
  }
}
