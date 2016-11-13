import {IncomeComponent} from "./endpoints/income/income.component";
import {StatisticsComponent} from "./endpoints/statistics/statistics.component";

export const routes = [
    {path: 'income', component: IncomeComponent},
    {path: 'statistics', component: StatisticsComponent},
    {path: '**', redirectTo: '/income', pathMatch: 'full'},
];
