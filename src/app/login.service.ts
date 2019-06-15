import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  ifLogin = false;
  userId = "000";
  userName = "guest";
  constructor( ) { }
  userLogin(user, pwd) {
    var that = this;
    $.post("./PHP/login.php", { username: user, password: pwd }, function(res) {
      if(res != "000") {
        that.ifLogin = true;
        that.userId = res;
        that.userName = user;
        console.log("登录成功" + res + that.ifLogin);
      } else {
        that.ifLogin = false;
        console.log("登录失败");
      }
    });
  }
}
