import { Component, OnInit } from '@angular/core';
import { BillService} from '../bill.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  constructor(
    private billService: BillService,
    private loginService: LoginService
  ) { }

  ngOnInit( ) {
    //每次路由到账单标签，bill-list组件中的账单列表变为所有账单
    this.billService.ifAll = true;
    this.billService.updateItems();
  }

}