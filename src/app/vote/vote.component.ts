import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

}
