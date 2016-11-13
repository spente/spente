import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

    // Doughnut
    doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    doughnutChartData: number[] = [350, 450, 100];
    doughnutChartType: string = 'doughnut';

    constructor() {
    }

    ngOnInit() {
    }

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

}
