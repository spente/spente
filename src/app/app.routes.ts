import {IncomeComponent} from "./endpoints/income/income.component";
import {StatisticsComponent} from "./endpoints/statistics/statistics.component";
import {TodoComponent} from "./endpoints/todo/todo.component";

export const routes = [
    {path: 'income', component: IncomeComponent},
    {path: 'statistics', component: StatisticsComponent},
    {path: 'todo', component: TodoComponent},
    {path: '**', redirectTo: '/income', pathMatch: 'full'},
];
