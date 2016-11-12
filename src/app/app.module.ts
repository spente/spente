import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule } from '@angular/material';

import {AppComponent} from './app.component';
import {IncomeComponent} from './endpoints/income/income.component';
import {routes} from './app.routes'
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    IncomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
