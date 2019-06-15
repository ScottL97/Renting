import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

}
