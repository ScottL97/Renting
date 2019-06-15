import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service'; 

@Injectable({
  providedIn: 'root'
})
export class BillService {

  unpaidBills = []; //未支付账单
  paidBills = []; //支付账单
  ifAll = false; //bill-list显示所有账单还是未支付账单
  unpaidValues = []; //{id: billId, value: price / pay_users.split(';').length}
  unpaidSum = 0.0;

  getItems() {
    var that = this;
    if(this.ifAll) {
      console.log("显示全部账单：");
      var arr = that.unpaidBills.concat(that.paidBills);
      console.log(arr);
      return arr;
    } else {
      console.log("显示未支付账单：");
      console.log(that.unpaidBills);
      return that.unpaidBills;
    }
  }
  updateUnpaidValue() {
    console.log("更新未支付金额");
    var that = this;
    that.unpaidSum = 0.0;
    that.unpaidValues = [];
    for(let i in that.unpaidBills) {
      var obj = {
        id: that.unpaidBills[i]['id'],
        value: that.unpaidBills[i]['price'] / that.unpaidBills[i]['pay_users'].split(';').length
      }
      that.unpaidSum += obj.value;
      that.unpaidValues.push(obj);
    }
    console.log(that.unpaidValues);
  }
  //获取单个账单，返回JSON数据
  getItem(id) {
    for(let index in this.unpaidBills) {
      if(this.unpaidBills[index].id == id) {
        console.log(this.unpaidBills[index]);
        return this.unpaidBills[index];
      }
    }
    for(let index in this.paidBills) {
      if(this.paidBills[index].id == id) {
        console.log(this.paidBills[index]);
        return this.paidBills[index];
      }
    }
  }
  //获取单个账单需支付的费用
  getItemValue(id) {
    var that = this;
    for(let i in that.unpaidValues) {
      if(id == that.unpaidValues[i]['id']) {
        return that.unpaidValues[i]['value'];
      }
    }
    return 0.0;
  }
  //判断某个账单是否已支付，返回true表示已支付
  ifPaid(id) {
    var that = this;
    var res = true; 
    for(let i in that.unpaidValues) {
      if(id == that.unpaidBills[i]['id']) {
        res = false;
      }
    }
    return res;
  }

  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) { }
  updateItems() {
    console.log("更新账单列表");
    var that = this;
    that.paidBills = [];
    that.unpaidBills = [];
    this.httpClient.get('./PHP/getBills.php').subscribe(res => {
      //根据用户id判断账单是否支付，将已支付的存入paidBills，未支付的存入unpaidBills
      for(let index in res) {
        //如果是账单的主人，则加入已支付数组
        if(this.loginService.userId == res[index]['bill_owner']) {
          that.paidBills.push(res[index]);
        } else { //如果不是账单的主人，则判断自己是否在pay_users中，如果不在则不加入任何数组，如果在则判断是否在paid_users中
          if(res[index]['pay_users'].indexOf(this.loginService.userId) != -1) {
            //如果在paid_users中，则加入已支付数组，否则加入未支付数组
            if(res[index]['paid_users'].indexOf(this.loginService.userId) != -1) {
              that.paidBills.push(res[index]);
            } else {
              that.unpaidBills.push(res[index]);
            }
          }
        }
      }
      this.updateUnpaidValue();
    });
  }

}