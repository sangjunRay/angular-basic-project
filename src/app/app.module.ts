import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevteamDetailComponent } from './devteam-detail/devteam-detail.component';
import { DevteamSearchComponent } from './devteam-search/devteam-search.component';
import { DevteamsComponent } from './devteams/devteams.component';
import { MessagesComponent } from './messages/messages.component';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {TeamService} from "./team.service";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DevteamDetailComponent,
    DevteamSearchComponent,
    DevteamsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
