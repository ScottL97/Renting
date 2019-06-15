import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  ifLogin = false;
  userId = "000";
  userName = "guest";
  userNames = ""; //当前点击账单用户名
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
  //"001;002;003" -> "刘鑫昊 郑成杰 翟琨"
  updateUsersByIds(ids) {
    var that = this;
    $.post("./PHP/getUsersByIds.php", { ids: ids }, function(res) {
      if(res != null) {
        console.log("账单用户：" + res);
        that.userNames = res;
      }
    });
  }
}
