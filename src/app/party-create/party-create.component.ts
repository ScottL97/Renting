import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-party-create',
  templateUrl: './party-create.component.html',
  styleUrls: ['./party-create.component.css']
})
export class PartyCreateComponent implements OnInit {

  checkoutForm;
  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
      date: '',
      time: '',
      detail: '',
      budget: ''
    });
  }

  ngOnInit() {
  }
  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
    this.checkoutForm.reset();
  }
}