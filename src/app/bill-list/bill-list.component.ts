import { Component, OnInit } from '@angular/core';
import { BillService } from '../bill.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {

  billItems = [];
  constructor(
    private billService: BillService,
    private loginService: LoginService
  ) { }

  ngOnInit() { 
    console.log("账单列表");
    this.billItems = this.billService.getItems();
  }

}