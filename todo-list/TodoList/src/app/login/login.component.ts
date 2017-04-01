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
    console.log("the result is :" + this.service.loginWithCredentials(this.username, this.password))
  }

  onSubmit(formvalue) {
    console.log('auth result is :' 
      + this.service.loginWithCredentials(formvalue.login.username, formvalue.login.password))
  }
}
