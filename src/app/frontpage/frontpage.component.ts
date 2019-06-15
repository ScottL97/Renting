import { Component, OnInit } from '@angular/core';
import { BillService } from '../bill.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  constructor(
    private billService: BillService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    //每次点击首页检查登录状态并更新账单信息
    //每次路由到首页标签，bill-list组件中的账单列表变为未支付的
    this.billService.ifAll = false;
    this.billService.updateItems();
  }

}