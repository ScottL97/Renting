import { Component, OnInit } from '@angular/core';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  constructor(
    private billService: BillService
  ) { }

  ngOnInit() {
  }

}