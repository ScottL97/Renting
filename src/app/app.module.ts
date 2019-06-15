import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { PartyComponent } from './party/party.component';
import { BillService } from './bill.service';
import { BillDetailsComponent } from './bill-details/bill-details.component';
import { PartyListComponent } from './party-list/party-list.component';
import { PartyCreateComponent } from './party-create/party-create.component';
import { BillComponent } from './bill/bill.component';
import { BillCreateComponent } from './bill-create/bill-create.component';
import { VoteComponent } from './vote/vote.component';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: FrontpageComponent },
      { path: 'bill', component: BillComponent },
      { path: 'bill-list', component: BillListComponent },
      { path: 'bill-details/:billId', component: BillDetailsComponent },
      { path: 'bill-create', component: BillCreateComponent },
      { path: 'party', component: PartyComponent },
      { path: 'party-list', component: PartyListComponent },
      { path: 'party-create', component: PartyCreateComponent },
      { path: 'vote', component: VoteComponent },
      { path: 'todo', component: TodoComponent }
    ])
  ],
  declarations: [ AppComponent, TopBarComponent, FrontpageComponent, BillListComponent, PartyComponent, BillDetailsComponent, PartyListComponent, PartyCreateComponent, BillComponent, BillCreateComponent, VoteComponent, TodoComponent, LoginComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BillService]
})
export class AppModule { 
  
}
