import { Component, OnInit } from '@angular/core';
import { BillService } from '../bill.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit {

  item;
  billId;
  constructor(
    private billService: BillService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.billId = params.billId;
    });
    this.item = this.billService.getItem(this.billId);
  }

}