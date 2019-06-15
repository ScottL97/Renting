import { Component, OnInit } from '@angular/core';
import { BillService } from '../bill.service';
import { LoginService } from '../login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit {

  item;
  billId;
  userNames;
  constructor(
    private billService: BillService,
    private loginService: LoginService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.billId = params.billId;
    });
    this.item = this.billService.getItem(this.billId);
    this.userNames = "";
    var pay_ids = this.item.pay_users.split(';');
    for(let i in pay_ids) {
      this.userNames += this.loginService.userDict[pay_ids[i]] + " ";
    }
  }

}