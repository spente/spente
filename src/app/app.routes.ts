import {IncomeComponent} from "./endpoints/income/income.component";
import {StatisticsComponent} from "./endpoints/statistics/statistics.component";
import {TodoComponent} from "./endpoints/todo/todo.component";
import {ExpensesComponent} from "./endpoints/expenses/expenses.component";

export const routes = [
    {path: 'expenses', component: ExpensesComponent},
    {path: 'income', component: IncomeComponent},
    {path: 'statistics', component: StatisticsComponent},
    {path: 'todo', component: TodoComponent},
    {path: '**', redirectTo: '/expenses', pathMatch: 'full'},
];
