import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { MatchDetailComponent } from './resources/matches/match-detail/match-detail.component';
import { MatchListComponent } from './resources/matches/match-list/match-list.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MatchDetailComponent,
    MatchListComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
