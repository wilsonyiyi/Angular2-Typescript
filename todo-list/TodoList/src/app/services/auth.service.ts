import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

<<<<<<< HEAD
  loginWithCredentials(username:string, password:string): boolean {
    if (username == "will") {
      return true
    }
    return false
  }

=======
  loginWithCredentials(username: string, password: string): boolean {
      if (username == "wangweiwei") {
          return true;
      }
      return false;    
  }
>>>>>>> dev_1.0
}
