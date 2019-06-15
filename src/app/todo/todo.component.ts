import { Component, OnInit } from '@angular/core';
import { BillService } from '../bill.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  debts = [];
  constructor(
    private billService: BillService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    var that = this;
    that.debts = [];
    for(let i in this.billService.debts) {
      that.debts.push(this.billService.debts[i]);
    }
    console.log(that.debts);
  }

}
