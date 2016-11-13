import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {ChartsModule} from 'ng2-charts/ng2-charts';

import {AppComponent} from './app.component';
import {IncomeComponent} from './endpoints/income/income.component';
import {routes} from './app.routes'
import {RouterModule} from "@angular/router";
import {StatisticsComponent} from './endpoints/statistics/statistics.component';

@NgModule({
    declarations: [
        AppComponent,
        IncomeComponent,
        StatisticsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes),
        MaterialModule.forRoot(),
        ChartsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
