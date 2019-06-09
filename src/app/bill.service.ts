import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  items;
  ifAll = true;
  addToBillList(bill) {
    this.items.push(bill);
  }
  getItems() {
    return this.items;
  }
  getItem(id) {
    for(let index in this.items) {
      if(this.items[index].id == id) {
        console.log(this.items[index]);
        return this.items[index];
      }
    }
  }
  changeDisplayMode(mode) {
    this.ifAll = mode;
  }
  constructor(
    private httpClient: HttpClient
  ) { 
    httpClient.get('../assets/bill.json').subscribe(res => {
      this.items = res;
    });
  }

}